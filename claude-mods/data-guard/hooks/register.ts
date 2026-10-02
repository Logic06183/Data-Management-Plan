import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import {
  addedLinesByFile,
  buildConfig,
  classifyCommand,
  ignoreMatcher,
  report,
  riskyPath,
  scanText,
} from './scan'
import type { Finding, Outbound, ScanConfig } from './scan'

const allowance = atom({ plugin: 'data-guard', key: 'allowance' } as const, null)
const EMPTY_TREE = '4b825dc642cb6eb9a060e54bf8d69288fbee4904'

// `cd dir && git push` and `git -C dir push` both run somewhere other than the session's cwd.
function workDir(command: string): string | undefined {
  const cd = command.match(/^\s*cd\s+("[^"]+"|'[^']+'|\S+)\s*&&/)
  if (cd?.[1]) return cd[1].replace(/^["']|["']$/g, '')
  const dashC = command.match(/\bgit\s+-C\s+("[^"]+"|'[^']+'|\S+)/)
  if (dashC?.[1]) return dashC[1].replace(/^["']|["']$/g, '')
  return undefined
}

async function git($: EngineInterface, argv: string[], cwd?: string) {
  try {
    return await $.process.run(['git', ...argv], { cwd, timeoutMs: 20000 })
  } catch {
    return { exitCode: 1, stdout: '', stderr: 'git did not run' }
  }
}

// What a push would send: commits ahead of upstream, or the whole history when there is none.
async function outgoingRange($: EngineInterface, cwd: string | undefined, kind: Outbound) {
  if (kind === 'push') {
    const up = await git($, ['rev-parse', '--abbrev-ref', '--symbolic-full-name', '@{u}'], cwd)
    if (up.exitCode === 0 && up.stdout.trim()) return `${up.stdout.trim()}..HEAD`
  }
  return 'HEAD'
}

async function scanGit(
  $: EngineInterface,
  cwd: string | undefined,
  kind: Outbound,
  cfg: ScanConfig,
): Promise<Finding[]> {
  const range = await outgoingRange($, cwd, kind)
  const findings: Finding[] = []

  // History, not just the net diff: a file added then deleted still ships in the commits.
  const names = await git($, ['log', '--name-only', '--format=', range], cwd)
  const seen = new Set<string>()
  for (const name of names.stdout.split('\n').map(s => s.trim()).filter(Boolean)) {
    if (seen.has(name)) continue
    seen.add(name)
    const risk = riskyPath(name)
    if (risk) findings.push({ kind: risk, where: name, sample: 'in commit history' })
  }

  const patch = await git($, ['log', '-p', '--format=', '--no-color', range], cwd)
  for (const [file, added] of addedLinesByFile(patch.stdout)) {
    findings.push(...scanText(added, file, cfg))
  }

  const ignore = await git($, ['show', 'HEAD:.dataguardignore'], cwd)
  if (ignore.exitCode === 0 && ignore.stdout.trim()) {
    const isIgnored = ignoreMatcher(ignore.stdout)
    return findings.filter(f => !isIgnored(f.where))
  }

  if (range === 'HEAD' && findings.length === 0 && patch.stdout === '') {
    // A repo with no commits yet, or git unavailable: scan the empty-tree diff as a fallback.
    const diff = await git($, ['diff', '--no-color', EMPTY_TREE, 'HEAD'], cwd)
    for (const [file, added] of addedLinesByFile(diff.stdout)) {
      findings.push(...scanText(added, file, cfg))
    }
  }
  return findings
}

async function isAllowed($: EngineInterface): Promise<boolean> {
  const a = await read($, allowance)
  return a !== null && a.until > (await $.clock.now())
}

function denyText(kind: Outbound, findings: readonly Finding[]): string {
  const what = kind === 'push' ? 'push' : kind === 'publicise' ? 'make this repo public' : 'upload'
  return [
    `data-guard blocked this ${what}: the outgoing content looks sensitive.`,
    report(findings),
    'Do not try another route round this. Tell the user what was found and suggest a fix',
    '(remove or rewrite the commits, anonymise, or add the file to .gitignore).',
    'If the user confirms it is safe, they can type /data-guard allow to permit outbound actions for 10 minutes.',
  ].join('\n')
}

export const register: Register = (on, options) => {
  const cfg = buildConfig(options)

  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'data-guard',
      description: 'Data guard: status, or "allow [minutes]" to permit outbound actions briefly',
      argumentHint: '[allow [minutes] | off]',
      immediate: true,
    })
    return next(e)
  })

  on('command.run', { command: 'data-guard' }, async ($, e) => {
    const [verb, mins] = e.args.trim().split(/\s+/)
    if (verb === 'allow') {
      const minutes = Math.min(60, Math.max(1, Number(mins) || 10))
      const until = (await $.clock.now()) + minutes * 60000
      await update($, allowance, () => ({ until, reason: 'allowed by the person' }))
      $.ui.status(`data-guard: open for ${minutes} min`)
      $.clock.after(minutes * 60000, () => $.ui.status(undefined))
      return { text: `Outbound actions allowed for ${minutes} minutes.` }
    }
    if (verb === 'off') {
      await update($, allowance, () => null)
      $.ui.status(undefined)
      return { text: 'Data guard is back on.' }
    }
    const open = await isAllowed($)
    return {
      text: open
        ? 'Data guard: temporarily allowing outbound actions. /data-guard off to close.'
        : `Data guard: on. Watching git push, public repos, uploads and Artifact publishes. ${cfg.denyTerms.length} deny-list terms; ID pattern ${cfg.idPattern ? 'set' : 'off'}.`,
    }
  })

  on('tool.call', { tool: 'Bash' }, async ($, e, next) => {
    const kind = classifyCommand(e.command)
    if (!kind || (await isAllowed($))) return next(e)

    const cwd = workDir(e.command)
    const findings = kind === 'upload' ? [] : await scanGit($, cwd, kind, cfg)

    // Uploads name their files on the command line: check those paths and their text.
    if (kind === 'upload') {
      for (const token of e.command.split(/\s+/)) {
        const path = token.replace(/^@|^["']|["']$/g, '')
        const risk = riskyPath(path)
        if (risk) findings.push({ kind: risk, where: path, sample: 'named in the command' })
      }
      findings.push(...scanText(e.command, 'the command', cfg))
    }

    if (kind === 'publicise' && findings.length === 0) {
      // Making a repo public is one-way in practice (forks, caches): always ask.
      return {
        deny: 'data-guard: making a repository public needs the person to confirm first. Ask them, and if they agree they can type /data-guard allow.',
      }
    }
    if (findings.length === 0) return next(e)

    $.ui.toast(`data-guard blocked a ${kind}: ${findings.length} finding(s)`, { timeoutMs: 8000 })
    return { deny: denyText(kind, findings) }
  })

  on('tool.call', async ($, e, next) => {
    if (String(e.tool) !== 'Artifact' || (await isAllowed($))) return next(e)
    const path = (e as unknown as { file_path?: unknown }).file_path
    if (typeof path !== 'string') return next(e)
    let text = ''
    try {
      text = await $.fs.read(path)
    } catch {
      return next(e)
    }
    const findings = scanText(text, path, cfg)
    if (findings.length === 0) return next(e)
    $.ui.toast(`data-guard blocked an Artifact publish: ${findings.length} finding(s)`, { timeoutMs: 8000 })
    return { deny: denyText('upload', findings) }
  })
}
