import { describe, expect, mock, test } from 'claude-code/testing'

import { extractMermaid, page } from '../hooks/page'

const DIAGRAM = 'flowchart TD\n  A["Goal: SA10"] --> B["Run model"]\n  class A done'
const ok = (stdout: string) => ({ value: { exitCode: 0, stdout, stderr: '', isStdoutTruncated: false, isStderrTruncated: false } })

describe('page', () => {
  test('pulls the diagram out of a fenced reply', async () => {
    expect(extractMermaid('Here:\n```mermaid\n' + DIAGRAM + '\n```')).toBe(DIAGRAM)
    expect(extractMermaid('sorry, I cannot')).toBe(null)
  })
  test('escapes the source into the page', async () => {
    const html = page('flowchart TD\n A["a < b"]', 'Session map: heat', new Date(0), true)
    expect(html).toContain('a &lt; b')
    expect(html).toContain('http-equiv="refresh"')
    expect(html).toContain('cdn.jsdelivr.net/npm/mermaid@11')
  })
})

test('/map writes the page and opens it', async ($, on) => {
  mock.clock(on, { now: 0 })
  mock.env(on, { HOME: '/Users/me' })
  const written = new Map<string, string>()
  const opened: string[] = []
  on('session.id', () => ({ value: 'abc-123' }))
  on('session.repo', () => ({ value: { root: '/Users/me/heat', remote: null, internal: false, name: null } }))
  on('fs.write', (_$, e) => { written.set(e.path, e.text); return { value: undefined } })
  on('ui.toast', () => ({ value: undefined }))
  on('process.run', (_$, e) => { if (e.argv[0] === 'open') opened.push(String(e.argv[1])); return ok('') })
  on('model.fork', () => ({ value: { isAnswered: true, text: '```mermaid\n' + DIAGRAM + '\n```', usage: { input_tokens: 1, output_tokens: 1, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 } } }))

  const out = await $.command.run({ command: 'map', args: '', origin: { kind: 'composer' } } as never)
  expect(String(out.text)).toContain('Map opened in your browser: /Users/me/.claude/maps/abc-123.html')
  expect(written.get('/Users/me/.claude/maps/abc-123.html')).toContain('Goal: SA10')
  expect(opened).toEqual(['/Users/me/.claude/maps/abc-123.html'])
})
