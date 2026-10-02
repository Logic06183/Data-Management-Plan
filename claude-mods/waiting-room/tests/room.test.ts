import { expect, mock, test } from 'claude-code/testing'

test('/tetris opens the game page', async ($, on) => {
  const opened: string[] = []
  on('process.run', (_$, e) => { opened.push(e.argv.join(' ')); return { value: { exitCode: 0, stdout: '', stderr: '', isStdoutTruncated: false, isStderrTruncated: false } } })
  const out = await $.command.run({ command: 'tetris', args: '', origin: { kind: 'composer' } } as never)
  expect(opened[0]).toBe('open https://claude.ai/artifact/Bnaj3drS2xUkfeYbKyfFUK')
  expect(String(out.text)).toContain('opened')
})

test('a background job suggests a game, once', async ($, on) => {
  mock.clock(on, { now: 0 })
  const toasts: string[] = []
  on('ui.toast', (_$, e) => { toasts.push(String(e.text)); return { value: undefined } })
  on('tool.call', { tool: 'Bash' }, () => ({ result: { stdout: '', stderr: '', interrupted: false, backgroundTaskId: 'b1' } }))
  await $.tool.call({ tool: 'Bash', command: 'python long.py', run_in_background: true })
  await $.tool.call({ tool: 'Bash', command: 'python long2.py', run_in_background: true })
  expect(toasts.length).toBe(1)
  expect(toasts[0]).toContain('/tetris')
})
