import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = {
  title: "Sell for Top Dollar in St. George",
  description:
    "Selling a home in St. George, Washington, Hurricane, or anywhere across Southern Utah. Strategic pricing, full marketing, real distribution. With Kayden Palmer.",
};

const PILLARS = [
  {
    n: "01",
    eyebrow: "Pricing",
    title: "Priced to move, not to sit.",
    body:
      "Most homes sit because they're priced from the seller's wishlist instead of the comps. We start with the data — recent solds in your zip code, days-on-market trends, pending vs. expired ratios — and price the home where it actually pulls offers.",
  },
  {
    n: "02",
    eyebrow: "Prep",
    title: "Pre-list, not pre-mistake.",
    body:
      "Before the sign goes in the yard, we walk every room. Paint touch-ups, light fixtures, staging tweaks. The cheap stuff that adds tens of thousands. I'll give you a punch list and a budget — and connect you with the trades to knock it out fast.",
  },
  {
    n: "03",
    eyebrow: "Marketing",
    title: "Photography first.",
    body:
      "Hero photos sell homes. Pro photographer, drone footage for the lots that warrant it, full video walkthrough, floor plan, neighborhood reel. Then we distribute it everywhere — MLS, Zillow, Realtor, Instagram, the local agent network, my buyer list.",
  },
  {
    n: "04",
    eyebrow: "Negotiation",
    title: "Hold the line.",
    body:
      "When the offers come in, the price is just one of seven things that matter. Earnest money, financing type, contingency periods, repair credits, seller concessions, possession date, post-close occupancy. I walk you through the trade-offs and we counter on the terms that actually move your bottom line.",
  },
  {
    n: "05",
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

        <section className="bg-[#0a0a0a] py-20 md:py-28">
          <Container>
            <div className="space-y-4 md:space-y-5">
              {PILLARS.map((p) => (
                <article
                  key={p.eyebrow}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 glass rounded-2xl p-8 md:p-12 transition-all"
                >
                  <div className="md:col-span-3">
                    <div className="display-caps text-6xl md:text-7xl text-lime-400/70 leading-none">
                      {p.n}
                    </div>
                    <span className="tag-lime mt-4 inline-block">
                      {p.eyebrow}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="display-caps text-3xl md:text-4xl text-white">
                      {p.title}
                    </h2>
                    <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-white/75">
                      {p.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#0e0e0e] py-20 md:py-28 border-y border-white/[0.06]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <span className="tag-lime">Free Valuation</span>
                <h2 className="mt-6 display-caps text-4xl md:text-5xl lg:text-6xl text-white">
                  What's your home<br />
                  <span className="text-lime-400">actually worth?</span>
                </h2>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-base text-white/65 leading-relaxed">
                  Not a Zillow estimate. A real comp analysis, hand-pulled
                  for your block. No obligation, no pressure to list.
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/contact?reason=valuation" className="btn-lime">
                Request a Valuation →
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
