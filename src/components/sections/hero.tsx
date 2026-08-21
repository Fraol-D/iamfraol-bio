import { ArrowDown, FileText } from "lucide-react";

import { site } from "@data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { hostnameFromUrl } from "@/lib/format";
import { getFeaturedProjects, getOtherProjects } from "@/lib/projects";
import { cn } from "@/lib/utils";

const liveProjects = [...getFeaturedProjects(), ...getOtherProjects()].filter(
  (project) => project.liveUrl,
);

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-border"
    >
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.3fr)_minmax(16rem,0.7fr)] lg:py-24">
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
            {site.role} · {site.location}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-3xl font-heading text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]"
          >
            {site.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-foreground/90 text-pretty sm:text-xl">
            {site.headline}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            {site.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}
            >
              View work
              <ArrowDown data-icon="inline-end" />
            </a>
            <a
              href={site.resumePath}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-10 px-4",
              )}
            >
              <FileText data-icon="inline-start" />
              Resume
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "h-10 px-4",
              )}
            >
              <GitHubIcon data-icon="inline-start" className="size-4" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "h-10 px-4",
              )}
            >
              <LinkedInIcon data-icon="inline-start" className="size-4" />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            {site.availability}
          </p>
        </div>

        {liveProjects.length > 0 ? (
          <aside
            aria-label="Live products"
            className="rounded-[10px] border border-border bg-card p-4"
          >
            <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Running now
            </p>
            <ul className="mt-3 divide-y divide-border">
              {liveProjects.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.liveUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 py-2.5 text-sm transition-colors hover:text-[var(--live)] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    <span className="min-w-0">
                      <span className="block font-medium">{project.title}</span>
                      <span className="block truncate font-mono text-[11px] text-muted-foreground">
                        {hostnameFromUrl(project.liveUrl!)}
                      </span>
                    </span>
                    <span className="shrink-0 font-mono text-[10px] tracking-wide text-[var(--live)] uppercase">
                      Live
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
