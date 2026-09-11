import { projects, type Project } from "@data/projects";

function byRankThenDate(a: Project, b: Project) {
  if (a.rank !== b.rank) return a.rank - b.rank;
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function getFeaturedProjects(list: Project[] = projects): Project[] {
  return list.filter((project) => project.featured).sort(byRankThenDate);
}

export function getOtherProjects(list: Project[] = projects): Project[] {
  return list.filter((project) => !project.featured).sort(byRankThenDate);
}

export function formatMissionId(rank: number) {
  return `M-${String(rank).padStart(2, "0")}`;
}

export function formatStatus(status: Project["status"]) {
  if (status === "in-progress") return "Active";
  if (status === "archived") return "Archived";
  if (status === "shipped") return "Shipped";
  return null;
}
