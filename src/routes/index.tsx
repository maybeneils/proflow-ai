import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, PhoneCall, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AutomatePro — AI Automation for Growing Businesses" },
      {
        name: "description",
        content:
          "AI chatbots, AI voice agents, and custom websites that capture leads, answer customers, book appointments, and follow up automatically.",
      },
      { property: "og:title", content: "AutomatePro — AI Automation for Growing Businesses" },
      {
        property: "og:description",
        content:
          "Automate lead capture, customer communication, scheduling, and follow-ups with AI.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Bot,
    title: "AI Chatbots",
    body: "Always-on chat that answers questions, qualifies leads, and books them in.",
  },
  {
    icon: PhoneCall,
    title: "AI Voice Agents",
    body: "Natural phone agents that pick up every call and never miss an opportunity.",
  },
  {
    icon: Globe,
    title: "Custom Websites",
    body: "Fast, conversion-focused sites built to feed your automation from day one.",
  },
];

function Home() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-24 md:py-32">
          <p className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            AI Automation Agency
          </p>
          <h1 className="max-w-4xl text-4xl font-bold text-balance md:text-6xl">
            Put your lead capture, follow-ups, and scheduling <span>on autopilot</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            AutomatePro helps businesses of every kind respond instantly, book more
            appointments, and stay in touch with every customer &mdash; without adding headcount.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">
                Book a call <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">Explore services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-md border border-border bg-card p-7 transition-colors hover:border-foreground/20"
            >
              <span className="flex size-11 items-center justify-center rounded-md bg-secondary">
                <p.icon className="size-5 text-primary" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
