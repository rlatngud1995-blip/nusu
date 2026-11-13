
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

/* =====================================
   누수대학 기본 정보
===================================== */

const SITE_URL = "https://www.nusudaehak.com";
const COMPANY = "누수대학";
const OWNER = "김수형";

const PHONE = "01094134686";
const PHONE_DISPLAY = "010-9413-4686";
const PHONE_LINK = `tel:${PHONE}`;

const SMS_MESSAGE = `안녕하세요. 누수대학 홈페이지 보고 문의드립니다.

지역:
건물 유형:
누수 증상:
사진 첨부 가능 여부:

상담 부탁드립니다.`;

const SMS_LINK = `sms:${PHONE}?body=${encodeURIComponent(
  SMS_MESSAGE
)}`;

/* =====================================
   서비스 데이터
===================================== */

type FAQ = {
  q: string;
  a: string;
};

type ServiceData = {
  title: string;
  icon: string;
  description: string;
  detail: string;
  symptoms: string[];
  checks: string[];
  images: string[];
  faqs: FAQ[];
};

const SERVICES: Record<string, ServiceData> = {
  "leak-detection": {
    title: "누수탐지",
    icon: "🔎",
    description:
      "눈에 보이지 않는 누수 원인과 발생 위치를 확인하고 현장 상황에 맞는 점검 방향을 안내합니다.",
    detail:
      "누수탐지는 물이 보이는 위치만 확인하는 작업이 아닙니다. 수도계량기 변화, 물 사용 시점, 배관 상태, 욕실 방수층, 옥상과 외벽 등 가능한 원인을 구분하는 과정이 중요합니다. 천장이나 벽에 나타난 물자국과 실제 유입 위치가 다를 수 있으므로 증상을 종합적으로 살펴봐야 합니다.",
    symptoms: [
      "수도요금이 갑자기 증가한 경우",
      "물을 사용하지 않아도 수도계량기가 움직이는 경우",
      "벽이나 바닥에서 습기가 올라오는 경우",
      "아랫집에서 누수 연락을 받은 경우",
      "누수 위치가 정확히 확인되지 않는 경우",
    ],
    checks: [
      "누수 발생 시점과 지속 여부",
      "수도계량기 및 배관 상태",
      "욕실과 베란다 방수층",
      "천장·벽·바닥의 습기",
      "옥상과 외벽의 빗물 유입 가능성",
    ],
    images: [
      "/IMG_1546.jpeg",
      "/IMG_1545.jpeg",
    ],
    faqs: [
      {
        q: "물자국이 있는 곳이 실제 누수 위치인가요?",
        a: "반드시 그렇지는 않습니다. 물이 구조물이나 배관을 따라 이동할 수 있어 실제 유입 경로를 확인해야 합니다.",
      },
      {
        q: "누수탐지 상담 전 무엇을 준비해야 하나요?",
        a: "누수 위치 사진, 최초 발견 시점, 물 사용과의 연관성 등을 알려주시면 상담에 도움이 됩니다.",
      },
      {
        q: "사진만으로 누수 원인을 확정할 수 있나요?",
        a: "사진으로 증상을 파악할 수 있지만 정확한 원인은 현장 확인이 필요할 수 있습니다.",
      },
    ],
  },

  "pipe-leak": {
    title: "배관누수",
    icon: "🔧",
    description:
      "직수·온수·난방 배관과 연결부에서 발생하는 누수 가능성을 확인하고 필요한 보수 방향을 안내합니다.",
    detail:
      "배관누수는 바닥이나 벽 내부에 매립된 배관에서 발생할 수 있습니다. 물이 새는 위치가 눈에 보이지 않는 경우에도 계량기 움직임, 배관 사용 상황, 주변 습기 등을 종합적으로 확인해 원인을 구분하는 것이 중요합니다.",
    symptoms: [
      "배관 주변에 물이 고이는 경우",
      "벽 안쪽이나 바닥 아래에서 물소리가 나는 경우",
      "배관 연결부 주변이 지속적으로 젖는 경우",
      "수도 사용량이 비정상적으로 증가한 경우",
      "노후 배관에서 누수가 의심되는 경우",
    ],
    checks: [
      "직수·온수·난방 배관",
      "배관 연결부 상태",
      "수도계량기 변화",
      "벽과 바닥의 습기",
      "누수 의심 위치와 배관 경로",
    ],
    images: [
      "/IMG_1545.jpeg",
      "/IMG_1544.jpeg",
    ],
    faqs: [
      {
        q: "수도계량기가 움직이면 배관누수인가요?",
        a: "누수 가능성이 있지만 다른 수도기기의 사용 여부도 함께 확인해야 합니다.",
      },
      {
        q: "배관누수는 바닥을 모두 철거해야 하나요?",
        a: "현장 구조와 누수 위치에 따라 필요한 작업 범위가 달라집니다.",
      },
      {
        q: "온수배관에서도 누수가 발생하나요?",
        a: "네. 직수배관뿐 아니라 온수 및 난방 배관에서도 누수가 발생할 수 있습니다.",
      },
    ],
  },

  "bathroom-leak": {
    title: "욕실누수",
    icon: "🚿",
    description:
      "욕실 바닥, 배수구, 수도배관, 방수층 등 여러 원인을 확인하고 누수 발생 경로를 점검합니다.",
    detail:
      "욕실누수는 바닥 방수층뿐 아니라 배수구 주변, 급수배관, 벽과 바닥 접합부 등에서 발생할 수 있습니다. 샤워나 배수 후 누수 증상이 심해지는지 확인하면 원인을 구분하는 데 도움이 됩니다.",
    symptoms: [
      "욕실 사용 후 아래층 천장에 물이 생기는 경우",
      "화장실 바닥이 계속 젖어 있는 경우",
      "욕실 벽면에 습기나 곰팡이가 생기는 경우",
      "배수구 주변으로 물이 새는 경우",
      "샤워 후 누수 증상이 심해지는 경우",
    ],
    checks: [
      "욕실 바닥 방수층",
      "배수구와 주변 연결부",
      "급수배관 상태",
      "벽과 바닥 접합부",
      "욕실 사용 전후 누수 변화",
    ],
    images: [
      "/IMG_1547.jpeg",
      "/IMG_1546.jpeg",
    ],
    faqs: [
      {
        q: "욕실누수는 무조건 방수 문제인가요?",
        a: "아닙니다. 수도배관이나 배수구 주변 문제가 원인일 수도 있습니다.",
      },
      {
        q: "욕실 전체를 철거해야 하나요?",
        a: "누수 원인과 현장 상태에 따라 필요한 작업 범위가 달라집니다.",
      },
      {
        q: "아랫집 천장에서만 누수가 보일 수 있나요?",
        a: "네. 위층 욕실에서 발생한 물이 아래층 천장에 먼저 나타날 수 있습니다.",
      },
    ],
  },

  "ceiling-leak": {
    title: "천장누수",
    icon: "💧",
    description:
      "천장 얼룩, 물방울, 도배 변색 등의 증상을 확인하고 물이 유입되는 경로를 점검합니다.",
    detail:
      "천장누수는 위층 수도배관이나 욕실뿐 아니라 옥상, 외벽, 창틀 등에서 유입된 물 때문에 발생할 수 있습니다. 비가 올 때만 발생하는지, 위층에서 물을 사용할 때 심해지는지에 따라 점검 방향이 달라질 수 있습니다.",
    symptoms: [
      "천장에 노란색 또는 갈색 얼룩이 생긴 경우",
      "천장에서 물이 한 방울씩 떨어지는 경우",
      "천장 도배가 들뜨거나 변색되는 경우",
      "비가 온 뒤 누수가 발생하는 경우",
      "윗집 물 사용 후 누수가 발생하는 경우",
    ],
    checks: [
      "천장 얼룩과 변색 범위",
      "위층 수도 사용 여부",
      "욕실 방수층 상태",
      "천장 주변 배관",
      "옥상·외벽·창틀의 유입 가능성",
    ],
    images: [
      "/IMG_1546.jpeg",
      "/IMG_1548.jpeg",
      "/IMG_1549.jpeg",
    ],
    faqs: [
      {
        q: "천장누수는 반드시 윗집이 원인인가요?",
        a: "반드시 그렇지는 않습니다. 옥상, 외벽, 배관 등 다른 경로로 물이 유입될 수 있습니다.",
      },
      {
        q: "비가 올 때만 물이 새면 무엇을 확인하나요?",
        a: "옥상 방수층, 외벽, 창틀 등 외부 유입 가능성을 함께 확인합니다.",
      },
      {
        q: "천장에 얼룩만 있어도 점검해야 하나요?",
        a: "얼룩이 커지거나 습기가 반복된다면 원인을 확인하는 것이 좋습니다.",
      },
    ],
  },

  "water-leak": {
    title: "수도누수",
    icon: "🚰",
    description:
      "수도계량기 움직임과 급수배관 상태를 확인하여 수도누수 가능성을 점검합니다.",
    detail:
      "수도누수는 눈에 보이지 않는 급수배관에서 발생할 수 있습니다. 수도요금이 갑자기 증가하거나 모든 수도를 잠근 상태에서도 계량기가 움직이는 경우 수도 사용 상태와 배관을 함께 확인하는 것이 중요합니다.",
    symptoms: [
      "수도요금이 평소보다 많이 나오는 경우",
      "모든 수도를 잠가도 계량기가 움직이는 경우",
      "수도 압력이 갑자기 약해진 경우",
      "바닥이나 벽에서 물이 스며 나오는 경우",
      "수도 배관 누수가 의심되는 경우",
    ],
    checks: [
      "수도계량기 움직임",
      "직수배관과 온수배관",
      "최근 수도 사용량 변화",
      "벽과 바닥의 습기",
      "급수배관 연결부",
    ],
    images: [
      "/IMG_1544.jpeg",
      "/IMG_1545.jpeg",
    ],
    faqs: [
      {
        q: "수도요금이 증가하면 반드시 누수인가요?",
        a: "반드시 그렇지는 않습니다. 사용량 변화와 수도계량기 상태를 함께 확인해야 합니다.",
      },
      {
        q: "수도누수도 벽 내부에서 발생하나요?",
        a: "네. 벽이나 바닥 내부에 매립된 배관에서 누수가 발생할 수 있습니다.",
      },
      {
        q: "계량기만 보고 누수 위치를 알 수 있나요?",
        a: "계량기는 누수 가능성을 확인하는 데 도움이 되지만 정확한 위치는 추가 점검이 필요할 수 있습니다.",
      },
    ],
  },

  "apartment-leak": {
    title: "아파트누수",
    icon: "🏢",
    description:
      "아파트 세대 간 누수와 욕실·주방·배관 등 다양한 누수 원인을 확인하고 점검 방향을 안내합니다.",
    detail:
      "아파트누수는 위층과 아래층 사이에서 나타나는 경우가 많지만 원인은 수도배관, 욕실 방수층, 배수구, 외벽 등 다양합니다. 물이 나타나는 위치와 물 사용 시점을 함께 확인해 원인을 구분해야 합니다.",
    symptoms: [
      "아랫집 천장에서 물이 떨어지는 경우",
      "윗집 누수가 의심되는 경우",
      "베란다 또는 욕실 주변에서 누수가 발생하는 경우",
      "벽이나 천장에 누수 흔적이 생긴 경우",
      "세대 간 누수 원인을 확인해야 하는 경우",
    ],
    checks: [
      "위층과 아래층 누수 위치",
      "욕실과 주방의 물 사용 여부",
      "급수배관과 배수구",
      "욕실·베란다 방수층",
      "외벽과 창틀의 빗물 유입 가능성",
    ],
    images: [
      "/IMG_1546.jpeg",
      "/IMG_1547.jpeg",
    ],
    faqs: [
      {
        q: "아랫집에 물이 새면 반드시 우리 집이 원인인가요?",
        a: "가능성은 있지만 위치만으로 원인을 확정할 수는 없습니다. 실제 유입 경로를 확인해야 합니다.",
      },
      {
        q: "관리사무소 확인 후 상담해도 되나요?",
        a: "네. 관리사무소에서 확인한 내용과 누수 사진을 알려주시면 도움이 됩니다.",
      },
      {
        q: "아파트 욕실누수도 배관 문제일 수 있나요?",
        a: "네. 방수층 외에도 급수배관이나 배수구 문제가 원인일 수 있습니다.",
      },
    ],
  },
};

