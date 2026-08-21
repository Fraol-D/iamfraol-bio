import type { Project } from "@data/projects";
import { ProductFrame } from "@/components/product-frame";
import { ProjectLinks } from "@/components/project-links";
import { ProjectMedia } from "@/components/project-media";
import { TechList } from "@/components/tech-list";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "secondary";
  priority?: boolean;
};

export function ProjectCard({
  project,
  variant = "featured",
  priority = false,
}: ProjectCardProps) {
  if (variant === "secondary") {
    return (
      <article className="grid gap-4 sm:grid-cols-[minmax(12rem,16rem)_1fr] sm:items-center sm:gap-6">
        <ProductFrame project={project}>
          <ProjectMedia
            project={project}
            sizes="(min-width: 640px) 256px, 100vw"
            className="aspect-[16/10]"
          />
        </ProductFrame>
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-heading text-xl tracking-tight">
              {project.title}
            </h3>
            {project.category ? (
              <p className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                {project.category}
              </p>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.shortDescription}
          </p>
          <TechList items={project.technologies} className="mt-3" />
          <ProjectLinks project={project} className="mt-4" />
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col">
      <ProductFrame project={project}>
        <ProjectMedia
          project={project}
          priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[16/10]"
        />
      </ProductFrame>
      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-2xl tracking-tight">
            {project.title}
          </h3>
          {project.category ? (
            <p className="pt-1 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
              {project.category}
            </p>
          ) : null}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty sm:text-[0.95rem]">
          {project.description}
        </p>
        <TechList items={project.technologies} className="mt-4" />
        <ProjectLinks project={project} className="mt-auto pt-5" />
      </div>
    </article>
  );
}
