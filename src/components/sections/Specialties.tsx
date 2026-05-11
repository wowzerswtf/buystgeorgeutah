import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { specialties } from "@/lib/site-config";

export function Specialties() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <span className="tag-lime">How Can We Help You?</span>
            <h2 className="mt-6 display-caps text-4xl md:text-5xl lg:text-6xl text-white">
              From the first showing<br />
              <span className="text-lime-400">to the keys in hand.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-white/65 leading-relaxed text-base md:text-lg">
              Four ways Kayden shows up for clients. Whatever side of the
              table you're on, you don't have to rebuild the team for each
              kind of deal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {specialties.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug === "invest" ? "buy" : s.slug === "build" ? "buy" : s.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 aspect-[4/5]"
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-[800ms]"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.92) 100%)",
                }}
              />

              <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-between">
                <span className="self-start bg-lime-400 px-2.5 py-1 rounded-lg text-[10px] tracking-[0.15em] text-black font-bold uppercase">
                  {s.eyebrow}
                </span>

                <div>
                  <h3 className="display-caps text-2xl md:text-3xl text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/70 line-clamp-3">
                    {s.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-lime-400 opacity-80 group-hover:opacity-100 group-hover:gap-3 transition-all">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
