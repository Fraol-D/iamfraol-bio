"use client";

import { useState } from "react";

import type { Project } from "@data/projects";
import { ProductFrame } from "@/components/product-frame";
import { ProjectLinks } from "@/components/project-links";
import { ProjectMedia } from "@/components/project-media";
import { TechList } from "@/components/tech-list";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { formatMonthYear } from "@/lib/format";
import { formatMissionId, formatStatus } from "@/lib/projects";
import { cn } from "@/lib/utils";

type MissionProps = {
  project: Project;
  variant?: "hero" | "featured" | "secondary";
  imagePriority?: boolean;
};

function Meta({ project }: { project: Project }) {
  const status = formatStatus(project.status);
  return (
    <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
      {project.rank === 1 ? "Primary · " : ""}
      {formatMissionId(project.rank)}
      {status ? ` · ${status}` : ""}
      {project.category ? ` · ${project.category}` : ""}
    </p>
  );
}

export function Mission({
  project,
  variant = "featured",
  imagePriority = false,
}: MissionProps) {
  const [open, setOpen] = useState(false);

  const inspect = () => {
    setOpen(true);
  };

  const inspectButton = (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="h-9 min-h-9 px-3"
      onClick={inspect}
    >
      Inspect
    </Button>
  );

  const copy = (
    <>
      <h3 className="font-heading tracking-tight">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty sm:text-[0.95rem]">
        {variant === "hero" ? project.description : project.shortDescription}
      </p>
    </>
  );

  return (
    <>
      <article
        className={cn(
          variant === "secondary" &&
            "grid gap-4 sm:grid-cols-[minmax(12rem,16rem)_1fr] sm:items-center sm:gap-6",
          variant === "featured" && "flex h-full flex-col",
        )}
      >
        <ProductFrame
          project={project}
          tilt={variant !== "secondary"}
          onMediaActivate={inspect}
        >
          <ProjectMedia
            project={project}
            priority={imagePriority}
            sizes={
              variant === "hero"
                ? "(min-width: 1024px) 70vw, 100vw"
                : variant === "secondary"
                  ? "(min-width: 640px) 256px, 100vw"
                  : "(min-width: 768px) 50vw, 100vw"
            }
            className={cn(
              "aspect-[16/10]",
              variant === "hero" && "lg:aspect-[2/1]",
            )}
          />
        </ProductFrame>

        {variant === "hero" ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-start">
            <div>
              <Meta project={project} />
              <div className="mt-2 text-3xl sm:text-4xl">{copy}</div>
            </div>
            <div className="flex flex-col gap-4 lg:pt-8">
              <TechList items={project.technologies} />
              <div className="flex flex-wrap items-center gap-2">
                {inspectButton}
                <ProjectLinks project={project} />
              </div>
            </div>
          </div>
        ) : (
          <div className={cn(variant === "featured" ? "flex flex-1 flex-col pt-5" : "min-w-0")}>
            <Meta project={project} />
            <div
              className={cn(
                "mt-2",
                variant === "featured" ? "text-2xl" : "text-xl",
              )}
            >
              {copy}
            </div>
            <TechList items={project.technologies} className="mt-4" />
            <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
              {inspectButton}
              <ProjectLinks project={project} />
            </div>
          </div>
        )}
      </article>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full max-w-none gap-0 overflow-y-auto overscroll-contain sm:max-w-lg"
        >
          <SheetHeader className="border-b border-border">
            <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
              {formatMissionId(project.rank)} · {formatMonthYear(project.date)}
            </p>
            <SheetTitle className="font-heading text-2xl">
              {project.title}
            </SheetTitle>
            <SheetDescription>{project.shortDescription}</SheetDescription>
          </SheetHeader>
          <div className="space-y-6 p-4">
            <ProductFrame project={project}>
              <ProjectMedia
                project={project}
                sizes="512px"
                className="aspect-[16/10]"
              />
            </ProductFrame>
            {project.problem ? (
              <div>
                <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                  The problem
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>
              </div>
            ) : null}
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                What I built
              </p>
              {project.built && project.built.length > 0 ? (
                <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {project.built.map((item) => (
                    <li key={item} className="pl-4 -indent-3">
                      <span aria-hidden="true">– </span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              )}
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                Status
              </p>
              <p className="mt-2 text-sm">
                {formatStatus(project.status) ?? "—"}
                {project.category ? ` · ${project.category}` : ""}
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                Technologies
              </p>
              <TechList items={project.technologies} className="mt-3" />
            </div>
            <ProjectLinks project={project} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
