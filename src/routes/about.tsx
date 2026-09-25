import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { breadcrumbLd } from "@/components/site/Page";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Karnataka University Dharwad — Profile, History & Vision" },
      {
        name: "description",
        content:
          "Profile of Karnataka University Dharwad: established in 1949, statutory status from 1 March 1950, campus at Pavate Nagar, faculties, emblem and governing Act.",
      },
      { property: "og:title", content: "About Karnataka University Dharwad" },
      {
        property: "og:description",
        content:
          "History, vision and mission, campus and statutory profile of Karnataka University Dharwad.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", item: "/" },
        { name: "About", item: "/about" },
      ]),
    ],
  }),
});

function About() {
  return (
    <InfoPage
      title="About Karnataka University Dharwad"
      intro="Karnataka University Dharwad is a public university in North Karnataka offering postgraduate, doctoral and affiliated undergraduate education across seven faculties."
      crumbs={[{ label: "About", to: "/about" }]}
      blocks={[
        {
          heading: "University Profile",
          body: "Established in 1949 and granted statutory university status on 1 March 1950, the university is located at Pavate Nagar, Dharwad. Its jurisdiction covers the districts of Dharwad, Gadag, Haveri and Uttara Kannada.",
        },
        {
          heading: "History",
          body: "The university grew out of the long academic tradition of Dharwad and has since developed into one of Karnataka's established centres of postgraduate teaching and research.",
        },
        {
          heading: "Vision & Mission",
          body: "To advance knowledge through quality teaching, research and extension, and to widen access to higher education across the region served by the university.",
        },
        {
          heading: "University Emblem",
          body: "The university emblem represents the institution's academic identity and is used on official documents, certificates and publications.",
        },
        {
          heading: "Campus",
          body: "The main campus at Pavate Nagar houses postgraduate departments, the central library, hostels, sports facilities, the health centre and administrative offices.",
          links: [{ label: "Campus & Facilities", to: "/facilities" }],
        },
        {
          heading: "University Act & Statutes",
          body: "The university functions under the Karnataka State Universities Act and the statutes, ordinances and regulations approved by its statutory bodies.",
          links: [{ label: "Administration", to: "/administration" }],
        },
      ]}
      note="Detailed profiles, award records and former Vice-Chancellor listings are maintained by the university administration and will be published here as official records are supplied."
      related={[
        { label: "Administration", to: "/administration" },
        { label: "Academics", to: "/academics" },
        { label: "IQAC & NAAC", to: "/iqac" },
        { label: "Contact", to: "/contact" },
      ]}
    />
  );
}
