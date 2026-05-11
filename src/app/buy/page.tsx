import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = {
  title: "Buy a Home in Southern Utah",
  description:
    "Buying a home in St. George, Washington, Hurricane, or anywhere across Southern Utah. Local-first representation from Kayden Palmer.",
};

const STEPS = [
  {
    n: "01",
    title: "First call",
    body:
      "We talk for thirty minutes. What you actually want, what you actually need, what you actually have to spend. No pitch, no pressure. By the end you'll know if I'm the right fit.",
  },
  {
    n: "02",
    title: "Lender intro",
    body:
      "If you don't already have one, I'll connect you with two or three local lenders I trust. Pre-approval matters more here than it used to — sellers want certainty.",
  },
  {
    n: "03",
    title: "Live search",
    body:
      "MLS access, off-market intel, FSBOs, and the deals that haven't hit Zillow yet. Saved searches that ping you, not me. Tours scheduled around your life.",
  },
  {
    n: "04",
    title: "Offer strategy",
    body:
      "Comp work that goes beyond the auto-generated stuff. Terms that win without overpaying. Contingencies that protect you. Escalation clauses where they make sense, and where they don't.",
  },
  {
    n: "05",
    title: "Under contract",
    body:
      "Inspections, appraisals, title, HOA docs, repairs — I run the timeline so nothing surprises you. You'll get a calendar of every deadline and a heads-up before each one hits.",
  },
  {
    n: "06",
    title: "Closing day",
    body:
      "I show up. We walk through one last time. Keys hit your hand. Then I check in three months later to make sure the home still feels right.",
  },
] as const;

const OUT_OF_STATE = [
  "FaceTime tours in the time zone that works for you",
  "Drone footage for the lots that warrant it",
  "Neighborhood video walk-throughs after you've narrowed it down",
  "Local lender, title, and inspector intros — all vetted",
  "A 90-day relocation checklist for after you close",
] as const;

export default function BuyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow="Buy"
          title="From the first showing"
          italic="to the keys in your hand."
          intro="There's a version of buying a home where everything happens on time and nobody surprises you. That's the version I run."
        />

        <section className="bg-bone py-20 md:py-28">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-5">
                <p className="eyebrow">The Six Steps</p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em] text-ink">
                  How a Kayden deal
                  <br />
                  <span className="italic font-light text-sandstone-deep">
                    actually moves.
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:pt-6">
                <p className="text-base md:text-lg leading-relaxed text-ink-muted">
                  Real estate has too many moving parts to wing it. Here's
                  the same six-step process I've run 144+ times — fast when
                  the market demands it, careful when the deal does.
                </p>
              </div>
            </div>

            <ol className="border-t border-l hairline">
              {STEPS.map((s, i) => (
                <li
                  key={s.n}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-8 md:p-12 border-r border-b hairline ${
                    i % 2 === 1 ? "bg-paper" : ""
                  }`}
                >
                  <div className="md:col-span-2 font-display text-5xl md:text-6xl tracking-[-0.04em] text-sandstone-deep">
                    {s.n}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-3xl md:text-4xl tracking-[-0.02em] text-ink">
                      {s.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-base leading-relaxed text-ink-soft">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="bg-ink text-cream py-20 md:py-28">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <p className="eyebrow text-cream/40">Out-of-State Buyers</p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em]">
                  Buying from
                  <br />
                  <span className="italic font-light text-sandstone">
                    far away.
                  </span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-cream/70">
                  More than half of Southern Utah's buyers right now are
                  moving from somewhere else. Whole process can run remote
                  if it has to.
                </p>
              </div>
              <div className="lg:col-span-7">
                <ul className="space-y-5">
                  {OUT_OF_STATE.map((item, i) => (
                    <li key={i} className="flex gap-6 border-b border-cream/10 pb-5">
                      <span className="font-mono text-[12px] tracking-[0.18em] text-sandstone shrink-0">
                        0{i + 1}
                      </span>
                      <span className="text-cream/90 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap gap-4">
              <Link
                href="/search"
                className="inline-flex items-center gap-3 bg-cream text-ink px-7 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-sandstone hover:text-cream transition-colors"
              >
                Start a search <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-cream/30 px-7 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-cream/10 transition"
              >
                Book the first call
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
