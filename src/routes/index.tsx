import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/campus-hero.jpg";
import aboutImage from "@/assets/campus-about.jpg";
import {
  FACULTIES,
  IMPORTANT_LINKS,
  NEWS,
  NOTIFICATIONS,
  QUICK_ACCESS,
  STATS,
  UNIVERSITY,
} from "@/data/site";
import { LinkCard, Section } from "@/components/site/Page";
import { NotificationRow, formatDate } from "@/components/site/NotificationList";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Karnataka University Dharwad — Official University Website" },
      {
        name: "description",
        content:
          "Karnataka University Dharwad (KUD) official portal — admissions, examination notifications, results, departments, research, library and student services.",
      },
      { property: "og:title", content: "Karnataka University Dharwad — Official Website" },
      {
        property: "og:description",
        content:
          "Official information on admissions, examinations, results, notifications and academic departments at Karnataka University Dharwad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  const latest = [...NOTIFICATIONS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      {/* Hero */}
      <section className="relative isolate">
        <img
          src={heroImage}
          alt="Karnataka University Dharwad campus building with lawns and trees"
          width={1920}
          height={1088}
          className="h-[380px] w-full object-cover md:h-[540px]"
        />
        <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-page text-navy-foreground">
            <h1 className="max-w-3xl font-serif text-3xl font-bold text-navy-foreground md:text-5xl">
              {UNIVERSITY.name}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-navy-foreground/90 md:text-lg">
              Excellence in Higher Education, Research &amp; Innovation
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground hover:brightness-95"
              >
                Explore University
              </Link>
              <Link
                to="/admissions"
                className="inline-flex min-h-11 items-center rounded-md border border-navy-foreground/60 px-5 text-sm font-semibold text-navy-foreground hover:bg-navy-foreground/10"
              >
                Admissions
              </Link>
              <Link
                to="/examination"
                className="inline-flex min-h-11 items-center rounded-md border border-navy-foreground/60 px-5 text-sm font-semibold text-navy-foreground hover:bg-navy-foreground/10"
              >
                Examination
              </Link>
              <Link
                to="/results"
                className="inline-flex min-h-11 items-center rounded-md border border-navy-foreground/60 px-5 text-sm font-semibold text-navy-foreground hover:bg-navy-foreground/10"
              >
                Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement bar */}
      <section aria-label="Latest notifications" className="border-b border-border bg-surface">
        <div className="container-page flex flex-col gap-3 py-4 md:flex-row md:items-center">
          <p className="shrink-0 rounded bg-destructive px-3 py-1 text-xs font-bold uppercase tracking-wide text-destructive-foreground">
            Latest Notifications
          </p>
          <ul className="grid gap-2 text-sm md:grid-cols-3">
            {latest.slice(0, 3).map((n) => (
              <li key={n.id} className="truncate">
                <Link to={n.href} className="link-underline text-navy">
                  {n.isNew && <span className="mr-1 font-bold text-destructive">[New]</span>}
                  {n.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quick access */}
      <Section
        title="Quick Access"
        description="The pages students and colleges use most, one click from the homepage."
      >
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          {QUICK_ACCESS.map((q) => (
            <li key={q.label}>
              <LinkCard
                title={q.label}
                to={q.external ? undefined : q.to}
                href={q.external ? q.to : undefined}
              />
            </li>
          ))}
        </ul>
      </Section>

      {/* About */}
      <section className="bg-surface">
        <div className="container-page grid items-center gap-8 py-12 lg:grid-cols-2">
          <img
            src={aboutImage}
            alt="Reading hall of the university library with study tables and bookshelves"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full rounded-lg border border-border object-cover"
          />
          <div>
            <h2 className="section-title">Karnataka University Dharwad</h2>
            <p className="mt-3 text-muted-foreground">
              Karnataka University was established in 1949 and attained statutory university status
              on 1 March 1950. Located at Pavate Nagar in Dharwad, the university serves the
              districts of Dharwad, Gadag, Haveri and Uttara Kannada through its postgraduate
              departments, postgraduate centres and affiliated colleges.
            </p>
            <p className="mt-3 text-muted-foreground">
              The university offers undergraduate, postgraduate, diploma and doctoral programmes
              across the faculties of Arts, Commerce, Education, Law, Management, Science &amp;
              Technology and Social Sciences, with a strong emphasis on research and postgraduate
              education.
            </p>
            <Link to="/about" className="mt-5 inline-flex font-semibold text-primary link-underline">
              Read More About the University →
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <Section title="University at a Glance">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-border bg-card p-5 text-center shadow-card"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-serif text-3xl font-bold text-primary">{s.value}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs text-muted-foreground">
          Indicative figures maintained by the university administration and updated periodically.
        </p>
      </Section>

      {/* Admissions */}
      <section className="bg-surface">
        <div className="container-page py-12">
          <h2 className="section-title">Admissions</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Programme information, eligibility, important dates, application links and prospectus
            details for each admission route.
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              "UG Admissions",
              "PG Admissions",
              "Ph.D. Admissions",
              "Diploma & Certificate",
              "International Students",
            ].map((label) => (
              <li key={label}>
                <LinkCard
                  title={label}
                  description="Eligibility, dates, application link and notification."
                  to="/admissions"
                />
              </li>
            ))}
          </ul>
          <Link
            to="/admissions"
            className="mt-6 inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-navy"
          >
            View All Admissions
          </Link>
        </div>
      </section>

      {/* Examination & results */}
      <Section title="Examination & Results">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border border-border bg-card p-6 shadow-card">
            <h3 className="font-serif text-xl font-bold">Examination</h3>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {["Exam Notifications", "Exam Forms", "Time Tables", "Hall Tickets", "Convocation"].map(
                (l) => (
                  <li key={l}>
                    <Link to="/examination" className="link-underline text-primary">
                      {l}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </article>
          <article className="rounded-lg border border-border bg-card p-6 shadow-card">
            <h3 className="font-serif text-xl font-bold">Results</h3>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {[
                "UG Results",
                "PG Results",
                "B.Ed / B.P.Ed Results",
                "External Results",
                "Revaluation",
                "Special Examination",
              ].map((l) => (
                <li key={l}>
                  <Link to="/results" className="link-underline text-primary">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      {/* Latest notifications */}
      <section className="bg-surface">
        <div className="container-page py-12">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="section-title">Latest Notifications</h2>
            <Link to="/notifications" className="font-semibold text-primary link-underline">
              View all notifications →
            </Link>
          </div>
          <div className="mt-6 rounded-lg border border-border bg-card px-4 shadow-card">
            {latest.slice(0, 5).map((n) => (
              <NotificationRow key={n.id} item={n} />
            ))}
          </div>
        </div>
      </section>

      {/* Faculties */}
      <Section title="Academic Faculties">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTIES.map((f) => (
            <li key={f.slug}>
              <LinkCard title={f.name} description="View departments" to="/academics" />
            </li>
          ))}
        </ul>
      </Section>

      {/* Research */}
      <section className="bg-navy text-navy-foreground">
        <div className="container-page grid gap-6 py-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="section-title text-navy-foreground">Research &amp; Innovation</h2>
            <p className="mt-3 max-w-2xl text-navy-foreground/85">
              Doctoral programmes, research centres, funded projects and the University Scientific
              &amp; Instrumentation Centre support advanced study across the sciences, humanities and
              social sciences.
            </p>
            <Link
              to="/research"
              className="mt-5 inline-flex min-h-11 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground"
            >
              Explore Research
            </Link>
          </div>
          <ul className="grid gap-2 text-sm sm:grid-cols-2">
            {[
              "Research Centres",
              "Ph.D. Programmes",
              "Research Scholars",
              "Publications",
              "Projects & Funding",
              "Instrumentation Centre",
            ].map((l) => (
              <li key={l}>
                <Link
                  to="/research"
                  className="block rounded-md border border-navy-foreground/20 px-3 py-2 hover:bg-navy-foreground/10"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* News & events */}
      <Section title="News & Events">
        <ul className="grid gap-4 md:grid-cols-3">
          {NEWS.map((n) => (
            <li key={n.id}>
              <article className="h-full rounded-lg border border-border bg-card p-5 shadow-card">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded border border-border bg-secondary px-2 py-0.5 font-semibold uppercase text-primary">
                    {n.category}
                  </span>
                  <time dateTime={n.date}>{formatDate(n.date)}</time>
                </div>
                <h3 className="mt-2 font-serif text-lg font-bold">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
      </Section>

      {/* Important links */}
      <section className="bg-surface">
        <div className="container-page py-12">
          <h2 className="section-title">Important Links</h2>
          <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {IMPORTANT_LINKS.map((l) => (
              <li key={l.label}>
                <LinkCard title={l.label} href={l.href} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <Section title="Contact & Location">
        <div className="grid gap-6 lg:grid-cols-2">
          <address className="not-italic rounded-lg border border-border bg-card p-6 shadow-card">
            <p className="font-semibold text-navy">{UNIVERSITY.name}</p>
            <p className="mt-1 text-muted-foreground">{UNIVERSITY.address}</p>
            <p className="mt-3 text-sm">
              Email:{" "}
              <a href={`mailto:${UNIVERSITY.email}`} className="link-underline text-primary">
                {UNIVERSITY.email}
              </a>
            </p>
            <p className="text-sm">Phone: {UNIVERSITY.phone}</p>
            <Link
              to="/contact"
              className="mt-5 inline-flex min-h-11 items-center rounded-md border border-primary px-4 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact the University
            </Link>
          </address>
          <iframe
            title="Map showing Karnataka University Dharwad"
            src="https://www.google.com/maps?q=Karnatak+University+Dharwad&output=embed"
            loading="lazy"
            className="h-72 w-full rounded-lg border border-border"
          />
        </div>
      </Section>
    </>
  );
}
