import React from "react";
import { useReducedMotion, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenInquiry?: () => void;
}

const SERVICE_PILLS = [
  "Business Websites",
  "Landing Pages",
  "Online Stores",
  "Website Redesign",
  "Mobile-First Web Apps",
  "WhatsApp & Form Setup",
  "SEO",
  "Care Plans",
  "Speed Optimization",
  "Booking & E-commerce",
  "Domain & Email Setup",
  "Analytics Setup",
  "Website Audit",
];

/**
 * Typographic hero in the Nexzillabs editorial style: big serif headline
 * with an italic accent line, black pill buttons, and a services pill cloud.
 * No carousel, no mesh — the type itself carries the hero.
 */
export function Hero({ onOpenInquiry }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative overflow-hidden bg-background px-6 pt-14 pb-16 sm:pt-16 md:px-10 md:pt-20 md:pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-[1400px]"
      >
        <p className="font-mono text-[11px] tracking-[0.22em] text-black/50 uppercase">
          CRAFTLOGIC — Web Design Studio
        </p>

        <h1 className="font-serif mt-6 max-w-4xl text-[2.9rem] leading-[1.02] tracking-tight text-black sm:text-6xl lg:text-7xl">
          We design, build &amp; deliver
          <br />
          <em className="font-normal italic">websites for your business.</em>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-black/60 sm:text-lg">
          CRAFTLOGIC is a web design studio. We build fast, modern business websites, online
          stores, and booking systems that explain your business clearly, earn trust in seconds,
          and turn visitors into calls, messages, and orders.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onOpenInquiry}
            className="inline-flex min-h-[46px] cursor-pointer items-center gap-2 rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-black">
              <ArrowRight className="h-3 w-3" />
            </span>
          </button>
          <a
            href="#work"
            className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-black/15 bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:border-black/30 active:scale-[0.98]"
          >
            Explore our work
          </a>
        </div>

        <div className="mt-14 border-t border-black/10 pt-8">
          <p className="font-mono text-[11px] tracking-[0.22em] text-black/50 uppercase">
            Explore what we can build together
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {SERVICE_PILLS.map((pill) => (
              <a
                key={pill}
                href="#services"
                className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:border-black hover:bg-black hover:text-white"
              >
                {pill}
              </a>
            ))}
          </div>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-black/50">
            Strategy, design, and engineering. Connected around the website you need to build.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
