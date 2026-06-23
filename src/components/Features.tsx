import { features } from "@/lib/site";

const ICONS: Record<string, React.ReactNode> = {
  wave: (
    <>
      <path d="M3 12h2M19 12h2" />
      <path d="M7 8v8M11 5v14M15 8v8" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="8" width="15" height="8" rx="2" />
      <path d="M21 11v2" />
      <path d="M6 11v2M9 11v2" />
    </>
  ),
  feather: (
    <>
      <path d="M20 4c-4 0-9 2-12 6-2 2.5-3 6-3 9" />
      <path d="M5 19c3 0 7-1 9.5-3.5C17 13 19 9 19 6" />
      <path d="M9 13h6" />
    </>
  ),
  drop: (
    <>
      <path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11Z" />
      <path d="M9 14a3 3 0 0 0 3 3" />
    </>
  ),
};

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-t border-line bg-night">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-volt">
            Why Pebble Buds
          </span>
          <h2 className="mt-3 text-2xl font-black leading-snug tracking-tight text-snow sm:text-4xl">
            네 가지가, 가격을 잊게 합니다
          </h2>
        </div>

        <div className="mt-16 space-y-16 sm:space-y-24">
          {features.map((f, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={f.tag}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                {/* 비주얼 패널 */}
                <div className={flip ? "lg:order-2" : ""}>
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-coal-2 to-coal">
                    <div
                      aria-hidden
                      className="glow absolute h-72 w-72 opacity-70"
                    />
                    <svg
                      className="relative h-24 w-24 text-volt"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {ICONS[f.icon]}
                    </svg>
                    <span className="absolute bottom-5 left-5 rounded-full border border-line bg-night/60 px-3 py-1 text-xs font-bold text-snow">
                      {f.tag}
                    </span>
                  </div>
                </div>

                {/* 카피 */}
                <div className={flip ? "lg:order-1" : ""}>
                  <span className="text-sm font-bold text-volt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 whitespace-pre-line text-2xl font-black leading-tight tracking-tight text-snow sm:text-3xl">
                    {f.title}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-mute">
                    {f.desc}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {f.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-line bg-coal px-3.5 py-1.5 text-sm font-medium text-snow"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
