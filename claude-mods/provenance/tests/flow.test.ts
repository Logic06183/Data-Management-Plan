import { expect, mock, test } from 'claude-code/testing'

const ok = (stdout: string) => ({ value: { exitCode: 0, stdout, stderr: '', isStdoutTruncated: false, isStderrTruncated: false } })

test('a figure script run is recorded and can be asked about', async ($, on) => {
  mock.clock(on, { now: 1_800_000_000_000 })
  mock.env(on, { HOME: '/Users/me', TMPDIR: '/tmp' })
  const files = new Map<string, string>([['/Users/me/heat/make_figs.py', 'df = pd.read_csv("data/rp2.csv")']])
  on('session.repo', () => ({ value: { root: '/Users/me/heat', remote: 'git@github.com:me/heat.git', internal: false, name: null } }))
  on('session.cwd', () => ({ value: '/Users/me/heat' }))
  on('fs.write', (_$, e) => { files.set(e.path, e.text); return { value: undefined } })
  on('fs.read', (_$, e) => { const t = files.get(e.path); return t === undefined ? { deny: 'missing' } : { value: t } })
  on('fs.exists', () => ({ value: true }))
  on('ui.toast', () => ({ value: undefined }))
  on('process.run', (_$, e) => {
    const a = e.argv.join(' ')
    if (a.startsWith('find')) return ok('./figs/fig2.png\n./run.log\n')
    if (a.includes('hash-object')) return ok(String(e.init?.stdin).trim().split('\n').map((_, i) => `hash${i}aaaaaaaa`).join('\n'))
    if (a.includes('rev-parse')) return ok('a0f7b9f')
    if (a === 'uname -s') return ok('Darwin')
    return ok('')
  })
  on('tool.call', { tool: 'Bash' }, () => ({ result: { stdout: 'saved', stderr: '', interrupted: false } }))

  await $.tool.call({ tool: 'Bash', command: 'RP2_PRIMARY_EXPOSURE=era5_land python make_figs.py' })
  const ledger = files.get('/Users/me/.claude/provenance/me-heat.jsonl')
  expect(ledger).toBeDefined()

  const out = await $.command.run({ command: 'provenance', args: 'fig2.png', origin: { kind: 'composer' } } as never)
  expect(String(out.text)).toContain('figs/fig2.png')
  expect(String(out.text)).toContain('script: make_figs.py')
  expect(String(out.text)).toContain('inputs: data/rp2.csv')
  expect(String(out.text)).toContain('RP2_PRIMARY_EXPOSURE=era5_land')
  expect(String(out.text)).toContain('commit a0f7b9f')
})
