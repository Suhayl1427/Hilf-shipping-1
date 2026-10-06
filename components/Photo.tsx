"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useMedia } from "@/lib/useMedia";

/** Absolutely-filled image. If the file is missing, shows a navy placeholder tile with the filename. */
export function Img({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const i = ref.current;
    if (i && i.complete && i.naturalWidth === 0) setFailed(true);
  }, []);
  if (failed)
    return (
      <div role="img" aria-label={alt} className={`absolute inset-0 grid place-items-center bg-navy-700 grain ${className}`}>
        <span className="text-[12px] tracking-[0.14em] uppercase text-on-dark-60 px-4 text-center break-all">{src.split("/").pop()}</span>
      </div>
    );
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}

/** Image with scroll parallax (-6% → 6%), disabled on touch / reduced motion. */
export function ParallaxImg({ src, alt, className = "", imgClass = "" }: { src: string; alt: string; className?: string; imgClass?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const fine = useMedia("(hover: hover) and (pointer: fine)");
  const { scrollYProgress } = useScroll({ target: box, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const on = fine && !reduce;
  return (
    <div ref={box} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div className="absolute -inset-[8%]" style={{ y: on ? y : 0 }}>
        <div className={`absolute inset-[8%] ${imgClass}`}>
          <Img src={src} alt={alt} />
        </div>
      </motion.div>
    </div>
  );
}
