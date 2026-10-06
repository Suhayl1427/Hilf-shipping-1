"use client";
import { useState } from "react";
import { contact } from "@/lib/content";
import SplitLines from "./SplitLines";
import Reveal, { Rule } from "./Reveal";

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data.check.trim() !== "18") {
      setStatus("error");
      setMsg("The answer to the human check is incorrect. Please try again.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      setMsg("Thank you. Your message has been sent and the chartering desk will respond shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setMsg(`Your message could not be sent. Please email ${contact.email.display.replace("(at)", "@")} directly.`);
    }
  }

  const info = [
    { label: contact.office.label, body: <p className="text-on-dark-60">{contact.office.text}</p> },
    {
      label: contact.email.label,
      body: (
        <a href={contact.email.href} className="ulink text-on-dark">
          {contact.email.display}
        </a>
      ),
    },
    { label: contact.support.label, body: <p className="text-on-dark-60">{contact.support.text}</p> },
  ];

  return (
    <section id="contact" data-nav-theme="dark" className="dark-band on-dark band-statement bg-navy-900 text-on-dark">
      <div className="wrap">
        <SplitLines as="h2" text={contact.title} className="display h-hero !text-on-dark" />
        <Reveal as="p" delay={0.2} className="lead measure mt-8 text-on-dark-60">
          {contact.intro}
        </Reveal>

        <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-3 md:gap-8">
          {info.map((c, i) => (
            <div key={c.label} className="relative pt-6">
              <Rule delay={i * 0.1} className="absolute inset-x-0 top-0" />
              <Reveal delay={i * 0.1}>
                <h3 className="kicker !text-[12.5px] !font-medium !text-on-dark-60">{c.label}</h3>
                <div className="mt-4 text-[17px] leading-[27px]">{c.body}</div>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-16 md:mt-32 lg:grid-cols-2 lg:gap-20">
          <form onSubmit={onSubmit} noValidate={false} className="reveal order-1 grid gap-4" aria-describedby="form-status">
            <div className="field">
              <input id="f-name" name="name" type="text" required autoComplete="name" placeholder={contact.form.name} />
              <label htmlFor="f-name">{contact.form.name}</label>
            </div>
            <div className="field">
              <input id="f-email" name="email" type="email" required autoComplete="email" placeholder={contact.form.email} />
              <label htmlFor="f-email">{contact.form.email}</label>
            </div>
            <div className="field">
              <textarea id="f-msg" name="message" required rows={4} placeholder={contact.form.message} />
              <label htmlFor="f-msg">{contact.form.message}</label>
            </div>
            <div className="field">
              <input id="f-check" name="check" type="text" inputMode="numeric" required autoComplete="off" placeholder={contact.form.check} />
              <label htmlFor="f-check">{contact.form.check}</label>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <button type="submit" disabled={status === "sending"} className="btn btn-paper disabled:opacity-60">
                {status === "sending" ? "Sending…" : contact.form.submit} <span className="arr" aria-hidden="true">→</span>
              </button>
              <p id="form-status" role="status" aria-live="polite" className={`text-[15px] ${status === "error" ? "text-on-dark" : "text-on-dark-60"}`}>
                {status === "error" && <span aria-hidden="true">× </span>}
                {status === "ok" && <span aria-hidden="true">✓ </span>}
                {msg}
              </p>
            </div>
          </form>

          <div className="map-wrap reveal-curtain grain relative order-2 aspect-[4/3] bg-navy-700 lg:aspect-auto lg:min-h-[28rem]">
            <iframe src={contact.mapSrc} title="Hilf Shipping office, Tamani Arts Building, Business Bay, Dubai" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  );
}
