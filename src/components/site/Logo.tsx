import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/site-config";

export function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const px = size === "lg" ? 56 : size === "sm" ? 32 : 44;
  return (
    <Link
      href="/"
      aria-label="Buy St. George Utah — home"
      className={`group inline-flex items-center gap-3 text-white ${className}`}
    >
      <Image
        src={assets.logo}
        alt="Kayden Palmer Real Estate"
        width={px}
        height={px}
        priority
        className="object-contain"
        style={{ width: px, height: px }}
      />
      <span className="hidden sm:flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight">
          Buy St. George
        </span>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/55 mt-1">
          Kayden Palmer · UT
        </span>
      </span>
    </Link>
  );
}
