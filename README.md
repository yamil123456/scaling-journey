# Paradise Ops HQ

This is your **operations repository** — the home base for your companies and your personal helper agents.

You do **not** need to know git or coding to use the agents in Cursor. Open this project in Cursor and say an agent’s call name (for example: `Scout, triage new leads`).

---

## What lives here

| Folder | What it is |
|---|---|
| `AGENTS.md` | Full team roster (names + jobs) |
| `CLAUDE.md` | Business rules every helper must follow |
| `.claude/skills/` | Cursor chat skills (Scout, Coordinator, Notary, …) |
| `agents/paradise-ops/` | Runnable Agent SDK desk (for later Slack / hosting) |
| `companies/` | One short page per company entity |
| `imports/` | Bring work from ChatGPT, Claude, Gemini, Grok, Muse |

---

## Your companies (covered by this repo)

1. Paradise Resorts LLC — new clients, leads, closing  
2. Quickest Exits LLC — time-limited existing clients  
3. First America Escrow LLC — Xcaret settlements  
4. Golden Caribbean Vacation LLC — additional entity  
5. Personal life — Concierge, Courier, Ledger  

You currently have **one** GitHub repo (`scaling-journey`). That is enough. Everything for all companies and personal ops lives here so you do not juggle multiple repos. We can split later if you want.

---

## How to talk to the team

| You want… | Say… |
|---|---|
| Who to pursue | `Scout, triage new leads` |
| Book / move a call | `Coordinator, confirm this appointment` |
| Send / chase a contract | `Notary, prepare the packet` |
| Quiet client email | `Scribe, draft Jaime re-engagement` |
| Fix HubSpot | `Keeper, clean this duplicate` |
| Morning summary | `Herald, morning brief` |
| Personal to-do | `Concierge, what's next` |
| Clean inbox | `Courier, triage my inbox` |
| Money decision | `Ledger, what needs paying` |

**Hard rule:** helpers only **draft**. Nothing is sent, signed, paid, or deleted until you say yes.

---

## Bring work from other AIs

**Bring old AI work:** follow `imports/EXPORT_STEPS.md` (Claude first for Paradise Resorts). Drop the zip in `imports/raw/` → say `Archivist, process my imports`.

**Dot** = ChatGPT Dot agent (like Grok Bot). Comes with the ChatGPT export, or paste chats into `imports/raw/chatgpt-dot/`.

**Grok Bot:** X `@Yamilit0` connected → `Bridge, sync Grok Bot`. Private chats → `Bridge, unlock X Chat`.

Status: `imports/STATUS.md`

---

## For developers / Cloud Agents

```bash
# Runnable desk
cd agents/paradise-ops
npx --yes "@grok/agent-sdk@0.2.29" validate --dir .
npx --yes "@grok/agent-sdk@0.2.29" serve --dir . --mode single --dev
```

Timezone for “today”: **America/Cancun**.
