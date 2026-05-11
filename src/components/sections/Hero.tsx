import Link from "next/link";
import { Container } from "@/components/site/Container";
import { SearchBar } from "@/components/site/SearchBar";
import { assets } from "@/lib/site-config";

export function Hero() {
  return (
    <>
      {/* HERO – full-bleed video. No overflow-hidden trap. */}
      <section className="relative isolate min-h-screen flex flex-col justify-end bg-[#0a0a0a]">
        {/* Background video */}
        <video
          src={assets.heroVideo}
          poster={assets.motoImage}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Gradient overlay for legibility */}
        <div
          aria-hidden
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.35) 35%, rgba(10,10,10,0.85) 100%)",
          }}
        />
        {/* Subtle vignette */}
        <div
          aria-hidden
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        <Container className="relative z-10 pt-32 pb-16 md:pb-20">
          <div className="max-w-[1100px]">
            <div className="flex items-center gap-3 rise rise-d1">
              <span className="tag-lime">Southern Utah · Licensed Realtor</span>
              <span className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400 pulse-dot" />
                Available now
              </span>
            </div>

            <h1 className="mt-6 display-caps text-[12vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[120px] text-white">
              <span className="block rise rise-d2">Connecting people</span>
              <span className="block text-lime-400 rise rise-d3">
                with places.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-white/75 rise rise-d4">
              Born here. Raised here. 144 homes sold here. Kayden Palmer is
              Southern Utah's local-on-purpose real estate expert — St. George
              and beyond.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 rise rise-d4">
              <Link href="/search" className="btn-lime">
                Browse Homes →
              </Link>
              <Link href="/about" className="btn-ghost">
                Meet Kayden
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Search bar — its own section so nothing clips it */}
      <section className="relative bg-[#0a0a0a] -mt-12 md:-mt-16 pb-16 z-20">
        <Container>
          <div className="rise rise-d5 lime-glow">
            <SearchBar />
          </div>
          <p className="mt-4 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 text-center md:text-right">
            Live MLS listings · IDX-ready
          </p>
        </Container>
      </section>
    </>
  );
}
