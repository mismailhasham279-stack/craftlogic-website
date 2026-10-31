import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe,
  Layout,
  Mail,
  MessageSquare,
  Phone,
  RefreshCw,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ProjectBrowserFrame } from "./ProjectBrowserFrame";
import { useScrollProgress } from "@/hooks/use-reveal";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_RAW, SOCIAL, projects } from "@/data/projects";

export { EMAIL };

/* ---------------- 7 Official Channels Semantic SVGs ---------------- */
function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function ThreadsIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm0-2.16c5.424 0 9.84-4.416 9.84-9.84S17.424 2.16 12 2.16 2.16 6.576 2.16 12s4.416 9.84 9.84 9.84zm3.912-7.536c-.072 2.472-1.512 4.104-3.912 4.104-2.616 0-4.32-1.992-4.32-4.8 0-2.88 1.776-4.944 4.536-4.944 2.472 0 4.104 1.632 4.2 3.864h-1.92c-.144-1.248-.96-2.04-2.28-2.04-1.584 0-2.52 1.296-2.52 3.12 0 1.776.96 3.024 2.448 3.024 1.416 0 2.112-.888 2.232-2.328H12v-1.68h5.904v1.68z" />
    </svg>
  );
}

function XTwitterIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function YouTubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/* ---------------- Reusable Section Heading ---------------- */
export function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Reveal className="flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <span className="text-[11px] font-medium tracking-[0.25em] text-muted-foreground uppercase font-mono">
          {label}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display mt-6 text-3xl leading-[1.12] font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] text-foreground">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={150}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground font-normal">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ---------------- 1. Core Value Strip ---------------- */
const CORE_PILLARS = [
  {
    icon: CheckCircle2,
    title: "LOOK ESTABLISHED",
    copy: "Make a strong, professional impression so new customers trust you immediately.",
  },
  {
    icon: Globe,
    title: "GET INQUIRIES 24/7",
    copy: "Customers can see your work, check your services, and contact you at any time.",
  },
  {
    icon: TrendingUp,
    title: "EASY FOR CUSTOMERS",
    copy: "Clear buttons and simple layouts that make it effortless for visitors to message or call you.",
  },
];