/* =====================================
   출장 지역
===================================== */

const REGIONS = [
  {
    name: "서울",
    slug: "seoul",
    districts: [
      { name: "종로구", slug: "jongno" },
      { name: "중구", slug: "jung" },
      { name: "용산구", slug: "yongsan" },
      { name: "성동구", slug: "seongdong" },
      { name: "광진구", slug: "gwangjin" },
      { name: "동대문구", slug: "dongdaemun" },
      { name: "성북구", slug: "seongbuk" },
      { name: "마포구", slug: "mapo" },
      { name: "서대문구", slug: "seodaemun" },
      { name: "영등포구", slug: "yeongdeungpo" },
      { name: "동작구", slug: "dongjak" },
      { name: "관악구", slug: "gwanak" },
      { name: "서초구", slug: "seocho" },
      { name: "강남구", slug: "gangnam" },
    ],
  },
  {
    name: "경기",
    slug: "gyeonggi",
    districts: [
      { name: "부천시", slug: "bucheon" },
      { name: "시흥시", slug: "siheung" },
      { name: "안산시", slug: "ansan" },
      { name: "안양시", slug: "anyang" },
      { name: "수원시", slug: "suwon" },
      { name: "화성시", slug: "hwaseong" },
      { name: "평택시", slug: "pyeongtaek" },
      { name: "의왕시", slug: "uiwang" },
      { name: "김포시", slug: "gimpo" },
      { name: "파주시", slug: "paju" },
      { name: "광명시", slug: "gwangmyeong" },
      { name: "과천시", slug: "gwacheon" },
    ],
  },
  {
    name: "인천",
    slug: "incheon",
    districts: [
      { name: "계양구", slug: "gyeyang" },
      { name: "부평구", slug: "bupyeong" },
      { name: "서구", slug: "seo" },
      { name: "남동구", slug: "namdong" },
    ],
  },
] as const;

