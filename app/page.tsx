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

const SMS_LINK = `sms:${PHONE}?body=${encodeURIComponent(SMS_MESSAGE)}`;

/* =====================================
   서비스
===================================== */

const SERVICES = [
  {
    title: "누수탐지",
    icon: "🔎",
    description:
      "눈에 보이지 않는 누수 원인을 확인하고 누수 발생 위치를 찾아드립니다.",
  },
  {
    title: "배관누수",
    icon: "🔧",
    description:
      "급수관·배관에서 발생하는 누수를 확인하고 현장에 맞게 보수합니다.",
  },
  {
    title: "욕실누수",
    icon: "🚿",
    description:
      "화장실 바닥, 배관, 방수층 등 다양한 욕실 누수 원인을 점검합니다.",
  },
  {
    title: "천장누수",
    icon: "💧",
    description:
      "천장 얼룩과 물 떨어짐의 원인을 확인하고 누수 위치를 점검합니다.",
  },
  {
    title: "수도누수",
    icon: "🚰",
    description:
      "수도요금 증가, 계량기 회전 등 수도 누수 의심 증상을 확인합니다.",
  },
  {
    title: "아파트누수",
    icon: "🏢",
    description:
      "아파트 세대 간 누수와 배관 문제를 확인하고 필요한 작업을 안내합니다.",
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
            padding: "15px 18px",
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
              fontSize: "24px",
              fontWeight: 900,
              letterSpacing: "-1px",
            }}
          >
            💧 누수대학
          </Link>

          <a
            href={PHONE_LINK}
            style={{
              textDecoration: "none",
              background: "#0b63ce",
              color: "#fff",
              padding: "11px 15px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 800,
              whiteSpace: "nowrap",
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
            "linear-gradient(135deg, #063b75 0%, #0869d8 55%, #27a9f8 100%)",
          color: "#fff",
          padding: "72px 20px 78px",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 15px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.16)",
              border: "1px solid rgba(255,255,255,0.24)",
              fontSize: "14px",
              fontWeight: 800,
              marginBottom: "20px",
            }}
          >
            누수탐지 · 누수공사 전문
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(46px, 9vw, 82px)",
              lineHeight: 1.05,
              fontWeight: 950,
              letterSpacing: "-4px",
            }}
          >
            누수대학
          </h1>

          <p
            style={{
              margin: "18px auto 0",
              maxWidth: "750px",
              fontSize: "clamp(19px, 4vw, 27px)",
              lineHeight: 1.5,
              fontWeight: 800,
            }}
          >
            누수는 원인을 제대로 찾는 것이
            <br />
            가장 중요합니다.
          </p>

          <p
            style={{
              margin: "16px auto 0",
              maxWidth: "680px",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            누수 원인을 꼼꼼하게 확인하고
            <br />
            현장 상황에 맞는 작업을 안내해드립니다.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "32px",
            }}
          >
            <a
              href={PHONE_LINK}
              style={{
                textDecoration: "none",
                background: "#fff",
                color: "#075dbb",
                padding: "16px 25px",
                borderRadius: "13px",
                fontWeight: 900,
                fontSize: "17px",
                minWidth: "150px",
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
                fontSize: "17px",
                minWidth: "150px",
              }}
            >
              💬 문자 상담
            </a>
          </div>

          <div
            style={{
              marginTop: "24px",
              fontSize: "18px",
              fontWeight: 800,
            }}
          >
            {PHONE_DISPLAY}
          </div>
        </div>
      </section>

      {/* =====================================
          간단 안내
      ===================================== */}

      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            padding: "24px 20px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "12px",
            textAlign: "center",
          }}
        >
          {[
            ["🔎", "누수 원인 확인"],
            ["💧", "누수탐지"],
            ["🔧", "배관 보수"],
            ["📞", "빠른 상담"],
          ].map(([icon, text]) => (
            <div
              key={text}
              style={{
                padding: "18px",
                background: "#f8fafc",
                borderRadius: "14px",
                fontWeight: 800,
              }}
            >
              <div
                style={{
                  fontSize: "25px",
                  marginBottom: "7px",
                }}
              >
                {icon}
              </div>

              {text}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================
          서비스
      ===================================== */}

      <section
        id="services"
        style={{
          padding: "70px 20px",
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
              marginBottom: "38px",
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
                fontSize: "clamp(30px, 6vw, 42px)",
                margin: "8px 0",
                letterSpacing: "-2px",
              }}
            >
              누수대학 전문 서비스
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.7,
              }}
            >
              다양한 누수 증상을 확인하고
              <br />
              현장에 맞는 해결 방법을 안내합니다.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "18px",
            }}
          >
            {SERVICES.map((service) => (
              <div
                key={service.title}
                style={{
                  background: "#fff",
                  padding: "27px",
                  borderRadius: "20px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 8px 30px rgba(15,23,42,0.06)",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: "#e9f5ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "27px",
                    marginBottom: "18px",
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  style={{
                    fontSize: "22px",
                    margin: "0 0 10px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#64748b",
                    lineHeight: 1.75,
                    fontSize: "15px",
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          누수 증상
      ===================================== */}

      <section
        style={{
          padding: "65px 20px",
          background: "#eaf5ff",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
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
                fontSize: "34px",
                margin: "0 0 10px",
                letterSpacing: "-1.5px",
              }}
            >
              이런 증상이 있다면 확인해보세요
            </h2>

            <p
              style={{
                color: "#475569",
              }}
            >
              작은 누수도 오래 방치하면 피해가 커질 수 있습니다.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "28px",
              boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
            }}
          >
            {[
              "수도요금이 갑자기 많이 나오는 경우",
              "물을 사용하지 않아도 수도계량기가 움직이는 경우",
              "천장이나 벽에 물 얼룩이 생긴 경우",
              "화장실 주변 바닥이나 벽이 계속 젖는 경우",
              "아랫집 천장에서 물이 떨어진다고 연락받은 경우",
              "벽지나 장판에 습기 또는 곰팡이가 생기는 경우",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "15px 0",
                  borderBottom: "1px solid #edf2f7",
                  fontSize: "16px",
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
          작업 절차
      ===================================== */}

      <section
        style={{
          padding: "70px 20px",
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
              fontSize: "34px",
              marginBottom: "35px",
              letterSpacing: "-1.5px",
            }}
          >
            누수대학 작업 절차
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              ["01", "상담 접수", "전화 또는 문자로 증상을 확인합니다."],
              ["02", "현장 확인", "누수 발생 위치와 현장 상태를 확인합니다."],
              ["03", "누수 탐지", "누수 원인을 확인하고 작업 범위를 판단합니다."],
              ["04", "보수 작업", "필요한 부분을 중심으로 작업을 진행합니다."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                style={{
                  padding: "25px",
                  borderRadius: "18px",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    color: "#0b74d8",
                    fontSize: "14px",
                    fontWeight: 900,
                    marginBottom: "10px",
                  }}
                >
                  STEP {number}
                </div>

                <h3
                  style={{
                    margin: "0 0 9px",
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
          상담 CTA
      ===================================== */}

      <section
        style={{
          padding: "65px 20px",
          background: "#0c3765",
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
              fontSize: "clamp(30px, 6vw, 42px)",
              margin: "0 0 15px",
              letterSpacing: "-2px",
            }}
          >
            누수가 의심되시나요?
          </h2>

          <p
            style={{
              margin: "0 0 27px",
              color: "#dcecff",
              lineHeight: 1.75,
            }}
          >
            누수 증상을 전화 또는 문자로 알려주세요.
            <br />
            현장 상황에 맞게 상담해드립니다.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href={PHONE_LINK}
              style={{
                textDecoration: "none",
                background: "#fff",
                color: "#084b8a",
                padding: "16px 25px",
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
                padding: "16px 25px",
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
          Footer
      ===================================== */}

      <footer
        style={{
          padding: "35px 20px 100px",
          background: "#081f38",
          color: "#b9cadd",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            fontSize: "14px",
            lineHeight: 1.8,
          }}
        >
          <div
            style={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: 900,
              marginBottom: "10px",
            }}
          >
            누수대학
          </div>

          <div>대표자 : {OWNER}</div>
          <div>전화 : {PHONE_DISPLAY}</div>
          <div>홈페이지 : nusudaehak.com</div>

          <div
            style={{
              marginTop: "18px",
              opacity: 0.65,
            }}
          >
            © {new Date().getFullYear()} {COMPANY}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* =====================================
          모바일 하단 고정 상담 버튼
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
          background: "#fff",
          boxShadow: "0 -5px 20px rgba(0,0,0,0.12)",
        }}
      >
        <a
          href={PHONE_LINK}
          style={{
            padding: "17px 10px",
            textAlign: "center",
            background: "#0b63ce",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 900,
          }}
        >
          📞 전화 상담
        </a>

        <a
          href={SMS_LINK}
          style={{
            padding: "17px 10px",
            textAlign: "center",
            background: "#111827",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 900,
          }}
        >
          💬 문자 상담
        </a>
      </div>
    </main>
  );
}
