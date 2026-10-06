import { business } from "@/lib/content";
import SplitLines from "./SplitLines";
import Reveal, { Rule } from "./Reveal";

export default function Business() {
  return (
    <section id="business" data-nav-theme="light" className="band bg-paper-2">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <SplitLines as="h2" text={business.title} className="display h-section lg:col-span-6" />
          <Reveal as="p" className="lead measure lg:col-span-5 lg:col-start-8 lg:self-end">
            {business.intro}
          </Reveal>
        </div>

        <ul className="mt-16 md:mt-24">
          {business.services.map((s, i) => (
            <li key={s.title} className="relative">
              <Rule delay={0} className="absolute inset-x-0 top-0" />
              <Reveal
                delay={0.05}
                className="row-tint grid gap-x-8 gap-y-3 py-9 md:grid-cols-[56px_1fr] md:px-4 md:py-12 lg:grid-cols-[80px_1fr_1.4fr_40px] lg:gap-x-10"
              >
                <span className="idx md:pt-3">0{i + 1}</span>
                <h3 className="row-title display h-item">{s.title}</h3>
                <div className="md:col-start-2 lg:col-start-3">
                  <p className="measure">{s.text}</p>
                  {s.commodities && (
                    <ul aria-hidden="true" className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-navy">
                      {s.commodities.map((c) => (
                        <li key={c}>
                          <span className="text-steel">↳</span> {c}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <span aria-hidden="true" className="row-arrow hidden self-start pt-2 text-2xl text-navy lg:block lg:col-start-4 lg:row-start-1 lg:justify-self-end">
                  →
                </span>
              </Reveal>
            </li>
          ))}
          <li aria-hidden="true">
            <Rule />
          </li>
        </ul>
      </div>
    </section>
  );
}
