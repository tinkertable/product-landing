/**
 * ───────────────────────────────────────────────────────────────
 *  사이트 설정 — 리브랜딩은 이 파일 하나만 수정하면 됩니다.
 *  새 상품에 납품할 때: 아래 값만 교체 → 배포 끝.
 *
 *  ⚠️ 가상 브랜드 제작 샘플입니다. 실존 제품·타인 계정/URL 금지.
 *     계정 URL은 실제 채널이 생기기 전까지 "" 로 비워 둡니다(링크 숨김).
 * ───────────────────────────────────────────────────────────────
 */

export const site = {
  /** 브랜드 / 제품 (가상) */
  brand: "Pebble Buds",
  brandEn: "PEBBLE BUDS",
  product: "Pebble Buds Pro",
  /** 한 줄 후킹 카피 */
  hook: "끼는 순간, 세상이 음소거됩니다",
  subhook:
    "액티브 노이즈 캔슬링 + 38시간 재생 + 4.2g 초경량. 지하철도, 카페도, 사무실도 — 나만의 조용한 공간으로.",

  /** 오퍼 (단일 가격·한정) */
  price: "79,000",
  priceOriginal: "119,000",
  discountLabel: "런칭 35% 할인",
  limitedLabel: "런칭 한정 500세트",
  shipNote: "오늘 주문 시 내일 출발 · 무료배송",
  guarantee: "7일 무조건 환불 보증",

  /** 연락처 (구매 문의) */
  phone: "1660-0000",
  phoneHref: "tel:16600000",
  email: "hello@pebblebuds.example",
  // 실제 채널 URL을 넣으면 노출됩니다. 비워두면(""): 링크 숨김.
  instagramUrl: "",
  kakaoUrl: "",
} as const;

/** 구매 옵션 (색상) — 폼의 program 필드로 전송 */
export const options = ["미드나잇 블랙", "스노우 화이트", "세이지 그린"];

/** 문제 제기 (Problem) — "이런 불편 있으셨죠" */
export const problems = [
  {
    title: "소음에 묻히는 음악",
    desc: "지하철·버스만 타면 볼륨을 올려도 음악이 안 들려, 결국 귀만 아팠던 적.",
  },
  {
    title: "두 시간이면 방전",
    desc: "출근길에 충전했는데 퇴근 전에 꺼져버리는, 늘 충전기를 찾게 되는 배터리.",
  },
  {
    title: "자꾸 끊기는 연결",
    desc: "한쪽만 뚝뚝 끊기고, 통화하면 상대가 ‘잘 안 들린다’고 하던 답답함.",
  },
  {
    title: "오래 끼면 아픈 귀",
    desc: "무겁고 큰 유닛 탓에 30분만 지나도 귀가 배기던 불편함.",
  },
];

/**
 * 핵심 기능 (Features) — 좌우 alternating
 * icon: src/components/Features.tsx 의 ICONS 맵 참조
 */
export const features = [
  {
    icon: "wave",
    tag: "Active Noise Cancelling",
    title: "버튼 한 번에,\n소음이 사라진다",
    desc: "최대 -38dB 액티브 노이즈 캔슬링. 지하철 굉음도, 카페 웅성거림도 한순간에 가라앉습니다. 외부 소리가 필요할 땐 ‘앰비언트 모드’로 즉시 전환.",
    bullets: ["-38dB ANC", "앰비언트(주변음) 모드", "통화 소음 제거 마이크"],
  },
  {
    icon: "battery",
    tag: "38h Battery",
    title: "사흘을 써도\n남는 배터리",
    desc: "본체 9시간 + 케이스 포함 총 38시간. 5분 충전으로 2시간 재생되는 고속 충전까지. 더 이상 ‘충전 깜빡함’ 때문에 무음으로 출근하지 않습니다.",
    bullets: ["본체 9h · 총 38h", "5분 충전 = 2h 재생", "USB-C · 무선충전 지원"],
  },
  {
    icon: "feather",
    tag: "4.2g Ultra-light",
    title: "끼고 있는 걸\n잊는 무게",
    desc: "한쪽 4.2g, 귀에 맞춘 3D 곡면 설계. 자도 안 빠지고, 오래 껴도 배기지 않습니다. 사이즈별 이어팁 3종 기본 제공.",
    bullets: ["한쪽 4.2g", "이어팁 S·M·L 제공", "흔들려도 안 빠지는 핏"],
  },
  {
    icon: "drop",
    tag: "IPX5 Waterproof",
    title: "땀에도, 비에도\n끄떡없이",
    desc: "IPX5 생활방수로 러닝 중 땀이나 갑작스런 소나기에도 안심. 2기기 동시 연결(멀티포인트)로 노트북·폰을 오가며 끊김 없이.",
    bullets: ["IPX5 생활방수", "2기기 멀티포인트", "블루투스 5.3 안정 연결"],
  },
];

