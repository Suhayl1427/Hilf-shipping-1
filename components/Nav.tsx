"use client";
import { useEffect, useRef, useState } from "react";
import { nav, hero, contact } from "@/lib/content";
import { useNavTheme } from "@/lib/useNavTheme";
import Logo from "./Logo";

export default function Nav() {
  const { theme, scrolled, hidden } = useNavTheme();
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [open]);

  const dark = theme === "dark" || open;
  const text = dark ? "text-on-dark" : "text-navy";
  const surface = open
    ? ""
    : scrolled
      ? dark
        ? "bg-navy-900/70 backdrop-blur-md"
        : "bg-paper/80 backdrop-blur-md"
      : "";

  return (
    <>
      <header
        className={`fixed inset-x-4 top-4 z-50 transition-[transform] duration-[250ms] ease-in-out ${hidden && !open ? "-translate-y-[110%]" : ""}`}
      >
        <div className={`mx-auto flex max-w-[1500px] items-center justify-between rounded-[10px] px-3 py-2 transition-[color,background-color] duration-[250ms] ease-in-out md:px-4 ${text} ${surface}`}>
          <a href="#home" aria-label="Hilf Shipping — Home" className="shrink-0">
            <Logo className="h-10" />
          </a>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9 text-[15px]">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="ulink">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="btn btn-outline hidden min-h-11 !px-4 text-[14px] sm:inline-flex">
              {hero.secondary.label} <span className="arr" aria-hidden="true">→</span>
            </a>
            <button
              ref={btn}
              type="button"
              className="grid h-11 w-11 place-items-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              <span className="relative block h-3 w-7" aria-hidden="true">
                <span className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "top-1/2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`dark-band on-dark fixed inset-0 z-40 flex flex-col bg-navy-900 px-6 pb-8 pt-28 text-on-dark transition-opacity duration-500 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
        inert={!open}
      >
        <ul className="flex flex-1 flex-col justify-center gap-2">
          {nav.map((n, i) => (
            <li key={n.href} className={open ? "nav-item-in" : ""} style={{ animationDelay: `${0.1 + i * 0.06}s` }}>
              <a href={n.href} onClick={() => setOpen(false)} className="display block py-2 text-[clamp(2.5rem,11vw,4.5rem)] text-on-dark">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="border-t border-hairline pt-6 text-[15px] text-on-dark-60">
          <p>{contact.office.text}</p>
          <a href={contact.email.href} className="ulink mt-3 inline-block text-on-dark">
            {contact.email.display}
          </a>
        </div>
      </div>
    </>
  );
}
