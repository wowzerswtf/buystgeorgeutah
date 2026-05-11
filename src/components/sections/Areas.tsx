import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { areas } from "@/lib/areas";
import { assets } from "@/lib/site-config";

// Map each area to a hero image. Cycles through Kayden's R2 cache images
// + brand shots — replace per-area when better photography is available.
const AREA_IMAGES: Record<string, string> = {
  "st-george": assets.motoImage,
  washington: assets.cacheImage8,
  hurricane: assets.cacheImage5,
  "santa-clara": assets.cacheImage11,
  ivins: assets.buyImage,
  "cedar-city": assets.sellImage,
  "la-verkin": assets.footerImage,
  mesquite: assets.cacheImage8,
};

export function Areas() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <span className="tag-lime">Where We Work</span>
            <h2 className="mt-6 display-caps text-4xl md:text-5xl lg:text-6xl text-white">
              Eight markets,<br />
              <span className="text-lime-400">one local.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-base md:text-lg leading-relaxed text-white/65">
              Southern Utah isn't one market — it's a string of small ones,
              each with its own micro-economy, HOAs, and unwritten rules.
              Pick a town to dig in.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
          {areas.map((area, i) => {
            const span =
              i === 0
                ? "sm:col-span-2 lg:col-span-3 lg:row-span-2 aspect-[4/5] lg:aspect-auto lg:min-h-[540px]"
                : "lg:col-span-3 aspect-[5/3]";
            const img = AREA_IMAGES[area.slug] ?? assets.motoImage;
            return (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className={`group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 ${span}`}
              >
                <Image
                  src={img}
                  alt={`${area.name}, ${area.state}`}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
                  className="object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-[1000ms]"
                  unoptimized
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.45) 45%, rgba(10,10,10,0.9) 100%)",
                  }}
                />

                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between text-white">
                  <span className="self-start bg-lime-400 px-2.5 py-1 rounded-lg text-[10px] tracking-[0.15em] text-black font-bold uppercase">
                    {area.eyebrow}
                  </span>

                  <div>
                    <h3
                      className={`display-caps tracking-[-0.01em] ${
                        i === 0
                          ? "text-5xl md:text-6xl lg:text-7xl"
                          : "text-3xl md:text-4xl"
                      }`}
                    >
                      {area.name}
                      <span className="text-lime-400 font-normal">
                        , {area.state}
                      </span>
                    </h3>
                    <p
                      className={`mt-3 max-w-md text-white/75 leading-relaxed ${
                        i === 0 ? "text-base md:text-lg" : "text-sm"
                      }`}
                    >
                      {area.blurb}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-lime-400 opacity-80 group-hover:opacity-100 group-hover:gap-3 transition-all">
                      View homes →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
