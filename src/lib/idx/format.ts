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

export function stableHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

// In demo mode Spark's CDN returns 404 on every photo URL, so we return
// null/empty and the UI falls back to the styled <PhotoPlaceholder>. In
// production every photo URL passes through untouched — same Spark CDN
// hosts real MLS photos for production keys.
export function listingHeroImage(l: SparkListing): string | null {
  if (isDemoMode()) return null;

  const primary = l.StandardFields.PrimaryPhoto;
  if (primary?.UriLarge) return primary.UriLarge;
  if (primary?.Uri800) return primary.Uri800;
  if (primary?.Uri640) return primary.Uri640;
  const first = l.StandardFields.Photos?.[0];
  return first?.UriLarge ?? first?.Uri800 ?? first?.Uri640 ?? null;
}

export function listingPhotoUrls(l: SparkListing, max = 12): string[] {
  if (isDemoMode()) return [];

  const photos = l.StandardFields.Photos ?? [];
  return photos
    .slice(0, max)
    .map((p) => p.UriLarge ?? p.Uri800 ?? p.Uri640 ?? p.Uri300 ?? "")
    .filter(Boolean);
}
