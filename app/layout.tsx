import type { Metadata } from "next";

/* =====================================
   누수대학 기본 정보
===================================== */

const SITE_URL = "https://www.nusudaehak.com";

const SITE_NAME = "누수대학";

const SITE_TITLE =
  "누수대학 | 누수탐지·배관누수·욕실누수 전문";

const SITE_DESCRIPTION =
  "누수대학은 누수탐지, 배관누수, 욕실누수, 천장누수, 수도누수를 전문으로 상담합니다. 서울·경기·인천 주요 지역 출장.";

/* =====================================
   메타데이터
===================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* -------------------------------------
     제목
  ------------------------------------- */

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  /* -------------------------------------
     페이지 설명
  ------------------------------------- */

  description: SITE_DESCRIPTION,

  /* -------------------------------------
     기본 정보
  ------------------------------------- */

  applicationName: SITE_NAME,

  creator: SITE_NAME,

  publisher: SITE_NAME,

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  /* -------------------------------------
     검색 키워드
  ------------------------------------- */

  keywords: [
    "누수대학",
    "누수탐지",
    "누수업체",
    "누수공사",
    "배관누수",
    "욕실누수",
    "천장누수",
    "수도누수",
    "아파트누수",
    "서울누수",
    "경기누수",
    "인천누수",
  ],

  /* -------------------------------------
     대표 URL
  ------------------------------------- */

  alternates: {
    canonical: SITE_URL,
  },

  /* -------------------------------------
     네이버 / 검색엔진
  ------------------------------------- */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  /* -------------------------------------
     Open Graph
  ------------------------------------- */

  openGraph: {
    type: "website",

    locale: "ko_KR",

    url: SITE_URL,

    siteName: SITE_NAME,

    title: SITE_TITLE,

    description: SITE_DESCRIPTION,

    images: [
      {
        url: "/E4170FD5-E76B-4B48-8FCB-354D44386823.png",
        width: 1200,
        height: 1200,
        alt: "누수대학 누수탐지 전문",
      },
    ],
  },

  /* -------------------------------------
     SNS 공유
  ------------------------------------- */

  twitter: {
    card: "summary_large_image",

    title: SITE_TITLE,

    description: SITE_DESCRIPTION,

    images: [
      "/E4170FD5-E76B-4B48-8FCB-354D44386823.png",
    ],
  },

  /* -------------------------------------
     파비콘
  ------------------------------------- */

  icons: {
    icon: [
      {
        url: "/E4170FD5-E76B-4B48-8FCB-354D44386823.png",
        type: "image/png",
      },
    ],

    shortcut:
      "/E4170FD5-E76B-4B48-8FCB-354D44386823.png",

    apple: [
      {
        url: "/E4170FD5-E76B-4B48-8FCB-354D44386823.png",
        type: "image/png",
      },
    ],
  },
};

/* =====================================
   Root Layout
===================================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* =====================================
     구조화 데이터
  ===================================== */

  const organizationSchema = {
    "@context": "https://schema.org",

    "@type": "HomeAndConstructionBusiness",

    name: SITE_NAME,

    url: SITE_URL,

    logo:
      `${SITE_URL}/E4170FD5-E76B-4B48-8FCB-354D44386823.png`,

    image:
      `${SITE_URL}/E4170FD5-E76B-4B48-8FCB-354D44386823.png`,

    telephone: "010-3925-6115",

    description: SITE_DESCRIPTION,

    founder: {
      "@type": "Person",
      name: "김대식",
    },

    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "서울",
      },
      {
        "@type": "AdministrativeArea",
        name: "경기",
      },
      {
        "@type": "AdministrativeArea",
        name: "인천",
      },
    ],

    knowsAbout: [
      "누수탐지",
      "배관누수",
      "욕실누수",
      "천장누수",
      "수도누수",
      "아파트누수",
    ],
  };

  return (
    <html lang="ko">
      <head>
        {/* =====================================
            네이버 서치어드바이저 소유확인
        ===================================== */}

        <meta
          name="naver-site-verification"
          content="0b56d1e507da8bb0469294e9d3938606769f1abd"
        />

        {/* =====================================
            모바일 / 브라우저
        ===================================== */}

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        <meta
          name="theme-color"
          content="#0874d9"
        />

        <meta
          name="format-detection"
          content="telephone=yes"
        />

        {/* =====================================
            파비콘
        ===================================== */}

        <link
          rel="icon"
          type="image/png"
          href="/E4170FD5-E76B-4B48-8FCB-354D44386823.png"
        />

        <link
          rel="shortcut icon"
          type="image/png"
          href="/E4170FD5-E76B-4B48-8FCB-354D44386823.png"
        />

        <link
          rel="apple-touch-icon"
          href="/E4170FD5-E76B-4B48-8FCB-354D44386823.png"
        />

        {/* =====================================
            구조화 데이터
        ===================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationSchema
            ),
          }}
        />
      </head>

      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          background: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
