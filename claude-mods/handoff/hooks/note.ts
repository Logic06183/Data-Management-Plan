import type { Handoff } from '../types'

export const PROMPT = `Write a handoff note so a fresh session (possibly on another machine, or in Cowork) can carry on this work without re-reading this conversation.
Use exactly these Markdown headings, British English, terse bullet points, no preamble:

## Goal
(one line: what we are ultimately trying to achieve)
## Where things stand
(what is done, what is half-done, what failed and why)
## Files, data and settings
(scripts, notebooks, output files, data paths, environment variables, Databricks run IDs, commit hashes that matter; paths only, never data values or participant details)
## Open decisions
(each decision that is waiting on the user, as "- question? (options)"; write "- none" if there are none)
## Next step
(the single next action)`

export type Facts = {
  machine: string
  repo: string
  branch?: string
  head?: string
  remote?: string | null
  dirty: string[]
}

export function factsBlock(f: Facts, at: Date): string {
  const lines = [
    `# Handoff: ${f.repo}`,
    '',
    `- When: ${at.toISOString().replace('T', ' ').slice(0, 16)} UTC`,
    `- Machine: ${f.machine}`,
  ]
  if (f.branch) lines.push(`- Branch: ${f.branch}${f.head ? ` @ ${f.head}` : ''}`)
  if (f.remote) lines.push(`- Remote: ${f.remote}`)
  if (f.dirty.length) {
    const shown = f.dirty.slice(0, 15).join(', ')
    lines.push(`- Uncommitted: ${shown}${f.dirty.length > 15 ? ` (+${f.dirty.length - 15} more)` : ''}`)
  }
  return lines.join('\n')
}

export function section(text: string, heading: string): string {
  const re = new RegExp(`##\\s*${heading}\\s*\\n([\\s\\S]*?)(?=\\n##\\s|$)`, 'i')
  return text.match(re)?.[1]?.trim() ?? ''
}

export function decisionsOf(text: string): string[] {
  return section(text, 'Open decisions')
    .split('\n')
    .map(l => l.replace(/^\s*[-*]\s*/, '').trim())
    .filter(l => l && !/^none\.?$/i.test(l))
}

export function goalOf(text: string): string {
  return section(text, 'Goal').split('\n')[0]?.replace(/^\s*[-*]\s*/, '') ?? ''
}

export function ago(ms: number): string {
  const m = Math.round(ms / 60000)
  if (m < 60) return `${m} min ago`
  const h = Math.round(m / 60)
  if (h < 48) return `${h} h ago`
  return `${Math.round(h / 24)} days ago`
}

export function repoKey(remote: string | null | undefined, root: string): string {
  const fromRemote = remote?.replace(/\.git$/, '').split(/[/:]/).slice(-2).join('-')
  return (fromRemote || root.split('/').filter(Boolean).pop() || 'no-repo').replace(/[^\w.-]/g, '_')
}

export function build(facts: Facts, body: string, note: string, at: number): Handoff {
  const text = [factsBlock(facts, new Date(at)), '', body.trim(), note ? `\n## Note from the user\n${note}` : '']
    .join('\n')
    .trim()
  return { at, machine: facts.machine, repo: facts.repo, goal: goalOf(body), decisions: decisionsOf(body), text }
}
