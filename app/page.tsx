"use client";

import Link from "next/link";

/* =====================================
   누수대학 기본 정보
===================================== */

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
   서비스 카테고리
===================================== */

const SERVICES = [
  {
    slug: "leak-detection",
    title: "누수탐지",
    icon: "🔎",
    description:
      "눈에 보이지 않는 누수 원인과 발생 위치를 확인합니다.",
  },
  {
    slug: "pipe-leak",
    title: "배관누수",
    icon: "🔧",
    description:
      "급수관 및 각종 배관에서 발생하는 누수를 확인합니다.",
  },
  {
    slug: "bathroom-leak",
    title: "욕실누수",
    icon: "🚿",
    description:
      "욕실 바닥, 배관, 방수층 등의 누수 원인을 확인합니다.",
  },
  {
    slug: "ceiling-leak",
    title: "천장누수",
    icon: "💧",
    description:
      "천장 얼룩과 물 떨어짐의 원인을 확인합니다.",
  },
  {
    slug: "water-leak",
    title: "수도누수",
    icon: "🚰",
    description:
      "수도계량기 회전과 수도요금 증가 원인을 점검합니다.",
  },
  {
    slug: "apartment-leak",
    title: "아파트누수",
    icon: "🏢",
    description:
      "아파트 세대 간 누수 및 배관 문제를 확인합니다.",
  },
];

/* =====================================
   출장 지역

   서울 도심 중심으로
   지나치게 먼 외곽 지역은 우선 제외
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
      { name: "고양시", slug: "goyang" },
      { name: "김포시", slug: "gimpo" },
      { name: "부천시", slug: "bucheon" },
      { name: "광명시", slug: "gwangmyeong" },
      { name: "안양시", slug: "anyang" },
      { name: "과천시", slug: "gwacheon" },
      { name: "의왕시", slug: "uiwang" },
      { name: "성남시", slug: "seongnam" },
      { name: "하남시", slug: "hanam" },
      { name: "구리시", slug: "guri" },
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
   메인 페이지
===================================== */

