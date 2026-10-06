"use client";
import { useEffect } from "react";

const SELECTOR = ".reveal, .reveal-lines, .reveal-curtain, .reveal-rule";

/**
 * Observes every reveal element once and adds `is-in` (fire once).
 * Curtain elements are clipped to zero area before they reveal, so the observer
 * watches their parent and flips the curtain when the parent enters.
 */
export function useReveal() {
  useEffect(() => {
    const targets = new Map<Element, Element[]>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (targets.get(e.target) ?? []).forEach((el) => el.classList.add("is-in"));
            targets.delete(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    const seen = new WeakSet<Element>();
    const scan = () =>
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        const host = el.classList.contains("reveal-curtain") && el.parentElement ? el.parentElement : el;
        const list = targets.get(host);
        if (list) list.push(el);
        else {
          targets.set(host, [el]);
          io.observe(host);
        }
      });
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
