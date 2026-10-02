// Pure pieces of the status line, kept apart from the hooks so tests reach them.

export type Machine = 'Mac' | 'hub' | 'cloud' | string

export type Snapshot = {
  machine: Machine
  repo?: string
  branch?: string
  ahead?: number
  behind?: number
  dirty?: number
  gh?: boolean | null
  hub?: boolean | null
  contextPercent?: number
  costUsd?: number
}

export function machineFrom(opts: { remoteEnv?: string; uname: string; hostname: string; hubPattern: string }): Machine {
  if (opts.remoteEnv === 'true') return 'cloud'
  let isHub = false
  try {
    isHub = opts.hubPattern !== '' && new RegExp(opts.hubPattern, 'i').test(opts.hostname)
  } catch {
    isHub = false
  }
  if (isHub) return 'hub'
  if (opts.uname.trim() === 'Darwin') return 'Mac'
  return opts.hostname.split('.')[0] || 'unknown'
}

export function parseAheadBehind(out: string): { ahead: number; behind: number } | undefined {
  const m = out.trim().match(/^(\d+)\s+(\d+)$/)
  if (!m) return undefined
  return { behind: Number(m[1]), ahead: Number(m[2]) }
}

export function repoName(remote: string | null | undefined, root: string): string {
  const fromRemote = remote?.replace(/\.git$/, '').split(/[/:]/).pop()
  return fromRemote || root.split('/').filter(Boolean).pop() || root
}

const ICON: Record<string, string> = { Mac: '💻 Mac', hub: '🏛 hub', cloud: '☁ cloud' }

export function formatStatus(s: Snapshot): string {
  const parts: string[] = [ICON[s.machine] ?? `🖥 ${s.machine}`]
  if (s.repo) {
    let repo = `${s.repo}@${s.branch ?? '?'}`
    if (s.ahead) repo += ` ↑${s.ahead}`
    if (s.behind) repo += ` ↓${s.behind}`
    if (s.dirty) repo += ` ✎${s.dirty}`
    parts.push(repo)
  }
  if (s.gh !== undefined) parts.push(s.gh === null ? 'gh –' : s.gh ? 'gh ✓' : 'gh ✗ login')
  if (s.hub !== undefined && s.machine !== 'hub') parts.push(s.hub === null ? 'hub ?' : s.hub ? 'hub ✓' : 'hub ✗ VPN')
  if (s.contextPercent !== undefined) parts.push(`ctx ${s.contextPercent}%`)
  if (s.costUsd !== undefined) parts.push(`$${s.costUsd.toFixed(2)}`)
  return parts.join(' · ')
}

// The directory a command starts in, when it opens with `cd /abs/path &&` or `git -C /abs/path`.
export function absoluteStartDir(command: string): string | undefined {
  const m =
    command.match(/^\s*cd\s+("\/[^"]+"|'\/[^']+'|\/\S+)\s*(&&|;|$)/) ??
    command.match(/\bgit\s+-C\s+("\/[^"]+"|'\/[^']+'|\/\S+)/)
  return m?.[1]?.replace(/^["']|["']$/g, '')
}
