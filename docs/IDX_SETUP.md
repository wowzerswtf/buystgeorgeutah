# IDX Setup — Connecting the Spark API (Flexmls)

This site is wired to **Spark API** — the modern REST/JSON IDX feed used by Flexmls-based MLSs (WFRMLS, WCBR, and most Utah boards). Once Kayden's API key is in place, listings stream into `/search` and `/listings/[id]` automatically.

## Activation steps

### 1. Register a Spark Developer account (one-time)

Spark API credentials are issued to a **developer account**, which is separate from Kayden's agent flexmls.com login.

1. Visit **https://sparkplatform.com/register/developers**
2. Complete the free registration. Activation takes up to 3 business days.
3. Once activated, log in at **https://sparkplatform.com/ticket** with the developer credentials.

### 2. Enroll in an IDX Data Plan via the Datamart

API credentials are not generated from a "+ New App" button — they're issued after enrolling in an MLS's IDX data plan. The flow:

1. Go to **https://sparkplatform.com/appstore/datamart** (or click "Datamart" in the top-left nav).
2. **Search for the MLS** — `WFRMLS`, `Washington County Board of Realtors`, or `UtahRealEstate.com`.
3. Find a plan with role **"IDX"** (not VOW, not Reso Public).
4. Click **"Enroll"**.
5. Fill in the application:

   | Field | Value |
   |---|---|
   | **App name** | `Buy St. George Utah` |
   | **Website URL** | `https://buystgeorgeutah.com` |
   | **Brokerage** | Element Real Estate Brokers LLC |
   | **Agent** | Kayden Palmer, UT License #11641681-SA |

6. Submit. The MLS admin (not Spark) reviews and approves via email — typically **24–72 hrs** for IDX.
7. Spark emails the **API credentials** (bearer key or OAuth client ID/secret) once approved.

### 3. If the Datamart doesn't list the right MLS

- Email **api-support@fbsdata.com** directly: *"I need to register an IDX application against WFRMLS / Washington County Board of Realtors. Agent Kayden Palmer, brokerage Element Real Estate Brokers LLC, license #11641681-SA."*
- Or ask Kayden to email **his MLS support** (the link in his flexmls.com portal). Many MLSs route IDX requests through their own admin who then triggers the Spark side.

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
