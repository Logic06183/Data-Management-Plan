import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { Handoff } from '../types'
import { PROMPT, ago, build, repoKey } from './note'
import type { Facts } from './note'

const PANE = 'handoff'
const latest = atom({ plugin: 'handoff', key: 'latest' } as const, null)
const isDismissed = atom({ plugin: 'handoff', key: 'isDismissed' } as const, false)

async function run($: EngineInterface, argv: string[], cwd?: string) {
  try {
    const r = await $.process.run(argv, { cwd, timeoutMs: 8000 })
    return r.exitCode === 0 ? r.stdout.trim() : ''
  } catch {
    return ''
  }
}

async function gatherFacts($: EngineInterface): Promise<Facts & { key: string }> {
  const repo = await $.session.repo()
  const root = repo?.root ?? (await $.session.cwd())
  const uname = await run($, ['uname', '-s'])
  const host = await run($, ['hostname'])
  const machine = (await $.env.get('CLAUDE_CODE_REMOTE')) === 'true' ? 'cloud' : uname === 'Darwin' ? 'Mac' : host || 'unknown'
  const status = repo ? await run($, ['git', 'status', '--porcelain'], root) : ''
  return {
    key: repoKey(repo?.remote, root),
    machine,
    repo: root.split('/').filter(Boolean).pop() ?? root,
    branch: repo ? await run($, ['git', 'rev-parse', '--abbrev-ref', 'HEAD'], root) : undefined,
    head: repo ? await run($, ['git', 'rev-parse', '--short', 'HEAD'], root) : undefined,
    remote: repo?.remote,
    dirty: status
      .split('\n')
      .map(l => l.slice(3).trim())
      .filter(Boolean),
  }
}

async function handoffPath($: EngineInterface, dir: string, key: string): Promise<string> {
  const home = (await $.env.get('HOME')) ?? ''
  return `${dir.replace(/^~(?=\/|$)/, home).replace(/\/$/, '')}/${key}.md`
}

async function saveHandoff($: EngineInterface, dir: string, key: string, item: Handoff): Promise<string> {
  const history = ((await $.store.get(`handoff:${key}`)) as Handoff[] | undefined) ?? []
  await $.store.set(`handoff:${key}`, [...history, item].slice(-5))
  await update($, latest, () => item)
  await update($, isDismissed, () => true)
  const path = await handoffPath($, dir, key)
  try {
    await $.process.run(['mkdir', '-p', path.replace(/\/[^/]+$/, '')])
    await $.fs.write(path, item.text + '\n')
    return path
  } catch {
    return ''
  }
}

async function loadIntoContext($: EngineInterface, item: Handoff) {
  await $.session.append({
    message: {
      type: 'user',
      content: [{ type: 'text', text: `Handoff note from an earlier session (${item.machine}, ${new Date(item.at).toISOString().slice(0, 16)}):\n\n${item.text}` }],
    },
  })
  await update($, isDismissed, () => true)
  $.ui.toast('Handoff loaded into context')
}

export const register: Register = (on, options) => {
  const dir = String(options.handoffDir || '~/.claude/handoffs')
  const nudgeAt = Number(options.contextNudgePercent) || 70
  let hasNudged = false

  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'handoff',
      description: 'Write a handoff note for the next session; or show | load | list',
      argumentHint: '[note] | show | load | list',
    })
    const result = await next(e)
    const facts = await gatherFacts($)
    const history = ((await $.store.get(`handoff:${facts.key}`)) as Handoff[] | undefined) ?? []
    const last = history[history.length - 1]
    const month = 30 * 24 * 3600000
    if (last && (await $.clock.now()) - last.at < month) {
      await update($, latest, () => last)
      await update($, isDismissed, () => false)
    }
    return result
  })

  on('command.run', { command: 'handoff' }, async ($, e) => {
    const arg = e.args.trim()
    const note = await read($, latest)

    if (arg === 'show' || arg === 'load' || arg === 'list') {
      if (!note) return { text: 'No handoff saved for this repo yet. Type /handoff to write one.' }
      if (arg === 'show') {
        await $.ui.open({ id: PANE, title: 'Handoff' })
        return { text: 'Handoff opened in a pane.' }
      }
      if (arg === 'load') {
        await update($, isDismissed, () => true)
        return { text: `Loaded the handoff from ${note.machine} (${ago((await $.clock.now()) - note.at)}).`, context: [note.text] }
      }
      const facts = await gatherFacts($)
      const history = ((await $.store.get(`handoff:${facts.key}`)) as Handoff[] | undefined) ?? []
      const now = await $.clock.now()
      return {
        text: history
          .slice()
          .reverse()
          .map(x => `• ${ago(now - x.at)} on ${x.machine}: ${x.goal || '(no goal)'}; ${x.decisions.length} open decision(s)`)
          .join('\n'),
      }
    }

    $.ui.toast('Writing handoff…')
    const facts = await gatherFacts($)
    const reply = await $.model.fork({ prompt: PROMPT })
    if (!reply.isAnswered) {
      return { text: `Could not write the handoff (${reply.reason}). Try again after the next turn.` }
    }
    const made = build(facts, reply.text, arg, await $.clock.now())
    const path = await saveHandoff($, dir, facts.key, made)
    const copied = await $.ui.copy({ text: made.text })
    return {
      text: [
        made.text,
        '',
        path ? `Saved to ${path}.` : 'Saved in this machine’s store.',
        copied.isCopied ? 'Copied to the clipboard, ready to paste into Cowork or another session.' : '',
      ]
        .filter(Boolean)
        .join('\n'),
    }
  })

  on('turn.complete', async ($, e, next) => {
    const result = await next(e)
    const pct = (await $.session.usage()).context.percent ?? 0
    if (!hasNudged && pct >= nudgeAt) {
      hasNudged = true
      $.ui.toast(`Context at ${pct}%: /handoff now keeps the thread if this session compacts or ends`, { timeoutMs: 10000 })
    }
    return result
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    const note = await read($, latest)
    if (e.props.hasSurvey || !note || (await read($, isDismissed))) return next(e)
    const { Box, Text, Button } = $.ui.resolve(e)
    const when = ago((await $.clock.now()) - note.at)
    const goal = note.goal.length > 70 ? `${note.goal.slice(0, 67)}…` : note.goal
    return (
      <Box>
        <Text color="cyan">
          ↩ Handoff from {note.machine}, {when}: {goal || 'no goal recorded'}
          {note.decisions.length ? ` · ${note.decisions.length} open decision${note.decisions.length === 1 ? '' : 's'}` : ''}{' '}
        </Text>
        <Button key="load" label="Load" variant="primary" onPress={() => void loadIntoContext($, note)} />
        <Button key="show" label="Show" onPress={() => void $.ui.open({ id: PANE, title: 'Handoff' })} />
        <Button key="dismiss" label="Dismiss" role="dismiss" onPress={() => void update($, isDismissed, () => true)} />
      </Box>
    )
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const { Markdown, Text } = $.ui.resolve(e)
    const note = await read($, latest)
    if (!note) return <Text dimColor>No handoff saved for this repo yet.</Text>
    return <Markdown text={note.text.slice(0, 10000)} />
  })
}