export default function Home() {
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
          상단 메뉴
      ===================================== */}

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(255,255,255,0.96)",
          borderBottom: "1px solid #e2e8f0",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "14px 18px",
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
              fontSize: "23px",
              fontWeight: 900,
              letterSpacing: "-1px",
            }}
          >
            💧 누수대학
          </Link>

          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <a
              href={SMS_LINK}
              style={{
                textDecoration: "none",
                background: "#111827",
                color: "#fff",
                padding: "10px 13px",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: 800,
              }}
            >
              문자
            </a>

            <a
              href={PHONE_LINK}
              style={{
                textDecoration: "none",
                background: "#086bd8",
                color: "#fff",
                padding: "10px 13px",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: 800,
              }}
            >
              전화
            </a>
          </div>
        </div>
      </header>

      {/* =====================================
          메인 HERO
      ===================================== */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#06376c 0%,#0869d8 55%,#25a9f6 100%)",
          color: "#fff",
          padding: "68px 20px 75px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 15px",
              borderRadius: "999px",
              background: "rgba(255,255,255,.15)",
              border: "1px solid rgba(255,255,255,.25)",
              fontWeight: 800,
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            누수탐지 · 누수공사 전문
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(46px,9vw,82px)",
              lineHeight: 1.05,
              letterSpacing: "-4px",
              fontWeight: 950,
            }}
          >
            누수대학
          </h1>

          <p
            style={{
              margin: "20px auto 0",
              fontSize: "clamp(19px,4vw,27px)",
              fontWeight: 800,
              lineHeight: 1.5,
            }}
          >
            누수는 원인을 제대로 찾는 것이
            <br />
            가장 중요합니다.
          </p>

          <p
            style={{
              maxWidth: "680px",
              margin: "15px auto 0",
              lineHeight: 1.8,
              color: "#e5f3ff",
            }}
          >
            누수 원인을 확인하고
            <br />
            현장 상황에 맞는 작업을 안내합니다.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "11px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <a
              href={PHONE_LINK}
              style={{
                textDecoration: "none",
                background: "#fff",
                color: "#075cb7",
                padding: "16px 25px",
                borderRadius: "13px",
                fontWeight: 900,
              }}
            >
              📞 전화 상담
            </a>

            <a
              href={SMS_LINK}
              style={{
                textDecoration: "none",
                background: "#111827",
                color: "#fff",
                padding: "16px 25px",
                borderRadius: "13px",
                fontWeight: 900,
              }}
            >
              💬 문자 상담
            </a>
          </div>

          <div
            style={{
              marginTop: "21px",
              fontWeight: 900,
              fontSize: "19px",
            }}
          >
            {PHONE_DISPLAY}
          </div>
        </div>
      </section>

      {/* =====================================
          서비스 카테고리
      ===================================== */}

      <section
        style={{
          padding: "65px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "35px",
            }}
          >
            <span
              style={{
                color: "#0874d9",
                fontWeight: 900,
              }}
            >
              SERVICE
            </span>

            <h2
              style={{
                fontSize: "clamp(30px,6vw,42px)",
                margin: "8px 0",
                letterSpacing: "-2px",
              }}
            >
              누수 전문 서비스
            </h2>

            <p
              style={{
                color: "#64748b",
              }}
            >
              원하는 서비스를 눌러 자세히 확인하세요.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "17px",
            }}
          >
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background: "#fff",
                    padding: "26px",
                    borderRadius: "20px",
                    border: "1px solid #e2e8f0",
                    boxShadow:
                      "0 8px 28px rgba(15,23,42,.06)",
                  }}
                >
                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "15px",
                      background: "#e9f5ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "27px",
                      marginBottom: "16px",
                    }}
                  >
                    {service.icon}
                  </div>

                  <h3
                    style={{
                      margin: "0 0 9px",
                      fontSize: "22px",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "#64748b",
                      lineHeight: 1.7,
                      fontSize: "15px",
                    }}
                  >
                    {service.description}
                  </p>

                  <div
                    style={{
                      marginTop: "17px",
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

      {/* =====================================
          지역 선택
      ===================================== */}

      <section
        style={{
          padding: "65px 20px",
          background: "#eaf5ff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "35px",
            }}
          >
            <span
              style={{
                color: "#0874d9",
                fontWeight: 900,
              }}
            >
              SERVICE AREA
            </span>

            <h2
              style={{
                fontSize: "clamp(30px,6vw,40px)",
                margin: "8px 0",
                letterSpacing: "-2px",
              }}
            >
              출장 가능 지역
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.7,
              }}
            >
              서울 · 경기 · 인천
              <br />
              가까운 수도권 지역을 중심으로 출장합니다.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "22px",
            }}
          >
            {REGIONS.map((region) => (
              <div
                key={region.slug}
                style={{
                  background: "#fff",
                  padding: "24px",
                  borderRadius: "20px",
                  boxShadow:
                    "0 7px 25px rgba(15,23,42,.06)",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 17px",
                    fontSize: "25px",
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
                      href={`/regions/${region.slug}/${district.slug}`}
                      style={{
                        textDecoration: "none",
                        color: "#164e87",
                        background: "#edf7ff",
                        border: "1px solid #cce7ff",
                        padding: "11px 15px",
                        borderRadius: "10px",
                        fontWeight: 800,
                        fontSize: "14px",
                      }}
                    >
                      {district.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              fontSize: "13px",
              marginTop: "22px",
              lineHeight: 1.7,
            }}
          >
            현장 위치와 작업 내용에 따라 출장 가능 여부가
            달라질 수 있으니 상담해주세요.
          </p>
        </div>
      </section>

      {/* =====================================
          누수 증상
      ===================================== */}

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
              textAlign: "center",
              fontSize: "34px",
              letterSpacing: "-1.5px",
            }}
          >
            이런 증상이 있다면 확인해보세요
          </h2>

          <div
            style={{
              marginTop: "28px",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "25px",
            }}
          >
            {[
              "수도요금이 갑자기 많이 나온다",
              "물을 사용하지 않아도 수도계량기가 움직인다",
              "천장이나 벽에 물 얼룩이 생긴다",
              "욕실 주변이 계속 젖는다",
              "아랫집에서 물이 샌다고 연락이 왔다",
              "벽지나 장판에 습기 또는 곰팡이가 생긴다",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "14px 0",
                  borderBottom: "1px solid #e5e7eb",
                  lineHeight: 1.6,
                  fontWeight: 700,
                }}
              >
                ✅ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          작업 순서
      ===================================== */}

      <section
        style={{
          padding: "65px 20px",
          background: "#f1f7fc",
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
              fontSize: "34px",
              marginBottom: "32px",
            }}
          >
            누수대학 작업 절차
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
              ["03", "누수 탐지"],
              ["04", "보수 작업"],
            ].map(([number, title]) => (
              <div
                key={number}
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "17px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <strong
                  style={{
                    color: "#0874d9",
                    fontSize: "14px",
                  }}
                >
                  STEP {number}
                </strong>

                <h3
                  style={{
                    fontSize: "21px",
                    margin: "10px 0 0",
                  }}
                >
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          상담
      ===================================== */}

      <section
        style={{
          padding: "65px 20px",
          background: "#0c3765",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            margin: "0 0 13px",
          }}
        >
          누수가 의심되시나요?
        </h2>

        <p
          style={{
            color: "#dcecff",
            lineHeight: 1.7,
          }}
        >
          전화 또는 문자로 증상을 알려주세요.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "11px",
            marginTop: "25px",
          }}
        >
          <a
            href={PHONE_LINK}
            style={{
              textDecoration: "none",
              background: "#fff",
              color: "#075cb7",
              padding: "15px 22px",
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
              background: "#168bf2",
              color: "#fff",
              padding: "15px 22px",
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
          padding: "35px 20px 95px",
          background: "#081f38",
          color: "#b9cadd",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
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

          <div style={{ marginTop: "10px" }}>
            대표자 : {OWNER}
          </div>

          <div>대표전화 : {PHONE_DISPLAY}</div>

          <div>홈페이지 : nusudaehak.com</div>
        </div>
      </footer>

      {/* =====================================
          모바일 하단 고정 버튼
      ===================================== */}

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
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
