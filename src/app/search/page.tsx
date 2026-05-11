import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { SearchBar } from "@/components/site/SearchBar";
import { ListingGrid } from "@/components/listings/ListingGrid";
import { DemoBanner } from "@/components/listings/DemoBanner";
import { searchListings } from "@/lib/idx/spark";
import { isDemoMode } from "@/lib/idx/config";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Search Homes for Sale",
  description:
    "Browse homes for sale across St. George, Washington, Hurricane, Cedar City, Santa Clara, Ivins, La Verkin, and Mesquite. Real-time MLS listings with Kayden Palmer.",
};

function toNum(v: string | string[] | undefined): number | undefined {
  if (typeof v !== "string") return undefined;
  const n = Number(v.replace(/[^\d]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

function toStr(v: string | string[] | undefined): string | undefined {
  return typeof v === "string" && v.length ? v : undefined;
}

const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
function fmtMoney(n?: number) {
  return n ? USD.format(n) : null;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const query = {
    city: toStr(sp.city),
    minPrice: toNum(sp.minPrice),
    maxPrice: toNum(sp.maxPrice),
    beds: toNum(sp.beds),
  };
  const activeArea = areas.find((a) => a.slug === query.city);
  const hasFilters = Boolean(
    query.city || query.minPrice || query.maxPrice || query.beds,
  );
  const { listings, configured, total } = await searchListings(query);

  // Human-readable filter chips
  const chips: string[] = [];
  if (activeArea) chips.push(`${activeArea.name}, ${activeArea.state}`);
  if (query.minPrice && query.maxPrice)
    chips.push(`${fmtMoney(query.minPrice)} – ${fmtMoney(query.maxPrice)}`);
  else if (query.minPrice) chips.push(`From ${fmtMoney(query.minPrice)}`);
  else if (query.maxPrice) chips.push(`Up to ${fmtMoney(query.maxPrice)}`);
  if (query.beds) chips.push(`${query.beds}+ bd`);

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#0a0a0a]">
        {/* Compact title strip — sits under the fixed header */}
        <section className="pt-28 md:pt-32 pb-8 md:pb-10">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="tag-lime">
                  {hasFilters ? "Filtered Search" : "Search · MLS Listings"}
                </span>
                <h1 className="mt-4 display-caps text-3xl md:text-5xl text-white leading-[0.95]">
                  {activeArea
                    ? `Homes in ${activeArea.name}, ${activeArea.state}`
                    : hasFilters
                      ? "Matching homes"
                      : "Find Your Dream Home"}
                </h1>
                {chips.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {chips.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center px-3 py-1 rounded-md border border-white/15 bg-white/[0.04] font-mono text-[11px] tracking-[0.12em] uppercase text-white/85"
                      >
                        {c}
                      </span>
                    ))}
                    <Link
                      href="/search"
                      className="inline-flex items-center px-3 py-1 rounded-md border border-white/10 hover:border-lime-400/50 hover:text-lime-400 font-mono text-[11px] tracking-[0.12em] uppercase text-white/55 transition"
                    >
                      × Clear
                    </Link>
                  </div>
                )}
              </div>
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/55">
                {configured
                  ? `${total.toLocaleString()} ${total === 1 ? "match" : "matches"}`
                  : "IDX pending activation"}
              </p>
            </div>
          </Container>
        </section>

        {/* Search bar — high up, lime glow */}
        <section className="pb-10 md:pb-14 relative z-10">
          <Container>
            <div className="lime-glow">
              <SearchBar />
            </div>
          </Container>
        </section>

        {/* Results */}
        <section id="results" className="pb-24 md:pb-32 scroll-mt-24">
          <Container>
            {isDemoMode() && configured && <DemoBanner />}
            <ListingGrid
              listings={listings}
              configured={configured}
              total={total}
            />

            {/* Area browse — only on the empty/unfiltered state to avoid clutter */}
            {!hasFilters && (
              <div className="mt-24">
                <span className="tag-lime">Browse by Area</span>
                <h2 className="mt-6 display-caps text-3xl md:text-4xl text-white">
                  Eight Southern Utah<br />
                  <span className="text-lime-400">markets.</span>
                </h2>

                <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {areas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas/${area.slug}`}
                        className="block glass rounded-2xl p-6 h-full group transition-all"
                      >
                        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-lime-400/80">
                          {area.eyebrow}
                        </span>
                        <h3 className="mt-3 display-caps text-2xl text-white group-hover:text-lime-400 transition">
                          {area.name}, {area.state}
                        </h3>
                        <p className="mt-3 text-sm text-white/65 leading-relaxed">
                          {area.blurb}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
