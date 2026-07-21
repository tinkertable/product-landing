import { proofStats, reviews } from "@/lib/site";

export function SocialProof() {
  return (
    <section id="reviews" className="scroll-mt-16 border-t border-line bg-coal">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        {/* 지표 */}
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {proofStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-night/40 px-5 py-7 text-center"
            >
              <dt className="text-3xl font-black tracking-tight text-volt sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-xs font-medium text-mute sm:text-sm">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>

        {/* 후기 */}
        <div className="mt-14 max-w-2xl">
          <h2 className="text-2xl font-black leading-snug tracking-tight text-snow sm:text-4xl">
            먼저 써본 분들의 후기
          </h2>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.author}
              className="flex flex-col rounded-2xl border border-line bg-coal-2/60 p-6"
            >
              <blockquote className="flex-1 leading-relaxed text-snow">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-bold text-snow">{r.author}</span>
                <span className="ml-2 text-mute">{r.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
