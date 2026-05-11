// Spark API client (Flexmls/FBS). Server-side only.
// Docs: https://sparkapi.docs.apiary.io/

import { idxConfig, isIdxConfigured, isDemoMode, AREA_TO_MLS_CITY } from "./config";
import type {
  SparkListing,
  SparkListResponse,
  ListingsQuery,
} from "./types";

function buildFilter(q: ListingsQuery): string {
  const clauses: string[] = [];

  // Always require active status unless caller overrides
  clauses.push(`StandardStatus Eq '${q.status ?? "Active"}'`);

  // Skip city filter in demo mode — demo data isn't from Utah, so filtering
  // by a Utah city name would always return zero results.
  if (!isDemoMode() && q.city && AREA_TO_MLS_CITY[q.city]) {
    clauses.push(`City Eq '${AREA_TO_MLS_CITY[q.city]}'`);
  }
  if (q.minPrice && Number.isFinite(q.minPrice)) {
    clauses.push(`ListPrice Ge ${q.minPrice}`);
  }
  if (q.maxPrice && Number.isFinite(q.maxPrice)) {
    clauses.push(`ListPrice Le ${q.maxPrice}`);
  }
  if (q.beds && Number.isFinite(q.beds)) {
    clauses.push(`BedsTotal Ge ${q.beds}`);
  }
  if (q.baths && Number.isFinite(q.baths)) {
    clauses.push(`BathsTotal Ge ${q.baths}`);
  }
  if (q.propertyType) {
    clauses.push(`PropertyType Eq '${q.propertyType}'`);
  }
  if (idxConfig.globalFilter) {
    clauses.push(idxConfig.globalFilter);
  }

  return clauses.join(" And ");
}

function buildOrderBy(sortBy: ListingsQuery["sortBy"]): string {
  switch (sortBy) {
    case "price-asc":
      return "ListPrice";
    case "price-desc":
      return "-ListPrice";
    case "newest":
    default:
      return "-ModificationTimestamp";
  }
}

async function sparkFetch<T>(
  path: string,
  params: Record<string, string | number>,
  init?: RequestInit,
): Promise<SparkListResponse<T> | null> {
  if (!isIdxConfigured()) return null;

  const url = new URL(`${idxConfig.base}${path}`);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, String(v));
  }

  const res = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${idxConfig.apiKey}`,
    },
    next: { revalidate: 60 }, // cache 1 min — listings update frequently
    ...init,
  });

  if (!res.ok) {
    // Surface error in server logs but don't crash the page.
    console.error(
      `[spark] ${res.status} ${res.statusText} for ${url.toString()}`,
    );
    return null;
  }
  return (await res.json()) as SparkListResponse<T>;
}

export async function searchListings(
  q: ListingsQuery,
): Promise<{ listings: SparkListing[]; total: number; configured: boolean }> {
  if (!isIdxConfigured()) {
    return { listings: [], total: 0, configured: false };
  }
  // Spark API:
  //   _pagination=1 returns Results AND pagination metadata (count alone hides Results)
  //   _expand on /listings list only supports a subset; Photos must be fetched on the detail endpoint
  const params = {
    _filter: buildFilter(q),
    _orderby: buildOrderBy(q.sortBy),
    _limit: q.limit ?? 24,
    _page: q.page ?? 1,
    _pagination: 1,
    _expand: "PrimaryPhoto",
  };
  const data = await sparkFetch<SparkListing>("/listings", params);
  return {
    listings: data?.D.Results ?? [],
    total: data?.D.Pagination?.TotalRows ?? 0,
    configured: true,
  };
}

export async function getListing(id: string): Promise<SparkListing | null> {
  if (!isIdxConfigured()) return null;
  const data = await sparkFetch<SparkListing>(`/listings/${encodeURIComponent(id)}`, {
    _expand: "Photos",
  });
  return data?.D.Results?.[0] ?? null;
}

// Featured listings — used on the homepage. Falls back to active + price desc.
export async function featuredListings(limit = 6): Promise<SparkListing[]> {
  const { listings } = await searchListings({
    limit,
    sortBy: "newest",
  });
  return listings;
}
