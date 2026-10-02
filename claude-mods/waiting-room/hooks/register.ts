import type { EngineInterface, Register } from 'claude-code'

const QUIET_MS = 20 * 60000
let lastNudge = -Infinity

async function openUrl($: EngineInterface, url: string): Promise<boolean> {
  for (const argv of [['open', url], ['xdg-open', url]]) {
    try {
      const r = await $.process.run(argv, { timeoutMs: 5000 })
      if (r.exitCode === 0) return true
    } catch {
      // try the next opener
    }
  }
  return false
}

async function nudge($: EngineInterface, why: string) {
  const now = await $.clock.now()
  if (now - lastNudge < QUIET_MS) return
  lastNudge = now
  $.ui.toast(`${why}: /tetris for a round of Heat Stack while you wait`, { timeoutMs: 8000 })
}

export const register: Register = (on, options) => {
  const url = String(options.gameUrl || 'https://claude.ai/artifact/Bnaj3drS2xUkfeYbKyfFUK')
  const nudgeMs = Math.max(0, Number(options.nudgeSeconds ?? 45)) * 1000

  on('session.start', async ($, e, next) => {
    await $.command.register({ name: 'tetris', description: 'Open Heat Stack (falling blocks) in the browser', immediate: true })
    return next(e)
  })

  on('command.run', { command: 'tetris' }, async $ => {
    const opened = await openUrl($, url)
    return { text: opened ? 'Heat Stack opened in your browser. A toast will tell you when the job ends.' : `Open this in your browser: ${url}` }
  })

  on('tool.call', { tool: 'Bash' }, async ($, e, next) => {
    if (nudgeMs === 0) return next(e)
    const timer = $.clock.after(nudgeMs, () => void nudge($, 'Still running'))
    try {
      const ran = await next(e)
      if (!ran.isError && ran.deny === undefined && ran.result?.backgroundTaskId) await nudge($, 'Job started in the background')
      return ran
    } finally {
      timer.cancel()
    }
  })
}
