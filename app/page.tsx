"use client";

import Image from "next/image";
import Link from "next/link";

/* =====================================
   기본 정보
===================================== */

const COMPANY = "누수대학";
const OWNER = "김대식";

const PHONE = "01039256115";
const PHONE_DISPLAY = "010-3925-6115";

const PHONE_LINK = `tel:${PHONE}`;

const LOGO =
  "/E4170FD5-E76B-4B48-8FCB-354D44386823.png";

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

const SERVICES = [
  {
    slug: "leak-detection",
    title: "누수탐지",
    subtitle: "정확한 원인 확인",
    icon: "🔎",
    description:
      "눈에 보이지 않는 누수 위치와 원인을 확인하여 필요한 작업 범위를 판단합니다.",
  },
  {
    slug: "pipe-leak",
    title: "배관누수",
    subtitle: "급수·배관 점검",
    icon: "🔧",
    description:
      "급수관 및 각종 배관의 누수 여부를 확인하고 현장 상태에 맞게 안내합니다.",
  },
  {
    slug: "bathroom-leak",
    title: "욕실누수",
    subtitle: "욕실·방수 점검",
    icon: "🚿",
    description:
      "욕실 바닥, 배수구, 배관, 방수층 등 다양한 누수 원인을 확인합니다.",
  },
  {
    slug: "ceiling-leak",
    title: "천장누수",
    subtitle: "천장 물샘 점검",
    icon: "💧",
    description:
      "천장 얼룩과 물 떨어짐의 원인을 확인하여 상부 누수 가능성을 점검합니다.",
  },
  {
    slug: "water-leak",
    title: "수도누수",
    subtitle: "수도계량기 점검",
    icon: "🚰",
    description:
      "수도요금 증가와 계량기 회전 등 수도누수 의심 증상을 확인합니다.",
  },
  {
    slug: "apartment-leak",
    title: "아파트누수",
    subtitle: "세대 간 누수 점검",
    icon: "🏢",
    description:
      "아파트 세대 간 누수와 욕실·주방·배관 문제를 종합적으로 확인합니다.",
  },
];

