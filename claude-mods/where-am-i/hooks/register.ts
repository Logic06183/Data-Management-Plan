import type { EngineInterface, Register } from 'claude-code'

import { absoluteStartDir, formatStatus, machineFrom, parseAheadBehind, repoName } from './format'
import type { Snapshot } from './format'

type Config = { hubHost: string; hubPattern: string; refreshMs: number }

// Module variables are fine here: everything is recomputed after a reload.
let snap: Snapshot = { machine: 'unknown' }
let lastNetCheck = 0

async function run($: EngineInterface, argv: string[], timeoutMs = 5000) {
  try {
    return await $.process.run(argv, { timeoutMs })
  } catch {
    return null
  }
}

function paint($: EngineInterface) {
  $.ui.status(formatStatus(snap))
}

async function refreshMachine($: EngineInterface, cfg: Config) {
  const uname = await run($, ['uname', '-s'])
  const host = await run($, ['hostname'])
  snap.machine = machineFrom({
    remoteEnv: await $.env.get('CLAUDE_CODE_REMOTE'),
    uname: uname?.stdout ?? '',
    hostname: host?.stdout.trim() ?? '',
    hubPattern: cfg.hubPattern,
  })
}

async function refreshGit($: EngineInterface) {
  const repo = await $.session.repo()
  if (!repo) {
    snap = { ...snap, repo: undefined }
    return
  }
  const branch = await run($, ['git', '-C', repo.root, 'rev-parse', '--abbrev-ref', 'HEAD'])
  const counts = await run($, ['git', '-C', repo.root, 'rev-list', '--left-right', '--count', '@{u}...HEAD'])
  const status = await run($, ['git', '-C', repo.root, 'status', '--porcelain'])
  const ab = counts?.exitCode === 0 ? parseAheadBehind(counts.stdout) : undefined
  snap = {
    ...snap,
    repo: repoName(repo.remote, repo.root),
    branch: branch?.stdout.trim() || '?',
    ahead: ab?.ahead,
    behind: ab?.behind,
    dirty: status ? status.stdout.split('\n').filter(Boolean).length : undefined,
  }
}

async function refreshNet($: EngineInterface, cfg: Config) {
  lastNetCheck = await $.clock.now()
  const gh = await run($, ['gh', 'auth', 'status'], 8000)
  snap.gh = gh === null ? null : gh.exitCode === 0
  if (cfg.hubHost && snap.machine !== 'hub') {
    const nc = await run($, ['nc', '-z', '-w', '2', cfg.hubHost, '22'], 5000)
    snap.hub = nc === null ? null : nc.exitCode === 0
  }
}

async function refreshUsage($: EngineInterface) {
  const usage = await $.session.usage()
  snap.contextPercent = usage.context.percent
  snap.costUsd = usage.cost?.usd
}

async function refreshAll($: EngineInterface, cfg: Config) {
  await refreshMachine($, cfg)
  await refreshGit($)
  await refreshUsage($)
  await refreshNet($, cfg)
  paint($)
}

async function refreshNetAndPaint($: EngineInterface, cfg: Config) {
  await refreshNet($, cfg)
  paint($)
}

export const register: Register = (on, options) => {
  const cfg: Config = {
    hubHost: String(options.hubHost ?? '').trim(),
    hubPattern: String(options.hubHostnamePattern ?? ''),
    refreshMs: Math.max(30, Number(options.refreshSeconds) || 120) * 1000,
  }

  on('session.start', async ($, e, next) => {
    await $.command.register({ name: 'whereami', description: 'Refresh the where-am-i status line now', immediate: true })
    const result = await next(e)
    void refreshAll($, cfg)
    $.clock.every(cfg.refreshMs, () => void refreshNetAndPaint($, cfg))
    return result
  })

  on('command.run', { command: 'whereami' }, async $ => {
    await refreshAll($, cfg)
    return { text: formatStatus(snap) }
  })

  on('turn.complete', async ($, e, next) => {
    const result = await next(e)
    await refreshGit($)
    await refreshUsage($)
    if ((await $.clock.now()) - lastNetCheck > cfg.refreshMs) await refreshNet($, cfg)
    paint($)
    return result
  })

  on('tool.call', { tool: 'Bash' }, async ($, e, next) => {
    // Commands written on one machine often name paths that only exist on another.
    const dir = absoluteStartDir(e.command)
    if (dir && !dir.includes('$') && !(await $.fs.exists(dir))) {
      return {
        deny:
          `where-am-i: ${dir} does not exist on this machine (${snap.machine}). ` +
          'The command was probably written for another machine (Mac, UCT hub or cloud). ' +
          'Check with the user where it should run instead of guessing a new path.',
      }
    }
    const ran = await next(e)
    if (/\bgit\b/.test(e.command)) {
      await refreshGit($)
      paint($)
    }
    return ran
  })
}
