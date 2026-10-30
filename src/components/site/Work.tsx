import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  X,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

interface ProjectCaseStudy {
  id: string;
  projectNumber: string;
  title: string;
  client: string;
  category: string;
  location: string;
  liveUrl: string;
  browserDisplayUrl: string;
  thumbnailPath: string;
  accentColor: string;
  metrics: {
    kpi: string;
    label: string;
  }[];
  specs: {
    runtime: string;
    ttfb: string;
    coreVitals: string;
  };
  executiveSummary: string;
  clientPainPoints: string[];
  engineeredDeliverables: string[];
  techStack: string[];
  impactQuote: string;
}

const projectsList: ProjectCaseStudy[] = [
  {
    id: "usa-luxe-curate",
    projectNumber: "#01",
    title: "Designer Luxury Made Easy — High-Ticket Commerce Architecture",
    client: "Luxevia Purse",
    category: "High-Ticket Luxury E-Commerce",
    location: "United States • Global Shipping",
    liveUrl: "https://usa-luxe-curated.vercel.app",
    browserDisplayUrl: "usa-luxe-curated.vercel.app",
    thumbnailPath: "/project-previews/usa-luxe-curate.webp",
    accentColor: "#D4AF37",
    metrics: [
      { kpi: "4.2x", label: "Checkout Conversion Velocity" },
      { kpi: "< 18ms", label: "Global Edge TTFB" },
      { kpi: "68%", label: "Cart Drop-Off Reduction" },
    ],
    specs: {
      runtime: "VERCEL EDGE RUNTIME",
      ttfb: "18ms TTFB",
      coreVitals: "100/100",
    },
    executiveSummary:
      "Luxevia Purse is a premier high-ticket luxury retailer specializing in authentic designer handbags and rare vintage collections. Before CraftLogic's intervention, orders were collected informally via social media direct messages, leading to cart drop-offs, zero automated payment protection, and serious buyer hesitation.",
    clientPainPoints: [
      "High cart drop-off rate ($1,800+ average order value) due to informal manual chat payment requests.",
      "Inventory double-booking caused by un-synchronized stock counts across messaging platforms.",
      "Lack of authentic corporate trust signals and verified checkout gateways.",
    ],
    engineeredDeliverables: [
      "Architected a bespoke headless editorial storefront deployed on Vercel Edge Runtime for instant image hydration.",
      "Integrated frictionless Stripe Elements checkout with automated 3D-Secure 2 anti-fraud compliance.",
      "Engineered automated digital authenticity certificates for high-ticket buyer reassurance.",
    ],
    techStack: ["Next.js 15", "React 19", "Tailwind CSS", "Vercel Edge", "Stripe API", "Zod"],
    impactQuote:
      "CraftLogic transformed our business from a manual Instagram chat shop into an automated, high-ticket luxury brand platform.",
  },
  {
    id: "nails-by-grace",
    projectNumber: "#02",
    title: "Gel-X Sculpted Nail Art & Self-Serve Booking System",
    client: "NailsByGrace",
    category: "Service Booking & Studio Management",
    location: "Deanside, Victoria • Australia",
    liveUrl: "https://grace-nails-studio.vercel.app",
    browserDisplayUrl: "grace-nails-studio.vercel.app",
    thumbnailPath: "/project-previews/nails-by-grace.webp",
    accentColor: "#F472B6",
    metrics: [
      { kpi: "94%", label: "Manual Chat Inquiries Automated" },
      { kpi: "Zero", label: "Client No-Show Incidents" },
      { kpi: "+68%", label: "Repeat Reservation Retention" },
    ],
    specs: {
      runtime: "EDGE ROUTER",
      ttfb: "14ms TTFB",
      coreVitals: "100/100",
    },
    executiveSummary:
      "NailsByGrace is an exclusive boutique nail art studio located in Deanside, Victoria. Scheduling appointments was done through chaotic DM conversations, resulting in double-bookings, unconfirmed slots, and significant revenue lost every week from client no-shows.",
    clientPainPoints: [
      "Over 4 hours wasted every day manually replying to repetitive slot availability queries.",
      "Frequent client no-shows caused by lack of an upfront deposit reservation mechanism.",
      "High-value bespoke nail art portfolio was scattered across unorganized social media posts.",
    ],
    engineeredDeliverables: [
      "Built a real-time calendar synchronization engine with automated slot locking to prevent scheduling overlaps.",
      "Implemented automated non-refundable upfront deposit authorization, completely eliminating studio no-shows.",
      "Designed an interactive visual catalog showcasing custom Gel-X extensions, art complexity tiers, and time estimates.",
    ],
    techStack: [
      "React 19",
      "Tailwind CSS",
      "Calendar Sync API",
      "Stripe Checkout",
      "Framer Motion",
    ],
    impactQuote:
      "I no longer spend my evenings replying to booking messages. My calendar is fully booked and deposits are paid automatically.",
  },
  {
    id: "curate-streetwear",
    projectNumber: "#03",
    title: "Curated Asian Streetwear & High-Velocity Drop Grid",
    client: "ShopTop // Curated",
    category: "Cross-Border Streetwear Platform",
    location: "Almaty / Astana • Kazakhstan",
    liveUrl: "https://usa-luxe-curated.vercel.app",
    browserDisplayUrl: "shoptop.kz/curated",
    thumbnailPath: "/project-previews/curate.webp",
    accentColor: "#10B981",
    metrics: [
      { kpi: "+180%", label: "Drop Day Sales Velocity" },
      { kpi: "1.2s", label: "Full Mobile Hydration Time" },
      { kpi: "82%", label: "Automated Self-Service Tracking" },
    ],
    specs: {
      runtime: "EDGE WORKERS",
      ttfb: "16ms TTFB",
      coreVitals: "100/100",
    },
    executiveSummary:
      "ShopTop delivers limited-run Asian designer streetwear drops to youth culture across Kazakhstan. Their previous setup crashed during viral product releases, while cross-border shipping status inquiries overwhelmed customer service teams.",
    clientPainPoints: [
      "Server timeouts and stock race conditions during simultaneous 5,000+ visitor streetwear release spikes.",
      "Customer frustration regarding international customs clearance and cross-border delivery timeframes.",
      "High return rate caused by Asian-to-European clothing sizing discrepancies without interactive guides.",
    ],
    engineeredDeliverables: [
      "Built a high-concurrency static edge architecture capable of handling viral drop traffic without latency.",
      "Created an interactive parcel telemetry tracking portal integrating regional Kazakh courier APIs.",
      "Engineered an interactive 3D sizing matrix allowing shoppers to input height/weight for precise fit verification.",
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Redis Edge Cache", "Kaspi Payment API"],
    impactQuote:
      "Our streetwear drops now sell out in minutes without a single server hiccup or customer inquiry about delivery status.",
  },
  {
    id: "haider-stillbok",
    projectNumber: "#04",
    title: "Enterprise Hardware Procurement & Fleet Telemetry",
    client: "StillBok Tech Systems",
    category: "B2B Hardware & Fleet Solutions",
    location: "United Arab Emirates • Pakistan",
    liveUrl: "https://haider-stillbok-premium.vercel.app",
    browserDisplayUrl: "haider-stillbok-premium.vercel.app",
    thumbnailPath: "/project-previews/haider-stillbok.webp",
    accentColor: "#38BDF8",
    metrics: [
      { kpi: "100%", label: "Spec Verification Accuracy" },
      { kpi: "3.5x", label: "Corporate RFQ Velocity" },
      { kpi: "< 14ms", label: "Catalog Filter Response" },
    ],
    specs: {
      runtime: "DISTRIBUTED EDGE",
      ttfb: "14ms TTFB",
      coreVitals: "100/100",
    },
    executiveSummary:
      "StillBok provides bulk enterprise computing fleets (HP EliteBook 840/850 Series) for tech companies and engineering teams. Previously, corporate quotes required lengthy manual email exchanges and spreadsheets, causing days of negotiation delays.",
    clientPainPoints: [
      "Corporate procurement teams abandoned inquiries due to slow manual price quote generation.",
      "Difficulty comparing multi-tier processor and RAM hardware configurations on static price sheets.",
      "Lack of real-time warehouse inventory indicators leading to delayed purchase order fulfillment.",
    ],
    engineeredDeliverables: [
      "Architected an instant hardware configurator with real-time bulk pricing and volume discount calculators.",
      "Implemented a sub-second facet filtering engine for instant RAM/SSD/Processor comparisons.",
      "Integrated automated Corporate RFQ (Request for Quote) generation outputting signed compliance PDFs.",
    ],
    techStack: ["React 19", "Tailwind CSS", "PDF Worker", "PostgreSQL", "Zod Validation"],
    impactQuote:
      "Enterprise clients now configure their corporate laptop fleets in minutes and receive instant verified quotes.",
  },
  {
    id: "aurevane-luxury",
    projectNumber: "#05",
    title: "Spatial Horology Showcase & High-Jewelry Vault",
    client: "Aurevane Timepieces",
    category: "Luxury Horology & Spatial Showcase",
    location: "Geneva • Dubai • London",
    liveUrl: "https://aurevane-edit.vercel.app",
    browserDisplayUrl: "aurevane-edit.vercel.app",
    thumbnailPath: "/project-previews/aurevane.webp",
    accentColor: "#E5C378",
    metrics: [
      { kpi: "60 FPS", label: "Fluid Shader Animation" },
      { kpi: "+320%", label: "Private Viewing Inquiries" },
      { kpi: "99.9%", label: "Asset Security Rating" },
    ],
    specs: {
      runtime: "WEBGL ENGINE",
      ttfb: "15ms TTFB",
      coreVitals: "100/100",
    },
    executiveSummary:
      "Aurevane crafts limited-edition luxury horology pieces and bespoke jewelry for high-net-worth collectors. Traditional e-commerce templates failed to communicate the micro-mechanical craftsmanship and optical luster of their mechanical watches.",
    clientPainPoints: [
      "Static 2D images failed to represent the physical depth, reflection, and movement of mechanical watches.",
      "Ultra-high-net-worth collectors demanded discreet, invite-only private viewing reservation channels.",
      "Slow loading times of high-resolution CAD watch renders hurt conversion among mobile luxury buyers.",
    ],
    engineeredDeliverables: [
      "Engineered an interactive spatial showcase with custom WebGL lighting shaders and fluid 60 FPS transitions.",
      "Built a secure Concierge VIP reservation gateway with automated invitation verification.",
      "Implemented progressive asset streaming ensuring instant page hydration across global networks.",
    ],
    techStack: [
      "React 19",
      "Three.js / WebGL",
      "Lenis Smooth Scroll",
      "Tailwind CSS",
      "Framer Motion",
    ],
    impactQuote:
      "CraftLogic captured the exact soul and prestige of our luxury timepieces on the web.",
  },
];

export function Work(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [activeStudy, setActiveStudy] = useState<ProjectCaseStudy | null>(null);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (activeStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeStudy]);

  return (
    <section
      id="work"
      aria-label="Selected Production Projects & Deep Case Studies"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex min-h-7 items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.7)]" />
              <span className="font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-foreground/90 sm:text-[11px]">
                SELECTED WORK • 5 PRODUCTION CASE STUDIES
              </span>
            </div>

            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl">
              Proven Commercial Results Delivered for Ambitious Brands.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every business bottleneck was engineered out of existence: automating manual inquiries,
            removing trust deficits, and building scalable digital revenue systems.
          </p>
        </div>

        {/* 5-Project Clean Agency Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {projectsList.map((project, index) => {
            const primaryMetric = project.metrics[0] ?? {
              kpi: "100%",
              label: "Engineered Architecture",
            };

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Browser Window Chrome Frame Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/80 bg-[#090C12] shadow-inner">
                  {/* Browser Top Bar */}
                  <div className="flex h-7 items-center justify-between border-b border-white/10 bg-[#0E121A] px-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                      <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                      <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="rounded bg-black/50 px-2.5 py-0.5 font-mono text-[8.5px] text-white/60">
                      https://{project.browserDisplayUrl}
                    </div>
                    <div className="h-2 w-2" />
                  </div>

                  {/* Direct Thumbnail Image */}
                  <div className="relative h-[calc(100%-28px)] w-full overflow-hidden bg-black/60">
                    <img
                      src={project.thumbnailPath}
                      alt={project.title}
                      width={720}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Direct Live Website Link */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-9 right-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md transition-colors hover:border-primary hover:text-primary shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* Minimal Clean Card Content */}
                <div className="flex flex-1 flex-col justify-between pt-5">
                  <div>
                    <div className="flex items-center justify-between font-mono text-[11px] font-semibold tracking-wider uppercase text-primary">
                      <span>{project.category}</span>
                      <span className="text-muted-foreground/80">{project.projectNumber}</span>
                    </div>

                    <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                      {project.client}
                    </h3>
                  </div>

                  {/* Bottom Impact & Action Buttons (Safe Optional Access) */}
                  <div className="mt-6 border-t border-border/60 pt-4">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-xs text-muted-foreground">Primary Impact:</span>
                      <span
                        className="font-mono text-sm font-bold tracking-tight"
                        style={{ color: project.accentColor }}
                      >
                        {primaryMetric.kpi}{" "}
                        <span className="text-xs font-normal text-muted-foreground">
                          {primaryMetric.label}
                        </span>
                      </span>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveStudy(project)}
                        className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 py-2.5 text-xs font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-[0.98] cursor-pointer"
                      >
                        <span>Read Deep Case Study</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/[0.08]"
                        aria-label={`Open ${project.client} live link`}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Modal: Full Case Study Breakdown */}
        <AnimatePresence>
          {activeStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveStudy(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-primary/30 bg-card p-6 shadow-2xl sm:p-8 overflow-y-auto"
              >
                {/* Header */}
                <div className="flex items-start justify-between border-b border-border/60 pb-5">
                  <div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                      {activeStudy.category} • {activeStudy.location}
                    </span>
                    <h3 className="font-display mt-1 text-2xl font-extrabold text-foreground sm:text-3xl">
                      {activeStudy.client} — Architectural Case Study
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveStudy(null)}
                    aria-label="Close Case Study"
                    className="rounded-full border border-border p-2 text-muted-foreground hover:bg-accent hover:text-foreground cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* 3 Metric Badges */}
                <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-xl border border-border/80 bg-background/60 p-4 text-center">
                  {activeStudy.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span
                        className="font-display text-2xl font-extrabold"
                        style={{ color: activeStudy.accentColor }}
                      >
                        {m.kpi}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Executive Summary */}
                <div className="mb-6 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground uppercase tracking-wider font-mono text-[11px] block mb-1">
                    Executive Summary:
                  </span>
                  {activeStudy.executiveSummary}
                </div>

                {/* Problem vs Solution Deep Dive Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-rose-500/20 bg-rose-950/15 p-5">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm font-display uppercase tracking-wide">
                      <AlertTriangle className="h-4 w-4" />
                      <span>The Business Bottleneck (Before)</span>
                    </div>
                    <ul className="mt-3.5 space-y-2.5 text-xs text-rose-200/80">
                      {activeStudy.clientPainPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/15 p-5">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm font-display uppercase tracking-wide">
                      <ShieldCheck className="h-4 w-4" />
                      <span>CraftLogic Architecture (After)</span>
                    </div>
                    <ul className="mt-3.5 space-y-2.5 text-xs text-emerald-200/80">
                      {activeStudy.engineeredDeliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact Testimonial Quote */}
                <div className="my-6 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center font-display text-sm italic text-foreground/90">
                  “{activeStudy.impactQuote}”
                </div>

                {/* Tech Stack & External Action */}
                <div className="flex flex-wrap items-center gap-2 border-t border-border/60 pt-4">
                  <span className="font-mono text-xs text-muted-foreground mr-1">
                    Architecture:
                  </span>
                  {activeStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-background/80 px-2.5 py-1 font-mono text-[11px] text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  <a
                    href={activeStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Work;

