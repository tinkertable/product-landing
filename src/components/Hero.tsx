import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-night pt-24">
      {/* volt 글로우 배경 */}
      <div
        aria-hidden
        className="glow pointer-events-none absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 opacity-80"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-16 sm:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* 좌측: 카피 + CTA */}
          <div className="rise order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-volt/40 bg-volt/10 px-3.5 py-1.5 text-xs font-bold text-volt">
              ● {site.limitedLabel}
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.1] tracking-tight text-snow sm:text-6xl">
              {site.hook}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-mute sm:text-lg">
              {site.subhook}
            </p>

            {/* 가격 */}
            <div className="mt-8 flex items-end gap-3">
              <span className="text-lg text-mute line-through">
                {site.priceOriginal}원
              </span>
              <span className="text-4xl font-black tracking-tight text-snow sm:text-5xl">
                {site.price}
                <span className="text-2xl font-bold">원</span>
              </span>
              <span className="mb-1 rounded-md bg-volt px-2 py-0.5 text-xs font-black text-night">
                {site.discountLabel}
              </span>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#order"
                className="rounded-full bg-volt px-8 py-4 text-center text-base font-black text-night transition-transform hover:-translate-y-0.5"
              >
                지금 구매하기
              </a>
              <a
                href="#features"
                className="rounded-full border border-line px-8 py-4 text-center text-base font-semibold text-snow transition-colors hover:border-snow/40"
              >
                기능 자세히 보기
              </a>
            </div>

            <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-mute">
              <span>✓ {site.shipNote}</span>
              <span>✓ {site.guarantee}</span>
            </p>
          </div>

          {/* 우측: 제품 비주얼 (실제 제품 사진) */}
          <div className="rise relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-line shadow-2xl shadow-black/40">
              <img
                src="/product/hero-buds.jpg"
                alt="Pebble Buds 무선 이어버드와 충전 케이스"
                className="aspect-[4/3] w-full object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(60% 55% at 72% 18%, rgba(200,241,53,.16), transparent 60%), linear-gradient(180deg, transparent 60%, rgba(10,10,13,.35))",
                }}
              />
              <span className="absolute bottom-4 left-4 rounded-full border border-line bg-night/60 px-3 py-1 text-xs font-bold text-snow backdrop-blur">
                Pebble Buds Pro
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
