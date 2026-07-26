import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AutomatePro — Book a Free Automation Call" },
      {
        name: "description",
        content:
          "Tell us where leads and follow-ups slip through, and we'll map an AI automation plan for your business.",
      },
      { property: "og:title", content: "Contact AutomatePro" },
      {
        property: "og:description",
        content: "Book a free call and get an AI automation plan for your business.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let's map your automation plan"
      description="Book a short call and we'll show you exactly where AI can capture more leads and save your team hours."
    />
  );
}
