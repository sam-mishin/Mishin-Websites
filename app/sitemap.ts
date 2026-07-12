import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

const base = "https://mishinwebsites.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects
    .filter((p) => !p.placeholder)
    .map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: new Date(),
    }));

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    ...projectUrls,
  ];
}
