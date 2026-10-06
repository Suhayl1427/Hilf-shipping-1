"use client";
import { useEffect, useRef, useState } from "react";
import { hero } from "@/lib/content";
import SplitLines from "./SplitLines";

export default function Hero() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [allowVideo, setAllowVideo] = useState(true);
  const boot = "var(--boot-delay)";

  useEffect(() => {
    const c = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (c?.saveData || reduce) {
      setAllowVideo(false);
      setPlaying(false);
    }
  }, []);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="home" data-nav-theme="dark" className="dark-band on-dark relative flex min-h-svh flex-col justify-end overflow-hidden bg-navy-900 text-on-dark">
      <div className="grain absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/hero-poster.jpg)" }} />
        {allowVideo && (
          <video
            ref={video}
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
            aria-hidden="true"
          >
            <source src="/videos/hero-web.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/55 to-navy-900/30" />
      </div>

      <div className="wrap relative z-10 w-full pb-20 pt-40 md:pb-28">
        <p className="kicker reveal !text-on-dark-60" style={{ ["--reveal-delay" as string]: `calc(${boot} + 0s)` }}>
          {hero.kicker}
        </p>
        <SplitLines as="h1" text={hero.title} delay={`calc(${boot} + 0.1s)`} className="display h-hero mt-6 max-w-[16ch] !text-on-dark md:max-w-[18ch]" />
        <p className="lead reveal mt-8 max-w-xl text-on-dark-60" style={{ ["--reveal-delay" as string]: `calc(${boot} + 0.55s)` }}>
          {hero.lead}
        </p>
        <div className="reveal mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8" style={{ ["--reveal-delay" as string]: `calc(${boot} + 0.7s)` }}>
          <a href={hero.primary.href} className="btn btn-paper justify-center sm:justify-start">
            {hero.primary.label} <span className="arr" aria-hidden="true">→</span>
          </a>
          <a href={hero.secondary.href} className="ulink inline-flex min-h-11 items-center justify-center gap-2 text-on-dark sm:justify-start">
            <span aria-hidden="true">↳</span> {hero.secondary.label}
          </a>
        </div>
      </div>

      <div className="wrap pointer-events-none absolute w-full inset-x-0 bottom-6 z-10 flex items-end justify-end gap-6 md:bottom-8">
        {allowVideo && (
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause background video" : "Play background video"}
            className="pointer-events-auto kicker grid h-11 place-items-center px-2 !text-on-dark-60 hover:!text-on-dark"
          >
            {playing ? "Pause" : "Play"}
          </button>
        )}
        <span className="kicker hidden md:inline-flex items-center gap-2 !text-on-dark-60">
          Scroll <span className="scroll-cue inline-block" aria-hidden="true">↓</span>
        </span>
      </div>
      <div className="boot" aria-hidden="true" />
    </section>
  );
}
