
import type { MetadataRoute } from "next";

/* =====================================
   누수대학 기본 주소
===================================== */

const SITE_URL =
  "https://www.nusudaehak.com";

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
] as const;

/* =====================================
   서울·경기·인천 지역
===================================== */

const REGIONS = {
  seoul: [
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

  gyeonggi: [
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

  incheon: [
    "gyeyang",
    "bupyeong",
    "seo",
    "namdong",
  ],
} as const;

/* =====================================
   사이트맵 생성
===================================== */

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  /* =====================================
     1. 메인페이지
  ===================================== */

  pages.push({
    url: SITE_URL,
    changeFrequency: "weekly",
    priority: 1,
  });

  /* =====================================
     2. 서비스별 대표페이지
  ===================================== */

  for (const service of SERVICES) {
    pages.push({
      url: `${SITE_URL}/services/${service}`,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  /* =====================================
     3. 지역별 안내페이지
  ===================================== */

  for (const [region, districts] of Object.entries(
    REGIONS
  )) {
    for (const district of districts) {
      pages.push({
        url:
          `${SITE_URL}/regions/${region}/${district}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  /* =====================================
     4. 서비스 × 지역 상세페이지
  ===================================== */

  for (const service of SERVICES) {
    for (const [region, districts] of Object.entries(
      REGIONS
    )) {
      for (const district of districts) {
        pages.push({
          url:
            `${SITE_URL}/services/${service}/${region}/${district}`,
          changeFrequency: "monthly",
          priority: 0.8,
        });
      }
    }
  }

  /* =====================================
     중복 URL 제거
  ===================================== */

  const uniquePages = Array.from(
    new Map(
      pages.map((page) => [
        page.url,
        page,
      ])
    ).values()
  );

  return uniquePages;
}
