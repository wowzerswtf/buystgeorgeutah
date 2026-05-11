"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, useTransition } from "react";
import { areas } from "@/lib/areas";

const PROPERTY_TYPES = [
  "Single Family",
  "Condominium",
  "Townhouse",
  "Multi-Family",
  "Manufactured",
  "Land",
  "Commercial",
] as const;

const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "sqft-desc", label: "Largest sqft" },
] as const;

const PRICE_PRESETS = [
  100_000, 200_000, 300_000, 400_000, 500_000, 600_000, 750_000, 1_000_000,
  1_500_000, 2_000_000, 3_000_000, 5_000_000,
];

function fmt$(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  return `$${(n / 1000).toFixed(0)}K`;
}

// Public wrapper — useSearchParams() requires a Suspense boundary so
// pages that statically prerender (like /areas/[slug]) don't bail out.
export function SearchBar() {
  return (
    <Suspense fallback={<SearchBarSkeleton />}>
      <SearchBarInner />
    </Suspense>
  );
}

function SearchBarSkeleton() {
  return (
    <div className="bg-[#141414] border border-white/10 rounded-2xl h-[140px] md:h-[180px] animate-pulse" />
  );
}

function SearchBarInner() {
  const router = useRouter();
  const params = useSearchParams();
  const [pending, startTransition] = useTransition();

  const [city, setCity] = useState(params.get("city") ?? "");
  const [propertyType, setPropertyType] = useState(params.get("propertyType") ?? "");
  const [minPrice, setMinPrice] = useState(params.get("minPrice") ?? "");
  const [maxPrice, setMaxPrice] = useState(params.get("maxPrice") ?? "");
  const [beds, setBeds] = useState(params.get("beds") ?? "");
  const [baths, setBaths] = useState(params.get("baths") ?? "");
  const [minSqft, setMinSqft] = useState(params.get("minSqft") ?? "");
  const [sortBy, setSortBy] = useState(params.get("sortBy") ?? "newest");

  function reset() {
    setCity("");
    setPropertyType("");
    setMinPrice("");
    setMaxPrice("");
    setBeds("");
    setBaths("");
    setMinSqft("");
    setSortBy("newest");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = new URLSearchParams();
    if (city) q.set("city", city);
    if (propertyType) q.set("propertyType", propertyType);
    if (minPrice) q.set("minPrice", minPrice);
    if (maxPrice) q.set("maxPrice", maxPrice);
    if (beds) q.set("beds", beds);
    if (baths) q.set("baths", baths);
    if (minSqft) q.set("minSqft", minSqft);
    if (sortBy && sortBy !== "newest") q.set("sortBy", sortBy);

    startTransition(() => {
      router.push(`/search?${q.toString()}#results`);
    });
  }

  const fieldClass =
    "appearance-none bg-transparent w-full text-[15px] font-medium text-white placeholder:text-white/40 focus:outline-none cursor-pointer disabled:opacity-50";

  return (
    <form
      onSubmit={onSubmit}
      aria-busy={pending}
      className={`relative bg-[#141414] border border-white/10 rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] overflow-hidden transition-opacity ${
        pending ? "opacity-90" : ""
      }`}
    >
      {/* Loading progress bar */}
      <div
        aria-hidden
        className={`absolute top-0 left-0 right-0 h-[2px] overflow-hidden ${
          pending ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        <div className="h-full bg-lime-400 animate-[indeterminate_1.2s_ease-in-out_infinite]" />
      </div>

      {/* Row 1 — primary filters */}
      <fieldset
        disabled={pending}
        className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10"
      >
        <Field label="Location">
          <select value={city} onChange={(e) => setCity(e.target.value)} className={fieldClass}>
            <option value="" className="bg-[#141414]">Anywhere in Southern Utah</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.slug} className="bg-[#141414]">
                {a.name}, {a.state}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Property Type">
          <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className={fieldClass}>
            <option value="" className="bg-[#141414]">Any Type</option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t} className="bg-[#141414]">{t}</option>
            ))}
          </select>
        </Field>

        <Field label="Min Price">
          <PriceField value={minPrice} onChange={setMinPrice} placeholder="No min" />
        </Field>

        <Field label="Max Price">
          <PriceField value={maxPrice} onChange={setMaxPrice} placeholder="No max" />
        </Field>
      </fieldset>

      {/* Row 2 — secondary filters + sort + submit */}
      <fieldset
        disabled={pending}
        className="grid grid-cols-2 md:grid-cols-12 border-t border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10"
      >
        <div className="md:col-span-2">
          <Field label="Beds">
            <select value={beds} onChange={(e) => setBeds(e.target.value)} className={fieldClass}>
              <option value="" className="bg-[#141414]">Any</option>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n} className="bg-[#141414]">{n}+ bd</option>
              ))}
            </select>
          </Field>
        </div>

        <div className="md:col-span-2">
          <Field label="Baths">
            <select value={baths} onChange={(e) => setBaths(e.target.value)} className={fieldClass}>
              <option value="" className="bg-[#141414]">Any</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n} className="bg-[#141414]">{n}+ ba</option>
              ))}
            </select>
          </Field>
        </div>

        <div className="md:col-span-2">
          <Field label="Min Sqft">
            <input
              type="text"
              inputMode="numeric"
              placeholder="Any"
              value={minSqft}
              onChange={(e) => setMinSqft(e.target.value.replace(/[^\d]/g, ""))}
              className={fieldClass}
            />
          </Field>
        </div>

        <div className="md:col-span-3">
          <Field label="Sort By">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={fieldClass}>
              {SORT_OPTIONS.map((s) => (
                <option key={s.value} value={s.value} className="bg-[#141414]">{s.label}</option>
              ))}
            </select>
          </Field>
        </div>

        <div className="md:col-span-3 col-span-2 flex">
          <button
            type="button"
            onClick={reset}
            disabled={pending}
            className="px-5 py-3 md:py-0 font-mono text-[11px] uppercase tracking-[0.18em] text-white/60 hover:text-white border-r border-white/10 transition disabled:opacity-50"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={pending}
            aria-live="polite"
            className="flex-1 relative flex items-center justify-center gap-2.5 bg-lime-400 text-black px-6 py-5 md:py-0 text-[12px] uppercase tracking-[0.18em] font-bold hover:bg-lime-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] transition-all disabled:cursor-wait"
          >
            {pending ? (
              <>
                <Spinner /> Searching MLS…
              </>
            ) : (
              <>Search → </>
            )}
          </button>
        </div>
      </fieldset>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-5 py-4">
      <label className="block mb-2 text-[10px] tracking-[0.2em] uppercase text-white/85 font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}

function PriceField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <>
      <input
        list="price-presets"
        type="text"
        inputMode="numeric"
        placeholder={placeholder}
        value={value ? `$${Number(value).toLocaleString()}` : ""}
        onChange={(e) => onChange(e.target.value.replace(/[^\d]/g, ""))}
        className="appearance-none bg-transparent w-full text-[15px] font-medium text-white placeholder:text-white/40 focus:outline-none"
      />
      <datalist id="price-presets">
        {PRICE_PRESETS.map((p) => (
          <option key={p} value={fmt$(p)} />
        ))}
      </datalist>
    </>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeOpacity="0.25"
      />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
