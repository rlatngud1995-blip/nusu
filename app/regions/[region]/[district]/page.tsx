import Link from "next/link";
import { notFound } from "next/navigation";

/* =====================================
   누수대학 기본 정보
===================================== */

const COMPANY = "누수대학";

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
   서비스 카테고리
===================================== */

const SERVICES = [
  {
    slug: "leak-detection",
    title: "누수탐지",
    icon: "🔎",
  },
  {
    slug: "pipe-leak",
    title: "배관누수",
    icon: "🔧",
  },
  {
    slug: "bathroom-leak",
    title: "욕실누수",
    icon: "🚿",
  },
  {
    slug: "ceiling-leak",
    title: "천장누수",
    icon: "💧",
  },
  {
    slug: "water-leak",
    title: "수도누수",
    icon: "🚰",
  },
  {
    slug: "apartment-leak",
    title: "아파트누수",
    icon: "🏢",
  },
];

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
   메타데이터
===================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    region: string;
    district: string;
  }>;
}) {
  const { region, district } = await params;

  if (!(region in REGIONS)) {
    return {};
  }

  const regionData = REGIONS[region as RegionKey];

  if (!(district in regionData.districts)) {
    return {};
  }

  const districtName =
    regionData.districts[
      district as keyof typeof regionData.districts
    ];

  return {
    title: `${districtName} 누수탐지·누수공사 | 누수대학`,
    description:
      `${districtName} 누수탐지, 배관누수, 욕실누수, 천장누수, 수도누수, 아파트누수 상담. ` +
      `누수대학 대표전화 ${PHONE_DISPLAY}.`,
  };
}

/* =====================================
   지역 상세페이지
===================================== */

export default async function RegionPage({
  params,
}: {
  params: Promise<{
    region: string;
    district: string;
  }>;
}) {
  const { region, district } = await params;

  if (!(region in REGIONS)) {
    notFound();
  }

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
      {/* 상단 */}

      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "15px 18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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

      {/* HERO */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#06376c 0%,#0869d8 55%,#25a9f6 100%)",
          color: "#fff",
          padding: "65px 20px",
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
            {fullArea} 누수 전문
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(40px,8vw,65px)",
              letterSpacing: "-3px",
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
            욕실누수, 천장누수, 수도누수까지
            현장 상황에 맞게 상담합니다.
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
          padding: "60px 20px",
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
              필요한 누수 서비스를 선택하세요.
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
                href={`/services/${service.slug}/${region}/${district}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
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

                  <div
                    style={{
                      marginTop: "14px",
                      color: "#086bd8",
                      fontWeight: 900,
                      fontSize: "14px",
                    }}
                  >
                    자세히 보기 →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 안내 */}

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
              marginBottom: "25px",
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
              배관, 욕실 방수, 수도관, 윗집 또는 외부 유입 등
              다양할 수 있습니다.
            </p>

            <p>
              누수대학은 {fullArea} 지역에서
              누수 증상을 확인하고 현장 상황에 맞는
              점검 및 작업 방법을 안내합니다.
            </p>

            <p style={{ marginBottom: 0 }}>
              천장 물 얼룩, 수도요금 증가,
              계량기 회전, 벽면 습기,
              아랫집 누수 등의 증상이 있다면 상담해주세요.
            </p>
          </div>
        </div>
      </section>

      {/* 상담 */}

      <section
        style={{
          background: "#0c3765",
          color: "#fff",
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
          {districtName} 누수 상담
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
            📞 전화 상담
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
              color: "#fff",
              fontSize: "20px",
            }}
          >
            {COMPANY}
          </strong>

          <div style={{ marginTop: "8px" }}>
            대표자 : 김대식
          </div>

          <div>대표전화 : {PHONE_DISPLAY}</div>

          <div>홈페이지 : nusudaehak.com</div>
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