/* =====================================
   지역
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
   메인
===================================== */

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f8fc",
        color: "#0f172a",
        fontFamily:
          '"Pretendard","Apple SD Gothic Neo",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
      }}
    >
      {/* =====================================
          HEADER
      ===================================== */}

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(255,255,255,0.97)",
          borderBottom: "1px solid #e8edf3",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            minHeight: "72px",
            padding: "0 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "14px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "#0d1f35",
            }}
          >
            <div
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#eef6ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={LOGO}
                alt="누수대학"
                width={45}
                height={45}
                style={{
                  width: "45px",
                  height: "45px",
                  objectFit: "contain",
                }}
              />
            </div>

            <div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 950,
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                }}
              >
                누수대학
              </div>

              <div
                style={{
                  marginTop: "3px",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#718096",
                  letterSpacing: "0.4px",
                }}
              >
                LEAK DETECTION PROFESSIONAL
              </div>
            </div>
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
                padding: "11px 15px",
                borderRadius: "10px",
                background: "#f1f5f9",
                color: "#172033",
                fontSize: "14px",
                fontWeight: 900,
              }}
            >
              문자상담
            </a>

            <a
              href={PHONE_LINK}
              style={{
                textDecoration: "none",
                padding: "11px 15px",
                borderRadius: "10px",
                background: "#0969d8",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 900,
              }}
            >
              전화상담
            </a>
          </div>
        </div>
      </header>

      {/* =====================================
          HERO
      ===================================== */}

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg,#071b34 0%,#0b3f78 52%,#087be2 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-130px",
            right: "-100px",
            width: "430px",
            height: "430px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(69,181,255,.35),rgba(69,181,255,0))",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "-150px",
            bottom: "-250px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(14,165,233,.22),rgba(14,165,233,0))",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "64px 20px 68px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* 왼쪽 */}

          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,.1)",
                border: "1px solid rgba(255,255,255,.18)",
                borderRadius: "999px",
                padding: "8px 13px",
                fontSize: "13px",
                fontWeight: 800,
                color: "#dcecff",
              }}
            >
              <span>●</span>
              누수탐지 · 누수공사 전문
            </div>

            <h1
              style={{
                margin: "22px 0 0",
                fontSize: "clamp(40px,7vw,66px)",
                lineHeight: 1.12,
                letterSpacing: "-3.5px",
                fontWeight: 950,
              }}
            >
              보이지 않는 누수,
              <br />
              원인부터 정확하게.
            </h1>

            <p
              style={{
                margin: "22px 0 0",
                maxWidth: "610px",
                fontSize: "17px",
                lineHeight: 1.9,
                color: "#ccdaea",
              }}
            >
              천장 물샘, 수도요금 증가, 벽면 습기,
              <br />
              아랫집 누수까지 원인을 확인하고
              <br />
              현장에 필요한 작업을 안내합니다.
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "28px",
              }}
            >
              <a
                href={PHONE_LINK}
                style={{
                  textDecoration: "none",
                  background: "#fff",
                  color: "#0758a7",
                  padding: "16px 23px",
                  borderRadius: "12px",
                  fontWeight: 950,
                  fontSize: "16px",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,.18)",
                }}
              >
                📞 바로 전화하기
              </a>

              <a
                href={SMS_LINK}
                style={{
                  textDecoration: "none",
                  background: "rgba(255,255,255,.12)",
                  border: "1px solid rgba(255,255,255,.22)",
                  color: "#fff",
                  padding: "16px 23px",
                  borderRadius: "12px",
                  fontWeight: 900,
                  fontSize: "16px",
                }}
              >
                💬 사진·문자 문의
              </a>
            </div>

            <div
              style={{
                marginTop: "24px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  color: "#abc7e7",
                }}
              >
                대표상담
              </span>

              <strong
                style={{
                  fontSize: "23px",
                  letterSpacing: "-0.5px",
                }}
              >
                {PHONE_DISPLAY}
              </strong>
            </div>
          </div>

          {/* 오른쪽 전문 카드 */}

          <div
            style={{
              background: "rgba(255,255,255,.97)",
              borderRadius: "24px",
              padding: "26px",
              color: "#0f172a",
              boxShadow:
                "0 28px 70px rgba(0,0,0,.22)",
              border: "1px solid rgba(255,255,255,.25)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "22px",
              }}
            >
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(135deg,#e9f6ff,#d9efff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={LOGO}
                  alt="누수대학 로고"
                  width={61}
                  height={61}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>

              <div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#0874d9",
                    fontWeight: 900,
                  }}
                >
                  누수 전문 상담
                </div>

                <div
                  style={{
                    marginTop: "3px",
                    fontSize: "23px",
                    fontWeight: 950,
                    letterSpacing: "-1px",
                  }}
                >
                  누수대학
                </div>
              </div>
            </div>

            {[
              ["01", "누수 원인 점검", "증상과 현장 상태부터 확인"],
              ["02", "필요 범위 확인", "불필요한 작업 최소화"],
              ["03", "현장 맞춤 안내", "누수 유형에 맞는 작업 상담"],
            ].map(([number, title, desc]) => (
              <div
                key={number}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  padding: "16px 0",
                  borderTop: "1px solid #edf1f5",
                }}
              >
                <div
                  style={{
                    width: "37px",
                    height: "37px",
                    borderRadius: "10px",
                    background: "#eaf5ff",
                    color: "#0874d9",
                    fontSize: "12px",
                    fontWeight: 950,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {number}
                </div>

                <div>
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: "16px",
                    }}
                  >
                    {title}
                  </div>

                  <div
                    style={{
                      marginTop: "4px",
                      color: "#64748b",
                      fontSize: "13px",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </div>
                </div>
              </div>
            ))}

            <div
              style={{
                marginTop: "8px",
                padding: "15px",
                borderRadius: "13px",
                background: "#f4f9fe",
                color: "#36546f",
                fontSize: "13px",
                fontWeight: 700,
                lineHeight: 1.6,
              }}
            >
              서울 · 경기 · 인천 주요 지역 출장
              <br />
              현장 위치에 따라 출장 가능 여부 상담
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          핵심 정보
      ===================================== */}

      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #e8edf3",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "22px 20px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(150px,1fr))",
            gap: "12px",
          }}
        >
          {[
            ["01", "누수탐지", "원인 위치 확인"],
            ["02", "배관누수", "배관 상태 점검"],
            ["03", "욕실누수", "방수·배수 확인"],
            ["04", "세대간 누수", "아파트 누수 상담"],
          ].map(([number, title, desc]) => (
            <div
              key={number}
              style={{
                padding: "16px",
                borderRight: "1px solid #edf0f4",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 950,
                  color: "#0b75d9",
                }}
              >
                SPECIALTY {number}
              </div>

              <div
                style={{
                  marginTop: "5px",
                  fontSize: "17px",
                  fontWeight: 950,
                }}
              >
                {title}
              </div>

              <div
                style={{
                  marginTop: "3px",
                  fontSize: "13px",
                  color: "#7b8796",
                }}
              >
                {desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================
          SERVICE
      ===================================== */}

      <section
        style={{
          padding: "74px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              maxWidth: "700px",
              marginBottom: "36px",
            }}
          >
            <div
              style={{
                color: "#0874d9",
                fontSize: "13px",
                fontWeight: 950,
                letterSpacing: "1.2px",
              }}
            >
              PROFESSIONAL SERVICE
            </div>

            <h2
              style={{
                margin: "8px 0 0",
                fontSize: "clamp(30px,5vw,43px)",
                letterSpacing: "-2px",
                lineHeight: 1.25,
              }}
            >
              누수 증상별 전문 서비스
            </h2>

            <p
              style={{
                margin: "12px 0 0",
                color: "#64748b",
                lineHeight: 1.8,
              }}
            >
              누수 증상에 맞는 항목을 선택하면
              자세한 내용과 출장 가능 지역을 확인할 수 있습니다.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",
              gap: "16px",
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
                <article
                  style={{
                    height: "100%",
                    background: "#fff",
                    border: "1px solid #e4eaf0",
                    borderRadius: "19px",
                    padding: "24px",
                    boxShadow:
                      "0 8px 28px rgba(15,23,42,.045)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "14px",
                        background: "#edf7ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "25px",
                      }}
                    >
                      {service.icon}
                    </div>

                    <span
                      style={{
                        fontSize: "20px",
                        color: "#a5b4c4",
                      }}
                    >
                      ↗
                    </span>
                  </div>

                  <div
                    style={{
                      marginTop: "18px",
                      color: "#0874d9",
                      fontSize: "12px",
                      fontWeight: 900,
                    }}
                  >
                    {service.subtitle}
                  </div>

                  <h3
                    style={{
                      margin: "5px 0 0",
                      fontSize: "23px",
                      letterSpacing: "-1px",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      margin: "11px 0 0",
                      color: "#697586",
                      lineHeight: 1.7,
                      fontSize: "14px",
                    }}
                  >
                    {service.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          증상
      ===================================== */}

      <section
        style={{
          padding: "70px 20px",
          background: "#0d223a",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(290px,1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                color: "#5bb7ff",
                fontSize: "13px",
                fontWeight: 950,
              }}
            >
              LEAK CHECK
            </div>

            <h2
              style={{
                margin: "10px 0 0",
                fontSize: "clamp(30px,5vw,42px)",
                lineHeight: 1.3,
                letterSpacing: "-2px",
              }}
            >
              이런 증상이 있다면
              <br />
              누수를 확인해보세요.
            </h2>

            <p
              style={{
                margin: "18px 0 0",
                color: "#aebed0",
                lineHeight: 1.8,
              }}
            >
              누수는 초기에 원인을 확인하는 것이 중요합니다.
              <br />
              작은 물샘도 장기간 방치하면 피해 범위가
              커질 수 있습니다.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              color: "#142033",
              borderRadius: "20px",
              padding: "10px 24px",
            }}
          >
            {[
              "물을 사용하지 않아도 수도계량기가 움직입니다.",
              "수도요금이 갑자기 많이 나왔습니다.",
              "천장이나 벽에 물 얼룩이 생겼습니다.",
              "벽지 또는 장판에 습기와 곰팡이가 생깁니다.",
              "욕실 사용 후 아랫집에서 누수 연락이 옵니다.",
            ].map((text, index) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "17px 0",
                  borderBottom:
                    index === 4
                      ? "none"
                      : "1px solid #edf1f5",
                }}
              >
                <div
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    background: "#e7f4ff",
                    color: "#0874d9",
                    fontSize: "12px",
                    fontWeight: 950,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.65,
                    fontWeight: 750,
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          PROCESS
      ===================================== */}

      <section
        style={{
          padding: "72px 20px",
          background: "#fff",
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
              marginBottom: "37px",
            }}
          >
            <div
              style={{
                color: "#0874d9",
                fontSize: "13px",
                fontWeight: 950,
              }}
            >
              PROCESS
            </div>

            <h2
              style={{
                margin: "8px 0 0",
                fontSize: "36px",
                letterSpacing: "-2px",
              }}
            >
              누수대학 작업 진행
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(215px,1fr))",
              gap: "14px",
            }}
          >
            {[
              ["01", "상담 접수", "지역과 현재 증상을 확인합니다."],
              ["02", "현장 확인", "물샘 흔적과 현장 상태를 확인합니다."],
              ["03", "원인 점검", "누수 위치와 원인을 확인합니다."],
              ["04", "작업 안내", "필요한 작업 범위를 안내합니다."],
            ].map(([number, title, desc]) => (
              <div
                key={number}
                style={{
                  padding: "25px",
                  background: "#f7f9fc",
                  border: "1px solid #e7ebf0",
                  borderRadius: "17px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: "#0874d9",
                    fontWeight: 950,
                  }}
                >
                  STEP {number}
                </div>

                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "21px",
                    fontWeight: 950,
                  }}
                >
                  {title}
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    color: "#697586",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          REGION
      ===================================== */}

      <section
        style={{
          padding: "72px 20px",
          background: "#eef5fb",
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
              marginBottom: "34px",
            }}
          >
            <div
              style={{
                color: "#0874d9",
                fontSize: "13px",
                fontWeight: 950,
              }}
            >
              SERVICE AREA
            </div>

            <h2
              style={{
                margin: "8px 0 0",
                fontSize: "36px",
                letterSpacing: "-2px",
              }}
            >
              출장 가능 지역
            </h2>

            <p
              style={{
                margin: "10px 0 0",
                color: "#64748b",
                lineHeight: 1.7,
              }}
            >
              서울 · 경기 · 인천 주요 지역
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            {REGIONS.map((region) => (
              <div
                key={region.slug}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "24px",
                  border: "1px solid #dfe7ef",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "17px",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "#e9f5ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0874d9",
                      fontWeight: 950,
                    }}
                  >
                    {region.name.substring(0, 1)}
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: "23px",
                      letterSpacing: "-1px",
                    }}
                  >
                    {region.name}
                  </h3>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  {region.districts.map((district) => (
                    <Link
                      key={district.slug}
                      href={`/regions/${region.slug}/${district.slug}`}
                      style={{
                        textDecoration: "none",
                        color: "#334155",
                        background: "#f6f8fb",
                        border: "1px solid #e2e8f0",
                        padding: "10px 13px",
                        borderRadius: "9px",
                        fontSize: "13px",
                        fontWeight: 800,
                      }}
                    >
                      {district.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section
        style={{
          padding: "72px 20px",
          background:
            "linear-gradient(135deg,#0758aa,#087be0)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 900,
              color: "#cde7ff",
            }}
          >
            누수 상담이 필요하신가요?
          </div>

          <h2
            style={{
              margin: "10px 0 0",
              fontSize: "clamp(30px,6vw,43px)",
              letterSpacing: "-2px",
              lineHeight: 1.3,
            }}
          >
            증상과 지역을 알려주시면
            <br />
            빠르게 상담해드립니다.
          </h2>

          <p
            style={{
              margin: "16px 0 0",
              color: "#d9edff",
              lineHeight: 1.8,
            }}
          >
            전화 또는 문자로 현재 누수 증상을 알려주세요.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "26px",
            }}
          >
            <a
              href={PHONE_LINK}
              style={{
                background: "#fff",
                color: "#0759ad",
                textDecoration: "none",
                padding: "16px 24px",
                borderRadius: "12px",
                fontWeight: 950,
              }}
            >
              📞 {PHONE_DISPLAY}
            </a>

            <a
              href={SMS_LINK}
              style={{
                background: "#0b223a",
                color: "#fff",
                textDecoration: "none",
                padding: "16px 24px",
                borderRadius: "12px",
                fontWeight: 950,
              }}
            >
              💬 문자 문의
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          FOOTER
      ===================================== */}

      <footer
        style={{
          background: "#071625",
          color: "#90a1b4",
          padding: "38px 20px 100px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            lineHeight: 1.9,
            fontSize: "13px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
              marginBottom: "14px",
            }}
          >
            <Image
              src={LOGO}
              alt="누수대학"
              width={36}
              height={36}
              style={{
                objectFit: "contain",
              }}
            />

            <strong
              style={{
                color: "#fff",
                fontSize: "20px",
              }}
            >
              {COMPANY}
            </strong>
          </div>

          <div>대표자 : {OWNER}</div>
          <div>대표전화 : {PHONE_DISPLAY}</div>
          <div>홈페이지 : nusudaehak.com</div>

          <div
            style={{
              marginTop: "18px",
              paddingTop: "17px",
              borderTop: "1px solid #182a3e",
              color: "#607286",
            }}
          >
            © {new Date().getFullYear()} {COMPANY}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* =====================================
          하단 고정 상담바
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
          boxShadow: "0 -8px 25px rgba(0,0,0,.15)",
        }}
      >
        <a
          href={PHONE_LINK}
          style={{
            background: "#0874d9",
            color: "#fff",
            textDecoration: "none",
            textAlign: "center",
            padding: "17px 10px",
            fontWeight: 950,
            fontSize: "16px",
          }}
        >
          📞 전화 상담
        </a>

        <a
          href={SMS_LINK}
          style={{
            background: "#101827",
            color: "#fff",
            textDecoration: "none",
            textAlign: "center",
            padding: "17px 10px",
            fontWeight: 950,
            fontSize: "16px",
          }}
        >
          💬 문자 상담
        </a>
      </div>
    </main>
  );
}
