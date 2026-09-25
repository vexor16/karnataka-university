export const UNIVERSITY = {
  name: "Karnataka University Dharwad",
  nameKn: "ಕರ್ನಾಟಕ ವಿಶ್ವವಿದ್ಯಾಲಯ ಧಾರವಾಡ",
  tagline: "An Institution of Higher Learning",
  address: "Pavate Nagar, Dharwad – 580 003, Karnataka, India",
  email: "registrar@kud.ac.in",
  phone: "+91-0836-2447750 / 2215201",
};

export type NavItem = { label: string; to: string };
export type NavGroup = { label: string; to: string; items?: NavItem[] };

export const NAV: NavGroup[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    items: [
      { label: "University Profile", to: "/about" },
      { label: "History", to: "/about" },
      { label: "Vision & Mission", to: "/about" },
      { label: "University Emblem", to: "/about" },
      { label: "Campus", to: "/facilities" },
      { label: "Awards & Recognition", to: "/about" },
      { label: "University Act & Statutes", to: "/about" },
    ],
  },
  {
    label: "Administration",
    to: "/administration",
    items: [
      { label: "Chancellor", to: "/administration" },
      { label: "Vice-Chancellor", to: "/administration" },
      { label: "Registrar", to: "/administration" },
      { label: "Registrar (Evaluation)", to: "/administration" },
      { label: "Finance Officer", to: "/administration" },
      { label: "Syndicate", to: "/administration" },
      { label: "Academic Council", to: "/administration" },
      { label: "Deans", to: "/administration" },
    ],
  },
  {
    label: "Academics",
    to: "/academics",
    items: [
      { label: "Faculties", to: "/academics" },
      { label: "Departments", to: "/departments" },
      { label: "Programmes", to: "/academics" },
      { label: "Syllabus", to: "/academics" },
      { label: "NEP 2020", to: "/academics" },
      { label: "Academic Calendar", to: "/academics" },
      { label: "Affiliated Colleges", to: "/academics" },
    ],
  },
  {
    label: "Admissions",
    to: "/admissions",
    items: [
      { label: "UG Admissions", to: "/admissions" },
      { label: "PG Admissions", to: "/admissions" },
      { label: "PhD Admissions", to: "/admissions" },
      { label: "Diploma / Certificate", to: "/admissions" },
      { label: "Fee Structure", to: "/admissions" },
      { label: "Eligibility", to: "/admissions" },
      { label: "International Students", to: "/admissions" },
    ],
  },
  {
    label: "Examination",
    to: "/examination",
    items: [
      { label: "Examination Notifications", to: "/examination" },
      { label: "Exam Forms", to: "/examination" },
      { label: "Time Tables", to: "/examination" },
      { label: "Hall Tickets", to: "/examination" },
      { label: "Results", to: "/results" },
      { label: "Revaluation", to: "/results" },
      { label: "Convocation", to: "/examination" },
    ],
  },
  {
    label: "Research",
    to: "/research",
    items: [
      { label: "Research Overview", to: "/research" },
      { label: "PhD Programmes", to: "/research" },
      { label: "Research Centres", to: "/research" },
      { label: "Publications", to: "/research" },
      { label: "Projects & Funding", to: "/research" },
      { label: "Innovation", to: "/research" },
    ],
  },
  {
    label: "IQAC",
    to: "/iqac",
    items: [
      { label: "About IQAC", to: "/iqac" },
      { label: "NAAC", to: "/iqac" },
      { label: "AQAR", to: "/iqac" },
      { label: "SSR", to: "/iqac" },
      { label: "Reports", to: "/iqac" },
    ],
  },
  {
    label: "Library",
    to: "/library",
    items: [
      { label: "Central Library", to: "/library" },
      { label: "Digital Library", to: "/library" },
      { label: "E-Resources", to: "/library" },
      { label: "OPAC", to: "/library" },
      { label: "Institutional Repository", to: "/library" },
    ],
  },
  {
    label: "Students",
    to: "/student-services",
    items: [
      { label: "Scholarships", to: "/student-services" },
      { label: "Student Welfare", to: "/student-services" },
      { label: "Placement Cell", to: "/student-services" },
      { label: "Anti-Ragging", to: "/student-services" },
      { label: "Grievance Redressal", to: "/student-services" },
      { label: "NSS & Sports", to: "/student-services" },
      { label: "Hostel & Health Centre", to: "/student-services" },
    ],
  },
  {
    label: "Notifications",
    to: "/notifications",
    items: [
      { label: "Latest Notifications", to: "/notifications" },
      { label: "Examination", to: "/notifications" },
      { label: "Admissions", to: "/notifications" },
      { label: "Recruitment", to: "/notifications" },
      { label: "Circulars", to: "/notifications" },
      { label: "Tenders", to: "/notifications" },
    ],
  },
  { label: "RTI", to: "/rti" },
  { label: "Alumni", to: "/alumni" },
  { label: "Contact", to: "/contact" },
];