export function Trust() {
  const [activeTouchIndex, setActiveTouchIndex] = useState<number | null>(null);

  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="relative border-y border-border bg-background py-20 md:py-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
      />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-start">
          <Reveal>
            <h2
              id="trust-heading"
              className="font-display max-w-xl text-3xl leading-[1.15] font-bold tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[2.5rem]"
            >
              A Website Built to Help Your Business Win Customers.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:pt-1 font-normal">
              Most clients search online before buying. We build clean, fast websites that show you
              take your business seriously and give customers full confidence to choose you.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CORE_PILLARS.map((v, i) => {
            const isTouchActive = activeTouchIndex === i;

            return (
              <Reveal key={v.title} delay={i * 90}>
                <div
                  onTouchStart={() => setActiveTouchIndex(i)}
                  onTouchEnd={() => setTimeout(() => setActiveTouchIndex(null), 1200)}
                  className={`interactive-card group relative flex h-full flex-col justify-between rounded-xl border bg-card p-8 select-none cursor-pointer ${
                    isTouchActive
                      ? "border-primary/80 bg-surface-2 shadow-[0_12px_36px_-12px_rgba(255,255,255,0.3)] scale-[0.985]"
                      : "border-border"
                  }`}
                >
                  <div>
                    <v.icon className="h-5 w-5 text-primary stroke-[1.75] transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <h3 className="font-mono mt-6 text-xs font-bold tracking-[0.14em] uppercase text-foreground">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-normal">
                      {v.copy}
                    </p>
                  </div>
                  <span
                    className={`mt-6 block h-px bg-primary/60 transition-all duration-500 ${
                      isTouchActive ? "w-full bg-primary" : "w-0 group-hover:w-12"
                    }`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. Services Grid (Universal Touch & Hover) ---------------- */
const SERVICES = [
  {
    n: "01",
    icon: Layout,
    title: "Business Websites",
    copy: "Modern websites that showcase your services clearly and make it simple for clients to reach out.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Landing Pages",
    copy: "Single-page layouts built to explain one clear offer and turn ad visitors into direct inquiries.",
  },
  {
    n: "03",
    icon: ShoppingCart,
    title: "Online Stores",
    copy: "Clean and secure online shops where customers can easily browse products and make purchases.",
  },
  {
    n: "04",
    icon: RefreshCw,
    title: "Website Redesign",
    copy: "Upgrading slow or outdated websites into fast, modern platforms that look great on any screen.",
  },
  {
    n: "05",
    icon: Smartphone,
    title: "Mobile-First Web Apps",
    copy: "Custom tools, booking systems, or client portals built around your specific daily business needs.",
  },
  {
    n: "06",
    icon: MessageSquare,
    title: "WhatsApp & Form Setup",
    copy: "Connecting direct WhatsApp buttons, instant forms, and Google Maps directly into your website.",
  },
];

export function Services() {
  const [activeTouchIndex, setActiveTouchIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Our Services"
          title="Everything You Need to Succeed Online."
          subtitle="Whether you need a new website or a complete redesign, we deliver solutions that solve real business problems."
        />
        
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map((service, index) => {
            const isTouchActive = activeTouchIndex === index;

            return (
              <Reveal key={service.n} delay={(index % 3) * 70} className="h-full">
                <article
                  onTouchStart={() => setActiveTouchIndex(index)}
                  onTouchEnd={() => setTimeout(() => setActiveTouchIndex(null), 1200)}
                  className={`interactive-card group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-xl border bg-card p-6 sm:min-h-[230px] sm:p-7 select-none cursor-pointer ${
                    isTouchActive
                      ? "border-primary/90 bg-surface-2 shadow-[0_12px_36px_-12px_rgba(255,255,255,0.35)] scale-[0.985]"
                      : "border-border"
                  }`}
                >
                  <span
                    className={`absolute top-6 right-6 font-mono text-[10px] tracking-[0.18em] transition-colors duration-300 sm:top-7 sm:right-7 ${
                      isTouchActive ? "text-primary font-bold" : "text-primary/65 group-hover:text-primary"
                    }`}
                  >
                    {service.n}
                  </span>

                  <service.icon
                    className={`h-4 w-4 transition-colors duration-300 ${
                      isTouchActive ? "text-primary" : "text-primary/85 group-hover:text-primary"
                    }`}
                    strokeWidth={1.5}
                  />

                  <h3
                    className={`font-display mt-6 max-w-[18rem] text-lg font-semibold tracking-tight transition-colors duration-300 sm:text-xl ${
                      isTouchActive ? "text-primary" : "text-foreground group-hover:text-foreground"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-muted-foreground font-normal">
                    {service.copy}
                  </p>

                  <span
                    className={`absolute bottom-0 left-0 h-px bg-primary transition-[width,background-color] duration-300 ${
                      isTouchActive ? "w-full bg-primary" : "w-8 group-hover:w-full group-hover:bg-primary"
                    }`}
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. Selected Work ---------------- */
const SELECTED_WORK = {
  luxevia: {
    name: "LUXEVIA PURSE",
    category: "Online Store",
    description: "Elegant product catalog with easy mobile browsing and smooth checkout process.",
  },
  usaluxe: {
    name: "USA LUXE IMPORT",
    category: "Business Showcase",
    description:
      "Vehicle import platform connecting live inventory updates with direct WhatsApp consultation.",
  },
  nailsbygrace: {
    name: "NAILSBYGRACE",
    category: "Service & Booking Portfolio",
    description:
      "Clean service portfolio featuring custom work galleries and appointment booking requests.",
  },
  shoptop: {
    name: "SHOPTOP",
    category: "E-Commerce Store",
    description:
      "Modern fashion storefront built for fast product browsing and responsive mobile shopping.",
  },
} as const;

const SELECTED_WORK_IDS = ["luxevia", "usaluxe", "nailsbygrace", "shoptop"] as const;

export function Work() {
  const selectedProjects = SELECTED_WORK_IDS.flatMap((id) => {
    const project = projects.find((item) => item.id === id);
    return project ? [{ project, presentation: SELECTED_WORK[id] }] : [];
  });

  return (
    <section id="work" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Our Portfolio"
          title="Recent Client Projects."
          subtitle="Take a look at some of the websites and platforms we have built for businesses."
        />

        <div className="mt-14 space-y-6 lg:space-y-8">
          {selectedProjects[0] && (
            <Reveal>
              <Link
                to="/work/$slug"
                params={{ slug: selectedProjects[0].project.slug }}
                className="interactive-card focus-ring group grid overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-[0_24px_70px_-42px_rgba(255,255,255,0.25)] lg:grid-cols-[1.25fr_0.75fr]"
                aria-label={`View ${selectedProjects[0].presentation.name} details`}
              >
                <div className="relative flex items-center justify-center overflow-hidden bg-surface p-5 sm:p-8 lg:min-h-[390px] lg:p-10">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(255,255,255,0.06),transparent_62%)]" />
                  <ProjectBrowserFrame
                    src={selectedProjects[0].project.thumbnail}
                    projectName={selectedProjects[0].presentation.name}
                    className="relative z-10 w-full"
                  />
                  <span className="absolute top-5 left-5 font-mono text-[10px] tracking-[0.18em] text-primary/70">
                    {selectedProjects[0].project.index}
                  </span>
                </div>
                <div className="flex flex-col justify-center border-t border-border p-6 sm:p-9 lg:border-t-0 lg:border-l lg:p-10">
                  <span className="text-[10px] tracking-[0.18em] text-primary uppercase font-mono font-medium">
                    {selectedProjects[0].presentation.category}
                  </span>
                  <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
                    {selectedProjects[0].presentation.name}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground font-normal">
                    {selectedProjects[0].presentation.description}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    View Project Details
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {selectedProjects.slice(1).map(({ project, presentation }, index) => (
              <Reveal key={project.id} delay={(index % 2) * 80}>
                <Link
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  className="interactive-card focus-ring group block h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-[0_18px_48px_-34px_rgba(255,255,255,0.22)]"
                  aria-label={`View ${presentation.name} details`}
                >
                  <div className="relative overflow-hidden bg-surface p-4 sm:p-5">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(255,255,255,0.05),transparent_62%)]" />
                    <ProjectBrowserFrame
                      src={project.thumbnail}
                      projectName={presentation.name}
                      className="relative z-10"
                    />
                    <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.18em] text-primary/70">
                      {project.index}
                    </span>
                  </div>
                  <div className="border-t border-border p-5 sm:p-6">
                    <span className="text-[9px] tracking-[0.16em] text-primary uppercase font-mono font-medium">
                      {presentation.category}
                    </span>
                    <h3 className="font-display mt-3 text-xl font-semibold tracking-tight text-foreground">
                      {presentation.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-normal">
                      {presentation.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      View Project Details
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. Problem vs Solution ---------------- */
const BUSINESS_BENEFITS = [
  {
    type: "problem",
    title: "WITHOUT A DEDICATED WEBSITE",
    items: [
      "Customers hesitate to trust you because there is no official place to verify your business.",
      "You spend hours answering the same basic questions over chat messages again and again.",
      "Followers on social media get distracted and forget to complete their purchase or inquiry.",
      "Your business looks smaller and less reliable compared to competitors with proper websites.",
    ],
  },
  {
    type: "solution",
    title: "WITH A CRAFTLOGIC WEBSITE",
    items: [
      "Instant trust: Clients see your portfolio, customer reviews, and services immediately.",
      "Automated inquiries: Questions, booking requests, and orders arrive straight to your phone.",
      "A permanent online home that you 100% own without relying on changing social algorithms.",
      "Your business is open and ready to capture new clients 24 hours a day, 7 days a week.",
    ],
  },
];

export function BusinessProblem() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-muted-foreground uppercase font-mono">
              The Real Difference
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-6 text-3xl leading-[1.12] font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] text-foreground">
              Why Your Business Needs Its Own Website.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground font-normal">
              Social media is great for being discovered. But your website is where visitors
              actually turn into paying clients.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {BUSINESS_BENEFITS.map((block, index) => {
            const isSolution = block.type === "solution";
            return (
              <Reveal key={block.title} delay={index * 100}>
                <article
                  className={`interactive-card group h-full overflow-hidden rounded-xl border bg-card transition-all duration-300 ${
                    isSolution
                      ? "border-primary/40 hover:border-primary/70 hover:shadow-[0_20px_50px_-36px_rgba(255,255,255,0.25)]"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 border-b px-6 py-4 sm:px-7 ${
                      isSolution ? "border-primary/20 bg-primary/5" : "border-white/10 bg-surface"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isSolution
                          ? "bg-primary shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                          : "bg-red-400/80"
                      }`}
                    />
                    <span
                      className={`font-mono text-[11px] font-bold tracking-[0.16em] uppercase ${
                        isSolution ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {block.title}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <ul className="space-y-4">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3.5 text-sm sm:text-[15px] leading-relaxed"
                        >
                          {isSolution ? (
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-1" />
                          ) : (
                            <XCircle className="h-4 w-4 shrink-0 text-red-400/70 mt-1" />
                          )}
                          <span
                            className={
                              isSolution
                                ? "text-foreground font-medium"
                                : "text-muted-foreground font-normal"
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. Free Demo Section ---------------- */
export function FreeDemo() {
  const [demoSent, setDemoSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [demoError, setDemoError] = useState("");

  const onDemoSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("demo_name") ?? "").trim();
    const contact = String(data.get("demo_contact") ?? "").trim();
    const business = String(data.get("demo_business") ?? "").trim();

    if (!name || !contact) {
      setDemoError("Please provide your name and contact details.");
      return;
    }

    setDemoError("");
    setSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          inquiry_type: "Free Homepage Demo Request",
          client_name: name,
          contact_channel: contact,
          business_industry: business || "Not specified",
          _subject: `CRAFTLOGIC Free Demo Request: ${name} (${business || "New Brand"})`,
        }),
      });

      if (response.ok) {
        setDemoSent(true);
      } else {
        const subject = `Free Homepage Demo Request from ${name}`;
        const body = `Hi Ismail,\n\nI want to see a Free Homepage Demo for my business.\n\nName: ${name}\nContact: ${contact}\nBusiness Type: ${business || "Not specified"}\n`;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setDemoSent(true);
      }
    } catch {
      const subject = `Free Homepage Demo Request from ${name}`;
      const body = `Hi Ismail,\n\nI want to see a Free Homepage Demo for my business.\n\nName: ${name}\nContact: ${contact}\nBusiness Type: ${business || "Not specified"}\n`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setDemoSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="demo" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card p-8 sm:p-12 md:p-16 shadow-[0_28px_80px_-56px_rgba(255,255,255,0.2)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(255,255,255,0.06),transparent_48%)]" />

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <Reveal className="flex items-center gap-3">
                <span className="text-[11px] tracking-[0.25em] text-primary uppercase font-mono font-bold">
                  100% Free • No Obligation
                </span>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="font-display mt-5 text-3xl leading-tight font-bold tracking-tight sm:text-4xl text-foreground">
                  See What Your Website Could Look Like — Before Paying Anything.
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground font-normal">
                  Not sure where to start? Tell us your business name and what you offer. We will
                  design a customized homepage preview specifically for your brand so you can see
                  the quality first.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={120}>
                <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
                  {demoSent ? (
                    <div className="py-8 text-center">
                      <CheckCircle2 className="mx-auto h-8 w-8 text-primary" />
                      <h3 className="font-display mt-4 text-xl font-bold text-foreground">
                        Request Received!
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Your preview request has been securely dispatched to{" "}
                        <strong className="text-white">{EMAIL}</strong>. We will review your
                        business type and prepare your preview shortly!
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={onDemoSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="demo_name"
                          required
                          placeholder="e.g. John Doe"
                          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-1.5">
                          Email or Phone *
                        </label>
                        <input
                          type="text"
                          name="demo_contact"
                          required
                          placeholder="Where should we send your preview?"
                          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-1.5">
                          Your Business Type / Industry
                        </label>
                        <input
                          type="text"
                          name="demo_business"
                          placeholder="e.g. Real Estate, Restaurant, Clothing Store, Clinic"
                          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>

                      {demoError && <p className="text-xs text-red-400 font-medium">{demoError}</p>}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary py-3.5 px-6 font-semibold text-sm text-primary-foreground transition-all duration-200 hover:bg-accent active:scale-[0.98] shadow-lg shadow-primary/20 cursor-pointer disabled:opacity-50"
                      >
                        <span>
                          {submitting ? "Transmitting..." : "Send Me a Free Homepage Preview"}
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 6. Process Section ---------------- */
const STEPS = [
  {
    n: "01",
    title: "Discussion & Plan",
    copy: "We understand what you sell, who your clients are, and what pages you need.",
  },
  {
    n: "02",
    title: "Design Preview",
    copy: "We create a modern layout and show it to you so you can give feedback and changes.",
  },
  {
    n: "03",
    title: "Fast Development",
    copy: "We build your website with clean code so it opens fast and never gets stuck.",
  },
  {
    n: "04",
    title: "Final Launch",
    copy: "We test everything on mobile and desktop, link your domain, and make your site live.",
  },
];

export function Process() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  return (
    <section id="process" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading label="How It Works" title="Simple 4-Step Process." />
        <div ref={ref} className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-[11px] w-px bg-border md:top-[11px] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-full" />
          <div
            className="absolute top-0 left-[11px] w-px origin-top bg-primary transition-transform duration-200 md:top-[11px] md:left-0 md:h-px md:w-full md:origin-left"
            style={{ transform: `scaleY(${progress})`, height: "100%" }}
          />
          <div
            className="absolute top-[11px] left-0 hidden h-px w-full origin-left bg-primary transition-transform duration-200 md:block"
            style={{ transform: `scaleX(${progress})` }}
          />
          <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
            {STEPS.map((s, i) => {
              const activeStep = progress > (i + 0.4) / STEPS.length;
              return (
                <li key={s.n} className="relative pl-10 md:pt-12 md:pl-0">
                  <span
                    className={`absolute top-1 left-0 grid h-[23px] w-[23px] place-items-center rounded-full border transition-all duration-500 md:top-0 ${
                      activeStep
                        ? "border-primary/70 bg-background text-primary shadow-[0_0_14px_-5px_rgba(255,255,255,0.5)]"
                        : "border-primary/30 bg-background text-muted-foreground"
                    }`}
                  >
                    <span className="font-mono text-[9px]">{s.n}</span>
                  </span>
                  <Reveal delay={i * 70} className="h-full">
                    <article className="interactive-card h-full rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/35 hover:bg-surface-2 md:p-6">
                      <h3
                        className={`font-display text-lg font-semibold tracking-tight ${activeStep ? "text-foreground" : "text-foreground/90"}`}
                      >
                        {s.title}
                      </h3>
                      <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted-foreground font-normal">
                        {s.copy}
                      </p>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. Guarantees ---------------- */
const GUARANTEES = [
  {
    icon: Zap,
    title: "Fast Loading Guarantee",
    copy: "Your website will load in under 2 seconds, so visitors never leave out of frustration.",
  },
  {
    icon: Smartphone,
    title: "100% Mobile Ready",
    copy: "Carefully designed to look stunning on iPhones, Android phones, tablets, and laptops.",
  },
  {
    icon: ShieldCheck,
    title: "You Own Everything",
    copy: "100% full ownership of your domain, code, design, and content. No hidden lock-ins.",
  },
  {
    icon: Rocket,
    title: "Post-Launch Support",
    copy: "We don't vanish after launch. We provide free technical support to ensure everything runs smoothly.",
  },
];

export function WhyMe() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Why CRAFTLOGIC"
          title="Our Commitment to Quality."
          subtitle="Honest work, clear communication, and websites built to last."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <article className="interactive-card group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/45 hover:bg-surface-2">
                <g.icon className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-display text-base font-bold text-foreground mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 8. FAQ Section ---------------- */
const FAQS = [
  {
    q: "How long does it take to build a website?",
    a: "A typical business website takes between 7 to 14 days from start to launch. Larger custom web apps or online stores usually take 3 to 4 weeks depending on the features.",
  },
  {
    q: "I already have a domain or hosting. Can you use it?",
    a: "Yes, absolutely! If you already have a domain from Namecheap, GoDaddy, Hostinger, etc., we will connect your new website to it without any problems.",
  },
  {
    q: "Can I update text, photos, and products myself later?",
    a: "Yes. We structure your site so that you can easily update contact information, text, images, or products whenever you want without needing a developer.",
  },
  {
    q: "Will my website look good on mobile phones?",
    a: "Yes! More than 70% of web traffic comes from smartphones today. We design every single button and image to fit mobile screens perfectly.",
  },
  {
    q: "What happens if something breaks after launch?",
    a: "We provide 30 days of free ongoing technical support after launch. If anything goes wrong or needs a quick adjustment, we fix it immediately.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="border-t border-border py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Got Questions?"
          title="Frequently Asked Questions."
          subtitle="Everything you need to know about working with CraftLogic."
        />

        <div className="mt-12 max-w-3xl space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx} delay={idx * 60}>
                <div className="interactive-card rounded-xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/40">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left font-display font-semibold text-foreground text-base sm:text-lg cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 9. About Founder ---------------- */
export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-xl border border-border bg-card shadow-[inset_0_1px_40px_rgba(0,0,0,0.55)]">
              <img
                src="/images/founder/muhammad-ismail.jpg"
                alt="Muhammad Ismail, Founder of CRAFTLOGIC"
                width={560}
                height={420}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-display text-xl font-bold tracking-wide text-white sm:text-2xl">
                    Muhammad Ismail
                  </p>
                  <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-white/65 uppercase sm:text-[10px]">
                    Founder, CRAFTLOGIC
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="max-w-2xl">
            <Reveal className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-[10px] font-medium tracking-[0.24em] text-muted-foreground uppercase sm:text-[11px] sm:tracking-[0.3em] font-mono">
                Muhammad Ismail
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-6 text-3xl leading-[1.12] font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] text-foreground">
                Clean Code, Modern Design, and Honest Work.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg font-normal">
                We started CRAFTLOGIC with one simple goal: to help businesses get high-quality
                websites without the usual delays, complicated technical talk, or messy templates.
                Every project is built properly from the ground up to help your business grow.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8 border-t border-border pt-5">
                <p className="font-display text-base font-semibold tracking-wide text-foreground">
                  Muhammad Ismail
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Founder & Lead Developer</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 10. Start Project Form ---------------- */
export function StartProject() {
  const [projectSent, setProjectSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [projectError, setProjectError] = useState("");

  const onProjectSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const projectType = String(data.get("project_type") ?? "").trim();
    const budget = String(data.get("budget") ?? "").trim();
    const timeline = String(data.get("timeline") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    if (!name || !email) {
      setProjectError("Please fill in your name and email.");
      return;
    }

    setProjectError("");
    setSubmitting(true);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone || "Not provided",
          business: business || "Not provided",
          projectType: projectType || "Not specified",
          budget: budget || "Not specified",
          timeline: timeline || "Not specified",
          message: details || "No additional details provided.",
          _subject: `CRAFTLOGIC Lead: ${name} (${business || "New Project"})`,
        }),
      });

      if (res.ok) {
        setProjectSent(true);
      } else {
        const text = encodeURIComponent(
          `CRAFTLOGIC Project Inquiry:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness: ${business}\nProject: ${projectType}\nBudget: ${budget}\nTimeline: ${timeline}\nDetails: ${details}`,
        );
        window.open(`https://wa.me/${WHATSAPP_RAW}?text=${text}`, "_blank", "noopener,noreferrer");
        setProjectSent(true);
      }
    } catch {
      const text = encodeURIComponent(
        `CRAFTLOGIC Project Inquiry:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness: ${business}\nProject: ${projectType}\nBudget: ${budget}\nTimeline: ${timeline}\nDetails: ${details}`,
      );
      window.open(`https://wa.me/${WHATSAPP_RAW}?text=${text}`, "_blank", "noopener,noreferrer");
      setProjectSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="start" className="border-t border-border py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Start a Real Project"
          title="Tell Us About What You Want to Build."
          subtitle="Fill in this quick form with your project details and budget preferences. We will review your requirements and reach out within 24 hours."
        />

        <div className="mt-14 max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 shadow-xl">
            {projectSent ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                <h3 className="font-display mt-5 text-2xl font-bold text-foreground">
                  Inquiry Transmitted!
                </h3>
                <p className="mt-3 text-base text-muted-foreground max-w-md mx-auto">
                  Your requirements have been successfully dispatched to{" "}
                  <strong className="text-white">{EMAIL}</strong>. We will get back to you with a
                  clear roadmap within 24 hours!
                </p>
              </div>
            ) : (
              <form onSubmit={onProjectSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-2">
                      Your Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Johnson"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-2">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-2">
                      WhatsApp or Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="+92 300 0000000"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-2">
                      Business or Company Name
                    </label>
                    <input
                      type="text"
                      name="business"
                      placeholder="e.g. Apex Detailing, Luxe Store"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                  <div>
                    <label className="block text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-2">
                      Project Type / Name
                    </label>
                    <input
                      type="text"
                      name="project_type"
                      placeholder="e.g. Portfolio / Online Store"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-2">
                      Estimated Budget
                    </label>
                    <input
                      type="text"
                      name="budget"
                      placeholder="e.g. $2,000 or $5k-$10k"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-2">
                      Target Timeline
                    </label>
                    <input
                      type="text"
                      name="timeline"
                      placeholder="e.g. 2-3 Weeks / Flexible"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-2">
                    Tell Us About Your Project & Requirements
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    placeholder="Briefly tell us what your business does, any websites you like, and what features you need..."
                    className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                {projectError && <p className="text-sm text-red-400 font-medium">{projectError}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-sm text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-accent active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                >
                  <span>
                    {submitting ? "Transmitting Requirements..." : "Submit Project Scope"}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 11. Quick Direct Contact Strip ---------------- */
export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-20 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Prefer to talk directly?
            </h3>
            <p className="mt-2 text-muted-foreground text-sm sm:text-base">
              Send an email or message us directly on WhatsApp. We answer all messages within 24
              hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:justify-end">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2.5 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span>{EMAIL}</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_RAW}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-400 transition-colors hover:border-emerald-500/60"
            >
              <Phone className="h-4 w-4 text-emerald-400" />
              <span>WhatsApp: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 12. Branded Footer with 7 Social Channels ---------------- */
const FOOTER_LINKS = [
  { label: "Home", hash: "home" },
  { label: "Services", hash: "services" },
  { label: "Work", hash: "work" },
  { label: "Demo", hash: "demo" },
  { label: "Process", hash: "process" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-14 bg-background">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 md:px-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-3 select-none">
          <div className="relative flex shrink-0 items-center justify-center pt-0.5">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 sm:h-11 sm:w-11 shrink-0"
              aria-hidden="true"
            >
              <path d="M32 8L54 20L32 32L10 20L32 8Z" fill="#6366F1" />
              <path d="M32 20L54 32L32 44L10 32L32 20Z" fill="#0EA5E9" />
              <path d="M32 32L54 44L32 56L10 44L32 32Z" fill="#10B981" />
            </svg>
          </div>

          <div>
            <div className="flex items-center tracking-[-0.03em] font-extrabold text-xl sm:text-2xl font-display leading-none">
              <span className="text-white">CRAFT</span>
              <span className="text-[#10B981] ml-0.5">LOGIC</span>
            </div>
            <p className="mt-1.5 text-[10px] tracking-[0.14em] text-primary uppercase font-mono">
              High-Performance Web Development Studio
            </p>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground font-normal">
              High-converting websites and scalable digital infrastructure engineered with clean
              code and modern design.
            </p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-4">
            {FOOTER_LINKS.map((l) => (
              <li key={l.hash}>
                <Link
                  to="/"
                  hash={l.hash}
                  activeOptions={{ exact: true, includeHash: true }}
                  className="focus-ring rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-4 text-sm">
          <div className="space-y-2 font-mono text-xs">
            <a
              href={`mailto:${EMAIL}`}
              className="focus-ring block rounded-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {EMAIL}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_RAW}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring block rounded-sm text-muted-foreground transition-colors hover:text-emerald-400"
            >
              WhatsApp: {PHONE_DISPLAY}
            </a>
          </div>

          <div className="pt-2">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
              Official Channels
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CRAFTLOGIC on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>

              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CRAFTLOGIC on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>

              <a
                href={SOCIAL.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CRAFTLOGIC on TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>

              <a
                href={SOCIAL.threads}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CRAFTLOGIC on Threads"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <ThreadsIcon className="h-4 w-4" />
              </a>

              <a
                href={SOCIAL.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CRAFTLOGIC on X"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <XTwitterIcon className="h-4 w-4" />
              </a>

              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CRAFTLOGIC on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>

              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CRAFTLOGIC on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <YouTubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1400px] border-t border-border px-6 pt-7 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © 2026 CRAFTLOGIC Studio. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground font-mono">Engineered by Muhammad Ismail</p>
      </div>
    </footer>
  );
}

export { Rocket };