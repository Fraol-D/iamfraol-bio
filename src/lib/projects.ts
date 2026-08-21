import { projects, type Project } from "@data/projects";

function byDateDesc(a: Project, b: Project) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function getFeaturedProjects(list: Project[] = projects): Project[] {
  return list.filter((project) => project.featured).sort(byDateDesc);
}

export function getOtherProjects(list: Project[] = projects): Project[] {
  return list.filter((project) => !project.featured).sort(byDateDesc);
}
