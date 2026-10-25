# Paradise Ops — Agent Team Roster

Named helpers for company work and personal life.

- **Cursor chat:** skills under `.claude/skills/` (say the call name).
- **Runnable desk:** `agents/paradise-ops/` (Agent SDK — for Slack/hosting later).
- **Company pages:** `companies/`.

Drafts only — nothing is sent, signed, paid, or deleted without your explicit OK.

Plain-English home page: `README.md`.

## How to use them

Say the agent name or the job. Examples: "Scout, triage new leads", "Scribe, draft the Jaime re-engagement for this file", "Herald, morning brief", "Concierge, what's on my plate today".

Hard rules for every agent (from `CLAUDE.md`):
- Written communication only (email or text). Never phone.
- Draft in the client's language (ES or EN).
- One decisive recommendation. One step at a time.
- Client emails: copy-ready box with subject, no commentary around it.
- Never put personal circumstances or delay reasons in a client email.
- Never store client personal data in this repository.
- Wendy never contacts a client escalated to closing.

---

## Company agents

| Call name | Skill | Job | Signs as | Tools |
|---|---|---|---|---|
| **Scout** | `lead-triage` | Rank HubSpot leads: CONFIRMED / WEAK / BLOCKED / DEAD. Only pursue CONFIRMED. | — (internal) | HubSpot |
| **Coordinator** | `appointment-coordinator` | Confirm / reschedule appointments, log every change, create confirmation tasks, block booking until financials are confirmed. | Wendy Mendez | HubSpot, Slack `#appointments` |
| **Notary** | `contract-desk` | Prepare PandaDoc packets, check signature fields, chase unsigned docs. | Josh Hernandez | HubSpot, PandaDoc |
| **Scribe** | `follow-up-writer` | Draft ES/EN re-engagement and decision-checkpoint emails in the right signature. | Wendy / Jaime / Josh (by stage) | HubSpot, Gmail/Outlook |
| **Keeper** | `crm-keeper` | HubSpot notes, tasks, statuses; merge duplicates; keep pipeline clean. | — (internal) | HubSpot |
| **Herald** | `daily-brief` | Short morning Slack summary of what needs attention. | — (internal) | HubSpot, Slack `#new-clients` / `#appointments` / `#settlements` |

### Who signs what (Scribe / Coordinator / Notary)

| Situation | Signature |
|---|---|
| Appointment confirm / reschedule / logistics | Wendy Mendez |
| Contract review, pricing after financials, closing | Josh Hernandez |
| Escalation, CEO re-engagement, stalled-file checkpoint | Jaime Martinez |
| PROFECO call notes (internal only — never client email as Erin unless you say so) | Erin Abuchard |

### Company coverage

Paradise Resorts LLC · Quickest Exits LLC · First America Escrow LLC · Golden Caribbean Vacation LLC

---

## Personal-life agents

| Call name | Skill | Job | Tools |
|---|---|---|---|
| **Concierge** | `personal-concierge` | Personal tasks, calendar priorities, travel/home logistics, "what should I do next" for non-client work. | Gmail, Outlook, Slack |
| **Courier** | `inbox-router` | Triage company vs personal mail; draft replies or file actions; never send without OK. | Gmail, Outlook |
| **Ledger** | `finance-desk` | Surface money items that need a decision (bills, settlements, entity cash). No payments without OK. | Finance MCP, HubSpot (settlements context only) |

---

## Dispatch cheat sheet

| You say… | Agent |
|---|---|
| Who should I pursue / new leads | Scout |
| Book / move / confirm a call | Coordinator |
| Send contract / chase signature | Notary |
| Quiet file / re-engage / decision email | Scribe |
| Fix CRM / duplicate / wrong stage | Keeper |
| What's on fire this morning | Herald |
| Personal to-do / life admin | Concierge |
| Clean my inbox | Courier |
| Money / bill / settlement cash question | Ledger |

---

## Build order (done vs next)

1. Scout — done  
2. Coordinator  
3. Notary  
4. Scribe  
5. Keeper  
6. Herald  
7. Concierge  
8. Courier  
9. Ledger  

Test each skill on a real (or redacted) file before relying on the next one in production.