/** 사용 씬 (UseCases) */
export const useCases = [
  { emoji: "🚇", title: "출퇴근", desc: "노이즈 캔슬링으로 만원 지하철도 나만의 청취실." },
  { emoji: "🏃", title: "운동·러닝", desc: "IPX5 방수 + 안 빠지는 핏으로 땀에도 걱정 없이." },
  { emoji: "💻", title: "재택·통화", desc: "소음 제거 마이크로 카페에서도 또렷한 회의." },
  { emoji: "🌙", title: "취침·휴식", desc: "4.2g 초경량이라 누워서 들어도 배기지 않게." },
];

/** 비교표 (Compare) — Pebble Buds vs 일반 보급형 */
export const compare = {
  ours: "Pebble Buds Pro",
  theirs: "일반 보급형 이어버드",
  rows: [
    { label: "노이즈 캔슬링", ours: "액티브 -38dB", theirs: "없음", win: true },
    { label: "총 재생시간", ours: "38시간", theirs: "약 12시간", win: true },
    { label: "무게 (한쪽)", ours: "4.2g", theirs: "6g 이상", win: true },
    { label: "방수", ours: "IPX5", theirs: "없음 ~ IPX2", win: true },
    { label: "멀티포인트", ours: "2기기 동시", theirs: "1기기", win: true },
    { label: "고속 충전", ours: "5분 = 2시간", theirs: "지원 안 함", win: true },
    { label: "A/S", ours: "1년 무상", theirs: "제각각", win: true },
  ],
};

/** 신뢰 지표 + 후기 (SocialProof) */
export const proofStats = [
  { value: "12,000+", label: "누적 판매 세트" },
  { value: "4.8/5", label: "구매자 평점" },
  { value: "3,400+", label: "등록 리뷰" },
  { value: "31%", label: "재구매율" },
];

export const reviews = [
  {
    text: "지하철에서 ANC 켜는 순간 진짜 조용해져서 깜짝 놀랐어요. 이 가격에 이 성능이면 반칙입니다.",
    author: "김○○",
    tag: "출퇴근용 · ★★★★★",
  },
  {
    text: "러닝할 때 땀이 나도 멀쩡하고, 무엇보다 안 빠져요. 배터리도 일주일에 한 번 충전하면 충분합니다.",
    author: "이○○",
    tag: "운동용 · ★★★★★",
  },
  {
    text: "재택 회의용으로 샀는데 통화 음질이 제일 만족스러워요. 노트북이랑 폰 동시 연결되는 것도 신세계.",
    author: "박○○",
    tag: "재택근무 · ★★★★☆",
  },
];

/** 자주 묻는 질문 (FAQ) */
export const faqs = [
  {
    q: "배송은 얼마나 걸리나요?",
    a: "오늘 결제 완료 시 영업일 기준 다음 날 출발하며, 보통 1~2일 내 도착합니다. 전국 무료배송이고, 제주·도서산간도 추가 비용 없습니다.",
  },
  {
    q: "아이폰·안드로이드 둘 다 되나요?",
    a: "네. 블루투스 5.3 표준으로 iOS·Android·노트북·태블릿 모두 호환됩니다. 멀티포인트로 두 기기를 동시에 연결해 오갈 수 있습니다.",
  },
  {
    q: "무선 충전이 되나요?",
    a: "지원합니다. USB-C 유선과 Qi 무선 충전 모두 가능해, 쓰던 무선 패드에 그대로 올려두면 됩니다.",
  },
  {
    q: "교환·환불은 어떻게 하나요?",
    a: "수령 후 7일 이내라면 사유 불문 무조건 환불해 드립니다. 위생상 이어팁만 새 제품으로 보내드리니 부담 없이 먼저 써보세요.",
  },
  {
    q: "A/S는 어떻게 받나요?",
    a: "구매일로부터 1년 무상 A/S입니다. 한쪽만 분실·고장 시 단품 구매도 지원하니 통째로 새로 사실 필요가 없습니다.",
  },
];
