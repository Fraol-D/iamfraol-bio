"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

import type { Project } from "@data/projects";
import { hostnameFromUrl } from "@/lib/format";
import { cn } from "@/lib/utils";

type ProductFrameProps = {
  project: Project;
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  onMediaActivate?: () => void;
};

export function ProductFrame({
  project,
  children,
  className,
  tilt = false,
  onMediaActivate,
}: ProductFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const live = project.liveUrl;
  const host = live ? hostnameFromUrl(live) : null;

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!tilt) return;
    const node = frameRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--tilt-x", `${py * -4}deg`);
    node.style.setProperty("--tilt-y", `${px * 5}deg`);
  };

  const onLeave = () => {
    const node = frameRef.current;
    if (!node) return;
    node.style.setProperty("--tilt-x", "0deg");
    node.style.setProperty("--tilt-y", "0deg");
  };

  const media = onMediaActivate ? (
    <button
      type="button"
      onClick={onMediaActivate}
      className="block w-full text-left focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
      aria-label={`Inspect ${project.title}`}
    >
      {children}
    </button>
  ) : live ? (
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
  );

  return (
    <div
      ref={frameRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "product-frame overflow-hidden rounded-lg border border-border bg-card",
        tilt && "product-frame-tilt",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-[color-mix(in_srgb,var(--card)_70%,black)] px-3 py-2">
        <span className="flex gap-1" aria-hidden="true">
          <span className="size-1.5 rounded-full bg-border" />
          <span className="size-1.5 rounded-full bg-border" />
          <span className="size-1.5 rounded-full bg-border" />
        </span>
        {live && host ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 flex-1 truncate font-mono text-[11px] text-muted-foreground transition-colors hover:text-[var(--live)] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
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
            <span className="size-1.5 rounded-full bg-[var(--live)] shadow-[0_0_8px_var(--live)]" />
            Live
          </span>
        ) : null}
      </div>
      <div className="media-shift">{media}</div>
    </div>
  );
}
