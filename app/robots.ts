
import type { MetadataRoute } from "next";

/* =====================================
   누수대학 robots.txt 설정
===================================== */

const SITE_URL =
  "https://www.nusudaehak.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
    ],

    sitemap: `${SITE_URL}/sitemap.xml`,

    host: SITE_URL,
  };
}
