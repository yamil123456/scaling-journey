# Bring your AI work here (one step)

You do **not** need five repos. Drop files into this one folder and tell me to process them.

## Step for you (pick one app at a time)

1. **ChatGPT** — Settings → Data controls → **Export data**. Wait for the email. Download the zip.
2. **Claude** — Settings → Privacy → **Export**. Download the zip (optional; a lot is already in this repo).
3. **Gemini** — [Google Takeout](https://takeout.google.com) → include Gemini / My Activity → download when ready.
4. **Grok / Muse** — Copy the useful chats or files you care about into a text/markdown file (full account export may not exist).

Then: put the file(s) in `imports/raw/` (create subfolders if you want: `chatgpt/`, `claude/`, `gemini/`, `grok/`, `muse/`).

In Cursor say: **`Courier, process my imports`**.

I will:
- Read the drop zone
- Pull out business SOPs, email templates, agent ideas, checklists
- Strip client personal data
- Save clean digests under `imports/digests/`
- Wire anything useful into Scout / Scribe / etc.

## What I already did without exports

Claude’s work that was already in GitHub is live as Paradise Ops HQ. ChatGPT / Gemini / Grok / Muse need a fresh file from you because old download links expired.
