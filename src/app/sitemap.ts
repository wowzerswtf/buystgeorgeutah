import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";
import { areas } from "@/lib/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const staticRoutes = ["", "/about", "/search", "/buy", "/sell", "/contact"].map(
    (path) => ({
      url: `${base}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const areaRoutes = areas.map((a) => ({
    url: `${base}/areas/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...areaRoutes];
}