export const QUICK_ACCESS: { label: string; to: string; external?: boolean }[] = [
  { label: "Admissions", to: "/admissions" },
  { label: "Results", to: "/results" },
  { label: "Examination", to: "/examination" },
  { label: "Notifications", to: "/notifications" },
  { label: "UUCMS", to: "https://uucms.karnataka.gov.in/", external: true },
  { label: "Syllabus", to: "/academics" },
  { label: "Convocation", to: "/examination" },
  { label: "Online Fee Payment", to: "/admissions" },
  { label: "Academic Calendar", to: "/academics" },
  { label: "Affiliated Colleges", to: "/academics" },
  { label: "Library", to: "/library" },
  { label: "Webmail", to: "/contact" },
];

export type NotificationCategory =
  | "Admission"
  | "Examination"
  | "Academic"
  | "Recruitment"
  | "Circular"
  | "Result"
  | "Tender"
  | "General";

export type Notification = {
  id: string;
  title: string;
  category: NotificationCategory;
  date: string;
  isNew?: boolean;
  href: string;
};

/** Sample records with the CMS-ready shape. Replace with live data. */
export const NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    title: "UG R-NEP 3rd & 5th Semester Examination Form Notification",
    category: "Examination",
    date: "2026-09-23",
    isNew: true,
    href: "/notifications",
  },
  {
    id: "n2",
    title: "PG Admission Notification 2026–27",
    category: "Admission",
    date: "2026-09-18",
    isNew: true,
    href: "/notifications",
  },
  {
    id: "n3",
    title: "Annual Convocation Notification",
    category: "General",
    date: "2026-09-12",
    isNew: true,
    href: "/notifications",
  },
  {
    id: "n4",
    title: "PG Examination Time Table — Odd Semester",
    category: "Examination",
    date: "2026-09-05",
    href: "/notifications",
  },
  {
    id: "n5",
    title: "Recruitment of Teaching Posts — Application Notice",
    category: "Recruitment",
    date: "2026-08-29",
    href: "/notifications",
  },
  {
    id: "n6",
    title: "Revised Academic Calendar for the Academic Year",
    category: "Academic",
    date: "2026-08-21",
    href: "/notifications",
  },
  {
    id: "n7",
    title: "Circular — Submission of Internal Assessment Marks",
    category: "Circular",
    date: "2026-08-14",
    href: "/notifications",
  },
  {
    id: "n8",
    title: "UG External Examination Results Announced",
    category: "Result",
    date: "2026-08-02",
    href: "/notifications",
  },
  {
    id: "n9",
    title: "Tender for Supply of Laboratory Equipment",
    category: "Tender",
    date: "2026-07-25",
    href: "/notifications",
  },
  {
    id: "n10",
    title: "Ph.D. Entrance Test Notification",
    category: "Admission",
    date: "2026-07-16",
    href: "/notifications",
  },
];

export const STATS = [
  { value: "51+", label: "PG Departments" },
  { value: "154+", label: "Faculty Members" },
  { value: "4,500+", label: "Students" },
  { value: "888", label: "Acres Campus" },
];

export const FACULTIES = [
  { name: "Faculty of Arts", slug: "arts" },
  { name: "Faculty of Commerce", slug: "commerce" },
  { name: "Faculty of Education", slug: "education" },
  { name: "Faculty of Law", slug: "law" },
  { name: "Faculty of Management", slug: "management" },
  { name: "Faculty of Science & Technology", slug: "science-technology" },
  { name: "Faculty of Social Sciences", slug: "social-sciences" },
];

export type Department = {
  slug: string;
  name: string;
  faculty: string;
  programmes: string[];
  summary: string;
};

