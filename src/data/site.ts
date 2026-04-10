export type NavItem = {
  label: string;
  href: string;
};

export type SiteIconName =
  | "award"
  | "briefcase"
  | "clock"
  | "copy"
  | "database"
  | "github"
  | "graduation"
  | "layers"
  | "linkedin"
  | "mail"
  | "send"
  | "shield"
  | "wrench";

export type ContactMethod = {
  title: string;
  value: string;
  description: string;
  icon: SiteIconName;
  href?: string;
  actionLabel: string;
  external?: boolean;
  copyOnly?: boolean;
};

export type ContactFormTopic = {
  value: string;
  label: string;
};

export type AboutStat = {
  value: string;
  label: string;
  description: string;
  icon: SiteIconName;
};

export type AboutFocusArea = {
  title: string;
  description: string;
  icon: SiteIconName;
};

export type AboutListBlock = {
  title: string;
  items: string[];
};

export type AboutAccordionSection = {
  title: string;
  summary: string;
  icon: SiteIconName;
  paragraphs: string[];
  listBlocks?: AboutListBlock[];
  closing?: string;
};

export type AboutCurrentFocus = {
  intro: string;
  items: string[];
  note: string;
};

export type AboutTimelineChip = {
  label: string;
  detail: string;
};

export type AboutTimelineEntry = {
  period: string;
  title: string;
  organization: string;
  summary: string;
  location?: string;
  chips: AboutTimelineChip[];
};

export type AboutTimelineGroup = {
  title: string;
  intro: string;
  icon: SiteIconName;
  entries: AboutTimelineEntry[];
};

export type HelpQuickCheck = {
  title: string;
  description: string;
  icon: SiteIconName;
};

export type HelpArea = {
  title: string;
  icon: SiteIconName;
  paragraphs: string[];
  listLabel?: string;
  items?: string[];
  closing?: string;
};

