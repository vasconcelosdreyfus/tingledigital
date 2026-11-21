import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/social-metadata";

const ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/cases", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/consultoria", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/utilities", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/sobre", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contato", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/cognita", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/privacidade", priority: 0.4, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
