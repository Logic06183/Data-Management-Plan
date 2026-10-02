export type Handoff = {
  at: number
  machine: string
  repo: string
  goal: string
  decisions: string[]
  text: string
}

declare module 'claude-code' {
  interface PluginState {
    handoff: { latest: Handoff | null; isDismissed: boolean }
  }
}
