import { describe, expect, test } from 'claude-code/testing'

import { databricksEnd, databricksRunId, duration, finish, parseNotification } from '../hooks/jobs'

describe('jobs helpers', () => {
  test('formats durations', async () => {
    expect(duration(4000)).toBe('4s')
    expect(duration(192000)).toBe('3m12s')
    expect(duration(3 * 3600000 + 5 * 60000)).toBe('3h05m')
  })
  test('reads a task notification', async () => {
    const text = '<task-notification><task-id>b7x</task-id><status>failed</status><summary>Run SA10</summary></task-notification>'
    expect(parseNotification(text)).toEqual({ id: 'b7x', status: 'failed', summary: 'Run SA10' })
    expect(parseNotification('hello')).toBe(null)
  })
  test('reads Databricks output', async () => {
    expect(databricksRunId('{"run_id": 123456}')).toBe('123456')
    expect(databricksEnd('"life_cycle_state": "TERMINATED", "result_state": "SUCCESS"')).toBe('done')
    expect(databricksEnd('"life_cycle_state": "TERMINATED", "result_state": "FAILED"')).toBe('failed')
    expect(databricksEnd('"life_cycle_state": "RUNNING"')).toBe(undefined)
  })
  test('finishes only running jobs', async () => {
    const list = [{ id: 'a', label: 'x', kind: 'background' as const, startedAt: 0, status: 'running' as const }]
    expect(finish(list, 'a', 'done', 10)[0]?.status).toBe('done')
  })
})
