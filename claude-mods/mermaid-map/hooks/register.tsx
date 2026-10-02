import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import { PROMPT, extractMermaid, page } from './page'

const PANE = 'session-map'
const map = atom({ plugin: 'mermaid-map', key: 'map' } as const, null)
const isAuto = atom({ plugin: 'mermaid-map', key: 'isAuto' } as const, false)

let isDrawing = false

async function openInBrowser($: EngineInterface, path: string): Promise<boolean> {
  for (const argv of [['open', path], ['xdg-open', path]]) {
    try {
      const r = await $.process.run(argv, { timeoutMs: 5000 })
      if (r.exitCode === 0) return true
    } catch {
      // try the next opener
    }
  }
  return false
}

async function mapPath($: EngineInterface, dir: string): Promise<string> {
  const home = (await $.env.get('HOME')) ?? ''
  const id = (await $.session.id()).replace(/[^\w-]/g, '').slice(0, 24)
  return `${dir.replace(/^~(?=\/|$)/, home).replace(/\/$/, '')}/${id || 'session'}.html`
}

// Asks a fork of this session for the diagram and writes the page; returns why not on failure.
async function draw($: EngineInterface, dir: string): Promise<string | null> {
  if (isDrawing) return 'a map is already being drawn'
  isDrawing = true
  try {
    const reply = await $.model.fork({ prompt: PROMPT })
    if (!reply.isAnswered) return reply.reason === 'nothing-to-fork' ? 'there is nothing to map before the first turn' : `the model call failed (${reply.reason})`
    const source = extractMermaid(reply.text)
    if (!source) return 'the reply was not a Mermaid flowchart'
    const repo = await $.session.repo()
    const name = (repo?.root ?? (await $.session.cwd())).split('/').filter(Boolean).pop() ?? 'session'
    const path = await mapPath($, dir)
    const now = await $.clock.now()
    await $.process.run(['mkdir', '-p', path.replace(/\/[^/]+$/, '')])
    await $.fs.write(path, page(source, `Session map: ${name}`, new Date(now), await read($, isAuto)))
    await update($, map, () => ({ source, at: now, path }))
    return null
  } finally {
    isDrawing = false
  }
}

export const register: Register = (on, options) => {
  const dir = String(options.mapDir || '~/.claude/maps')

  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'map',
      description: 'Draw a Mermaid map of what this session is doing and open it in the browser',
      argumentHint: '[auto | off | pane]',
    })
    return next(e)
  })

  on('command.run', { command: 'map' }, async ($, e) => {
    const arg = e.args.trim()
    if (arg === 'off') {
      await update($, isAuto, () => false)
      return { text: 'Live map off. /map draws it once on demand.' }
    }
    if (arg === 'pane') {
      await $.ui.open({ id: PANE, title: 'Session map' })
      return { text: 'Map source opened in a pane.' }
    }
    if (arg === 'auto') await update($, isAuto, () => true)

    $.ui.toast('Drawing the session map…')
    const failed = await draw($, dir)
    if (failed) return { text: `No map: ${failed}.` }
    const current = await read($, map)
    if (!current) return { text: 'No map.' }
    const opened = await openInBrowser($, current.path)
    return {
      text: [
        opened ? `Map opened in your browser: ${current.path}` : `Map written to ${current.path} (open it in a browser).`,
        arg === 'auto' ? 'Live mode on: it redraws after each turn and the page refreshes itself. /map off to stop.' : '',
      ]
        .filter(Boolean)
        .join('\n'),
    }
  })

  on('turn.complete', async ($, e, next) => {
    const result = await next(e)
    if (await read($, isAuto)) void draw($, dir)
    return result
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const current = await read($, map)
    if (e.surface === 'terminal') {
      const { Box, Code, Link, Text } = $.ui.resolve(e)
      if (!current) return <Text dimColor>No map yet. Type /map to draw one.</Text>
      return (
        <Box flexDirection="column">
          <Link href={`file://${current.path}`} label="Open the rendered map in the browser" />
          <Code source={current.source} language="mermaid" wrap="truncate-end" />
        </Box>
      )
    }
    const { Markdown, Text } = $.ui.resolve(e)
    if (!current) return <Text dimColor>No map yet. Type /map to draw one.</Text>
    return <Markdown text={`[Open in the browser](file://${current.path})\n\n\`\`\`mermaid\n${current.source}\n\`\`\``.slice(0, 10000)} />
  })
}
