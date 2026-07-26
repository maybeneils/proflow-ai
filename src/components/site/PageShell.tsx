import type { ReactNode } from "react";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <section className="bg-background">
      <div className="container-page py-24 md:py-36">
        {eyebrow ? <p className="label-eyebrow mb-6">{eyebrow}</p> : null}
        <h1 className="max-w-4xl text-4xl font-bold text-balance md:text-6xl">{title}</h1>
        {description ? (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed font-light text-muted-foreground">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-12">{children}</div> : null}
      </div>
    </section>
  );
}
