import type { EngineInterface, Register } from 'claude-code'

import { dataRefsInScript, describe, isOutput, isRunner, latestByOutput, parseLedger, parseRun, staleReasons } from './ledger'
import type { Hashed, RecordEntry } from './ledger'

async function run($: EngineInterface, argv: string[], cwd: string, stdin?: string) {
  try {
    return await $.process.run(argv, { cwd, stdin, timeoutMs: 30000 })
  } catch {
    return null
  }
}

function joinPath(base: string, rel: string): string {
  if (rel.startsWith('/')) return rel
  const parts = base.split('/')
  for (const seg of rel.split('/')) {
    if (seg === '..') parts.pop()
    else if (seg !== '.' && seg !== '') parts.push(seg)
  }
  return parts.join('/') || '/'
}

function relTo(root: string, abs: string): string {
  return abs === root ? '.' : abs.startsWith(root + '/') ? abs.slice(root.length + 1) : abs
}

// Content hashes (git's blob hash, which works outside a repo too) for paths relative to root.
async function hashAll($: EngineInterface, root: string, paths: readonly string[]): Promise<Map<string, string | null>> {
  const result = new Map<string, string | null>()
  const present: string[] = []
  for (const p of paths) {
    if (await $.fs.exists(joinPath(root, p))) present.push(p)
    else result.set(p, null)
  }
  if (present.length) {
    const out = await run($, ['git', 'hash-object', '--stdin-paths'], root, present.join('\n') + '\n')
    const hashes = out?.exitCode === 0 ? out.stdout.trim().split('\n') : []
    present.forEach((p, i) => result.set(p, hashes[i] ?? null))
  }
  return result
}

function toHashed(paths: readonly string[], hashes: Map<string, string | null>): Hashed[] {
  return paths.map(path => ({ path, hash: hashes.get(path) ?? null }))
}

async function context($: EngineInterface, ledgerDir: string) {
  const repo = await $.session.repo()
  const root = repo?.root ?? (await $.session.cwd())
  const key = (repo?.remote?.replace(/\.git$/, '').split(/[/:]/).slice(-2).join('-') || root.split('/').pop() || 'no-repo').replace(/[^\w.-]/g, '_')
  const home = (await $.env.get('HOME')) ?? ''
  const dir = ledgerDir.replace(/^~(?=\/|$)/, home).replace(/\/$/, '')
  return { root, hasRepo: repo !== null, ledger: `${dir}/${key}.jsonl`, dir }
}

async function readLedger($: EngineInterface, path: string): Promise<RecordEntry[]> {
  try {
    return parseLedger(await $.fs.read(path))
  } catch {
    return []
  }
}

async function appendLedger($: EngineInterface, dir: string, path: string, entry: RecordEntry) {
  let existing = ''
  try {
    existing = await $.fs.read(path)
  } catch {
    await run($, ['mkdir', '-p', dir], '/')
  }
  await $.fs.write(path, existing + JSON.stringify(entry) + '\n')
}

async function machineName($: EngineInterface, root: string): Promise<string> {
  if ((await $.env.get('CLAUDE_CODE_REMOTE')) === 'true') return 'cloud'
  const uname = await run($, ['uname', '-s'], root)
  if (uname?.stdout.trim() === 'Darwin') return 'Mac'
  const host = await run($, ['hostname'], root)
  return host?.stdout.trim() || 'unknown'
}

