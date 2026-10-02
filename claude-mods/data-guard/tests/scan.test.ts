import { describe, expect, test } from 'claude-code/testing'

import { addedLinesByFile, buildConfig, classifyCommand, ignoreMatcher, isSaId, riskyPath, scanText } from '../hooks/scan'

const cfg = buildConfig({ denyTerms: 'Nomvula, Soweto Cohort', homePath: '/Users/craig', idPattern: '\\bRP2[-_]?\\d{3,}\\b' })

describe('classifyCommand', () => {
  test('spots outbound commands', async () => {
    expect(classifyCommand('git push -u origin main')).toBe('push')
    expect(classifyCommand('cd repo && git push')).toBe('push')
    expect(classifyCommand('gh repo create witsphr/x --public --source .')).toBe('publicise')
    expect(classifyCommand('gh repo edit --visibility public')).toBe('publicise')
    expect(classifyCommand('aws s3 cp out.csv s3://bucket/')).toBe('upload')
    expect(classifyCommand('scp data.csv craig@hub:/tmp/')).toBe('upload')
    expect(classifyCommand('git status')).toBe(null)
    expect(classifyCommand('git log --oneline')).toBe(null)
  })
})

describe('riskyPath', () => {
  test('flags data and secrets, spares synthetic fixtures', async () => {
    expect(riskyPath('data/rp2_participants.csv')).toBe('data file')
    expect(riskyPath('.env')).toBe('secrets file')
    expect(riskyPath('tests/fixtures/synthetic.csv')).toBe(null)
    expect(riskyPath('analysis/run.py')).toBe(null)
  })
})

describe('scanText', () => {
  test('finds IDs, secrets, paths and deny-listed terms without echoing them whole', async () => {
    const text = 'id 8001015009087\nkey ghp_abcdefghijklmnopqrstuvwxyz123456\nsee /Users/craig/Desktop\nRP2-0042 and nomvula'
    const kinds = scanText(text, 'f.txt', cfg).map(f => f.kind)
    expect(kinds).toContain('SA ID number')
    expect(kinds).toContain('GitHub token')
    expect(kinds).toContain('local home path')
    expect(kinds).toContain('study/participant ID')
    expect(kinds).toContain('deny-listed term')
    for (const f of scanText(text, 'f.txt', cfg)) expect(f.sample.includes('8001015009087')).toBe(false)
  })
  test('ignores clean text and non-Luhn digit runs', async () => {
    expect(scanText('mean temp 23.4, n=9736', 'a', cfg)).toEqual([])
    expect(isSaId('1234567890123')).toBe(false)
  })
})

describe('addedLinesByFile', () => {
  test('keeps only added lines per file', async () => {
    const diff = 'diff --git a/x b/x\n--- a/x\n+++ b/x\n-old\n+new line\n context\n'
    expect(addedLinesByFile(diff).get('x')).toBe('new line\n')
  })
})

describe('ignoreMatcher', () => {
  test('matches prefixes and globs', async () => {
    const isIgnored = ignoreMatcher('# fixtures\nclaude-mods/*/tests/\ndocs/example.csv\n')
    expect(isIgnored('claude-mods/data-guard/tests/scan.test.ts')).toBe(true)
    expect(isIgnored('docs/example.csv')).toBe(true)
    expect(isIgnored('data/real.csv')).toBe(false)
  })
})
