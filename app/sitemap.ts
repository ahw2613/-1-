import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/project`, changeFrequency: "weekly", priority: .9 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: .7 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: .8 },
    ...projects.map((p) => ({ url: `${base}/project/${p.slug}`, changeFrequency: "monthly" as const, priority: .8 })),
  ];
}