async function record($: EngineInterface, ledgerDir: string, command: string, marker: string, startCwd: string) {
  const ctx = await context($, ledgerDir)
  const found = await run($, ['find', '.', '-type', 'f', '-newer', marker, '-not', '-path', '*/.git/*'], ctx.root)
  const outputs = (found?.stdout ?? '')
    .split('\n')
    .map(p => p.replace(/^\.\//, '').trim())
    .filter(p => p && isOutput(p))
    .slice(0, 50)
  if (outputs.length === 0) return

  const parsed = parseRun(command)
  const relCwd = relTo(ctx.root, startCwd)
  const fromCwd = (p: string) => relTo(ctx.root, joinPath(joinPath(ctx.root, relCwd), p))
  const script = parsed.script ? fromCwd(parsed.script) : undefined
  let inputs = parsed.dataArgs.map(fromCwd)
  if (script) {
    try {
      const text = await $.fs.read(joinPath(ctx.root, script))
      inputs = [...inputs, ...dataRefsInScript(text).map(fromCwd)]
    } catch {
      // a notebook or a script outside the repo: inputs from the command line only
    }
  }
  inputs = [...new Set(inputs)].filter(p => !outputs.includes(p)).slice(0, 25)

  const hashes = await hashAll($, ctx.root, [...(script ? [script] : []), ...inputs, ...outputs])
  const head = ctx.hasRepo ? await run($, ['git', 'rev-parse', '--short', 'HEAD'], ctx.root) : null
  const status = ctx.hasRepo ? await run($, ['git', 'status', '--porcelain', '--untracked-files=no'], ctx.root) : null

  await appendLedger($, ctx.dir, ctx.ledger, {
    at: await $.clock.now(),
    machine: await machineName($, ctx.root),
    cwd: relCwd,
    command,
    commit: head?.exitCode === 0 ? head.stdout.trim() : '',
    isDirty: Boolean(status?.stdout.trim()),
    script: script ? { path: script, hash: hashes.get(script) ?? null } : null,
    inputs: toHashed(inputs, hashes),
    env: parsed.env,
    outputs: toHashed(outputs, hashes),
  })
  $.ui.toast(`provenance: recorded ${outputs.length} output${outputs.length === 1 ? '' : 's'}${script ? ` from ${script}` : ''}`)
}

async function check($: EngineInterface, ledgerDir: string): Promise<string> {
  const ctx = await context($, ledgerDir)
  const latest = latestByOutput(await readLedger($, ctx.ledger))
  if (latest.size === 0) return 'Nothing recorded yet for this repo.'
  const paths = new Set<string>()
  for (const [out, r] of latest) {
    paths.add(out)
    if (r.script) paths.add(r.script.path)
    for (const i of r.inputs) paths.add(i.path)
  }
  const now = await hashAll($, ctx.root, [...paths])
  const stale: string[] = []
  const missing: string[] = []
  for (const [out, r] of latest) {
    if (now.get(out) === null) {
      missing.push(out)
      continue
    }
    const reasons = staleReasons(r, out, now)
    if (reasons.length) stale.push(`✗ ${out}: ${reasons.join('; ')}`)
  }
  const fresh = latest.size - stale.length - missing.length
  return [
    `${fresh} of ${latest.size} recorded outputs match what made them.`,
    ...stale,
    ...(missing.length ? [`Gone from disk: ${missing.join(', ')}`] : []),
  ].join('\n')
}

export const register: Register = (on, options) => {
  const ledgerDir = String(options.ledgerDir || '~/.claude/provenance')

  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'provenance',
      description: 'What made this file? /provenance <file>, /provenance check, or the last 10 outputs',
      argumentHint: '[file | check]',
    })
    return next(e)
  })

  on('tool.call', { tool: 'Bash' }, async ($, e, next) => {
    if (e.run_in_background || !isRunner(e.command)) return next(e)
    const tmp = (await $.env.get('TMPDIR')) || '/tmp'
    const marker = `${tmp.replace(/\/$/, '')}/claude-provenance-${await $.clock.now()}`
    const cwd = await $.session.cwd()
    const cd = e.command.match(/^\s*cd\s+("[^"]+"|'[^']+'|\S+)\s*&&/)?.[1]?.replace(/^["']|["']$/g, '')
    try {
      await $.fs.write(marker, '')
    } catch {
      return next(e)
    }
    const ran = await next(e)
    if (ran.deny === undefined && !ran.isError) {
      try {
        await record($, ledgerDir, e.command, marker, cd ? joinPath(cwd, cd) : cwd)
      } catch {
        // never let bookkeeping break the command's result
      }
    }
    await run($, ['rm', '-f', marker], '/')
    return ran
  })

  on('command.run', { command: 'provenance' }, async ($, e) => {
    const arg = e.args.trim()
    if (arg === 'check') return { text: await check($, ledgerDir) }
    const ctx = await context($, ledgerDir)
    const records = await readLedger($, ctx.ledger)
    if (records.length === 0) return { text: `Nothing recorded yet. The ledger fills as analysis scripts write outputs (${ctx.ledger}).` }
    const latest = latestByOutput(records)
    if (arg) {
      const matches = [...latest.entries()].filter(([path]) => path === arg || path.endsWith('/' + arg) || path.endsWith(arg))
      if (matches.length === 0) return { text: `No record for ${arg}. It may predate the ledger or have been made outside Claude Code.` }
      return { text: matches.map(([path, r]) => describe(r, path)).join('\n\n') }
    }
    const recent = records.slice(-10).reverse()
    return { text: recent.map(r => describe(r)).join('\n\n') }
  })
}
