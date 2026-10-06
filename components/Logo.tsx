"use client";
import { useEffect, useRef, useState } from "react";
import { footer } from "@/lib/content";

/** Hilf logo on a white tile (the supplied JPEG has a white ground). Falls back to a text wordmark. */
export default function Logo({ className = "h-10", tile = true }: { className?: string; tile?: boolean }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const i = ref.current;
    if (i && i.complete && i.naturalWidth === 0) setFailed(true);
  }, []);
  const wrap = tile ? "bg-white px-2.5" : "";
  return (
    <span className={`inline-flex items-center rounded-[6px] ${wrap} ${className}`}>
      {failed ? (
        <span className="display text-[26px] leading-none text-navy">hilf</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={ref} src={footer.logo} alt="Hilf Shipping" onError={() => setFailed(true)} className="h-full w-auto object-contain py-1" />
      )}
    </span>
  );
}
