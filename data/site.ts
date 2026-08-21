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

  headline: "Software engineer building products end to end.",
  summary:
    "I design and ship full-stack applications — developer tools, marketplaces, and AI-assisted workflows — with a bias toward clear interfaces and systems that hold up in use.",

  about: [
    "I work across the stack: React and Next.js on the frontend, Node and FastAPI on the backend, and Postgres when the product needs a real data model. The through-line is product work — not isolated demos.",
    "Recent projects include Veris (GitHub PR risk analysis), Getdodos (tutoring marketplace with payments), AppealMD (dental insurance appeal letters), and Briefr (sourced research briefs).",
    "I am finishing a B.S. in Computer Science at Unity University and looking for software engineering roles where I can own features and keep shipping useful products.",
  ],

  email: "fraolashebir84@gmail.com",
  phone: "+251 974 07 97 48",
  resumePath: "/Fraol-Ashebir-Demisse-Resume.pdf",
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
    { label: "Contact", href: "#contact" },
  ],

  seo: {
    title: "Fraol Ashebir Demisse — Software Engineer",
    description:
      "Software engineer and product builder. Full-stack work across React, Next.js, Node.js, and AI-assisted tools. Selected projects: Veris, Getdodos, AppealMD, and Briefr.",
    keywords: [
      "Fraol Ashebir Demisse",
      "software engineer",
      "full-stack developer",
      "Next.js",
      "React",
      "TypeScript",
      "portfolio",
    ],
  },
} as const;

export type SiteConfig = typeof site;
