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
   서비스 데이터
===================================== */

const SERVICES = {
  "leak-detection": {
    title: "누수탐지",
    icon: "🔎",
    description:
      "누수대학의 누수탐지는 눈에 보이지 않는 누수 원인과 발생 위치를 확인하고 현장 상황에 맞는 작업 방향을 안내합니다.",
    symptoms: [
      "수도요금이 갑자기 증가한 경우",
      "물을 사용하지 않아도 수도계량기가 움직이는 경우",
      "벽이나 바닥에서 습기가 올라오는 경우",
      "아랫집에서 누수 연락을 받은 경우",
      "누수 위치가 정확히 확인되지 않는 경우",
    ],
  },

  "pipe-leak": {
    title: "배관누수",
    icon: "🔧",
    description:
      "급수관과 각종 배관에서 발생하는 누수를 확인하고 문제 위치에 맞게 보수 작업을 진행합니다.",
    symptoms: [
      "배관 주변에 물이 고이는 경우",
      "벽 안쪽이나 바닥 아래에서 물소리가 나는 경우",
      "배관 연결부 주변이 지속적으로 젖는 경우",
      "수도 사용량이 비정상적으로 증가한 경우",
      "노후 배관에서 누수가 의심되는 경우",
    ],
  },

  "bathroom-leak": {
    title: "욕실누수",
    icon: "🚿",
    description:
      "욕실 바닥, 배수구, 배관, 방수층 등 여러 원인을 확인하고 누수 발생 위치를 점검합니다.",
    symptoms: [
      "욕실 사용 후 아래층 천장에 물이 생기는 경우",
      "화장실 바닥이 계속 젖어 있는 경우",
      "욕실 벽면에 습기나 곰팡이가 생기는 경우",
      "배수구 주변으로 물이 새는 경우",
      "샤워 후 누수 증상이 심해지는 경우",
    ],
  },

  "ceiling-leak": {
    title: "천장누수",
    icon: "💧",
    description:
      "천장 얼룩, 물방울, 도배 변색 등의 증상을 확인하고 상부 누수 원인을 점검합니다.",
    symptoms: [
      "천장에 노란색 또는 갈색 얼룩이 생긴 경우",
      "천장에서 물이 한 방울씩 떨어지는 경우",
      "천장 도배가 들뜨거나 변색되는 경우",
      "비가 온 뒤 누수가 발생하는 경우",
      "윗집 물 사용 후 누수가 발생하는 경우",
    ],
  },

  "water-leak": {
    title: "수도누수",
    icon: "🚰",
    description:
      "수도계량기 움직임과 급수 배관 상태 등을 확인하여 수도누수 가능성을 점검합니다.",
    symptoms: [
      "수도요금이 평소보다 많이 나오는 경우",
      "모든 수도를 잠가도 계량기가 움직이는 경우",
      "수도 압력이 갑자기 약해진 경우",
      "바닥이나 벽에서 물이 스며 나오는 경우",
      "수도 배관 누수가 의심되는 경우",
    ],
  },

  "apartment-leak": {
    title: "아파트누수",
    icon: "🏢",
    description:
      "아파트 세대 간 누수, 욕실, 주방, 배관 등 다양한 누수 원인을 확인하고 작업 방향을 안내합니다.",
    symptoms: [
      "아랫집 천장에서 물이 떨어지는 경우",
      "윗집 누수가 의심되는 경우",
      "베란다 또는 욕실 주변에서 누수가 발생하는 경우",
      "벽이나 천장에 누수 흔적이 생긴 경우",
      "세대 간 누수 원인을 확인해야 하는 경우",
    ],
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

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
];

/* =====================================
   메타데이터
===================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  if (!(service in SERVICES)) {
    return {};
  }

  const data = SERVICES[service as ServiceKey];

  return {
    title: `${data.title} | 누수대학`,
    description: `${data.title} 전문 누수대학. ${data.description} 상담 010-3925-6115.`,
  };
}

/* =====================================
   서비스 상세페이지
===================================== */

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  if (!(service in SERVICES)) {
    notFound();
  }

  const currentService = SERVICES[service as ServiceKey];

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
            padding: "16px 20px",
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

      <section
        style={{
          background:
            "linear-gradient(135deg,#06376c,#0869d8,#25a9f6)",
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
              letterSpacing: "-3px",
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

      <section
        style={{
          padding: "60px 20px",
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
              boxShadow: "0 8px 25px rgba(15,23,42,.06)",
            }}
          >
            {currentService.symptoms.map((item) => (
              <div
                key={item}
                style={{
                  padding: "15px 0",
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

      <section
        style={{
          padding: "60px 20px",
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
            원하는 지역을 누르면
            <br />
            지역별 {currentService.title} 페이지로 이동합니다.
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
                  {region.districts.map((district) => (
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
                      {district.name} {currentService.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              ["01", "상담 접수"],
              ["02", "현장 확인"],
              ["03", "원인 점검"],
              ["04", "필요 작업 진행"],
            ].map(([number, title]) => (
              <div
                key={number}
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
                  STEP {number}
                </div>

                <h3
                  style={{
                    margin: "10px 0 0",
                    fontSize: "20px",
                  }}
                >
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            margin: "0 0 13px",
          }}
        >
          {currentService.title} 상담
        </h2>

        <p
          style={{
            color: "#dcecff",
            lineHeight: 1.7,
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
            대표 김대식
          </div>

          <div>대표전화 {PHONE_DISPLAY}</div>

          <div>nusudaehak.com</div>
        </div>
      </footer>

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
