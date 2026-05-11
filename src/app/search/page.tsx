import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { SearchBar } from "@/components/site/SearchBar";
import { areas } from "@/lib/areas";
import Link from "next/link";

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
          title={activeArea ? `Homes in ${activeArea.name}` : "Find your home"}
          italic={activeArea ? `${activeArea.state}` : "in Southern Utah."}
          intro="The search bar below talks to the MLS directly. Filter by city, price, beds, type — narrow it down and start a tour."
        />

        <section className="bg-bone -mt-12 pb-20">
          <Container>
            <div className="shadow-[0_30px_80px_-30px_rgba(26,15,10,0.45)]">
              <SearchBar variant="dark" />
            </div>
          </Container>
        </section>

        <section className="bg-bone pb-28 md:pb-40">
          <Container>
            {/* IDX Integration Placeholder */}
            <div className="border-2 border-dashed border-ink/15 bg-paper p-12 md:p-20 text-center">
              <p className="eyebrow text-sandstone-deep">IDX Slot · Ready</p>
              <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em] text-ink max-w-2xl mx-auto">
                Live MLS listings drop in here.
              </h2>
              <p className="mt-6 max-w-xl mx-auto text-ink-muted leading-relaxed">
                Once Kayden's IDX provider is selected (IDX Broker,
                iHomeFinder, Showcase IDX, or the WFRMLS RESO feed),
                we slot the listings widget directly into this section.
                Search filters above already wire into{" "}
                <code className="font-mono text-sm bg-bone-soft px-1.5 py-0.5">
                  /search?city=...&amp;minPrice=...
                </code>{" "}
                so the integration is one config swap away.
              </p>
              <div className="mt-10 inline-flex flex-wrap gap-3 justify-center font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                <span className="px-3 py-1.5 border hairline">IDX Broker</span>
                <span className="px-3 py-1.5 border hairline">iHomeFinder</span>
                <span className="px-3 py-1.5 border hairline">Showcase</span>
                <span className="px-3 py-1.5 border hairline">RealGeeks</span>
                <span className="px-3 py-1.5 border hairline">WFRMLS RESO</span>
              </div>
            </div>

            {/* Until IDX is wired, route folks to areas */}
            <div className="mt-20">
              <p className="eyebrow">Browse by area instead</p>
              <h3 className="mt-3 font-display text-3xl md:text-4xl leading-[0.95] tracking-[-0.03em] text-ink">
                Eight Southern Utah markets.
              </h3>

              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border hairline">
                {areas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="block bg-bone hover:bg-paper transition-colors p-6 h-full group"
                    >
                      <p className="eyebrow">{area.eyebrow}</p>
                      <h4 className="mt-3 font-display text-2xl tracking-[-0.02em] text-ink group-hover:text-sandstone-deep transition">
                        {area.name}, {area.state}
                      </h4>
                      <p className="mt-3 text-sm text-ink-muted leading-relaxed">
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
