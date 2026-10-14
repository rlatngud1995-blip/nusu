import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* =====================================
   누수대학 기본 정보
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
      "배관, 방수층, 창틀 등 다양한 가능성을 확인하여 누수 원인을 점검합니다.",

    intro:
      "누수는 실제 물이 보이는 위치와 원인이 다른 경우가 많습니다. 수도배관, 욕실 방수층, 창틀, 옥상 등 여러 가능성을 구분해 확인하는 과정이 중요합니다.",

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
      "직수·온수·난방 등 수도배관의 누수 가능성을 확인합니다.",

    intro:
      "수도배관 누수는 바닥이나 벽 내부에서 발생하는 경우가 많습니다. 직수(냉수), 온수, 난방 배관 등을 확인하여 누수 가능성을 점검합니다.",

    symptoms: [
      "모든 수도를 잠가도 계량기가 움직이는 경우",
      "수도요금이 갑자기 많이 나온 경우",
      "벽 또는 바닥에서 물이 스며 나오는 경우",
      "바닥 내부에서 물소리가 들리는 경우",
      "직수·온수·난방 배관 누수가 의심되는 경우",
    ],
  },

  "bathroom-leak": {
    title: "욕실누수",
    icon: "🚿",

    short:
      "욕실 배관, 배수구, 방수층 등을 확인하여 누수 원인을 점검합니다.",

    intro:
      "화장실 누수는 수도배관뿐 아니라 배수구, 방수층 손상, 타일 주변 등 다양한 원인에서 발생할 수 있습니다.",

    symptoms: [
      "샤워 후 아래층 천장에 물이 생기는 경우",
      "화장실 사용 후 누수 증상이 심해지는 경우",
      "욕실 바닥이 계속 젖어 있는 경우",
      "배수구 주변에서 물이 새는 경우",
      "아랫집 화장실 천장에 누수 흔적이 생긴 경우",
    ],
  },

  "ceiling-leak": {
    title: "천장누수",
    icon: "💧",

    short:
      "천장 얼룩과 물 떨어짐의 원인이 배관·방수·외부 유입인지 확인합니다.",

    intro:
      "천장에 물이 보인다고 해서 반드시 바로 위 배관이 원인인 것은 아닙니다. 윗집 욕실, 수도배관, 옥상, 창틀 등 다양한 경로를 확인해야 합니다.",

    symptoms: [
      "천장에 노란색 또는 갈색 얼룩이 생긴 경우",
      "천장에서 물방울이 떨어지는 경우",
      "천장 도배가 들뜨거나 변색되는 경우",
      "비가 온 뒤에만 누수가 발생하는 경우",
      "윗집 물 사용 후 누수 증상이 나타나는 경우",
    ],
  },

  "water-leak": {
    title: "수도누수",
    icon: "🚰",

    short:
      "수도계량기와 직수·온수 배관 상태를 확인합니다.",

    intro:
      "수도누수는 눈에 직접 보이지 않는 경우가 많아 수도요금 증가나 계량기 움직임으로 처음 발견되기도 합니다.",

    symptoms: [
      "물을 사용하지 않아도 수도계량기가 움직이는 경우",
      "수도요금이 평소보다 많이 나온 경우",
      "수도 압력이 이전보다 약해진 경우",
      "바닥이나 벽에서 물이 올라오는 경우",
      "급수 배관 누수가 의심되는 경우",
    ],
  },

  "apartment-leak": {
    title: "아파트누수",
    icon: "🏢",

    short:
      "세대 간 누수와 욕실·배관·방수층 문제를 확인합니다.",

    intro:
      "아파트 누수는 배관뿐 아니라 욕실 방수층, 베란다, 창틀, 외벽 등 다양한 위치에서 발생할 수 있습니다.",

    symptoms: [
      "아랫집 천장에서 물이 떨어지는 경우",
      "윗집 누수가 의심되는 경우",
      "욕실 또는 베란다 주변에서 누수가 발생하는 경우",
      "벽이나 천장에 물 얼룩이 생긴 경우",
      "세대 간 누수 원인을 확인해야 하는 경우",
    ],
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

/* =====================================
   출장 지역
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
   지역별 설명
===================================== */

const AREA_TEXT: Record<string, string> = {
  jongno:
    "종로구는 주택과 상가, 오래된 건물이 함께 있어 노후 배관과 외부 유입 누수 등 여러 원인을 함께 확인하는 것이 중요합니다.",

  jung:
    "중구는 상업시설과 주거시설이 함께 있어 배관누수, 천장누수, 창호 주변 누수 등 현장별 원인을 구분해 점검할 필요가 있습니다.",

  yongsan:
    "용산구는 아파트, 주택, 상가 등 건물 형태가 다양해 누수 발생 위치와 건물 구조를 함께 확인하는 것이 중요합니다.",

  seongdong:
    "성동구는 아파트와 주거시설이 많은 지역으로 세대 간 누수와 욕실·배관 누수를 확인하는 경우가 있습니다.",

  gwangjin:
    "광진구는 주택과 아파트가 함께 있어 욕실누수, 배관누수, 창틀 주변 누수 등 다양한 가능성을 살펴봐야 합니다.",

  dongdaemun:
    "동대문구는 구축 건물과 주거시설이 함께 있어 노후 배관과 천장 물샘 증상을 꼼꼼하게 확인하는 것이 좋습니다.",

  seongbuk:
    "성북구는 주택과 아파트가 함께 있어 벽면 습기, 수도배관 누수, 외부 유입 등 다양한 누수 원인을 살펴봐야 합니다.",

  mapo:
    "마포구는 주거시설과 상가가 밀집해 있어 천장누수, 욕실누수, 창틀 주변 누수 등 다양한 증상이 발생할 수 있습니다.",

  seodaemun:
    "서대문구는 주택과 아파트, 상가 등이 함께 있어 배관 상태와 누수 위치를 함께 확인하는 것이 중요합니다.",

  yeongdeungpo:
    "영등포구는 아파트와 오피스, 상가가 많은 지역으로 세대 간 누수와 배관·화장실 누수 등을 확인할 필요가 있습니다.",

  dongjak:
    "동작구는 주거시설이 많은 지역으로 욕실누수와 천장누수, 수도배관 누수 등 다양한 증상을 확인하는 경우가 있습니다.",

  gwanak:
    "관악구는 다세대 주택과 아파트가 함께 있어 누수 위치와 건물 구조를 함께 확인해야 정확한 원인 판단에 도움이 됩니다.",

  seocho:
    "서초구는 아파트와 오피스텔이 많은 지역으로 세대 간 누수, 욕실누수, 수도배관 문제를 구분해 확인하는 것이 중요합니다.",

  gangnam:
    "강남구는 아파트와 상업시설이 많은 지역으로 천장누수, 배관누수, 욕실누수 등 다양한 유형의 점검이 필요할 수 있습니다.",

  bucheon:
    "부천시는 아파트와 다세대 주택이 많은 지역으로 욕실·배관·천장 누수 원인을 함께 확인하는 것이 중요합니다.",

  siheung:
    "시흥시는 신축과 구축 주거시설이 함께 있어 배관 누수와 욕실 방수 상태를 함께 확인해야 할 수 있습니다.",

  ansan:
    "안산시는 아파트, 상가, 주택이 함께 있어 수도누수와 배관누수, 외부 유입 등 다양한 가능성을 확인할 필요가 있습니다.",

  anyang:
    "안양시는 아파트와 주거시설이 많은 지역으로 세대 간 누수와 욕실누수 등의 원인을 확인하는 경우가 있습니다.",

  suwon:
    "수원시는 아파트와 주택, 상업시설이 넓게 분포해 있어 건물 구조에 맞는 누수 원인 확인이 중요합니다.",

  hwaseong:
    "화성시는 신축 아파트와 주택이 함께 있어 배관, 욕실, 천장 등 누수 발생 위치를 구분해 점검하는 것이 좋습니다.",

  pyeongtaek:
    "평택시는 아파트와 주택, 상가가 함께 있어 배관누수와 수도누수 등 다양한 누수 원인을 살펴볼 필요가 있습니다.",

  uiwang:
    "의왕시는 아파트와 주거시설이 많은 지역으로 세대 간 누수와 욕실·배관 누수 등을 확인하는 경우가 있습니다.",

  gimpo:
    "김포시는 신축 아파트와 주거시설이 많은 지역으로 세대 간 누수와 배관 상태를 함께 확인하는 것이 중요합니다.",

  paju:
    "파주시는 아파트와 단독주택이 함께 있어 누수 발생 위치와 건물 구조에 따라 점검 방향이 달라질 수 있습니다.",

  gwangmyeong:
    "광명시는 아파트와 다세대 주택이 많은 지역으로 천장누수와 욕실누수 등 세대 간 누수를 확인하는 경우가 있습니다.",

  gwacheon:
    "과천시는 아파트와 주거시설이 많은 지역으로 누수 발생 원인과 위치를 정확하게 구분하는 것이 중요합니다.",

  gyeyang:
    "계양구는 아파트와 주택이 함께 있어 배관누수와 욕실누수 등 다양한 누수 원인을 점검할 필요가 있습니다.",

  bupyeong:
    "부평구는 구축 아파트와 주택이 많은 지역으로 노후 배관과 세대 간 누수 원인을 함께 확인하는 것이 중요합니다.",

  seo:
    "인천 서구는 신축 아파트와 주거시설이 많은 지역으로 욕실·배관·천장 누수 등 다양한 원인을 확인할 필요가 있습니다.",

  namdong:
    "남동구는 아파트와 상가, 주택이 함께 있어 세대 간 누수와 배관누수 등 다양한 증상을 확인할 수 있습니다.",
};

/* =====================================
   누수 원인 / 방수 안내
===================================== */

const LEAK_GUIDE = [
  {
    number: "01",
    title: "수도배관 누수",
    icon: "🔧",
    summary:
      "직수(냉수), 온수, 난방 배관 등 수도배관을 점검합니다.",
    description:
      "수도배관은 바닥이나 벽 내부에 설치되는 경우가 많아 외부에서 바로 누수 위치가 보이지 않을 수 있습니다. 물을 사용하지 않아도 계량기가 움직이거나 수도요금이 갑자기 증가한다면 배관 누수 가능성을 확인할 필요가 있습니다.",
  },

  {
    number: "02",
    title: "방수층 누수",
    icon: "💦",
    summary:
      "화장실·베란다 등 기존 방수층 손상 여부를 확인합니다.",
    description:
      "화장실이나 베란다에서 물을 사용했을 때 아래층으로 물이 새거나 누수 증상이 나타난다면 기존 방수층의 손상 여부도 확인해야 합니다. 배관 문제가 아닌 방수층 문제일 수도 있어 원인을 구분하는 과정이 중요합니다.",
  },

  {
    number: "03",
    title: "창틀 누수",
    icon: "🪟",
    summary:
      "비가 올 때 창틀 주변으로 물이 들어오는지 확인합니다.",
    description:
      "평소에는 문제가 없지만 비가 올 때 창틀 주변에서만 물이 새는 경우에는 창호 주변 실리콘, 외벽 접합부, 틈새 등을 확인할 필요가 있습니다.",
  },

  {
    number: "04",
    title: "화장실 방수",
    icon: "🚿",
    summary:
      "욕실 바닥과 벽체의 기존 방수 상태를 확인합니다.",
    description:
      "화장실 방수는 기존 바닥과 벽체 상태, 타일 철거 여부, 배수구 주변 등을 확인한 뒤 필요한 작업 범위를 판단하는 것이 중요합니다.",
  },

  {
    number: "05",
    title: "옥상 방수",
    icon: "🏠",
    summary:
      "옥상 우레탄의 균열·들뜸·노후 상태를 확인합니다.",
    description:
      "옥상 우레탄 방수는 시간이 지나면서 균열이나 들뜸, 노후가 발생할 수 있습니다. 기존 우레탄 상태를 확인하고 필요한 경우 손상 부위와 바탕면을 정리한 뒤 방수 작업을 검토합니다.",
  },

  {
    number: "06",
    title: "창틀 방수",
    icon: "🏢",
    summary:
      "창틀 외부 실리콘의 노후와 벌어짐 여부를 확인합니다.",
    description:
      "샤시나 창틀 외부 실리콘이 오래되어 벌어지거나 갈라지면 비가 올 때 물이 유입될 수 있습니다. 기존 실리콘 상태를 확인한 뒤 필요한 경우 노후 실리콘을 제거하고 외부용 실리콘 재시공을 검토합니다.",
  },
];

/* =====================================
   사진 데이터
===================================== */

const IMAGE_SETS = {
  rooftopBefore: {
    src: "/IMG_1548.jpeg",
    title: "옥상방수 작업 전",
    description:
      "기존 옥상 방수층이 노후되고 표면 손상이 보이는 상태입니다.",
  },

  rooftopAfter: {
    src: "/IMG_1549.jpeg",
    title: "옥상방수 작업 후",
    description:
      "옥상 방수 작업 후 표면이 깔끔하게 정리된 상태입니다.",
  },

  bathroomWaterproof: {
    src: "/IMG_1547.jpeg",
    title: "욕실 방수작업",
    description:
      "욕실 바닥 방수 작업을 진행한 현장 사진입니다.",
  },

  upstairsLeak: {
    src: "/IMG_1546.jpeg",
    title: "윗층 누수 흔적",
    description:
      "천장 몰딩 주변으로 누수 흔적이 확인되는 사례입니다.",
  },

  pipeLeak1: {
    src: "/IMG_1545.jpeg",
    title: "수도배관누수 작업 사진 1",
    description:
      "바닥을 부분 개방해 수도배관 누수 위치를 확인하는 작업 사진입니다.",
  },

  pipeLeak2: {
    src: "/IMG_1544.jpeg",
    title: "수도배관누수 작업 사진 2",
    description:
      "배관 노출 후 누수 지점을 점검하는 현장 사진입니다.",
  },
} as const;

const SERVICE_PHOTOS: Record<
  ServiceKey,
  {
    title: string;
    description: string;
    items: {
      src: string;
      title: string;
      description: string;
      badge?: string;
    }[];
  }
> = {
  "leak-detection": {
    title: "누수탐지 관련 작업 사진",
    description:
      "누수탐지는 배관, 천장, 옥상 등 여러 원인을 함께 확인하는 과정이 중요합니다.",
    items: [
      {
        ...IMAGE_SETS.upstairsLeak,
        badge: "대표 사례",
      },
      {
        ...IMAGE_SETS.pipeLeak1,
        badge: "배관 점검",
      },
      {
        ...IMAGE_SETS.rooftopBefore,
        badge: "옥상 방수 전",
      },
      {
        ...IMAGE_SETS.rooftopAfter,
        badge: "옥상 방수 후",
      },
    ],
  },

  "pipe-leak": {
    title: "배관누수 작업 사진",
    description:
      "직수·온수·난방 배관 누수는 바닥 내부를 확인하며 원인을 찾는 경우가 많습니다.",
    items: [
      {
        ...IMAGE_SETS.pipeLeak1,
        badge: "배관누수",
      },
      {
        ...IMAGE_SETS.pipeLeak2,
        badge: "배관누수",
      },
    ],
  },

  "bathroom-leak": {
    title: "욕실누수 관련 사진",
    description:
      "욕실누수는 방수층 상태와 누수 흔적을 함께 확인하는 것이 중요합니다.",
    items: [
      {
        ...IMAGE_SETS.bathroomWaterproof,
        badge: "욕실 방수작업",
      },
      {
        ...IMAGE_SETS.upstairsLeak,
        badge: "누수 흔적",
      },
    ],
  },

  "ceiling-leak": {
    title: "천장누수 관련 사진",
    description:
      "천장누수는 윗층 누수, 옥상 방수 상태 등 다양한 원인을 함께 확인할 수 있습니다.",
    items: [
      {
        ...IMAGE_SETS.upstairsLeak,
        badge: "천장누수",
      },
      {
        ...IMAGE_SETS.rooftopBefore,
        badge: "옥상 방수 전",
      },
      {
        ...IMAGE_SETS.rooftopAfter,
        badge: "옥상 방수 후",
      },
    ],
  },

  "water-leak": {
    title: "수도누수 작업 사진",
    description:
      "수도누수는 바닥이나 벽 내부 배관을 확인하며 누수 위치를 점검합니다.",
    items: [
      {
        ...IMAGE_SETS.pipeLeak1,
        badge: "수도배관누수",
      },
      {
        ...IMAGE_SETS.pipeLeak2,
        badge: "수도배관누수",
      },
    ],
  },

  "apartment-leak": {
    title: "아파트누수 관련 사진",
    description:
      "아파트누수는 세대 간 천장 누수와 욕실 방수 문제를 함께 확인하는 경우가 많습니다.",
    items: [
      {
        ...IMAGE_SETS.upstairsLeak,
        badge: "세대 간 누수",
      },
      {
        ...IMAGE_SETS.bathroomWaterproof,
        badge: "욕실 방수작업",
      },
    ],
  },
};

/* =====================================
   Metadata
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
    `${serviceData.short} 수도배관, 욕실 방수층, 창틀, 옥상 등 다양한 누수 원인을 확인합니다.`;

  const canonical =
    `${SITE_URL}/services/${service}/${region}/${district}`;

  return {
    title,

    description,

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: COMPANY,
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: "/IMG_1546.jpeg",
          width: 1200,
          height: 900,
          alt: "누수대학 시공 사례",
        },
      ],
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
  const { service, region, district } =
    await params;

  if (!(service in SERVICES)) {
    notFound();
  }

  if (!(region in REGIONS)) {
    notFound();
  }

  const serviceData =
    SERVICES[service as ServiceKey];

  const regionData =
    REGIONS[region as RegionKey];

  if (!(district in regionData.districts)) {
    notFound();
  }

  const districtName =
    regionData.districts[
      district as keyof typeof regionData.districts
    ];

  const fullArea =
    `${regionData.name} ${districtName}`;

  const areaText =
    AREA_TEXT[district] ??
    `${districtName} 지역은 아파트, 주택, 상가 등 다양한 건물이 있어 누수 증상에 따라 배관과 방수 상태를 함께 확인하는 것이 중요합니다.`;

  const canonical =
    `${SITE_URL}/services/${service}/${region}/${district}`;

  const photoSection =
    SERVICE_PHOTOS[service as ServiceKey];

  /* =====================================
     구조화 데이터
  ===================================== */

  const schema = {
    "@context": "https://schema.org",

    "@type": "Service",

    name: `${districtName} ${serviceData.title}`,

    serviceType: serviceData.title,

    description:
      `${districtName} ${serviceData.title}. ${serviceData.short}`,

    url: canonical,

    areaServed: {
      "@type": "AdministrativeArea",
      name: fullArea,
    },

    provider: {
      "@type": "HomeAndConstructionBusiness",

      name: COMPANY,

      url: SITE_URL,

      telephone: PHONE_DISPLAY,
    },
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f8fb",
        color: "#0f172a",
        fontFamily:
          '"Pretendard","Apple SD Gothic Neo",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
      }}
    >
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
          background: "#ffffff",
          borderBottom: "1px solid #e5eaf0",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
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
              color: "#0f172a",
              textDecoration: "none",
              fontSize: "23px",
              fontWeight: 950,
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
          color: "#ffffff",
          padding: "68px 20px",
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
              background:
                "rgba(255,255,255,.12)",
              border:
                "1px solid rgba(255,255,255,.2)",
              borderRadius: "999px",
              padding: "8px 14px",
              fontSize: "13px",
              fontWeight: 850,
              marginBottom: "18px",
            }}
          >
            {fullArea} 누수 전문 상담
          </div>

          <div
            style={{
              fontSize: "46px",
              marginBottom: "10px",
            }}
          >
            {serviceData.icon}
          </div>

          <h1
            style={{
              margin: 0,
              fontSize:
                "clamp(38px,8vw,64px)",
              lineHeight: 1.15,
              fontWeight: 950,
              letterSpacing: "-3px",
            }}
          >
            {districtName}{" "}
            {serviceData.title}
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin:
                "18px auto 0",
              color: "#d7e9f8",
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            {serviceData.short}
            <br />
            누수 원인을 확인하고
            필요한 작업 방향을 안내합니다.
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
                background: "#ffffff",
                color: "#075cab",
                padding:
                  "15px 23px",
                borderRadius:
                  "12px",
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
                color: "#ffffff",
                padding:
                  "15px 23px",
                borderRadius:
                  "12px",
                fontWeight: 900,
              }}
            >
              💬 문자 문의
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          지역 + 서비스 설명
      ===================================== */}

      <section
        style={{
          padding: "64px 20px",
          background: "#ffffff",
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
              textAlign: "center",
              color: "#0874d9",
              fontWeight: 950,
              fontSize: "13px",
            }}
          >
            LOCAL SERVICE
          </div>

          <h2
            style={{
              textAlign: "center",
              margin:
                "8px 0 28px",
              fontSize: "33px",
              letterSpacing:
                "-1.7px",
            }}
          >
            {districtName}{" "}
            {serviceData.title} 안내
          </h2>

          <div
            style={{
              background: "#f8fafc",
              border:
                "1px solid #e4eaf0",
              borderRadius: "20px",
              padding: "28px",
              color: "#334155",
              fontSize: "16px",
              lineHeight: 1.9,
            }}
          >
            <p
              style={{
                marginTop: 0,
              }}
            >
              {areaText}
            </p>

            <p>
              {serviceData.intro}
            </p>

            <p>
              누수대학은{" "}
              <strong>
                {fullArea}
              </strong>{" "}
              지역의{" "}
              <strong>
                {serviceData.title}
              </strong>{" "}
              상담을 진행하고 있습니다.
            </p>

            <p
              style={{
                marginBottom: 0,
              }}
            >
              누수는 보이는 위치와 실제
              원인이 다른 경우가 있으므로
              배관, 방수층, 창틀 등 여러
              가능성을 확인한 뒤 작업
              범위를 판단하는 것이
              중요합니다.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          작업 사진
      ===================================== */}

      <section
        style={{
          padding: "68px 20px",
          background: "#ffffff",
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
              color: "#0874d9",
              fontSize: "13px",
              fontWeight: 950,
            }}
          >
            WORK PHOTO
          </div>

          <h2
            style={{
              margin: "8px 0 10px",
              textAlign: "center",
              fontSize:
                "clamp(30px,5vw,39px)",
              letterSpacing: "-2px",
            }}
          >
            {photoSection.title}
          </h2>

          <p
            style={{
              textAlign: "center",
              margin:
                "0 auto 34px",
              maxWidth: "700px",
              color: "#64748b",
              lineHeight: 1.8,
            }}
          >
            {photoSection.description}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",
              gap: "18px",
            }}
          >
            {photoSection.items.map(
              (item) => (
                <article
                  key={`${item.src}-${item.title}`}
                  style={{
                    background:
                      "#f8fafc",
                    border:
                      "1px solid #e2e8f0",
                    borderRadius:
                      "20px",
                    overflow: "hidden",
                    boxShadow:
                      "0 8px 24px rgba(15,23,42,.04)",
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
                  </div>

                  <div
                    style={{
                      padding: "20px",
                    }}
                  >
                    {item.badge && (
                      <div
                        style={{
                          display:
                            "inline-block",
                          marginBottom:
                            "10px",
                          background:
                            "#e8f4ff",
                          color: "#0874d9",
                          borderRadius:
                            "999px",
                          padding:
                            "6px 10px",
                          fontSize:
                            "12px",
                          fontWeight:
                            900,
                        }}
                      >
                        {item.badge}
                      </div>
                    )}

                    <h3
                      style={{
                        margin:
                          "0 0 8px",
                        fontSize:
                          "20px",
                        letterSpacing:
                          "-0.8px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color:
                          "#64748b",
                        fontSize:
                          "14px",
                        lineHeight:
                          1.75,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================
          누수 원인 / 방수 유형
      ===================================== */}

      <section
        style={{
          padding: "68px 20px",
          background: "#edf5fb",
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#0874d9",
              fontSize: "13px",
              fontWeight: 950,
            }}
          >
            LEAK TYPE
          </div>

          <h2
            style={{
              margin:
                "8px 0 10px",
              textAlign: "center",
              fontSize:
                "clamp(30px,5vw,39px)",
              letterSpacing:
                "-2px",
            }}
          >
            누수 원인과 방수 작업
          </h2>

          <p
            style={{
              textAlign: "center",
              margin:
                "0 auto 34px",
              maxWidth: "650px",
              color: "#64748b",
              lineHeight: 1.8,
            }}
          >
            누수가 발생하는 원인은
            하나로 정해져 있지 않습니다.
            <br />
            증상과 발생 시점을 확인해
            원인을 구분하는 것이
            중요합니다.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "16px",
            }}
          >
            {LEAK_GUIDE.map(
              (item) => (
                <article
                  key={item.number}
                  style={{
                    background:
                      "#ffffff",
                    border:
                      "1px solid #dfe7ef",
                    borderRadius:
                      "19px",
                    padding: "25px",
                    boxShadow:
                      "0 8px 24px rgba(15,23,42,.04)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "space-between",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        background:
                          "#e9f5ff",
                        borderRadius:
                          "13px",
                        display: "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        fontSize:
                          "24px",
                      }}
                    >
                      {item.icon}
                    </div>

                    <span
                      style={{
                        color:
                          "#9cadbe",
                        fontSize:
                          "12px",
                        fontWeight:
                          900,
                      }}
                    >
                      TYPE{" "}
                      {item.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      margin:
                        "18px 0 0",
                      fontSize:
                        "22px",
                      letterSpacing:
                        "-1px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    style={{
                      marginTop: "7px",
                      color: "#0874d9",
                      fontSize: "14px",
                      fontWeight: 850,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.summary}
                  </div>

                  <p
                    style={{
                      margin:
                        "13px 0 0",
                      color:
                        "#64748b",
                      fontSize:
                        "14px",
                      lineHeight:
                        1.8,
                    }}
                  >
                    {
                      item.description
                    }
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================
          증상 체크
      ===================================== */}

      <section
        style={{
          padding: "64px 20px",
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
              margin:
                "0 0 28px",
              fontSize: "31px",
              letterSpacing:
                "-1.5px",
            }}
          >
            {districtName}에서 이런
            증상이 있다면
            <br />
            {serviceData.title} 점검이
            필요할 수 있습니다
          </h2>

          <div
            style={{
              borderRadius: "20px",
              border:
                "1px solid #e2e8f0",
              padding:
                "10px 25px",
              background:
                "#f8fafc",
            }}
          >
            {serviceData.symptoms.map(
              (item, index) => (
                <div
                  key={item}
                  style={{
                    display:
                      "flex",
                    alignItems:
                      "flex-start",
                    gap: "12px",
                    padding:
                      "16px 0",
                    borderBottom:
                      index ===
                      serviceData
                        .symptoms
                        .length -
                        1
                        ? "none"
                        : "1px solid #e7ebef",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "25px",
                      height: "25px",
                      borderRadius:
                        "50%",
                      background:
                        "#e6f4ff",
                      color:
                        "#0874d9",
                      display:
                        "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      fontWeight:
                        950,
                    }}
                  >
                    ✓
                  </div>

                  <div
                    style={{
                      lineHeight:
                        1.7,
                      fontWeight:
                        750,
                    }}
                  >
                    {item}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================
          진행 과정
      ===================================== */}

      <section
        style={{
          padding: "65px 20px",
          background: "#f2f6fa",
        }}
      >
        <div
          style={{
            maxWidth: "1020px",
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
            {districtName}{" "}
            {serviceData.title} 진행 과정
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
                "누수 흔적과 주변 상태, 발생 시점을 확인합니다.",
              ],

              [
                "03",
                "원인 점검",
                "배관·방수층·창틀 등 누수 가능성을 확인합니다.",
              ],

              [
                "04",
                "작업 안내",
                "확인된 원인에 맞춰 필요한 작업 범위를 안내합니다.",
              ],
            ].map(
              ([
                number,
                title,
                description,
              ]) => (
                <div
                  key={number}
                  style={{
                    background:
                      "#ffffff",
                    border:
                      "1px solid #e2e8f0",
                    borderRadius:
                      "18px",
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      color:
                        "#0874d9",
                      fontSize:
                        "13px",
                      fontWeight:
                        950,
                    }}
                  >
                    STEP {number}
                  </div>

                  <h3
                    style={{
                      margin:
                        "10px 0 7px",
                      fontSize:
                        "20px",
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color:
                        "#64748b",
                      fontSize:
                        "14px",
                      lineHeight:
                        1.7,
                    }}
                  >
                    {description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================
          같은 지역 다른 서비스
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
              fontSize: "29px",
              marginBottom: "24px",
            }}
          >
            {districtName} 다른 누수 서비스
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent:
                "center",
              flexWrap: "wrap",
              gap: "9px",
            }}
          >
            {Object.entries(
              SERVICES
            ).map(
              ([
                serviceSlug,
                item,
              ]) => (
                <Link
                  key={
                    serviceSlug
                  }
                  href={`/services/${serviceSlug}/${region}/${district}`}
                  style={{
                    textDecoration:
                      "none",
                    background:
                      serviceSlug ===
                      service
                        ? "#0874d9"
                        : "#f8fafc",
                    color:
                      serviceSlug ===
                      service
                        ? "#ffffff"
                        : "#334155",
                    border:
                      "1px solid #dce5ed",
                    padding:
                      "11px 14px",
                    borderRadius:
                      "10px",
                    fontSize:
                      "14px",
                    fontWeight:
                      850,
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
          다른 지역
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
              fontSize: "29px",
              marginBottom: "24px",
            }}
          >
            {regionData.name} 다른 출장 지역
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent:
                "center",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {Object.entries(
              regionData.districts
            ).map(
              ([
                districtSlug,
                name,
              ]) => (
                <Link
                  key={
                    districtSlug
                  }
                  href={`/services/${service}/${region}/${districtSlug}`}
                  style={{
                    textDecoration:
                      "none",
                    padding:
                      "10px 13px",
                    borderRadius:
                      "9px",
                    border:
                      "1px solid #dce5ed",
                    background:
                      districtSlug ===
                      district
                        ? "#e7f4ff"
                        : "#ffffff",
                    color:
                      "#334155",
                    fontSize:
                      "13px",
                    fontWeight:
                      800,
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
          상담 CTA
      ===================================== */}

      <section
        style={{
          padding: "65px 20px",
          background:
            "linear-gradient(135deg,#0759ad,#087ee3)",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "34px",
            letterSpacing:
              "-1.5px",
          }}
        >
          {districtName}{" "}
          {serviceData.title} 상담
        </h2>

        <p
          style={{
            margin:
              "14px 0 0",
            color: "#d9ecff",
            lineHeight: 1.8,
          }}
        >
          누수 위치와 증상,
          발생 시점을 알려주세요.
          <br />
          전화 또는 문자로 상담할 수
          있습니다.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent:
              "center",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "24px",
          }}
        >
          <a
            href={PHONE_LINK}
            style={{
              background: "#ffffff",
              color: "#075cab",
              textDecoration:
                "none",
              padding:
                "15px 23px",
              borderRadius:
                "12px",
              fontWeight: 950,
            }}
          >
            📞 {PHONE_DISPLAY}
          </a>

          <a
            href={SMS_LINK}
            style={{
              background: "#111827",
              color: "#ffffff",
              textDecoration:
                "none",
              padding:
                "15px 23px",
              borderRadius:
                "12px",
              fontWeight: 900,
            }}
          >
            💬 문자 문의
          </a>
        </div>
      </section>

      {/* =====================================
          FOOTER
      ===================================== */}

      <footer
        style={{
          background: "#071827",
          color: "#91a3b7",
          padding:
            "34px 20px 95px",
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

          <div
            style={{
              marginTop: "10px",
            }}
          >
            대표자 : {OWNER}
          </div>

          <div>
            대표전화 :{" "}
            {PHONE_DISPLAY}
          </div>

          <div>
            홈페이지 :
            nusudaehak.com
          </div>
        </div>
      </footer>

      {/* =====================================
          모바일 하단 버튼
      ===================================== */}

      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
          boxShadow:
            "0 -5px 20px rgba(0,0,0,.15)",
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
            fontWeight: 950,
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
            fontWeight: 950,
          }}
        >
          💬 문자 상담
        </a>
      </div>
    </main>
  );
}
