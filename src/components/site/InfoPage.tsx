import { Link } from "@tanstack/react-router";
import { PageHeader, Section, type Crumb } from "./Page";

export type InfoBlock = {
  heading: string;
  body?: string;
  links?: { label: string; to?: string; href?: string }[];
};

export function InfoPage({
  title,
  intro,
  crumbs,
  blocks,
  related,
  note,
}: {
  title: string;
  intro: string;
  crumbs: Crumb[];
  blocks: InfoBlock[];
  related?: { label: string; to: string }[];
  note?: string;
}) {
  return (
    <>
      <PageHeader title={title} intro={intro} crumbs={crumbs} />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {blocks.map((b) => (
            <article
              key={b.heading}
              className="rounded-lg border border-border bg-card p-5 shadow-card"
            >
              <h2 className="font-serif text-xl font-bold">{b.heading}</h2>
              {b.body && <p className="mt-2 text-muted-foreground">{b.body}</p>}
              {b.links && (
                <ul className="mt-3 space-y-1.5 text-sm">
                  {b.links.map((l, i) =>
                    l.href ? (
                      <li key={`${l.label}-${i}`}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="link-underline text-primary"
                        >
                          {l.label}
                        </a>
                      </li>
                    ) : (
                      <li key={`${l.label}-${i}`}>
                        <Link to={l.to ?? "/"} className="link-underline text-primary">
                          {l.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </article>
          ))}
        </div>

        {note && (
          <p className="mt-6 rounded-md border border-accent/40 bg-accent/10 p-4 text-sm text-foreground">
            {note}
          </p>
        )}

        {related && related.length > 0 && (
          <div className="mt-8">
            <h2 className="section-title">Related Pages</h2>
            <ul className="mt-3 flex flex-wrap gap-3">
              {related.map((r) => (
                <li key={r.label}>
                  <Link
                    to={r.to}
                    className="inline-flex min-h-11 items-center rounded-md border border-border bg-card px-4 text-sm font-medium text-navy hover:bg-secondary"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>
    </>
  );
}
