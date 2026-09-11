import { ArrowUpRight } from "lucide-react";

import type { Project } from "@data/projects";
import { GitHubIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectLinks({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const hasGithub = Boolean(project.githubUrl);
  const hasLive = Boolean(project.liveUrl);

  if (!hasGithub && !hasLive) {
    return (
      <p className={cn("text-sm text-muted-foreground", className)}>
        Links to add
      </p>
    );
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {hasLive ? (
        <a
          href={project.liveUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "sm" }), "h-9 min-h-9 px-3")}
        >
          Live demo
          <ArrowUpRight data-icon="inline-end" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
      {hasGithub ? (
        <a
          href={project.githubUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "h-9 min-h-9 px-3",
          )}
        >
          <GitHubIcon data-icon="inline-start" className="size-4" />
          GitHub
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
    </div>
  );
}
