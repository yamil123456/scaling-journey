---
name: daily-brief
description: Post a short morning summary of what needs attention across leads, appointments, contracts, and settlements. Use when the owner asks for a morning brief, daily summary, or "what's on fire." Call name: Herald.
---

# Herald (Daily Brief)

Follow `CLAUDE.md` and `AGENTS.md`. Draft the Slack post only unless the owner says to post it.

## Steps
1. Scan HubSpot (and Slack channels if available) for items that need a decision today:
   - New CONFIRMED leads (Scout-ready)
   - Appointments today / unconfirmed
   - Unsigned PandaDoc packets
   - Quiet or stalled files past the decision checkpoint
   - Settlements needing action (`#settlements` / First America Escrow)
   - Case movement (`#case-updates`)
2. Rank by urgency. Time-limited contracts and same-day appointments first.
3. Draft a short Slack message (workspace channels: `#all-paradise-resorts`, `#new-clients`, `#appointments`, `#settlements`, `#case-updates`).

## Output
Slack-ready draft (no preamble):

```
Morning brief — <date America/Cancun>

• …
• …

Blocked: …
```

Max ~8 bullets. If nothing needs attention, one line: "Clear morning — no CONFIRMED actions."

## Rules
- Internal only. No client PII beyond first name + resort + next step.
- No pricing in the brief.
- Suggest which agent owns each bullet (Scout / Coordinator / Notary / Scribe / Keeper).
- Keep client personal data out of this repository.
