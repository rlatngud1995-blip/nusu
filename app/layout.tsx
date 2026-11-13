
import type {
  Metadata,
  Viewport,
} from "next";

import type { ReactNode } from "react";

/* =====================================
   누수대학 기본 정보
===================================== */

const SITE_URL =
  "https://www.nusudaehak.com";

const SITE_NAME = "누수대학";

const OWNER = "김수형";

const PHONE = "010-9413-4686";

const FAVICON =
  "/E4170FD5-E76B-4B48-8FCB-354D44386823.png";

const SITE_TITLE =
  "누수대학 | 서울·경기·인천 누수탐지·배관누수·욕실누수";

const SITE_DESCRIPTION =
  "서울·경기·인천 누수탐지 전문 누수대학. 배관누수, 욕실누수, 천장누수, 수도누수, 아파트누수 등 누수 원인 점검 및 상담. 대표 김수형, 상담 010-9413-4686.";

/* =====================================
   검색엔진 메타데이터
===================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  creator: SITE_NAME,

  publisher: SITE_NAME,

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  keywords: [
    "누수대학",
    "누수탐지",
    "누수탐지업체",
    "누수업체",
    "누수공사",
    "배관누수",
    "욕실누수",
    "화장실누수",
    "천장누수",
    "수도누수",
    "아파트누수",
    "서울 누수탐지",
    "경기 누수탐지",
    "인천 누수탐지",
  ],

  /* =====================================
     대표 URL

     개별페이지에서는 각 페이지의
     canonical을 별도로 설정해야 함
  ===================================== */

  alternates: {
    canonical: "/",
  },

  /* =====================================
     검색로봇 설정
  ===================================== */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* =====================================
     네이버 소유확인
  ===================================== */

  verification: {
    other: {
      "naver-site-verification":
        "0b56d1e507da8bb0469294e9d3938606769f1abd",
    },
  },

  /* =====================================
     Open Graph
  ===================================== */

  openGraph: {
    type: "website",

    locale: "ko_KR",

    url: SITE_URL,

    siteName: SITE_NAME,

    title: SITE_TITLE,

    description: SITE_DESCRIPTION,

    images: [
      {
        url: FAVICON,
        alt: "누수대학 로고",
      },
    ],
  },

  /* =====================================
     SNS 공유
  ===================================== */

  twitter: {
    card: "summary",

    title: SITE_TITLE,

    description: SITE_DESCRIPTION,

    images: [FAVICON],
  },

  /* =====================================
     파비콘
  ===================================== */

  icons: {
    icon: [
      {
        url: FAVICON,
        type: "image/png",
      },
    ],

    shortcut: FAVICON,

    apple: [
      {
        url: FAVICON,
        type: "image/png",
      },
    ],
  },

  formatDetection: {
    telephone: true,
  },
};

/* =====================================
   모바일 화면 설정
===================================== */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0874d9",
};

/* =====================================
   업체 구조화 데이터
===================================== */

const businessSchema = {
  "@context": "https://schema.org",

  "@type": "HomeAndConstructionBusiness",

  "@id": `${SITE_URL}/#business`,

  name: SITE_NAME,

  url: SITE_URL,

  logo: `${SITE_URL}${FAVICON}`,

  image: `${SITE_URL}${FAVICON}`,

  telephone: PHONE,

  description: SITE_DESCRIPTION,

  founder: {
    "@type": "Person",
    name: OWNER,
  },

  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "서울특별시",
    },
    {
      "@type": "AdministrativeArea",
      name: "경기도",
    },
    {
      "@type": "AdministrativeArea",
      name: "인천광역시",
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

/* =====================================
   웹사이트 구조화 데이터
===================================== */

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": `${SITE_URL}/#website`,

  name: SITE_NAME,

  url: SITE_URL,

  description: SITE_DESCRIPTION,

  inLanguage: "ko-KR",

  publisher: {
    "@id": `${SITE_URL}/#business`,
  },
};

/* =====================================
   JSON-LD 안전 출력
===================================== */

function safeJsonLd(
  data: Record<string, unknown>
) {
  return JSON.stringify(data).replace(
    /</g,
    "\\u003c"
  );
}

/* =====================================
   Root Layout
===================================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(
              businessSchema
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(
              websiteSchema
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
