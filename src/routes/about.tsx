import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AutomatePro — The Team Behind Your Automation" },
      {
        name: "description",
        content:
          "AutomatePro is an AI automation agency helping companies respond faster, book more appointments, and follow up with every customer.",
      },
      { property: "og:title", content: "About AutomatePro" },
      {
        property: "og:description",
        content: "An AI automation agency focused on measurable outcomes for growing companies.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell
      eyebrow="About"
      title="We build AI systems that quietly do the work in the background"
      description="A small, senior team obsessed with response times, booked appointments, and follow-ups that never slip."
    />
  );
}
