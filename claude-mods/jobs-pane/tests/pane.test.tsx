import { expect, mock, test } from 'claude-code/testing'

const scroll = { offset: 0, bodyRows: 10 }

test('a background command shows up in the pane and the band', async ($, on) => {
  const clock = mock.clock(on, { now: 1000 })
  on('tool.call', { tool: 'Bash' }, () => ({
    result: { stdout: '', stderr: '', interrupted: false, backgroundTaskId: 'bg1' },
  }))
  await $.tool.call({ tool: 'Bash', command: 'python run_sa10.py', description: 'Run SA10 analysis', run_in_background: true })

  await clock.advance(65000)

  for (const surface of ['terminal', 'desktop'] as const) {
    const pane = await $.ui.mount({
      plugin: 'jobs-pane',
      surface,
      component: 'Pane',
      requestId: 'jobs',
      props: { title: 'Jobs', isFocused: false, bodyColumns: 60, placement: 'dock', scroll } as never,
    })
    expect(await pane.find({ text: /Run SA10 analysis/ })).toBeDefined()
    expect(await pane.find({ text: /1m05s/ })).toBeDefined()
    await pane.unmount()

    const band = await $.ui.mount({
      plugin: 'jobs-pane',
      surface,
      component: 'AbovePrompt',
      props: { hasSurvey: false, isWorking: false, maxRows: 3, bodyColumns: 80 } as never,
    })
    expect(await band.find({ text: /1 job running/ })).toBeDefined()
    await band.unmount()
  }
})
