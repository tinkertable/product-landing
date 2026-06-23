/**
 * 제품 비주얼 (가상) — 실사진 대신 스타일라이즈드 SVG 이어버드.
 * 납품 시 이 컴포넌트를 실제 제품 사진(<img>)으로 교체하면 됩니다.
 * (사진 교체 지점)
 */
export function BudsVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 360"
      className={className}
      role="img"
      aria-label="Pebble Buds 무선 이어버드"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="budBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fdfdff" />
          <stop offset="0.55" stopColor="#d9dae2" />
          <stop offset="1" stopColor="#a9abb8" />
        </linearGradient>
        <linearGradient id="caseBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#26262f" />
          <stop offset="1" stopColor="#15151b" />
        </linearGradient>
        <radialGradient id="tip" cx="0.4" cy="0.35" r="0.8">
          <stop offset="0" stopColor="#c8f135" />
          <stop offset="1" stopColor="#88a814" />
        </radialGradient>
      </defs>

      {/* 좌측 버드 */}
      <g transform="rotate(-18 120 150)">
        <rect x="98" y="70" width="44" height="118" rx="22" fill="url(#budBody)" />
        <ellipse cx="120" cy="78" rx="30" ry="26" fill="url(#budBody)" />
        <circle cx="120" cy="78" r="11" fill="url(#tip)" />
        <rect x="112" y="150" width="16" height="30" rx="8" fill="#bcbec9" />
      </g>

      {/* 우측 버드 */}
      <g transform="rotate(16 244 150)">
        <rect x="222" y="70" width="44" height="118" rx="22" fill="url(#budBody)" />
        <ellipse cx="244" cy="78" rx="30" ry="26" fill="url(#budBody)" />
        <circle cx="244" cy="78" r="11" fill="url(#tip)" />
        <rect x="236" y="150" width="16" height="30" rx="8" fill="#bcbec9" />
      </g>

      {/* 충전 케이스 */}
      <g>
        <rect x="118" y="220" width="124" height="86" rx="26" fill="url(#caseBody)" stroke="rgba(255,255,255,0.08)" />
        <rect x="146" y="247" width="68" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
        <circle cx="180" cy="288" r="5" fill="#c8f135" />
      </g>
    </svg>
  );
}
