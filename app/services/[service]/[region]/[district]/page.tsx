
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

/* =========================================
   기본 정보
========================================= */

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

/* =========================================
   서비스 정보
========================================= */

type FAQ = {
  q: string;
  a: string;
};

type ServiceData = {
  name: string;
  headline: string;
  intro: string;
  checks: string[];
  symptoms: string[];
  faqs: FAQ[];
  images: string[];
};

const SERVICES: Record<string, ServiceData> = {
  "leak-detection": {
    name: "누수탐지",
    headline: "보이는 물자국보다 실제 누수 원인 확인이 중요합니다.",
    intro:
      "천장, 벽, 바닥에 나타난 물자국과 실제 누수 원인은 서로 다를 수 있습니다. 수도배관, 욕실 방수층, 옥상, 외벽 등 가능한 유입 경로를 살펴보고 누수 증상에 맞는 점검 방향을 안내합니다.",
    checks: [
      "누수 발생 시점과 지속 여부",
      "수도계량기 움직임",
      "직수·온수·난방 배관 상태",
      "욕실과 베란다 방수층",
      "천장과 벽면의 습기",
      "옥상·외벽·창틀의 빗물 유입 가능성",
    ],
    symptoms: [
      "누수 원인을 정확히 찾지 못한 경우",
      "아랫집에서 누수 연락을 받은 경우",
      "수도요금이 갑자기 증가한 경우",
      "천장이나 벽에 물자국이 생긴 경우",
      "비가 온 뒤에만 누수가 발생하는 경우",
    ],
    faqs: [
      {
        q: "물자국이 있는 곳이 실제 누수 위치인가요?",
        a: "반드시 그렇지는 않습니다. 물은 구조물이나 배관을 따라 이동할 수 있어 유입 경로를 함께 확인해야 합니다.",
      },
      {
        q: "누수탐지 전 무엇을 준비하면 좋나요?",
        a: "누수 위치 사진, 처음 발견한 시점, 물 사용과의 연관성 등을 알려주시면 상담에 도움이 됩니다.",
      },
      {
        q: "사진만으로 누수 원인을 알 수 있나요?",
        a: "사진은 증상을 파악하는 데 도움이 되지만 원인을 확정하려면 현장 확인이 필요할 수 있습니다.",
      },
    ],
    images: [
      "/IMG_1546.jpeg",
      "/IMG_1545.jpeg",
      "/IMG_1547.jpeg",
    ],
  },

  "pipe-leak": {
    name: "배관누수",
    headline: "바닥과 벽 내부의 배관누수 가능성을 확인합니다.",
    intro:
      "직수, 온수, 난방 배관은 바닥이나 벽 내부에 매립된 경우가 많습니다. 수도계량기 움직임과 주변 습기, 배관 사용 상황을 확인해 누수 원인을 구분하는 것이 중요합니다.",
    checks: [
      "직수 배관 상태",
      "온수 배관 상태",
      "난방 배관 누수 가능성",
      "수도계량기 움직임",
      "배관 연결부 상태",
      "바닥과 벽 내부 습기",
    ],
    symptoms: [
      "수도를 잠가도 계량기가 움직이는 경우",
      "바닥에서 물이 올라오는 경우",
      "벽 내부에서 물소리가 들리는 경우",
      "수도요금이 증가한 경우",
      "직수·온수·난방 배관 누수가 의심되는 경우",
    ],
    faqs: [
      {
        q: "수도계량기가 움직이면 배관누수인가요?",
        a: "누수 가능성이 있지만 다른 수도기기 사용 여부도 함께 확인해야 합니다.",
      },
      {
        q: "바닥을 전부 철거해야 하나요?",
        a: "누수 위치와 현장 구조에 따라 필요한 작업 범위가 달라집니다.",
      },
      {
        q: "온수배관에서도 누수가 발생하나요?",
        a: "네. 직수, 온수, 난방 등 여러 종류의 배관에서 누수가 발생할 수 있습니다.",
      },
    ],
    images: [
      "/IMG_1545.jpeg",
      "/IMG_1544.jpeg",
    ],
  },

  "bathroom-leak": {
    name: "욕실누수",
    headline: "욕실 사용 후 발생하는 누수 원인을 구분합니다.",
    intro:
      "욕실누수는 급수배관, 배수구 주변, 바닥 방수층, 벽과 바닥 접합부 등 다양한 원인으로 발생할 수 있습니다. 샤워나 배수 후 누수가 심해지는지 확인하는 것이 중요합니다.",
    checks: [
      "욕실 바닥 방수층",
      "배수구 주변 상태",
      "샤워 및 수도배관",
      "벽과 바닥 접합부",
      "욕실 사용 후 아래층 누수 여부",
      "기존 타일 하부 상태",
    ],
    symptoms: [
      "샤워 후 아래층 천장에 물이 생기는 경우",
      "욕실 사용 후 누수가 심해지는 경우",
      "배수구 주변에 물이 고이는 경우",
      "욕실 벽이나 바닥이 계속 젖는 경우",
      "아랫집 화장실 천장에 물자국이 생긴 경우",
    ],
    faqs: [
      {
        q: "욕실누수는 무조건 방수 문제인가요?",
        a: "아닙니다. 수도배관이나 배수구 주변 문제일 수도 있으므로 원인을 구분해야 합니다.",
      },
      {
        q: "욕실 전체를 철거해야 하나요?",
        a: "현장 상태와 원인에 따라 작업 범위가 달라집니다.",
      },
      {
        q: "아랫집 천장에서만 누수가 보일 수 있나요?",
        a: "네. 위층 욕실에서 발생한 물이 아래층 천장에 먼저 나타날 수 있습니다.",
      },
    ],
    images: [
      "/IMG_1547.jpeg",
      "/IMG_1546.jpeg",
    ],
  },

  "ceiling-leak": {
    name: "천장누수",
    headline: "천장 물자국의 실제 유입 경로를 확인합니다.",
    intro:
      "천장에 물이 보인다고 해서 반드시 바로 위 위치가 원인은 아닙니다. 위층 욕실, 수도배관, 옥상, 외벽 등 다양한 경로에서 유입된 물이 천장에 나타날 수 있습니다.",
    checks: [
      "천장 물 얼룩과 변색 범위",
      "위층 수도 사용 여부",
      "욕실 방수층 상태",
      "배관 누수 가능성",
      "옥상 방수 상태",
      "외벽과 창틀의 빗물 유입 여부",
    ],
    symptoms: [
      "천장에 갈색 또는 노란색 얼룩이 생긴 경우",
      "천장에서 물방울이 떨어지는 경우",
      "도배지나 마감재가 들뜨는 경우",
      "비가 온 뒤 천장에 물이 생기는 경우",
      "위층 물 사용 후 누수가 나타나는 경우",
    ],
    faqs: [
      {
        q: "천장누수는 반드시 윗집이 원인인가요?",
        a: "반드시 그렇지는 않습니다. 배관, 옥상, 외벽 등 다른 위치에서 물이 유입될 수 있습니다.",
      },
      {
        q: "비가 올 때만 물이 새면 무엇을 확인하나요?",
        a: "옥상, 외벽, 창틀 등 외부 방수 상태를 함께 확인합니다.",
      },
      {
        q: "천장 얼룩만 있어도 점검해야 하나요?",
        a: "얼룩이 커지거나 습기가 반복된다면 원인을 확인하는 것이 좋습니다.",
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
    headline: "수도계량기와 급수배관 상태를 확인합니다.",
    intro:
      "수도누수는 눈에 보이지 않는 곳에서 발생할 수 있습니다. 수도요금 증가나 계량기 움직임으로 처음 발견되는 경우가 있어 수도 사용 상태와 배관을 함께 확인해야 합니다.",
    checks: [
      "수도계량기 움직임",
      "직수배관 상태",
      "온수배관 상태",
      "수도 사용량 변화",
      "벽과 바닥의 습기",
      "급수배관 연결부",
    ],
    symptoms: [
      "물을 사용하지 않아도 계량기가 움직이는 경우",
      "수도요금이 갑자기 증가한 경우",
      "수도 압력이 약해진 경우",
      "벽이나 바닥이 젖는 경우",
      "급수배관 누수가 의심되는 경우",
    ],
    faqs: [
      {
        q: "수도요금이 많이 나오면 누수인가요?",
        a: "사용량 변화 등 다른 이유도 있을 수 있어 계량기와 수도 사용 상태를 확인해야 합니다.",
      },
      {
        q: "수도누수도 벽 내부에서 발생하나요?",
        a: "네. 매립된 급수배관에서 누수가 발생할 수 있습니다.",
      },
      {
        q: "계량기만 보고 누수 위치를 알 수 있나요?",
        a: "계량기는 누수 가능성을 판단하는 데 도움이 되지만 위치 확인에는 추가 점검이 필요할 수 있습니다.",
      },
    ],
    images: [
      "/IMG_1544.jpeg",
      "/IMG_1545.jpeg",
    ],
  },

  "apartment-leak": {
    name: "아파트누수",
    headline: "아파트 세대 간 누수는 원인 구분이 중요합니다.",
    intro:
      "아파트누수는 위층과 아래층 사이에서 발생하는 경우가 많지만 원인은 수도배관, 욕실 방수층, 배수구, 외벽 등 다양할 수 있습니다. 누수가 나타나는 위치와 물 사용 상황을 함께 확인해야 합니다.",
    checks: [
      "위층과 아래층 누수 위치",
      "욕실 사용과 누수 발생의 연관성",
      "직수·온수 배관 상태",
      "욕실과 베란다 방수층",
      "천장 물자국과 습기",
      "외벽과 창틀 유입 가능성",
    ],
    symptoms: [
      "아랫집에서 누수 연락을 받은 경우",
      "윗집 누수가 의심되는 경우",
      "욕실이나 베란다에 물이 생기는 경우",
      "천장에 지속적인 물자국이 있는 경우",
      "세대 간 누수 원인을 확인해야 하는 경우",
    ],
    faqs: [
      {
        q: "아랫집 천장에 물이 생기면 우리 집이 원인인가요?",
        a: "가능성은 있지만 위치만으로 확정할 수 없습니다. 실제 유입 경로를 확인해야 합니다.",
      },
      {
        q: "관리사무소 확인 후 상담해도 되나요?",
        a: "네. 관리사무소에서 확인한 내용과 사진을 알려주시면 도움이 됩니다.",
      },
      {
        q: "아파트 욕실누수도 배관 문제일 수 있나요?",
        a: "네. 방수층 외에도 급수배관이나 배수구가 원인일 수 있습니다.",
      },
    ],
    images: [
      "/IMG_1546.jpeg",
      "/IMG_1547.jpeg",
    ],
  },
};

/* =========================================
   지역 정보
========================================= */

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

/* =========================================
   지역별 상담 안내
========================================= */

const AREA_TIPS: Record<string, string> = {
  jongno: "물이 보이는 위치와 처음 발견한 시점을 확인해 주세요.",
  jung: "수도 사용 여부에 따라 증상이 달라지는지 확인해 주세요.",
  yongsan: "천장이나 벽의 물자국 크기 변화를 기록해 주세요.",
  seongdong: "욕실 사용 후 누수가 심해지는지 확인해 주세요.",
  gwangjin: "비가 오지 않는 날에도 같은 증상이 있는지 확인해 주세요.",
  dongdaemun: "수도계량기와 최근 수도요금 변화를 확인해 주세요.",
  seongbuk: "습기나 곰팡이가 반복되는 위치를 사진으로 남겨주세요.",
  mapo: "물이 계속 새는지 간헐적으로 발생하는지 확인해 주세요.",
  seodaemun: "수도를 사용하지 않을 때 계량기가 움직이는지 확인해 주세요.",
  yeongdeungpo: "누수 위치 주변에 욕실이나 배관이 있는지 확인해 주세요.",
  dongjak: "특정 수도를 사용할 때 증상이 생기는지 확인해 주세요.",
  gwanak: "천장이나 벽의 변색 범위를 사진으로 남겨주세요.",
  seocho: "욕실 사용 전후 누수 증상 차이를 확인해 주세요.",
  gangnam: "위층이나 아래층에서 확인된 누수 위치도 알려주세요.",
  bucheon: "천장·벽·바닥 중 어느 곳에서 물이 보이는지 확인해 주세요.",
  siheung: "비 오는 날과 맑은 날 증상이 다른지 확인해 주세요.",
  ansan: "물자국의 최초 위치와 현재 범위를 비교해 주세요.",
  anyang: "욕실이나 주방 사용 후 증상이 심해지는지 확인해 주세요.",
  suwon: "물을 모두 잠근 상태에서 수도계량기를 확인해 주세요.",
  hwaseong: "누수 부위를 여러 각도에서 촬영해 주세요.",
  pyeongtaek: "최근 수도요금 증가가 있었는지 확인해 주세요.",
  uiwang: "물 사용 전후로 증상이 달라지는지 확인해 주세요.",
  gimpo: "비가 올 때만 발생한다면 그 시점도 알려주세요.",
  paju: "누수 발생 시간과 날씨를 함께 기록해 주세요.",
  gwangmyeong: "위층 물 사용 후 증상이 나타나는지 확인해 주세요.",
  gwacheon: "물자국이 커지고 있다면 현재 상태를 사진으로 남겨주세요.",
  gyeyang: "욕실 사용과 누수 발생의 연관성을 확인해 주세요.",
  bupyeong: "모든 수도를 잠근 뒤 계량기 상태를 확인해 주세요.",
  seo: "비가 온 뒤에만 나타나는 증상인지 확인해 주세요.",
  namdong: "천장이나 벽의 물자국을 사진으로 남겨주세요.",
};

/* =========================================
   타입 및 URL 확인
========================================= */

type PageParams = {
  service: string;
  region: string;
  district: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

function getPageData(params: PageParams) {
  const service = SERVICES[params.service];
  const region = REGIONS[params.region];

  if (!service || !region) {
    return null;
  }

  const districtName =
    region.districts[params.district];

  if (!districtName) {
    return null;
  }

  const areaName =
    `${region.name} ${districtName}`;

  const url =
    `${SITE_URL}/services/${params.service}/${params.region}/${params.district}`;

  return {
    service,
    region,
    districtName,
    areaName,
    url,
  };
}

/* =========================================
   정적 페이지 생성
========================================= */

export const dynamicParams = false;

export function generateStaticParams(): PageParams[] {
  const result: PageParams[] = [];

  for (const service of Object.keys(SERVICES)) {
    for (const [region, data] of Object.entries(REGIONS)) {
      for (const district of Object.keys(data.districts)) {
        result.push({
          service,
          region,
          district,
        });
      }
    }
  }

  return result;
}

/* =========================================
   메타데이터
========================================= */

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
    `${data.districtName} ${data.service.name} | 원인 점검·상담`;

  const description =
    `${data.areaName} ${data.service.name} 상담. ` +
    `${data.service.intro} ` +
    `누수대학 상담 ${PHONE_DISPLAY}.`;

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
      title: `${title} | ${COMPANY}`,
      description,
      url: data.url,
      siteName: COMPANY,
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: `${SITE_URL}${data.service.images[0]}`,
          alt: `${data.service.name} 작업 참고 사진`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${COMPANY}`,
      description,
      images: [
        `${SITE_URL}${data.service.images[0]}`,
      ],
    },
  };
}

/* =========================================
   공통 스타일
========================================= */

const containerStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 20px",
};

const cardStyle = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "17px",
  padding: "22px",
};

const sectionStyle = {
  padding: "65px 0",
};

function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(
    /</g,
    "\\u003c"
  );
}

/* =========================================
   페이지
========================================= */

export default async function ServiceRegionPage({
  params,
}: PageProps) {
  const values = await params;
  const data = getPageData(values);

  if (!data) {
    notFound();
  }

  const {
    service,
    region,
    districtName,
    areaName,
    url,
  } = data;

  const title =
    `${districtName} ${service.name}`;

  const areaTip =
    AREA_TIPS[values.district] ??
    "누수 위치와 발생 시점을 사진으로 남겨주세요.";

  const otherServices = Object.entries(
    SERVICES
  ).filter(([slug]) => slug !== values.service);

  const otherDistricts = Object.entries(
    region.districts
  ).filter(([slug]) => slug !== values.district);

  /* =====================================
     구조화 데이터
  ===================================== */

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: title,
    serviceType: service.name,
    description: service.intro,
    url,

    areaServed: {
      "@type": "AdministrativeArea",
      name: areaName,
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
        name: service.name,
        item:
          `${SITE_URL}/services/${values.service}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f8fb",
        color: "#0f172a",
        fontFamily:
          '"Pretendard","Apple SD Gothic Neo",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
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

      {/* HEADER */}

      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5eaf0",
        }}
      >
        <div
          style={{
            ...containerStyle,
            paddingTop: "15px",
            paddingBottom: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#0f172a",
              textDecoration: "none",
              fontSize: "23px",
              fontWeight: 900,
            }}
          >
            💧 누수대학
          </Link>

          <a
            href={PHONE_LINK}
            style={{
              textDecoration: "none",
              background: "#0874d9",
              color: "#ffffff",
              borderRadius: "10px",
              padding: "11px 15px",
              fontWeight: 900,
              fontSize: "14px",
            }}
          >
            📞 전화상담
          </a>
        </div>
      </header>

      {/* BREADCRUMB */}

      <nav
        aria-label="현재 위치"
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #edf1f5",
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

          <Link
            href={`/services/${values.service}`}
            style={{
              color: "#64748b",
              textDecoration: "none",
            }}
          >
            {service.name}
          </Link>

          {" / "}

          <strong>{districtName}</strong>
        </div>
      </nav>

      {/* HERO */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#071b34 0%,#0b4c8f 55%,#087ee3 100%)",
          color: "#ffffff",
          padding: "75px 0",
        }}
      >
        <div style={containerStyle}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,.12)",
              border: "1px solid rgba(255,255,255,.2)",
              borderRadius: "999px",
              padding: "8px 14px",
              fontSize: "13px",
              fontWeight: 800,
              marginBottom: "18px",
            }}
          >
            {areaName} 누수 상담
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(36px,8vw,60px)",
              lineHeight: 1.2,
              fontWeight: 900,
              letterSpacing: "-2px",
            }}
          >
            {title}
          </h1>

          <p
            style={{
              margin: "20px 0 0",
              maxWidth: "780px",
              color: "#d6e8fa",
              fontSize: "19px",
              lineHeight: 1.8,
              fontWeight: 700,
            }}
          >
            {service.headline}
          </p>

          <p
            style={{
              margin: "14px 0 0",
              maxWidth: "780px",
              color: "#c4ddf5",
              fontSize: "15px",
              lineHeight: 1.9,
            }}
          >
            {service.intro}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "28px",
            }}
          >
            <a
              href={PHONE_LINK}
              style={{
                background: "#ffffff",
                color: "#075cab",
                textDecoration: "none",
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
                background: "#111827",
                color: "#ffffff",
                textDecoration: "none",
                padding: "15px 22px",
                borderRadius: "12px",
                fontWeight: 900,
              }}
            >
              💬 사진·문자 문의
            </a>
          </div>
        </div>
      </section>

      {/* 지역 상담 안내 */}

      <section
        style={{
          ...sectionStyle,
          background: "#ffffff",
        }}
      >
        <div style={containerStyle}>
          <div
            style={{
              color: "#0874d9",
              fontSize: "13px",
              fontWeight: 900,
            }}
          >
            LOCAL SERVICE GUIDE
          </div>

          <h2
            style={{
              margin: "10px 0 24px",
              fontSize: "32px",
              letterSpacing: "-1px",
            }}
          >
            {districtName} {service.name} 상담 안내
          </h2>

          <div
            style={{
              ...cardStyle,
              background: "#f8fafc",
              lineHeight: 1.9,
              fontSize: "16px",
              color: "#334155",
            }}
          >
            <p style={{ marginTop: 0 }}>
              {areaName}에서 {service.name} 상담이
              필요하다면 현재 물이 보이는 위치,
              누수를 처음 발견한 시점, 물 사용과의
              연관성을 함께 알려주세요.
            </p>

            <p>{service.intro}</p>

            <div
              style={{
                marginTop: "22px",
                padding: "16px",
                background: "#eaf5ff",
                borderLeft: "4px solid #0874d9",
                borderRadius: "9px",
                color: "#134d7d",
                fontWeight: 700,
              }}
            >
              💡 {districtName} 상담 TIP: {areaTip}
            </div>
          </div>
        </div>
      </section>

      {/* 작업 사진 */}

      <section
        style={{
          ...sectionStyle,
          background: "#eef5fb",
        }}
      >
        <div style={containerStyle}>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#0874d9",
                fontSize: "13px",
                fontWeight: 900,
              }}
            >
              WORK CASE
            </div>

            <h2
              style={{
                margin: "10px 0",
                fontSize: "33px",
                letterSpacing: "-1px",
              }}
            >
              {service.name} 관련 작업사진
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.8,
                marginBottom: "30px",
              }}
            >
              누수대학의 작업 참고 사진입니다.
              현재 페이지의 {districtName} 지역에서
              촬영한 사진이라는 의미는 아닙니다.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",
              gap: "17px",
            }}
          >
            {service.images.map((src, index) => (
              <article
                key={src}
                style={{
                  background: "#ffffff",
                  border: "1px solid #dfe6ed",
                  borderRadius: "19px",
                  overflow: "hidden",
                  boxShadow:
                    "0 8px 24px rgba(15,23,42,.05)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4 / 3",
                    background: "#e5e7eb",
                  }}
                >
                  <Image
                    src={src}
                    alt={`${service.name} 관련 작업 참고 사진 ${index + 1}`}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div style={{ padding: "19px" }}>
                  <div
                    style={{
                      color: "#0874d9",
                      fontSize: "12px",
                      fontWeight: 900,
                    }}
                  >
                    누수대학 작업 참고
                  </div>

                  <h3
                    style={{
                      margin: "7px 0",
                      fontSize: "19px",
                    }}
                  >
                    {service.name} 관련 작업
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "#64748b",
                      fontSize: "14px",
                      lineHeight: 1.8,
                    }}
                  >
                    누수 및 방수 관련 현장 작업을
                    확인할 수 있는 참고 사진입니다.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 점검 항목 */}

      <section
        style={{
          ...sectionStyle,
          background: "#ffffff",
        }}
      >
        <div style={containerStyle}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              margin: "0 0 30px",
            }}
          >
            {districtName} {service.name} 주요 점검 항목
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",
              gap: "13px",
            }}
          >
            {service.checks.map((item, index) => (
              <article
                key={item}
                style={{
                  ...cardStyle,
                  background: "#f8fafc",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "13px",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    flexShrink: 0,
                    borderRadius: "9px",
                    background: "#e7f4ff",
                    color: "#0874d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "12px",
                  }}
                >
                  {index + 1}
                </div>

                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 750,
                    lineHeight: 1.7,
                  }}
                >
                  {item}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 증상 */}

      <section
        style={{
          ...sectionStyle,
          background: "#0d223a",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            ...containerStyle,
            maxWidth: "950px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              margin: "0 0 28px",
            }}
          >
            {districtName}에서 이런 증상이 있다면
            <br />
            {service.name} 점검을 고려해보세요
          </h2>

          <div
            style={{
              background: "#ffffff",
              color: "#172033",
              borderRadius: "20px",
              padding: "12px 25px",
            }}
          >
            {service.symptoms.map((item, index) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: "13px",
                  padding: "16px 0",
                  borderBottom:
                    index === service.symptoms.length - 1
                      ? "none"
                      : "1px solid #edf1f5",
                }}
              >
                <span
                  style={{
                    color: "#0874d9",
                    fontWeight: 900,
                  }}
                >
                  ✓
                </span>

                <span
                  style={{
                    fontWeight: 700,
                    lineHeight: 1.7,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 과정 */}

      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              margin: "0 0 30px",
            }}
          >
            {districtName} {service.name} 상담 과정
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
                text: `${districtName} 지역과 현재 누수 증상을 확인합니다.`,
              },
              {
                number: "02",
                title: "증상 확인",
                text: "누수 위치, 발생 시점, 물 사용 여부를 확인합니다.",
              },
              {
                number: "03",
                title: "원인 점검",
                text: "배관과 방수층 등 가능한 원인을 살펴봅니다.",
              },
              {
                number: "04",
                title: "작업 안내",
                text: "현장 상태에 맞춰 필요한 작업 범위를 안내합니다.",
              },
            ].map((step) => (
              <article
                key={step.number}
                style={cardStyle}
              >
                <div
                  style={{
                    color: "#0874d9",
                    fontSize: "12px",
                    fontWeight: 900,
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
                    margin: 0,
                    color: "#64748b",
                    lineHeight: 1.8,
                    fontSize: "14px",
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
          ...sectionStyle,
          background: "#ffffff",
        }}
      >
        <div
          style={{
            ...containerStyle,
            maxWidth: "950px",
          }}
        >
          <div
            style={{
              color: "#0874d9",
              fontSize: "13px",
              fontWeight: 900,
              textAlign: "center",
            }}
          >
            FAQ
          </div>

          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              margin: "10px 0 30px",
            }}
          >
            {districtName} {service.name} 자주 묻는 질문
          </h2>

          <div
            style={{
              display: "grid",
              gap: "13px",
            }}
          >
            {service.faqs.map((faq) => (
              <article
                key={faq.q}
                style={{
                  ...cardStyle,
                  background: "#f8fafc",
                }}
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
                    margin: "11px 0 0",
                    color: "#64748b",
                    fontSize: "14px",
                    lineHeight: 1.9,
                  }}
                >
                  A. {faq.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 같은 지역 다른 서비스 */}

      <section
        style={{
          ...sectionStyle,
          background: "#eef5fb",
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
            {otherServices.map(([slug, item]) => (
              <Link
                key={slug}
                href={`/services/${slug}/${values.region}/${values.district}`}
                style={{
                  textDecoration: "none",
                  background: "#ffffff",
                  color: "#334155",
                  border: "1px solid #d9e2ea",
                  borderRadius: "10px",
                  padding: "12px 15px",
                  fontSize: "14px",
                  fontWeight: 800,
                }}
              >
                {districtName} {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 같은 서비스 다른 지역 */}

      <section
        style={{
          ...sectionStyle,
          background: "#ffffff",
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
            {region.name} 다른 지역 {service.name}
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "9px",
            }}
          >
            {otherDistricts.map(([slug, name]) => (
              <Link
                key={slug}
                href={`/services/${values.service}/${values.region}/${slug}`}
                style={{
                  textDecoration: "none",
                  background: "#f8fafc",
                  color: "#334155",
                  border: "1px solid #e0e7ee",
                  borderRadius: "9px",
                  padding: "11px 14px",
                  fontSize: "14px",
                  fontWeight: 800,
                }}
              >
                {name} {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 CTA */}

      <section
        style={{
          padding: "70px 20px",
          background:
            "linear-gradient(135deg,#0759ad,#087ee3)",
          color: "#ffffff",
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
              color: "#cfe8ff",
              fontSize: "13px",
              fontWeight: 800,
            }}
          >
            {areaName} 누수 상담
          </div>

          <h2
            style={{
              margin: "10px 0",
              fontSize: "34px",
            }}
          >
            {title} 문의
          </h2>

          <p
            style={{
              lineHeight: 1.9,
              color: "#d9ecff",
            }}
          >
            현재 누수 위치와 증상, 발생 시점을
            알려주세요.
            <br />
            사진이 있다면 문자로 보내주셔도 됩니다.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "11px",
              marginTop: "25px",
            }}
          >
            <a
              href={PHONE_LINK}
              style={{
                background: "#ffffff",
                color: "#075cab",
                textDecoration: "none",
                borderRadius: "12px",
                padding: "15px 23px",
                fontWeight: 900,
              }}
            >
              📞 {PHONE_DISPLAY}
            </a>

            <a
              href={SMS_LINK}
              style={{
                background: "#111827",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "12px",
                padding: "15px 23px",
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
          color: "#91a3b7",
          padding: "36px 20px 45px",
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
              color: "#ffffff",
              fontSize: "20px",
            }}
          >
            {COMPANY}
          </strong>

          <div style={{ marginTop: "10px" }}>
            대표자: {OWNER}
          </div>

          <div>대표전화: {PHONE_DISPLAY}</div>

          <div>홈페이지: www.nusudaehak.com</div>
        </div>
      </footer>

      {/* 모바일 하단 상담 */}

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
