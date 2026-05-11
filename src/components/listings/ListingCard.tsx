import Link from "next/link";
import type { SparkListing } from "@/lib/idx/types";
import {
  formatPrice,
  formatNum,
  listingTitle,
  listingSubtitle,
  listingHeroImage,
} from "@/lib/idx/format";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function ListingCard({ listing }: { listing: SparkListing }) {
  const s = listing.StandardFields;
  const img = listingHeroImage(listing);

  return (
    <Link
      href={`/listings/${listing.Id}`}
      className="group block overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.18] transition-all"
    >
      <div className="relative aspect-[4/3] bg-[#141414] overflow-hidden">
        {img ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img}
              alt={listingTitle(s)}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="bg-lime-400 text-black px-2.5 py-1 rounded-md text-[10px] tracking-[0.15em] uppercase font-bold">
                {s.StandardStatus ?? "Active"}
              </span>
              {s.PhotosCount && s.PhotosCount > 1 && (
                <span className="bg-black/70 text-white px-2.5 py-1 rounded-md text-[10px] tracking-wide font-mono">
                  {s.PhotosCount} photos
                </span>
              )}
            </div>
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-24"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.85) 100%)",
              }}
            />
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <div className="display-caps text-2xl">{formatPrice(s.ListPrice)}</div>
            </div>
          </>
        ) : (
          <PhotoPlaceholder listing={listing} />
        )}
      </div>

      <div className="p-5">
        <div className="text-[15px] font-semibold text-white leading-snug">
          {listingTitle(s)}
        </div>
        <div className="mt-1 text-[13px] text-white/60">{listingSubtitle(s)}</div>

        <div className="mt-4 flex items-center gap-4 text-[12px] text-white/75 font-mono">
          <span>
            <strong className="text-white">{formatNum(s.BedsTotal)}</strong> bd
          </span>
          <span className="text-white/25">·</span>
          <span>
            <strong className="text-white">{formatNum(s.BathsTotal)}</strong> ba
          </span>
          <span className="text-white/25">·</span>
          <span>
            <strong className="text-white">
              {formatNum(s.BuildingAreaTotal ?? s.LivingArea)}
            </strong>{" "}
            sqft
          </span>
        </div>
      </div>
    </Link>
  );
}
