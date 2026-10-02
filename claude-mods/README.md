# Claude Code mods

Seven mods for Claude Code, picked from an audit of the last 30 sessions (October 2026). Each folder is a self-contained plugin of function hooks.

| Mod | What it does | Commands |
|---|---|---|
| `data-guard` | Stops `git push`, `gh repo create --public`, `gh repo edit --visibility public`, uploads and Artifact publishes when the outgoing content holds participant-level data files, SA ID numbers, study IDs, secrets, your home path or deny-listed names. Scans commit history, not just the net diff. Findings are masked, never echoed whole. | `/data-guard`, `/data-guard allow [min]`, `/data-guard off` |
| `where-am-i` | Status line: machine (Mac / UCT hub / cloud), repo@branch with ahead/behind and uncommitted count, `gh` login, hub reachability (VPN), context % and session cost. Refuses commands that `cd` into a path that does not exist on this machine. | `/whereami` |
| `jobs-pane` | Tracks background tasks, long commands, background subagents and Databricks runs. Band above the prompt while jobs run, a pane with elapsed times, a toast when each ends, and task notifications drawn as one quiet line (ctrl+o shows them whole). | `/jobs`, `/jobs clear` |
| `handoff` | Writes a structured handoff (goal, state, files/data paths/env vars, open decisions, next step) from the session, saves it per repo and copies it to the clipboard for Cowork. The next session in the same repo offers to load it. Nudges at 70% context. | `/handoff [note]`, `/handoff show \| load \| list` |
| `provenance` | When a script (python, Rscript, quarto, jupyter, make…) writes figures, tables or results, records the commit, script hash, input data hashes, env vars and outputs to a per-repo ledger. | `/provenance [file]`, `/provenance check` |
| `mermaid-map` | Draws a Mermaid flowchart of what the session is doing (goal, data, steps, outputs, blockers, decisions waiting on you) and opens it in the browser. Live mode redraws after each turn and the page refreshes itself. | `/map`, `/map auto`, `/map off`, `/map pane` |
| `waiting-room` | Opens Heat Stack (falling blocks, warming-stripes theme) in the browser and suggests it when a command runs long or a job goes to the background. | `/tetris` |

`heat-stack/heat-stack.html` is the source of the game page, published at https://claude.ai/artifact/Bnaj3drS2xUkfeYbKyfFUK (private to you).

## Installing on the Mac or the hub

Clone this repo, then either pass the folders for one session:

```bash
M=~/path/to/Data-Management-Plan/claude-mods
claude --plugin-dir $M/data-guard --plugin-dir $M/where-am-i --plugin-dir $M/jobs-pane \
       --plugin-dir $M/handoff --plugin-dir $M/provenance --plugin-dir $M/mermaid-map --plugin-dir $M/waiting-room
```

or load them in every session (including the desktop app) by adding to the `env` block of `~/.claude/settings.json`:

```json
{
  "env": {
    "CLAUDE_CODE_PLUGIN_DIRS": "~/path/to/claude-mods/data-guard:~/path/to/claude-mods/where-am-i:~/path/to/claude-mods/jobs-pane:~/path/to/claude-mods/handoff:~/path/to/claude-mods/provenance:~/path/to/claude-mods/mermaid-map:~/path/to/claude-mods/waiting-room"
  }
}
```

## Settings worth filling in

Each mod's options appear in `/config` (or under `pluginConfigs.<name>` in settings):

- `data-guard.denyTerms`: comma-separated names that must never leave the machine (colleagues, cohort or site names).
- `data-guard.idPattern`: regex for participant/study IDs. The default (`RP1-123`, `PACCI_0042`, `HEAT001-123` styles) is a guess; set it to the real ID format.
- `where-am-i.hubHost`: the hub's hostname or IP, so the status line can show whether the VPN is up.
- `handoff.handoffDir`: point at a synced folder to carry handoffs between machines.

A repo can list paths for `data-guard` to skip in a `.dataguardignore` file at its root (one pattern per line, `dir/` for a prefix, `*` within a path).

## Checking them

```bash
claude plugin validate claude-mods/<mod>
claude plugin test claude-mods/<mod>
```
