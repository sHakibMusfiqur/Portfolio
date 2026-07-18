import type { MetadataRoute } from "next";

const BASE_URL = "https://musfiqurshakib.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [""];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
