"use server";

/**
 * 예약/상담 신청 서버 액션.
 *
 * ▼▼ 실제 납품 시 연동 지점 (택1 또는 병행) ▼▼
 *  1) 카카오 알림톡 / 문자  : 솔라피(SOLAPI), 알리고 등 API 호출
 *  2) 이메일                : Resend, Nodemailer 로 사장님 메일함에 전송
 *  3) 구글시트              : Google Sheets API 로 행 추가 (가장 저렴)
 *  4) 슬랙/디스코드 웹훅     : 가장 빠른 실시간 알림
 *
 * 환경변수(.env.local)에 키를 넣으면 해당 채널만 자동으로 켜집니다(없으면 건너뜀).
 * 기본 무료 채널: 이메일(Resend), 구글시트(Apps Script). 유료 옵션: 카톡/문자(솔라피).
 */

import crypto from "node:crypto";

export type ReservationState = {
  ok: boolean;
  message: string;
};

export async function submitReservation(
  _prev: ReservationState | null,
  formData: FormData,
): Promise<ReservationState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const program = String(formData.get("program") ?? "").trim();
  const memo = String(formData.get("memo") ?? "").trim();

  // 간단 검증
  if (name.length < 2) {
    return { ok: false, message: "이름을 정확히 입력해 주세요." };
  }
  if (!/^01[0-9]-?\d{3,4}-?\d{4}$/.test(phone.replace(/\s/g, ""))) {
    return { ok: false, message: "휴대폰 번호 형식을 확인해 주세요. (예: 010-1234-5678)" };
  }

  const payload = {
    name,
    phone,
    program: program || "미선택",
    memo: memo || "-",
    // 서버 액션 안에서는 Date.now() 사용 가능 (워크플로 스크립트와 무관)
    receivedAt: new Date().toISOString(),
  };

  // 알림에 공통으로 쓰는 제목/본문 라인
  const title = "새 체험 예약";
  const lines = [
    `• 이름: ${name}`,
    `• 연락처: ${phone}`,
    `• 프로그램: ${payload.program}`,
    `• 메모: ${payload.memo}`,
    `• 접수: ${payload.receivedAt}`,
  ];

  // 1) 슬랙 웹훅 알림 (SLACK_WEBHOOK_URL)
  if (process.env.SLACK_WEBHOOK_URL) {
    try {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: [`📩 *${title}*`, ...lines].join("\n") }),
      });
    } catch (e) {
      console.error("[슬랙 웹훅 실패]", e);
    }
  }

  // 2) 이메일 알림 (Resend REST API — RESEND_API_KEY + OWNER_EMAIL)
  if (process.env.RESEND_API_KEY && process.env.OWNER_EMAIL) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // 도메인 인증 전 테스트는 onboarding@resend.dev 사용 (계정 소유 메일로만 수신)
          from: process.env.NOTIFY_FROM_EMAIL || "예약알림 <onboarding@resend.dev>",
          to: process.env.OWNER_EMAIL,
          subject: `[${title}] ${name}님`,
          text: lines.join("\n"),
        }),
      });
      if (!res.ok) {
        console.error("[이메일 전송 실패]", res.status, await res.text());
      } else {
        console.log("[이메일 전송 성공]", process.env.OWNER_EMAIL);
      }
    } catch (e) {
      console.error("[이메일 전송 오류]", e);
    }
  } else {
    console.warn("[이메일] 환경변수 누락 → RESEND_API_KEY 있음?:", !!process.env.RESEND_API_KEY, "/ OWNER_EMAIL 있음?:", !!process.env.OWNER_EMAIL);
  }

  // 3) 구글시트 기록 (Apps Script 웹앱 URL — SHEETS_WEBHOOK_URL)
  if (process.env.SHEETS_WEBHOOK_URL) {
    try {
      await fetch(process.env.SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.error("[구글시트 기록 실패]", e);
    }
  }

  // 4) 카톡/문자 즉시 알림 (유료 옵션 — 솔라피 SMS)
  //    SOLAPI_API_KEY / SOLAPI_API_SECRET / SOLAPI_FROM(등록 발신번호) / OWNER_PHONE(사장님 번호)
  if (
    process.env.SOLAPI_API_KEY &&
    process.env.SOLAPI_API_SECRET &&
    process.env.SOLAPI_FROM &&
    process.env.OWNER_PHONE
  ) {
    try {
      const date = new Date().toISOString();
      const salt = crypto.randomBytes(16).toString("hex");
      const signature = crypto
        .createHmac("sha256", process.env.SOLAPI_API_SECRET)
        .update(date + salt)
        .digest("hex");
      const res = await fetch("https://api.solapi.com/messages/v4/send", {
        method: "POST",
        headers: {
          Authorization: `HMAC-SHA256 apiKey=${process.env.SOLAPI_API_KEY}, date=${date}, salt=${salt}, signature=${signature}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            to: process.env.OWNER_PHONE,
            from: process.env.SOLAPI_FROM,
            text: `[${title}] ${name} ${phone} 새 문의`,
          },
        }),
      });
      if (!res.ok) {
        console.error("[문자 전송 실패]", res.status, await res.text());
      } else {
        console.log("[문자 전송 성공]", process.env.OWNER_PHONE);
      }
    } catch (e) {
      console.error("[문자 전송 오류]", e);
    }
  }

  console.log("[예약 신청 접수]", payload);

  return {
    ok: true,
    message: `${name}님, 신청이 접수되었습니다. 영업시간 내 연락드리겠습니다 🌿`,
  };
}
