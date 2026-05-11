// One source of truth for everything about Kayden. Change here, the whole site updates.

export const site = {
  name: "Buy St. George Utah",
  domain: "buystgeorgeutah.com",
  tagline: "Connecting People with Places",
  description:
    "St. George, Utah real estate with Kayden Palmer. Born and raised in Southern Utah. 144+ homes sold, 70+ five-star reviews. Buy, sell, build, and invest across St. George, Washington, Hurricane, Cedar City, La Verkin, Santa Clara, and Mesquite.",
} as const;

export const agent = {
  firstName: "Kayden",
  lastName: "Palmer",
  fullName: "Kayden Palmer",
  title: "REALTOR®",
  bioShort: "St. George born. St. George raised.",
  bioLong:
    "Born and raised in Southern Utah, Kayden grew up in the canyons, on the trails, and on the streets he now sells. Real estate here isn't just business — it's personal. Whether you're moving across the country, picking out your first home, or building from the ground up, you get an agent who actually knows where to look, who to call, and what the deal is really worth.",
  phone: "(435) 256-2101",
  phoneHref: "tel:+14352562101",
  email: "Kayden@elementreb.com",
  emailHref: "mailto:Kayden@elementreb.com",
  headshot: "https://pub-0d816a334949494d8c7d08fe5484030b.r2.dev/kayden.jpg",
  logoMark: "https://pub-0d816a334949494d8c7d08fe5484030b.r2.dev/officilalogo.png",
} as const;

export const brokerage = {
  name: "Element Real Estate Brokers LLC",
  shortName: "Element Real Estate",
  agentLicense: "11641681-SA",
  state: "Utah",
} as const;

export const social = {
  instagramBusiness: {
    handle: "@kaydenpalmerrealestate",
    url: "https://www.instagram.com/kaydenpalmerrealestate",
  },
  instagramPersonal: {
    handle: "@kaydenpalmer99",
    url: "https://www.instagram.com/kaydenpalmer99",
  },
} as const;

export const stats = [
  { label: "Homes Sold", value: "144+" },
  { label: "Five-Star Reviews", value: "70+" },
  { label: "Zillow Rating", value: "5.0" },
  { label: "Avg Response", value: "<15 min" },
] as const;

export const specialties = [
  {
    slug: "buy",
    title: "Buying",
    eyebrow: "01 / Find",
    blurb:
      "From your first walk-through to keys in hand. Local insight on neighborhoods, schools, water rights, and the stuff Zillow won't tell you.",
  },
  {
    slug: "sell",
    title: "Selling",
    eyebrow: "02 / List",
    blurb:
      "Pricing that moves and marketing that travels. Pre-list strategy, staging, photography, and aggressive distribution across the MLS and beyond.",
  },
  {
    slug: "build",
    title: "New Construction",
    eyebrow: "03 / Build",
    blurb:
      "Builder relationships across Southern Utah and a representative in the room when you sign. Upgrade packages negotiated, lot premiums questioned.",
  },
  {
    slug: "invest",
    title: "Investment",
    eyebrow: "04 / Invest",
    blurb:
      "Long-term holds, fix-and-flips, and short-term rental analysis modeled against actual STR data for the zip code, not optimism.",
  },
  {
    slug: "vacation",
    title: "Vacation Rentals",
    eyebrow: "05 / Host",
    blurb:
      "Which HOAs allow nightly. Which don't. Which look like they do but pull the rug at year two. Know before you close.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Kayden made our move from out-of-state painless. He toured homes for us on video, knew every neighborhood, and the offer he wrote got accepted over four others.",
    name: "Jordan & Megan",
    city: "Relocated from Sacramento, CA",
  },
  {
    quote:
      "Best realtor we've worked with — and we've bought four houses. Honest about which lots we should skip, fast on every callback, total professional.",
    name: "The Bensons",
    city: "St. George, UT",
  },
  {
    quote:
      "Built our forever home with Kayden in our corner. He walked the framing, pushed back on the builder when we couldn't, and we still text him a year later.",
    name: "Maria & Tom",
    city: "Washington, UT",
  },
] as const;
