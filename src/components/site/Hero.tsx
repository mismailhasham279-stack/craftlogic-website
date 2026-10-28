import React from "react";
import { useReducedMotion, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroMesh } from "./HeroMesh";
import { LaptopShowcase } from "./LaptopShowcase";

interface HeroProps {
  onOpenInquiry?: () => void;
}

export function Hero({ onOpenInquiry }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative flex flex-col justify-start overflow-hidden bg-background px-4 pt-6 pb-12 sm:px-6 sm:pt-7 sm:pb-14 md:pt-8 md:pb-16 lg:px-10 lg:pt-8 lg:pb-16"
    >
      {/* Background Architectural Ambient Mesh */}
      <HeroMesh reducedMotion={shouldReduceMotion ?? false} />

      {/* Main Responsive Grid: Centered Proportions with Clean Top Clearance */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto grid w-full max-w-[1400px] items-start gap-8 sm:gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 xl:gap-12"
      >
        {/* Left Column: Balanced Optical Top Margin */}
        <div className="relative z-10 flex flex-col justify-start text-left pt-3 sm:pt-4 lg:pt-5">
          <header>
            {/* Minimal Eyebrow Badge */}
            <div className="inline-flex min-h-[26px] items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-0.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.7)]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-semibold tracking-[0.14em] text-foreground/90 uppercase">
                FULL-STACK DIGITAL AGENCY • CRAFTLOGIC
              </span>
            </div>

            {/* Master Headline: Perfect Vertical Separation */}
            <h1 className="font-display mt-3.5 sm:mt-4 max-w-[680px] text-2xl font-extrabold tracking-[-0.025em] text-foreground sm:text-3xl md:text-3xl md:leading-[1.18] lg:text-[40px] lg:leading-[1.2] xl:text-[46px] xl:leading-[1.22]">
              We Build High–Performance Websites Designed for Business Growth.
            </h1>

            {/* Subtext */}
            <p className="mt-3.5 sm:mt-4 mb-6 sm:mb-7 max-w-xl text-xs sm:text-sm md:text-xs lg:text-sm leading-[1.68] text-muted-foreground/90 font-normal">
              From high-converting corporate sites to custom full-stack web applications, CraftLogic
              combines clean modern design with resilient engineering to help your business scale
              with confidence.
            </p>
          </header>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={onOpenInquiry}
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-accent hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
            </button>

            <a
              href="#work"
              className="inline-flex min-h-[46px] items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-6 py-2.5 text-xs sm:text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
            >
              <span>Explore Our Work</span>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Laptop Showcase (Top Aligned with Slight Offset) */}
        <div className="w-full flex items-start justify-center overflow-hidden pt-2 sm:pt-3 lg:pt-3 min-h-[280px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[400px]">
          <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[380px] lg:max-w-[480px] xl:max-w-full">
            <LaptopShowcase />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;


