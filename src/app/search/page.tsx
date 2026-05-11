import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { SearchBar } from "@/components/site/SearchBar";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Search Homes for Sale",
  description:
    "Browse homes for sale across St. George, Washington, Hurricane, Cedar City, Santa Clara, Ivins, La Verkin, and Mesquite. Real-time MLS listings with Kayden Palmer.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const cityParam = typeof params.city === "string" ? params.city : "";
  const activeArea = areas.find((a) => a.slug === cityParam);

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow="Search · MLS Listings"
          title={activeArea ? `Homes in ${activeArea.name}` : "Find Your"}
          italic={activeArea ? activeArea.state : "Dream Home."}
          intro="The search bar below talks to the MLS directly. Filter by city, price, beds, type — narrow it down and start a tour."
        />

        <section className="bg-[#0a0a0a] -mt-12 pb-20 relative z-10">
          <Container>
            <div className="lime-glow">
              <SearchBar />
            </div>
          </Container>
        </section>

        <section className="bg-[#0a0a0a] pb-24 md:pb-32">
          <Container>
            <div className="rounded-2xl border-2 border-dashed border-white/[0.12] bg-white/[0.02] p-10 md:p-16 text-center">
              <span className="tag-lime">IDX Slot · Ready</span>
              <h2 className="mt-6 display-caps text-3xl md:text-4xl lg:text-5xl text-white max-w-2xl mx-auto">
                Live MLS Listings<br />
                <span className="text-lime-400">drop in here.</span>
              </h2>
              <p className="mt-6 max-w-xl mx-auto text-white/65 leading-relaxed">
                Once Kayden's IDX provider is selected, we slot the listings
                widget directly into this section. Search filters above
                already wire into{" "}
                <code className="font-mono text-sm bg-white/[0.06] text-lime-400 px-1.5 py-0.5 rounded">
                  /search?city=...&amp;minPrice=...
                </code>{" "}
                — one config swap away.
              </p>
              <div className="mt-10 inline-flex flex-wrap gap-3 justify-center font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
                {["IDX Broker", "iHomeFinder", "Showcase", "RealGeeks", "WFRMLS RESO"].map(
                  (p) => (
                    <span
                      key={p}
                      className="px-3 py-1.5 border border-white/[0.12] rounded-lg"
                    >
                      {p}
                    </span>
                  ),
                )}
              </div>
            </div>

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
