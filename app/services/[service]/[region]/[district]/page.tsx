import Link from "next/link";
import { notFound } from "next/navigation";

/* =====================================
   기본 정보
===================================== */

const SITE_URL = "https://www.nusudaehak.com";

const COMPANY = "누수대학";
const OWNER = "김대식";

const PHONE = "01039256115";
const PHONE_DISPLAY = "010-3925-6115";

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
   서비스
===================================== */

const SERVICES = {
  "leak-detection": {
    title: "누수탐지",
    icon: "🔎",
    description:
      "눈에 보이지 않는 누수 원인과 발생 위치를 확인하고 현장 상황에 맞는 작업 방향을 안내합니다.",
  },

  "pipe-leak": {
    title: "배관누수",
    icon: "🔧",
    description:
      "급수관 및 각종 배관에서 발생하는 누수를 확인하고 문제 위치에 맞게 보수 작업을 안내합니다.",
  },

  "bathroom-leak": {
    title: "욕실누수",
    icon: "🚿",
    description:
      "욕실 바닥, 배관, 배수구, 방수층 등 다양한 원인을 확인하여 누수 가능성을 점검합니다.",
  },

  "ceiling-leak": {
    title: "천장누수",
    icon: "💧",
    description:
      "천장 얼룩과 물 떨어짐 등 누수 증상을 확인하고 상부 누수 원인을 점검합니다.",
  },

  "water-leak": {
    title: "수도누수",
    icon: "🚰",
    description:
      "수도계량기 움직임과 급수 배관 상태 등을 확인하여 수도누수 가능성을 점검합니다.",
  },

  "apartment-leak": {
    title: "아파트누수",
    icon: "🏢",
    description:
      "아파트 세대 간 누수와 욕실, 주방, 배관 등 다양한 누수 원인을 확인합니다.",
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

/* =====================================
   지역
===================================== */

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

/* =====================================
   메타데이터 자동 생성
===================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    service: string;
    region: string;
    district: string;
  }>;
}) {
  const { service, region, district } = await params;

  if (!(service in SERVICES)) {
    return {};
  }

  if (!(region in REGIONS)) {
    return {};
  }

  const serviceData = SERVICES[service as ServiceKey];
  const regionData = REGIONS[region as RegionKey];

  if (!(district in regionData.districts)) {
    return {};
  }

  const districtName =
    regionData.districts[
      district as keyof typeof regionData.districts
    ];

  const title = `${districtName} ${serviceData.title} | 누수대학`;

  const description =
    `${districtName} ${serviceData.title} 상담. ` +
    `${serviceData.description} ` +
    `누수대학 대표전화 ${PHONE_DISPLAY}.`;

  return {
    title,
    description,

    alternates: {
      canonical:
        `${SITE_URL}/services/${service}/${region}/${district}`,
    },

    openGraph: {
      title,
      description,
      url:
        `${SITE_URL}/services/${service}/${region}/${district}`,
      siteName: COMPANY,
      locale: "ko_KR",
      type: "website",
    },
  };
}

/* =====================================
   페이지
===================================== */

export default async function ServiceRegionPage({
  params,
}: {
  params: Promise<{
    service: string;
    region: string;
    district: string;
  }>;
}) {
  const { service, region, district } = await params;

  if (!(service in SERVICES)) {
    notFound();
  }

  if (!(region in REGIONS)) {
    notFound();
  }

  const serviceData = SERVICES[service as ServiceKey];
  const regionData = REGIONS[region as RegionKey];

  if (!(district in regionData.districts)) {
    notFound();
  }

  const districtName =
    regionData.districts[
      district as keyof typeof regionData.districts
    ];

  const fullArea = `${regionData.name} ${districtName}`;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fbff",
        color: "#0f172a",
        fontFamily:
          '"Pretendard", "Apple SD Gothic Neo", Arial, sans-serif',
      }}
    >
      {/* =====================================
          상단
      ===================================== */}

      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "15px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
              color: "#ffffff",
              background: "#086bd8",
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

      {/* =====================================
          HERO
      ===================================== */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#06376c 0%,#0869d8 55%,#25a9f6 100%)",
          color: "#ffffff",
          padding: "64px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "880px",
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
            {fullArea} 누수 전문
          </div>

          <div
            style={{
              fontSize: "47px",
              marginBottom: "12px",
            }}
          >
            {serviceData.icon}
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(38px,8vw,65px)",
              lineHeight: 1.15,
              letterSpacing: "-3px",
            }}
          >
            {districtName} {serviceData.title}
          </h1>

          <p
            style={{
              margin: "19px auto 0",
              maxWidth: "720px",
              color: "#e5f3ff",
              lineHeight: 1.8,
              fontSize: "17px",
            }}
          >
            {fullArea} 지역에서 {serviceData.title}이 필요하신가요?
            <br />
            현재 누수 증상과 현장 상황을 확인하고
            필요한 작업을 안내해드립니다.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "11px",
              marginTop: "27px",
            }}
          >
            <a
              href={PHONE_LINK}
              style={{
                textDecoration: "none",
                background: "#ffffff",
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
                color: "#ffffff",
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

      {/* =====================================
          지역 서비스 설명
      ===================================== */}

      <section
        style={{
          padding: "60px 20px",
          background: "#ffffff",
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
              fontSize: "32px",
              margin: "0 0 25px",
              letterSpacing: "-1.5px",
            }}
          >
            {districtName} {serviceData.title} 안내
          </h2>

          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "28px",
              lineHeight: 1.9,
              fontSize: "16px",
              color: "#334155",
            }}
          >
            <p style={{ marginTop: 0 }}>
              누수는 발생 위치와 원인이 다양하기 때문에
              증상만 보고 정확한 원인을 판단하기 어려울 수 있습니다.
            </p>

            <p>
              누수대학은 {districtName} 지역의
              {" "}
              <strong>{serviceData.title}</strong>
              {" "}
              상담을 진행하며 현장 상황을 확인한 뒤
              필요한 점검과 작업 방향을 안내합니다.
            </p>

            <p style={{ marginBottom: 0 }}>
              천장 얼룩, 벽면 습기, 수도요금 증가,
              계량기 회전, 아랫집 누수 등 이상 증상이 있다면
              방치하지 말고 확인해보는 것이 좋습니다.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          대표 증상
      ===================================== */}

      <section
        style={{
          padding: "60px 20px",
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
              marginBottom: "28px",
            }}
          >
            이런 증상이 있다면 상담해보세요
          </h2>

          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "25px",
              boxShadow:
                "0 8px 25px rgba(15,23,42,.06)",
            }}
          >
            {[
              "수도요금이 평소보다 갑자기 증가했다",
              "물을 사용하지 않아도 수도계량기가 움직인다",
              "천장 또는 벽에 물 얼룩이 생겼다",
              "바닥이나 벽에서 습기가 올라온다",
              "아랫집에서 물이 샌다고 연락이 왔다",
              "누수 위치가 정확히 확인되지 않는다",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "14px 0",
                  borderBottom: "1px solid #edf2f7",
                  fontWeight: 700,
                  lineHeight: 1.6,
                }}
              >
                ✅ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          작업 과정
      ===================================== */}

      <section
        style={{
          padding: "60px 20px",
          background: "#ffffff",
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
              fontSize: "31px",
              marginBottom: "30px",
            }}
          >
            {districtName} {serviceData.title} 진행 과정
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
              ["01", "상담 접수", "지역과 현재 누수 증상을 확인합니다."],
              ["02", "현장 확인", "현장의 누수 흔적과 상태를 확인합니다."],
              ["03", "원인 점검", "누수 발생 원인과 위치를 점검합니다."],
              ["04", "보수 안내", "필요한 작업 범위와 방법을 안내합니다."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "18px",
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
                  STEP {number}
                </div>

                <h3
                  style={{
                    margin: "10px 0 8px",
                    fontSize: "20px",
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#64748b",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          다른 서비스
      ===================================== */}

      <section
        style={{
          padding: "60px 20px",
          background: "#f1f7fc",
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
              fontSize: "30px",
              marginBottom: "26px",
            }}
          >
            {districtName} 다른 누수 서비스
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {Object.entries(SERVICES).map(
              ([serviceSlug, item]) => (
                <Link
                  key={serviceSlug}
                  href={`/services/${serviceSlug}/${region}/${district}`}
                  style={{
                    textDecoration: "none",
                    background:
                      serviceSlug === service
                        ? "#086bd8"
                        : "#ffffff",
                    color:
                      serviceSlug === service
                        ? "#ffffff"
                        : "#164e87",
                    border: "1px solid #cce7ff",
                    padding: "11px 15px",
                    borderRadius: "10px",
                    fontWeight: 800,
                    fontSize: "14px",
                  }}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================
          상담
      ===================================== */}

      <section
        style={{
          background: "#0c3765",
          color: "#ffffff",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            margin: "0 0 12px",
          }}
        >
          {districtName} {serviceData.title} 상담
        </h2>

        <p
          style={{
            color: "#dcecff",
            lineHeight: 1.7,
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
            gap: "11px",
            flexWrap: "wrap",
            marginTop: "24px",
          }}
        >
          <a
            href={PHONE_LINK}
            style={{
              background: "#ffffff",
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
              color: "#ffffff",
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

      {/* =====================================
          Footer
      ===================================== */}

      <footer
        style={{
          background: "#081f38",
          color: "#b9cadd",
          padding: "32px 20px 95px",
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
              color: "#ffffff",
              fontSize: "20px",
            }}
          >
            {COMPANY}
          </strong>

          <div style={{ marginTop: "8px" }}>
            대표자 : {OWNER}
          </div>

          <div>대표전화 : {PHONE_DISPLAY}</div>

          <div>홈페이지 : nusudaehak.com</div>
        </div>
      </footer>

      {/* =====================================
          모바일 고정버튼
      ===================================== */}

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
            color: "#ffffff",
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
            color: "#ffffff",
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
