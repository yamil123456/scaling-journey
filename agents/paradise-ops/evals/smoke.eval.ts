import { defineEval } from "@grok/agent-sdk/evals";

export default defineEval({
  tags: ["smoke"],
  description: "route_task returns Scout for a lead-triage ask.",
  async test(t) {
    await t.send(
      'Use the route_task tool with specialist "scout" and ownerAsk "triage new HubSpot leads".',
    );
    t.succeeded();
    t.calledTool("route_task");
  },
});
