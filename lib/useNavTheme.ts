"use client";
import { useEffect, useState } from "react";

/** Theme of the section under the header, scrolled state and hide-on-scroll-down state. */
export function useNavTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 80);
      if (Math.abs(y - last) > 4) setHidden(y > last && y > 240);
      last = y;
      let t: "dark" | "light" = "dark";
      document.querySelectorAll<HTMLElement>("[data-nav-theme]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= 40 && r.bottom > 40) t = el.dataset.navTheme === "light" ? "light" : "dark";
      });
      setTheme(t);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { theme, scrolled, hidden };
}
