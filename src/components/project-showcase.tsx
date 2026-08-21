import type { Project } from "@data/projects";
import { ProductFrame } from "@/components/product-frame";
import { ProjectLinks } from "@/components/project-links";
import { ProjectMedia } from "@/components/project-media";
import { TechList } from "@/components/tech-list";

export function ProjectShowcase({ project }: { project: Project }) {
  return (
    <article>
      <ProductFrame project={project}>
        <ProjectMedia
          project={project}
          priority
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="aspect-[16/10] lg:aspect-[2/1]"
        />
      </ProductFrame>
      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-start">
        <div>
          <p className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
            Featured
            {project.category ? ` · ${project.category}` : ""}
          </p>
          <h3 className="mt-2 font-heading text-3xl tracking-tight sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            {project.description}
          </p>
        </div>
        <div className="lg:pt-8">
          <TechList items={project.technologies} />
          <ProjectLinks project={project} className="mt-5" />
        </div>
      </div>
    </article>
  );
}
