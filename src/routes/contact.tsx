import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, breadcrumbLd } from "@/components/site/Page";
import { UNIVERSITY } from "@/data/site";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Karnataka University Dharwad" },
      {
        name: "description",
        content:
          "Contact Karnataka University Dharwad: postal address at Pavate Nagar, Dharwad 580 003, official email, telephone numbers and campus location map.",
      },
      { property: "og:title", content: "Contact Karnataka University Dharwad" },
      {
        property: "og:description",
        content: "Address, official email, phone numbers and location map of Karnataka University Dharwad.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", item: "/" },
        { name: "Contact", item: "/contact" },
      ]),
    ],
  }),
});

function Contact() {
  return (
    <>
      <PageHeader
        title="Contact the University"
        intro="Official contact details of Karnataka University Dharwad for students, colleges and the public."
        crumbs={[{ label: "Contact", to: "/contact" }]}
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 shadow-card">
            <h2 className="font-serif text-xl font-bold">University Address</h2>
            <address className="mt-3 not-italic text-muted-foreground">
              Karnatak University Dharwad
              <br />
              Pavate Nagar
              <br />
              Dharwad – 580 003
              <br />
              Karnataka, India
            </address>
            <p className="mt-4 text-sm">
              Email:{" "}
              <a href={`mailto:${UNIVERSITY.email}`} className="link-underline text-primary">
                {UNIVERSITY.email}
              </a>
            </p>
            <p className="text-sm">Phone: {UNIVERSITY.phone}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Department-wise contact numbers and additional official email addresses will be listed
              here once supplied by the university administration.
            </p>
          </div>

          <form
            className="rounded-lg border border-border bg-card p-6 shadow-card"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="font-serif text-xl font-bold">Send an Enquiry</h2>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 h-11 w-full rounded-md border border-input bg-background px-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 h-11 w-full rounded-md border border-input bg-background px-3"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-md border border-input bg-background p-3"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-navy"
              >
                Submit Enquiry
              </button>
              <p className="text-xs text-muted-foreground">
                Enquiries are not yet delivered to an inbox. Until the university mailbox is
                connected, please write to the official email address above.
              </p>
            </div>
          </form>
        </div>

        <iframe
          title="Map showing Karnataka University Dharwad"
          src="https://www.google.com/maps?q=Karnatak+University+Dharwad&output=embed"
          loading="lazy"
          className="mt-6 h-80 w-full rounded-lg border border-border"
        />
      </Section>
    </>
  );
}
