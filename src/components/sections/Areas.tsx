import Link from "next/link";
import { Container } from "@/components/site/Container";
import { areas } from "@/lib/areas";

// Curated background gradients per area — each one its own personality.
const AREA_GRADIENTS: Record<string, string> = {
  "st-george":
    "linear-gradient(135deg, #c87a4f 0%, #9b4624 60%, #5a2210 100%)",
  washington:
    "linear-gradient(160deg, #d99764 0%, #b25e2f 70%, #732d12 100%)",
  hurricane:
    "linear-gradient(140deg, #e4a25a 0%, #c66b3d 50%, #7a3018 100%)",
  "santa-clara":
    "linear-gradient(150deg, #b5896c 0%, #845030 50%, #4a2010 100%)",
  ivins:
    "linear-gradient(145deg, #c97d4e 0%, #6e3119 60%, #2a0e06 100%)",
  "cedar-city":
    "linear-gradient(155deg, #8a9077 0%, #5f6e4f 55%, #2f3826 100%)",
  "la-verkin":
    "linear-gradient(135deg, #d18154 0%, #8a4423 60%, #3e1808 100%)",
  mesquite:
    "linear-gradient(150deg, #d6a772 0%, #a87141 55%, #5d3417 100%)",
};

export function Areas() {
  return (
    <section className="relative bg-bone py-28 md:py-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">II · Where</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-ink">
              Eight markets,
              <br />
              <span className="italic font-light text-sandstone-deep">
                one local.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-base md:text-lg leading-relaxed text-ink-muted">
              Southern Utah isn't one market — it's a string of small ones,
              each with their own micro-economy, HOAs, and unwritten rules.
              Pick a town to dig in.
            </p>
          </div>
        </div>

        {/* Asymmetric grid: hero card spans 2 cols on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-px bg-ink/10">
          {areas.map((area, i) => {
            const span =
              i === 0
                ? "sm:col-span-2 lg:col-span-3 lg:row-span-2 aspect-[4/5] lg:aspect-auto lg:min-h-[520px]"
                : "lg:col-span-3 aspect-[5/3]";
            return (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className={`group relative overflow-hidden ${span}`}
                style={{
                  background: AREA_GRADIENTS[area.slug] ?? AREA_GRADIENTS["st-george"],
                }}
              >
                {/* Decorative SVG layer per card */}
                <svg
                  aria-hidden
                  viewBox="0 0 600 400"
                  preserveAspectRatio="xMidYMax slice"
                  className="absolute inset-0 w-full h-full opacity-40 transition-transform duration-[1200ms] group-hover:scale-105"
                >
                  <path
                    d="M0,400 L0,260 L80,240 L160,280 L240,220 L320,260 L420,210 L520,250 L600,230 L600,400 Z"
                    fill="rgba(0,0,0,0.25)"
                  />
                  <path
                    d="M0,400 L0,320 L60,310 L60,280 L160,280 L160,320 L260,320 L260,290 L360,290 L360,320 L480,320 L480,300 L600,300 L600,400 Z"
                    fill="rgba(0,0,0,0.45)"
                  />
                </svg>

                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between text-cream">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.16em] uppercase opacity-70">
                      {area.eyebrow}
                    </p>
                  </div>
                  <div>
                    <h3
                      className={`font-display tracking-[-0.02em] leading-[0.95] ${
                        i === 0
                          ? "text-6xl md:text-7xl lg:text-8xl"
                          : "text-4xl md:text-5xl"
                      }`}
                    >
                      {area.name}
                      <span className="opacity-60 font-light italic">
                        , {area.state}
                      </span>
                    </h3>
                    <p
                      className={`mt-4 max-w-md text-cream/80 leading-relaxed ${
                        i === 0 ? "text-base md:text-lg" : "text-sm"
                      }`}
                    >
                      {area.blurb}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] opacity-70 group-hover:opacity-100 group-hover:gap-3 transition-all">
                      View homes <span aria-hidden>→</span>
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
