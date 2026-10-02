import type { Job, JobStatus } from '../types'

export function duration(ms: number): string {
  const s = Math.max(0, Math.round(ms / 1000))
  if (s < 60) return `${s}s`
  const m = Math.floor(s / 60)
  if (m < 60) return `${m}m${String(s % 60).padStart(2, '0')}s`
  return `${Math.floor(m / 60)}h${String(m % 60).padStart(2, '0')}m`
}

export function parseNotification(text: string): { id: string; status: JobStatus; summary?: string } | null {
  const id = text.match(/<task-id>\s*([^<\s]+)\s*<\/task-id>/)?.[1]
  if (!id) return null
  const raw = text.match(/<status>\s*(\w+)\s*<\/status>/)?.[1]?.toLowerCase() ?? 'completed'
  const status: JobStatus = raw === 'failed' ? 'failed' : raw === 'killed' || raw === 'stopped' ? 'killed' : 'done'
  const summary = text.match(/<summary>\s*([\s\S]*?)\s*<\/summary>/)?.[1]
  return { id, status, summary }
}

// Databricks CLI and API output: a run id when submitted, a terminal state when polled.
export function databricksRunId(text: string): string | undefined {
  return text.match(/"?run_id"?\s*[:=]\s*"?(\d{3,})/i)?.[1]
}

export function databricksEnd(text: string): JobStatus | undefined {
  if (!/TERMINATED|INTERNAL_ERROR|SKIPPED/.test(text)) return undefined
  if (/"?result_state"?\s*[:=]\s*"?SUCCESS/.test(text)) return 'done'
  if (/"?result_state"?\s*[:=]\s*"?(CANCELED|CANCELLED)/.test(text)) return 'killed'
  return 'failed'
}

export function label(description: string | undefined, command: string): string {
  const text = (description?.trim() || command.trim()).replace(/\s+/g, ' ')
  return text.length > 60 ? `${text.slice(0, 57)}…` : text
}

export function upsert(list: readonly Job[], job: Job): Job[] {
  const rest = list.filter(j => j.id !== job.id)
  return [...rest, job].slice(-60)
}

export function finish(list: readonly Job[], id: string, status: JobStatus, at: number): Job[] {
  return list.map(j => (j.id === id && j.status === 'running' ? { ...j, status, endedAt: at } : j))
}

export const ICON: Record<JobStatus, string> = { running: '⏳', done: '✓', failed: '✗', killed: '■' }
