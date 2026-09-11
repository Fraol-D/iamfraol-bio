"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";

type SoundKind = "click" | "open" | "boot";

type SoundContextValue = {
  play: (kind?: SoundKind) => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

function beep(
  ctx: AudioContext,
  frequency: number,
  duration: number,
  gainValue: number,
) {
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(gainValue, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + duration);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SoundProvider({ children }: { children: ReactNode }) {
  const contextRef = useRef<AudioContext | null>(null);
  const armedRef = useRef(false);

  const getContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (prefersReducedMotion()) return null;
    if (!contextRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioCtx) return null;
      contextRef.current = new AudioCtx();
    }
    return contextRef.current;
  }, []);

  const play = useCallback(
    (kind: SoundKind = "click") => {
      if (typeof window === "undefined") return;
      if (prefersReducedMotion()) return;
      const ctx = getContext();
      if (!ctx) return;

      if (!armedRef.current || ctx.state === "suspended") {
        void ctx.resume().then(() => {
          armedRef.current = ctx.state === "running";
        });
        return;
      }

      if (kind === "boot") {
        beep(ctx, 420, 0.08, 0.03);
        return;
      }
      if (kind === "open") {
        beep(ctx, 560, 0.07, 0.028);
        return;
      }
      beep(ctx, 640, 0.045, 0.022);
    },
    [getContext],
  );

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("a, button, [role='button']")) {
        play("click");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [play]);

  const value = useMemo(() => ({ play }), [play]);

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}

export function useSound() {
  const value = useContext(SoundContext);
  if (!value) {
    throw new Error("useSound must be used within SoundProvider");
  }
  return value;
}
