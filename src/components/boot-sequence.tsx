"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const STEPS = ["Initializing system", "Identity verified", "System online"];

function subscribe() {
  return () => {};
}

function getBootSkip() {
  return (
    sessionStorage.getItem("boot-complete") === "1" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function BootSequence() {
  const skip = useSyncExternalStore(subscribe, getBootSkip, () => true);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (skip) return;
    const timers = [
      window.setTimeout(() => setStep(1), 220),
      window.setTimeout(() => setStep(2), 440),
      window.setTimeout(() => {
        sessionStorage.setItem("boot-complete", "1");
        setDone(true);
      }, 780),
    ];
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [skip]);

  if (skip || done) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#07090c]"
      role="status"
      aria-live="polite"
    >
      <div className="w-[min(22rem,calc(100%-2rem))]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-[var(--live)] uppercase">
          System / Engineering
        </p>
        <ul className="mt-6 space-y-2">
          {STEPS.map((label, index) => (
            <li
              key={label}
              className="font-mono text-sm tracking-wide text-[#e7eef4] transition-opacity duration-200"
              style={{ opacity: index <= step ? 1 : 0.2 }}
            >
              {index <= step ? "▸ " : "  "}
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
