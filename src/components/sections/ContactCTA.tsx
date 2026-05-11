import Link from "next/link";
import { Container } from "@/components/site/Container";
import { agent, social } from "@/lib/site-config";

export function ContactCTA() {
  return (
    <section className="relative bg-bone py-28 md:py-40">
      <Container>
        <div className="border-t hairline pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow">VI · Next</p>
              <h2 className="mt-4 font-display text-6xl md:text-7xl lg:text-[120px] leading-[0.9] tracking-[-0.035em] text-ink">
                Ready when
                <br />
                <span className="italic font-light text-sandstone-deep">
                  you are.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pb-6">
              <p className="text-base leading-relaxed text-ink-muted max-w-sm">
                Three ways in. Pick whichever is easier — the answer comes
                back quick either way.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-l hairline">
            <a
              href={agent.phoneHref}
              className="group p-8 md:p-10 border-r border-b hairline hover:bg-paper transition-colors"
            >
              <div className="eyebrow text-sandstone-deep">Call</div>
              <div className="mt-5 font-display text-3xl md:text-4xl tracking-[-0.02em] text-ink">
                {agent.phone}
              </div>
              <div className="mt-3 font-mono text-[12px] text-ink-muted">
                Answer in 15 min or less
              </div>
              <span className="mt-8 block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft opacity-50 group-hover:opacity-100 transition">
                Tap to call →
              </span>
            </a>

            <a
              href={agent.emailHref}
              className="group p-8 md:p-10 border-r border-b hairline hover:bg-paper transition-colors"
            >
              <div className="eyebrow text-sandstone-deep">Email</div>
              <div className="mt-5 font-display text-2xl md:text-3xl tracking-[-0.02em] text-ink break-all">
                {agent.email}
              </div>
              <div className="mt-3 font-mono text-[12px] text-ink-muted">
                For the long version
              </div>
              <span className="mt-8 block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft opacity-50 group-hover:opacity-100 transition">
                Open mail app →
              </span>
            </a>

            <a
              href={social.instagramBusiness.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 md:p-10 border-r border-b hairline hover:bg-paper transition-colors"
            >
              <div className="eyebrow text-sandstone-deep">DM</div>
              <div className="mt-5 font-display text-2xl md:text-3xl tracking-[-0.02em] text-ink">
                {social.instagramBusiness.handle}
              </div>
              <div className="mt-3 font-mono text-[12px] text-ink-muted">
                The unfiltered tour reel
              </div>
              <span className="mt-8 block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft opacity-50 group-hover:opacity-100 transition">
                Slide in →
              </span>
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6">
            <p className="font-mono text-[12px] text-ink-muted max-w-md">
              Want the long-form intake instead? Tell Kayden what you're
              after.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-ink text-cream px-7 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-sandstone transition-colors"
            >
              Open contact form <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
