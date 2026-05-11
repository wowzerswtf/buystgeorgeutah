// Reads Spark API credentials from environment. Server-only.
// Set these in .env.local for dev, and in Vercel project settings for prod.
//
// SPARK_API_KEY        — long-lived access token from Spark (the simplest auth)
// SPARK_API_BASE       — defaults to https://api.sparkapi.com/v1
// SPARK_MLS_FILTER     — optional RETS filter clause appended to every query
//                        (used to scope to a specific MLS region if needed,
//                        e.g. "MlsId Eq 20200518172608932582000000")

export const idxConfig = {
  apiKey: process.env.SPARK_API_KEY ?? "",
  base: process.env.SPARK_API_BASE ?? "https://api.sparkapi.com/v1",
  globalFilter: process.env.SPARK_MLS_FILTER ?? "",
} as const;

export function isIdxConfigured(): boolean {
  return idxConfig.apiKey.length > 0;
}

// Set NEXT_PUBLIC_IDX_DEMO=1 while testing against Spark's demo dataset.
// Demo listings aren't from Utah, so when this flag is on we skip the
// city filter and show a banner explaining what the user is seeing.
export function isDemoMode(): boolean {
  return process.env.NEXT_PUBLIC_IDX_DEMO === "1";
}

// Map our area slugs to MLS city names. Edit if Kayden's MLS uses different
// canonical names (e.g. "Saint George" vs "St. George").
export const AREA_TO_MLS_CITY: Record<string, string> = {
  "st-george": "St. George",
  washington: "Washington",
  hurricane: "Hurricane",
  "santa-clara": "Santa Clara",
  ivins: "Ivins",
  "cedar-city": "Cedar City",
  "la-verkin": "La Verkin",
  mesquite: "Mesquite",
};
