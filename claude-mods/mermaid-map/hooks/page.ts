export const PROMPT = `Draw a Mermaid diagram of what is going on in this session, conceptually, for someone glancing at it while the work runs.
Show: the goal; data sources; the processing or analysis steps; outputs (files, figures, commits, PRs); decisions waiting on the user; anything blocked.
Rules:
- "flowchart TD", at most 22 nodes, labels of at most 6 words, British English
- quote every label: A["Label"]
- mark each step with one class: done, active, blocked or decision, and add these lines at the end:
  classDef done fill:#1f6f43,stroke:#2ea86b,color:#fff
  classDef active fill:#8a5a00,stroke:#f0a500,color:#fff
  classDef blocked fill:#7a1f1f,stroke:#e05252,color:#fff
  classDef decision fill:#2b3f7a,stroke:#6c8cff,color:#fff
- group related nodes with subgraph when it helps
- never include data values, participant details or secrets
Reply with only the diagram inside one \`\`\`mermaid fence.`

export function extractMermaid(reply: string): string | null {
  const fenced = reply.match(/```(?:mermaid)?\s*\n([\s\S]*?)```/)
  const body = (fenced?.[1] ?? reply).trim()
  return /^(flowchart|graph)\s+(TD|TB|LR|RL|BT)\b/.test(body) ? body : null
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function page(source: string, title: string, at: Date, isAuto: boolean): string {
  const stamp = at.toISOString().replace('T', ' ').slice(0, 19) + ' UTC'
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${isAuto ? '<meta http-equiv="refresh" content="15">' : ''}
<title>${escapeHtml(title)}</title>
<style>
  :root { --bg:#f7f7f5; --fg:#1d1d1b; --muted:#6b6b66; --card:#ffffff; --line:#e3e3df; }
  @media (prefers-color-scheme: dark) { :root { --bg:#141413; --fg:#ecebe6; --muted:#9a9a93; --card:#1d1d1b; --line:#2c2c29; } }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--bg); color:var(--fg); font:15px/1.5 Inter, system-ui, sans-serif; }
  header { padding:20px 24px 8px; display:flex; flex-wrap:wrap; gap:8px 16px; align-items:baseline; }
  h1 { font-size:18px; margin:0; font-weight:600; }
  .meta { color:var(--muted); font-size:13px; }
  .legend { display:flex; gap:12px; flex-wrap:wrap; padding:0 24px 12px; font-size:13px; color:var(--muted); }
  .legend span::before { content:""; display:inline-block; width:10px; height:10px; border-radius:2px; margin-right:6px; vertical-align:-1px; background:var(--c); }
  main { margin:0 16px 24px; padding:16px; background:var(--card); border:1px solid var(--line); border-radius:10px; overflow:auto; }
  .mermaid { display:flex; justify-content:center; }
</style>
</head>
<body>
<header>
  <h1>${escapeHtml(title)}</h1>
  <span class="meta">Updated ${stamp}${isAuto ? ' · refreshes every 15 s' : ''}</span>
</header>
<div class="legend">
  <span style="--c:#2ea86b">done</span><span style="--c:#f0a500">in progress</span>
  <span style="--c:#e05252">blocked</span><span style="--c:#6c8cff">waiting on you</span>
</div>
<main><pre class="mermaid">
${escapeHtml(source)}
</pre></main>
<script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"></script>
<script>
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  mermaid.initialize({ startOnLoad: true, theme: dark ? 'dark' : 'default', securityLevel: 'strict', flowchart: { htmlLabels: false } });
</script>
</body>
</html>
`
}
