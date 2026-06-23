# Product Landing — 고전환 단일오퍼형 (신제품 세일즈)

신제품·단일상품을 **스크롤로 설득해 단일 CTA(구매)로** 미는 세일즈 랜딩 템플릿.
"가게 소개"가 아니라 **전환(conversion)** 이 목적인 장르입니다.

Next.js 16 (App Router) + Tailwind v4. 외부 이미지/폰트 CDN 의존성 없이 즉시 렌더.

데모 브랜드: `Pebble Buds` 무선 이어버드 (가상 — 포트폴리오 샘플)

---

## 왜 이 구조인가 (구조 해부)

소개형(필라테스·카페)이 "여러 메뉴를 둘러보게" 한다면, 세일즈 랜딩은
**하나의 제품을 위→아래로 읽으며 설득**시켜 **단 하나의 행동(구매)** 으로 모읍니다.
그래서 모든 섹션이 전환 깔때기(funnel) 한 방향을 가리킵니다.

| 순서 | 섹션 | 전환 역할 |
|---|---|---|
| 1 | `Hero` | 후킹 카피 + 제품샷 + **단일 CTA** + 가격·한정 뱃지 |
| 2 | `Problem` | "이런 불편 있으셨죠" — 공감으로 붙잡기 |
| 3 | `Features` | 핵심 4기능, 좌우 alternating 비주얼 |
| 4 | `UseCases` | 사용 씬 — "내 일상에도" |
| 5 | `Compare` | 경쟁/보급형 대비 비교표 — 우위 각인 |
| 6 | `SocialProof` | 판매량·평점·후기 — 신뢰의 증거 |
| 7 | `FAQ` | 배송·호환·환불 — 구매 직전 불안 제거 |
| 8 | `FinalCTA` | 강한 마감(한정·보증) + **구매 신청 폼** |
| + | `StickyCTA` | 모바일 하단 고정 구매 바 — 항상 손 닿는 CTA |

가격카드 여러 개·메뉴·갤러리가 **없는 것**이 의도입니다. 오퍼는 하나여야 강합니다.

---

## 🚀 빠른 시작

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드 (타입체크 포함)
```

## ♻️ 새 상품용 리브랜딩

대부분 **`src/lib/site.ts` 한 파일**만 수정하면 됩니다.

| 바꿀 것 | 위치 |
|---|---|
| 브랜드·후킹카피·가격·한정·보증 | `src/lib/site.ts` → `site` |
| 구매 옵션(색상 등) | `options` |
| 문제 제기 | `problems` |
| 핵심 기능(좌우 교차) | `features` (아이콘 키는 `Features.tsx` 의 `ICONS`) |
| 사용 씬 | `useCases` |
| 비교표 | `compare` |
| 판매 지표·후기 | `proofStats`, `reviews` |
| 자주 묻는 질문 | `faqs` |
| **색상 톤** | `src/app/globals.css` 상단 `@theme` (특히 `--color-volt` 액센트) |

## 🖼️ 제품 사진 넣기

기본은 사진 없이 동작하도록 **스타일라이즈드 SVG**(`BudsVisual.tsx`)와 그라데이션
패널을 씁니다. 실제 납품 시 `사진 교체 지점` 주석 위치를 `<img>`로 교체하세요:

- 히어로 제품샷: `src/components/Hero.tsx` (`BudsVisual` → 제품 사진)
- 사용 씬 배경: `src/components/UseCases.tsx`

## 📩 구매 신청 폼

폼은 서버 액션(`src/app/actions.ts`)으로 동작합니다(소개형 템플릿과 공유 자산).
`.env.local` 에 키를 넣으면 해당 채널만 자동으로 켜집니다(슬랙·이메일·구글시트·SMS).
필드 매핑: 색상 → `program`, 요청사항 → `memo`.

## ☁️ 배포 (Vercel)

GitHub 연동 시 push만 하면 자동 배포. 환경변수는 Vercel 프로젝트 설정에 등록.

---

> ⚠️ 가상 브랜드 제작 샘플입니다. 실존 제품·타인 계정/URL을 넣지 마세요.
