import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { getListing } from "@/lib/idx/spark";
import { isIdxConfigured } from "@/lib/idx/config";
import {
  formatPrice,
  formatNum,
  listingTitle,
  listingSubtitle,
  listingHeroImage,
  listingPhotoUrls,
} from "@/lib/idx/format";
import { agent, brokerage } from "@/lib/site-config";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const listing = await getListing(id);
  if (!listing) return { title: "Listing not found" };
  const s = listing.StandardFields;
  return {
    title: `${listingTitle(s)} — ${formatPrice(s.ListPrice)}`,
    description: s.PublicRemarks?.slice(0, 200) ?? listingSubtitle(s),
  };
}

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!isIdxConfigured()) {
    return (
      <>
        <Header />
        <main className="flex-1 pt-32 pb-24 bg-[#0a0a0a]">
          <Container>
            <span className="tag-lime">Listing · Pending IDX Activation</span>
            <h1 className="mt-6 display-caps text-4xl md:text-6xl text-white">
              Listings activate<br />
              <span className="text-lime-400">once the Spark API key lands.</span>
            </h1>
            <p className="mt-8 max-w-xl text-white/65 leading-relaxed">
              Direct listing detail pages turn on automatically once Kayden's
              IDX feed is approved. Until then, give him a call directly
              about listing #{id}.
            </p>
            <div className="mt-10">
              <a href={agent.phoneHref} className="btn-lime">
                Call Kayden · {agent.phone} →
              </a>
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  const listing = await getListing(id);
  if (!listing) notFound();

  const s = listing.StandardFields;
  const photoUrls = listingPhotoUrls(listing, 12);
  const hero = listingHeroImage(listing);

  return (
    <>
      <Header />
      <main className="flex-1 pt-24 md:pt-28 bg-[#0a0a0a]">
        <Container className="pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8">
              {hero && (
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={hero}
                    alt={listingTitle(s)}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {photoUrls.length > 1 && (
                <div className="mt-3 grid grid-cols-4 md:grid-cols-6 gap-3">
                  {photoUrls.slice(1, 7).map((url, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden rounded-lg bg-white/[0.03] border border-white/[0.06]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={url}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-10">
                <span className="tag-lime">{s.StandardStatus ?? "Active"}</span>
                <h1 className="mt-6 display-caps text-3xl md:text-5xl text-white">
                  {listingTitle(s)}
                </h1>
                <p className="mt-3 text-white/65">{listingSubtitle(s)}</p>

                <div className="mt-8 flex flex-wrap items-end gap-x-10 gap-y-4">
                  <div>
                    <div className="eyebrow">Price</div>
                    <div className="mt-1 display-caps text-3xl md:text-4xl text-lime-400">
                      {formatPrice(s.ListPrice)}
                    </div>
                  </div>
                  <Stat label="Beds" value={formatNum(s.BedsTotal)} />
                  <Stat label="Baths" value={formatNum(s.BathsTotal)} />
                  <Stat
                    label="Sqft"
                    value={formatNum(s.BuildingAreaTotal ?? s.LivingArea)}
                  />
                  <Stat label="Year" value={formatNum(s.YearBuilt)} />
                </div>

                {s.PublicRemarks && (
                  <p className="mt-10 text-base md:text-lg leading-relaxed text-white/80 max-w-prose">
                    {s.PublicRemarks}
                  </p>
                )}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 glass rounded-2xl p-7">
                <span className="tag-lime">Ask Kayden</span>
                <h2 className="mt-5 display-caps text-2xl text-white">
                  Tour this home<br />
                  <span className="text-lime-400">this week.</span>
                </h2>
                <p className="mt-4 text-sm text-white/65 leading-relaxed">
                  Kayden books showings same-day for serious buyers. Out of
                  state? He'll FaceTime the whole thing.
                </p>

                <div className="mt-6 space-y-3">
                  <a href={agent.phoneHref} className="btn-lime w-full justify-center">
                    Call {agent.phone}
                  </a>
                  <a href={agent.emailHref} className="btn-ghost w-full justify-center">
                    Email Kayden
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.08]">
                  <p className="font-mono text-[11px] leading-relaxed text-white/55">
                    Listed via the MLS. {brokerage.name}. Listing data refreshed every minute.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-16">
            <Link
              href="/search"
              className="font-mono text-[12px] tracking-[0.18em] uppercase text-lime-400 hover:text-lime-300 transition"
            >
              ← Back to search
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="eyebrow">{label}</div>
      <div className="mt-1 display-caps text-xl text-white">{value}</div>
    </div>
  );
}
