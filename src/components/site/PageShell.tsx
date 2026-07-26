import type { ReactNode } from "react";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <section className="bg-hero-gradient border-b border-border/60">
      <div className="container-page py-20 md:py-28">
        {eyebrow ? (
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-bold text-balance md:text-6xl">{title}</h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>
        ) : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
