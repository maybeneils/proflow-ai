import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — AI Automation Packages | AutomatePro" },
      {
        name: "description",
        content:
          "Transparent packages for AI chatbots, AI voice agents, and custom websites, with ongoing support and optimization.",
      },
      { property: "og:title", content: "Pricing — AutomatePro" },
      {
        property: "og:description",
        content: "Transparent automation packages with setup and ongoing optimization.",
      },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <PageShell
      eyebrow="Pricing"
      title="Straightforward pricing for automation that pays for itself"
      description="Pick the package that matches your volume and goals. No hidden fees, no long lock-ins."
    />
  );
}
