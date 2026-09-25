import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { breadcrumbLd } from "@/components/site/Page";

export const Route = createFileRoute("/admissions")({
  component: Admissions,
  head: () => ({
    meta: [
      { title: "Karnataka University Dharwad Admissions — UG, PG & Ph.D." },
      {
        name: "description",
        content:
          "Official admission information for undergraduate, postgraduate, doctoral, diploma and certificate programmes at Karnataka University Dharwad, including eligibility and application links.",
      },
      { property: "og:title", content: "Karnataka University Dharwad Admissions" },
      {
        property: "og:description",
        content:
          "Eligibility, important dates, application process and notifications for admissions at Karnataka University Dharwad.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", item: "/" },
        { name: "Admissions", item: "/admissions" },
      ]),
    ],
  }),
});

function Admissions() {
  return (
    <InfoPage
      title="Karnataka University Dharwad Admissions"
      intro="Find official admission information for undergraduate, postgraduate, doctoral and other academic programmes at Karnataka University Dharwad."
      crumbs={[{ label: "Admissions", to: "/admissions" }]}
      blocks={[
        {
          heading: "UG Admissions",
          body: "Undergraduate admissions to affiliated colleges are processed through the Unified University and College Management System (UUCMS) as per the state admission calendar.",
          links: [
            { label: "UUCMS Portal", href: "https://uucms.karnataka.gov.in/" },
            { label: "Admission notifications", to: "/notifications" },
          ],
        },
        {
          heading: "PG Admissions",
          body: "Postgraduate admissions to university departments and PG centres follow the merit and eligibility criteria published in the annual admission notification.",
          links: [{ label: "Departments", to: "/departments" }],
        },
        {
          heading: "Ph.D. Admissions",
          body: "Doctoral admission is through the university entrance test and interview, as notified by the Registrar and the respective research centres.",
          links: [{ label: "Research", to: "/research" }],
        },
        {
          heading: "Diploma & Certificate",
          body: "Departments offer diploma and certificate courses in languages, computing, heritage studies and allied areas, subject to annual availability.",
        },
        {
          heading: "Eligibility & Fee Structure",
          body: "Programme-wise eligibility and the approved fee structure are published with each admission notification. Fees are payable through the official online payment channel only.",
        },
        {
          heading: "International Students",
          body: "Applications from foreign nationals are processed as per university regulations and the requirements of the Government of India.",
        },
        {
          heading: "Merit Lists & Counselling",
          body: "Merit lists, counselling schedules and seat allotment details are published on the notifications page as they are released.",
          links: [{ label: "Latest notifications", to: "/notifications" }],
        },
        {
          heading: "Frequently Asked Questions",
          body: "When does PG admission open? Admission opens after the annual PG notification is published. Where do I pay fees? Only through the official payment link given in the notification. Where are merit lists published? On the university notifications page.",
        },
      ]}
      note="Programme-wise dates, fees and prospectus documents are published only from official university notifications; nothing on this page should be treated as a substitute for the signed notification."
      related={[
        { label: "Examination", to: "/examination" },
        { label: "Results", to: "/results" },
        { label: "Departments", to: "/departments" },
        { label: "Academics", to: "/academics" },
      ]}
    />
  );
}
