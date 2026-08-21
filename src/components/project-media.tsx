import Image from "next/image";

import type { Project } from "@data/projects";
import { cn } from "@/lib/utils";

type ProjectMediaProps = {
  project: Project;
  priority?: boolean;
  sizes: string;
  className?: string;
};

export function ProjectMedia({
  project,
  priority = false,
  sizes,
  className,
}: ProjectMediaProps) {
  const isSvg = project.image.endsWith(".svg");

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        className,
      )}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized={isSvg}
        className="object-cover object-top"
      />
    </div>
  );
}