/* =====================================
   정적 페이지 생성
===================================== */

type PageProps = {
  params: Promise<{ service: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SERVICES).map((service) => ({
    service,
  }));
}

/* =====================================
   메타데이터
===================================== */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service } = await params;
  const data = SERVICES[service];

  if (!data) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `${SITE_URL}/services/${service}`;

  const title = `${data.title} 전문 | 누수대학`;

  const description =
    `${data.title} 원인 점검 및 상담. ` +
    `${data.description} ` +
    `서울·경기·인천 누수 상담 ${PHONE_DISPLAY}.`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: COMPANY,
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: `${SITE_URL}${data.images[0]}`,
          alt: `${data.title} 관련 작업사진`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        `${SITE_URL}${data.images[0]}`,
      ],
    },
  };
}

/* =====================================
   공통 스타일
===================================== */

const containerStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 20px",
};

const cardStyle = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "18px",
  padding: "22px",
};

function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(
    /</g,
    "\\u003c"
  );
}

/* =====================================
   서비스 대표페이지
===================================== */

export default async function ServicePage({
  params,
}: PageProps) {
  const { service } = await params;
  const currentService = SERVICES[service];

  if (!currentService) {
    notFound();
  }

  const url = `${SITE_URL}/services/${service}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: currentService.title,
    serviceType: currentService.title,
    description: currentService.description,
    url,
    provider: {
      "@id": `${SITE_URL}/#business`,
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
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: COMPANY,
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentService.title,
        item: url,
      },
    ],
  };

  const otherServices = Object.entries(
    SERVICES
  ).filter(([slug]) => slug !== service);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fbff",
        color: "#0f172a",
        fontFamily:
          '"Pretendard","Apple SD Gothic Neo",Arial,sans-serif',
        paddingBottom: "65px",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(breadcrumbSchema),
        }}
      />

      {/* HEADER */}

      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            ...containerStyle,
            paddingTop: "16px",
            paddingBottom: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#0f172a",
              fontWeight: 900,
              fontSize: "23px",
            }}
          >
            💧 누수대학
          </Link>

          <a
            href={PHONE_LINK}
            style={{
              textDecoration: "none",
              background: "#086bd8",
              color: "#fff",
              padding: "11px 15px",
              borderRadius: "10px",
              fontWeight: 900,
              fontSize: "14px",
            }}
          >
            📞 전화 상담
          </a>
        </div>
      </header>

      {/* BREADCRUMB */}

      <nav
        aria-label="현재 위치"
        style={{
          background: "#fff",
          borderBottom: "1px solid #edf2f7",
        }}
      >
        <div
          style={{
            ...containerStyle,
            paddingTop: "13px",
            paddingBottom: "13px",
            fontSize: "13px",
            color: "#64748b",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#64748b",
              textDecoration: "none",
            }}
          >
            홈
          </Link>
          {" / "}
          <strong>{currentService.title}</strong>
        </div>
      </nav>

      {/* HERO */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#06376c,#0869d8,#25a9f6)",
          color: "#fff",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: "50px",
              marginBottom: "15px",
            }}
          >
            {currentService.icon}
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(40px,8vw,66px)",
              letterSpacing: "-2px",
            }}
          >
            {currentService.title}
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "20px auto 0",
              lineHeight: 1.8,
              fontSize: "17px",
              color: "#e5f3ff",
            }}
          >
            {currentService.description}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "11px",
              marginTop: "28px",
            }}
          >
            <a
              href={PHONE_LINK}
              style={{
                textDecoration: "none",
                background: "#fff",
                color: "#075cb7",
                padding: "15px 23px",
                borderRadius: "12px",
                fontWeight: 900,
              }}
            >
              📞 {PHONE_DISPLAY}
            </a>

            <a
              href={SMS_LINK}
              style={{
                textDecoration: "none",
                background: "#111827",
                color: "#fff",
                padding: "15px 23px",
                borderRadius: "12px",
                fontWeight: 900,
              }}
            >
              💬 문자 상담
            </a>
          </div>
        </div>
      </section>

      {/* 서비스 설명 */}

      <section
        style={{
          padding: "65px 20px",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              margin: "0 0 24px",
              textAlign: "center",
            }}
          >
            {currentService.title} 원인 점검 안내
          </h2>

          <div
            style={{
              ...cardStyle,
              background: "#f8fafc",
            }}
          >
            <p
              style={{
                margin: 0,
                lineHeight: 2,
                fontSize: "16px",
                color: "#334155",
              }}
            >
              {currentService.detail}
            </p>
          </div>
        </div>
      </section>

      {/* 작업사진 */}

      <section
        style={{
          padding: "65px 20px",
          background: "#eef6ff",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              margin: "0 0 12px",
              textAlign: "center",
            }}
          >
            {currentService.title} 관련 작업사진
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              lineHeight: 1.8,
              marginBottom: "28px",
            }}
          >
            누수대학의 누수 및 방수 관련 작업 참고 사진입니다.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",
              gap: "17px",
            }}
          >
            {currentService.images.map(
              (src, index) => (
                <article
                  key={src}
                  style={{
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "18px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "4 / 3",
                      background: "#e2e8f0",
                    }}
                  >
                    <Image
                      src={src}
                      alt={`${currentService.title} 관련 작업 참고 사진 ${index + 1}`}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      padding: "18px",
                    }}
                  >
                    <strong>
                      {currentService.title} 작업 참고
                    </strong>

                    <p
                      style={{
                        margin: "8px 0 0",
                        color: "#64748b",
                        lineHeight: 1.7,
                        fontSize: "14px",
                      }}
                    >
                      현장 상황에 따라 누수 원인과
                      필요한 작업은 달라질 수 있습니다.
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* 주요 증상 */}

      <section
        style={{
          padding: "65px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              textAlign: "center",
              marginBottom: "28px",
            }}
          >
            이런 증상이 있다면
            <br />
            {currentService.title} 점검이 필요할 수 있습니다
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #e2e8f0",
              boxShadow:
                "0 8px 25px rgba(15,23,42,.06)",
            }}
          >
            {currentService.symptoms.map(
              (item, index) => (
                <div
                  key={item}
                  style={{
                    padding: "15px 0",
                    borderBottom:
                      index ===
                      currentService.symptoms.length - 1
                        ? "none"
                        : "1px solid #edf2f7",
                    fontWeight: 700,
                    lineHeight: 1.6,
                  }}
                >
                  ✅ {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 점검 항목 */}

      <section
        style={{
          padding: "65px 20px",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              marginBottom: "28px",
            }}
          >
            {currentService.title} 주요 확인 항목
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(240px,1fr))",
              gap: "14px",
            }}
          >
            {currentService.checks.map(
              (item, index) => (
                <article
                  key={item}
                  style={{
                    ...cardStyle,
                    background: "#f8fafc",
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#0874d9",
                      fontWeight: 900,
                    }}
                  >
                    {index + 1}.
                  </span>

                  <strong
                    style={{
                      lineHeight: 1.7,
                    }}
                  >
                    {item}
                  </strong>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* 지역별 페이지 */}

      <section
        style={{
          padding: "65px 20px",
          background: "#eaf5ff",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              marginBottom: "12px",
            }}
          >
            {currentService.title} 출장 지역
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              marginBottom: "30px",
              lineHeight: 1.7,
            }}
          >
            지역을 선택하면 해당 지역의
            <br />
            {currentService.title} 안내 페이지로 이동합니다.
          </p>

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            {REGIONS.map((region) => (
              <div
                key={region.slug}
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  padding: "23px",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 15px",
                    fontSize: "24px",
                  }}
                >
                  {region.name}
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "9px",
                  }}
                >
                  {region.districts.map(
                    (district) => (
                      <Link
                        key={district.slug}
                        href={`/services/${service}/${region.slug}/${district.slug}`}
                        style={{
                          textDecoration: "none",
                          background: "#edf7ff",
                          border: "1px solid #cce7ff",
                          color: "#164e87",
                          padding: "10px 14px",
                          borderRadius: "9px",
                          fontWeight: 800,
                          fontSize: "14px",
                        }}
                      >
                        {district.name}{" "}
                        {currentService.title}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 작업 과정 */}

      <section
        style={{
          padding: "65px 20px",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              marginBottom: "30px",
            }}
          >
            작업 진행 과정
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(210px,1fr))",
              gap: "15px",
            }}
          >
            {[
              {
                number: "01",
                title: "상담 접수",
                text: "지역과 현재 누수 증상을 확인합니다.",
              },
              {
                number: "02",
                title: "현장 확인",
                text: "누수 위치와 발생 상황을 살펴봅니다.",
              },
              {
                number: "03",
                title: "원인 점검",
                text: "배관과 방수층 등 가능한 원인을 확인합니다.",
              },
              {
                number: "04",
                title: "작업 안내",
                text: "현장 상태에 따라 필요한 작업을 안내합니다.",
              },
            ].map((step) => (
              <article
                key={step.number}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "17px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    color: "#0874d9",
                    fontWeight: 900,
                    fontSize: "14px",
                  }}
                >
                  STEP {step.number}
                </div>

                <h3
                  style={{
                    margin: "10px 0",
                    fontSize: "20px",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: 1.7,
                    fontSize: "14px",
                  }}
                >
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section
        style={{
          padding: "65px 20px",
          background: "#f8fbff",
        }}
      >
        <div
          style={{
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              marginBottom: "30px",
            }}
          >
            {currentService.title} 자주 묻는 질문
          </h2>

          <div
            style={{
              display: "grid",
              gap: "14px",
            }}
          >
            {currentService.faqs.map((faq) => (
              <article
                key={faq.q}
                style={cardStyle}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "17px",
                    lineHeight: 1.7,
                  }}
                >
                  Q. {faq.q}
                </h3>

                <p
                  style={{
                    margin: "10px 0 0",
                    color: "#64748b",
                    lineHeight: 1.9,
                    fontSize: "14px",
                  }}
                >
                  A. {faq.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 다른 서비스 */}

      <section
        style={{
          padding: "55px 20px",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "28px",
              marginBottom: "24px",
            }}
          >
            누수대학 다른 서비스
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {otherServices.map(
              ([slug, data]) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  style={{
                    textDecoration: "none",
                    background: "#f1f7ff",
                    color: "#164e87",
                    border: "1px solid #dbeafe",
                    padding: "12px 17px",
                    borderRadius: "10px",
                    fontWeight: 800,
                  }}
                >
                  {data.icon} {data.title}
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* 상담 CTA */}

      <section
        style={{
          background: "#0c3765",
          color: "#fff",
          textAlign: "center",
          padding: "65px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            margin: "0 0 13px",
          }}
        >
          {currentService.title} 상담
        </h2>

        <p
          style={{
            color: "#dcecff",
            lineHeight: 1.8,
          }}
        >
          현재 누수 증상과 지역을 알려주시면
          <br />
          상담해드립니다.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "11px",
            flexWrap: "wrap",
            marginTop: "24px",
          }}
        >
          <a
            href={PHONE_LINK}
            style={{
              background: "#fff",
              color: "#075cb7",
              textDecoration: "none",
              padding: "15px 23px",
              borderRadius: "12px",
              fontWeight: 900,
            }}
          >
            📞 {PHONE_DISPLAY}
          </a>

          <a
            href={SMS_LINK}
            style={{
              background: "#168bf2",
              color: "#fff",
              textDecoration: "none",
              padding: "15px 23px",
              borderRadius: "12px",
              fontWeight: 900,
            }}
          >
            💬 문자 상담
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          background: "#081f38",
          color: "#b9cadd",
          padding: "32px 20px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            lineHeight: 1.8,
            fontSize: "14px",
          }}
        >
          <strong
            style={{
              color: "#fff",
              fontSize: "20px",
            }}
          >
            {COMPANY}
          </strong>

          <div style={{ marginTop: "8px" }}>
            대표 {OWNER}
          </div>

          <div>대표전화 {PHONE_DISPLAY}</div>

          <div>www.nusudaehak.com</div>
        </div>
      </footer>

      {/* 모바일 하단 상담 */}

      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          boxShadow: "0 -5px 20px rgba(0,0,0,.15)",
        }}
      >
        <a
          href={PHONE_LINK}
          style={{
            background: "#086bd8",
            color: "#fff",
            textDecoration: "none",
            textAlign: "center",
            padding: "17px",
            fontWeight: 900,
          }}
        >
          📞 전화 상담
        </a>

        <a
          href={SMS_LINK}
          style={{
            background: "#111827",
            color: "#fff",
            textDecoration: "none",
            textAlign: "center",
            padding: "17px",
            fontWeight: 900,
          }}
        >
          💬 문자 상담
        </a>
      </div>
    </main>
  );
}
