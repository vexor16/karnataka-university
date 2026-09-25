import { Link } from "@tanstack/react-router";
import { IMPORTANT_LINKS, UNIVERSITY } from "@/data/site";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "University",
    links: [
      { label: "About", to: "/about" },
      { label: "Administration", to: "/administration" },
      { label: "Academics", to: "/academics" },
      { label: "Departments", to: "/departments" },
      { label: "IQAC & NAAC", to: "/iqac" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "UG Admissions", to: "/admissions" },
      { label: "PG Admissions", to: "/admissions" },
      { label: "Ph.D. Admissions", to: "/admissions" },
      { label: "Fee Structure", to: "/admissions" },
      { label: "International Students", to: "/admissions" },
    ],
  },
  {
    title: "Examination",
    links: [
      { label: "Exam Notifications", to: "/examination" },
      { label: "Time Tables", to: "/examination" },
      { label: "Hall Tickets", to: "/examination" },
      { label: "Results", to: "/results" },
      { label: "Revaluation", to: "/results" },
    ],
  },
  {
    title: "Student Services",
    links: [
      { label: "Scholarships", to: "/student-services" },
      { label: "Placement Cell", to: "/student-services" },
      { label: "Anti-Ragging", to: "/student-services" },
      { label: "Grievance Redressal", to: "/student-services" },
      { label: "Library", to: "/library" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-navy text-navy-foreground">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-bold uppercase tracking-wide text-accent">{col.title}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map((l, i) => (
                <li key={`${l.label}-${i}`}>
                  <Link to={l.to} className="text-navy-foreground/85 hover:text-navy-foreground hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <nav aria-label="Important links">
          <h2 className="text-sm font-bold uppercase tracking-wide text-accent">Important Links</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {IMPORTANT_LINKS.slice(0, 6).map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-navy-foreground/85 hover:text-navy-foreground hover:underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="container-page flex flex-col gap-3 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-navy-foreground/80">
            {UNIVERSITY.address} · {UNIVERSITY.phone}
          </p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link to="/rti" className="hover:underline">
                RTI
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
        <div className="container-page pb-6 text-xs text-navy-foreground/70">
          © {new Date().getFullYear()} {UNIVERSITY.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
