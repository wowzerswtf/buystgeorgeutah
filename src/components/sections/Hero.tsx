import Link from "next/link";
import { Container } from "@/components/site/Container";
import { SearchBar } from "@/components/site/SearchBar";
import { stats } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-bone grain">
      {/* Layered SVG red-rock landscape */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 20%, #f8efd9 0%, #ecdec1 35%, #d9b896 70%, #b8825d 100%)",
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-0 z-[1] w-full h-[55%] md:h-[60%]"
      >
        <defs>
          <linearGradient id="mesa-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c87a4f" />
            <stop offset="100%" stopColor="#a55d35" />
          </linearGradient>
          <linearGradient id="mesa-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b15c33" />
            <stop offset="100%" stopColor="#8a3f1f" />
          </linearGradient>
          <linearGradient id="mesa-near" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a3018" />
            <stop offset="100%" stopColor="#4d1c0c" />
          </linearGradient>
        </defs>

        {/* Far ridge */}
        <path
          d="M0,540 L0,360 L120,330 L180,360 L300,300 L420,340 L520,290 L620,330 L780,260 L900,300 L1080,250 L1240,290 L1380,260 L1500,300 L1600,280 L1600,540 Z"
          fill="url(#mesa-far)"
          opacity="0.7"
        />
        {/* Middle ridge */}
        <path
          d="M0,640 L0,470 L100,460 L180,420 L260,450 L380,400 L500,440 L620,390 L780,430 L920,400 L1080,440 L1220,400 L1360,430 L1500,400 L1600,430 L1600,640 Z"
          fill="url(#mesa-mid)"
          opacity="0.85"
        />
        {/* Near ridge with mesa tops */}
        <path
          d="M0,900 L0,640 L80,620 L80,560 L240,560 L240,640 L380,640 L380,600 L520,600 L520,640 L760,640 L760,580 L920,580 L920,640 L1100,640 L1100,610 L1260,610 L1260,640 L1440,640 L1440,600 L1600,600 L1600,900 Z"
          fill="url(#mesa-near)"
        />
        {/* Vertical canyon shadow lines */}
        <g stroke="#3a1810" strokeWidth="1.2" opacity="0.35">
          <line x1="160" y1="560" x2="170" y2="900" />
          <line x1="320" y1="600" x2="330" y2="900" />
          <line x1="460" y1="600" x2="465" y2="900" />
          <line x1="640" y1="640" x2="650" y2="900" />
          <line x1="840" y1="580" x2="855" y2="900" />
          <line x1="1020" y1="640" x2="1030" y2="900" />
          <line x1="1180" y1="610" x2="1190" y2="900" />
          <line x1="1340" y1="640" x2="1345" y2="900" />
          <line x1="1500" y1="600" x2="1510" y2="900" />
        </g>
        {/* Sun disc */}
        <circle cx="1200" cy="240" r="80" fill="#fbeac4" opacity="0.55" />
        <circle cx="1200" cy="240" r="60" fill="#f7d590" opacity="0.7" />
      </svg>

      {/* Subtle vignette */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 0%, transparent 40%, rgba(26,15,10,0.18) 100%)",
        }}
      />

      <Container className="relative z-10 pt-20 md:pt-28 pb-32 md:pb-44">
        <div className="max-w-[1100px]">
          <p className="eyebrow rise rise-d1">
            St. George · Washington · Hurricane · Cedar City · Mesquite
          </p>

          <h1 className="mt-6 font-display text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[136px] leading-[0.88] tracking-[-0.035em] text-ink">
            <span className="block rise rise-d2">Connecting people</span>
            <span className="block italic font-light text-sandstone-deep rise rise-d3">
              with places.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-ink-soft rise rise-d4">
            Kayden Palmer was born and raised in Southern Utah — the canyons,
            the trails, the streets he now sells. If you're buying, selling,
            building, or investing here, you want someone who's local on
            purpose.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 rise rise-d4">
            <Link
              href="/search"
              className="inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-sandstone transition-colors"
            >
              Browse Homes <span aria-hidden>→</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-ink/25 text-ink px-7 py-4 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-ink hover:text-cream transition-colors"
            >
              Meet Kayden
            </Link>
          </div>
        </div>
      </Container>

      {/* Floating search bar */}
      <Container className="relative z-20 -mb-12">
        <div className="rise rise-d5 shadow-[0_30px_80px_-30px_rgba(26,15,10,0.45)]">
          <SearchBar variant="dark" />
        </div>
      </Container>

      {/* Stats strip */}
      <Container className="relative z-10 pt-24 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 border-t hairline pt-10">
          {stats.map((s, i) => (
            <div key={s.label} className={`rise rise-d${Math.min(5, i + 1)}`}>
              <div className="font-display text-5xl md:text-6xl tracking-[-0.03em] text-ink">
                {s.value}
              </div>
              <div className="eyebrow mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
