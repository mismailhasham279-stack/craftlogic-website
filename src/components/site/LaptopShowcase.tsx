import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Activity,
  Cpu,
  Lock,
  Sparkles,
  Layers,
  ArrowUpRight,
  Maximize2
} from "lucide-react";

interface ShowcaseSlide {
  id: string;
  title: string;
  category: string;
  tag: string;
  fileName: string;
  accentColor: string;
  stats: { label: string; value: string }[];
}

const METADATA_ARCHETYPES = [
  {
    title: "Apex Auto Spa — Exotic Detailing Platform",
    category: "Luxury Automotive Architecture",
    tag: "Next.js 15 • Tailwind • 24ms TTFB",
    accentColor: "#00A8CC",
    stats: [
      { label: "Throughput", value: "98.4 MB/s" },
      { label: "TTFB", value: "24ms" },
      { label: "Cache Ratio", value: "99.1%" }
    ]
  },
  {
    title: "Meridian Capital & Asset Vault",
    category: "High-Frequency Fintech Platform",
    tag: "WebSockets • TimescaleDB • SOC-2",
    accentColor: "#10B981",
    stats: [
      { label: "Encryption", value: "AES-256" },
      { label: "Latency", value: "4.2ms" },
      { label: "Compliance", value: "SOC-2 Type II" }
    ]
  },
  {
    title: "Aura Minimalist Studio Engine",
    category: "Creative Flagship Experience",
    tag: "Zero Hydration Shift • 100/100 Vitals",
    accentColor: "#F59E0B",
    stats: [
      { label: "LCP", value: "0.6s" },
      { label: "CLS", value: "0.00" },
      { label: "FCP", value: "0.4s" }
    ]
  },
  {
    title: "Hyperion Luxury Timepieces",
    category: "Headless E-Commerce Suite",
    tag: "Fastify • Redis Edge • Global POPs",
    accentColor: "#6366F1",
    stats: [
      { label: "Cart Speed", value: "110ms" },
      { label: "Edge POPs", value: "310+" },
      { label: "Uptime", value: "99.999%" }
    ]
  },
  {
    title: "Cortex Neural Agent Hub",
    category: "Autonomous AI Cloud Platform",
    tag: "Distributed Vector Pipeline • Python",
    accentColor: "#EC4899",
    stats: [
      { label: "Inference", value: "18ms" },
      { label: "Embeddings", value: "1536-dim" },
      { label: "Accuracy", value: "99.8%" }
    ]
  },
  {
    title: "Vanguard Health Telemetry",
    category: "Encrypted Healthcare Ecosystem",
    tag: "HIPAA Audited • AES-256 • RBAC",
    accentColor: "#06B6D4",
    stats: [
      { label: "HIPAA", value: "Certified" },
      { label: "Sync Rate", value: "Realtime" },
      { label: "Fault Tolerant", value: "Tier-4" }
    ]
  },
  {
    title: "Pulse Analytics Command Center",
    category: "Enterprise SaaS Dashboard",
    tag: "React Virtualized • Microservices API",
    accentColor: "#8B5CF6",
    stats: [
      { label: "Query Time", value: "14ms" },
      { label: "Events/sec", value: "250,000" },
      { label: "Memory Peak", value: "42 MB" }
    ]
  },
  {
    title: "Krypton Protocol Gateway",
    category: "Decentralized Liquidity Exchange",
    tag: "Ultra-Low Latency • Kafka Streaming",
    accentColor: "#F43F5E",
    stats: [
      { label: "TPS", value: "65,000" },
      { label: "Settlement", value: "Instant" },
      { label: "Zero Slashing", value: "Verified" }
    ]
  },
  {
    title: "Chronos Heritage Vault",
    category: "Luxury Horology E-Commerce",
    tag: "Global Checkout • Stripe Relay Engine",
    accentColor: "#D97706",
    stats: [
      { label: "Conversion", value: "+38%" },
      { label: "Currencies", value: "135+" },
      { label: "Fraud Score", value: "0.01%" }
    ]
  },
  {
    title: "Synthetix Neural Workspace",
    category: "Generative AI Interface",
    tag: "Edge Inference • Sub-12ms Response",
    accentColor: "#14B8A6",
    stats: [
      { label: "Tokens/sec", value: "128.4" },
      { label: "GPU Load", value: "Balanced" },
      { label: "VRAM Footprint", value: "4.2 GB" }
    ]
  },
  {
    title: "Solstice Architecture Studio",
    category: "Bespoke Spatial Design Flagship",
    tag: "WebGL Canvas • Fluid Layout Systems",
    accentColor: "#3B82F6",
    stats: [
      { label: "Render FPS", value: "60 FPS" },
      { label: "Shader Load", value: "Optimized" },
      { label: "Draw Calls", value: "12" }
    ]
  },
  {
    title: "OmniFlow Logistics Grid",
    category: "Supply-Chain Telemetry Hub",
    tag: "PostgreSQL 16 • High Concurrency",
    accentColor: "#10B981",
    stats: [
      { label: "Active Fleets", value: "14,200" },
      { label: "GPS Drift", value: "< 0.2m" },
      { label: "ETL Sync", value: "500ms" }
    ]
  },
  {
    title: "Aether Private Wealth",
    category: "Boutique Asset Management",
    tag: "End-to-End Encryption • Zod Validation",
    accentColor: "#0284C7",
    stats: [
      { label: "AUM Monitored", value: "$4.2B" },
      { label: "Key Rotation", value: "Daily" },
      { label: "Zero Leakage", value: "100%" }
    ]
  },
  {
    title: "Verve Haute Couture",
    category: "Direct-to-Consumer Fashion Flagship",
    tag: "Dynamic Currency • Sub-second Filtering",
    accentColor: "#E11D48",
    stats: [
      { label: "Image Payload", value: "48 KB" },
      { label: "Catalog Size", value: "50k SKUs" },
      { label: "Filter Speed", value: "8ms" }
    ]
  },
  {
    title: "Titanium Cloud Orchestrator",
    category: "Infrastructure Deployment Console",
    tag: "Multi-Region Kubernetes • Docker Engine",
    accentColor: "#64748B",
    stats: [
      { label: "Clusters", value: "64 Pods" },
      { label: "Auto-Scale", value: "Active" },
      { label: "Health Check", value: "Pass" }
    ]
  },
  {
    title: "Zenith Culinary Reserve",
    category: "Hospitality Brand Experience",
    tag: "Real-time Table Reservation API",
    accentColor: "#B45309",
    stats: [
      { label: "Lock Timeout", value: "200ms" },
      { label: "Concurrency", value: "No Collisions" },
      { label: "Rating", value: "4.98 / 5" }
    ]
  }
];

