import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* =========================================================
   기본 정보
========================================================= */

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

/* =========================================================
   서비스 정보
========================================================= */

const SERVICES = {
  "leak-detection": {
    title: "누수탐지",
    icon: "🔎",

    metaExtra:
      "배관·욕실·천장·옥상 등 누수 원인을 확인하고 필요한 작업 방향을 안내합니다.",

    headline:
      "보이는 물자국만 보지 않고 누수 원인부터 확인합니다.",

    intro:
      "누수는 물이 보이는 위치와 실제 원인이 서로 다른 경우가 있습니다. 수도배관, 욕실 방수층, 천장, 창틀, 옥상 등 여러 가능성을 함께 확인하는 과정이 중요합니다.",

    detailTitle: "누수탐지에서 확인하는 부분",

    details: [
      "물을 사용하지 않을 때 수도계량기 움직임",
      "직수·온수·난방 배관 누수 가능성",
      "욕실 바닥 및 방수층 상태",
      "천장과 벽면의 물 얼룩 및 습기",
      "비가 온 뒤 발생하는 외부 유입 가능성",
      "옥상·창틀 등 외부 방수 상태",
    ],

    symptoms: [
      "누수가 있는데 정확한 원인을 찾지 못한 경우",
      "아랫집에서 물이 샌다는 연락을 받은 경우",
      "수도요금이 갑자기 증가한 경우",
      "벽이나 천장에 물 얼룩이 생긴 경우",
      "비가 온 뒤 특정 위치에 물이 생기는 경우",
    ],

    faq: [
      {
        q: "누수 위치와 실제 원인이 다를 수도 있나요?",
        a: "네. 물은 구조물과 배관을 따라 이동할 수 있기 때문에 물자국이 보이는 위치와 실제 누수 원인이 다른 경우가 있습니다.",
      },
      {
        q: "누수탐지 전 어떤 정보를 알려주면 좋나요?",
        a: "누수가 발생한 위치, 처음 발견한 시점, 물 사용과의 연관성, 비가 올 때만 발생하는지 등을 알려주시면 상담에 도움이 됩니다.",
      },
      {
        q: "사진을 먼저 보내도 되나요?",
        a: "네. 천장 얼룩, 벽면 습기, 바닥 상태 등 현재 증상을 사진으로 보내주시면 상담 시 참고할 수 있습니다.",
      },
    ],
  },

  "pipe-leak": {
    title: "배관누수",
    icon: "🔧",

    metaExtra:
      "직수·온수·난방 등 수도배관 누수 증상을 확인하고 배관 상태에 맞는 작업을 안내합니다.",

    headline:
      "보이지 않는 바닥·벽 내부 배관누수를 확인합니다.",

    intro:
      "수도배관은 바닥이나 벽 내부에 매립되어 있는 경우가 많아 겉으로 누수 위치를 바로 확인하기 어렵습니다. 계량기 움직임과 누수 흔적 등을 함께 확인하는 것이 중요합니다.",

    detailTitle: "배관누수 주요 점검 항목",

    details: [
      "직수(냉수) 배관 상태",
      "온수 배관 상태",
      "난방 배관 누수 가능성",
      "수도계량기 움직임",
      "바닥 및 벽 내부 습기",
      "배관 연결부와 누수 의심 위치",
    ],

    symptoms: [
      "모든 수도를 잠갔는데 계량기가 계속 움직이는 경우",
      "수도요금이 갑자기 많이 나온 경우",
      "바닥 또는 벽에서 물이 올라오는 경우",
      "바닥 내부에서 물소리가 들리는 경우",
      "직수·온수·난방 배관 누수가 의심되는 경우",
    ],

    faq: [
      {
        q: "수도계량기가 움직이면 무조건 배관누수인가요?",
        a: "누수 가능성을 의심할 수 있지만 사용 중인 수도기기나 다른 원인도 확인해야 합니다. 현장 상황을 함께 확인하는 것이 좋습니다.",
      },
      {
        q: "배관누수는 바닥을 전부 철거해야 하나요?",
        a: "누수 위치와 현장 구조에 따라 작업 범위가 달라집니다. 원인을 확인한 뒤 필요한 범위를 판단합니다.",
      },
      {
        q: "온수배관과 냉수배관 모두 누수가 발생할 수 있나요?",
        a: "네. 직수, 온수, 난방 등 여러 배관에서 누수가 발생할 수 있어 증상에 따라 확인이 필요합니다.",
      },
    ],
  },

  "bathroom-leak": {
    title: "욕실누수",
    icon: "🚿",

    metaExtra:
      "욕실 배관·배수구·바닥 방수층 등을 확인하여 화장실 누수 원인을 점검합니다.",

    headline:
      "욕실 사용 후 발생하는 누수 원인을 구분합니다.",

    intro:
      "욕실누수는 수도배관뿐 아니라 배수구 주변, 바닥 방수층, 타일 하부 등 여러 원인으로 발생할 수 있습니다. 물을 사용할 때 증상이 나타나는지 확인하는 것이 중요합니다.",

    detailTitle: "욕실누수에서 확인하는 부분",

    details: [
      "욕실 바닥 방수층 상태",
      "배수구 주변 누수 가능성",
      "수도 및 샤워 배관 상태",
      "욕실 사용 후 아랫층 누수 여부",
      "벽체와 바닥 접합부 상태",
      "기존 타일 하부 방수 상태",
    ],

    symptoms: [
      "샤워 후 아래층 천장에 물이 생기는 경우",
      "욕실 사용 후 누수 증상이 심해지는 경우",
      "욕실 바닥이나 벽 주변이 계속 젖어 있는 경우",
      "배수구 주변 누수가 의심되는 경우",
      "아랫집 화장실 천장에 물자국이 생긴 경우",
    ],

    faq: [
      {
        q: "욕실누수는 배관 문제와 방수 문제를 어떻게 구분하나요?",
        a: "누수 발생 시점과 물 사용 여부, 배관 및 방수 상태 등을 함께 확인해 원인을 구분합니다.",
      },
      {
        q: "욕실 방수층이 손상되면 아래층으로 물이 샐 수 있나요?",
        a: "네. 기존 방수층에 문제가 있으면 욕실에서 사용한 물이 구조물 아래쪽으로 이동할 수 있습니다.",
      },
      {
        q: "욕실 전체를 철거해야 하나요?",
        a: "현장 상태와 누수 원인에 따라 작업 범위가 달라지므로 원인을 먼저 확인하는 것이 중요합니다.",
      },
    ],
  },

  "ceiling-leak": {
    title: "천장누수",
    icon: "💧",

    metaExtra:
      "천장 물자국·물방울·도배 들뜸의 원인이 윗층, 배관, 방수 또는 외부 유입인지 확인합니다.",

    headline:
      "천장에 보이는 물자국의 실제 유입 경로를 확인합니다.",

    intro:
      "천장에 물이 보인다고 해서 반드시 바로 위 위치가 원인인 것은 아닙니다. 윗층 욕실, 수도배관, 옥상, 외벽 등 다양한 경로를 함께 확인해야 합니다.",

    detailTitle: "천장누수 주요 확인 항목",

    details: [
      "천장 물 얼룩과 변색 범위",
      "윗층 욕실 또는 수도 사용과의 연관성",
      "배관 누수 가능성",
      "옥상 방수층 상태",
      "비가 올 때 발생하는지 여부",
      "외벽·창틀을 통한 외부 유입 가능성",
    ],

    symptoms: [
      "천장에 노란색 또는 갈색 얼룩이 생긴 경우",
      "천장에서 물방울이 떨어지는 경우",
      "천장 도배나 마감재가 들뜨는 경우",
      "비가 온 뒤에만 천장에 물이 생기는 경우",
      "윗집 물 사용 후 누수 증상이 나타나는 경우",
    ],

    faq: [
      {
        q: "천장에서 물이 새면 바로 윗집이 원인인가요?",
        a: "반드시 그렇지는 않습니다. 배관이나 외벽, 옥상 등 다른 위치에서 유입된 물이 이동해 나타날 수도 있습니다.",
      },
      {
        q: "비가 올 때만 천장에서 물이 생기면 어떤 부분을 확인하나요?",
        a: "옥상, 외벽, 창틀 등 외부에서 물이 들어올 수 있는 부분도 함께 확인해야 합니다.",
      },
      {
        q: "천장 얼룩만 있어도 점검이 필요한가요?",
        a: "지속적으로 커지는 얼룩이나 습기가 있다면 원인을 확인해보는 것이 좋습니다.",
      },
    ],
  },

  "water-leak": {
    title: "수도누수",
    icon: "🚰",

    metaExtra:
      "수도계량기·직수·온수 배관 등을 확인하여 수도누수 가능성을 점검합니다.",

    headline:
      "수도요금 증가와 계량기 움직임의 원인을 확인합니다.",

    intro:
      "수도누수는 물이 눈에 직접 보이지 않아 수도요금 증가나 계량기 움직임으로 처음 발견되는 경우가 있습니다. 수도 사용 여부와 배관 상태를 함께 확인하는 것이 중요합니다.",

    detailTitle: "수도누수 주요 점검 항목",

    details: [
      "수도계량기 움직임",
      "직수 배관 누수 가능성",
      "온수 배관 누수 가능성",
      "수도 사용량 변화",
      "바닥 및 벽체 습기",
      "급수배관 연결 상태",
    ],

    symptoms: [
      "물을 사용하지 않는데 수도계량기가 움직이는 경우",
      "수도요금이 평소보다 갑자기 많이 나온 경우",
      "수도 압력이 이전보다 약해진 경우",
      "바닥이나 벽 주변이 젖는 경우",
      "급수배관 누수가 의심되는 경우",
    ],

    faq: [
      {
        q: "수도요금이 많이 나오면 누수를 의심해야 하나요?",
        a: "사용량 변화가 없는데 수도요금이 크게 증가했다면 누수 가능성을 확인해볼 수 있습니다.",
      },
      {
        q: "물을 쓰지 않는데 계량기가 움직이는 이유는 무엇인가요?",
        a: "배관 누수나 일부 수도기기 사용 등 여러 가능성이 있으므로 현재 수도 사용 상태와 함께 확인해야 합니다.",
      },
      {
        q: "수도누수도 바닥 아래에서 발생할 수 있나요?",
        a: "네. 급수배관이 바닥이나 벽 내부에 매립된 구조라면 눈에 보이지 않는 위치에서 발생할 수 있습니다.",
      },
    ],
  },

  "apartment-leak": {
    title: "아파트누수",
    icon: "🏢",

    metaExtra:
      "아파트 세대 간 누수, 욕실·배관·천장·방수층 등 다양한 원인을 확인합니다.",

    headline:
      "아파트 세대 간 누수는 원인 구분이 중요합니다.",

    intro:
      "아파트누수는 윗층과 아랫층 사이에서 발생하는 경우가 많지만 원인은 수도배관, 욕실 방수층, 배수구, 외벽 등 다양할 수 있습니다.",

    detailTitle: "아파트누수에서 확인하는 부분",

    details: [
      "윗층과 아랫층 누수 위치",
      "욕실 사용과 누수 발생의 연관성",
      "직수·온수 배관 상태",
      "욕실 및 베란다 방수층",
      "천장 물자국과 습기 범위",
      "외벽·창틀 유입 가능성",
    ],

    symptoms: [
      "아랫집에서 천장 누수 연락을 받은 경우",
      "윗집 누수가 의심되는 경우",
      "욕실 또는 베란다 주변에 물이 생기는 경우",
      "벽이나 천장에 지속적인 물 얼룩이 있는 경우",
      "세대 간 누수 원인을 확인해야 하는 경우",
    ],

    faq: [
      {
        q: "아랫집 천장에 물이 생기면 우리 집이 원인인가요?",
        a: "가능성은 있지만 위치만으로 확정하기 어렵습니다. 배관과 방수층, 외부 유입 등을 함께 확인해야 합니다.",
      },
      {
        q: "아파트 욕실 누수도 배관 문제일 수 있나요?",
        a: "네. 욕실 방수층뿐 아니라 직수·온수 배관이나 배수구 주변이 원인일 수도 있습니다.",
      },
      {
        q: "관리사무소 확인 후 상담해도 되나요?",
        a: "네. 관리사무소에서 확인한 위치나 증상 정보를 함께 알려주시면 상담에 참고할 수 있습니다.",
      },
    ],
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

/* =========================================================
   지역
========================================================= */

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

/* =========================================================
   지역별 고유 안내 문구

   지역의 주택 비율 같은 검증되지 않은 내용을 넣지 않고
   실제 상담 시 도움이 되는 안내를 지역마다 다르게 구성
========================================================= */

const AREA_CONTENT: Record<
  string,
  {
    heading: string;
    text: string;
    tip: string;
  }
> = {
  jongno: {
    heading: "종로구 누수 상담 시 확인할 내용",
    text: "종로구에서 누수 문의를 주실 때는 현재 물이 보이는 위치와 처음 발견한 시점을 함께 알려주세요. 천장, 벽, 바닥 중 어느 위치에서 증상이 나타나는지 확인하면 상담에 도움이 됩니다.",
    tip: "비가 온 뒤에만 증상이 생긴다면 그 부분도 함께 알려주세요.",
  },

  jung: {
    heading: "중구 누수 증상 확인 방법",
    text: "중구 누수 상담 시에는 평소에도 물이 생기는지, 특정 수도를 사용할 때만 증상이 나타나는지 구분해 알려주시면 좋습니다.",
    tip: "물을 모두 잠근 상태에서 수도계량기가 움직이는지도 확인해볼 수 있습니다.",
  },

  yongsan: {
    heading: "용산구 누수 문의 전 체크",
    text: "용산구에서 누수가 발생했다면 물자국의 위치와 크기가 변하는지 확인해 주세요. 천장이나 벽의 물자국이 커지는 경우 사진을 함께 남겨두면 상담에 도움이 됩니다.",
    tip: "현재 상태와 이전 상태를 비교할 수 있는 사진이 있으면 좋습니다.",
  },

  seongdong: {
    heading: "성동구 누수 상담 안내",
    text: "성동구 누수 문의 시 누수 증상이 물 사용과 연관되어 있는지 확인하면 원인을 구분하는 데 도움이 됩니다.",
    tip: "욕실 사용 후 증상이 심해지는지 확인해 주세요.",
  },

  gwangjin: {
    heading: "광진구 누수 발생 시 확인사항",
    text: "광진구에서 벽이나 천장에 습기가 생겼다면 물 사용 여부와 날씨에 따라 증상이 달라지는지 확인해보는 것이 좋습니다.",
    tip: "비가 오지 않는 날에도 같은 증상이 있는지 확인해 주세요.",
  },

  dongdaemun: {
    heading: "동대문구 누수 상담 전 확인",
    text: "동대문구 누수 상담 시 수도계량기 상태와 물이 보이는 위치를 함께 알려주시면 상담에 도움이 됩니다.",
    tip: "수도요금이 최근 갑자기 변했는지도 확인해 주세요.",
  },

  seongbuk: {
    heading: "성북구 누수 증상 체크",
    text: "성북구에서 누수가 의심된다면 천장, 벽면, 바닥 중 어디에서 처음 증상이 나타났는지 확인해주세요.",
    tip: "습기나 곰팡이가 반복되는 위치도 사진으로 남겨주세요.",
  },

  mapo: {
    heading: "마포구 누수 문의 안내",
    text: "마포구 누수 문의 시 현재 물이 계속 새는지, 간헐적으로 발생하는지를 알려주시면 원인을 확인하는 데 도움이 됩니다.",
    tip: "증상이 발생하는 시간대나 물 사용 상황을 함께 확인해 주세요.",
  },

  seodaemun: {
    heading: "서대문구 누수 상담 포인트",
    text: "서대문구에서 누수가 발생했다면 최근 수도 사용량 변화와 물자국 발생 위치를 함께 확인하는 것이 좋습니다.",
    tip: "물을 사용하지 않을 때 계량기가 움직이는지 확인해 주세요.",
  },

  yeongdeungpo: {
    heading: "영등포구 누수 문의 전 확인",
    text: "영등포구 누수 상담 시 누수가 발생한 위치와 주변에 욕실이나 배관이 있는지 알려주시면 좋습니다.",
    tip: "천장 물자국의 정확한 위치를 사진으로 보내주시면 도움이 됩니다.",
  },

  dongjak: {
    heading: "동작구 누수 증상 확인",
    text: "동작구에서 누수가 발생하면 특정 수도를 사용할 때 증상이 생기는지 확인해 주세요. 물 사용과 관계없이 발생한다면 그 부분도 함께 알려주세요.",
    tip: "누수를 처음 발견한 날짜를 기억해 두면 좋습니다.",
  },

  gwanak: {
    heading: "관악구 누수 상담 안내",
    text: "관악구 누수 문의 시 물자국의 크기와 위치, 물 사용과의 연관성을 함께 확인하면 원인을 구분하는 데 도움이 됩니다.",
    tip: "천장이나 벽의 변색 범위를 사진으로 남겨주세요.",
  },

  seocho: {
    heading: "서초구 누수 문의 체크사항",
    text: "서초구에서 누수가 의심된다면 수도계량기와 물 사용 여부, 천장이나 벽의 누수 흔적을 함께 확인해 주세요.",
    tip: "욕실 사용 전후 증상 차이가 있는지도 확인하면 좋습니다.",
  },

  gangnam: {
    heading: "강남구 누수 상담 시 확인사항",
    text: "강남구 누수 상담 시 현재 누수 위치와 물 사용 시 증상 변화, 수도계량기 상태를 함께 알려주시면 보다 정확한 상담에 도움이 됩니다.",
    tip: "윗층 또는 아랫층에서 확인된 누수 위치가 있다면 함께 알려주세요.",
  },

  bucheon: {
    heading: "부천시 누수 문의 안내",
    text: "부천시에서 누수가 발생했다면 천장, 벽, 바닥 중 어느 위치에서 물이 보이는지 먼저 확인해 주세요.",
    tip: "수도 사용을 멈췄을 때 증상이 줄어드는지도 확인해 주세요.",
  },

  siheung: {
    heading: "시흥시 누수 상담 체크",
    text: "시흥시 누수 상담 시 누수 발생 위치와 시간, 물 사용 여부를 함께 알려주세요.",
    tip: "비가 오는 날과 맑은 날 증상이 다른지도 확인하면 도움이 됩니다.",
  },

  ansan: {
    heading: "안산시 누수 발생 시 확인사항",
    text: "안산시 누수 문의 시 물자국이 처음 생긴 위치와 현재 범위를 확인해 주세요.",
    tip: "수도요금 변화가 있었다면 최근 고지서도 확인해 주세요.",
  },

  anyang: {
    heading: "안양시 누수 상담 안내",
    text: "안양시에서 누수가 발생했다면 욕실이나 주방 등 특정 공간 사용 후 증상이 심해지는지 확인해 주세요.",
    tip: "아랫층 천장 위치와 위층 공간의 위치 관계도 참고할 수 있습니다.",
  },

  suwon: {
    heading: "수원시 누수 문의 체크사항",
    text: "수원시 누수 상담 시 현재 물이 보이는 부분과 주변 수도시설 위치를 함께 알려주시면 좋습니다.",
    tip: "물을 모두 잠근 상태의 수도계량기를 확인해 볼 수 있습니다.",
  },

  hwaseong: {
    heading: "화성시 누수 상담 전 확인",
    text: "화성시에서 누수가 의심된다면 발생 시점과 물 사용 여부를 구분해 기록해 두는 것이 좋습니다.",
    tip: "누수 부위 사진을 여러 각도에서 촬영해 주세요.",
  },

  pyeongtaek: {
    heading: "평택시 누수 증상 확인",
    text: "평택시 누수 문의 시 벽이나 바닥의 습기, 천장 물자국 등 현재 나타나는 증상을 알려주세요.",
    tip: "최근 수도요금 증가가 있었는지도 함께 확인해 주세요.",
  },

  uiwang: {
    heading: "의왕시 누수 문의 안내",
    text: "의왕시에서 누수가 발생했다면 물 사용 전후로 증상이 달라지는지 확인해 주시면 좋습니다.",
    tip: "욕실이나 주방 사용 후 물자국이 커지는지 확인해 주세요.",
  },

  gimpo: {
    heading: "김포시 누수 상담 체크",
    text: "김포시 누수 상담 시 물이 보이는 위치와 주변 공간의 용도를 함께 알려주시면 원인 확인에 도움이 됩니다.",
    tip: "비가 올 때만 발생한다면 외부 유입 가능성도 함께 확인합니다.",
  },

  paju: {
    heading: "파주시 누수 발생 시 확인사항",
    text: "파주시에서 누수가 의심된다면 누수가 지속적으로 발생하는지 특정 상황에서만 발생하는지 확인해주세요.",
    tip: "누수 발생 시간과 날씨를 함께 기록하면 도움이 됩니다.",
  },

  gwangmyeong: {
    heading: "광명시 누수 상담 안내",
    text: "광명시 누수 문의 시 천장이나 벽의 누수 흔적과 수도 사용 여부를 함께 확인해 주세요.",
    tip: "윗층 물 사용 후 증상이 나타나는지 확인해보는 것도 좋습니다.",
  },

  gwacheon: {
    heading: "과천시 누수 문의 체크사항",
    text: "과천시에서 누수가 발생했다면 현재 물자국 위치와 수도계량기 상태를 먼저 확인해 주세요.",
    tip: "누수 흔적이 커지고 있다면 현재 상태를 사진으로 남겨주세요.",
  },

  gyeyang: {
    heading: "계양구 누수 상담 안내",
    text: "계양구 누수 상담 시 누수 발생 위치와 물 사용 여부를 함께 알려주시면 원인 확인에 도움이 됩니다.",
    tip: "욕실 사용과 누수 발생의 연관성을 확인해 주세요.",
  },

  bupyeong: {
    heading: "부평구 누수 문의 전 확인",
    text: "부평구에서 누수가 발생했다면 수도요금 변화와 계량기 움직임, 물자국 위치를 확인해 주세요.",
    tip: "모든 수도를 잠근 뒤 계량기 상태를 확인해 볼 수 있습니다.",
  },

  seo: {
    heading: "인천 서구 누수 상담 체크",
    text: "인천 서구 누수 문의 시 물이 보이는 위치와 발생 시점을 함께 알려주세요.",
    tip: "비가 온 후에만 나타나는 증상인지 확인하면 도움이 됩니다.",
  },

  namdong: {
    heading: "남동구 누수 발생 시 확인사항",
    text: "남동구에서 누수가 의심된다면 물 사용과 증상 발생 사이의 관계를 확인해 주세요.",
    tip: "천장 또는 벽면의 물자국을 사진으로 보내주시면 상담에 도움이 됩니다.",
  },
};

/* =========================================================
   실제 작업사진
========================================================= */

const PHOTOS = {
  rooftopBefore: "/IMG_1548.jpeg",
  rooftopAfter: "/IMG_1549.jpeg",
  bathroom: "/IMG_1547.jpeg",
  upstairs: "/IMG_1546.jpeg",
  pipe1: "/IMG_1545.jpeg",
  pipe2: "/IMG_1544.jpeg",
} as const;

function getServicePhotos(service: ServiceKey) {
  switch (service) {
    case "pipe-leak":
      return [
        {
          src: PHOTOS.pipe1,
          title: "수도배관 누수 작업",
          description:
            "바닥을 부분 개방하여 수도배관 상태를 확인하는 작업 사진입니다.",
        },
        {
          src: PHOTOS.pipe2,
          title: "수도배관 점검",
          description:
            "배관을 노출한 뒤 누수 의심 위치를 확인하는 작업 사진입니다.",
        },
      ];

    case "water-leak":
      return [
        {
          src: PHOTOS.pipe2,
          title: "수도누수 배관 확인",
          description:
            "수도배관을 노출하여 배관 상태를 확인하는 현장입니다.",
        },
        {
          src: PHOTOS.pipe1,
          title: "수도배관 누수 작업",
          description:
            "바닥 내부 수도배관을 확인하는 작업 사례입니다.",
        },
      ];

    case "bathroom-leak":
      return [
        {
          src: PHOTOS.bathroom,
          title: "욕실 방수작업",
          description:
            "욕실 바닥 방수 작업을 진행하는 실제 현장 사진입니다.",
        },
        {
          src: PHOTOS.upstairs,
          title: "아랫층 천장 누수 흔적",
          description:
            "윗층에서 발생한 누수로 천장에 흔적이 나타난 사례입니다.",
        },
      ];

    case "ceiling-leak":
      return [
        {
          src: PHOTOS.upstairs,
          title: "천장 누수 흔적",
          description:
            "천장 몰딩 주변으로 물자국이 확인되는 실제 누수 사례입니다.",
        },
        {
          src: PHOTOS.rooftopBefore,
          title: "옥상방수 작업 전",
          description:
            "기존 옥상 방수층의 상태를 확인한 작업 전 사진입니다.",
        },
        {
          src: PHOTOS.rooftopAfter,
          title: "옥상방수 작업 후",
          description:
            "옥상 방수 작업을 진행한 뒤의 현장 사진입니다.",
        },
      ];

    case "apartment-leak":
      return [
        {
          src: PHOTOS.upstairs,
          title: "세대 간 천장누수",
          description:
            "아랫층 천장에 누수 흔적이 나타난 실제 사례입니다.",
        },
        {
          src: PHOTOS.bathroom,
          title: "욕실 방수작업",
          description:
            "욕실 방수층 관련 작업을 진행하는 현장 사진입니다.",
        },
      ];

    default:
      return [
        {
          src: PHOTOS.upstairs,
          title: "누수 흔적 확인",
          description:
            "천장에 나타난 누수 흔적을 확인하는 실제 사례입니다.",
        },
        {
          src: PHOTOS.pipe1,
          title: "수도배관 점검",
          description:
            "바닥 내부 배관 상태를 확인하는 작업 사례입니다.",
        },
        {
          src: PHOTOS.bathroom,
          title: "욕실 방수작업",
          description:
            "욕실 바닥 방수 작업을 진행하는 현장 사진입니다.",
        },
      ];
  }
}

/* =========================================================
   Metadata
========================================================= */

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

  const serviceKey = service as ServiceKey;
  const regionKey = region as RegionKey;

  const serviceData = SERVICES[serviceKey];
  const regionData = REGIONS[regionKey];

  const districts = regionData.districts as Record<string, string>;

  if (!districts[district]) {
    return {};
  }

  const districtName = districts[district];

  const title =
    `${districtName} ${serviceData.title} | ` +
    `${serviceData.title} 점검·상담 누수대학`;

  const description =
    `${districtName} ${serviceData.title} 상담. ` +
    `${serviceData.metaExtra} ` +
    `누수 증상 확인 및 상담 ${PHONE_DISPLAY}.`;

  const canonical =
    `${SITE_URL}/services/${service}/${region}/${district}`;

  const photos = getServicePhotos(serviceKey);

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
          url: `${SITE_URL}${photos[0].src}`,
          alt: `${districtName} ${serviceData.title} 누수대학 작업사례`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${photos[0].src}`],
    },
  };
}

/* =========================================================
   페이지
========================================================= */

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

  const serviceKey = service as ServiceKey;
  const regionKey = region as RegionKey;

  const serviceData = SERVICES[serviceKey];
  const regionData = REGIONS[regionKey];

  const districts =
    regionData.districts as Record<string, string>;

  if (!districts[district]) {
    notFound();
  }

  const districtName = districts[district];

  const fullArea =
    `${regionData.name} ${districtName}`;

  const areaContent =
    AREA_CONTENT[district] ?? {
      heading: `${districtName} 누수 상담 안내`,
      text: `${districtName}에서 누수가 발생했다면 현재 물이 보이는 위치와 누수 발생 시점, 수도 사용 여부를 함께 확인해 주세요.`,
      tip: "현재 누수 상태를 사진으로 촬영해 보내주시면 상담에 도움이 됩니다.",
    };

  const photos =
    getServicePhotos(serviceKey);

  const canonical =
    `${SITE_URL}/services/${service}/${region}/${district}`;

  const otherServices =
    Object.entries(SERVICES).filter(
      ([slug]) => slug !== service
    );

  const nearbyDistricts =
    Object.entries(districts).filter(
      ([slug]) => slug !== district
    );

  /* =========================================================
     구조화 데이터
  ========================================================= */

  const serviceSchema = {
    "@context": "https://schema.org",

    "@type": "Service",

    name: `${districtName} ${serviceData.title}`,

    serviceType: serviceData.title,

    description:
      `${fullArea} ${serviceData.title}. ${serviceData.metaExtra}`,

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

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: serviceData.faq.map(
      (item) => ({
        "@type": "Question",

        name:
          `${districtName} ${item.q}`,

        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })
    ),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "누수대학",
        item: SITE_URL,
      },

      {
        "@type": "ListItem",
        position: 2,
        name: serviceData.title,
        item:
          `${SITE_URL}/services/${service}`,
      },

      {
        "@type": "ListItem",
        position: 3,
        name: districtName,
        item: canonical,
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
      }}
    >
      {/* 구조화 데이터 */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema
          ),
        }}
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        style={{
          background: "#ffffff",
          borderBottom:
            "1px solid #e5eaf0",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "15px 18px",

            display: "flex",
            alignItems: "center",
            justifyContent:
              "space-between",
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
            📞 전화상담
          </a>
        </div>
      </header>

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <nav
        aria-label="breadcrumb"
        style={{
          background: "#ffffff",
          borderBottom:
            "1px solid #edf1f5",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "12px 20px",

            fontSize: "12px",
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

          {"  /  "}

          <Link
            href={`/services/${service}`}
            style={{
              color: "#64748b",
              textDecoration: "none",
            }}
          >
            {serviceData.title}
          </Link>

          {"  /  "}

          <strong>
            {districtName}
          </strong>
        </div>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#071b34 0%,#0b4c8f 55%,#087ee3 100%)",

          color: "#ffffff",

          padding: "70px 20px",
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
              display:
                "inline-block",

              background:
                "rgba(255,255,255,.12)",

              border:
                "1px solid rgba(255,255,255,.2)",

              borderRadius:
                "999px",

              padding:
                "8px 14px",

              fontSize:
                "13px",

              fontWeight:
                850,

              marginBottom:
                "17px",
            }}
          >
            {fullArea} 출장 상담
          </div>

          {/* H1은 이 페이지에서 딱 하나 */}

          <h1
            style={{
              margin: 0,

              fontSize:
                "clamp(38px,8vw,61px)",

              lineHeight:
                1.15,

              fontWeight:
                950,

              letterSpacing:
                "-3px",
            }}
          >
            {districtName}{" "}
            {serviceData.title}
          </h1>

          <p
            style={{
              margin:
                "19px 0 0",

              maxWidth:
                "760px",

              color:
                "#d6e8fa",

              fontSize:
                "18px",

              lineHeight:
                1.85,
            }}
          >
            {
              serviceData.headline
            }
          </p>

          <p
            style={{
              margin:
                "11px 0 0",

              maxWidth:
                "760px",

              color:
                "#aec9e4",

              fontSize:
                "15px",

              lineHeight:
                1.8,
            }}
          >
            {districtName}에서
            발생한 누수 증상과
            위치를 확인하고
            원인에 맞는 점검 및
            작업 방향을
            안내합니다.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap:
                "wrap",
              gap: "10px",
              marginTop:
                "27px",
            }}
          >
            <a
              href={PHONE_LINK}
              style={{
                background:
                  "#ffffff",

                color:
                  "#075cab",

                textDecoration:
                  "none",

                padding:
                  "15px 22px",

                borderRadius:
                  "12px",

                fontWeight:
                  950,
              }}
            >
              📞 {PHONE_DISPLAY}
            </a>

            <a
              href={SMS_LINK}
              style={{
                background:
                  "#111827",

                color:
                  "#ffffff",

                textDecoration:
                  "none",

                padding:
                  "15px 22px",

                borderRadius:
                  "12px",

                fontWeight:
                  900,
              }}
            >
              💬 사진·문자 문의
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          지역 고유 콘텐츠
      ===================================================== */}

      <section
        style={{
          padding:
            "64px 20px",

          background:
            "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth:
              "920px",

            margin:
              "0 auto",
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
            {fullArea.toUpperCase()}
          </div>

          <h2
            style={{
              margin:
                "8px 0 20px",

              fontSize:
                "32px",

              letterSpacing:
                "-1.7px",
            }}
          >
            {areaContent.heading}
          </h2>

          <div
            style={{
              background:
                "#f7f9fc",

              border:
                "1px solid #e2e8f0",

              borderRadius:
                "19px",

              padding:
                "28px",

              fontSize:
                "16px",

              color:
                "#334155",

              lineHeight:
                1.9,
            }}
          >
            <p
              style={{
                marginTop: 0,
              }}
            >
              {areaContent.text}
            </p>

            <p>
              {serviceData.intro}
            </p>

            <div
              style={{
                marginTop:
                  "22px",

                background:
                  "#eaf5ff",

                borderLeft:
                  "4px solid #0874d9",

                padding:
                  "15px 17px",

                borderRadius:
                  "8px",

                color:
                  "#134d7d",

                fontWeight:
                  750,
              }}
            >
              💡 {districtName} 상담 TIP :{" "}
              {areaContent.tip}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          실제 사진
      ===================================================== */}

      <section
        style={{
          padding:
            "68px 20px",

          background:
            "#eef5fb",
        }}
      >
        <div
          style={{
            maxWidth:
              "1120px",

            margin:
              "0 auto",
          }}
        >
          <div
            style={{
              textAlign:
                "center",
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
              WORK CASE
            </div>

            <h2
              style={{
                margin:
                  "8px 0 10px",

                fontSize:
                  "35px",

                letterSpacing:
                  "-2px",
              }}
            >
              {serviceData.title} 실제 작업사진
            </h2>

            <p
              style={{
                margin:
                  "0 auto 31px",

                color:
                  "#64748b",

                lineHeight:
                  1.8,

                maxWidth:
                  "680px",
              }}
            >
              아래 사진은 누수대학의
              누수 및 방수 관련
              작업 사례입니다.
            </p>
          </div>

          <div
            style={{
              display:
                "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",

              gap: "17px",
            }}
          >
            {photos.map(
              (photo, index) => (
                <article
                  key={
                    photo.src
                  }
                  style={{
                    background:
                      "#ffffff",

                    border:
                      "1px solid #dfe6ed",

                    borderRadius:
                      "19px",

                    overflow:
                      "hidden",

                    boxShadow:
                      "0 8px 24px rgba(15,23,42,.05)",
                  }}
                >
                  <div
                    style={{
                      position:
                        "relative",

                      aspectRatio:
                        "4 / 3",

                      overflow:
                        "hidden",

                      background:
                        "#e5e7eb",
                    }}
                  >
                    <Image
                      src={
                        photo.src
                      }
                      alt={`${districtName} ${serviceData.title} ${photo.title}`}
                      fill
                      priority={
                        index ===
                        0
                      }
                      sizes="(max-width:768px) 100vw, 33vw"
                      style={{
                        objectFit:
                          "cover",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      padding:
                        "19px",
                    }}
                  >
                    <div
                      style={{
                        color:
                          "#0874d9",

                        fontSize:
                          "11px",

                        fontWeight:
                          950,
                      }}
                    >
                      {districtName}{" "}
                      {serviceData.title}
                    </div>

                    <h3
                      style={{
                        margin:
                          "6px 0 7px",

                        fontSize:
                          "20px",

                        letterSpacing:
                          "-.8px",
                      }}
                    >
                      {photo.title}
                    </h3>

                    <p
                      style={{
                        margin:
                          0,

                        color:
                          "#64748b",

                        fontSize:
                          "14px",

                        lineHeight:
                          1.7,
                      }}
                    >
                      {
                        photo.description
                      }
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          주요 점검 항목
      ===================================================== */}

      <section
        style={{
          padding:
            "68px 20px",

          background:
            "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth:
              "1000px",

            margin:
              "0 auto",
          }}
        >
          <h2
            style={{
              textAlign:
                "center",

              fontSize:
                "33px",

              letterSpacing:
                "-1.6px",

              margin:
                "0 0 30px",
            }}
          >
            {districtName}{" "}
            {
              serviceData.detailTitle
            }
          </h2>

          <div
            style={{
              display:
                "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(260px,1fr))",

              gap: "12px",
            }}
          >
            {serviceData.details.map(
              (item, index) => (
                <div
                  key={item}
                  style={{
                    display:
                      "flex",

                    gap: "13px",

                    alignItems:
                      "flex-start",

                    background:
                      "#f8fafc",

                    border:
                      "1px solid #e5eaf0",

                    padding:
                      "18px",

                    borderRadius:
                      "14px",
                  }}
                >
                  <div
                    style={{
                      width:
                        "29px",

                      height:
                        "29px",

                      borderRadius:
                        "9px",

                      background:
                        "#e7f4ff",

                      color:
                        "#0874d9",

                      fontSize:
                        "12px",

                      fontWeight:
                        950,

                      display:
                        "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      flexShrink:
                        0,
                    }}
                  >
                    {index + 1}
                  </div>

                  <div
                    style={{
                      fontSize:
                        "15px",

                      fontWeight:
                        750,

                      lineHeight:
                        1.6,
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

      {/* =====================================================
          증상
      ===================================================== */}

      <section
        style={{
          padding:
            "68px 20px",

          background:
            "#0d223a",

          color:
            "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth:
              "900px",

            margin:
              "0 auto",
          }}
        >
          <h2
            style={{
              textAlign:
                "center",

              margin:
                "0 0 28px",

              fontSize:
                "32px",

              letterSpacing:
                "-1.6px",
            }}
          >
            {districtName}에서
            이런 증상이 있다면
            <br />
            {serviceData.title} 점검을
            확인해보세요
          </h2>

          <div
            style={{
              background:
                "#ffffff",

              color:
                "#172033",

              borderRadius:
                "20px",

              padding:
                "8px 25px",
            }}
          >
            {serviceData.symptoms.map(
              (item, index) => (
                <div
                  key={item}
                  style={{
                    display:
                      "flex",

                    gap:
                      "12px",

                    padding:
                      "17px 0",

                    borderBottom:
                      index ===
                      serviceData
                        .symptoms
                        .length -
                        1
                        ? "none"
                        : "1px solid #edf1f5",
                  }}
                >
                  <span
                    style={{
                      width:
                        "25px",

                      height:
                        "25px",

                      flexShrink:
                        0,

                      borderRadius:
                        "50%",

                      background:
                        "#e7f4ff",

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
                  </span>

                  <span
                    style={{
                      lineHeight:
                        1.7,

                      fontWeight:
                        750,
                    }}
                  >
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          작업 과정
      ===================================================== */}

      <section
        style={{
          padding:
            "68px 20px",

          background:
            "#f2f6fa",
        }}
      >
        <div
          style={{
            maxWidth:
              "1020px",

            margin:
              "0 auto",
          }}
        >
          <h2
            style={{
              textAlign:
                "center",

              fontSize:
                "32px",

              margin:
                "0 0 30px",
            }}
          >
            {districtName}{" "}
            {serviceData.title} 상담 진행
          </h2>

          <div
            style={{
              display:
                "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(210px,1fr))",

              gap: "14px",
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
                "증상 확인",
                "누수 위치, 물 사용 여부, 발생 시점을 확인합니다.",
              ],

              [
                "03",
                "원인 점검",
                "배관·방수층·외부 유입 등 가능한 원인을 확인합니다.",
              ],

              [
                "04",
                "작업 안내",
                "확인된 원인과 현장 상태에 맞춰 필요한 범위를 안내합니다.",
              ],
            ].map(
              ([
                number,
                title,
                text,
              ]) => (
                <article
                  key={
                    number
                  }
                  style={{
                    background:
                      "#ffffff",

                    border:
                      "1px solid #e2e8f0",

                    borderRadius:
                      "17px",

                    padding:
                      "23px",
                  }}
                >
                  <div
                    style={{
                      color:
                        "#0874d9",

                      fontSize:
                        "12px",

                      fontWeight:
                        950,
                    }}
                  >
                    STEP {number}
                  </div>

                  <h3
                    style={{
                      margin:
                        "9px 0 7px",

                      fontSize:
                        "20px",
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    style={{
                      margin:
                        0,

                      color:
                        "#64748b",

                      fontSize:
                        "14px",

                      lineHeight:
                        1.7,
                    }}
                  >
                    {text}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        style={{
          padding:
            "68px 20px",

          background:
            "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth:
              "900px",

            margin:
              "0 auto",
          }}
        >
          <div
            style={{
              textAlign:
                "center",

              color:
                "#0874d9",

              fontSize:
                "13px",

              fontWeight:
                950,
            }}
          >
            FAQ
          </div>

          <h2
            style={{
              margin:
                "8px 0 28px",

              textAlign:
                "center",

              fontSize:
                "32px",

              letterSpacing:
                "-1.6px",
            }}
          >
            {districtName}{" "}
            {serviceData.title} 자주 묻는 질문
          </h2>

          <div
            style={{
              display:
                "grid",

              gap:
                "12px",
            }}
          >
            {serviceData.faq.map(
              (faq) => (
                <article
                  key={
                    faq.q
                  }
                  style={{
                    border:
                      "1px solid #e1e7ed",

                    background:
                      "#f8fafc",

                    borderRadius:
                      "15px",

                    padding:
                      "21px",
                  }}
                >
                  <h3
                    style={{
                      margin:
                        0,

                      fontSize:
                        "17px",

                      lineHeight:
                        1.6,
                    }}
                  >
                    Q. {districtName}{" "}
                    {faq.q}
                  </h3>

                  <p
                    style={{
                      margin:
                        "10px 0 0",

                      color:
                        "#64748b",

                      fontSize:
                        "14px",

                      lineHeight:
                        1.8,
                    }}
                  >
                    A. {faq.a}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          같은 지역 다른 서비스
      ===================================================== */}

      <section
        style={{
          padding:
            "60px 20px",

          background:
            "#eef5fb",
        }}
      >
        <div
          style={{
            maxWidth:
              "1000px",

            margin:
              "0 auto",
          }}
        >
          <h2
            style={{
              textAlign:
                "center",

              margin:
                "0 0 23px",

              fontSize:
                "28px",
            }}
          >
            {districtName} 다른 누수 서비스
          </h2>

          <div
            style={{
              display:
                "flex",

              justifyContent:
                "center",

              flexWrap:
                "wrap",

              gap:
                "9px",
            }}
          >
            {otherServices.map(
              ([
                slug,
                item,
              ]) => (
                <Link
                  key={slug}
                  href={`/services/${slug}/${region}/${district}`}
                  style={{
                    textDecoration:
                      "none",

                    background:
                      "#ffffff",

                    color:
                      "#334155",

                    border:
                      "1px solid #d9e2ea",

                    borderRadius:
                      "10px",

                    padding:
                      "11px 14px",

                    fontSize:
                      "14px",

                    fontWeight:
                      850,
                  }}
                >
                  {districtName}{" "}
                  {item.title}
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          같은 서비스 다른 지역
      ===================================================== */}

      <section
        style={{
          padding:
            "60px 20px",

          background:
            "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth:
              "1000px",

            margin:
              "0 auto",
          }}
        >
          <h2
            style={{
              textAlign:
                "center",

              margin:
                "0 0 22px",

              fontSize:
                "28px",
            }}
          >
            {regionData.name} 다른 지역{" "}
            {serviceData.title}
          </h2>

          <div
            style={{
              display:
                "flex",

              flexWrap:
                "wrap",

              justifyContent:
                "center",

              gap:
                "8px",
            }}
          >
            {nearbyDistricts.map(
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

                    color:
                      "#334155",

                    background:
                      "#f8fafc",

                    border:
                      "1px solid #e0e7ee",

                    borderRadius:
                      "9px",

                    padding:
                      "10px 13px",

                    fontSize:
                      "13px",

                    fontWeight:
                      800,
                  }}
                >
                  {name}{" "}
                  {serviceData.title}
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        style={{
          padding:
            "68px 20px",

          background:
            "linear-gradient(135deg,#0759ad,#087ee3)",

          color:
            "#ffffff",

          textAlign:
            "center",
        }}
      >
        <div
          style={{
            maxWidth:
              "760px",

            margin:
              "0 auto",
          }}
        >
          <div
            style={{
              color:
                "#cfe8ff",

              fontSize:
                "13px",

              fontWeight:
                850,
            }}
          >
            {fullArea} 누수 상담
          </div>

          <h2
            style={{
              margin:
                "9px 0 0",

              fontSize:
                "34px",

              letterSpacing:
                "-1.6px",
            }}
          >
            {districtName}{" "}
            {serviceData.title} 문의
          </h2>

          <p
            style={{
              margin:
                "15px 0 0",

              lineHeight:
                1.8,

              color:
                "#d9ecff",
            }}
          >
            현재 누수 위치와 증상,
            발생 시점을 알려주세요.
            <br />
            사진이 있다면 문자로 함께 보내주셔도 됩니다.
          </p>

          <div
            style={{
              display:
                "flex",

              flexWrap:
                "wrap",

              justifyContent:
                "center",

              gap:
                "10px",

              marginTop:
                "25px",
            }}
          >
            <a
              href={PHONE_LINK}
              style={{
                background:
                  "#ffffff",

                color:
                  "#075cab",

                textDecoration:
                  "none",

                borderRadius:
                  "12px",

                padding:
                  "15px 23px",

                fontWeight:
                  950,
              }}
            >
              📞 {PHONE_DISPLAY}
            </a>

            <a
              href={SMS_LINK}
              style={{
                background:
                  "#111827",

                color:
                  "#ffffff",

                textDecoration:
                  "none",

                borderRadius:
                  "12px",

                padding:
                  "15px 23px",

                fontWeight:
                  900,
              }}
            >
              💬 문자 문의
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        style={{
          background:
            "#071827",

          color:
            "#91a3b7",

          padding:
            "36px 20px 95px",
        }}
      >
        <div
          style={{
            maxWidth:
              "1000px",

            margin:
              "0 auto",

            fontSize:
              "13px",

            lineHeight:
              1.9,
          }}
        >
          <strong
            style={{
              color:
                "#ffffff",

              fontSize:
                "20px",
            }}
          >
            {COMPANY}
          </strong>

          <div
            style={{
              marginTop:
                "10px",
            }}
          >
            대표자 : {OWNER}
          </div>

          <div>
            대표전화 : {PHONE_DISPLAY}
          </div>

          <div>
            홈페이지 : nusudaehak.com
          </div>
        </div>
      </footer>

      {/* =====================================================
          모바일 하단 상담
      ===================================================== */}

      <div
        style={{
          position:
            "fixed",

          left:
            0,

          right:
            0,

          bottom:
            0,

          zIndex:
            999,

          display:
            "grid",

          gridTemplateColumns:
            "1fr 1fr",

          boxShadow:
            "0 -5px 20px rgba(0,0,0,.15)",
        }}
      >
        <a
          href={PHONE_LINK}
          style={{
            background:
              "#0874d9",

            color:
              "#ffffff",

            textDecoration:
              "none",

            textAlign:
              "center",

            padding:
              "17px",

            fontWeight:
              950,
          }}
        >
          📞 전화 상담
        </a>

        <a
          href={SMS_LINK}
          style={{
            background:
              "#111827",

            color:
              "#ffffff",

            textDecoration:
              "none",

            textAlign:
              "center",

            padding:
              "17px",

            fontWeight:
              950,
          }}
        >
          💬 문자 상담
        </a>
      </div>
    </main>
  );
}
