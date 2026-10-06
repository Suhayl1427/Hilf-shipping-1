"use client";
import { createElement, useEffect, useLayoutEffect, useRef, useState } from "react";

type Tag = "h1" | "h2" | "h3" | "p" | "div";

/**
 * Line-mask reveal. Words render inline first (so SSR / no-JS reads normally),
 * then lines are measured and each wrapped in an overflow mask.
 */
export default function SplitLines({
  text,
  as = "h2",
  className = "",
  delay = 0,
  stagger = 0.09,
  id,
}: {
  text: string;
  as?: Tag;
  className?: string;
  delay?: number | string;
  stagger?: number;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [lines, setLines] = useState<string[] | null>(null);
  const width = useRef(0);
  const words = text.split(" ");
  const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;

  useIso(() => {
    if (lines !== null || !ref.current) return;
    const spans = Array.from(ref.current.querySelectorAll<HTMLElement>("[data-w]"));
    const out: string[] = [];
    let top = -1;
    spans.forEach((s, i) => {
      if (s.offsetTop !== top) {
        out.push(words[i]);
        top = s.offsetTop;
      } else out[out.length - 1] += " " + words[i];
    });
    width.current = ref.current.clientWidth;
    setLines(out);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      if (el.clientWidth !== width.current && width.current !== 0) setLines(null);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const base = typeof delay === "number" ? `${delay}s` : delay;
  const children =
    lines === null
      ? words.map((w, i) => (
          <span key={i} data-w="">
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))
      : lines.map((l, i) => (
          <span key={i} className="block overflow-hidden pb-[0.14em] -mb-[0.14em]" aria-hidden="true">
            <span className="reveal-line block" style={{ ["--reveal-delay" as string]: `calc(${base} + ${(i * stagger).toFixed(2)}s)` }}>
              {l}
            </span>
          </span>
        ));

  return createElement(
    as,
    { ref, id, className: `reveal-lines ${className}`, "aria-label": text },
    lines === null ? <span aria-hidden="true">{children}</span> : children,
  );
}
