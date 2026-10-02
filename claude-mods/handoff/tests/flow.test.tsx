import { expect, mock, test } from 'claude-code/testing'

const BODY = '## Goal\n- Ship the figures\n## Open decisions\n- Drop panel b? (yes/no)\n## Next step\n- run it'
const ok = (stdout: string) => ({ value: { exitCode: 0, stdout, stderr: '', isStdoutTruncated: false, isStderrTruncated: false } })

test('/handoff writes a note, and the next session offers it', async ($, on) => {
  mock.clock(on, { now: 1_800_000_000_000 })
  mock.store(on)
  mock.env(on, { HOME: '/Users/me' })
  on('session.repo', () => ({ value: { root: '/Users/me/heat', remote: 'git@github.com:me/heat.git', internal: false, name: null } }))
  on('session.cwd', () => ({ value: '/Users/me/heat' }))
  on('process.run', (_$, e) => ok(e.argv[0] === 'uname' ? 'Darwin' : e.argv.includes('--short') ? 'a0f7b9f' : e.argv.includes('--abbrev-ref') ? 'main' : ''))
  on('fs.write', () => ({ value: undefined }))
  on('ui.copy', () => ({ value: { isCopied: true } }))
  on('ui.toast', () => ({ value: undefined }))
  on('command.register', (_$, e) => ({ value: { command: e.name } }))
  on('session.start', (_$, e) => ({ cwd: e.cwd }))
  on('model.fork', () => ({ value: { isAnswered: true, text: BODY, usage: { input_tokens: 1, output_tokens: 1, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 } } }))

  const out = await $.command.run({ command: 'handoff', args: '', origin: { kind: 'composer' } } as never)
  expect(String(out.text)).toContain('# Handoff: heat')
  expect(String(out.text)).toContain('Saved to /Users/me/.claude/handoffs/me-heat.md')

  // A new session in the same repo: the band offers the note.
  await $.session.start({ cwd: '/Users/me/heat', surface: 'terminal', isInteractive: true })
  for (const surface of ['terminal', 'desktop'] as const) {
    const band = await $.ui.mount({ plugin: 'handoff', surface, component: 'AbovePrompt', props: { hasSurvey: false, isWorking: false, maxRows: 3, bodyColumns: 100 } as never })
    expect(await band.find({ text: /Handoff from Mac/ })).toBeDefined()
    expect(await band.find({ text: /1 open decision/ })).toBeDefined()
    await band.unmount()
  }
})
