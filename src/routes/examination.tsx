import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { breadcrumbLd } from "@/components/site/Page";

export const Route = createFileRoute("/examination")({
  component: Examination,
  head: () => ({
    meta: [
      { title: "Examination — Karnataka University Dharwad" },
      {
        name: "description",
        content:
          "Examination notifications, exam forms, time tables, hall tickets, convocation and examination regulations of Karnataka University Dharwad.",
      },
      { property: "og:title", content: "Examination — Karnataka University Dharwad" },
      {
        property: "og:description",
        content:
          "Exam forms, time tables, hall tickets and examination notifications for KUD students and affiliated colleges.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/examination" },
    ],
    links: [{ rel: "canonical", href: "/examination" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", item: "/" },
        { name: "Examination", item: "/examination" },
      ]),
    ],
  }),
});

function Examination() {
  return (
    <InfoPage
      title="Examination"
      intro="Examination notifications, forms, time tables and hall tickets for students of university departments and affiliated colleges."
      crumbs={[{ label: "Examination", to: "/examination" }]}
      blocks={[
        {
          heading: "Examination Notifications",
          body: "Semester-wise examination notifications issued by the Registrar (Evaluation) are published as soon as they are released.",
          links: [{ label: "View notifications", to: "/notifications" }],
        },
        {
          heading: "Exam Forms",
          body: "Examination application forms are submitted online within the dates given in the relevant notification. Late submission attracts the prescribed fee.",
        },
        {
          heading: "Time Tables",
          body: "Programme-wise examination time tables are published before each examination session.",
        },
        {
          heading: "Hall Tickets",
          body: "Hall tickets are generated after the examination form is approved and fees are confirmed by the college or department.",
        },
        {
          heading: "Convocation",
          body: "The annual convocation notification carries registration dates, degree categories and fee details for graduating students.",
        },
        {
          heading: "Examination Regulations & Question Papers",
          body: "Regulations governing evaluation, revaluation and malpractice, along with previous question papers, are maintained by the examination section.",
          links: [{ label: "Results & revaluation", to: "/results" }],
        },
      ]}
      related={[
        { label: "Results", to: "/results" },
        { label: "Notifications", to: "/notifications" },
        { label: "Academics", to: "/academics" },
      ]}
    />
  );
}
