import { useCases } from "@/lib/site";

export function UseCases() {
  return (
    <section className="border-t border-line bg-coal">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-volt">
            Use cases
          </span>
          <h2 className="mt-3 text-2xl font-black leading-snug tracking-tight text-snow sm:text-4xl">
            아침부터 밤까지, 하루 종일
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u) => (
            <div
              key={u.title}
              className="group relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-coal-2 to-night p-7"
            >
              {/* 사진 교체 지점: 각 씬 배경에 실제 사용 사진 삽입 가능 */}
              <span className="text-4xl">{u.emoji}</span>
              <h3 className="mt-5 text-lg font-bold text-snow">{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
