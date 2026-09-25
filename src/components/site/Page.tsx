import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-navy-foreground/80">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={`${c.label}-${i}`} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {c.to && i < items.length - 1 ? (
              <Link to={c.to} className="hover:underline">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-navy-foreground">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({
  title,
  intro,
  crumbs,
}: {
  title: string;
  intro?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-page py-8 md:py-10">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-4 font-serif text-3xl font-bold text-navy-foreground md:text-4xl">
          {title}
        </h1>
        {intro && <p className="mt-3 max-w-3xl text-navy-foreground/85">{intro}</p>}
      </div>
    </section>
  );
}

export function Section({
  title,
  children,
  description,
  id,
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="container-page py-10 md:py-12">
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="mt-2 max-w-3xl text-muted-foreground">{description}</p>}
      <div className={title ? "mt-6" : ""}>{children}</div>
    </section>
  );
}

export function LinkCard({
  title,
  description,
  to,
  href,
}: {
  title: string;
  description?: string;
  to?: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="block font-semibold text-navy">{title}</span>
      {description && (
        <span className="mt-1 block text-sm text-muted-foreground">{description}</span>
      )}
    </>
  );
  const className =
    "block h-full rounded-lg border border-border bg-card p-4 shadow-card transition-colors hover:border-primary hover:bg-secondary";
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={className}>
      {inner}
    </Link>
  );
}

export function jsonLd(data: Record<string, unknown>) {
  return { type: "application/ld+json", children: JSON.stringify(data) } as const;
}

export function breadcrumbLd(items: { name: string; item: string }[]) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  });
}
