import { ProjectCard } from "@/components/project-card";
import { ProjectShowcase } from "@/components/project-showcase";
import { SectionHeading } from "@/components/section-heading";
import { getFeaturedProjects, getOtherProjects } from "@/lib/projects";

export function Work() {
  const featured = getFeaturedProjects();
  const other = getOtherProjects();
  const [primary, ...restFeatured] = featured;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          id="work-heading"
          eyebrow="Work"
          title="Selected projects"
          description="Click a screenshot or URL bar to open the live product. Featured items are the ones I would walk through in an interview."
        />

        {primary ? (
          <div className="mt-12">
            <ProjectShowcase project={primary} />
          </div>
        ) : (
          <p className="mt-12 text-muted-foreground">
            Add a project with <code>featured: true</code> in{" "}
            <code>data/projects.ts</code>.
          </p>
        )}

        {restFeatured.length > 0 ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {restFeatured.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                priority={index === 0}
              />
            ))}
          </div>
        ) : null}

        {other.length > 0 ? (
          <div className="mt-20">
            <SectionHeading
              level="h3"
              eyebrow="More"
              title="Other work"
              description="Additional projects kept here so featured work stays the first thing a recruiter sees."
            />
            <div className="mt-8 grid gap-4">
              {other.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  variant="secondary"
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
