
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

/* =========================================
   기본 정보
========================================= */

const SITE = "https://www.nusudaehak.com";
const COMPANY = "누수대학";
const OWNER = "김수형";
const PHONE = "01094134686";
const PHONE_TEXT = "010-9413-4686";

const SMS_MESSAGE = `안녕하세요. 누수대학 홈페이지 보고 문의드립니다.

지역:
건물 유형:
누수 증상:
사진 첨부 가능 여부:

상담 부탁드립니다.`;

const SMS = `sms:${PHONE}?body=${encodeURIComponent(
  SMS_MESSAGE
)}`;

/* =========================================
   서비스별 정보
========================================= */

const SERVICES = {
  "leak-detection": {
    name: "누수탐지",
    intro:
      "천장·벽·바닥에 나타난 물자국과 실제 누수 원인은 다를 수 있습니다. 물 사용 여부, 계량기 변화, 강우 시점 등을 종합해 점검 방향을 정합니다.",
    checks: [
      "누수 발생 시점과 지속 여부",
      "직수·온수·난방 배관 가능성",
      "욕실·베란다 방수층 상태",
      "천장·외벽·창틀의 빗물 유입 여부",
    ],
    signs: [
      "원인을 알 수 없는 천장 물자국",
      "수도요금이 평소보다 증가",
      "아랫집에서 누수 연락",
      "비가 올 때만 생기는 습기",
    ],
    faqs: [
      {
        q: "물자국이 있는 곳이 누수 원인인가요?",
        a: "반드시 그렇지는 않습니다. 물이 구조물을 따라 이동할 수 있으므로 배관과 방수층 등 가능한 경로를 확인해야 합니다.",
      },
      {
        q: "상담 전에 무엇을 준비하나요?",
        a: "누수 위치 사진, 처음 발견한 날짜, 물 사용이나 비와의 연관성을 정리하면 도움이 됩니다.",
      },
      {
        q: "누수 원인을 바로 확정할 수 있나요?",
        a: "사진만으로 확정하기 어려운 경우가 많으며 현장 상태에 따라 추가 확인이 필요할 수 있습니다.",
      },
    ],
    images: [
      "/IMG_1546.jpeg",
      "/IMG_1545.jpeg",
    ],
  },

  "pipe-leak": {
    name: "배관누수",
    intro:
      "바닥이나 벽 내부에 매립된 직수·온수·난방 배관은 겉으로 상태를 확인하기 어렵습니다. 계량기와 주변 습기, 배관 사용 상황을 살펴 원인 범위를 좁힙니다.",
    checks: [
      "직수·온수·난방 배관 구분",
      "수도계량기 움직임",
      "배관 연결부와 주변 습기",
      "누수 의심 부위와 보수 범위",
    ],
    signs: [
      "물을 쓰지 않아도 계량기 움직임",
      "바닥에서 올라오는 습기",
      "배관 주변의 지속적인 물자국",
      "원인 모를 수도요금 증가",
    ],
    faqs: [
      {
        q: "계량기가 움직이면 무조건 배관누수인가요?",
        a: "수도기기 사용 등 다른 원인도 있으므로 사용 상태를 먼저 확인해야 합니다.",
      },
      {
        q: "바닥을 모두 철거해야 하나요?",
        a: "누수 위치와 구조에 따라 필요한 작업 범위가 달라집니다.",
      },
      {
        q: "온수배관에서도 누수가 생기나요?",
        a: "네. 직수·온수·난방 배관 모두 누수 가능성이 있습니다.",
      },
    ],
    images: [
      "/IMG_1545.jpeg",
      "/IMG_1544.jpeg",
    ],
  },

  "bathroom-leak": {
    name: "욕실누수",
    intro:
      "욕실누수는 급수배관뿐 아니라 배수구 주변, 바닥 방수층, 벽과 바닥의 접합부에서도 발생할 수 있습니다. 샤워와 배수 시점을 구분해 증상을 확인하는 것이 중요합니다.",
    checks: [
      "샤워 후 아래층 누수 여부",
      "배수구 주변과 바닥 방수층",
      "욕실 급수·배수배관",
      "벽과 바닥의 접합부",
    ],
    signs: [
      "샤워 후 아래층 천장 물방울",
      "욕실 사용 후 심해지는 누수",
      "배수구 주변 지속적인 습기",
      "화장실 아래층 천장 얼룩",
    ],
    faqs: [
      {
        q: "욕실누수는 방수 문제인가요?",
        a: "배관이나 배수구 문제일 수도 있으므로 사용 상황과 구조를 함께 확인해야 합니다.",
      },
      {
        q: "욕실 전체를 철거해야 하나요?",
        a: "원인과 현장 상태를 확인한 뒤 필요한 범위를 판단합니다.",
      },
      {
        q: "아랫집 천장에만 증상이 보일 수도 있나요?",
        a: "네. 위층 욕실의 누수가 아래층 천장에서 먼저 발견되기도 합니다.",
      },
    ],
    images: [
      "/IMG_1547.jpeg",
      "/IMG_1546.jpeg",
    ],
  },

  "ceiling-leak": {
    name: "천장누수",
    intro:
      "천장 물자국은 위층 욕실·배관, 옥상 방수층, 외벽 등 여러 경로에서 유입된 물로 생길 수 있습니다. 날씨와 위층 물 사용 상황을 함께 확인합니다.",
    checks: [
      "천장 얼룩과 마감재 상태",
      "위층 수도·욕실 사용 시점",
      "옥상·외벽의 빗물 유입",
      "배관과 방수층의 누수 가능성",
    ],
    signs: [
      "천장에 번지는 갈색 얼룩",
      "천장에서 떨어지는 물방울",
      "도배지나 천장 마감재 들뜸",
      "비 온 뒤 생기는 천장 습기",
    ],
    faqs: [
      {
        q: "천장누수는 윗집 책임인가요?",
        a: "물자국 위치만으로 원인이나 책임을 확정할 수 없습니다. 유입 경로 확인이 먼저입니다.",
      },
      {
        q: "비 올 때만 새면 무엇을 확인하나요?",
        a: "옥상·외벽·창틀 등 외부 방수와 유입 경로를 확인합니다.",
      },
      {
        q: "물방울이 없어도 점검해야 하나요?",
        a: "얼룩이 커지거나 습기가 반복되면 원인 확인이 필요할 수 있습니다.",
      },
    ],
    images: [
      "/IMG_1546.jpeg",
      "/IMG_1548.jpeg",
      "/IMG_1549.jpeg",
    ],
  },

  "water-leak": {
    name: "수도누수",
    intro:
      "수도누수는 눈에 보이는 물보다 수도요금 증가나 계량기 움직임으로 먼저 발견되는 경우가 있습니다. 급수배관과 수도기기 사용 상태를 구분해 확인합니다.",
    checks: [
      "모든 수도를 잠근 뒤 계량기 확인",
      "직수·온수배관 상태",
      "최근 수도 사용량 변화",
      "벽·바닥 내부 습기",
    ],
    signs: [
      "물을 쓰지 않아도 계량기 회전",
      "예상보다 높은 수도요금",
      "벽이나 바닥의 젖은 부분",
      "급수배관 주변 누수 의심",
    ],
    faqs: [
      {
        q: "수도요금이 많이 나오면 누수인가요?",
        a: "사용량 증가 등 다른 이유도 있으므로 계량기와 사용 상황을 함께 확인해야 합니다.",
      },
      {
        q: "수도누수가 벽 안에서도 발생하나요?",
        a: "네. 매립된 급수배관에서 발생할 수 있습니다.",
      },
      {
        q: "계량기 확인만으로 위치를 알 수 있나요?",
        a: "계량기는 누수 가능성 판단에 도움을 주지만 정확한 위치 확인에는 추가 점검이 필요할 수 있습니다.",
      },
    ],
    images: [
      "/IMG_1544.jpeg",
      "/IMG_1545.jpeg",
    ],
  },

  "apartment-leak": {
    name: "아파트누수",
    intro:
      "아파트 세대 간 누수는 욕실 방수층, 급수·배수배관, 외벽 등 다양한 원인이 있을 수 있습니다. 위층과 아래층에서 나타나는 증상을 함께 비교하는 것이 중요합니다.",
    checks: [
      "위·아래층 누수 위치 비교",
      "욕실·주방 물 사용과의 연관성",
      "배관·방수층 상태",
      "관리사무소 확인 내용",
    ],
    signs: [
      "아랫집에서 누수 연락",
      "위층 물 사용 후 천장 얼룩",
      "욕실·베란다 주변 습기",
      "세대 간 누수 원인 확인 필요",
    ],
    faqs: [
      {
        q: "아랫집에 물이 새면 우리 집이 원인인가요?",
        a: "반드시 그렇지는 않으며 실제 유입 경로를 확인해야 합니다.",
      },
      {
        q: "관리사무소에 먼저 문의해도 되나요?",
        a: "네. 확인한 내용과 사진을 함께 준비하면 상담에 도움이 됩니다.",
      },
      {
        q: "아파트 욕실누수도 배관 문제일 수 있나요?",
        a: "네. 방수층 외에도 급수·배수배관이 원인일 수 있습니다.",
      },
    ],
    images: [
      "/IMG_1546.jpeg",
      "/IMG_1547.jpeg",
    ],
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

/* =========================================
   시공 가능 지역
========================================= */

const REGIONS = {
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
} as const;

type RegionKey = keyof typeof REGIONS;

type Params = {
  service: string;
  region: string;
  district: string;
};

type Props = {
  params: Promise<Params>;
};

/* =========================================
   URL 유효성 검사
========================================= */

function resolve(p: Params) {
  if (
    !Object.prototype.hasOwnProperty.call(
      SERVICES,
      p.service
    ) ||
    !Object.prototype.hasOwnProperty.call(
      REGIONS,
      p.region
    )
  ) {
    return null;
  }

  const service = p.service as ServiceKey;
  const region = p.region as RegionKey;

  const districts = REGIONS[region]
    .districts as Record<string, string>;

  const district = districts[p.district];

  if (!district) {
    return null;
  }

  return {
    service,
    region,
    district,
    data: SERVICES[service],
    regionName: REGIONS[region].name,
    districts,
  };
}

/* =========================================
   정적 페이지 생성
========================================= */

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return Object.entries(REGIONS).flatMap(
    ([region, info]) =>
      Object.keys(info.districts).flatMap(
        (district) =>
          Object.keys(SERVICES).map(
            (service) => ({
              service,
              region,
              district,
            })
          )
      )
  );
}

/* =========================================
   지역별 메타데이터
========================================= */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const p = await params;
  const r = resolve(p);

  if (!r) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title =
    `${r.district} ${r.data.name} | 누수 원인 점검·상담`;

  const description =
    `${r.regionName} ${r.district} ${r.data.name} 상담. ` +
    `${r.data.intro} ` +
    `누수대학 대표 ${OWNER}, ${PHONE_TEXT}.`;

  const url =
    `${SITE}/services/${p.service}/${p.region}/${p.district}`;

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
      title: `${title} | ${COMPANY}`,
      description,
      url,
      type: "website",
      siteName: COMPANY,
      locale: "ko_KR",

      images: [
        {
          url: r.data.images[0],
          alt: `${r.data.name} 관련 작업 참고 사진`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${COMPANY}`,
      description,
      images: [r.data.images[0]],
    },
  };
}

/* =========================================
   공통 스타일
========================================= */

const css = {
  wrap: {
    maxWidth: 1080,
    margin: "0 auto",
    padding: "0 20px",
  } as const,

  card: {
    background: "#ffffff",
    border: "1px solid #dce5ee",
    borderRadius: 18,
    padding: 22,
  } as const,

  section: {
    padding: "58px 0",
  } as const,

  link: {
    color: "#0b5ca7",
    textDecoration: "none",
    fontWeight: 700,
  } as const,
};

/* =========================================
   지역별 상세페이지
========================================= */

export default async function Page({
  params,
}: Props) {
  const p = await params;
  const r = resolve(p);

  if (!r) {
    notFound();
  }

  const url =
    `${SITE}/services/${p.service}/${p.region}/${p.district}`;

  const title = `${r.district} ${r.data.name}`;

  const otherServices = Object.entries(
    SERVICES
  ).filter(([key]) => key !== p.service);

  const otherDistricts = Object.entries(
    r.districts
  ).filter(([key]) => key !== p.district);

  /* =====================================
     구조화 데이터
  ===================================== */

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: title,
      serviceType: r.data.name,
      description: r.data.intro,
      url,

      areaServed: {
        "@type": "AdministrativeArea",
        name: `${r.regionName} ${r.district}`,
      },

      provider: {
        "@id": `${SITE}/#business`,
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: COMPANY,
          item: SITE,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: r.data.name,
          item: `${SITE}/services/${p.service}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: url,
        },
      ],
    },
  ];

  return (
    <main
      style={{
        fontFamily:
          '"Pretendard","Apple SD Gothic Neo",sans-serif',
        color: "#122238",
        background: "#f5f8fc",
        minHeight: "100vh",
        paddingBottom: 70,
      }}
    >
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      ))}

      {/* HEADER */}

      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5ebf1",
        }}
      >
        <div
          style={{
            ...css.wrap,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 16,
            paddingBottom: 16,
            gap: 12,
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: 24,
              fontWeight: 900,
              color: "#0b2c4c",
              textDecoration: "none",
            }}
          >
            💧 누수대학
          </Link>

          <a
            href={`tel:${PHONE}`}
            style={{
              background: "#0874d9",
              color: "#ffffff",
              padding: "11px 15px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            전화상담
          </a>
        </div>
      </header>

      {/* BREADCRUMB */}

      <nav
        aria-label="현재 위치"
        style={{
          ...css.wrap,
          paddingTop: 16,
          paddingBottom: 16,
          fontSize: 14,
        }}
      >
        <Link href="/" style={css.link}>
          홈
        </Link>
        {" / "}
        <Link
          href={`/services/${p.service}`}
          style={css.link}
        >
          {r.data.name}
        </Link>
        {" / "}
        {r.district}
      </nav>

      {/* HERO */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#071b34,#0874d9)",
          color: "#ffffff",
          padding: "75px 0",
        }}
      >
        <div style={css.wrap}>
          <p
            style={{
              color: "#c9e6ff",
              fontWeight: 800,
              margin: "0 0 14px",
            }}
          >
            {r.regionName} {r.district} 누수 상담
          </p>

          <h1
            style={{
              fontSize: "clamp(36px,7vw,58px)",
              lineHeight: 1.2,
              letterSpacing: "-2px",
              margin: 0,
              fontWeight: 900,
            }}
          >
            {title}
          </h1>

          <p
            style={{
              maxWidth: 750,
              fontSize: 17,
              lineHeight: 1.9,
              color: "#e2efff",
              marginTop: 22,
            }}
          >
            {r.data.intro}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 28,
            }}
          >
            <a
              href={`tel:${PHONE}`}
              style={{
                background: "#ffffff",
                color: "#07549a",
                padding: "15px 23px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              📞 {PHONE_TEXT}
            </a>

            <a
              href={SMS}
              style={{
                background: "#111827",
                color: "#ffffff",
                padding: "15px 23px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              💬 문자 문의
            </a>
          </div>
        </div>
      </section>

      {/* 지역별 상담 안내 */}

      <section
        style={{
          ...css.section,
          background: "#ffffff",
        }}
      >
        <div style={css.wrap}>
          <h2 style={{ fontSize: 30 }}>
            {r.district} {r.data.name} 상담 안내
          </h2>

          <div style={css.card}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.9,
                marginTop: 0,
              }}
            >
              {r.regionName} {r.district}에서{" "}
              {r.data.name} 상담이 필요하다면
              누수 발생 위치와 처음 발견한 시점을
              알려주세요.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.9,
                marginBottom: 0,
              }}
            >
              {r.data.intro}
            </p>
          </div>
        </div>
      </section>

      {/* 주요 점검 항목 */}

      <section style={css.section}>
        <div style={css.wrap}>
          <h2 style={{ fontSize: 30 }}>
            {r.data.name} 주요 점검 항목
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(240px,1fr))",
              gap: 14,
            }}
          >
            {r.data.checks.map((item, index) => (
              <article
                key={item}
                style={css.card}
              >
                <span
                  style={{
                    color: "#0874d9",
                    fontSize: 13,
                    fontWeight: 900,
                  }}
                >
                  CHECK {index + 1}
                </span>

                <h3
                  style={{
                    fontSize: 17,
                    lineHeight: 1.7,
                    marginBottom: 0,
                  }}
                >
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 증상 */}

      <section
        style={{
          ...css.section,
          background: "#ffffff",
        }}
      >
        <div style={css.wrap}>
          <h2 style={{ fontSize: 30 }}>
            {r.district} {r.data.name} 의심 증상
          </h2>

          <ul
            style={{
              ...css.card,
              paddingLeft: 42,
              lineHeight: 2.3,
            }}
          >
            {r.data.signs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 작업 참고 사진 */}

      <section
        style={{
          ...css.section,
          background: "#eaf3fc",
        }}
      >
        <div style={css.wrap}>
          <h2 style={{ fontSize: 30 }}>
            {r.data.name} 관련 실제 작업 참고 사진
          </h2>

          <p
            style={{
              color: "#475569",
              lineHeight: 1.8,
            }}
          >
            아래 사진은 누수대학의 작업 참고
            사진입니다. 현재 보고 계신{" "}
            {r.district} 지역에서 촬영한 사례라는
            의미는 아닙니다.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: 16,
            }}
          >
            {r.data.images.map((src, i) => (
              <figure
                key={src}
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  overflow: "hidden",
                  margin: 0,
                  border: "1px solid #d9e3ed",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                  }}
                >
                  <Image
                    src={src}
                    alt={`${r.data.name} 관련 작업 참고 사진 ${i + 1}`}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>

                <figcaption
                  style={{
                    padding: 16,
                    color: "#475569",
                    fontSize: 14,
                  }}
                >
                  누수대학 {r.data.name} 관련 작업
                  참고 사진 {i + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 절차 */}

      <section
        style={{
          ...css.section,
          background: "#ffffff",
        }}
      >
        <div style={css.wrap}>
          <h2 style={{ fontSize: 30 }}>
            {r.district} {r.data.name} 상담 절차
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: 14,
            }}
          >
            {[
              {
                number: "01",
                title: "상담 접수",
                text: "지역과 누수 증상을 알려주세요.",
              },
              {
                number: "02",
                title: "증상 확인",
                text: "누수 위치와 발생 시점을 확인합니다.",
              },
              {
                number: "03",
                title: "점검 방향 안내",
                text: "배관·방수층 등 가능한 원인을 살펴봅니다.",
              },
              {
                number: "04",
                title: "작업 범위 상담",
                text: "현장 상태에 따른 필요한 작업을 안내합니다.",
              },
            ].map((step) => (
              <article
                key={step.number}
                style={css.card}
              >
                <div
                  style={{
                    color: "#0874d9",
                    fontWeight: 900,
                    fontSize: 13,
                  }}
                >
                  STEP {step.number}
                </div>

                <h3 style={{ fontSize: 19 }}>
                  {step.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: 1.8,
                    marginBottom: 0,
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

      <section style={css.section}>
        <div style={css.wrap}>
          <h2 style={{ fontSize: 30 }}>
            {r.district} {r.data.name} 자주 묻는 질문
          </h2>

          <div
            style={{
              display: "grid",
              gap: 14,
            }}
          >
            {r.data.faq.map(({ q, a }) => (
              <article
                key={q}
                style={{
                  ...css.card,
                  background: "#ffffff",
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    marginTop: 0,
                  }}
                >
                  Q. {q}
                </h3>

                <p
                  style={{
                    lineHeight: 1.85,
                    marginBottom: 0,
                    color: "#475569",
                  }}
                >
                  A. {a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 같은 지역 다른 서비스 */}

      <section
        style={{
          ...css.section,
          background: "#ffffff",
        }}
      >
        <div style={css.wrap}>
          <h2 style={{ fontSize: 28 }}>
            {r.district} 다른 누수 서비스
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {otherServices.map(([slug, item]) => (
              <Link
                key={slug}
                href={`/services/${slug}/${p.region}/${p.district}`}
                style={{
                  ...css.link,
                  ...css.card,
                  padding: "12px 15px",
                }}
              >
                {r.district} {item.name}
              </Link>
            ))}
          </div>

          <h2
            style={{
              fontSize: 28,
              marginTop: 42,
            }}
          >
            {r.regionName} 다른 지역{" "}
            {r.data.name}
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {otherDistricts.map(([slug, name]) => (
              <Link
                key={slug}
                href={`/services/${p.service}/${p.region}/${slug}`}
                style={{
                  ...css.link,
                  ...css.card,
                  padding: "10px 13px",
                  fontSize: 14,
                }}
              >
                {name} {r.data.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 CTA */}

      <section
        style={{
          background: "#0866bb",
          color: "#ffffff",
          padding: "55px 0",
          textAlign: "center",
        }}
      >
        <div style={css.wrap}>
          <h2 style={{ fontSize: 32 }}>
            {r.district} {r.data.name} 상담
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            누수 위치와 발생 시점을 알려주시면
            상담에 도움이 됩니다.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <a
              href={`tel:${PHONE}`}
              style={{
                display: "inline-block",
                padding: "14px 24px",
                borderRadius: 12,
                background: "#ffffff",
                color: "#07549a",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              📞 {PHONE_TEXT}
            </a>

            <a
              href={SMS}
              style={{
                display: "inline-block",
                padding: "14px 24px",
                borderRadius: 12,
                background: "#111827",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              💬 문자 문의
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          background: "#071827",
          color: "#cbd5e1",
          padding: "30px 20px 45px",
          lineHeight: 1.9,
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
          }}
        >
          <strong
            style={{
              color: "#ffffff",
              fontSize: 20,
            }}
          >
            {COMPANY}
          </strong>

          <div>대표자: {OWNER}</div>
          <div>대표전화: {PHONE_TEXT}</div>
          <div>홈페이지: www.nusudaehak.com</div>
        </div>
      </footer>

      {/* 하단 고정 상담 버튼 */}

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          zIndex: 50,
          boxShadow: "0 -4px 16px #0002",
        }}
      >
        <a
          href={`tel:${PHONE}`}
          style={{
            background: "#0874d9",
            color: "#ffffff",
            textAlign: "center",
            padding: 16,
            textDecoration: "none",
            fontWeight: 900,
          }}
        >
          📞 전화상담
        </a>

        <a
          href={SMS}
          style={{
            background: "#111827",
            color: "#ffffff",
            textAlign: "center",
            padding: 16,
            textDecoration: "none",
            fontWeight: 900,
          }}
        >
          💬 문자상담
        </a>
      </div>
    </main>
  );
}
