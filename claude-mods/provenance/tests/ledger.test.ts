import { describe, expect, test } from 'claude-code/testing'

import { dataRefsInScript, isOutput, isRunner, parseRun, staleReasons } from '../hooks/ledger'

describe('provenance helpers', () => {
  test('recognises analysis runs', async () => {
    expect(isRunner('python3 make_figures.py --out figs')).toBe(true)
    expect(isRunner('cd analysis && Rscript fit.R')).toBe(true)
    expect(isRunner('quarto render paper.qmd')).toBe(true)
    expect(isRunner('git status')).toBe(false)
  })
  test('parses a run', async () => {
    const r = parseRun('RP2_PRIMARY_EXPOSURE=era5_land python run_sa10.py data/cohort.parquet')
    expect(r.script).toBe('run_sa10.py')
    expect(r.env).toEqual({ RP2_PRIMARY_EXPOSURE: 'era5_land' })
    expect(r.dataArgs).toEqual(['data/cohort.parquet'])
  })
  test('finds data a script reads', async () => {
    expect(dataRefsInScript('df = pd.read_csv("data/rp2_clean.csv")\nx = f"{root}/a.csv"')).toEqual(['data/rp2_clean.csv'])
  })
  test('keeps outputs, skips tooling folders', async () => {
    expect(isOutput('figures/fig2.png')).toBe(true)
    expect(isOutput('.venv/lib/x.json')).toBe(false)
    expect(isOutput('run.log')).toBe(false)
  })
  test('explains staleness', async () => {
    const r = { at: 0, machine: 'Mac', cwd: '.', command: 'python f.py', commit: 'a', isDirty: false, env: {},
      script: { path: 'f.py', hash: 'old' }, inputs: [{ path: 'd.csv', hash: 'same' }], outputs: [{ path: 'fig.png', hash: 'x' }] }
    const now = new Map<string, string | null>([['f.py', 'new'], ['d.csv', 'same'], ['fig.png', 'x']])
    expect(staleReasons(r, 'fig.png', now)).toEqual(['script f.py changed'])
  })
})
