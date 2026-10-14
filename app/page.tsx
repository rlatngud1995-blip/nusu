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
      "배관, 방수층, 창틀, 옥상 등 다양한 가능성을 확인해 누수 원인을 점검합니다.",
  },
  {
    slug: "pipe-leak",
    title: "배관누수",
    subtitle: "급수·배관 점검",
    icon: "🔧",
    description:
      "직수·온수·난방 배관 등 바닥이나 벽 내부 배관의 누수 가능성을 확인합니다.",
  },
  {
    slug: "bathroom-leak",
    title: "욕실누수",
    subtitle: "욕실·방수 점검",
    icon: "🚿",
    description:
      "욕실 바닥, 배수구, 배관, 방수층 등 다양한 욕실 누수 원인을 확인합니다.",
  },
  {
    slug: "ceiling-leak",
    title: "천장누수",
    subtitle: "천장 물샘 점검",
    icon: "💧",
    description:
      "천장 얼룩과 물 떨어짐의 원인이 배관·방수·외부 유입인지 확인합니다.",
  },
  {
    slug: "water-leak",
    title: "수도누수",
    subtitle: "수도계량기 점검",
    icon: "🚰",
    description:
      "수도요금 증가, 계량기 회전, 수도 압력 변화 등 수도누수 의심 증상을 확인합니다.",
  },
  {
    slug: "apartment-leak",
    title: "아파트누수",
    subtitle: "세대 간 누수 점검",
    icon: "🏢",
    description:
      "아파트 세대 간 누수와 욕실·배관·방수층 문제를 종합적으로 확인합니다.",
  },
];

/* =====================================
   대표 작업사진
===================================== */

