import Link from "next/link";

export function Logo({
  variant = "ink",
  className = "",
}: {
  variant?: "ink" | "cream";
  className?: string;
}) {
  const color = variant === "cream" ? "text-cream" : "text-ink";
  return (
    <Link
      href="/"
      aria-label="Buy St. George Utah — home"
      className={`group inline-flex items-baseline gap-3 ${color} ${className}`}
    >
      <span className="font-display text-[22px] md:text-[26px] leading-none tracking-[-0.02em] font-medium">
        Buy<span className="italic font-light">·</span>St.George
      </span>
      <span className="hidden sm:inline-block eyebrow text-[10px] opacity-60 group-hover:opacity-100 transition">
        UT
      </span>
    </Link>
  );
}
