"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { areas } from "@/lib/areas";

export function SearchBar() {
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

  const fieldClasses =
    "appearance-none bg-transparent w-full text-[15px] font-medium text-white placeholder:text-white/45 focus:outline-none cursor-pointer";
  const labelClasses =
    "block mb-2 text-[10px] tracking-[0.2em] uppercase text-white/85 font-semibold";

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-2 md:grid-cols-5 bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
    >
      <div className="col-span-2 md:col-span-1 px-5 py-4 border-r border-white/10">
        <label htmlFor="city" className={labelClasses}>
          City
        </label>
        <select
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={fieldClasses}
        >
          <option value="" className="bg-[#141414] text-white">
            Anywhere
          </option>
          {areas.map((a) => (
            <option key={a.slug} value={a.slug} className="bg-[#141414] text-white">
              {a.name}
            </option>
          ))}
        </select>
      </div>

      <div className="px-5 py-4 border-r border-white/10 border-t md:border-t-0 border-white/10">
        <label htmlFor="min-price" className={labelClasses}>
          Min Price
        </label>
        <input
          id="min-price"
          type="text"
          inputMode="numeric"
          placeholder="No min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className={fieldClasses}
        />
      </div>

      <div className="px-5 py-4 border-r border-white/10 border-t md:border-t-0">
        <label htmlFor="max-price" className={labelClasses}>
          Max Price
        </label>
        <input
          id="max-price"
          type="text"
          inputMode="numeric"
          placeholder="No max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className={fieldClasses}
        />
      </div>

      <div className="px-5 py-4 border-r border-white/10 border-t md:border-t-0">
        <label htmlFor="beds" className={labelClasses}>
          Beds
        </label>
        <select
          id="beds"
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
          className={fieldClasses}
        >
          <option value="" className="bg-[#141414] text-white">
            Any
          </option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n} className="bg-[#141414] text-white">
              {n}+
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="col-span-2 md:col-span-1 flex items-center justify-center gap-2 bg-lime-400 text-black px-6 py-5 text-[12px] uppercase tracking-[0.18em] font-bold hover:bg-lime-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] transition-all"
      >
        Search →
      </button>
    </form>
  );
}
