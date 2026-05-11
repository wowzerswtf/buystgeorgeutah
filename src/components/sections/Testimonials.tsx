"use client";

import { useState } from "react";
import { Container } from "@/components/site/Container";
import { testimonials } from "@/lib/site-config";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="relative bg-ink text-cream py-28 md:py-40 overflow-hidden">
      {/* Oversized quote mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-4 md:right-16 font-display text-[40vw] md:text-[26vw] leading-[0.7] text-cream/[0.04] select-none"
      >
        "
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <p className="eyebrow text-cream/50">V · Reviews</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em]">
              Seventy-plus
              <br />
              <span className="italic font-light text-sandstone">
                five-star reviews.
              </span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-cream/60">
              The full collection lives on Zillow, but here's the gist.
            </p>
          </div>

          <div className="lg:col-span-9">
            <blockquote className="relative">
              <p
                key={active}
                className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-[-0.02em] text-cream"
              >
                {t.quote}
              </p>
              <footer className="mt-10 flex items-center gap-6">
                <div className="h-px w-12 bg-sandstone" aria-hidden />
                <div>
                  <div className="font-medium text-cream">{t.name}</div>
                  <div className="font-mono text-[12px] tracking-wide text-cream/60 mt-0.5">
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
                      ? "w-16 bg-sandstone"
                      : "w-10 bg-cream/20 hover:bg-cream/40"
                  }`}
                />
              ))}
              <span className="font-mono text-[11px] tracking-[0.18em] text-cream/40 ml-4">
                {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
