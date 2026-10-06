import { whyUs } from "@/lib/content";
import SplitLines from "./SplitLines";
import Reveal, { Rule } from "./Reveal";

export default function WhyUs() {
  return (
    <section id="why-us" data-nav-theme="light" className="band bg-paper">
      <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5 lg:self-start lg:sticky lg:top-32">
          <SplitLines as="h2" text={whyUs.title} className="display h-section" />
          <Reveal as="p" delay={0.15} className="lead measure mt-8">
            {whyUs.intro}
          </Reveal>
        </div>
        <ul className="lg:col-span-6 lg:col-start-7">
          {whyUs.items.map((it, i) => (
            <li key={it.word} className="relative pb-12 pt-10 md:pb-16 md:pt-14 first:pt-0 lg:first:pt-0">
              <SplitLines as="h3" text={it.word} className="display text-[clamp(3rem,10vw,6rem)] md:text-8xl" />
              <Reveal as="p" delay={0.2} className="lead measure mt-6">
                {it.text}
              </Reveal>
              {i < whyUs.items.length - 1 && <Rule className="absolute inset-x-0 bottom-0" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
