/**
 * Professional experience. Edit this file to add or update roles.
 * `end: null` renders as “Present”.
 */

export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  location?: string;
  start: string;
  end: string | null;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "unity-student-developer",
    role: "Student Developer",
    organization: "Unity University",
    location: "Addis Ababa, Ethiopia",
    start: "2022-04",
    end: "2026-04",
    highlights: [
      "Developed and maintained student-facing web apps, improving UI usability by 30%.",
      "Designed frontend layouts with React and built backend APIs with Node.js and Express.",
      "Used GitHub Copilot and similar tools to improve implementation speed and code quality.",
      "Led technical direction and Git setup on 3+ group projects.",
    ],
  },
  {
    id: "evangadi-trainee",
    role: "Full-stack Developer Trainee",
    organization: "Evangadi Tech",
    start: "2023-02",
    end: "2023-07",
    highlights: [
      "Completed a 16-week full-stack program building applications on the MERN stack.",
      "Collaborated in Agile teams on an e-commerce app and a dashboard app.",
      "Participated in weekly code challenges and incorporated review feedback.",
    ],
  },
];
