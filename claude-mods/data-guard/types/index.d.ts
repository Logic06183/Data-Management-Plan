export type GuardAllowance = { until: number; reason: string }

declare module 'claude-code' {
  interface PluginState {
    'data-guard': { allowance: GuardAllowance | null }
  }
}
