import { expect, test } from 'claude-code/testing'

test('a command that starts in a missing directory is stopped', async ($, on) => {
  on('fs.exists', () => ({ value: false }))
  on('tool.call', { tool: 'Bash' }, () => ({ result: { stdout: 'ran', stderr: '', interrupted: false } }))
  const ran = await $.tool.call({ tool: 'Bash', command: 'cd /home/cparker/heat-analysis && git push' })
  expect(String(ran.deny ?? ran.text)).toContain('does not exist on this machine')
})
