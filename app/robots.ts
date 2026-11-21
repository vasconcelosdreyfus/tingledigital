import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/social-metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/design-system", "/obrigado"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
