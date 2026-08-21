/**
 * Centralized project data.
 *
 * Adding a project
 * ----------------
 * 1. Add a screenshot to `public/projects/` (PNG, JPG, WEBP, or SVG).
 * 2. Copy the template object below into the `projects` array.
 * 3. Fill in the fields. Set `featured: true` for strongest/recent work.
 * 4. Deploy. No component or page edits are required.
 *
 * Ordering
 * --------
 * Featured projects (`featured: true`) appear first, in a larger layout.
 * Non-featured projects appear in "Other work".
 * Within each group, newer `date` values appear first.
 * You do not need to reorder this array by hand.
 *
 * Links
 * -----
 * Omit `githubUrl` or `liveUrl` (or set them to `null`) to hide that button.
 */

export type ProjectStatus = "shipped" | "in-progress" | "archived";

export type Project = {
  /** Unique kebab-case id. Used as a React key. */
  id: string;
  title: string;
  /** One-line recruiter-facing summary shown on cards. */
  shortDescription: string;
  /** Longer description used on the primary featured card. */
  description: string;
  /**
   * Path under `public/`, e.g. `/projects/veris.svg`.
   * Replace placeholder artwork with a real screenshot when you have one.
   */
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  /** ISO date (`YYYY-MM-DD`). Newer dates rank higher within featured / other. */
  date: string;
  /** `true` → Featured work. `false` → Other work. */
  featured: boolean;
  status?: ProjectStatus;
  category?: string;
};

/*
  Template — paste into `projects`, then fill in:

  {
    id: "project-id",
    title: "Project name",
    shortDescription: "One sentence for recruiters.",
    description:
      "Two or three sentences: what it is, who it is for, and what you built.",
    image: "/projects/placeholder.svg",
    imageAlt: "Screenshot of Project name",
    technologies: ["Next.js", "TypeScript"],
    githubUrl: "https://github.com/Fraol-D/repo",
    liveUrl: "https://example.com",
    date: "2026-08-01",
    featured: true,
    status: "shipped",
    category: "Product",
  },
*/

export const projects: Project[] = [
  {
    id: "veris",
    title: "Veris",
    shortDescription:
      "GitHub-integrated pull request review and risk analysis for agent-written code.",
    description:
      "A developer platform that reviews pull requests, classifies risk, and produces structured merge recommendations with evidence. Built as a GitHub App with webhook ingestion, OAuth, and an analysis pipeline that traces why a decision was made.",
    image: "/projects/veris.png",
    imageAlt:
      "Veris dashboard showing pull request risk analysis and a merge recommendation",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "GitHub App",
      "OpenRouter",
      "Zod",
    ],
    githubUrl: "https://github.com/Fraol-D/Agent-PR-Firewall",
    liveUrl: "https://veris-roan.vercel.app/",
    date: "2026-09-01",
    featured: true,
    status: "in-progress",
    category: "Developer tool",
  },
  {
    id: "getdodos",
    title: "Getdodos",
    shortDescription:
      "Two-sided tutoring marketplace with scheduling, roles, and Stripe payments.",
    description:
      "A full-stack marketplace connecting students and tutors. Includes scheduling, session management, role-based access, and Stripe payment processing on a production backend.",
    image: "/projects/getdodos.png",
    imageAlt:
      "Getdodos tutoring marketplace with parent and tutor dashboard views",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Stripe",
    ],
    githubUrl: "https://github.com/Fraol-D/getdodos",
    liveUrl: "https://www.getdodos.com/",
    date: "2026-08-15",
    featured: true,
    status: "in-progress",
    category: "Marketplace",
  },
  {
    id: "briefr",
    title: "Briefr",
    shortDescription:
      "AI research tool that turns a question into a structured, sourced brief.",
    description:
      "A research console that searches the web in real time and returns a cited report with an executive summary, sections, and markdown export. Built for people who need a usable brief, not a chat transcript.",
    image: "/projects/briefr.png",
    imageAlt:
      "Briefr research report with executive summary and download options",
    technologies: ["Next.js", "TypeScript", "AI agents"],
    githubUrl: "https://github.com/Fraol-D/briefr",
    liveUrl: "https://briefr-ai.vercel.app/",
    date: "2026-08-01",
    featured: true,
    status: "shipped",
    category: "Research",
  },
  {
    id: "appealmd",
    title: "AppealMD",
    shortDescription:
      "AI tool that classifies denied dental claims and drafts structured appeal letters.",
    description:
      "A privacy-first workflow for dental insurance appeals. The system classifies a denial, validates structured output with Pydantic, and generates a letter without storing patient documents.",
    image: "/projects/appealmd.png",
    imageAlt:
      "AppealMD interface for generating a dental insurance appeal letter",
    technologies: [
      "Next.js",
      "FastAPI",
      "Python",
      "Pydantic",
      "Gemini API",
    ],
    githubUrl: "https://github.com/Fraol-D/dental-appeal-ai",
    liveUrl: "https://getappealmd.vercel.app/",
    date: "2026-04-01",
    featured: false,
    status: "shipped",
    category: "Healthcare",
  },
];
