"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { areas } from "@/lib/areas";

export function SearchBar({ variant = "light" }: { variant?: "light" | "dark" }) {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [beds, setBeds] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (beds) params.set("beds", beds);
    router.push(`/search?${params.toString()}`);
  };

  const baseFieldClasses =
    "appearance-none bg-transparent w-full font-mono text-[13px] tracking-wide focus:outline-none";
  const labelClasses = "eyebrow block mb-1.5";

  return (
    <form
      onSubmit={onSubmit}
      className={`grid grid-cols-2 md:grid-cols-5 ${
        variant === "dark"
          ? "bg-ink text-cream"
          : "bg-cream text-ink border hairline"
      } divide-x divide-y md:divide-y-0 ${
        variant === "dark" ? "divide-cream/15" : "divide-ink/10"
      }`}
    >
      <div className="col-span-2 md:col-span-1 px-5 py-4">
        <label className={labelClasses}>City</label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={baseFieldClasses}
        >
          <option value="">Anywhere</option>
          {areas.map((a) => (
            <option key={a.slug} value={a.slug} className="text-ink">
              {a.name}
            </option>
          ))}
        </select>
      </div>

      <div className="px-5 py-4">
        <label className={labelClasses}>Min Price</label>
        <input
          type="text"
          inputMode="numeric"
          placeholder="$"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className={baseFieldClasses}
        />
      </div>

      <div className="px-5 py-4">
        <label className={labelClasses}>Max Price</label>
        <input
          type="text"
          inputMode="numeric"
          placeholder="$"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className={baseFieldClasses}
        />
      </div>

      <div className="px-5 py-4">
        <label className={labelClasses}>Beds</label>
        <select
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
          className={baseFieldClasses}
        >
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5+</option>
        </select>
      </div>

      <button
        type="submit"
        className={`col-span-2 md:col-span-1 ${
          variant === "dark"
            ? "bg-sandstone text-cream hover:bg-ember"
            : "bg-ink text-cream hover:bg-sandstone"
        } px-6 py-5 text-[12px] uppercase tracking-[0.18em] font-medium transition-colors`}
      >
        Search Homes →
      </button>
    </form>
  );
}
