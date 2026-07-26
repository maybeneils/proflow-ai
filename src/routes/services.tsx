import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI Chatbots, Voice Agents & Websites | AutomatePro" },
      {
        name: "description",
        content:
          "AI chatbots, AI voice agents, and custom websites that automate lead capture, customer communication, scheduling, and follow-ups.",
      },
      { property: "og:title", content: "Services — AutomatePro" },
      {
        property: "og:description",
        content: "AI chatbots, voice agents, and custom websites built for growing businesses.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <PageShell
      eyebrow="Services"
      title="Automation systems built around how your business actually works"
      description="AI chatbots, AI voice agents, and custom websites — designed to capture, respond, and follow up automatically."
    />
  );
}
