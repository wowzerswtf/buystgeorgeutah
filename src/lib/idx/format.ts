import type { SparkListing, SparkStandardFields } from "./types";
import { isDemoMode } from "./config";

const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const INT = new Intl.NumberFormat("en-US");

export function formatPrice(n?: number | null): string {
  if (!n || !Number.isFinite(n)) return "Price on request";
  return USD.format(n);
}

export function formatNum(n?: number | null): string {
  if (n === null || n === undefined || !Number.isFinite(Number(n)))
    return "—";
  return INT.format(Number(n));
}

export function listingTitle(s: SparkStandardFields): string {
  if (s.UnparsedAddress) return s.UnparsedAddress;
  const parts = [s.StreetNumber, s.StreetName].filter(Boolean);
  return parts.length ? parts.join(" ") : "Listing";
}

export function listingSubtitle(s: SparkStandardFields): string {
  return [s.City, s.StateOrProvince].filter(Boolean).join(", ");
}

// Brand-owned placeholder pool, used only while running on Spark's demo
// dataset (which returns 404 for every photo URL). When the real
// MLS-approved token replaces the demo, this branch is skipped and live
// photos render.
const DEMO_PLACEHOLDERS = [
  "https://pub-0d816a334949494d8c7d08fe5484030b.r2.dev/moto1.jpg",
  "https://pub-935521d3cfcb470c96e59231470db2be.r2.dev/buyyy.png",
  "https://pub-935521d3cfcb470c96e59231470db2be.r2.dev/sell.png",
  "https://pub-935521d3cfcb470c96e59231470db2be.r2.dev/afooter.jpg",
  "https://pub-97eacfa7d019409baa18e5cd6727ecb3.r2.dev/NEW%20CACHE%20IMAGES/5.jpg",
  "https://pub-97eacfa7d019409baa18e5cd6727ecb3.r2.dev/NEW%20CACHE%20IMAGES/8.jpg",
  "https://pub-97eacfa7d019409baa18e5cd6727ecb3.r2.dev/NEW%20CACHE%20IMAGES/11.jpg",
];

function stableHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function demoPlaceholder(seed: string, offset = 0): string {
  return DEMO_PLACEHOLDERS[(stableHash(seed) + offset) % DEMO_PLACEHOLDERS.length];
}

export function listingHeroImage(l: SparkListing): string | null {
  if (isDemoMode()) return demoPlaceholder(l.Id);

  const primary = l.StandardFields.PrimaryPhoto;
  if (primary?.UriLarge) return primary.UriLarge;
  if (primary?.Uri800) return primary.Uri800;
  if (primary?.Uri640) return primary.Uri640;
  const first = l.StandardFields.Photos?.[0];
  return first?.UriLarge ?? first?.Uri800 ?? first?.Uri640 ?? null;
}

// For the detail page gallery. Returns an array of usable photo URLs.
export function listingPhotoUrls(l: SparkListing, max = 12): string[] {
  if (isDemoMode()) {
    // Rotate through placeholders so the gallery looks varied per listing
    return Array.from({ length: Math.min(max, DEMO_PLACEHOLDERS.length) }).map(
      (_, i) => demoPlaceholder(l.Id, i),
    );
  }
  const photos = l.StandardFields.Photos ?? [];
  return photos
    .slice(0, max)
    .map((p) => p.UriLarge ?? p.Uri800 ?? p.Uri640 ?? p.Uri300 ?? "")
    .filter(Boolean);
}
