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
      const subject = encodeURIComponent(
        `Lead from BuyStGeorgeUtah · ${data.reason || ""}`,
      );
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
    "w-full bg-transparent border-b border-white/[0.12] focus:border-lime-400 focus:outline-none py-4 font-mono text-[14px] text-white placeholder:text-white/30 transition-colors";

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 md:p-10"
    >
      <div>
        <label htmlFor="name" className="eyebrow block mb-1">
          Your Name
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
          <label htmlFor="email" className="eyebrow block mb-1">
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
          <label htmlFor="phone" className="eyebrow block mb-1">
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
        <label htmlFor="reason" className="eyebrow block mb-1">
          Why you're reaching out
        </label>
        <select
          id="reason"
          name="reason"
          className={fieldClass}
          defaultValue=""
        >
          <option value="" disabled className="bg-[#141414]">
            Pick one
          </option>
          {REASONS.map((r) => (
            <option key={r.value} value={r.value} className="bg-[#141414]">
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block mb-1">
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
        <p className="font-mono text-[11px] text-white/45 max-w-sm">
          No spam, no list-sharing. Replies usually inside 15 minutes during
          waking hours.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-lime disabled:opacity-50"
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
