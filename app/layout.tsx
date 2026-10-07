import type { Metadata } from "next";

/* =====================================
   누수대학 기본 정보
===================================== */

const SITE_URL = "https://www.nusudaehak.com";
const SITE_NAME = "누수대학";

const SITE_TITLE =
  "누수대학 | 누수탐지·배관누수·욕실누수 전문";

const SITE_DESCRIPTION =
  "누수대학은 누수탐지, 배관누수, 욕실누수, 천장누수, 수도누수, 아파트누수 등 다양한 누수 문제를 확인하고 현장 상황에 맞는 작업을 안내합니다. 대표 김대식, 상담 010-3925-6115.";

/* =====================================
   홈페이지 메타데이터
===================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

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
  ],

  authors: [
    {
      name: "누수대학",
      url: SITE_URL,
    },
  ],

  creator: "누수대학",
  publisher: "누수대학",

  alternates: {
    canonical: SITE_URL,
  },

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
        alt: "누수대학",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,

    images: [
      "/E4170FD5-E76B-4B48-8FCB-354D44386823.png",
    ],
  },

  icons: {
    icon: [
      {
        url: "/E4170FD5-E76B-4B48-8FCB-354D44386823.png",
        type: "image/png",
      },
    ],

    shortcut:
      "/E4170FD5-E76B-4B48-8FCB-354D44386823.png",

    apple:
      "/E4170FD5-E76B-4B48-8FCB-354D44386823.png",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
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
  return (
    <html lang="ko">
      <head>
        <meta
          name="theme-color"
          content="#0b63ce"
        />

        <meta
          name="format-detection"
          content="telephone=yes"
        />

        <link
          rel="icon"
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
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "LocalBusiness",

              name: "누수대학",

              url: SITE_URL,

              image:
                `${SITE_URL}/E4170FD5-E76B-4B48-8FCB-354D44386823.png`,

              telephone: "010-3925-6115",

              founder: {
                "@type": "Person",
                name: "김대식",
              },

              description: SITE_DESCRIPTION,

              areaServed: {
                "@type": "Country",
                name: "대한민국",
              },

              knowsAbout: [
                "누수탐지",
                "누수공사",
                "배관누수",
                "욕실누수",
                "천장누수",
                "수도누수",
                "아파트누수",
              ],
            }),
          }}
        />
      </head>

      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
