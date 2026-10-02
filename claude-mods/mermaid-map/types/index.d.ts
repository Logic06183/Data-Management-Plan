export type SessionMap = { source: string; at: number; path: string }

declare module 'claude-code' {
  interface PluginState {
    'mermaid-map': { map: SessionMap | null; isAuto: boolean }
  }
}
