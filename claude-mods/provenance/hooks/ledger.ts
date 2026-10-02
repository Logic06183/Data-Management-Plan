// Pure pieces of the provenance ledger.

export type Hashed = { path: string; hash: string | null }

export type RecordEntry = {
  at: number
  machine: string
  cwd: string
  command: string
  commit: string
  isDirty: boolean
  script: Hashed | null
  inputs: Hashed[]
  env: Record<string, string>
  outputs: Hashed[]
}

const RUNNER = /(^|[\s;&|(])(python3?|Rscript|R\s+-e|quarto\s+render|jupyter\s+(nbconvert|execute)|papermill|snakemake|julia|make)\b/
const OUTPUT_EXT = /\.(png|pdf|svg|tiff?|eps|jpe?g|csv|tsv|parquet|feather|xlsx|docx|html|json|rds|nc|tex|txt|md)$/i
const DATA_EXT = /\.(csv|tsv|parquet|feather|xlsx?|sav|dta|rds|rdata|nc|json|h5|hdf5|sqlite|db)$/i
const SCRIPT_EXT = /\.(py|R|r|qmd|Rmd|ipynb|jl|sh)$/

export function isRunner(command: string): boolean {
  return RUNNER.test(command)
}

function unquote(token: string): string {
  return token.replace(/^["']|["']$/g, '')
}

export function parseRun(command: string): { script?: string; env: Record<string, string>; dataArgs: string[] } {
  const env: Record<string, string> = {}
  for (const m of command.matchAll(/(?:^|[\s;&])(?:export\s+)?([A-Z][A-Z0-9_]{2,})=("[^"]*"|'[^']*'|\S+)/g)) {
    if (m[1] && m[2] !== undefined) env[m[1]] = unquote(m[2])
  }
  const tokens = command.split(/\s+/).map(unquote)
  const script = tokens.find(t => SCRIPT_EXT.test(t) && !t.startsWith('-'))
  const dataArgs = tokens.filter(t => DATA_EXT.test(t) && !t.includes('='))
  return { script, env, dataArgs }
}

// Quoted file paths a script names that look like data it reads.
export function dataRefsInScript(text: string): string[] {
  const refs = new Set<string>()
  for (const m of text.matchAll(/["']([^"'\n]{3,200}\.(?:csv|tsv|parquet|feather|xlsx?|sav|dta|rds|rdata|nc|h5|hdf5))["']/gi)) {
    if (m[1] && !m[1].includes('{')) refs.add(m[1])
    if (refs.size >= 20) break
  }
  return [...refs]
}

export function isOutput(path: string): boolean {
  return OUTPUT_EXT.test(path) && !/(^|\/)(\.git|node_modules|\.venv|venv|__pycache__|\.ipynb_checkpoints|\.claude)\//.test(path)
}

export function shortHash(h: string | null): string {
  return h ? h.slice(0, 8) : 'missing'
}

export function describe(r: RecordEntry, output?: string): string {
  const lines = [
    `${output ?? r.outputs.map(o => o.path).join(', ')}`,
    `  made ${new Date(r.at).toISOString().replace('T', ' ').slice(0, 16)} UTC on ${r.machine}`,
    `  commit ${r.commit || 'none'}${r.isDirty ? ' (uncommitted changes present)' : ''}`,
    `  command: ${r.command.length > 160 ? r.command.slice(0, 157) + '…' : r.command}`,
  ]
  if (r.script) lines.push(`  script: ${r.script.path} [${shortHash(r.script.hash)}]`)
  if (r.inputs.length) lines.push(`  inputs: ${r.inputs.map(i => `${i.path} [${shortHash(i.hash)}]`).join(', ')}`)
  const env = Object.entries(r.env)
  if (env.length) lines.push(`  env: ${env.map(([k, v]) => `${k}=${v}`).join(' ')}`)
  return lines.join('\n')
}

export function latestByOutput(records: readonly RecordEntry[]): Map<string, RecordEntry> {
  const map = new Map<string, RecordEntry>()
  for (const r of records) for (const o of r.outputs) map.set(o.path, r)
  return map
}

export function parseLedger(text: string): RecordEntry[] {
  const out: RecordEntry[] = []
  for (const line of text.split('\n')) {
    if (!line.trim()) continue
    try {
      out.push(JSON.parse(line) as RecordEntry)
    } catch {
      // a half-written line: skip it
    }
  }
  return out
}

// Why an output may no longer match what made it: changed script, inputs, or the file itself.
export function staleReasons(r: RecordEntry, output: string, now: Map<string, string | null>): string[] {
  const reasons: string[] = []
  const recorded = r.outputs.find(o => o.path === output)
  if (r.script && now.has(r.script.path) && now.get(r.script.path) !== r.script.hash) reasons.push(`script ${r.script.path} changed`)
  for (const i of r.inputs) if (now.has(i.path) && now.get(i.path) !== i.hash) reasons.push(`input ${i.path} changed`)
  if (recorded && now.has(output) && now.get(output) !== recorded.hash) reasons.push('file edited since it was made')
  return reasons
}
