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

        <section className="bg-bone -mt-12 pb-20">
          <Container>
            <div className="shadow-[0_30px_80px_-30px_rgba(26,15,10,0.45)]">
              <SearchBar variant="dark" />
            </div>
          </Container>
        </section>

        <section className="bg-bone py-20 md:py-28">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="eyebrow">About the area</p>
                <p className="mt-5 font-display text-3xl md:text-4xl leading-[1.1] tracking-[-0.02em] text-ink">
                  {area.longBlurb}
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="border-t hairline pt-8">
                  <p className="eyebrow">Highlights</p>
                  <ul className="mt-5 space-y-3">
                    {area.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-4 border-b hairline pb-3 font-mono text-sm text-ink-soft"
                      >
                        <span className="text-sandstone-deep shrink-0">·</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <Link
                    href={`/search?city=${area.slug}`}
                    className="inline-flex items-center gap-3 bg-ink text-cream px-7 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-sandstone transition-colors"
                  >
                    See homes in {area.name} <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-20 md:py-28">
          <Container>
            <p className="eyebrow">Nearby areas</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em] text-ink">
              Or explore somewhere else.
            </h2>

            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border hairline">
              {others.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="block bg-paper hover:bg-bone transition-colors p-6 h-full group"
                  >
                    <p className="eyebrow">{a.eyebrow}</p>
                    <h3 className="mt-3 font-display text-2xl tracking-[-0.02em] text-ink group-hover:text-sandstone-deep transition">
                      {a.name}, {a.state}
                    </h3>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed line-clamp-3">
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
