
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
   서비스 카테고리
===================================== */

const SERVICES = [
  {
    slug: "leak-detection",
    title: "누수탐지",
    icon: "🔎",
    description:
      "천장·벽·바닥의 누수 증상과 가능한 유입 경로를 확인합니다.",
  },
  {
    slug: "pipe-leak",
    title: "배관누수",
    icon: "🔧",
    description:
      "직수·온수·난방 배관과 연결부의 누수 가능성을 점검합니다.",
  },
  {
    slug: "bathroom-leak",
    title: "욕실누수",
    icon: "🚿",
    description:
      "욕실 방수층·배수구·급수배관 등 원인을 구분합니다.",
  },
  {
    slug: "ceiling-leak",
    title: "천장누수",
    icon: "💧",
    description:
      "천장 물자국과 물방울의 실제 유입 경로를 살펴봅니다.",
  },
  {
    slug: "water-leak",
    title: "수도누수",
    icon: "🚰",
    description:
      "수도계량기와 급수배관 상태를 확인합니다.",
  },
  {
    slug: "apartment-leak",
    title: "아파트누수",
    icon: "🏢",
    description:
      "아파트 위층·아래층 누수 원인과 증상을 확인합니다.",
  },
] as const;

/* =====================================
   지역 데이터
===================================== */

type RegionData = {
  name: string;
  districts: Record<string, string>;
};

const REGIONS: Record<string, RegionData> = {
  seoul: {
    name: "서울",
    districts: {
      jongno: "종로구",
      jung: "중구",
      yongsan: "용산구",
      seongdong: "성동구",
      gwangjin: "광진구",
      dongdaemun: "동대문구",
      seongbuk: "성북구",
      mapo: "마포구",
      seodaemun: "서대문구",
      yeongdeungpo: "영등포구",
      dongjak: "동작구",
      gwanak: "관악구",
      seocho: "서초구",
      gangnam: "강남구",
    },
  },

  gyeonggi: {
    name: "경기",
    districts: {
      bucheon: "부천시",
      siheung: "시흥시",
      ansan: "안산시",
      anyang: "안양시",
      suwon: "수원시",
      hwaseong: "화성시",
      pyeongtaek: "평택시",
      uiwang: "의왕시",
      gimpo: "김포시",
      paju: "파주시",
      gwangmyeong: "광명시",
      gwacheon: "과천시",
    },
  },

  incheon: {
    name: "인천",
    districts: {
      gyeyang: "계양구",
      bupyeong: "부평구",
      seo: "서구",
      namdong: "남동구",
    },
  },
};

/* =====================================
   지역별 상담 참고 정보
   실제 지역별 시공 실적을 의미하지 않음
===================================== */

const AREA_TIPS: Record<string, string> = {
  jongno:
    "누수가 처음 발생한 시점과 물자국의 변화를 확인해 주세요.",
  jung:
    "물을 사용하는 시간에 따라 누수 증상이 달라지는지 확인해 주세요.",
  yongsan:
    "천장이나 벽의 물자국이 커지는지 사진으로 기록해 주세요.",
  seongdong:
    "욕실 사용 후 아래층에 물이 나타나는지 확인해 주세요.",
  gwangjin:
    "비가 오지 않는 날에도 누수가 계속되는지 확인해 주세요.",
  dongdaemun:
    "수도계량기 움직임과 최근 수도요금 변화를 확인해 주세요.",
  seongbuk:
    "습기와 곰팡이가 반복되는 위치를 확인해 주세요.",
  mapo:
    "누수가 지속적으로 발생하는지 간헐적으로 발생하는지 알려주세요.",
  seodaemun:
    "모든 수도를 잠근 뒤 계량기 상태를 확인해 주세요.",
  yeongdeungpo:
    "누수 위치 주변에 욕실이나 배관이 있는지 확인해 주세요.",
  dongjak:
    "특정 수도를 사용할 때 누수 증상이 생기는지 확인해 주세요.",
  gwanak:
    "천장과 벽의 변색 범위를 사진으로 남겨주세요.",
  seocho:
    "욕실 사용 전후 누수 증상의 차이를 확인해 주세요.",
  gangnam:
    "위층과 아래층에서 확인된 누수 위치를 함께 알려주세요.",
  bucheon:
    "천장·벽·바닥 중 어느 곳에서 물이 보이는지 확인해 주세요.",
  siheung:
    "비 오는 날과 맑은 날의 증상 차이를 확인해 주세요.",
  ansan:
    "처음 물자국이 나타난 위치와 현재 범위를 비교해 주세요.",
  anyang:
    "욕실이나 주방 사용 후 누수가 심해지는지 확인해 주세요.",
  suwon:
    "물을 사용하지 않는 상태에서 수도계량기를 확인해 주세요.",
  hwaseong:
    "누수가 의심되는 부위를 여러 각도에서 촬영해 주세요.",
  pyeongtaek:
    "최근 수도요금이나 물 사용량에 변화가 있었는지 확인해 주세요.",
  uiwang:
    "물 사용 전후로 누수 증상이 달라지는지 확인해 주세요.",
  gimpo:
    "비가 온 뒤에만 발생한다면 발생 시점을 알려주세요.",
  paju:
    "누수 발생 시간과 날씨를 함께 기록해 주세요.",
  gwangmyeong:
    "위층에서 물을 사용할 때 증상이 나타나는지 확인해 주세요.",
  gwacheon:
    "물자국이 커지는 경우 현재 상태를 사진으로 남겨주세요.",
  gyeyang:
    "욕실 사용과 누수 발생의 연관성을 확인해 주세요.",
  bupyeong:
    "모든 수도를 잠근 뒤 계량기 움직임을 확인해 주세요.",
  seo:
    "비가 온 뒤에만 누수가 나타나는지 확인해 주세요.",
  namdong:
    "천장과 벽에 생긴 물자국을 사진으로 남겨주세요.",
};

