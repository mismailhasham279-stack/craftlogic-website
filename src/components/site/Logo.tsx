import React from "react";
import { Link } from "@tanstack/react-router";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <Link
      to="/"
      hash="home"
      aria-label="CRAFTLOGIC Home"
      className={`focus-ring group flex items-center gap-3.5 select-none transition-transform duration-200 active:scale-[0.98] ${className}`}
    >
      {/* Logo Graphic Container - No Ugly White Box */}
      <div className="relative flex items-center justify-center">
        {/* Subtle Luxury Gold Ambient Backlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/25 blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg"
        />

        {/* 
          1. h-9 to h-11: Perfect proportional scale (chota nahi dikhega)
          2. mix-blend-screen / brightness / contrast: Agar white background wali image bhi ho,
             toh white background black mein disappear ho jayega aur logo mark golden/white dikhega
        */}
        <img
          src="/logo.png"
          alt="CRAFTLOGIC Emblem"
          width={44}
          height={44}
          className="h-9 w-auto object-contain sm:h-10 md:h-11 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all duration-300 group-hover:scale-105"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Brand Typography (Crisp White + Micro Gold Tagline) */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-display text-base font-extrabold tracking-[0.14em] text-foreground uppercase sm:text-lg">
            CRAFTLOGIC
          </span>
          <span className="font-mono text-[9px] font-semibold tracking-[0.2em] text-primary uppercase sm:text-[10px]">
            DIGITAL AGENCY
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;


