import type { SparkListing } from "@/lib/idx/types";
import { formatPrice, listingSubtitle, stableHash } from "@/lib/idx/format";

// Deterministic gradient palette — each listing always gets the same gradient
// based on its ID so the page doesn't shuffle on refresh.
const GRADIENTS = [
  ["#1f2937", "#0a0a0a"],
  ["#2c1a0e", "#0a0a0a"],
  ["#142421", "#0a0a0a"],
  ["#1a1424", "#0a0a0a"],
  ["#241818", "#0a0a0a"],
  ["#16241a", "#0a0a0a"],
  ["#23211b", "#0a0a0a"],
  ["#1a2024", "#0a0a0a"],
] as const;

export function PhotoPlaceholder({
  listing,
  variant = "card",
}: {
  listing: SparkListing;
  variant?: "card" | "hero";
}) {
  const s = listing.StandardFields;
  const [c1, c2] = GRADIENTS[stableHash(listing.Id) % GRADIENTS.length];

  return (
    <div
      className="absolute inset-0 flex flex-col justify-between overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
      }}
    >
      {/* Decorative architectural lines */}
      <svg
        aria-hidden
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-[0.08]"
      >
        <defs>
          <pattern
            id={`grid-${listing.Id}`}
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0 L0 0 0 40"
              fill="none"
              stroke="#a3e635"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="600" height="400" fill={`url(#grid-${listing.Id})`} />
        {/* Abstract roofline silhouette */}
        <path
          d="M0,400 L0,300 L80,260 L80,220 L200,160 L320,220 L320,250 L440,200 L560,260 L560,300 L600,300 L600,400 Z"
          fill="#a3e635"
          opacity="0.07"
        />
      </svg>

      {/* Top label */}
      <div className="relative p-5 md:p-6 flex items-center gap-2">
        <span className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-md">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-400" aria-hidden />
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/85 font-semibold">
            Photo Pending
          </span>
        </span>
      </div>

      {/* Bottom price block */}
      <div className="relative p-5 md:p-6">
        <div
          className={`display-caps tracking-[-0.02em] text-white ${
            variant === "hero" ? "text-5xl md:text-6xl" : "text-3xl"
          }`}
        >
          {formatPrice(s.ListPrice)}
        </div>
        <div className="mt-1 text-[13px] text-white/65 font-mono">
          {listingSubtitle(s)}
        </div>
      </div>
    </div>
  );
}
