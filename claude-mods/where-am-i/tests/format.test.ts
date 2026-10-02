import { describe, expect, test } from 'claude-code/testing'

import { absoluteStartDir, formatStatus, machineFrom, parseAheadBehind, repoName } from '../hooks/format'

describe('where-am-i', () => {
  test('recognises the machine', async () => {
    expect(machineFrom({ uname: 'Darwin\n', hostname: 'craigs-mbp.local', hubPattern: 'hub' })).toBe('Mac')
    expect(machineFrom({ uname: 'Linux', hostname: 'csag-hub01', hubPattern: 'hub|csag' })).toBe('hub')
    expect(machineFrom({ remoteEnv: 'true', uname: 'Linux', hostname: 'x', hubPattern: 'hub' })).toBe('cloud')
  })
  test('formats a full line', async () => {
    const line = formatStatus({ machine: 'Mac', repo: 'heat', branch: 'main', ahead: 2, dirty: 3, gh: true, hub: false, contextPercent: 34, costUsd: 1.709 })
    expect(line).toBe('💻 Mac · heat@main ↑2 ✎3 · gh ✓ · hub ✗ VPN · ctx 34% · $1.71')
  })
  test('parses git helpers', async () => {
    expect(parseAheadBehind('1\t4\n')).toEqual({ behind: 1, ahead: 4 })
    expect(repoName('git@github.com:Logic06183/Data-Management-Plan.git', '/x')).toBe('Data-Management-Plan')
    expect(repoName(null, '/home/u/heat-analysis')).toBe('heat-analysis')
  })
  test('finds the absolute start directory of a command', async () => {
    expect(absoluteStartDir('cd /home/cparker/heat && git push')).toBe('/home/cparker/heat')
    expect(absoluteStartDir('git -C "/Users/craig/x y" status')).toBe('/Users/craig/x y')
    expect(absoluteStartDir('cd repo && ls')).toBe(undefined)
  })
})
