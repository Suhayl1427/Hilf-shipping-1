"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { teams } from "@/lib/content";
import SplitLines from "./SplitLines";
import Reveal from "./Reveal";

function initials(name: string) {
  const p = name.split(" ").filter(Boolean);
  return (p[0][0] + (p.length > 1 ? p[p.length - 1][0] : "")).toUpperCase();
}
const slug = (n: string) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function Person({ name, role, i }: { name: string; role: string; i: number }) {
  const [img, setImg] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const i = imgRef.current;
    if (i && i.complete && i.naturalWidth === 0) setImg(false);
  }, []);
  return (
    <li className="reveal border-t border-hairline pb-8 pt-5" style={{ ["--reveal-delay" as string]: `${(i % 4) * 0.06}s` }}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="display text-[clamp(1.25rem,1.7vw,1.6rem)] !leading-[1.1] !tracking-[-0.03em]">{name}</h4>
          <p className="mt-2 text-[15px] text-steel">{role}</p>
        </div>
        <span className="grain relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden bg-navy text-[14px] font-medium tracking-[0.08em] text-on-dark" aria-hidden="true">
          {img && (
            // eslint-disable-next-line @next/next/no-img-element
            <img ref={imgRef} src={`/images/team/${slug(name)}.jpg`} alt="" onError={() => setImg(false)} className="absolute inset-0 z-[1] h-full w-full object-cover" />
          )}
          {initials(name)}
        </span>
      </div>
    </li>
  );
}

export default function Teams() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = teams.groups.length;
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="teams" data-nav-theme="light" className="band bg-paper-2">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <SplitLines as="h2" text={teams.title} className="display h-section lg:col-span-6" />
          <Reveal as="p" className="lead measure lg:col-span-5 lg:col-start-8 lg:self-end">
            {teams.intro}
          </Reveal>
        </div>

        {/* Desktop / tablet tabs */}
        <div role="tablist" aria-label="Teams" className="relative mt-16 hidden gap-10 border-b border-hairline md:mt-24 md:flex">
          {teams.groups.map((g, i) => (
            <button
              key={g.name}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`tab-${i}`}
              aria-selected={active === i}
              aria-controls={`panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`display relative min-h-12 pb-5 text-[clamp(1.25rem,2vw,1.75rem)] transition-colors duration-300 ${active === i ? "text-navy" : "text-grey hover:text-navy"}`}
            >
              {g.name}
              {active === i && <motion.span layoutId="team-underline" className="absolute inset-x-0 -bottom-px h-px bg-navy" transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} />}
            </button>
          ))}
        </div>

        <div className="mt-12 md:mt-0">
          {teams.groups.map((g, gi) => {
            const isOpen = open === gi;
            return (
              <div key={g.name} className="border-t border-hairline md:border-0">
                {/* Mobile accordion header */}
                <h3 className="md:hidden">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${gi}`}
                    onClick={() => setOpen(isOpen ? null : gi)}
                    className="display flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left text-2xl text-navy"
                  >
                    {g.name}
                    <span aria-hidden="true" className="text-xl transition-transform duration-500" style={{ transform: isOpen ? "rotate(45deg)" : "none" }}>
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`panel-${gi}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${gi}`}
                  className={`${isOpen ? "block" : "hidden"} ${active === gi ? "md:block" : "md:hidden"} pb-8 md:pt-12`}
                >
                  <p className="measure mb-10">{g.text}</p>
                  <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
                    {g.people.map((p, i) => (
                      <Person key={`${p.name}-${i}`} name={p.name} role={p.role} i={i} />
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
