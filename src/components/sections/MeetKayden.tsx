import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { agent, brokerage, social } from "@/lib/site-config";

export function MeetKayden() {
  return (
    <section className="relative bg-paper py-28 md:py-40 overflow-hidden">
      {/* Decorative serif initial in background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-8 md:-left-16 top-0 font-display text-[40vw] md:text-[28vw] leading-[0.8] text-ink/[0.035] select-none"
      >
        K
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Image column */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Frame */}
              <div className="absolute -inset-3 md:-inset-5 bg-sandstone/20 -z-10" />
              <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
                <Image
                  src={agent.headshot}
                  alt={`${agent.fullName}, ${agent.title}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-ink text-cream px-5 py-4 max-w-[200px]">
                <div className="eyebrow text-cream/50">Licensed</div>
                <div className="font-mono text-[12px] mt-1 leading-snug">
                  {brokerage.state} #{brokerage.agentLicense}
                </div>
              </div>
            </div>
          </div>

          {/* Copy column */}
          <div className="lg:col-span-7 lg:pt-4">
            <p className="eyebrow">III · Who</p>

            <h2 className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-ink">
              St. George born.
              <br />
              <span className="italic font-light">St. George raised.</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <p className="text-lg leading-relaxed text-ink-soft">
                  Real estate here isn't business — it's personal. The seller's
                  agent across the table grew up two blocks away. The framer at
                  your build site went to school with my brother. The folks
                  setting comps in your zip code are the people I sit next to
                  at lunch.
                </p>
                <p className="mt-5 text-base leading-relaxed text-ink-muted">
                  I've helped 144+ families buy, sell, and build across
                  Southern Utah. Out-of-state move? I've toured homes on
                  FaceTime in three time zones. First home? I'll explain every
                  line of every form. Investor? Let's run the actual STR
                  numbers, not the listing-agent numbers.
                </p>
              </div>

              <div className="md:col-span-5 md:pl-6 md:border-l hairline">
                <div className="eyebrow">Designations</div>
                <ul className="mt-3 space-y-1.5 font-mono text-[13px] text-ink-soft">
                  <li>{agent.title}</li>
                  <li>Local Expert · Southern Utah</li>
                  <li>5.0 Zillow Premier Agent</li>
                </ul>

                <div className="eyebrow mt-8">Brokerage</div>
                <p className="mt-3 font-mono text-[13px] text-ink-soft leading-relaxed">
                  {brokerage.name}
                </p>

                <div className="eyebrow mt-8">Find me</div>
                <ul className="mt-3 space-y-1.5">
                  <li>
                    <a
                      href={social.instagramBusiness.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[13px] text-ink-soft hover:text-sandstone-deep transition linky"
                    >
                      {social.instagramBusiness.handle}
                    </a>
                  </li>
                  <li>
                    <a
                      href={social.instagramPersonal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[13px] text-ink-soft hover:text-sandstone-deep transition linky"
                    >
                      {social.instagramPersonal.handle}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-ink text-cream px-7 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-sandstone transition-colors"
              >
                Full story <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