/* =====================================
   지역별 페이지 공통 안내
===================================== */

const CHECK_ITEMS = [
  {
    title: "천장 물자국",
    description:
      "천장에 노란색 또는 갈색 얼룩이 생기거나 물방울이 떨어지는지 확인합니다.",
  },
  {
    title: "수도계량기",
    description:
      "물을 사용하지 않을 때도 계량기가 움직이는지 살펴봅니다.",
  },
  {
    title: "욕실 사용 후 누수",
    description:
      "샤워나 배수 후 누수 증상이 심해지는지 확인합니다.",
  },
  {
    title: "배관 주변 습기",
    description:
      "벽이나 바닥, 배관 연결부 주변에 지속적인 습기가 있는지 확인합니다.",
  },
  {
    title: "비 오는 날 누수",
    description:
      "강우 시점과 누수 발생 시점이 일치하는지 확인합니다.",
  },
  {
    title: "아랫집 누수",
    description:
      "아래층 천장에 나타난 물자국과 위층 물 사용 상황을 함께 확인합니다.",
  },
];

/* =====================================
   페이지 타입 및 데이터
===================================== */

type PageParams = {
  region: string;
  district: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

function getPageData(params: PageParams) {
  const regionData = REGIONS[params.region];

  if (!regionData) {
    return null;
  }

  const districtName =
    regionData.districts[params.district];

  if (!districtName) {
    return null;
  }

  const fullArea =
    `${regionData.name} ${districtName}`;

  const url =
    `${SITE_URL}/regions/${params.region}/${params.district}`;

  return {
    regionData,
    districtName,
    fullArea,
    url,
  };
}

/* =====================================
   정적 페이지 생성
===================================== */

export const dynamicParams = false;

export function generateStaticParams(): PageParams[] {
  const result: PageParams[] = [];

  for (const [region, regionData] of Object.entries(
    REGIONS
  )) {
    for (const district of Object.keys(
      regionData.districts
    )) {
      result.push({
        region,
        district,
      });
    }
  }

  return result;
}

/* =====================================
   메타데이터
===================================== */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const values = await params;
  const data = getPageData(values);

  if (!data) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title =
    `${data.districtName} 누수탐지·누수업체 | 누수대학`;

  const description =
    `${data.fullArea} 누수탐지 및 누수 상담. ` +
    `배관누수, 욕실누수, 천장누수, 수도누수, 아파트누수 원인 점검 안내. ` +
    `누수대학 ${PHONE_DISPLAY}.`;

  return {
    title,
    description,

    alternates: {
      canonical: data.url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url: data.url,
      siteName: COMPANY,
      locale: "ko_KR",
      type: "website",
    },

    twitter: {
      card: "summary",
      title,
      description,
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
   지역 상세페이지
===================================== */

export default async function RegionPage({
  params,
}: PageProps) {
  const values = await params;
  const data = getPageData(values);

  if (!data) {
    notFound();
  }

  const {
    regionData,
    districtName,
    fullArea,
    url,
  } = data;

  const areaTip =
    AREA_TIPS[values.district] ??
    "누수 위치와 발생 시점을 사진으로 남겨주세요.";

  const otherDistricts = Object.entries(
    regionData.districts
  ).filter(([slug]) => slug !== values.district);

  const faqs = [
    {
      q: `${districtName}에서 누수 상담을 받으려면 무엇을 준비해야 하나요?`,
      a:
        "누수가 나타나는 위치, 처음 발견한 시점, 물 사용과의 연관성, 누수 부위 사진 등을 알려주시면 상담에 도움이 됩니다.",
    },
    {
      q: "천장에 물이 보이면 반드시 윗집이 원인인가요?",
      a:
        "반드시 그렇지는 않습니다. 배관, 욕실 방수층, 옥상, 외벽 등 다른 경로로 물이 유입될 수 있습니다.",
    },
    {
      q: "욕실누수는 무조건 방수공사를 해야 하나요?",
      a:
        "아닙니다. 수도배관이나 배수구 주변이 원인일 수도 있으므로 먼저 원인을 구분해야 합니다.",
    },
    {
      q: "수도요금이 증가하면 누수일 가능성이 있나요?",
      a:
        "가능성은 있지만 사용량 변화 등 다른 원인도 있을 수 있습니다. 수도계량기와 배관 상태를 함께 확인해야 합니다.",
    },
  ];

  /* =====================================
     구조화 데이터
  ===================================== */

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${districtName} 누수탐지 및 누수 상담`,
    description:
      `${fullArea} 누수탐지, 배관누수, 욕실누수, 천장누수, 수도누수 및 아파트누수 상담 안내.`,
    url,

    serviceType: [
      "누수탐지",
      "배관누수",
      "욕실누수",
      "천장누수",
      "수도누수",
      "아파트누수",
    ],

    areaServed: {
      "@type": "AdministrativeArea",
      name: fullArea,
    },

    provider: {
      "@id": `${SITE_URL}/#business`,
    },
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
        name: `${districtName} 누수 안내`,
        item: url,
      },
    ],
  };

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

      {/* 상단 */}

      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            ...containerStyle,
            paddingTop: "15px",
            paddingBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
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

      {/* 현재 위치 */}

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

          <strong>{fullArea} 누수 안내</strong>
        </div>
      </nav>

      {/* HERO */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#06376c 0%,#0869d8 55%,#25a9f6 100%)",
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
              display: "inline-block",
              background: "rgba(255,255,255,.15)",
              border: "1px solid rgba(255,255,255,.25)",
              padding: "8px 15px",
              borderRadius: "999px",
              fontWeight: 800,
              marginBottom: "18px",
            }}
          >
            {fullArea} 누수 상담
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(40px,8vw,65px)",
              letterSpacing: "-2px",
              lineHeight: 1.15,
            }}
          >
            {districtName} 누수업체
          </h1>

          <p
            style={{
              margin: "20px auto 0",
              maxWidth: "700px",
              color: "#e5f3ff",
              lineHeight: 1.8,
              fontSize: "17px",
            }}
          >
            {districtName} 누수탐지부터 배관누수,
            욕실누수, 천장누수, 수도누수,
            아파트누수까지 현장 상황에 맞춰 상담합니다.
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

      {/* 지역별 서비스 */}

      <section
        style={{
          padding: "65px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontSize: "33px",
                margin: "0 0 10px",
              }}
            >
              {districtName} 누수 서비스
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.7,
              }}
            >
              필요한 서비스를 선택하면 해당 지역의
              상세 안내 페이지로 이동합니다.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "15px",
            }}
          >
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/${values.region}/${values.district}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <article
                  style={{
                    height: "100%",
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "18px",
                    padding: "24px",
                    boxShadow:
                      "0 7px 25px rgba(15,23,42,.06)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "33px",
                      marginBottom: "12px",
                    }}
                  >
                    {service.icon}
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: "21px",
                    }}
                  >
                    {districtName} {service.title}
                  </h3>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                      lineHeight: 1.8,
                      margin: "12px 0",
                    }}
                  >
                    {service.description}
                  </p>

                  <div
                    style={{
                      color: "#086bd8",
                      fontWeight: 900,
                      fontSize: "14px",
                    }}
                  >
                    자세히 보기 →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 누수 증상 체크 */}

      <section
        style={{
          padding: "65px 20px",
          background: "#fff",
        }}
      >
        <div style={containerStyle}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "31px",
              margin: "0 0 28px",
            }}
          >
            {districtName} 누수 주요 증상
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "14px",
            }}
          >
            {CHECK_ITEMS.map((item, index) => (
              <article
                key={item.title}
                style={{
                  ...cardStyle,
                  background: "#f8fafc",
                }}
              >
                <div
                  style={{
                    color: "#086bd8",
                    fontSize: "13px",
                    fontWeight: 900,
                  }}
                >
                  CHECK {index + 1}
                </div>

                <h3
                  style={{
                    margin: "9px 0",
                    fontSize: "19px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: 1.8,
                    fontSize: "14px",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 지역 상담 안내 */}

      <section
        style={{
          padding: "65px 20px",
          background: "#eaf5ff",
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
              textAlign: "center",
              fontSize: "31px",
              margin: "0 0 25px",
            }}
          >
            {districtName} 누수 상담 안내
          </h2>

          <div
            style={{
              background: "#fff",
              padding: "27px",
              borderRadius: "20px",
              lineHeight: 1.9,
              color: "#334155",
            }}
          >
            <p style={{ marginTop: 0 }}>
              누수는 증상이 비슷해 보여도 실제 원인은
              배관, 욕실 방수층, 수도관, 윗집 또는
              외부 유입 등 다양할 수 있습니다.
            </p>

            <p>
              누수대학은 {fullArea} 지역에서
              누수 증상을 확인하고 현장 상황에 맞는
              점검 및 작업 방향을 안내합니다.
            </p>

            <p>
              천장 물 얼룩, 수도요금 증가,
              계량기 움직임, 벽면 습기,
              아랫집 누수 등의 증상이 있다면
              상담 시 알려주세요.
            </p>

            <div
              style={{
                padding: "17px",
                background: "#edf7ff",
                borderLeft: "4px solid #086bd8",
                borderRadius: "10px",
                color: "#164e87",
                fontWeight: 800,
              }}
            >
              💡 {districtName} 상담 참고사항:
              {" "}{areaTip}
            </div>
          </div>
        </div>
      </section>

      {/* 상담 절차 */}

      <section
        style={{
          padding: "65px 20px",
          background: "#fff",
        }}
      >
        <div style={containerStyle}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "31px",
              margin: "0 0 28px",
            }}
          >
            누수 상담 진행 과정
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "14px",
            }}
          >
            {[
              {
                number: "01",
                title: "상담 접수",
                text: "지역과 누수 증상을 확인합니다.",
              },
              {
                number: "02",
                title: "증상 확인",
                text: "누수 위치와 발생 시점을 살펴봅니다.",
              },
              {
                number: "03",
                title: "원인 점검",
                text: "배관과 방수층 등 가능한 원인을 확인합니다.",
              },
              {
                number: "04",
                title: "작업 안내",
                text: "현장 상태에 맞는 작업 방향을 안내합니다.",
              },
            ].map((step) => (
              <article
                key={step.number}
                style={cardStyle}
              >
                <div
                  style={{
                    color: "#086bd8",
                    fontWeight: 900,
                    fontSize: "13px",
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
                    fontSize: "14px",
                    lineHeight: 1.8,
                    margin: 0,
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
              fontSize: "31px",
              margin: "0 0 28px",
            }}
          >
            {districtName} 누수 자주 묻는 질문
          </h2>

          <div
            style={{
              display: "grid",
              gap: "14px",
            }}
          >
            {faqs.map((faq) => (
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
                    color: "#64748b",
                    lineHeight: 1.9,
                    fontSize: "14px",
                    margin: "10px 0 0",
                  }}
                >
                  A. {faq.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 같은 권역 다른 지역 */}

      <section
        style={{
          padding: "55px 20px",
          background: "#fff",
        }}
      >
        <div style={containerStyle}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "28px",
              margin: "0 0 24px",
            }}
          >
            {regionData.name} 다른 지역 누수 안내
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {otherDistricts.map(([slug, name]) => (
              <Link
                key={slug}
                href={`/regions/${values.region}/${slug}`}
                style={{
                  textDecoration: "none",
                  background: "#f1f7ff",
                  color: "#164e87",
                  border: "1px solid #dbeafe",
                  borderRadius: "10px",
                  padding: "11px 15px",
                  fontWeight: 800,
                  fontSize: "14px",
                }}
              >
                {name} 누수 안내
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 */}

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
            margin: "0 0 12px",
          }}
        >
          {districtName} 누수 상담
        </h2>

        <p
          style={{
            color: "#dcecff",
            lineHeight: 1.8,
          }}
        >
          현재 위치와 누수 증상을 알려주세요.
          <br />
          전화 또는 문자로 상담 가능합니다.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "11px",
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

      {/* Footer */}

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
            대표자 : {OWNER}
          </div>

          <div>대표전화 : {PHONE_DISPLAY}</div>

          <div>
            홈페이지 : www.nusudaehak.com
          </div>
        </div>
      </footer>

      {/* 모바일 하단 고정 */}

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
