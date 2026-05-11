import type { SparkListing, SparkStandardFields } from "./types";

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

// Production-only photo resolution. In demo mode the Spark CDN returns 404
// on every photo URL, so this returns null and the UI renders a styled
// placeholder instead of a broken <img>.
export function listingHeroImage(l: SparkListing): string | null {
  const primary = l.StandardFields.PrimaryPhoto;
  if (primary?.UriLarge) return primary.UriLarge;
  if (primary?.Uri800) return primary.Uri800;
  if (primary?.Uri640) return primary.Uri640;
  const first = l.StandardFields.Photos?.[0];
  const url =
    first?.UriLarge ?? first?.Uri800 ?? first?.Uri640 ?? null;
  // Skip Spark demo URLs — they all 404
  if (url && url.includes("cdn.photos.sparkplatform.com")) return null;
  if (url && url.includes("cdn.resize.sparkplatform.com")) return null;
  return url;
}

export function listingPhotoUrls(l: SparkListing, max = 12): string[] {
  const photos = l.StandardFields.Photos ?? [];
  return photos
    .slice(0, max)
    .map((p) => p.UriLarge ?? p.Uri800 ?? p.Uri640 ?? p.Uri300 ?? "")
    .filter(Boolean)
    .filter(
      (url) =>
        !url.includes("cdn.photos.sparkplatform.com") &&
        !url.includes("cdn.resize.sparkplatform.com"),
    );
}
