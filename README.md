# Buy St. George Utah

Real estate marketing site for **Kayden Palmer · Element Real Estate Brokers LLC · Utah License #11641681-SA**.

Built with Next.js 16 (App Router) · Tailwind CSS v4 · TypeScript · deployed on Vercel.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Architecture

- **`src/app/`** — App Router pages. `page.tsx` is the homepage; subpages live in folders.
- **`src/components/site/`** — shared UI (Header, Footer, Logo, SearchBar, ContactForm, PageHeader, Container).
- **`src/components/sections/`** — homepage section components (Hero, Areas, MeetKayden, Specialties, Testimonials, ContactCTA).
- **`src/lib/site-config.ts`** — single source of truth for agent info, contact, social, stats, specialties, testimonials. **Edit this file to change anything about Kayden across the whole site.**
- **`src/lib/areas.ts`** — area data (St. George, Washington, Hurricane, Cedar City, Santa Clara, Ivins, La Verkin, Mesquite). Adding a new area = new entry in this file; it shows up in nav, footer, search dropdown, areas grid, and gets its own page automatically.
- **`src/app/globals.css`** — color tokens and font setup (Editorial Desert palette + Fraunces/Geist/Geist Mono).

## Wiring IDX (when ready)

The `/search` page has a clearly-marked placeholder section ready for an IDX widget. Most common paths:

| Provider | Integration |
|---|---|
| IDX Broker | Drop their `<script>` + shortcode `<div class="idx-listings-...">` into `src/app/search/page.tsx`. |
| iHomeFinder | Same pattern — embed script + container div. |
| Showcase IDX | Replace placeholder with `<showcase-idx>` web component. |
| WFRMLS RESO | Build a server component that fetches from the RESO Web API with an OAuth token. |

The `<SearchBar>` already submits to `/search?city=...&minPrice=...&maxPrice=...&beds=...` — most IDX widgets accept these as query params.

## Compliance details

Hard-coded in `src/lib/site-config.ts`. Single edit propagates site-wide:

- Agent: Kayden Palmer · REALTOR®
- Phone: (435) 256-2101
- Email: Kayden@elementreb.com
- Brokerage: Element Real Estate Brokers LLC
- License: Utah #11641681-SA
- Instagram (business): @kaydenpalmerrealestate
- Instagram (personal): @kaydenpalmer99

## Deploy

```bash
# First-time setup
npm i -g vercel
vercel link
vercel --prod
```

Or import the GitHub repo directly at https://vercel.com/new.

**DNS:** point `buystgeorgeutah.com` and `www.buystgeorgeutah.com` to Vercel — A record `76.76.21.21` for the apex, CNAME `cname.vercel-dns.com` for `www`.

## Future work

- Wire a real IDX provider (see above)
- Replace contact form's mailto fallback with Resend/Formspree/Vercel functions
- Add a `/blog` MDX-based content area for SEO (neighborhood guides, market updates)
- Add analytics (Plausible, Fathom, or Vercel Analytics)
- Add OpenGraph image generator at `src/app/opengraph-image.tsx`
- Add Schema.org RealEstateAgent JSON-LD in layout
