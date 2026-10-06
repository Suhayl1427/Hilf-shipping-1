import { cargo } from "@/lib/content";
import { ParallaxImg } from "./Photo";

type Item = (typeof cargo.items)[number];

/** Full-width image card used on mobile and under reduced motion. */
export default function CargoCard({ item, index }: { item: Item; index: number }) {
  return (
    <article className="cc group relative" tabIndex={0}>
      <div className="reveal-curtain grain relative aspect-[4/3] overflow-hidden bg-navy-700">
        <div className="curtain-img absolute inset-0">
          <div className="cc-img absolute inset-0">
            <ParallaxImg src={item.src} alt={item.alt} />
          </div>
        </div>
        <div className="cc-over absolute inset-x-0 bottom-0 z-[3] bg-navy-900/95 p-5 text-on-dark">
          <p className="kicker !text-on-dark-60">Coverage: {item.coverage}</p>
        </div>
      </div>
      <div className="reveal pt-6" style={{ ["--reveal-delay" as string]: "0.15s" }}>
        <div className="flex items-center gap-3 text-on-dark-60">
          <span className="idx">0{index + 1}</span>
          <span className="kicker">{item.tag}</span>
          <span className="cc-rule h-px bg-on-dark-60" aria-hidden="true" />
          <span className="cc-arrow ml-auto text-lg text-on-dark" aria-hidden="true">↗</span>
        </div>
        <h3 className="display h-item mt-4">{item.title}</h3>
        <p className="mt-4 text-on-dark-60">{item.text}</p>
        <p className="kicker mt-5 !text-on-dark-60">Coverage: {item.coverage}</p>
      </div>
    </article>
  );
}
