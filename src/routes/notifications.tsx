import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, breadcrumbLd } from "@/components/site/Page";
import { NotificationBrowser } from "@/components/site/NotificationList";

export const Route = createFileRoute("/notifications")({
  component: Notifications,
  head: () => ({
    meta: [
      { title: "Notifications & Circulars — Karnataka University Dharwad" },
      {
        name: "description",
        content:
          "Latest notifications, circulars, examination and admission notices, recruitment advertisements, results and tenders from Karnataka University Dharwad.",
      },
      { property: "og:title", content: "Notifications — Karnataka University Dharwad" },
      {
        property: "og:description",
        content:
          "Search and filter official KUD notifications by category: admission, examination, academic, recruitment, circular, result and tender.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/notifications" },
    ],
    links: [{ rel: "canonical", href: "/notifications" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", item: "/" },
        { name: "Notifications", item: "/notifications" },
      ]),
    ],
  }),
});

function Notifications() {
  return (
    <>
      <PageHeader
        title="Notifications & Circulars"
        intro="Official notices issued by Karnataka University Dharwad, newest first. Filter by category or search by title."
        crumbs={[{ label: "Notifications", to: "/notifications" }]}
      />
      <Section>
        <NotificationBrowser />
      </Section>
    </>
  );
}
