"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { cargo } from "@/lib/content";
import { useMedia } from "@/lib/useMedia";
import SplitLines from "./SplitLines";
import Reveal from "./Reveal";
import CargoCard from "./CargoCard";
import { Img } from "./Photo";

const ease = [0.22, 1, 0.36, 1] as const;

function Film() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const n = cargo.items.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(n - 1, Math.max(0, Math.floor(v * n)))));
  const it = cargo.items[active];

  return (
    <div ref={ref} style={{ height: `${(n + 1) * 100}vh` }} className="relative">
      <div className="sticky top-0 grid h-svh grid-rows-[42svh_1fr] gap-0 overflow-hidden lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:grid-rows-1">
        {/* image stage */}
        <div className="grain relative order-first overflow-hidden lg:order-last lg:m-0 lg:my-auto lg:aspect-[4/3] lg:max-h-[78svh] lg:w-full">
          {cargo.items.map((c, i) => (
            <motion.div
              key={c.title}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.08 }}
              transition={{ duration: 0.9, ease }}
            >
              <Img src={c.src} alt={c.alt} />
            </motion.div>
          ))}
          <div className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(90deg,var(--navy-900),transparent_18%,transparent_82%,var(--navy-900)),linear-gradient(0deg,var(--navy-900),transparent_25%)]" />
        </div>

        {/* text column */}
        <div className="relative flex flex-col justify-center px-6 py-8 md:px-10 lg:py-0 lg:pl-[max(2.5rem,calc((100vw-1500px)/2+2.5rem))] lg:pr-12">
          <div aria-live="polite" className="relative min-h-[17rem] md:min-h-[20rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, ease }}
              >
                <div className="flex items-center gap-3">
                  <span className="idx tnum">0{active + 1}</span>
                  <p className="kicker">{it.tag}</p>
                </div>
                <h3 className="display h-section mt-4 !text-[clamp(1.9rem,3.6vw,3.75rem)]">{it.title}</h3>
                <p className="lead measure mt-5 text-on-dark-60">{it.text}</p>
                <p className="kicker mt-6">Coverage: {it.coverage}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center gap-3" aria-hidden="true">
            {cargo.items.map((c, i) => (
              <span key={c.title} className="block h-px w-8 bg-on-dark transition-opacity duration-500" style={{ opacity: i === active ? 1 : 0.25 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CargoFilm() {
  const wide = useMedia("(min-width: 768px)");
  const reduce = useMedia("(prefers-reduced-motion: reduce)");
  const film = wide && !reduce;

  return (
    <section id="cargo" data-nav-theme="dark" className="dark-band on-dark bg-navy-900 text-on-dark">
      <div className="wrap pt-28 md:pt-36">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <SplitLines as="h2" text={cargo.title} className="display h-section lg:col-span-6" />
          <Reveal as="p" className="lead measure text-on-dark-60 lg:col-span-5 lg:col-start-8 lg:self-end">
            {cargo.intro}
          </Reveal>
        </div>
      </div>

      {film ? (
        <div className="mt-16">
          <Film />
        </div>
      ) : (
        <div className="wrap mt-16 grid gap-16 pb-4">
          {cargo.items.map((c, i) => (
            <CargoCard key={c.title} item={c} index={i} />
          ))}
        </div>
      )}

      <div className="wrap pb-28 pt-12 md:pb-36 md:pt-16">
        <a href={cargo.cta.href} className="btn btn-paper">
          {cargo.cta.label} <span className="arr" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
