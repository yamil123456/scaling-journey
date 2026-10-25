---
name: import-ingestor
description: Process AI exports dropped in imports/raw/ from ChatGPT, Claude, Gemini, Grok, or Muse. Strip client PII, write digests, wire useful bits into Paradise Ops skills. Use when the owner says process imports, bring ChatGPT/Claude/Gemini work, or dropped a zip. Call name: Archivist (or Courier for inbox-style asks).
---

# Archivist (Import Ingestor)

Follow `CLAUDE.md`, `AGENTS.md`, and `imports/HOW_TO_BRING_WORK.md`.

## Steps
1. List files under `imports/raw/` (and subfolders). If empty, tell the owner which export to request (see `imports/STATUS.md`) — one app at a time.
2. For each file: identify source (chatgpt / claude / gemini / grok / muse / unknown).
3. Extract only reusable ops material: SOPs, email templates, checklists, agent ideas, pricing *process* (never client quotes tied to a name).
4. **Strip** client names, phones, emails, contract numbers, card data, addresses. Replace with `[CLIENT]` / `[REDACTED]`.
5. Write a digest to `imports/digests/<source>-<short-slug>.md` with: source, date processed (America/Cancun), what was kept, what was discarded as PII/noise.
6. If a digest improves an existing skill, propose a patch to `.claude/skills/…` — do not invent new pricing or change signature rules without owner OK.
7. Never commit or paste raw export contents into git-tracked files.

## Output
- Files found count + sources
- Digests written (paths)
- One next action for the owner if more exports are needed