export const DEPARTMENTS: Department[] = [
  {
    slug: "chemistry",
    name: "Department of Chemistry",
    faculty: "Faculty of Science & Technology",
    programmes: ["M.Sc. Chemistry", "Ph.D. Chemistry"],
    summary:
      "Postgraduate teaching and doctoral research in organic, inorganic, physical and analytical chemistry, supported by central instrumentation facilities.",
  },
  {
    slug: "physics",
    name: "Department of Physics",
    faculty: "Faculty of Science & Technology",
    programmes: ["M.Sc. Physics", "Ph.D. Physics"],
    summary:
      "Teaching and research in condensed matter, materials science and applied physics, with well-equipped postgraduate laboratories.",
  },
  {
    slug: "mathematics",
    name: "Department of Mathematics",
    faculty: "Faculty of Science & Technology",
    programmes: ["M.Sc. Mathematics", "Ph.D. Mathematics"],
    summary:
      "Programmes in pure and applied mathematics with research in algebra, analysis and mathematical modelling.",
  },
  {
    slug: "computer-science",
    name: "Department of Computer Science",
    faculty: "Faculty of Science & Technology",
    programmes: ["M.Sc. Computer Science", "MCA", "Ph.D."],
    summary:
      "Computing education and research covering data science, networks, software engineering and artificial intelligence.",
  },
  {
    slug: "history-and-archaeology",
    name: "Department of History and Archaeology",
    faculty: "Faculty of Arts",
    programmes: ["M.A. History", "Ph.D. History"],
    summary:
      "Study of regional and national history, epigraphy, archaeology and heritage documentation of North Karnataka.",
  },
  {
    slug: "kannada",
    name: "Department of Kannada",
    faculty: "Faculty of Arts",
    programmes: ["M.A. Kannada", "Ph.D. Kannada"],
    summary:
      "Kannada language, literature, folklore and translation studies, with a long tradition of literary scholarship.",
  },
  {
    slug: "english",
    name: "Department of English",
    faculty: "Faculty of Arts",
    programmes: ["M.A. English", "Ph.D. English"],
    summary:
      "Literary studies, linguistics and communication skills, including comparative and postcolonial literature.",
  },
  {
    slug: "economics",
    name: "Department of Economics",
    faculty: "Faculty of Social Sciences",
    programmes: ["M.A. Economics", "Ph.D. Economics"],
    summary:
      "Economic theory, development studies and applied research on the regional economy of Karnataka.",
  },
  {
    slug: "political-science",
    name: "Department of Political Science",
    faculty: "Faculty of Social Sciences",
    programmes: ["M.A. Political Science", "Ph.D."],
    summary:
      "Governance, public administration, international relations and political thought.",
  },
  {
    slug: "commerce",
    name: "Department of Commerce",
    faculty: "Faculty of Commerce",
    programmes: ["M.Com.", "Ph.D. Commerce"],
    summary:
      "Accounting, finance, taxation and business research for postgraduate and doctoral students.",
  },
  {
    slug: "management-studies",
    name: "Department of Management Studies",
    faculty: "Faculty of Management",
    programmes: ["MBA", "Ph.D. Management"],
    summary:
      "Professional management education with specialisations in marketing, finance, human resources and analytics.",
  },
  {
    slug: "law",
    name: "Department of Studies in Law",
    faculty: "Faculty of Law",
    programmes: ["LL.M.", "Ph.D. Law"],
    summary:
      "Advanced legal education, constitutional studies and research on human rights and criminal law.",
  },
  {
    slug: "education",
    name: "Department of Education",
    faculty: "Faculty of Education",
    programmes: ["M.Ed.", "Ph.D. Education"],
    summary:
      "Teacher education, pedagogy research and curriculum studies aligned with NEP 2020.",
  },
];

export const IMPORTANT_LINKS = [
  { label: "UUCMS", href: "https://uucms.karnataka.gov.in/" },
  { label: "UGC", href: "https://www.ugc.gov.in/" },
  { label: "Ministry of Education", href: "https://www.education.gov.in/" },
  { label: "DigiLocker", href: "https://www.digilocker.gov.in/" },
  { label: "National Academic Depository", href: "https://nad.digilocker.gov.in/" },
  { label: "NPTEL", href: "https://nptel.ac.in/" },
  { label: "Vidwan", href: "https://vidwan.inflibnet.ac.in/" },
  { label: "State Scholarship Portal (SSP)", href: "https://ssp.postmatric.karnataka.gov.in/" },
  { label: "NAAC", href: "https://www.naac.gov.in/" },
];

export const NEWS = [
  {
    id: "e1",
    title: "National Conference on Materials Science",
    category: "Conference",
    date: "2026-09-20",
    excerpt:
      "The Faculty of Science & Technology hosts a national conference on advanced materials and characterisation techniques.",
  },
  {
    id: "e2",
    title: "Workshop on Research Methodology for Ph.D. Scholars",
    category: "Workshop",
    date: "2026-09-10",
    excerpt:
      "A week-long workshop covering research design, data analysis and academic writing for doctoral scholars.",
  },
  {
    id: "e3",
    title: "Annual Inter-Collegiate Sports Meet",
    category: "Student Event",
    date: "2026-08-30",
    excerpt:
      "Affiliated colleges across the university jurisdiction take part in the annual athletics and team sports meet.",
  },
];
