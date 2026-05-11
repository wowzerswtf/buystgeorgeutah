"use client";

import { useState } from "react";
import { Container } from "@/components/site/Container";
import { testimonials } from "@/lib/site-config";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32 overflow-hidden">
      {/* Decorative quote */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-4 md:right-16 display-caps text-[40vw] md:text-[24vw] leading-[0.7] text-white/[0.03] select-none"
      >
        "
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="tag-lime">What Clients Say</span>
            <h2 className="mt-6 display-caps text-4xl md:text-5xl text-white">
              70+ five-star<br />
              <span className="text-lime-400">reviews on Zillow.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/55">
              A few that stand out — the full collection lives on Zillow.
            </p>

            <div className="mt-10 flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="#a3e635"
                  aria-hidden
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span className="ml-3 font-mono text-[12px] text-white/60">
                5.0 · 70+ reviews
              </span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <blockquote className="relative">
              <p
                key={active}
                className="display text-2xl md:text-3xl lg:text-4xl text-white leading-[1.3]"
              >
                "{t.quote}"
              </p>
              <footer className="mt-10 flex items-center gap-6">
                <div className="h-px w-12 bg-lime-400" aria-hidden />
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="font-mono text-[12px] tracking-wide text-white/55 mt-0.5">
                    {t.city}
                  </div>
                </div>
              </footer>
            </blockquote>

            <div className="mt-14 flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show review ${i + 1}`}
                  className={`h-px transition-all ${
                    i === active
                      ? "w-16 bg-lime-400"
                      : "w-10 bg-white/15 hover:bg-white/40"
                  }`}
                />
              ))}
              <span className="font-mono text-[11px] tracking-[0.18em] text-white/35 ml-4">
                {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
