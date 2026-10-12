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
   서비스 데이터
===================================== */

const SERVICES = {
  "leak-detection": {
    title: "누수탐지",
    icon: "🔎",
    short:
      "눈에 보이지 않는 누수 위치와 원인을 확인합니다.",
    intro:
      "누수는 물이 보이는 위치와 실제 원인이 다른 경우가 많아 정확한 점검이 중요합니다.",
    symptoms: [
      "물을 사용하지 않아도 수도계량기가 움직이는 경우",
      "수도요금이 갑자기 증가한 경우",
      "벽이나 바닥에서 습기가 올라오는 경우",
      "누수 위치가 정확히 확인되지 않는 경우",
      "아랫집에서 누수 연락을 받은 경우",
    ],
  },

  "pipe-leak": {
    title: "배관누수",
    icon: "🔧",
    short:
      "급수관과 각종 배관에서 발생하는 누수를 확인합니다.",
    intro:
      "배관누수는 벽이나 바닥 내부에서 발생해 외부 증상만으로는 원인 파악이 어려울 수 있습니다.",
    symptoms: [
      "배관 주변에 지속적으로 물이 고이는 경우",
      "벽 안쪽이나 바닥 아래에서 물소리가 나는 경우",
      "수도 사용량이 비정상적으로 늘어난 경우",
      "배관 연결부 주변이 젖어 있는 경우",
      "노후 배관에서 누수가 의심되는 경우",
    ],
  },

  "bathroom-leak": {
    title: "욕실누수",
    icon: "🚿",
    short:
      "욕실 바닥, 배수구, 배관, 방수층을 점검합니다.",
    intro:
      "욕실 누수는 배관뿐 아니라 배수구, 방수층, 실리콘 마감 등 여러 원인에서 발생할 수 있습니다.",
    symptoms: [
      "샤워 후 아래층 천장에 물이 생기는 경우",
      "욕실 바닥이 계속 젖어 있는 경우",
      "욕실 벽면에 습기나 곰팡이가 생기는 경우",
      "배수구 주변에서 물이 새는 경우",
      "욕실 사용 후 누수 증상이 심해지는 경우",
    ],
  },

  "ceiling-leak": {
    title: "천장누수",
    icon: "💧",
    short:
      "천장 얼룩과 물 떨어짐의 원인을 확인합니다.",
    intro:
      "천장에 보이는 물 얼룩은 윗집 배관, 욕실, 외부 유입 등 다양한 원인으로 발생할 수 있습니다.",
    symptoms: [
      "천장에 노란색 또는 갈색 얼룩이 생긴 경우",
      "천장에서 물방울이 떨어지는 경우",
      "천장 도배가 들뜨거나 변색되는 경우",
      "비가 온 뒤 누수 증상이 나타나는 경우",
      "윗집 물 사용 후 누수가 발생하는 경우",
    ],
  },

  "water-leak": {
    title: "수도누수",
    icon: "🚰",
    short:
      "수도계량기와 급수 배관 상태를 확인합니다.",
    intro:
      "수도누수는 눈에 잘 보이지 않아 수도요금 증가나 계량기 움직임으로 처음 발견되는 경우가 많습니다.",
    symptoms: [
      "모든 수도를 잠가도 계량기가 움직이는 경우",
      "수도요금이 평소보다 많이 나온 경우",
      "수도 압력이 갑자기 약해진 경우",
      "바닥이나 벽에서 물이 스며 나오는 경우",
      "급수 배관 누수가 의심되는 경우",
    ],
  },

  "apartment-leak": {
    title: "아파트누수",
    icon: "🏢",
    short:
      "아파트 세대 간 누수와 배관 문제를 확인합니다.",
    intro:
      "아파트 누수는 세대 간 피해로 이어질 수 있어 원인 확인과 초기 대응이 중요합니다.",
    symptoms: [
      "아랫집 천장에서 물이 떨어지는 경우",
      "윗집 누수가 의심되는 경우",
      "욕실 또는 주방 주변에서 물이 새는 경우",
      "천장이나 벽에 누수 흔적이 생긴 경우",
      "세대 간 누수 원인을 확인해야 하는 경우",
    ],
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

/* =====================================
   지역 데이터
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
   지역별 문구 차별화
===================================== */

const AREA_TEXT: Record<string, string> = {
  jongno:
    "주택과 상가, 오래된 건물이 혼재한 지역 특성상 배관 노후와 천장 누수 상담이 자주 발생할 수 있습니다.",
  jung:
    "상가와 오피스, 주거시설이 함께 있는 지역으로 배관과 천장 누수 증상을 꼼꼼히 확인하는 것이 중요합니다.",
  yongsan:
    "아파트와 주택, 상가가 함께 분포해 있어 누수 발생 위치와 건물 구조를 함께 확인하는 것이 좋습니다.",
  seongdong:
    "아파트와 주거시설이 많은 지역으로 세대 간 누수와 욕실·배관 문제를 확인하는 경우가 많습니다.",
  gwangjin:
    "주택과 아파트가 함께 있는 지역으로 욕실누수와 배관누수 등 다양한 유형의 누수 점검이 필요할 수 있습니다.",
  dongdaemun:
    "구축 주택과 상가, 아파트가 함께 있어 노후 배관과 천장 물샘 증상을 꼼꼼히 확인해야 합니다.",
  seongbuk:
    "주택 밀집 지역과 아파트가 함께 있어 벽면 습기와 배관 누수 등 여러 원인을 함께 살펴봐야 합니다.",
  mapo:
    "주거시설과 상가가 밀집한 지역으로 천장 누수와 욕실 누수 등 다양한 원인 점검이 필요할 수 있습니다.",
  seodaemun:
    "주택과 아파트, 상가가 함께 있는 지역으로 배관 상태와 누수 발생 위치를 함께 확인하는 것이 중요합니다.",
  yeongdeungpo:
    "아파트와 오피스, 상가가 많은 지역으로 세대 간 누수와 배관 누수 상담이 자주 발생할 수 있습니다.",
  dongjak:
    "주거지역이 많은 편이라 욕실 누수와 세대 간 천장 누수 등을 확인하는 경우가 많습니다.",
  gwanak:
    "다세대 주택과 아파트가 혼재해 있어 누수 위치와 건물 구조를 함께 확인해야 정확한 판단이 가능합니다.",
  seocho:
    "아파트와 오피스텔이 많은 지역으로 세대 간 누수와 욕실·배관 누수 원인을 정확히 구분하는 것이 중요합니다.",
  gangnam:
    "아파트와 상업시설이 많은 지역으로 천장 누수, 배관 누수, 세대 간 누수 등 다양한 유형의 점검이 필요할 수 있습니다.",

  bucheon:
    "아파트와 다세대 주택이 많은 지역으로 욕실·배관·천장 누수 원인을 함께 점검하는 것이 중요합니다.",
  siheung:
    "신축과 구축 주거시설이 함께 있어 누수 발생 원인에 따라 배관과 방수 상태를 함께 확인해야 합니다.",
  ansan:
    "아파트와 상가, 주택이 함께 분포해 있어 수도누수와 배관누수 등 다양한 원인 점검이 필요할 수 있습니다.",
  anyang:
    "아파트와 주거시설이 많은 지역으로 세대 간 누수와 욕실 누수 상담이 자주 발생할 수 있습니다.",
  suwon:
    "아파트와 주택, 상업시설이 넓게 분포해 있어 현장 구조에 맞춘 누수 원인 확인이 중요합니다.",
  hwaseong:
    "신축 아파트와 주택이 함께 있는 지역으로 누수 증상에 따라 배관, 욕실, 천장 상태를 함께 점검하는 것이 좋습니다.",
  pyeongtaek:
    "아파트와 주택, 상가가 함께 있어 배관누수와 수도누수 등 다양한 누수 원인을 확인할 필요가 있습니다.",
  uiwang:
    "아파트와 주거시설 중심 지역으로 세대 간 누수와 욕실·배관 누수 상담이 발생할 수 있습니다.",
  gimpo:
    "신축 아파트와 주거시설이 많은 지역으로 세대 간 누수와 배관 상태를 함께 확인하는 것이 중요합니다.",
  paju:
    "아파트와 단독주택이 함께 분포해 있어 누수 발생 위치와 건물 구조에 따른 점검이 필요합니다.",
  gwangmyeong:
    "아파트와 다세대 주택이 많은 지역으로 천장누수와 욕실누수 등 세대 간 문제를 확인하는 경우가 많습니다.",
  gwacheon:
    "아파트와 주거시설이 많은 지역으로 누수 발생 원인과 위치를 정확하게 구분하는 것이 중요합니다.",

  gyeyang:
    "아파트와 주택이 함께 있는 지역으로 배관누수와 욕실누수 등 다양한 누수 점검이 필요할 수 있습니다.",
  bupyeong:
    "구축 아파트와 주택이 많은 지역으로 노후 배관과 세대 간 누수 원인을 함께 확인하는 것이 중요합니다.",
  seo:
    "신축 아파트와 주거시설이 늘어난 지역으로 욕실·배관·천장 누수 등 다양한 원인을 확인할 수 있습니다.",
  namdong:
    "아파트와 상가, 주택이 함께 있는 지역으로 세대 간 누수와 배관누수 상담이 자주 발생할 수 있습니다.",
};

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

  const title =
    `${districtName} ${serviceData.title} | 누수대학`;

  const description =
    `${districtName} ${serviceData.title} 상담. ` +
    `${serviceData.short} ` +
    `서울·경기·인천 주요 지역 출장.`;

  const canonical =
    `${SITE_URL}/services/${service}/${region}/${district}`;

  return {
    title,

    description,

    alternates: {
      canonical,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: COMPANY,
      locale: "ko_KR",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =====================================
   지역 상세 페이지
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

  const areaText =
    AREA_TEXT[district] ??
    `${districtName} 지역은 주택과 아파트, 상가 등 다양한 건물이 있어 누수 원인에 따라 현장 상태를 꼼꼼히 확인하는 것이 중요합니다.`;

  const canonical =
    `${SITE_URL}/services/${service}/${region}/${district}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${districtName} ${serviceData.title}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY,
      url: SITE_URL,
      telephone: PHONE_DISPLAY,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: fullArea,
    },
    url: canonical,
    description:
      `${districtName} ${serviceData.title} 상담. ${serviceData.short}`,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f9fc",
        color: "#0f172a",
        fontFamily:
          '"Pretendard","Apple SD Gothic Neo",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
      }}
    >
      {/* 구조화 데이터 */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* =====================================
          HEADER
      ===================================== */}

      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5eaf0",
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
              fontWeight: 950,
              fontSize: "23px",
            }}
          >
            💧 누수대학
          </Link>

          <a
            href={PHONE_LINK}
            style={{
              textDecoration: "none",
              background: "#0874d9",
              color: "#fff",
              padding: "11px 15px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 900,
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
            "linear-gradient(135deg,#071b34 0%,#0b4c8f 55%,#087ee3 100%)",
          color: "#fff",
          padding: "65px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,.12)",
              border: "1px solid rgba(255,255,255,.2)",
              fontWeight: 800,
              fontSize: "13px",
              marginBottom: "18px",
            }}
          >
            {fullArea} 누수 전문 상담
          </div>

          <div
            style={{
              fontSize: "45px",
              marginBottom: "10px",
            }}
          >
            {serviceData.icon}
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(38px,8vw,64px)",
              lineHeight: 1.15,
              letterSpacing: "-3px",
              fontWeight: 950,
            }}
          >
            {districtName} {serviceData.title}
          </h1>

          <p
            style={{
              margin: "18px auto 0",
              maxWidth: "720px",
              color: "#d7e9f8",
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            {serviceData.short}
            <br />
            현장 증상과 건물 상태를 확인한 뒤 필요한 작업 방향을 안내합니다.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "27px",
            }}
          >
            <a
              href={PHONE_LINK}
              style={{
                textDecoration: "none",
                background: "#fff",
                color: "#075cab",
                padding: "15px 23px",
                borderRadius: "12px",
                fontWeight: 950,
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
              💬 문자 문의
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          지역 특성 설명
      ===================================== */}

      <section
        style={{
          padding: "62px 20px",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              color: "#0874d9",
              fontSize: "13px",
              fontWeight: 950,
              textAlign: "center",
            }}
          >
            LOCAL SERVICE
          </div>

          <h2
            style={{
              textAlign: "center",
              margin: "8px 0 27px",
              fontSize: "33px",
              letterSpacing: "-1.7px",
            }}
          >
            {districtName} {serviceData.title} 안내
          </h2>

          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e4eaf0",
              borderRadius: "20px",
              padding: "28px",
              color: "#334155",
              lineHeight: 1.9,
              fontSize: "16px",
            }}
          >
            <p style={{ marginTop: 0 }}>
              {areaText}
            </p>

            <p>
              {serviceData.intro}
            </p>

            <p>
              누수대학은 {fullArea} 지역의{" "}
              <strong>{serviceData.title}</strong> 상담을 진행하며,
              현재 보이는 증상과 건물 구조를 확인한 뒤
              필요한 점검 범위를 안내합니다.
            </p>

            <p style={{ marginBottom: 0 }}>
              같은 누수 증상이라도 발생 원인은 다를 수 있기 때문에
              무조건 철거하거나 넓은 범위를 작업하기보다
              원인을 먼저 확인하는 과정이 중요합니다.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          증상
      ===================================== */}

      <section
        style={{
          padding: "62px 20px",
          background: "#edf5fb",
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
              margin: "0 0 27px",
              fontSize: "31px",
              letterSpacing: "-1.5px",
            }}
          >
            {districtName}에서 이런 증상이 있다면
            <br />
            {serviceData.title} 점검이 필요할 수 있습니다
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "10px 25px",
              border: "1px solid #e0e8ef",
            }}
          >
            {serviceData.symptoms.map((item, index) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  padding: "16px 0",
                  borderBottom:
                    index === serviceData.symptoms.length - 1
                      ? "none"
                      : "1px solid #edf1f5",
                }}
              >
                <div
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    background: "#e6f4ff",
                    color: "#0874d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontWeight: 950,
                    fontSize: "12px",
                  }}
                >
                  ✓
                </div>

                <div
                  style={{
                    fontWeight: 750,
                    lineHeight: 1.65,
                  }}
                >
                  {item}
                </div>
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
          padding: "62px 20px",
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
              [
                "01",
                "상담 접수",
                `${districtName} 지역과 현재 누수 증상을 확인합니다.`,
              ],
              [
                "02",
                "현장 확인",
                "물샘 흔적과 주변 상태를 확인합니다.",
              ],
              [
                "03",
                "원인 점검",
                `${serviceData.title} 원인과 발생 위치를 확인합니다.`,
              ],
              [
                "04",
                "작업 안내",
                "필요한 작업 범위와 방법을 안내합니다.",
              ],
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
                    fontSize: "13px",
                    fontWeight: 950,
                  }}
                >
                  STEP {number}
                </div>

                <h3
                  style={{
                    margin: "10px 0 7px",
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
          같은 지역 다른 서비스
      ===================================== */}

      <section
        style={{
          padding: "60px 20px",
          background: "#f1f6fb",
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
              marginBottom: "25px",
            }}
          >
            {districtName} 다른 누수 서비스
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "9px",
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
                        ? "#0874d9"
                        : "#fff",
                    color:
                      serviceSlug === service
                        ? "#fff"
                        : "#24445f",
                    border: "1px solid #d7e4ef",
                    padding: "11px 14px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontWeight: 850,
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
          인접 지역 링크
      ===================================== */}

      <section
        style={{
          padding: "60px 20px",
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
              fontSize: "29px",
              marginBottom: "24px",
            }}
          >
            {regionData.name} 다른 출장 지역
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {Object.entries(regionData.districts).map(
              ([districtSlug, name]) => (
                <Link
                  key={districtSlug}
                  href={`/services/${service}/${region}/${districtSlug}`}
                  style={{
                    textDecoration: "none",
                    padding: "10px 13px",
                    borderRadius: "9px",
                    border: "1px solid #e1e7ed",
                    background:
                      districtSlug === district
                        ? "#e7f4ff"
                        : "#f8fafc",
                    color: "#334155",
                    fontSize: "13px",
                    fontWeight: 800,
                  }}
                >
                  {name}
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
          padding: "62px 20px",
          background:
            "linear-gradient(135deg,#0759ad,#087ee3)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "34px",
            letterSpacing: "-1.5px",
          }}
        >
          {districtName} {serviceData.title} 상담
        </h2>

        <p
          style={{
            margin: "14px 0 0",
            color: "#d9ecff",
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
            gap: "10px",
            marginTop: "24px",
          }}
        >
          <a
            href={PHONE_LINK}
            style={{
              background: "#fff",
              color: "#075cab",
              textDecoration: "none",
              padding: "15px 23px",
              borderRadius: "12px",
              fontWeight: 950,
            }}
          >
            📞 {PHONE_DISPLAY}
          </a>

          <a
            href={SMS_LINK}
            style={{
              background: "#111827",
              color: "#fff",
              textDecoration: "none",
              padding: "15px 23px",
              borderRadius: "12px",
              fontWeight: 900,
            }}
          >
            💬 문자 문의
          </a>
        </div>
      </section>

      {/* =====================================
          Footer
      ===================================== */}

      <footer
        style={{
          background: "#071827",
          color: "#91a3b7",
          padding: "34px 20px 95px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            fontSize: "13px",
            lineHeight: 1.9,
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

          <div style={{ marginTop: "10px" }}>
            대표자 : {OWNER}
          </div>

          <div>대표전화 : {PHONE_DISPLAY}</div>
          <div>홈페이지 : nusudaehak.com</div>
        </div>
      </footer>

      {/* =====================================
          모바일 하단 고정
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
            background: "#0874d9",
            color: "#fff",
            textDecoration: "none",
            textAlign: "center",
            padding: "17px",
            fontWeight: 950,
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
            fontWeight: 950,
          }}
        >
          💬 문자 상담
        </a>
      </div>
    </main>
  );
}
