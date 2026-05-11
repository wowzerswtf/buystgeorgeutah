"use client";

import { useState } from "react";

const REASONS = [
  { value: "buy", label: "I'm thinking about buying" },
  { value: "sell", label: "I'm thinking about selling" },
  { value: "valuation", label: "I want a free home valuation" },
  { value: "build", label: "I'm building new construction" },
  { value: "invest", label: "Investment / vacation rental" },
  { value: "other", label: "Something else" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      // Placeholder — wire to a form endpoint (Formspree, Resend, Vercel function)
      // For now we mailto-fallback so the lead never disappears.
      const subject = encodeURIComponent(`Lead from BuyStGeorgeUtah · ${data.reason || ""}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nReason: ${data.reason}\n\n${data.message}`,
      );
      window.location.href = `mailto:Kayden@elementreb.com?subject=${subject}&body=${body}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full bg-transparent border-b hairline focus:border-sandstone focus:outline-none py-4 font-mono text-[14px] tracking-wide text-ink placeholder:text-ink-faint transition-colors";
  const labelClass = "eyebrow block mb-1";

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className={labelClass}>
          Your name
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="First and last"
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(___) ___-____"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className={labelClass}>
          Why you're reaching out
        </label>
        <select
          id="reason"
          name="reason"
          className={fieldClass}
          defaultValue=""
        >
          <option value="" disabled>
            Pick one
          </option>
          {REASONS.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          The details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Timeline, budget, neighborhoods, anything Kayden should know up front."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
        <p className="font-mono text-[11px] text-ink-muted max-w-sm">
          No spam, no list-sharing. Replies usually inside 15 minutes during
          waking hours.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-3 bg-ink text-cream px-7 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-sandstone transition-colors disabled:opacity-50"
        >
          {status === "sending"
            ? "Opening mail…"
            : status === "sent"
              ? "Sent →"
              : "Send to Kayden →"}
        </button>
      </div>
    </form>
  );
}
