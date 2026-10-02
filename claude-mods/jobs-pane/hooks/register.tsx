import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { Job, JobStatus } from '../types'
import { ICON, databricksEnd, databricksRunId, duration, finish, label, parseNotification, upsert } from './jobs'

const PANE = 'jobs'
const jobs = atom({ plugin: 'jobs-pane', key: 'jobs' } as const, [])
const tick = atom({ plugin: 'jobs-pane', key: 'tick' } as const, 0)
const isBandHidden = atom({ plugin: 'jobs-pane', key: 'isBandHidden' } as const, false)

async function addJob($: EngineInterface, job: Job) {
  await update($, jobs, list => upsert(list, job))
}

async function endJob($: EngineInterface, id: string, status: JobStatus) {
  const now = await $.clock.now()
  const before = (await read($, jobs)).find(j => j.id === id && j.status === 'running')
  await update($, jobs, list => finish(list, id, status, now))
  if (before) {
    const took = duration(now - before.startedAt)
    const verb = status === 'done' ? 'finished' : status === 'failed' ? 'FAILED' : 'stopped'
    $.ui.toast(`${ICON[status]} ${before.label} ${verb} after ${took}`, { timeoutMs: 10000 })
  }
}

async function beat($: EngineInterface) {
  const running = (await read($, jobs)).some(j => j.status === 'running')
  if (running) await update($, tick, n => n + 1)
}

export const register: Register = (on, options) => {
  const longMs = Math.max(5, Number(options.longSeconds) || 30) * 1000

  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'jobs',
      description: 'Show background tasks, long commands, subagents and Databricks runs',
      argumentHint: '[clear]',
      immediate: true,
    })
    // Redraw elapsed times while anything runs.
    $.clock.every(5000, () => void beat($))
    return next(e)
  })

  on('command.run', { command: 'jobs' }, async ($, e) => {
    if (e.args.trim() === 'clear') {
      await update($, jobs, list => list.filter(j => j.status === 'running'))
      return { text: 'Cleared finished jobs.' }
    }
    await update($, isBandHidden, () => false)
    await $.ui.open({ id: PANE, title: 'Jobs' })
    return { text: 'Jobs pane opened.' }
  })

  on('tool.call', { tool: 'Bash' }, async ($, e, next) => {
    const startedAt = await $.clock.now()
    const ran = await next(e)
    const endedAt = await $.clock.now()
    const name = label(e.description, e.command)

    const bg = ran.isError || ran.deny !== undefined ? undefined : ran.result?.backgroundTaskId
    if (bg) {
      await addJob($, { id: bg, label: name, kind: 'background', startedAt, status: 'running' })
    } else if (endedAt - startedAt >= longMs) {
      await addJob($, {
        id: `cmd-${startedAt}`,
        label: name,
        kind: 'command',
        startedAt,
        endedAt,
        status: ran.isError ? 'failed' : 'done',
      })
    }

    const out = ran.text ?? ''
    if (/\bdatabricks\b/.test(e.command)) {
      const runId = databricksRunId(out)
      if (runId) {
        const id = `dbx-${runId}`
        const ended = databricksEnd(out)
        const known = (await read($, jobs)).some(j => j.id === id)
        if (!known && !ended) {
          await addJob($, { id, label: `Databricks run ${runId}`, kind: 'databricks', startedAt, status: 'running' })
        } else if (known && ended) {
          await endJob($, id, ended)
        }
      }
    }
    return ran
  })

  on('tool.call', async ($, e, next) => {
    if (String(e.tool) !== 'Agent') return next(e)
    const startedAt = await $.clock.now()
    const ran = await next(e)
    const agentId = (ran.text ?? '').match(/agentId:\s*([\w-]+)/)?.[1]
    const input = e as unknown as { description?: string; run_in_background?: boolean }
    if (agentId && input.run_in_background !== false) {
      await addJob($, {
        id: agentId,
        label: `agent: ${label(input.description, 'subagent')}`,
        kind: 'agent',
        startedAt,
        status: 'running',
      })
    }
    return ran
  })

  on('prompt.submit', async ($, e, next) => {
    if (e.origin.kind === 'task-notification') {
      const note = parseNotification(e.text)
      if (note) await endJob($, note.id, note.status)
    }
    return next(e)
  })

  // A task notification draws as one quiet line; ctrl+o still shows it whole.
  on('ui.render', { component: 'UserMessage', props: { origin: { kind: 'task-notification' } } }, async ($, e, next) => {
    if (e.props.isExpanded) return next(e)
    const note = parseNotification(e.props.text)
    if (!note) return next(e)
    const job = (await read($, jobs)).find(j => j.id === note.id)
    const { Text } = $.ui.resolve(e)
    const took = job?.endedAt ? ` (${duration(job.endedAt - job.startedAt)})` : ''
    return (
      <Text dimColor>
        {ICON[note.status]} {job?.label ?? note.summary ?? note.id}{took}
      </Text>
    )
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    const list = await read($, jobs)
    const running = list.filter(j => j.status === 'running')
    if (e.props.hasSurvey || running.length === 0 || (await read($, isBandHidden))) return next(e)
    await read($, tick)
    const now = await $.clock.now()
    const oldest = running.reduce((a, b) => (a.startedAt <= b.startedAt ? a : b))
    const { Box, Text, Button } = $.ui.resolve(e)
    return (
      <Box>
        <Text color="yellow">
          ⏳ {running.length} job{running.length === 1 ? '' : 's'} running · longest: {oldest.label} (
          {duration(now - oldest.startedAt)}){' '}
        </Text>
        <Button key="open" label="Jobs" onPress={() => void $.ui.open({ id: PANE, title: 'Jobs' })} />
        <Button key="hide" label="Hide" plain onPress={() => void update($, isBandHidden, () => true)} />
      </Box>
    )
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const { Box, Text } = $.ui.resolve(e)
    const list = await read($, jobs)
    await read($, tick)
    const now = await $.clock.now()
    const running = list.filter(j => j.status === 'running')
    const ended = list.filter(j => j.status !== 'running').slice(-15).reverse()
    const width = Math.max(20, (e.props.bodyColumns ?? 60) - 14)
    const row = (j: Job) => {
      const took = duration((j.endedAt ?? now) - j.startedAt)
      const colour = j.status === 'failed' ? 'red' : j.status === 'running' ? 'yellow' : undefined
      return (
        <Box key={j.id}>
          <Text color={colour}>{ICON[j.status]} </Text>
          <Text wrap="truncate-end">{j.label.slice(0, width)}</Text>
          <Text dimColor> {took}</Text>
        </Box>
      )
    }
    return (
      <Box flexDirection="column">
        <Text bold>Running ({running.length})</Text>
        {running.length === 0 && <Text dimColor>Nothing running.</Text>}
        {running.map(row)}
        <Text> </Text>
        <Text bold>Recent</Text>
        {ended.length === 0 && <Text dimColor>No finished jobs yet. /jobs clear empties this list.</Text>}
        {ended.map(row)}
      </Box>
    )
  })
}
