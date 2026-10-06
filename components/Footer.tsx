import { footer, contact } from "@/lib/content";
import Logo from "./Logo";

const icons: Record<string, React.ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" />
      <path d="M8 10v7M8 7v.01M12 17v-7M12 13c0-2 1.5-3 3-3s2 1 2 3v4" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5v.01" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer data-nav-theme="dark" className="dark-band on-dark relative overflow-hidden bg-navy-900 text-on-dark">
      <div className="wrap pt-24 md:pt-32">
        <div className="grid gap-14 border-t border-hairline pt-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="h-12" />
            <p className="display mt-8 text-[clamp(1.5rem,2.4vw,2.25rem)] !text-on-dark">{footer.tagline}</p>
            <p className="measure mt-5 max-w-sm text-on-dark-60">{footer.text}</p>
          </div>
          <nav aria-label="Quick links">
            <h2 className="kicker">Quick Links</h2>
            <ul className="mt-5 grid gap-1">
              {footer.quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="ulink inline-flex min-h-11 items-center text-on-dark">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="kicker">Connect</h2>
            <ul className="mt-5 flex gap-2">
              {footer.connect.map((n) => (
                <li key={n}>
                  <a href="#" aria-label={n} className="grid h-11 w-11 place-items-center border border-hairline text-on-dark transition-colors duration-300 hover:bg-paper hover:text-navy-900">
                    {icons[n]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="kicker">Office</h2>
            <p className="mt-5 text-on-dark-60">{contact.office.text}</p>
            <a href={contact.email.href} className="ulink mt-4 inline-block text-on-dark">
              {contact.email.display}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-hairline py-6 text-[14px] text-on-dark-60 md:flex-row md:justify-between">
          <p>{footer.copyright}</p>
          <p>{footer.tagline}</p>
        </div>
      </div>
      <div aria-hidden="true" className="display pointer-events-none -mb-[0.16em] select-none whitespace-nowrap text-center text-[22vw] leading-[0.8] text-on-dark/[0.06] md:text-[18vw]">
        hilf
      </div>
    </footer>
  );
}
