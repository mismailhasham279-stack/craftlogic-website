import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenInquiry: () => void;
}

// Hero v4 — rebuilt from a close study of the reference site's hero:
// fully centered, no badge above the headline, line 1 in medium-weight
// sans, line 2 in italic serif, generous whitespace, and the signature
// pill buttons with a circular arrow chip. No pill cloud here — the
// services wall below the hero is its own section, rebuilt next.
export function Hero({ onOpenInquiry }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-6xl px-5 pt-24 pb-20 text-center sm:pt-28 md:pt-36 md:pb-28">
        <motion.h1
          {...rise(0)}
          className="text-[clamp(2.75rem,8.5vw,6.5rem)] leading-[1.04] tracking-tight text-foreground"
        >
          <span className="block font-sans font-medium">We design, build &amp; deliver</span>
          <span className="block font-serif italic font-normal">websites for your business.</span>
        </motion.h1>

        <motion.p
          {...rise(0.12)}
          className="mx-auto mt-7 max-w-[650px] text-[17px] leading-relaxed text-muted-foreground md:text-lg"
        >
          CRAFTLOGIC is a web design studio. We build fast, modern business
          websites, online stores, and booking systems that explain your
          business clearly, earn trust in seconds, and turn visitors into
          calls, messages, and orders.
        </motion.p>

        <motion.div
          {...rise(0.24)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <button
            type="button"
            onClick={onOpenInquiry}
            className="inline-flex h-14 items-center gap-3 rounded-full bg-black py-2 pl-7 pr-2 text-base font-medium text-white shadow-lg shadow-black/10 transition hover:bg-zinc-800"
          >
            Start a Project
            <span className="grid size-10 place-items-center rounded-full bg-white text-black">
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </span>
          </button>
          <a
            href="#work"
            className="inline-flex h-14 items-center gap-3 rounded-full border border-black/10 bg-white py-2 pl-7 pr-2 text-base font-medium text-black shadow-lg shadow-black/5 transition hover:bg-zinc-50"
          >
            Explore Our Work
            <span className="grid size-10 place-items-center rounded-full bg-black text-white">
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
