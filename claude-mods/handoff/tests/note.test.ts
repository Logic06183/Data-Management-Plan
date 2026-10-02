import { describe, expect, test } from 'claude-code/testing'

import { build, decisionsOf, goalOf, repoKey } from '../hooks/note'

const BODY = `## Goal
- Finish the SA10 sex-stratified sensitivity analysis
## Where things stand
- Model runs; figures not yet regenerated
## Files, data and settings
- RP2_PRIMARY_EXPOSURE=era5_land
## Open decisions
- Keep Figure 2 panel b? (keep / drop)
- Fix supplement widths now? (yes / leave for Lancet)
## Next step
- Re-run make_figures.py`

describe('handoff note', () => {
  test('pulls out the goal and open decisions', async () => {
    expect(goalOf(BODY)).toBe('Finish the SA10 sex-stratified sensitivity analysis')
    expect(decisionsOf(BODY)).toEqual(['Keep Figure 2 panel b? (keep / drop)', 'Fix supplement widths now? (yes / leave for Lancet)'])
    expect(decisionsOf('## Open decisions\n- none\n## Next step\n- x')).toEqual([])
  })
  test('keys a repo by its remote', async () => {
    expect(repoKey('git@github.com:Logic06183/heat-analysis-optimized.git', '/x')).toBe('Logic06183-heat-analysis-optimized')
    expect(repoKey(null, '/Users/me/notes')).toBe('notes')
  })
  test('builds a note with the facts on top', async () => {
    const h = build({ machine: 'Mac', repo: 'heat', branch: 'main', head: 'a0f7b9f', dirty: ['run.py'] }, BODY, 'ask Admire', 0)
    expect(h.text.startsWith('# Handoff: heat')).toBe(true)
    expect(h.text).toContain('main @ a0f7b9f')
    expect(h.text).toContain('## Note from the user\nask Admire')
    expect(h.decisions.length).toBe(2)
  })
})
