import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <div className={`inline-flex items-center gap-1 sm:gap-1.5 select-none ${className}`}>
      {/* Zero-Margin Isometric 3-Layer Mark */}
      <svg
        viewBox="10 7 44 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-[19px] w-[17px] sm:h-[26px] sm:w-[23px] shrink-0"
      >
        <path
          d="M32 58L10 47L32 36L54 47L32 58Z"
          fill={isDark ? "rgba(255,255,255,0.08)" : "#E2E8F0"}
        />
        <path d="M32 53L10 42L32 31L54 42L32 53Z" fill="#0AAA8C" />
        <path d="M32 41L10 30L32 19L54 30L32 41Z" fill="#0EA5E9" />
        <path d="M32 29L10 18L32 7L54 18L32 29Z" fill="#4B42D6" />
      </svg>

      {/* Proportional Mobile & Desktop Wordmark ("LOGIC" always #0AAA8C) */}
      <span
        className={`font-display text-[17px] sm:text-[22px] tracking-[-0.03em] leading-none ${
          isDark ? "text-white" : "text-[#0B132B]"
        }`}
      >
        <strong className="font-extrabold">CRAFT</strong>
        <span className="font-medium" style={{ color: "#0AAA8C" }}>
          LOGIC
        </span>
      </span>
    </div>
  );
}

export default Logo;