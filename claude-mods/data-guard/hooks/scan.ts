// Pure scanning logic, kept apart from the hooks so tests can reach it.

export type Outbound = 'push' | 'publicise' | 'upload'

export type Finding = { kind: string; where: string; sample: string }

export type ScanConfig = {
  denyTerms: readonly string[]
  idPattern: RegExp | null
  homePath: string
}

const DATA_EXT_RE = /\.(csv|tsv|parquet|feather|xlsx?|sav|dta|rds|rdata|sas7bdat|h5|hdf5|nc|sqlite|db|json\.gz|csv\.gz)$/i
const SECRET_FILE = /(^|\/)(\.env(\.[\w-]+)?|id_rsa|id_ed25519|.*\.pem|.*\.p12|credentials(\.json)?|\.netrc)$/i
const SAFE_DIR = /(^|\/)(synthetic|fixtures?|dummy|mock|examples?)(\/|_|-|\.)/i

const SECRETS: ReadonlyArray<[string, RegExp]> = [
  ['GitHub token', /\b(?:ghp|gho|ghs|ghu|github_pat)_[A-Za-z0-9_]{20,}/],
  ['GitLab token', /\bglpat-[A-Za-z0-9_-]{20,}/],
  ['OpenAI/Anthropic key', /\bsk-(?:ant-)?[A-Za-z0-9_-]{20,}/],
  ['AWS key', /\bAKIA[0-9A-Z]{16}\b/],
  ['Slack token', /\bxox[abpr]-[A-Za-z0-9-]{10,}/],
  ['Databricks token', /\bdapi[0-9a-f]{32}\b/],
  ['Private key', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
]

export function classifyCommand(command: string): Outbound | null {
  const c = command.replace(/\s+/g, ' ')
  if (/\bgit\b[^|;&]*\bpush\b/.test(c)) return 'push'
  if (/\bgh repo create\b[^|;&]*--public\b/.test(c)) return 'publicise'
  if (/\bgh repo edit\b[^|;&]*--visibility[ =]public\b/.test(c)) return 'publicise'
  if (/\bgh api\b[^|;&]*private[=:]\s*false/.test(c)) return 'publicise'
  if (/\bgh (release create|gist create)\b/.test(c)) return 'upload'
  if (/\b(aws s3 (cp|sync)|gsutil (cp|rsync)|az storage blob upload|databricks fs cp)\b/.test(c)) return 'upload'
  if (/\bcurl\b[^|;&]*(\s-T\s|--upload-file|\s-F\s+\S*=@|--data-binary\s+@)/.test(c)) return 'upload'
  if (/\b(scp|rsync)\b[^|;&]*\s[\w.-]+@?[\w.-]+:/.test(c)) return 'upload'
  return null
}

export function riskyPath(path: string): string | null {
  if (SAFE_DIR.test(path)) return null
  if (SECRET_FILE.test(path)) return 'secrets file'
  if (DATA_EXT_RE.test(path)) return 'data file'
  return null
}

// A South African ID number: YYMMDD SSSS C A Z, Luhn-checked, with a real date.
export function isSaId(digits: string): boolean {
  if (!/^\d{13}$/.test(digits)) return false
  const month = Number(digits.slice(2, 4))
  const day = Number(digits.slice(4, 6))
  if (month < 1 || month > 12 || day < 1 || day > 31) return false
  let sum = 0
  for (let i = 0; i < 13; i++) {
    let d = Number(digits[12 - i])
    if (i % 2 === 1) {
      d *= 2
      if (d > 9) d -= 9
    }
    sum += d
  }
  return sum % 10 === 0
}

// Shows enough to find the line, never the whole value.
export function mask(value: string): string {
  return value.length <= 4 ? '****' : `${value.slice(0, 3)}…(${value.length} chars)`
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function scanText(text: string, where: string, cfg: ScanConfig): Finding[] {
  const found: Finding[] = []
  for (const [kind, re] of SECRETS) {
    const m = text.match(re)
    if (m) found.push({ kind, where, sample: mask(m[0]) })
  }
  for (const m of text.matchAll(/\b\d{13}\b/g)) {
    if (isSaId(m[0])) {
      found.push({ kind: 'SA ID number', where, sample: mask(m[0]) })
      break
    }
  }
  if (cfg.idPattern) {
    const m = text.match(cfg.idPattern)
    if (m) found.push({ kind: 'study/participant ID', where, sample: mask(m[0]) })
  }
  if (cfg.homePath && text.includes(cfg.homePath)) {
    found.push({ kind: 'local home path', where, sample: cfg.homePath })
  }
  for (const term of cfg.denyTerms) {
    if (new RegExp(`\\b${escapeRe(term)}\\b`, 'i').test(text)) {
      found.push({ kind: 'deny-listed term', where, sample: mask(term) })
    }
  }
  return found
}

// Splits a unified diff into added lines per file, so only what is new is scanned.
export function addedLinesByFile(diff: string): Map<string, string> {
  const out = new Map<string, string>()
  let file = ''
  for (const line of diff.split('\n')) {
    if (line.startsWith('+++ ')) {
      file = line.replace(/^\+\+\+ (b\/)?/, '')
      continue
    }
    if (line.startsWith('+') && file && file !== '/dev/null') {
      out.set(file, (out.get(file) ?? '') + line.slice(1) + '\n')
    }
  }
  return out
}

export function buildConfig(options: Readonly<Record<string, unknown>>): ScanConfig {
  const terms = String(options.denyTerms ?? '')
    .split(',')
    .map(t => t.trim())
    .filter(t => t.length > 1)
  let idPattern: RegExp | null = null
  const raw = String(options.idPattern ?? '')
  if (raw) {
    try {
      idPattern = new RegExp(raw)
    } catch {
      idPattern = null
    }
  }
  return { denyTerms: terms, idPattern, homePath: String(options.homePath ?? '') }
}

// .dataguardignore: one pattern per line; `dir/` matches a prefix, `*` matches within a path, # starts a comment.
export function ignoreMatcher(text: string): (path: string) => boolean {
  const res = text
    .split('\n')
    .map(l => l.replace(/#.*/, '').trim())
    .filter(Boolean)
    .map(p => new RegExp('^' + p.split('*').map(escapeRe).join('[^/]*') + (p.endsWith('/') ? '' : '$')))
  return path => res.some(re => re.test(path))
}

export function report(findings: readonly Finding[], limit = 12): string {
  const lines = findings.slice(0, limit).map(f => `  • ${f.kind} in ${f.where} (${f.sample})`)
  if (findings.length > limit) lines.push(`  • …and ${findings.length - limit} more`)
  return lines.join('\n')
}
