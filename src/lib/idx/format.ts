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
  if (!n || !Number.isFinite(n)) return "—";
  return INT.format(n);
}

export function listingTitle(s: SparkStandardFields): string {
  if (s.UnparsedAddress) return s.UnparsedAddress;
  const parts = [s.StreetNumber, s.StreetName].filter(Boolean);
  return parts.length ? parts.join(" ") : "Listing";
}

export function listingSubtitle(s: SparkStandardFields): string {
  return [s.City, s.StateOrProvince].filter(Boolean).join(", ");
}

export function listingHeroImage(l: SparkListing): string | null {
  const primary = l.StandardFields.PrimaryPhoto;
  if (primary?.UriLarge) return primary.UriLarge;
  if (primary?.Uri800) return primary.Uri800;
  if (primary?.Uri640) return primary.Uri640;
  const first = l.StandardFields.Photos?.[0];
  return first?.UriLarge ?? first?.Uri800 ?? first?.Uri640 ?? null;
}
