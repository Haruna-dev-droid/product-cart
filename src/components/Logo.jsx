import React from "react";

export default function Logo({ size = 120, color = "#111" }) {
  return (
    <div>
      {" "}
      <svg
        width="200"
        height="45"
        viewBox="0 0 260 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="#111"
          stroke-width="7"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="#eee"
        >
          <path d="M20 30 h35 v35 h-35 z" />
          <path d="M25 30 a12 12 0 0 1 30 0" />
        </g>

        <text
          x="70"
          y="52"
          font-size="34"
          font-family="Poppins, Arial, sans-serif"
          font-weight="500"
          fill="#eee"
        >
          Dr!pnow
        </text>
      </svg>
    </div>
  );
}
