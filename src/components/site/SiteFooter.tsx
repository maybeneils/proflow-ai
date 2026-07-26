import { Link } from "@tanstack/react-router";
import { Bot } from "lucide-react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="bg-accent-gradient flex size-7 items-center justify-center rounded-md">
            <Bot className="size-4 text-primary-foreground" />
          </span>
          <span className="font-display font-semibold">AutomatePro</span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AutomatePro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
