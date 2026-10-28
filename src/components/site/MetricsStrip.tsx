import React from "react";
import { CheckCircle2, Globe, TrendingUp } from "lucide-react";

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const VALUE_CARDS: ValueCard[] = [
  {
    icon: <CheckCircle2 className="h-5 w-5 text-primary stroke-[1.75]" />,
    title: "LOOK PROFESSIONAL",
    description:
      "Build unshakeable trust from the very first visit with clean, modern, and reliable execution.",
  },
  {
    icon: <Globe className="h-5 w-5 text-primary stroke-[1.75]" />,
    title: "REACH MORE CUSTOMERS",
    description:
      "Make your business accessible globally 24/7 with fast-loading and zero-downtime infrastructure.",
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-primary stroke-[1.75]" />,
    title: "GENERATE MORE OPPORTUNITIES",
    description:
      "Turn passive website visitors into direct enquiries, high-value bookings, and recurring revenue.",
  },
];

export function MetricsStrip() {
  return (
    <section
      aria-labelledby="value-strip-heading"
      className="relative w-full overflow-hidden border-y border-border bg-background py-20 px-6 md:px-10 lg:py-24"
    >
      {/* Subtle Architectural Grid (Zero Color Deviation, Clean Faint Lines) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:linear-gradient(to_right,#f5f5f0_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f0_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
      />

      <div className="mx-auto w-full max-w-[1400px]">
        {/* Top Header Grid: Left Bold Heading, Right Supporting Context (Screenshot 3 Layout) */}
        <div className="grid grid-cols-1 items-start gap-6 mb-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2
              id="value-strip-heading"
              className="font-display text-3xl font-extrabold tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[44px] leading-[1.12]"
            >
              Your Business Deserves a Better Online Presence.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-1">
            <p className="text-base sm:text-lg font-normal leading-relaxed text-muted-foreground">
              Your website is often the first impression customers have of your business. We
              engineer modern, responsive websites that present your brand professionally and make
              it easier for customers to take action.
            </p>
          </div>
        </div>

        {/* 3 Minimalist Value Cards: Matching Screenshot 3 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {VALUE_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:bg-surface-2 sm:p-8"
            >
              <div>
                {/* Thin Gold Icon */}
                <div className="mb-5 inline-flex items-center justify-center">{card.icon}</div>

                {/* Card Title */}
                <h3 className="font-mono text-xs font-bold tracking-[0.14em] uppercase text-foreground mb-3">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm font-normal leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MetricsStrip;


