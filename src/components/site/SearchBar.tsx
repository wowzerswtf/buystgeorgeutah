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
    "appearance-none bg-transparent w-full font-mono text-[14px] tracking-wide text-white placeholder:text-white/35 focus:outline-none";
  const labelClasses = "eyebrow block mb-2";

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-2 md:grid-cols-5 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden"
    >
      <div className="col-span-2 md:col-span-1 px-5 py-4 border-r border-white/[0.06]">
        <label className={labelClasses}>City</label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={fieldClasses}
        >
          <option value="" className="bg-[#141414]">
            Anywhere
          </option>
          {areas.map((a) => (
            <option key={a.slug} value={a.slug} className="bg-[#141414]">
              {a.name}
            </option>
          ))}
        </select>
      </div>

      <div className="px-5 py-4 border-r border-white/[0.06] border-t md:border-t-0">
        <label className={labelClasses}>Min Price</label>
        <input
          type="text"
          inputMode="numeric"
          placeholder="$"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className={fieldClasses}
        />
      </div>

      <div className="px-5 py-4 border-r border-white/[0.06] border-t md:border-t-0">
        <label className={labelClasses}>Max Price</label>
        <input
          type="text"
          inputMode="numeric"
          placeholder="$"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className={fieldClasses}
        />
      </div>

      <div className="px-5 py-4 border-r border-white/[0.06] border-t md:border-t-0">
        <label className={labelClasses}>Beds</label>
        <select
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
          className={fieldClasses}
        >
          <option value="" className="bg-[#141414]">
            Any
          </option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n} className="bg-[#141414]">
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
