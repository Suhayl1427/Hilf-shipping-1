import { about } from "@/lib/content";
import SplitLines from "./SplitLines";
import Reveal, { Rule } from "./Reveal";
import { ParallaxImg } from "./Photo";

export default function About() {
  return (
    <section id="about" data-nav-theme="light" className="band-statement bg-paper">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <h2 className="kicker reveal lg:col-span-3">{about.title}</h2>
          <SplitLines
            as="p"
            text={about.p1}
            className="display text-[clamp(1.55rem,2.7vw,2.9rem)] !leading-[1.08] text-navy lg:col-span-9"
          />
        </div>

        <div className="mt-20 grid gap-12 md:mt-28 lg:grid-cols-12 lg:gap-8">
          <Reveal as="p" className="lead measure lg:col-span-4 lg:col-start-4 lg:self-end">
            {about.p2}
          </Reveal>
          <div className="reveal-curtain grain relative aspect-[4/3] bg-navy-700 lg:col-span-5">
            <div className="curtain-img absolute inset-0">
              <ParallaxImg src={about.image.src} alt={about.image.alt} />
            </div>
          </div>
        </div>

        <ul className="mt-24 grid grid-cols-1 md:mt-32 md:grid-cols-2 lg:grid-cols-4">
          {about.pillars.map((p, i) => (
            <li key={p} className="relative py-8 md:px-6 md:first:pl-0 lg:py-10 lg:[&:nth-child(2)]:pl-6">
              <Rule delay={i * 0.08} className="absolute inset-x-0 top-0" />
              <Reveal delay={i * 0.08}>
                <span className="idx">0{i + 1}</span>
                <h3 className="display h-item mt-10 max-w-[12ch] md:mt-16">{p}</h3>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
