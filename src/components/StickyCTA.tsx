import { site } from "@/lib/site";

/** 모바일 하단 고정 CTA 바 (데스크탑에선 숨김 — 상단 Nav CTA가 대체) */
export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-night/95 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="leading-tight">
          <p className="text-[11px] text-mute line-through">
            {site.priceOriginal}원
          </p>
          <p className="text-base font-black text-snow">
            {site.price}
            <span className="text-sm font-bold">원</span>
            <span className="ml-1.5 text-xs font-bold text-volt">
              {site.discountLabel}
            </span>
          </p>
        </div>
        <a
          href="#order"
          className="flex-none rounded-full bg-volt px-6 py-3 text-sm font-bold text-night"
        >
          지금 구매
        </a>
      </div>
    </div>
  );
}
