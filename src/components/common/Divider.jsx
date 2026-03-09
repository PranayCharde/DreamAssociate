import React from 'react';

export function Divider({ color = 'fill-slate-50', flip = false }) {
  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}>
      <svg
        className={`relative block w-[calc(100%+1.3px)] h-[50px] ${color}`}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 120L0 120 309.19 8.1c61.22-4.7 122.39-12.7 184-7 66.05 6.1 127.39 27.9 196.7 54.4a572.9 572.9 0 00196.4 54c60 0 119-20 180-20H1200V120z"></path>
      </svg>
    </div>
  );
}