export type HelpContribution = {
  text: string;
  icon: SiteIconName;
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
  siteUrl: "https://asenoff.net",
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

export const aboutPageContent = {
  heroLead:
    "I’m Kaloyan Asenov, a senior .NET backend engineer with over 10 years of experience building and maintaining data-intensive systems across enterprise and product environments.",
  heroBody:
    "My core expertise is in backend development around .NET and SQL Server, with a strong focus on correctness, performance, and long-term maintainability. I have worked across financial systems, public-sector platforms, ERP implementations, logistics solutions, and internal business tools, often where reliability and data integrity are critical.",
  stats: [
    {
      value: "10+ years",
      label: "Production software experience",
      description:
        "Hands-on work across mature .NET systems, SQL-heavy applications, and operationally sensitive environments.",
      icon: "clock"
    },
    {
      value: "20+ projects",
      label: "Delivered in real-world settings",
      description:
        "Experience across enterprise, product, ERP, logistics, and internal business systems.",
      icon: "briefcase"
    },
    {
      value: ".NET + SQL Server",
      label: "Core technical depth",
      description:
        "Backend correctness, data integrity, query analysis, and long-term maintainability.",
      icon: "database"
    },
    {
      value: "End-to-end when needed",
      label: "Ownership beyond one layer",
      description:
        "Comfortable spanning backend, full-stack delivery, integrations, automation, and mobile work.",
      icon: "shield"
    }
  ] satisfies AboutStat[],
  focusAreas: [
    {
      title: ".NET backend ecosystems",
      description:
        "Designing and evolving backend systems in mature .NET codebases with an emphasis on correctness, clarity, and maintainable change.",
      icon: "layers"
    },
    {
      title: "SQL Server and data performance",
      description:
        "Working on query behavior, reporting bottlenecks, data transformation flows, and data-heavy system behavior tied to real usage.",
      icon: "database"
    },
    {
      title: "Legacy modernization",
      description:
        "Stabilizing older systems and improving them incrementally without unnecessary disruption, rewrites, or avoidable delivery risk.",
      icon: "wrench"
    },
    {
      title: "Integrations and end-to-end delivery",
      description:
        "Building practical solutions that can span backend services, mobile apps, automation, APIs, and operational support when the project requires it.",
      icon: "briefcase"
    }
  ] satisfies AboutFocusArea[],
  accordionSections: [
    {
      title: "Experience and scope",
      summary:
        "10+ years across enterprise, product, ERP, logistics, and internal business systems.",
      icon: "layers",
      paragraphs: [
        "I’ve contributed to and taken ownership in two dozen or more real-world projects, working alongside dozens of engineers, stakeholders, and cross-functional teams.",
        "That experience spans both structured engineering teams and independent end-to-end delivery, which has given me a practical understanding of how systems, teams, and business constraints shape technical decisions."
      ],
      listBlocks: [
        {
          title: "Typical scope",
          items: [
            "Backend development in .NET ecosystems",
            "SQL Server, query analysis, and performance optimization",
            "Data-heavy workflows, reporting systems, and transformation pipelines",
            "Legacy systems, stabilization, and incremental modernization",
            "Full-stack development where the project needs it",
            "Mobile development with Xamarin and external-system integrations",
            "Internal tooling, automation, and API-based sync workflows"
          ]
        },
        {
          title: "Delivery modes",
          items: [
            "Contributing inside distributed teams",
            "Taking ownership for focused production-critical work",
            "Delivering complete solutions independently when required"
          ]
        }
      ],
      closing:
        "This range has made me pragmatic about trade-offs and careful about how engineering choices interact with business reality."
    },
    {
      title: "How I work",
      summary:
        "Balancing technical quality with delivery pressure, project lifecycle, and operational constraints.",
      icon: "wrench",
      paragraphs: [
        "I approach engineering as a balance between technical quality and business reality.",
        "Different teams and clients need different things. Sometimes the priority is speed, sometimes stability, often both. My role is to understand those constraints and make decisions that serve the system in its real context."
      ],
      listBlocks: [
        {
          title: "I focus on",
          items: [
            "Building solutions that are correct and reliable first",
            "Improving systems without unnecessary disruption",
            "Choosing approaches that fit the project lifecycle and constraints",
            "Communicating trade-offs between speed, complexity, and long-term maintenance"
          ]
        },
        {
          title: "I invest in",
          items: [
            "Maintainability",
            "Testability",
            "Clear structure and documentation"
          ]
        }
      ],
      closing:
        "Not as ideals, but as practical tools that reduce long-term cost and risk."
    },
    {
      title: "Reliability and ownership",
      summary:
        "Comfortable in production-critical environments and methodical in investigation and follow-through.",
      icon: "shield",
      paragraphs: [
        "A consistent theme in my work is reliability, both in the systems I build and in how I work.",
        "I’m comfortable operating in production-critical environments, investigating complex issues, and working methodically toward solutions.",
        "I take ownership of problems, follow them through, and aim to leave systems in a better state than I found them.",
        "I’m also self-driven: I can work independently, integrate into distributed teams, and contribute consistently without requiring heavy supervision."
      ]
    },
    {
      title: "Communication and collaboration",
      summary:
        "Clear, respectful communication for teammates, stakeholders, and clients in complex environments.",
      icon: "award",
      paragraphs: [
        "Technical work is always connected to people and context.",
        "I’ve invested in improving how I communicate and collaborate, including formal training in Nonviolent Communication (Level 1).",
        "That supports a more structured, respectful, and effective way of working with teammates, stakeholders, and clients, especially in complex or high-pressure situations."
      ],
      closing:
        "Clarity around trade-offs, risks, and next steps is part of the work, not an afterthought."
    },
    {
      title: "Practical mindset",
      summary:
        "Grounded problem-solving shaped by how real systems behave rather than how we wish they behaved.",
      icon: "briefcase",
      paragraphs: [
        "At the core, I’m someone who solves real-world problems. That applies equally to software and outside of it.",
        "I’ve built much of the electrical and plumbing systems in my own home, and I’ve replaced the heater core of my Volkswagen three times, each time a multi-day process.",
        "Those experiences reinforce the same mindset I bring to engineering: understand the system, work through constraints, and solve the problem properly."
      ]
    }
  ] satisfies AboutAccordionSection[],
  currentFocus: {
    intro:
      "Today, I’m continuing to deepen my expertise in the parts of backend engineering where performance and operational clarity matter most.",
    items: [
      "Database performance",
      "Query optimization",
      "Efficient data processing"
    ],
    note:
      "I’m particularly interested in work where software has real operational impact, systems that need to be correct, stable, and maintainable over time."
  } satisfies AboutCurrentFocus
} as const;

export const aboutTimelineGroups: AboutTimelineGroup[] = [
  {
    title: "Experience",
    intro:
      "A condensed view of roles, domains, and responsibilities. Hover or focus the chips for more detail.",
    icon: "briefcase",
    entries: [
      {
        period: "May 2025 - Present",
        title: "Software Developer",
        organization: "Rarch Design Studio",
        summary:
          "Delivering end-to-end technical solutions for a mid-sized business across web platforms, integrations, and infrastructure.",
        chips: [
          {
            label: "WordPress",
            detail:
              "Developed and maintained WordPress platforms, including custom plugin work and backend/frontend performance optimization."
          },
          {
            label: "Odoo sync",
            detail:
              "Contributed to Odoo SaaS integration work, including API-based WooCommerce to Odoo synchronization scripts."
          },
          {
            label: "Automation",
            detail:
              "Built internal automation tooling, including a Python-based backup workflow."
          }
        ]
      },
      {
        period: "Sep 2023 - Apr 2025",
        title: ".NET Developer",
        organization: "Sirma",
        summary:
          "Worked on enterprise projects in the public and banking sectors with emphasis on data-intensive systems, performance, and legacy modernization.",
        chips: [
          {
            label: "Financial system",
            detail:
              "Delivered backend and full-stack enhancements in a national-level financial system."
          },
          {
            label: "Data Mart",
            detail:
              "Contributed to a Data Mart solution that bridged business requirements with legacy data structures."
          },
          {
            label: "Performance",
            detail:
              "Analyzed bottlenecks, data flows, and legacy behavior in high-stakes environments."
          }
        ]
      },
      {
        period: "Jul 2017 - Apr 2023",
        title: "Software Developer",
        organization: "Self-Employed",
        summary:
          "Delivered end-to-end .NET full-stack and mobile solutions across multiple projects and clients, both independently and with distributed teams.",
        chips: [
          {
            label: "Xamarin apps",
            detail:
              "Designed, developed, and deployed mobile applications independently, including a logistics solution still in active use."
          },
          {
            label: "Production systems",
            detail:
              "Contributed to long-term and production-critical systems where continuity and reliability mattered."
          },
          {
            label: "Distributed teams",
            detail:
              "Worked both independently and as part of remote engineering teams across varied domains."
          }
        ]
      },
      {
        period: "Jul 2018 - Dec 2020",
        title: "Software Developer",
        organization: "Application Software Systems",
        location: "Sofia City, Bulgaria",
        summary:
          "Took technical ownership for a client-specific ERP implementation in a legacy .NET, WPF, and SQL Server environment.",
        chips: [
          {
            label: "ERP ownership",
            detail:
              "Delivered full-stack enhancements, system extensions, and ongoing production support."
          },
          {
            label: "SQL incidents",
            detail:
              "Resolved issues involving data consistency, long-running queries, and deadlocks."
          },
          {
            label: "Client contact",
            detail:
              "Acted as a primary technical contact for planning, deployments, and follow-through."
          }
        ]
      },
      {
        period: "Apr 2014 - Jun 2017",
        title: "Software Developer",
        organization: "Application Software Systems",
        location: "Sofia City, Bulgaria",
        summary:
          "Worked on a JavaScript-based RAD platform and supported a client-facing education system across frontend and backend layers.",
        chips: [
          {
            label: "ExtJS + Kendo",
            detail:
              "Implemented UI components and solved non-trivial layout and coordinate transformation problems."
          },
          {
            label: "Generator work",
            detail:
              "Extended generator functionality inside a complex enterprise platform."
          },
          {
            label: "ASP.NET Web API",
            detail:
              "Participated in full-stack development and SQL-backed support work."
          }
        ]
      },
      {
        period: "Nov 2013 - Mar 2014",
        title: "Software Developer",
        organization: "Tehnologii za otchet OOD",
        location: "Sofia City, Bulgaria",
        summary:
          "Built and shipped a mobile application for a fleet management system from implementation through production release.",
        chips: [
          {
            label: "REST APIs",
            detail:
              "Integrated with backend services via REST APIs and extended existing endpoints where needed."
          },
          {
            label: "SQL Server",
            detail:
              "Worked with SQL Server-backed data and stored procedures."
          },
          {
            label: "Tracking UI",
            detail:
              "Implemented real-time vehicle tracking and Google Maps visualization."
          }
        ]
      },
      {
        period: "Jan 2013 - Oct 2013",
        title: "Customer Support",
        organization: "Tehnologii za otchet OOD",
        location: "Sofia City, Bulgaria",
        summary:
          "Created user documentation for GPS tracking web applications and gained early exposure to system workflows and end-user requirements.",
        chips: [
          {
            label: "User docs",
            detail:
              "Produced documentation that translated system behavior into practical user-facing guidance."
          },
          {
            label: "Workflow context",
            detail:
              "This role grounded later engineering work in real operational needs and user problems."
          }
        ]
      },
      {
        period: "Jul 2009 - Aug 2009",
        title: "Trainee at Operation and Maintenance Division",
        organization: "Cosmo Bulgaria Mobile",
        location: "Sofia, Bulgaria",
        summary:
          "Gained early exposure to telecom infrastructure, monitoring, and maintenance processes.",
        chips: [
          {
            label: "GSM / UMTS",
            detail:
              "Observed base stations, radio-relay systems, and operational telecom workflows."
          },
          {
            label: "Foundations",
            detail:
              "Built an early understanding of system operations, monitoring, and maintenance."
          }
        ]
      }
    ]
  },
  {
    title: "Education",
    intro:
      "Formal education, intensive training, and language background that shaped both technical depth and communication.",
    icon: "graduation",
    entries: [
      {
        period: "2012 - 2013",
        title: "Computer Programming and Front-end",
        organization: "Telerik Academy",
        summary:
          "Completed an intensive one-year track covering programming fundamentals, C#, JavaScript, frontend work, and a final specialization in web programming.",
        chips: [
          {
            label: "C#",
            detail: "Strong grounding in C# and application development."
          },
          {
            label: "JavaScript",
            detail: "Formal training in JavaScript and frontend fundamentals."
          },
          {
            label: "ASP.NET",
            detail:
              "Final specialization in web programming with ASP.NET Web Forms and MVC."
          }
        ]
      },
      {
        period: "2011 - 2013",
        title: "Master’s Degree, Telecommunications Engineering",
        organization: "Technical University Sofia",
        summary:
          "Advanced engineering study that reinforced systems thinking, infrastructure awareness, and analytical rigor.",
        chips: [
          {
            label: "Engineering",
            detail:
              "Graduate study in telecommunications engineering and related system disciplines."
          }
        ]
      },
      {
        period: "2010",
        title: "Telecommunications Engineering",
        organization: "Technische Universitat Darmstadt",
        summary:
          "Prepared and defended bachelor-thesis work in an international academic setting.",
        chips: [
          {
            label: "Thesis work",
            detail: "Focused on bachelor thesis preparation and defence."
          },
          {
            label: "International",
            detail:
              "Academic experience in Germany with top grade A in the recorded coursework."
          }
        ]
      },
      {
        period: "2006 - 2010",
        title: "Bachelor’s Degree, Telecommunications Engineering",
        organization: "Technical University Sofia",
        summary:
          "Built the technical foundation in engineering, systems, and analytical problem-solving.",
        chips: [
          {
            label: "5.53 / 6.00",
            detail:
              "Graduated with a strong overall result in a demanding engineering program."
          }
        ]
      },
      {
        period: "2008",
        title: "Sprachkurs fur Deutsch",
        organization: "14. Osterreichisch-Bulgarischen Sommerkoleg",
        summary:
          "German language study that added another layer to international communication and learning.",
        chips: [
          {
            label: "German",
            detail: "Formal language-course participation in an Austrian-Bulgarian program."
          }
        ]
      },
      {
        period: "2001 - 2006",
        title: "High School, English Language",
        organization: "Simeon Radev Language School",
        summary:
          "Strong language-school foundation that supported later communication, study, and technical collaboration.",
        chips: [
          {
            label: "6.00 / 6.00",
            detail: "Graduated with the highest grade in the local scale."
          }
        ]
      }
    ]
  },
  {
    title: "Certificates and community",
    intro:
      "Professional training and a few markers of how I invest in communication, teaching, and continuous development.",
    icon: "award",
    entries: [
      {
        period: "Feb 2025",
        title: "Nonviolent Communication - Level 1",
        organization: "DOT-COMMA ASSOCIATION",
        summary:
          "Formal training in communication that supports more respectful and effective collaboration.",
        chips: [
          {
            label: "NVC Level 1",
            detail:
              "Structured training focused on clearer, more effective, and more respectful communication."
          },
          {
            label: "Credential",
            detail: "Credential ID: NNK-1-136"
          }
        ]
      },
      {
        period: "Feb 2016 - Apr 2016",
        title: "Volunteer Teacher",
        organization: "\"Simeon Radev\" Language School",
        summary:
          "Organized and led a pro bono extracurricular course in programming and web development basics for students.",
        chips: [
          {
            label: "Teaching",
            detail:
              "Led introductory programming and web-development sessions for students."
          }
        ]
      },
      {
        period: "Oct 2013",
        title: "C# Software Developer Track",
        organization: "Telerik Academy",
        summary:
          "Certification confirming focused training in C# software development.",
        chips: [
          {
            label: "C# track",
            detail:
              "Completion of Telerik Academy’s C# Software Developer track."
          }
        ]
      },
      {
        period: "Oct 2013",
        title: "Server-Side Developer Track",
        organization: "Telerik Academy",
        summary:
          "Certification validating server-side web-development training.",
        chips: [
          {
            label: "Server-side",
            detail:
              "Completion of Telerik Academy’s Server-Side Developer track."
          }
        ]
      },
      {
        period: "Oct 2010",
        title: "TOEFL - Score 107 out of 120",
        organization: "ETS Europe",
        summary:
          "High English-language proficiency score recorded before later professional and academic work.",
        chips: [
          {
            label: "107 / 120",
            detail:
              "TOEFL score recorded in October 2010, with the original certificate expiring in October 2012."
          }
        ]
      },
      {
        period: "Feb 2008",
        title: "Cambridge CAE, Council of Europe Level C1",
        organization: "University of Cambridge",
        summary:
          "Formal English-language certification at C1 level.",
        chips: [
          {
            label: "C1 level",
            detail:
              "Cambridge CAE certification aligned with Council of Europe level C1."
          }
        ]
      }
    ]
  }
];

export const helpPageContent = {
  heroLead:
    "I focus on backend and data-heavy systems, especially where reliability, clarity, and steady progress matter more than novelty.",
  heroBody:
    "Most of my work sits around .NET and SQL Server, often in environments where systems are already in use, data is important, and changes need to be made carefully.",
  heroSupport:
    "I can contribute across the stack when needed, but my strength is in backend logic, data handling, and making systems behave predictably under real-world conditions.",
  quickChecks: [
    {
      title: "Mature .NET systems",
      description:
        "Existing applications that need careful change rather than broad reinvention.",
      icon: "layers"
    },
    {
      title: "SQL-heavy workflows",
      description:
        "Reporting, stored procedures, data movement, and performance issues where correctness matters.",
      icon: "database"
    },
    {
      title: "Production and internal platforms",
      description:
        "Systems already carrying real work, where reliability matters more than novelty.",
      icon: "shield"
    }
  ] satisfies HelpQuickCheck[],
  areas: [
    {
      title: ".NET backend development",
      icon: "layers",
      paragraphs: [
        "I work on backend systems in .NET, including APIs, business logic, and improvements in existing applications.",
        "Most of my experience is in mature systems, where changes need to be made carefully and with a clear understanding of existing behavior."
      ],
      closing:
        "I focus on making code easier to reason about, safer to extend, and aligned with how the system is actually used."
    },
    {
      title: "SQL Server and data performance",
      icon: "database",
      paragraphs: [
        "A significant part of my work is around SQL Server and data-heavy workflows."
      ],
      listLabel: "I help with",
      items: [
        "Slow queries and reporting bottlenecks",
        "Complex stored procedures and data transformations",
        "Indexing and execution plan analysis",
        "Understanding and stabilizing unclear data flows"
      ],
      closing:
        "My approach is practical: understand how the data is used, identify where the real cost is, and improve performance without breaking correctness. Over time, I’m increasingly focusing on this area as a specialization."
    },
    {
      title: "Legacy systems",
      icon: "wrench",
      paragraphs: [
        "I’m comfortable working in systems that are already complex, imperfect, and in active use."
      ],
      listLabel: "Instead of pushing for full rewrites, I focus on",
      items: [
        "Understanding the current behavior",
        "Making safe, incremental improvements",
        "Reducing friction without introducing new risk"
      ],
      closing:
        "This is often where careful backend and data work has the most impact."
    },
    {
      title: "Production support and troubleshooting",
      icon: "shield",
      paragraphs: [
        "I can step into live systems and help diagnose issues that are not immediately obvious."
      ],
      listLabel: "This includes",
      items: [
        "Tracing data inconsistencies",
        "Investigating performance degradation",
        "Identifying root causes across application and database layers"
      ],
      closing:
        "The goal is not just to fix the issue, but to understand why it happened and prevent it from recurring."
    },
    {
      title: "Integrations and internal systems",
      icon: "briefcase",
      paragraphs: [
        "I work on connecting systems and supporting internal workflows where reliability matters more than visibility."
      ],
      listLabel: "This includes",
      items: [
        "API integrations",
        "Data synchronization between systems",
        "Internal tools and automation",
        "Backend support for business processes"
      ],
      closing:
        "These systems are often not visible externally, but they are critical to daily operations."
    }
  ] satisfies HelpArea[],
  contributions: [
    {
      text: "Steady backend contribution in existing systems",
      icon: "layers"
    },
    {
      text: "Support for data-heavy features and reporting",
      icon: "database"
    },
    {
      text: "Investigation and resolution of production issues",
      icon: "shield"
    },
    {
      text: "Pragmatic improvements aligned with business constraints",
      icon: "wrench"
    }
  ] satisfies HelpContribution[],
  direction:
    "While I work broadly across backend systems, I’m gradually moving toward deeper specialization in SQL Server performance and data-intensive problem solving."
} as const;

export const contactAvailability = {
  window: "06:30 - 17:00 GMT on weekdays",
  capacity: "Up to 4 focused hours per day",
  model: "Fully remote, part-time collaboration",
  note:
    "A fixed 4-hour overlap block can be agreed inside this window depending on the team and the work."
} as const;

export const contactMethods: ContactMethod[] = [
  {
    title: "LinkedIn",
    value: "linkedin.com/in/asenoff",
    description:
      "Best for direct professional outreach, hiring conversations, and role-fit context.",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/asenoff/",
    actionLabel: "Open LinkedIn",
    external: true
  },
  {
    title: "GitHub",
    value: "github.com/asenoff",
    description:
      "Useful if you want to review public code, activity, or technical context before reaching out.",
    icon: "github",
    href: "https://github.com/asenoff",
    actionLabel: "Open GitHub",
    external: true
  },
  {
    title: "Email",
    value: "kaloyan[at]asenoff.net",
    description:
      "Displayed in a masked format here. Use the copy action or the form below for a direct message.",
    icon: "mail",
    actionLabel: "Copy email address",
    copyOnly: true
  }
];

export const contactFormTopics: ContactFormTopic[] = [
  {
    value: "Remote part-time .NET backend role",
    label: "Remote part-time .NET backend role"
  },
  {
    value: "Consulting or contract inquiry",
    label: "Consulting or contract inquiry"
  },
  {
    value: "SQL Server performance or reporting work",
    label: "SQL Server performance or reporting work"
  },
  {
    value: "Legacy .NET system stabilization",
    label: "Legacy .NET system stabilization"
  },
  {
    value: "Technical conversation or speaking",
    label: "Technical conversation or speaking"
  },
  {
    value: "Other",
    label: "Other"
  }
];
