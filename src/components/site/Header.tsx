import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { NAV, UNIVERSITY } from "@/data/site";

function Emblem() {
  return (
    <span
      aria-hidden="true"
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-navy font-serif text-lg font-bold text-navy-foreground"
    >
      KUD
    </span>
  );
}

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-navy-foreground"
      >
        Skip to main content
      </a>

      {/* Utility bar */}
      <div className="hidden bg-navy text-navy-foreground lg:block">
        <div className="container-page flex items-center justify-between gap-4 py-1.5 text-[13px]">
          <p>
            {UNIVERSITY.name} · {UNIVERSITY.address}
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <button type="button" className="hover:underline" lang="kn">
                ಕನ್ನಡ
              </button>
            </li>
            <li>
              <button type="button" className="hover:underline">
                English
              </button>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Accessibility
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="hover:underline">
                Sitemap
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-border bg-background">
        <div className="container-page flex items-center justify-between gap-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <Emblem />
            <span className="leading-tight">
              <span className="block font-serif text-base font-bold text-navy sm:text-xl">
                {UNIVERSITY.name}
              </span>
              <span className="block text-xs text-muted-foreground sm:text-sm" lang="kn">
                {UNIVERSITY.nameKn}
              </span>
              <span className="hidden text-xs text-muted-foreground sm:block">
                {UNIVERSITY.tagline}
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="https://uucms.karnataka.gov.in/"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-navy transition-colors hover:bg-secondary"
            >
              UUCMS
            </a>
            <Link
              to="/student-services"
              className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-navy transition-colors hover:bg-secondary"
            >
              Student Login
            </Link>
            <Link
              to="/administration"
              className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-navy transition-colors hover:bg-secondary"
            >
              Faculty Login
            </Link>
            <Link
              to="/notifications"
              className="rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy"
            >
              Notifications
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-navy lg:hidden"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop navigation */}
      <div ref={navRef} className="hidden border-b border-border bg-primary lg:block">
        <nav aria-label="Main" className="container-page">
          <ul className="flex flex-wrap items-stretch">
            {NAV.map((group) => (
              <li key={group.label} className="relative">
                {group.items ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openMenu === group.label}
                      onClick={() =>
                        setOpenMenu((cur) => (cur === group.label ? null : group.label))
                      }
                      className="flex h-11 items-center gap-1 px-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-navy"
                    >
                      {group.label}
                      <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </button>
                    {openMenu === group.label && (
                      <div className="absolute left-0 top-full z-50 w-72 rounded-b-md border border-border bg-popover p-2 shadow-menu">
                        <ul>
                          {group.items.map((item, i) => (
                            <li key={`${item.label}-${i}`}>
                              <Link
                                to={item.to}
                                onClick={() => setOpenMenu(null)}
                                className="block rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={group.to}
                    className="flex h-11 items-center px-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-navy"
                  >
                    {group.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="max-h-[75dvh] overflow-y-auto border-b border-border bg-background lg:hidden"
        >
          <ul className="container-page divide-y divide-border py-2">
            {NAV.map((group) => (
              <li key={group.label} className="py-1">
                {group.items ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={mobileGroup === group.label}
                      onClick={() =>
                        setMobileGroup((cur) => (cur === group.label ? null : group.label))
                      }
                      className="flex min-h-11 w-full items-center justify-between px-1 text-left text-base font-semibold text-navy"
                    >
                      {group.label}
                      <span aria-hidden="true">{mobileGroup === group.label ? "−" : "+"}</span>
                    </button>
                    {mobileGroup === group.label && (
                      <ul className="pb-2 pl-3">
                        {group.items.map((item, i) => (
                          <li key={`${item.label}-${i}`}>
                            <Link
                              to={item.to}
                              onClick={() => setMobileOpen(false)}
                              className="block min-h-11 py-2 text-[15px] text-foreground"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={group.to}
                    onClick={() => setMobileOpen(false)}
                    className="block min-h-11 px-1 py-2 text-base font-semibold text-navy"
                  >
                    {group.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
