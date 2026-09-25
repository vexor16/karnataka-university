import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { breadcrumbLd } from "@/components/site/Page";

export const Route = createFileRoute("/results")({
  component: Results,
  head: () => ({
    meta: [
      { title: "Results — Karnataka University Dharwad (KUD Results)" },
      {
        name: "description",
        content:
          "Karnataka University Dharwad results: UG, PG, B.Ed and B.P.Ed results, external and special examination results, and revaluation information.",
      },
      { property: "og:title", content: "Karnataka University Dharwad Results" },
      {
        property: "og:description",
        content:
          "Check UG, PG, B.Ed, external and revaluation results published by Karnataka University Dharwad.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/results" },
    ],
    links: [{ rel: "canonical", href: "/results" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", item: "/" },
        { name: "Results", item: "/results" },
      ]),
    ],
  }),
});

function Results() {
  return (
    <InfoPage
      title="Results"
      intro="Examination results declared by Karnataka University Dharwad for undergraduate, postgraduate, professional and external programmes."
      crumbs={[{ label: "Results", to: "/results" }]}
      blocks={[
        {
          heading: "UG Results",
          body: "Semester results for undergraduate programmes of affiliated colleges are published after the evaluation process is completed.",
        },
        {
          heading: "PG Results",
          body: "Postgraduate results for university departments and PG centres are declared programme-wise.",
        },
        {
          heading: "B.Ed / B.P.Ed Results",
          body: "Results for teacher education and physical education programmes are declared separately by the examination section.",
        },
        {
          heading: "External Results",
          body: "Results of candidates registered under the external/distance registration scheme are published with the corresponding notification.",
        },
        {
          heading: "Revaluation",
          body: "Applications for revaluation and photocopy of answer scripts are accepted within the period stated in the result notification, with the prescribed fee.",
        },
        {
          heading: "Special Examination",
          body: "Special examinations for eligible candidates are conducted as per the regulations and notified separately.",
        },
      ]}
      note="Result links open the university's official examination result system. Marks cards issued by the examination section remain the authoritative record."
      related={[
        { label: "Examination", to: "/examination" },
        { label: "Notifications", to: "/notifications" },
        { label: "Contact", to: "/contact" },
      ]}
    />
  );
}
