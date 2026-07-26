import type { ReactNode } from "react";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-page py-20 md:py-28">
        {eyebrow ? (
          <p className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-bold text-balance md:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>
        ) : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
