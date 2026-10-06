import { clients } from "@/lib/content";
import SplitLines from "./SplitLines";
import Marquee from "./Marquee";

export default function Clients() {
  return (
    <section id="clients" data-nav-theme="light" className="band bg-paper">
      <div className="wrap">
        <p className="kicker reveal mb-6">{clients.kicker}</p>
        <SplitLines as="h2" text={clients.title} className="display h-section" />
      </div>
      <Marquee logos={clients.logos} />
    </section>
  );
}
