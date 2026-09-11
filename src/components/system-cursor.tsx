"use client";

import { useEffect, useRef } from "react";

export function SystemCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!fine || reduced) return;

    document.documentElement.classList.add("has-system-cursor");

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let hovering = false;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      const target = event.target;
      hovering =
        target instanceof Element &&
        Boolean(target.closest("a, button, [role='button'], [data-cursor]"));
    };

    const loop = () => {
      rx += (x - rx) * 0.22;
      ry += (y - ry) * 0.22;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.dataset.hover = hovering ? "true" : "false";
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      frame = window.requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = window.requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("has-system-cursor");
      window.removeEventListener("pointermove", onMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="system-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="system-cursor-ring" aria-hidden="true" />
    </>
  );
}
