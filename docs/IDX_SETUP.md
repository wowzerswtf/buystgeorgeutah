# IDX Setup — Connecting the Spark API (Flexmls)

This site is wired to **Spark API** — the modern REST/JSON IDX feed used by Flexmls-based MLSs (WFRMLS, WCBR, and most Utah boards). Once Kayden's API key is in place, listings stream into `/search` and `/listings/[id]` automatically.

## Activation steps

### 1. Kayden registers a Spark API application

1. Log into **flexmls.com** with his agent credentials.
2. Navigate to **My Account → Developer / Spark API** (sometimes labeled "IDX Settings" or "API Access" — the menu varies by MLS).
3. Click **"Register a new application"** or **"Create new API key"**.
4. Fill in:

   | Field | Value |
   |---|---|
   | **App name** | `Buy St. George Utah` |
   | **Website URL** | `https://buystgeorgeutah.com` |
   | **Redirect URI** | `https://buystgeorgeutah.com/api/idx/callback` |
   | **Type / Scope** | **IDX** (public listing display) |
   | **Brokerage** | Element Real Estate Brokers LLC |

5. Submit the application. If broker authorization is required, Spark emails Element's broker a one-click approval form.
6. Wait for approval — typically **same-day for IDX-only**, 24–48 hours otherwise.

### 2. Send the credentials to whoever manages the deployment

Once approved, Spark provides one or more of:

- **API Key** (long-lived bearer token — simplest)
- **Client ID** + **Client Secret** (if OAuth flow required)

### 3. Drop the key into the environment

**Local dev:**

```bash
# .env.local
SPARK_API_KEY=your_api_key_here
```

**Production (Vercel):**

```bash
vercel env add SPARK_API_KEY production
# paste the key when prompted
vercel --prod  # redeploy
```

Or via the Vercel dashboard: Project → Settings → Environment Variables.

### 4. (Optional) Scope to a specific MLS region

Some Flexmls instances return data from multiple MLSs. If Kayden's data feed needs to be scoped to one region, set the `SPARK_MLS_FILTER` env var to a RETS clause. Example:

```bash
SPARK_MLS_FILTER=MlsId Eq '20200518172608932582000000'
```

Ask Kayden's MLS support what the correct `MlsId` is.

### 5. Verify

After redeploy, hit `/search`. The IDX placeholder card should be replaced with live listings within 1 minute (the cache window). Watch the Vercel function logs if anything errors — they'll show `[spark] 4xx` or `[spark] 5xx` with the failing URL.

## How the integration is structured

| File | Purpose |
|---|---|
| `src/lib/idx/config.ts` | Reads env vars, exports `isIdxConfigured()` |
| `src/lib/idx/spark.ts` | Spark API client — `searchListings()`, `getListing()`, `featuredListings()` |
| `src/lib/idx/types.ts` | TypeScript types for Spark responses |
| `src/lib/idx/format.ts` | Price/number formatters, address builders |
| `src/components/listings/ListingCard.tsx` | Card UI |
| `src/components/listings/ListingGrid.tsx` | Grid + empty/not-configured states |
| `src/app/search/page.tsx` | Search page — server-renders results from `searchListings()` |
| `src/app/listings/[id]/page.tsx` | Detail page — uses `getListing()` |

The Spark API uses RETS-style filter clauses (`City Eq 'St. George' And ListPrice Ge 300000`). All filter construction lives in `buildFilter()` inside `spark.ts`.

Listings are cached for **60 seconds** server-side (`next: { revalidate: 60 }` in `sparkFetch`) — adjust in `spark.ts` if Kayden wants faster turnover.

## Compliance notes

- IDX displays **must** include the MLS source attribution and the listing broker's name. The detail page footer already shows "Listed via the MLS. {brokerage}." — verify with Kayden's broker that this satisfies his MLS's specific display requirements (some require an MLS logo or specific phrasing).
- IDX data **cannot** be displayed for sold/closed listings unless his MLS explicitly allows it via the IDX rules. The default `StandardStatus Eq 'Active'` filter keeps this safe.
- Equal Housing Opportunity compliance is already in the footer.

## Alternative providers

If Spark API access stalls, the site can be switched to a 3rd-party IDX vendor in ~30 minutes:

- **iHomeFinder Optima Express** — drop their `<script>` + container divs into `/search`
- **IDX Broker Platinum** — same pattern with their snippet
- **Showcase IDX** — web component pattern

In all cases, the SearchBar already submits to `/search?city=...&minPrice=...&maxPrice=...&beds=...` — most vendors accept these as query params.
