"use client";

import { useActionState } from "react";
import { submitReservation, type ReservationState } from "@/app/actions";
import { site, options } from "@/lib/site";

const initialState: ReservationState | null = null;

export function FinalCTA() {
  const [state, formAction, pending] = useActionState(
    submitReservation,
    initialState,
  );

  return (
    <section id="order" className="relative scroll-mt-16 overflow-hidden border-t border-line bg-night">
      <div
        aria-hidden
        className="glow pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 opacity-70"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2">
        {/* 좌측: 강한 마감 */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-volt/40 bg-volt/10 px-3.5 py-1.5 text-xs font-bold text-volt">
            ● {site.limitedLabel} · 마감 임박
          </span>
          <h2 className="mt-5 text-3xl font-black leading-[1.12] tracking-tight text-snow sm:text-5xl">
            지금이 가장
            <br />
            <span className="text-volt">싸게</span> 사는 순간
          </h2>

          <div className="mt-7 flex items-end gap-3">
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

          <ul className="mt-8 space-y-3 text-[0.97rem]">
            {[
              site.shipNote,
              site.guarantee,
              "1년 무상 A/S · 한쪽 단품 구매 지원",
              "이어팁 S·M·L + USB-C 케이블 기본 포함",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-snow">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-volt/15 text-volt">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* 우측: 구매 신청 폼 */}
        <div className="rounded-3xl border border-line bg-coal p-7 sm:p-8">
          {state?.ok ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-volt/15 text-volt">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-snow">{state.message}</p>
            </div>
          ) : (
            <form action={formAction} className="space-y-5">
              <p className="text-lg font-bold text-snow">구매 신청</p>
              <p className="-mt-3 text-sm text-mute">
                남겨주시면 담당자가 연락드려 결제·배송을 도와드립니다.
              </p>

              <Field label="이름" htmlFor="name">
                <input id="name" name="name" required placeholder="홍길동" className="input" />
              </Field>

              <Field label="연락받을 휴대폰" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  required
                  inputMode="tel"
                  placeholder="010-1234-5678"
                  className="input"
                />
              </Field>

              <Field label="색상" htmlFor="program">
                <select id="program" name="program" defaultValue="" className="input">
                  <option value="" disabled>
                    선택해 주세요
                  </option>
                  {options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="요청사항 (선택)" htmlFor="memo">
                <textarea
                  id="memo"
                  name="memo"
                  rows={2}
                  placeholder="예: 2세트 구매 희망합니다 / 부재 시 문앞 배송"
                  className="input resize-none"
                />
              </Field>

              {state && !state.ok && (
                <p className="rounded-xl bg-volt/10 px-4 py-3 text-sm font-medium text-volt">
                  {state.message}
                </p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="w-full rounded-full bg-volt py-4 text-base font-black text-night transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {pending ? "접수 중…" : `${site.price}원에 구매 신청하기`}
              </button>

              <p className="text-center text-xs text-mute-soft">
                남겨주신 정보는 주문 처리 목적으로만 사용되며 안전하게 보관됩니다.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-snow">
        {label}
      </label>
      {children}
    </div>
  );
}