const DEFAULT_METADATA = {
  title: "CraftLogic Enterprise Solution",
  category: "High-Performance Web Architecture",
  tag: "Edge Deployed • TypeScript • 100/100 Vitals",
  accentColor: "#00A8CC",
  stats: [
    { label: "Edge TTFB", value: "18ms" },
    { label: "Core Vitals", value: "100/100" },
    { label: "Security", value: "Hardened" }
  ]
};

// 30 Verified Slides Mapping with safe boundaries
const SHOWCASE_SLIDES: ShowcaseSlide[] = Array.from({ length: 30 }, (_, index) => {
  const meta = METADATA_ARCHETYPES[index % METADATA_ARCHETYPES.length] ?? DEFAULT_METADATA;
  const numStr = String(index + 1).padStart(2, "0");
  return {
    id: numStr,
    title: `${meta.title} #${numStr}`,
    category: meta.category,
    tag: meta.tag,
    fileName: `mockup_${numStr}.png`,
    accentColor: meta.accentColor,
    stats: meta.stats
  };
});

export const LaptopShowcase: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const SLIDE_DURATION = 5000;
  const progressKeyRef = useRef<number>(0);

  const totalSlides = SHOWCASE_SLIDES.length;
  const currentSlide: ShowcaseSlide = SHOWCASE_SLIDES[currentIdx] ?? SHOWCASE_SLIDES[0]!;

  // Multi-tier candidate paths: root, images folder, and original website mocup
  const candidateImageSources = useMemo(() => {
    const rawFile = currentSlide.fileName;
    const jfifName = rawFile.replace(/\.png$/i, ".jfif");
    return [
      `/${rawFile}`,
      `/images/${rawFile}`,
      encodeURI(`/images/website mocup/${rawFile}`),
      encodeURI(`/images/website mocup/${jfifName}`),
      `/${jfifName}`
    ];
  }, [currentSlide.fileName]);

  const [activeSourceIndex, setActiveSourceIndex] = useState<number>(0);

  useEffect(() => {
    setActiveSourceIndex(0);
  }, [currentSlide.fileName]);

  const handleNext = useCallback(() => {
    progressKeyRef.current += 1;
    setCurrentIdx((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    progressKeyRef.current += 1;
    setCurrentIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Dual-Buffer Preloader
  useEffect(() => {
    const nextIdx = (currentIdx + 1) % totalSlides;
    const prevIdx = (currentIdx - 1 + totalSlides) % totalSlides;

    [nextIdx, prevIdx].forEach((idx) => {
      const slide = SHOWCASE_SLIDES[idx];
      if (!slide) return;
      const img = new Image();
      img.src = `/${slide.fileName}`;
      if (img.decode) {
        img.decode().catch(() => {});
      }
    });
  }, [currentIdx, totalSlides]);

  // Autoplay Loop Timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(handleNext, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Safe error recovery without rapid auto-skipping
  const handleImageError = () => {
    if (activeSourceIndex < candidateImageSources.length - 1) {
      setActiveSourceIndex((prev) => prev + 1);
    } else {
      setFailedImages((prev) => ({ ...prev, [currentSlide.fileName]: true }));
    }
  };

  const isCurrentFailed = Boolean(failedImages[currentSlide.fileName]);

  return (
    <div
      className="relative w-full max-w-5xl mx-auto flex flex-col items-center select-none pt-2 pb-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Radiance Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-4rem] z-0 h-[450px] w-[750px] -translate-x-1/2 rounded-full blur-[150px] opacity-20 transition-colors duration-700"
        style={{ backgroundColor: currentSlide.accentColor }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[85%] bg-[radial-gradient(#f5f5f0_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />

      {/* 3D Hardware Viewport Container */}
      <div className="relative z-10 w-full flex items-center justify-center px-2">
        <div className="relative w-full max-w-4xl transition-transform duration-700 ease-out transform-gpu will-change-transform animate-[float_6s_ease-in-out_infinite]">
          
          {/* Main Display Box with Original Sleek Bezel */}
          <div className="relative w-full min-h-[360px] sm:min-h-[460px] md:min-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)] bg-[#070A10] flex items-center justify-center">
            
            {/* Viewport Window */}
            {!isCurrentFailed ? (
              <img
                key={`${currentSlide.id}-${activeSourceIndex}`}
                src={candidateImageSources[activeSourceIndex]}
                alt={currentSlide.title}
                onError={handleImageError}
                className="w-full h-full object-cover transition-opacity duration-500 ease-out transform-gpu"
                loading="eager"
                decoding="async"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070A10] p-6 text-center">
                <Activity className="w-8 h-8 text-primary/70 mb-3 animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
                  SYNCHRONIZING REPOSITORY ASSET...
                </span>
                <span className="text-[9px] font-mono text-muted-foreground/60 mt-1">
                  {currentSlide.fileName}
                </span>
              </div>
            )}

            {/* Screen Glass Reflection */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.03] via-transparent to-transparent z-10"
            />

            {/* Glassmorphic Project Info Tag */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 max-w-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-1.5 h-1.5 rounded-full transition-colors duration-500"
                  style={{ backgroundColor: currentSlide.accentColor }}
                />
                <span
                  className="text-[10px] font-mono uppercase tracking-widest font-semibold transition-colors duration-500"
                  style={{ color: currentSlide.accentColor }}
                >
                  {currentSlide.category}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                {currentSlide.title}
              </h4>
              <p className="text-[10px] sm:text-xs font-mono text-muted-foreground mt-0.5">
                {currentSlide.tag}
              </p>
            </div>

            {/* Prev / Next Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Project"
                className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 text-white backdrop-blur-md transition-all active:scale-95 hover:border-primary/50 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Project"
                className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 text-white backdrop-blur-md transition-all active:scale-95 hover:border-primary/50 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Under-Chassis Floor Shadow */}
          <div className="mx-auto w-[85%] h-5 bg-primary/[0.06] blur-xl rounded-full mt-2" />
        </div>

        {/* Floating Telemetry Badges */}
        <div className="pointer-events-none absolute right-[1%] top-[10%] z-30 hidden animate-[float_5s_ease-in-out_infinite] items-center gap-2 rounded-full border border-border bg-black/70 px-3.5 py-1.5 text-[10px] font-mono tracking-wide text-foreground shadow-2xl backdrop-blur-xl lg:flex">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          EDGE RUNTIME <span className="text-white/30">•</span> 18ms TTFB
        </div>

        <div className="pointer-events-none absolute bottom-[13%] right-[1%] z-30 hidden animate-[float_7s_ease-in-out_infinite_reverse] items-center gap-2 rounded-full border border-border bg-black/70 px-3.5 py-1.5 text-[10px] font-mono tracking-wide text-foreground shadow-2xl backdrop-blur-xl lg:flex">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          CORE VITALS 100/100
        </div>
      </div>

      {/* Progress Bar & Numeric Counter */}
      <div className="w-full max-w-md mx-auto mt-6 flex flex-col items-center gap-2 z-20 px-4">
        <div className="w-full h-1 bg-white/[0.08] rounded-full overflow-hidden">
          <div
            key={progressKeyRef.current}
            style={{
              backgroundColor: currentSlide.accentColor,
              animationDuration: `${SLIDE_DURATION}ms`,
            }}
            className={`h-full rounded-full origin-left transition-all ${
              isPaused ? "w-full opacity-40" : "animate-[progress_5s_linear_forwards]"
            }`}
          />
        </div>

        <div className="flex items-center justify-between w-full text-[11px] font-mono text-muted-foreground">
          <span>
            <strong className="text-foreground">{String(currentIdx + 1).padStart(2, "0")}</strong> /{" "}
            {String(totalSlides).padStart(2, "0")} VERIFIED SHOWCASES
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80">
            {isPaused ? "PAUSED" : "AUTO-CYCLING (5S)"}
          </span>
        </div>
      </div>

      {/* Mini Progress Dots Track */}
      <div className="w-full max-w-xs mx-auto flex items-center justify-center gap-1 mt-3">
        {SHOWCASE_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => {
              progressKeyRef.current += 1;
              setCurrentIdx(idx);
            }}
            aria-label={`Jump to slide ${slide.id}`}
            style={{
              backgroundColor: currentIdx === idx ? currentSlide.accentColor : undefined,
            }}
            className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
              currentIdx === idx ? "w-6 bg-primary" : "w-1.5 bg-white/15 hover:bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LaptopShowcase;

