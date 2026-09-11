import { Mission } from "@/components/mission";
import { Reveal } from "@/components/reveal";
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
          eyebrow="Active missions"
          title="Selected projects"
          description="Veris is first. Inspect a project for the brief, or open Live / GitHub to go to the product."
        />

        {primary ? (
          <Reveal className="mt-12">
            <Mission project={primary} variant="hero" imagePriority />
          </Reveal>
        ) : (
          <p className="mt-12 text-muted-foreground">
            Add a project with <code>featured: true</code> in{" "}
            <code>data/projects.ts</code>.
          </p>
        )}

        {restFeatured.length > 0 ? (
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {restFeatured.map((project, index) => (
              <Reveal key={project.id}>
                <Mission
                  project={project}
                  variant="featured"
                  imagePriority={index === 0}
                />
              </Reveal>
            ))}
          </div>
        ) : null}

        {other.length > 0 ? (
          <div className="mt-20">
            <SectionHeading
              level="h3"
              eyebrow="Additional"
              title="Other work"
              description="Still worth seeing, kept visually secondary so Veris stays first."
            />
            <div className="mt-8 grid gap-8">
              {other.map((project) => (
                <Reveal key={project.id}>
                  <Mission project={project} variant="secondary" />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