const WORK_PHOTOS = [
  {
    href: "/services/ceiling-leak",
    src: "/IMG_1548.jpeg",
    title: "옥상방수 작업 전",
    badge: "BEFORE",
    description:
      "기존 옥상 방수층이 노후되고 표면 손상이 확인되는 상태입니다.",
  },
  {
    href: "/services/ceiling-leak",
    src: "/IMG_1549.jpeg",
    title: "옥상방수 작업 후",
    badge: "AFTER",
    description:
      "옥상 방수 작업 후 표면이 깔끔하게 정리된 상태입니다.",
  },
  {
    href: "/services/bathroom-leak",
    src: "/IMG_1547.jpeg",
    title: "욕실 방수작업",
    badge: "욕실 방수",
    description:
      "욕실 바닥 방수 작업을 진행한 현장 사진입니다.",
  },
  {
    href: "/services/ceiling-leak",
    src: "/IMG_1546.jpeg",
    title: "윗층 누수 흔적",
    badge: "천장 누수",
    description:
      "천장 몰딩 주변으로 누수 흔적이 확인되는 사례입니다.",
  },
  {
    href: "/services/pipe-leak",
    src: "/IMG_1545.jpeg",
    title: "수도배관누수 작업",
    badge: "배관누수",
    description:
      "바닥을 부분 개방해 수도배관 누수 위치를 확인하는 작업입니다.",
  },
  {
    href: "/services/water-leak",
    src: "/IMG_1544.jpeg",
    title: "수도배관 누수 점검",
    badge: "수도누수",
    description:
      "배관을 노출한 뒤 누수 지점을 점검하는 현장 사진입니다.",
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
              수도배관 · 욕실 방수 · 천장 물샘 · 옥상방수
              <br />
              누수 증상과 발생 위치를 확인하고
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
                }}
              >
                {PHONE_DISPLAY}
              </strong>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.97)",
              borderRadius: "24px",
              padding: "26px",
              color: "#0f172a",
              boxShadow: "0 28px 70px rgba(0,0,0,.22)",
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
              <Image
                src={LOGO}
                alt="누수대학 로고"
                width={68}
                height={68}
                style={{
                  objectFit: "contain",
                }}
              />

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
                  }}
                >
                  누수대학
                </div>
              </div>
            </div>

            {[
              ["01", "누수 원인 점검", "배관·방수·외부 유입 가능성 확인"],
              ["02", "필요 범위 확인", "불필요한 작업을 줄이고 원인 중심 점검"],
              ["03", "현장 맞춤 안내", "누수 유형에 맞는 작업 상담"],
            ].map(([number, title, desc]) => (
              <div
                key={number}
                style={{
                  display: "flex",
                  gap: "14px",
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
          </div>
        </div>
      </section>

      {/* =====================================
          서비스
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
              marginBottom: "36px",
            }}
          >
            <div
              style={{
                color: "#0874d9",
                fontSize: "13px",
                fontWeight: 950,
              }}
            >
              PROFESSIONAL SERVICE
            </div>

            <h2
              style={{
                margin: "8px 0 0",
                fontSize: "clamp(30px,5vw,43px)",
                letterSpacing: "-2px",
              }}
            >
              누수 증상별 전문 서비스
            </h2>
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
          실제 작업사진
      ===================================== */}

      <section
        style={{
          padding: "74px 20px",
          background: "#edf5fb",
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
              textAlign: "center",
              marginBottom: "36px",
            }}
          >
            <div
              style={{
                color: "#0874d9",
                fontSize: "13px",
                fontWeight: 950,
              }}
            >
              WORK CASE
            </div>

            <h2
              style={{
                margin: "8px 0 0",
                fontSize: "clamp(30px,5vw,42px)",
                letterSpacing: "-2px",
              }}
            >
              실제 작업 사례
            </h2>

            <p
              style={{
                margin: "12px auto 0",
                maxWidth: "680px",
                color: "#64748b",
                lineHeight: 1.8,
              }}
            >
              누수 유형에 따라 배관, 욕실 방수, 천장 누수,
              옥상 방수 등 다양한 작업이 진행될 수 있습니다.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",
              gap: "18px",
            }}
          >
            {WORK_PHOTOS.map((item) => (
              <Link
                key={`${item.src}-${item.title}`}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <article
                  style={{
                    background: "#fff",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid #dfe7ef",
                    boxShadow: "0 8px 26px rgba(15,23,42,.05)",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "4 / 3",
                      background: "#e5e7eb",
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        left: "14px",
                        top: "14px",
                        background: "rgba(7,27,52,.88)",
                        color: "#fff",
                        borderRadius: "999px",
                        padding: "7px 11px",
                        fontSize: "11px",
                        fontWeight: 900,
                      }}
                    >
                      {item.badge}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "20px",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "21px",
                        letterSpacing: "-0.8px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        margin: "9px 0 0",
                        color: "#64748b",
                        fontSize: "14px",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.description}
                    </p>

                    <div
                      style={{
                        marginTop: "15px",
                        color: "#0874d9",
                        fontSize: "13px",
                        fontWeight: 900,
                      }}
                    >
                      관련 서비스 보기 →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          지역
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
                  background: "#f8fafc",
                  borderRadius: "20px",
                  padding: "24px",
                  border: "1px solid #dfe7ef",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 17px",
                    fontSize: "23px",
                  }}
                >
                  {region.name}
                </h3>

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
                        background: "#fff",
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
          CTA
      ===================================== */}

      <section
        style={{
          padding: "72px 20px",
          background: "linear-gradient(135deg,#0758aa,#087be0)",
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
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(30px,6vw,43px)",
              letterSpacing: "-2px",
            }}
          >
            누수 증상과 지역을 알려주세요.
          </h2>

          <p
            style={{
              margin: "16px 0 0",
              color: "#d9edff",
              lineHeight: 1.8,
            }}
          >
            전화 또는 문자로 현재 누수 증상을 알려주시면
            상담해드립니다.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
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
        </div>
      </footer>

      {/* =====================================
          모바일 하단 고정 상담바
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
