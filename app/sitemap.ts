import type { MetadataRoute } from "next";

/* =====================================
   누수대학 사이트맵
===================================== */

const SITE_URL = "https://www.nusudaehak.com";

/* =====================================
   서비스 목록
===================================== */

const SERVICES = [
  "leak-detection",
  "pipe-leak",
  "bathroom-leak",
  "ceiling-leak",
  "water-leak",
  "apartment-leak",
];

/* =====================================
   지역 목록
===================================== */

const REGIONS = [
  {
    region: "seoul",
    districts: [
      "jongno",
      "jung",
      "yongsan",
      "seongdong",
      "gwangjin",
      "dongdaemun",
      "seongbuk",
      "mapo",
      "seodaemun",
      "yeongdeungpo",
      "dongjak",
      "gwanak",
      "seocho",
      "gangnam",
    ],
  },

  {
    region: "gyeonggi",
    districts: [
      "bucheon",
      "siheung",
      "ansan",
      "anyang",
      "suwon",
      "hwaseong",
      "pyeongtaek",
      "uiwang",
      "gimpo",
      "paju",
      "gwangmyeong",
      "gwacheon",
    ],
  },

  {
    region: "incheon",
    districts: [
      "gyeyang",
      "bupyeong",
      "seo",
      "namdong",
    ],
  },
];

/* =====================================
   사이트맵 생성
===================================== */

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [];

  /* =====================================
     메인
  ===================================== */

  urls.push({
    url: SITE_URL,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  });

  /* =====================================
     서비스 페이지
  ===================================== */

  for (const service of SERVICES) {
    urls.push({
      url: `${SITE_URL}/services/${service}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  /* =====================================
     지역 페이지
  ===================================== */

  for (const region of REGIONS) {
    for (const district of region.districts) {
      urls.push({
        url: `${SITE_URL}/regions/${region.region}/${district}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  /* =====================================
     서비스 × 지역 상세페이지
  ===================================== */

  for (const service of SERVICES) {
    for (const region of REGIONS) {
      for (const district of region.districts) {
        urls.push({
          url: `${SITE_URL}/services/${service}/${region.region}/${district}`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.8,
        });
      }
    }
  }

  return urls;
}
