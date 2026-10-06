"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { useReveal } from "@/lib/useReveal";

/** Lenis smooth scroll (off under reduced motion), anchor offset, and the reveal observer. */
export default function SmoothScroll() {
  useReveal();
  useEffect(() => {
    (window as unknown as { __hydrated: boolean }).__hydrated = true;
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | null = null;
    let raf = 0;
    if (!reduce) {
      lenis = new Lenis({ lerp: 0.1 });
      const loop = (t: number) => {
        lenis!.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href")!;
      const target = id === "#" ? null : document.querySelector<HTMLElement>(id);
      if (!target) return;
      e.preventDefault();
      history.pushState(null, "", id);
      if (lenis) lenis.scrollTo(target, { offset: -88, duration: 1.4 });
      else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 88 });
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}
