import { expect, test } from 'claude-code/testing'

test('a public repo create is refused without the person allowing it', async ($, on) => {
  on('process.run', () => ({ value: { exitCode: 0, stdout: '', stderr: '', isStdoutTruncated: false, isStderrTruncated: false } }))
  on('tool.call', { tool: 'Bash' }, () => ({ result: { stdout: 'ran', stderr: '', interrupted: false } }))
  const ran = await $.tool.call({ tool: 'Bash', command: 'gh repo create witsphr/heat --public' })
  expect(String(ran.deny ?? ran.text)).toContain('needs the person to confirm')
})

test('ordinary commands pass straight through', async ($, on) => {
  on('tool.call', { tool: 'Bash' }, () => ({ result: { stdout: 'ran', stderr: '', interrupted: false } }))
  const ran = await $.tool.call({ tool: 'Bash', command: 'ls -la' })
  expect(ran.deny).toBe(undefined)
  expect(ran.isError).toBe(undefined)
})

test('a push carrying a participant CSV in history is blocked', async ($, on) => {
  on('process.run', (_$, e) => {
    const argv = e.argv.join(' ')
    const stdout = argv.includes('rev-parse')
      ? 'origin/main\n'
      : argv.includes('--name-only')
        ? 'analysis/run.py\ndata/rp2_participants.csv\n'
        : ''
    return { value: { exitCode: 0, stdout, stderr: '', isStdoutTruncated: false, isStderrTruncated: false } }
  })
  on('tool.call', { tool: 'Bash' }, () => ({ result: { stdout: 'pushed', stderr: '', interrupted: false } }))
  const ran = await $.tool.call({ tool: 'Bash', command: 'git push origin main' })
  expect(String(ran.deny ?? ran.text)).toContain('rp2_participants.csv')
})
