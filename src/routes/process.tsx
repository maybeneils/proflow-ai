import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — How We Build Your Automation | AutomatePro" },
      {
        name: "description",
        content:
          "A clear, four-stage process: discovery, design, build, and optimization — so your automation goes live fast and keeps improving.",
      },
      { property: "og:title", content: "Our Process — AutomatePro" },
      {
        property: "og:description",
        content: "Discovery, design, build, and optimization — automation live in weeks, not months.",
      },
    ],
  }),
  component: Process,
});

function Process() {
  return (
    <PageShell
      eyebrow="Process"
      title="From first conversation to fully automated in weeks"
      description="A structured path from discovery to launch and ongoing optimization, with clear checkpoints along the way."
    />
  );
}
