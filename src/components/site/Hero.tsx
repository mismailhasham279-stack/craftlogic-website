import React from "react";
import { useReducedMotion, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LaptopShowcase } from "./LaptopShowcase";

interface HeroProps {
  onOpenInquiry?: () => void;
}

export function Hero({ onOpenInquiry }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleOpenProject = () => {
    if (onOpenInquiry) {
      onOpenInquiry();
    } else {
      window.dispatchEvent(new CustomEvent("craftlogic:open-inquiry"));
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative overflow-hidden border-b border-neutral-200/80 bg-[#FAFAFA] pt-7 pb-8 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24"
    >
      {/* Subtle Architectural Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:36px_36px] sm:bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_65%,transparent_100%)]"
      />

      {/* Top Centered Editorial Hero Copy */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 sm:px-3.5 sm:py-1.5 shadow-2xs">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#0AAA8C]" />
            <span className="font-mono text-[9.5px] sm:text-[11px] font-semibold tracking-[0.13em] text-[#0A0A0A] uppercase">
              WEB &amp; SOFTWARE DEVELOPMENT STUDIO
            </span>
          </div>

          {/* High-Class Display Headline */}
          <h1 className="font-display mt-4 sm:mt-6 text-[28px] leading-[1.12] font-extrabold tracking-[-0.035em] text-[#0A0A0A] sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.06]">
            We build fast{" "}
            <span className="text-[#0AAA8C]">websites &amp; software</span> that grow your business.
          </h1>

          {/* Approved Option 1: Ultra-Sharp, Result-Focused Subtitle */}
          <p className="mt-3 sm:mt-5 max-w-2xl text-[13.5px] leading-[1.55] text-neutral-600 sm:text-lg md:text-[19px] sm:leading-[1.6] font-normal">
            Custom websites, mobile apps, and AI-powered software engineered for speed, search
            ranking, and real sales.
          </p>

          {/* Side-by-Side CTAs on Mobile & Desktop */}
          <div className="mt-5 sm:mt-8 flex w-full max-w-md sm:max-w-none flex-row items-center justify-center gap-2.5 sm:gap-4">
            <button
              type="button"
              onClick={handleOpenProject}
              className="inline-flex min-h-[42px] sm:min-h-[48px] flex-1 sm:flex-initial items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#0A0A0A] px-4 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0AAA8C] active:scale-[0.98] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.25]" aria-hidden="true" />
            </button>

            <a
              href="#work"
              className="inline-flex min-h-[42px] sm:min-h-[48px] flex-1 sm:flex-initial items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:border-[#0A0A0A] hover:bg-neutral-50 active:scale-[0.98]"
            >
              <span>Explore Work</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* 6 Focused 3D Flip Tiles + 30 Business Industries Dual Marquee */}
      <div className="relative z-10 mt-7 sm:mt-14">
        <LaptopShowcase />
      </div>
    </section>
  );
}

export default Hero;