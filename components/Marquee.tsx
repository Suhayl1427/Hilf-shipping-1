"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useVelocity, useSpring, useMotionValueEvent } from "motion/react";


type Logo = { name: string; src: string };

function Cell({ logo }: { logo: Logo }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const i = ref.current;
    if (i && i.complete && i.naturalWidth === 0) setFailed(true);
  }, []);
  return (
    <li className="logo-cell">
      {failed ? (
        <span className="logo-in display text-xl md:text-2xl text-navy px-6 text-center">{logo.name}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={ref} src={logo.src} alt={logo.name} loading="lazy" onError={() => setFailed(true)} className="logo-in max-h-10 md:max-h-14 max-w-[70%] w-auto object-contain" />
      )}
    </li>
  );
}

function Row({ logos, reverse, delay, label }: { logos: Logo[]; reverse?: boolean; delay: number; label?: boolean }) {
  const track = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const vel = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  useMotionValueEvent(vel, "change", (v) => {
    const anims = track.current?.getAnimations() ?? [];
    const rate = 1 + Math.min(Math.abs(v) / 900, 3);
    anims.forEach((a) => (a.playbackRate = rate));
  });
  return (
    <div className="marquee reveal border-y border-hairline" style={{ ["--reveal-delay" as string]: `${delay}s` }}>
      <div ref={track} className={`marquee-track ${reverse ? "rev" : ""}`}>
        <ul className="flex" aria-label={label ? "Client logos" : undefined}>
          {logos.map((l) => (
            <Cell key={l.name} logo={l} />
          ))}
        </ul>
        <ul className="flex marquee-dup" aria-hidden="true">
          {logos.map((l) => (
            <Cell key={l.name} logo={l} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Marquee({ logos }: { logos: Logo[] }) {
  const rev = [...logos].reverse();
  return (
    <div className="mt-16 md:mt-24">
      <Row logos={logos} delay={0} label />
      <div className="h-px" />
      <Row logos={rev} reverse delay={0.12} />
    </div>
  );
}

