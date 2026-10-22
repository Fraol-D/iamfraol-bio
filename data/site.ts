/**
 * Site-wide content, socials, and SEO.
 * Edit this file to change name, headline, contact details, links, and metadata.
 */

export const site = {
  name: "Fraol Ashebir Demisse",
  shortName: "Fraol",
  role: "Software Engineer",
  location: "Addis Ababa, Ethiopia",
  availability: "Open to software engineering roles — remote or on-site",

  headline: "Software engineer building full-stack products.",
  summary:
    "I design and ship the interface, the API, and the data model. Strongest recent work is Veris — a GitHub-native system that helps reviewers understand and risk-assess pull requests written by coding agents.",

  about: [
    "I work end to end: React and Next.js on the frontend, Node and FastAPI on the backend, and Postgres when the product needs a real data model.",
    "Veris is the strongest example: a GitHub App that analyzes agent-written pull requests for scope, impact, and missing work, then returns an evidence-backed merge recommendation. Getdodos, Briefr, and AppealMD were built the same way — complete products, not isolated demos.",
    "I have a B.S. in Computer Science from Unity University and I am looking for software engineering roles where I can own features and keep shipping useful products.",
  ],

  email: "fraolashebir84@gmail.com",
  phone: "+251 974 07 97 48",
  resumePath: "/Fraol-Resume-V18-Oct-2026.pdf",
  photo: {
    src: "/images/fraol.jpg",
    alt: "Portrait of Fraol Ashebir Demisse",
  },

  /**
   * Canonical site URL used for metadata, sitemap, and Open Graph.
   * Update this when the production domain changes.
   */
  url: "https://fraaol.vercel.app",

  socials: {
    github: "https://github.com/Fraol-D",
    linkedin: "https://www.linkedin.com/in/fraol-ashebir-218b89239/",
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Resume", href: "/Fraol-Resume-V18-Oct-2026.pdf" },
    { label: "Contact", href: "#contact" },
  ],

  seo: {
    title: "Fraol Ashebir Demisse — Software Engineer",
    description:
      "Software engineer who builds full-stack products. Flagship project: Veris, a GitHub-native system for reviewing and risk-assessing agent-generated pull requests.",
    keywords: [
      "Fraol Ashebir Demisse",
      "software engineer",
      "full-stack developer",
      "Veris",
      "Next.js",
      "React",
      "TypeScript",
    ],
  },
} as const;

export type SiteConfig = typeof site;
