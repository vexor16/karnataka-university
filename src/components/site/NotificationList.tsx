import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { NOTIFICATIONS, type Notification } from "@/data/site";

const TABS = [
  "All",
  "Admission",
  "Examination",
  "Academic",
  "Recruitment",
  "Circular",
  "Result",
  "Tender",
] as const;

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function NotificationRow({ item }: { item: Notification }) {
  return (
    <article className="flex flex-col gap-2 border-b border-border py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded border border-primary/30 bg-secondary px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary">
            {item.category}
          </span>
          {item.isNew && (
            <span className="rounded bg-destructive px-2 py-0.5 text-xs font-bold uppercase text-destructive-foreground">
              New
            </span>
          )}
          <time dateTime={item.date} className="text-xs text-muted-foreground">
            {formatDate(item.date)}
          </time>
        </div>
        <h3 className="mt-1 text-base font-semibold text-foreground">{item.title}</h3>
      </div>
      <Link
        to={item.href}
        className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md border border-primary px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        View Notification
      </Link>
    </article>
  );
}

export function NotificationBrowser({ pageSize = 6 }: { pageSize?: number }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return NOTIFICATIONS.filter(
      (n) =>
        (tab === "All" || n.category === tab) &&
        n.title.toLowerCase().includes(query.trim().toLowerCase()),
    ).sort((a, b) => b.date.localeCompare(a.date));
  }, [tab, query]);

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, pages);
  const visible = filtered.slice((current - 1) * pageSize, current * pageSize);

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div role="tablist" aria-label="Notification categories" className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              type="button"
              onClick={() => {
                setTab(t);
                setPage(1);
              }}
              className={`min-h-9 rounded-md border px-3 text-sm font-medium transition-colors ${
                tab === t
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="md:w-72">
          <label htmlFor="notif-search" className="sr-only">
            Search notifications
          </label>
          <input
            id="notif-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search notifications…"
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
          />
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-card px-4 shadow-card">
        {visible.length === 0 ? (
          <p className="py-8 text-center text-muted-foreground">No notifications found.</p>
        ) : (
          visible.map((n) => <NotificationRow key={n.id} item={n} />)
        )}
      </div>

      {pages > 1 && (
        <nav aria-label="Pagination" className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              aria-current={p === current ? "page" : undefined}
              onClick={() => setPage(p)}
              className={`h-10 min-w-10 rounded-md border px-3 text-sm font-medium ${
                p === current
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-secondary"
              }`}
            >
              {p}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
