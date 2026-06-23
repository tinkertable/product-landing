import { faqs } from "@/lib/site";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 border-t border-line bg-night">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-volt">
            FAQ
          </span>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-snow sm:text-4xl">
            구매 전 궁금한 것들
          </h2>
        </div>

        <div className="mt-12 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-coal">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="text-[0.97rem] font-semibold text-snow">
                  {f.q}
                </span>
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-line text-mute transition-transform group-open:rotate-45">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="px-6 pb-5 text-sm leading-relaxed text-mute">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
