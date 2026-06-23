import { compare } from "@/lib/site";

export function Compare() {
  return (
    <section id="compare" className="scroll-mt-16 border-t border-line bg-night">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-volt">
            Compare
          </span>
          <h2 className="mt-3 text-2xl font-black leading-snug tracking-tight text-snow sm:text-4xl">
            왜 보급형이 아니라 Pebble Buds인가
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-line">
          {/* 헤더 */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-coal-2 text-sm font-bold">
            <div className="px-4 py-4 text-mute sm:px-6">항목</div>
            <div className="border-l border-line px-4 py-4 text-center text-night">
              <span className="rounded-md bg-volt px-2.5 py-1">
                {compare.ours}
              </span>
            </div>
            <div className="border-l border-line px-4 py-4 text-center text-mute">
              {compare.theirs}
            </div>
          </div>

          {/* 행 */}
          {compare.rows.map((r, i) => (
            <div
              key={r.label}
              className={
                "grid grid-cols-[1.2fr_1fr_1fr] text-sm " +
                (i % 2 ? "bg-coal/40" : "bg-coal")
              }
            >
              <div className="px-4 py-4 font-medium text-mute sm:px-6">
                {r.label}
              </div>
              <div className="flex items-center justify-center gap-1.5 border-l border-line px-3 py-4 text-center font-bold text-snow">
                <svg className="h-4 w-4 flex-none text-volt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
                {r.ours}
              </div>
              <div className="border-l border-line px-3 py-4 text-center text-mute-soft">
                {r.theirs}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
