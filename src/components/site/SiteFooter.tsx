import { Link } from "@tanstack/react-router";

const links = [
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <span className="text-base font-bold tracking-tight uppercase">AutomatePro</span>

        <nav className="flex flex-wrap gap-x-10 gap-y-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link text-muted-foreground transition-colors hover:text-foreground"
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
