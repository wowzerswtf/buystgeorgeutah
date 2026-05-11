import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { SearchBar } from "@/components/site/SearchBar";
import { areas, getArea } from "@/lib/areas";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return { title: "Area not found" };
  return {
    title: `${area.name}, ${area.state} Real Estate`,
    description: `${area.name}, ${area.state} homes for sale. ${area.blurb}`,
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const others = areas.filter((a) => a.slug !== slug);

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow={area.eyebrow}
          title={area.name}
          italic={`${area.state}.`}
          intro={area.blurb}
        />

        <section className="bg-[#0a0a0a] -mt-12 pb-16 relative z-10">
          <Container>
            <div className="lime-glow">
              <SearchBar />
            </div>
          </Container>
        </section>

        <section className="bg-[#0a0a0a] py-20 md:py-28">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-7">
                <span className="tag-lime">About the Area</span>
                <p className="mt-6 display text-2xl md:text-3xl text-white leading-[1.25]">
                  {area.longBlurb}
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="glass rounded-2xl p-7">
                  <span className="tag-lime">Highlights</span>
                  <ul className="mt-5 space-y-3 border-t border-white/[0.06] pt-5">
                    {area.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-4 font-mono text-sm text-white/75"
                      >
                        <span className="text-lime-400 shrink-0">▪</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href={`/search?city=${area.slug}`}
                    className="btn-lime"
                  >
                    See Homes in {area.name} →
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#0e0e0e] py-20 md:py-28 border-t border-white/[0.06]">
          <Container>
            <span className="tag-lime">Nearby Areas</span>
            <h2 className="mt-6 display-caps text-3xl md:text-4xl text-white">
              Or explore<br />
              <span className="text-lime-400">somewhere else.</span>
            </h2>

            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {others.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="block glass rounded-2xl p-6 h-full group transition-all"
                  >
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-lime-400/80">
                      {a.eyebrow}
                    </span>
                    <h3 className="mt-3 display-caps text-2xl text-white group-hover:text-lime-400 transition">
                      {a.name}, {a.state}
                    </h3>
                    <p className="mt-3 text-sm text-white/65 leading-relaxed line-clamp-3">
                      {a.blurb}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
