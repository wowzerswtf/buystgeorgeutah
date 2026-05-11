import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/site-config";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Buy St. George Utah — home"
      className={`group inline-flex items-center gap-3 text-white ${className}`}
    >
      <Image
        src={assets.logo}
        alt="Kayden Palmer Real Estate"
        width={36}
        height={36}
        className="h-8 w-8 md:h-9 md:w-9 object-contain"
        priority
      />
      <span className="hidden sm:flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight">
          Buy St. George
        </span>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/40 mt-1">
          Kayden Palmer · UT
        </span>
      </span>
    </Link>
  );
}
