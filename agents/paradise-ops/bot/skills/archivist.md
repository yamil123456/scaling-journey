---
description: Use when processing AI exports dropped in imports/raw/ from ChatGPT, Claude, Gemini, Grok, or Muse. Call name Archivist.
---

# Archivist (Imports)

1. List imports/raw/. If empty, point to imports/STATUS.md — one app at a time.
2. Extract SOPs/templates/checklists only. Strip client PII.
3. Write imports/digests/<source>-<slug>.md. Propose skill patches; don't change signatures without owner OK.
4. Never commit raw export contents.
