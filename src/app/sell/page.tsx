import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = {
  title: "Sell Your Home in St. George",
  description:
    "Selling a home in St. George, Washington, Hurricane, or anywhere across Southern Utah. Strategic pricing, full marketing, real distribution. With Kayden Palmer.",
};

const PILLARS = [
  {
    eyebrow: "Pricing",
    title: "Priced to move, not to sit.",
    body:
      "Most homes sit because they're priced from the seller's wishlist instead of the comps. We start with the data — recent solds in your zip code, days-on-market trends, pending vs. expired ratios — and price the home where it actually pulls offers.",
  },
  {
    eyebrow: "Prep",
    title: "Pre-list, not pre-mistake.",
    body:
      "Before the sign goes in the yard, we walk every room. Paint touch-ups, light fixtures, staging tweaks. The cheap stuff that adds tens of thousands. I'll give you a punch list and a budget — and connect you with the trades to knock it out fast.",
  },
  {
    eyebrow: "Marketing",
    title: "Photography first, everything else second.",
    body:
      "Hero photos sell homes. Pro photographer, drone footage for the lots that warrant it, full video walkthrough, floor plan, neighborhood reel. Then we distribute it everywhere — MLS, Zillow, Realtor, Instagram, the local agent network, my buyer list.",
  },
  {
    eyebrow: "Negotiation",
    title: "Hold the line on the right things.",
    body:
      "When the offers come in, the price is just one of seven things that matter. Earnest money, financing type, contingency periods, repair credits, seller concessions, possession date, post-close occupancy. I'll walk you through the trade-offs and we'll counter on the terms that actually move your bottom line.",
  },
  {
    eyebrow: "Close",
    title: "Twenty-eight days, no surprises.",
    body:
      "Once we're under contract, the work doubles. Inspections, appraisal, title, repairs, walk-through. I run the timeline daily — you'll see every deadline before it hits and never wonder where things stand.",
  },
] as const;

export default function SellPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow="Sell"
          title="Five pillars."
          italic="Zero surprises."
          intro="Listing your home is straightforward when you know what actually moves the needle. Here's the system — and where I add the most value at each step."
        />

        <section className="bg-bone py-20 md:py-28">
          <Container>
            <div className="space-y-px bg-ink/10 border hairline">
              {PILLARS.map((p, i) => (
                <article
                  key={p.eyebrow}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-bone p-8 md:p-12 hover:bg-paper transition-colors"
                >
                  <div className="md:col-span-3">
                    <div className="font-display text-7xl md:text-8xl tracking-[-0.04em] text-sandstone-deep/20 leading-none">
                      0{i + 1}
                    </div>
                    <div className="eyebrow mt-3">{p.eyebrow}</div>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="font-display text-4xl md:text-5xl leading-[0.98] tracking-[-0.03em] text-ink">
                      {p.title}
                    </h2>
                    <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-ink-soft">
                      {p.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-paper py-20 md:py-28">
          <Container>
            <div className="border-t hairline pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-8">
                  <p className="eyebrow">Free</p>
                  <h2 className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-[-0.035em] text-ink">
                    What's your home
                    <br />
                    <span className="italic font-light text-sandstone-deep">
                      actually worth?
                    </span>
                  </h2>
                </div>
                <div className="lg:col-span-4 lg:pb-6">
                  <p className="text-base text-ink-muted leading-relaxed">
                    Not a Zillow estimate. A real comp analysis, hand-pulled
                    for your block. No obligation, no pressure to list.
                  </p>
                </div>
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/contact?reason=valuation"
                  className="inline-flex items-center gap-3 bg-ink text-cream px-7 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-sandstone transition-colors"
                >
                  Request a valuation <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
