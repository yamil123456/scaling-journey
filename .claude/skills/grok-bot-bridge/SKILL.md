---
name: grok-bot-bridge
description: Use X / Grok Bot connector to sync owner intent, bookmarks, and (when unlocked) chats into Paradise Ops. Use when the owner mentions Grok Bot, @bot, X Chat, or migrating ops into Grok. Call name: Bridge.
---

# Bridge (Grok Bot ↔ Paradise Ops)

Follow `CLAUDE.md`, `AGENTS.md`, and `imports/digests/grok-bot-x-connected.md`. Drafts / digests only unless the owner asks to post on X.

## Connected identity
- X: `@Yamilit0` (cache id from `get_users_me`)
- Grok Bot product handle: `@bot`
- Grok: `@grok`

## Steps
1. Confirm X tools work (`get_users_me`). If not signed in, tell the owner to reconnect the X plugin — no tokens/passwords.
2. For **import**: pull bookmarks / own posts / mentions as needed; write a PII-stripped digest under `imports/digests/`.
3. For **X Chat decrypt**: follow the X MCP Chat PIN secret-request flow only when the owner asks to unlock chats. Never paste the PIN in the transcript.
4. Map Grok Bot patterns onto existing specialists (do not invent parallel teams):
   - Lead work → Scout  
   - Appointments → Coordinator  
   - Contracts → Notary  
   - Follow-ups → Scribe  
   - CRM → Keeper  
   - Morning summary → Herald  
   - Personal → Concierge  
   - Inbox → Courier  
   - Money → Ledger  
   - Raw AI dumps → Archivist  
5. Never send an X Chat or post unless the owner explicitly says to send/post.

## Output
Short: what was synced, digest path, one next step.
