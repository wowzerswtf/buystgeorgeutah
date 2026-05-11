export type Area = {
  slug: string;
  name: string;
  state: string;
  eyebrow: string;
  blurb: string;
  longBlurb: string;
  highlights: string[];
};

export const areas: readonly Area[] = [
  {
    slug: "st-george",
    name: "St. George",
    state: "UT",
    eyebrow: "Washington County · UT",
    blurb:
      "The hub. Red rock backdrop, year-round sun, and a downtown that's finally caught up with the growth.",
    longBlurb:
      "St. George is Southern Utah's largest city and the gravity well for everything happening down here. Pickleball courts, a walkable historic core, the world's best winter weather, and trail access from your driveway. Pricing varies wildly by neighborhood — Bloomington, The Ledges, Stone Cliff, and Desert Hills each play by their own rules.",
    highlights: ["Historic downtown", "Snow Canyon access", "Pickleball capital", "Year-round outdoor living"],
  },
  {
    slug: "washington",
    name: "Washington",
    state: "UT",
    eyebrow: "Washington County · UT",
    blurb:
      "St. George's fastest-growing neighbor. Newer construction, master-planned communities, and shorter commutes than you'd think.",
    longBlurb:
      "Washington has quietly become the value play of the region. Coral Canyon, Sienna Hills, and the corridor along Telegraph offer newer homes, planned amenities, and easier access to I-15 than the older St. George neighborhoods. Builders are still active here — bring negotiation.",
    highlights: ["Master-planned communities", "New construction inventory", "I-15 access", "Strong appreciation"],
  },
  {
    slug: "hurricane",
    name: "Hurricane",
    state: "UT",
    eyebrow: "Washington County · UT",
    blurb:
      "The Zion gateway. Vacation rental hotspot with land still trading at fair prices — if you know where to look.",
    longBlurb:
      "Twenty-five minutes from the Zion entrance, Hurricane is the play if you want appreciation tied to tourism without paying Springdale prices. Sand Hollow's STR-friendly zones, the new construction in Sky Mountain, and the older town center each serve a different buyer. HOA short-term-rental rules matter here more than anywhere else in the region.",
    highlights: ["Zion gateway", "STR-friendly zones", "Sand Hollow proximity", "Land still available"],
  },
  {
    slug: "santa-clara",
    name: "Santa Clara",
    state: "UT",
    eyebrow: "Washington County · UT",
    blurb:
      "Tucked between St. George and Snow Canyon. Quieter, established, with some of the best lots in the county.",
    longBlurb:
      "Santa Clara plays small but punches up. Established neighborhoods, a tight-knit feel, mature landscaping, and direct routes to Snow Canyon State Park. Less inventory than St. George proper, but when something good lists here it doesn't sit.",
    highlights: ["Snow Canyon adjacent", "Established neighborhoods", "Low turnover", "Mature landscaping"],
  },
  {
    slug: "ivins",
    name: "Ivins",
    state: "UT",
    eyebrow: "Washington County · UT",
    blurb:
      "Kayenta, Tuacahn, the dark-sky views. Architectural homes and a vibe more Sedona than suburb.",
    longBlurb:
      "Ivins is where Southern Utah goes architectural. Kayenta's covenants enforce desert-modern design and dark-sky compliance, which is why the photos look unreal. Tuacahn's outdoor theater is a weekend ritual. Land is finite, prices reflect it.",
    highlights: ["Kayenta covenants", "Dark-sky community", "Tuacahn amphitheater", "Architectural homes"],
  },
  {
    slug: "cedar-city",
    name: "Cedar City",
    state: "UT",
    eyebrow: "Iron County · UT",
    blurb:
      "Cooler summers, college-town energy, and prices that still pencil. Forty-five minutes north for half the heat.",
    longBlurb:
      "Cedar City sits a few thousand feet higher than St. George, which means real seasons and summer temps that stay reasonable. Southern Utah University anchors it, the Shakespeare Festival fills the summers, and the price-per-square-foot makes you do a double-take after looking at St. George.",
    highlights: ["Cooler summers", "SUU college town", "Shakespeare Festival", "Lower price-per-sqft"],
  },
  {
    slug: "la-verkin",
    name: "La Verkin",
    state: "UT",
    eyebrow: "Washington County · UT",
    blurb:
      "Small town between Hurricane and Zion. Less polish, lower entry price, real upside.",
    longBlurb:
      "La Verkin is the under-the-radar play. Right between Hurricane and Zion, on the corridor everyone now drives. Older inventory, some fixers, increasing investor interest as the price gap with Hurricane widens.",
    highlights: ["Zion corridor", "Investor-friendly entry", "Fixer inventory", "Walking to Virgin River"],
  },
  {
    slug: "mesquite",
    name: "Mesquite",
    state: "NV",
    eyebrow: "Clark County · NV",
    blurb:
      "Forty minutes south, no state income tax, and gaming-adjacent real estate. Different rules apply.",
    longBlurb:
      "Mesquite sits across the Arizona Strip on the way to Vegas. Nevada residency comes with no state income tax, which changes the math for retirees and remote workers. Golf-course communities dominate, with some of the best 55+ inventory in the region.",
    highlights: ["No state income tax", "Golf-course living", "55+ communities", "40 min from St. George"],
  },
] as const;

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
