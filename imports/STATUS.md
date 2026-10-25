# Cross-AI import status

Checked America/Cancun: Sat Oct 24, 2026 ~11:47 PM.

I cannot log into Claude / ChatGPT / Gemini / Grok / Muse chat histories directly. I can only use what is already in this repo, your connected mail, or files you drop into `imports/raw/`.

| Source | Account signals found | Usable work pulled | Blocker | What you do once |
|---|---|---|---|---|
| **Claude** | Anthropic receipts; Claude for Gmail connected; this repo’s `CLAUDE.md` + Lead Triage | **In** — business briefing + Scout skill already here; expanded into full Paradise Ops team | None for what was already in GitHub | Optional: Settings → Privacy → Export data → drop zip in `imports/raw/` |
| **ChatGPT** | Several “data export is ready” emails (Mar–Apr 2026) to yamilabuchard@gmail.com | **Not in** — latest download link returns 403 (expired) | Export links expired; no zip in Gmail | ChatGPT → Settings → Data controls → Export → when email arrives, download zip → drop in `imports/raw/` |
| **Gemini** | Welcome / device emails; Google AI Ultra; Takeout “My Activity” ready Oct 13, download until **Oct 20, 2026** | **Not in** — Takeout window expired | Takeout expired | takeout.google.com → new archive including Gemini activity → drop in `imports/raw/` |
| **Grok** | Google “allowed Grok access”; Outlook “connected to Grok Bot” / Link | **Not in** — no export email, no API chat history here | No export file | In Grok/X: export or copy important threads → save as `.md` in `imports/raw/grok/` |
| **Muse** | Google “allowed Muse access” (Oct 22–23, 2026) | **Not in** | No export file / no Muse connector in this agent | Copy useful Muse outputs → `imports/raw/muse/` |

## Already consolidated in Ops HQ (from Claude)

- `CLAUDE.md` — companies, team signatures, sales rules, safety
- `.claude/skills/*` — Scout, Coordinator, Notary, Scribe, Keeper, Herald, Concierge, Courier, Ledger
- `AGENTS.md`, `README.md`, `companies/*`, `agents/paradise-ops/`

## Safety

Raw exports stay out of git. Digests in `imports/digests/` must strip client personal data before commit.
