import { defineTool } from "@grok/agent-sdk/tools";
import * as z from "zod/v4";

const SPECIALISTS = {
  scout: {
    callName: "Scout",
    skill: "scout",
    job: "Rank HubSpot leads as CONFIRMED / WEAK / BLOCKED / DEAD",
  },
  coordinator: {
    callName: "Coordinator",
    skill: "coordinator",
    job: "Confirm or reschedule appointments; block until financials confirmed",
  },
  notary: {
    callName: "Notary",
    skill: "notary",
    job: "PandaDoc prep, signature check, chase unsigned docs",
  },
  scribe: {
    callName: "Scribe",
    skill: "scribe",
    job: "Draft ES/EN follow-up emails in the right signature",
  },
  keeper: {
    callName: "Keeper",
    skill: "keeper",
    job: "HubSpot notes, tasks, statuses, duplicates",
  },
  herald: {
    callName: "Herald",
    skill: "herald",
    job: "Short morning Slack summary of what needs attention",
  },
  concierge: {
    callName: "Concierge",
    skill: "concierge",
    job: "Personal life ops and non-client admin",
  },
  courier: {
    callName: "Courier",
    skill: "courier",
    job: "Triage Gmail/Outlook into company vs personal buckets",
  },
  ledger: {
    callName: "Ledger",
    skill: "ledger",
    job: "Surface money items that need a decision; never pay without OK",
  },
  archivist: {
    callName: "Archivist",
    skill: "archivist",
    job: "Ingest AI exports from imports/raw; strip PII; write digests",
  },
  bridge: {
    callName: "Bridge",
    skill: "bridge",
    job: "Sync Grok Bot / X (@Yamilit0, @bot) into Paradise Ops",
  },
} as const;

type SpecialistId = keyof typeof SPECIALISTS;

export default defineTool({
  description:
    "Route an owner request to the correct Paradise Ops specialist (Scout, Coordinator, Notary, Scribe, Keeper, Herald, Concierge, Courier, Ledger, Archivist, Bridge).",
  effect: "read",
  inputSchema: z.object({
    specialist: z.enum([
      "scout",
      "coordinator",
      "notary",
      "scribe",
      "keeper",
      "herald",
      "concierge",
      "courier",
      "ledger",
      "archivist",
      "bridge",
    ]),
    ownerAsk: z.string().describe("Short restatement of what the owner asked for"),
  }),
  async execute({ specialist, ownerAsk }: { specialist: SpecialistId; ownerAsk: string }) {
    const picked = SPECIALISTS[specialist];
    return {
      callName: picked.callName,
      skill: picked.skill,
      job: picked.job,
      ownerAsk,
      reminder: "Drafts only. Load the matching skill and follow it. Do not send, pay, or delete without owner OK.",
    };
  },
});
