"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Smoothly scrolls the page to #results whenever the search-params change
// to a non-empty filter set. Mounted once on the /search page; fires on
// every navigation/submit that lands here with filters in the URL.
export function ScrollToResults() {
  const params = useSearchParams();

  useEffect(() => {
    const hasFilters = Array.from(params.keys()).length > 0;
    if (!hasFilters) return;
    // Give the new server-rendered HTML a tick to land in the DOM
    const t = window.setTimeout(() => {
      const el = document.getElementById("results");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
    return () => window.clearTimeout(t);
  }, [params]);

  return null;
}
