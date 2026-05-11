import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = {
  title: "Find Your Dream Home in Southern Utah",
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

        <section className="bg-[#0a0a0a] py-20 md:py-28">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
              <div className="lg:col-span-5">
                <span className="tag-lime">The Six Steps</span>
                <h2 className="mt-6 display-caps text-4xl md:text-5xl text-white">
                  How a Kayden deal<br />
                  <span className="text-lime-400">actually moves.</span>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:pt-6">
                <p className="text-base md:text-lg leading-relaxed text-white/65">
                  Real estate has too many moving parts to wing it. Here's
                  the same six-step process I've run 144+ times — fast when
                  the market demands it, careful when the deal does.
                </p>
              </div>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="glass rounded-2xl p-8 md:p-10 transition-all"
                >
                  <div className="flex items-baseline justify-between">
                    <div className="display-caps text-5xl md:text-6xl text-lime-400/80">
                      {s.n}
                    </div>
                    <span className="tag-lime">Step</span>
                  </div>
                  <h3 className="mt-6 display-caps text-2xl md:text-3xl text-white">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/70">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="bg-[#0e0e0e] py-20 md:py-28 border-y border-white/[0.06]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <span className="tag-lime">Out-of-State Buyers</span>
                <h2 className="mt-6 display-caps text-4xl md:text-5xl text-white">
                  Buying from<br />
                  <span className="text-lime-400">far away.</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-white/65">
                  More than half of Southern Utah's buyers right now are
                  moving from somewhere else. Whole process can run remote
                  if it has to.
                </p>
              </div>
              <div className="lg:col-span-7">
                <ul className="space-y-3">
                  {OUT_OF_STATE.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-6 glass rounded-xl p-5 transition-all"
                    >
                      <span className="font-mono text-[12px] tracking-[0.18em] text-lime-400 shrink-0">
                        0{i + 1}
                      </span>
                      <span className="text-white/85 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap gap-4">
              <Link href="/search" className="btn-lime">
                Start a Search →
              </Link>
              <Link href="/contact" className="btn-ghost">
                Book the First Call
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
