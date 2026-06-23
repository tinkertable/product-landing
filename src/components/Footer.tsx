import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-night pb-24 md:pb-0">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div>
            <p className="text-lg font-black tracking-tight text-snow">
              {site.brand}
              <span className="text-volt">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mute">
              {site.hook}. 더 가볍게, 더 조용하게, 더 오래.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 text-sm text-mute">
            <p className="text-xs font-bold uppercase tracking-wider text-mute-soft">
              구매·문의
            </p>
            <a href={site.phoneHref} className="hover:text-snow">
              {site.phone}
            </a>
            <span>{site.email}</span>
            {site.kakaoUrl && (
              <a href={site.kakaoUrl} target="_blank" rel="noreferrer" className="hover:text-snow">
                카카오톡 문의
              </a>
            )}
            <a href="#order" className="font-semibold text-volt hover:underline">
              지금 구매하기 →
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-xs text-mute-soft">
          <p>
            © {site.brand}. 가상 브랜드 제작 샘플(포트폴리오)이며 실제 판매
            제품이 아닙니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
