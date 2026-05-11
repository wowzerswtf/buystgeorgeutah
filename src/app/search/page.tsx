import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
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
  const { listings, configured, total } = await searchListings(query);

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow={configured ? "Search · Live MLS Listings" : "Search · IDX Activation Pending"}
          title={activeArea ? `Homes in ${activeArea.name}` : "Find Your"}
          italic={activeArea ? activeArea.state : "Dream Home."}
          intro={
            configured
              ? "Live MLS data, refreshed every minute. Filter by city, price, beds, type — start a tour with one click."
              : "Search is wired and ready. The live MLS feed turns on the moment Kayden's Spark API key lands."
          }
        />

        <section className="bg-[#0a0a0a] -mt-12 pb-16 relative z-10">
          <Container>
            <div className="lime-glow">
              <SearchBar />
            </div>
          </Container>
        </section>

        <section className="bg-[#0a0a0a] pb-24 md:pb-32">
          <Container>
            {isDemoMode() && configured && <DemoBanner />}
            <ListingGrid
              listings={listings}
              configured={configured}
              total={total}
            />

            <div className="mt-20">
              <span className="tag-lime">Browse by Area</span>
              <h3 className="mt-6 display-caps text-3xl md:text-4xl text-white">
                Eight Southern Utah<br />
                <span className="text-lime-400">markets.</span>
              </h3>

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
                      <h4 className="mt-3 display-caps text-2xl text-white group-hover:text-lime-400 transition">
                        {area.name}, {area.state}
                      </h4>
                      <p className="mt-3 text-sm text-white/65 leading-relaxed">
                        {area.blurb}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
