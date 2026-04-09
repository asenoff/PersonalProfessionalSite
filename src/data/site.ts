export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Kaloyan Asenov",
  jobTitle: "Senior .NET Backend Engineer",
  positioning:
    "Senior .NET Backend Engineer for data-intensive and production-critical systems",
  summary:
    "10+ years in .NET and SQL Server, focused on backend development, query analysis, reporting performance, and legacy system improvement.",
  availability:
    "Open to fully remote part-time opportunities, around 4 hours per day.",
  siteUrl: "https://example.com",
  defaultTitle: "Kaloyan Asenov | Senior .NET Backend Engineer",
  defaultDescription:
    "Personal professional site for Kaloyan Asenov, a senior .NET backend engineer focused on data-intensive and production-critical systems."
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What I Help With", href: "/what-i-help-with" },
  { label: "Work", href: "/work" },
  { label: "Articles", href: "/articles" },
  { label: "Videos", href: "/videos" },
  { label: "Contact", href: "/contact" }
];

export const homeContent = {
  hero: {
    title: siteConfig.positioning,
    intro:
      "Placeholder introduction for a focused personal site about backend engineering, SQL-heavy systems, and practical improvement work.",
    supporting: siteConfig.availability
  },
  coreStrengths: [
    "Backend development in mature .NET codebases",
    "SQL Server query and reporting performance analysis",
    "Stabilizing systems that are already in production"
  ],
  bestFit: [
    "Teams with business-critical internal systems",
    "Products with data-heavy workflows or reporting bottlenecks",
    "Remote-first part-time engagements that need senior execution"
  ]
};

export const aboutContent = {
  specializations: [
    "Practical backend architecture in .NET applications",
    "SQL Server performance work tied to real business usage",
    "Incremental improvement of legacy systems without disruption"
  ],
  workStyle: [
    "Start with the current system and its real constraints",
    "Prefer changes that reduce risk before changes that add novelty",
    "Communicate clearly around tradeoffs, production impact, and next steps"
  ],
  highlights: [
    "10+ years working in .NET and SQL Server environments",
    "Experience with reporting, troubleshooting, and operationally sensitive systems",
    "Comfortable owning focused backend work in distributed teams"
  ]
};

export const helpAreas = [
  {
    title: ".NET backend development",
    description:
      "Placeholder scope for backend services, APIs, business logic, and maintainable changes in existing .NET applications."
  },
  {
    title: "SQL Server and data performance",
    description:
      "Placeholder scope for slow queries, reporting bottlenecks, indexing issues, and practical database-focused debugging."
  },
  {
    title: "Legacy systems",
    description:
      "Placeholder scope for improving mature systems that cannot be rebuilt and still need steady progress."
  },
  {
    title: "Production support and troubleshooting",
    description:
      "Placeholder scope for issue investigation, root-cause analysis, and targeted fixes in live environments."
  },
  {
    title: "Integrations and internal systems",
    description:
      "Placeholder scope for connecting internal tools, data flows, and business processes that need reliable backend support."
  }
];

export const videoPlaceholders = [
  {
    title: "Welcome video",
    summary:
      "Placeholder for a short introduction video about experience, focus areas, and the kind of remote work I am looking for."
  },
  {
    title: "Longer presentation video",
    summary:
      "Placeholder for a deeper talk or walkthrough related to backend engineering, SQL performance, or legacy system work."
  }
];

export const contactMethods = [
  "Email placeholder",
  "LinkedIn placeholder",
  "GitHub placeholder"
];
