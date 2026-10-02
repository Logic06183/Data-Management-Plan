export type JobKind = 'background' | 'command' | 'agent' | 'databricks'
export type JobStatus = 'running' | 'done' | 'failed' | 'killed'
export type Job = {
  id: string
  label: string
  kind: JobKind
  startedAt: number
  endedAt?: number
  status: JobStatus
}

declare module 'claude-code' {
  interface PluginState {
    'jobs-pane': { jobs: Job[]; tick: number; isBandHidden: boolean }
  }
}
