/**
 * Education and certifications. Edit this file to update academic background.
 */

export type EducationItem = {
  id: string;
  school: string;
  credential: string;
  location?: string;
  start: string;
  end: string | null;
  details?: string[];
};

export type CertificationItem = {
  id: string;
  name: string;
  issuer?: string;
  url?: string | null;
};

export const education: EducationItem[] = [
  {
    id: "unity-cs",
    school: "Unity University",
    credential: "Bachelor of Science in Computer Science",
    location: "Addis Ababa, Ethiopia",
    start: "2022-04",
    end: "2026-04",
    details: [
      "Coursework: Data Structures, Algorithms, Software Engineering, Database Systems.",
      "Capstone: health monitoring mobile app using Flutter, React, and MongoDB.",
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    id: "udacity-fullstack",
    name: "Udacity Full Stack Web Developer",
    issuer: "Udacity",
    url: null,
  },
];
