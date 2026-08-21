/**
 * Skills shown on the site. Keep this aligned with technologies used in projects.
 */

export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "Zod"],
  },
  {
    id: "data-infra",
    label: "Data & infrastructure",
    items: [
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "MySQL",
      "Vercel",
      "Railway",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      "Git",
      "GitHub Apps",
      "Stripe",
      "OpenRouter",
      "Gemini API",
      "Pydantic",
    ],
  },
];
