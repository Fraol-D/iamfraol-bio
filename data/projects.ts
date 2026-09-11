/**
 * Centralized project data.
 *
 * Adding a project
 * ----------------
 * 1. Add a screenshot to `public/projects/` (PNG, JPG, WEBP, or SVG).
 * 2. Copy the template object below into the `projects` array.
 * 3. Fill in the fields. Set `featured: true` for interview-priority work.
 * 4. Set `rank` (lower = higher on the page).
 * 5. Deploy. No component or page edits are required.
 *
 * Ordering
 * --------
 * Featured projects (`featured: true`) appear under Active missions.
 * The lowest `rank` featured project gets the large primary layout.
 * Non-featured projects appear in Other work.
 * If two projects share a rank, newer `date` values win.
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
  /** Problem statement shown in the Inspect panel. */
  problem?: string;
  /** Implementation notes shown in the Inspect panel. */
  built?: string[];
  /** Path under `public/`, e.g. `/projects/veris.png`. */
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  /** ISO date (`YYYY-MM-DD`). Tie-breaker after `rank`. */
  date: string;
  /** `true` → Active missions. `false` → Other work. */
  featured: boolean;
  /**
   * Visual order. Lower number = higher on the page.
   * Featured rank 1 is the large primary mission.
   */
  rank: number;
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
    problem: "The problem the product exists to solve.",
    built: ["What you implemented"],
    image: "/projects/placeholder.svg",
    imageAlt: "Screenshot of Project name",
    technologies: ["Next.js", "TypeScript"],
    githubUrl: "https://github.com/Fraol-D/repo",
    liveUrl: "https://example.com",
    date: "2026-08-01",
    featured: true,
    rank: 2,
    status: "shipped",
    category: "Product",
  },
*/

export const projects: Project[] = [
  {
    id: "veris",
    title: "Veris",
    shortDescription:
      "Helps reviewers understand and risk-assess pull requests written by coding agents.",
    description:
      "Veris sits between autonomous coding agents and merge decisions. It inspects a pull request for scope, impact, and missing work, then produces an evidence-backed recommendation so reviewers know where to look first.",
    problem:
      "Coding agents can open pull requests faster than humans can re-read them. A change can pass tests and still edit files outside the task, touch auth or config, or skip coverage.",
    built: [
      "GitHub App with webhook ingestion, OAuth, and pull request sync",
      "Analysis pipeline with structured validation (Zod) and decision tracing",
      "Scope and consistency checks for risky changes, missing work, and review recommendations",
    ],
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
    date: "2026-07-01",
    featured: true,
    rank: 1,
    status: "in-progress",
    category: "Developer tool",
  },
  {
    id: "getdodos",
    title: "Getdodos",
    shortDescription:
      "Tutoring marketplace with scheduling, role-based access, and Stripe payments.",
    description:
      "A two-sided product for students and tutors, with parent and tutor dashboards, session management, and payment processing on a production backend.",
    problem:
      "Matching, scheduling, and paying for tutoring has to live in one product — not a landing page plus a spreadsheet.",
    built: [
      "Parent and tutor dashboards with role-based access",
      "Scheduling and session management",
      "Stripe payment processing on a production backend",
    ],
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
    date: "2026-06-01",
    featured: true,
    rank: 2,
    status: "in-progress",
    category: "Marketplace",
  },
  {
    id: "briefr",
    title: "Briefr",
    shortDescription:
      "Turns a research question into a structured, sourced brief.",
    description:
      "A research console that searches the web in real time and returns a cited report — executive summary, sections, and markdown export — for people who need a brief they can use, not a chat transcript.",
    problem:
      "Most AI answers arrive as chat. Research work needs a brief you can read, cite, and export.",
    built: [
      "Real-time web research into a structured report",
      "Executive summary, sections, and source citations",
      "Copy and markdown export",
    ],
    image: "/projects/briefr.png",
    imageAlt:
      "Briefr research report with executive summary and download options",
    technologies: ["Next.js", "TypeScript", "AI agents"],
    githubUrl: "https://github.com/Fraol-D/briefr",
    liveUrl: "https://briefr-ai.vercel.app/",
    date: "2026-08-01",
    featured: true,
    rank: 3,
    status: "shipped",
    category: "Research",
  },
  {
    id: "appealmd",
    title: "AppealMD",
    shortDescription:
      "Classifies denied dental claims and drafts structured appeal letters.",
    description:
      "A privacy-first workflow for dental insurance appeals. It classifies a denial, validates structured output with Pydantic, and generates a letter without storing patient documents.",
    problem:
      "A denied dental claim needs a structured appeal letter. The workflow has to produce something usable without retaining patient documents.",
    built: [
      "Denial classification and Pydantic-validated generation",
      "Placeholder-based, privacy-first letter output",
      "Downloadable appeal letter workflow",
    ],
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
    rank: 4,
    status: "shipped",
    category: "Healthcare",
  },
];
