import { problems } from "@/lib/site";

export function Problem() {
  return (
    <section className="border-t border-line bg-coal">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-volt">
            이런 불편, 있으셨죠
          </span>
          <h2 className="mt-3 text-2xl font-black leading-snug tracking-tight text-snow sm:text-4xl">
            매번 ‘이 정도면 됐지’ 하고
            <br className="hidden sm:block" /> 참아온 이어폰의 한계
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-line bg-coal-2/60 p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-night text-lg">
                😣
              </span>
              <h3 className="mt-4 text-base font-bold text-snow">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-lg font-semibold text-snow">
          그 불편, <span className="text-volt">Pebble Buds</span>에서 끝납니다. ↓
        </p>
      </div>
    </section>
  );
}
