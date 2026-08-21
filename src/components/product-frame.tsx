import type { ReactNode } from "react";

import type { Project } from "@data/projects";
import { hostnameFromUrl } from "@/lib/format";
import { cn } from "@/lib/utils";

type ProductFrameProps = {
  project: Project;
  children: ReactNode;
  className?: string;
};

export function ProductFrame({
  project,
  children,
  className,
}: ProductFrameProps) {
  const live = project.liveUrl;
  const host = live ? hostnameFromUrl(live) : null;

  return (
    <div
      className={cn(
        "product-frame overflow-hidden rounded-[10px] border border-border bg-card",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-[color-mix(in_oklch,var(--muted)_70%,var(--card))] px-3 py-2">
        <span className="flex gap-1" aria-hidden="true">
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
        </span>
        {live && host ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 flex-1 truncate font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            {host}
            <span className="sr-only"> (opens live site in a new tab)</span>
          </a>
        ) : (
          <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-muted-foreground">
            Screenshot
          </span>
        )}
        {live ? (
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-[var(--live)] uppercase">
            <span className="size-1.5 rounded-full bg-[var(--live)]" />
            Live
          </span>
        ) : null}
      </div>
      {live ? (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          aria-label={`Open ${project.title} live site`}
        >
          {children}
        </a>
      ) : (
        children
      )}
    </div>
  );
}
