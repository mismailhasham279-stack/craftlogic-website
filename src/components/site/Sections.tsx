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
  Search,
  Gauge,
  CalendarCheck,
  BarChart3,
  FileSearch,
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
    copy: "A clean, professional website tells new customers that your business is serious and reliable. When people can see your work, your services, and real reviews in one place, they trust you faster and feel confident contacting you instead of a competitor.",
  },
  {
    icon: Globe,
    title: "GET INQUIRIES 24/7",
    copy: "Your website works even when you are closed. Customers can read about your services, see your past work, and send you a message at any time of the day or night, so you never miss an enquiry just because you were busy or asleep.",
  },
  {
    icon: TrendingUp,
    title: "EASY FOR CUSTOMERS",
    copy: "Visitors should never have to guess what to do next. Clear buttons, simple pages, and a short contact form make it effortless for a customer to call you, message you on WhatsApp, or book an appointment in less than a minute.",
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
              Most customers search online before they buy. They compare two or three businesses,
              look at their websites, and then decide who to contact. If your website looks old,
              loads slowly, or does not explain what you do, those customers quietly move on to
              someone else. We build clean, fast websites that show you take your business
              seriously, explain your services in plain words, and give customers full confidence
              to choose you.
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
                      ? "border-primary/80 bg-surface-2 shadow-[0_12px_36px_-12px_rgba(0,0,0,0.3)] scale-[0.985]"
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
    copy: "A complete, modern website for your business that explains what you do, who you help, and how to contact you. Every page is written in plain words, designed to look professional on phones and computers, and built to turn visitors into enquiries. We include your services, your work, customer reviews, and a simple contact form, so a new visitor understands your business within seconds and knows exactly what to do next.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Landing Pages",
    copy: "A single focused page built around one offer, one service, or one advertising campaign. Instead of giving visitors many choices, a landing page guides them to one clear action, such as booking a call, requesting a quote, or buying a product. This is the fastest way to turn paid ads and social media traffic into real enquiries.",
  },
  {
    n: "03",
    icon: ShoppingCart,
    title: "Online Stores",
    copy: "A clean and secure online shop where customers can browse your products, see clear prices and photos, and buy with confidence. We set up product pages, categories, search, and a simple checkout, and we make sure the store loads fast and works perfectly on mobile phones, where most shopping happens today.",
  },
  {
    n: "04",
    icon: RefreshCw,
    title: "Website Redesign",
    copy: "If your current website looks old, loads slowly, or no longer brings customers, we rebuild it from the ground up. We keep what already works, fix what is broken, improve the design and speed, and rewrite the content in simple words, so your website starts working for your business again instead of just sitting there.",
  },
  {
    n: "05",
    icon: Smartphone,
    title: "Mobile-First Web Apps",
    copy: "Custom tools built around your daily work, such as booking systems, client portals, quote calculators, or internal dashboards. Because we design for mobile phones first, your customers and your team can use the tool anywhere, without confusion or extra steps.",
  },
  {
    n: "06",
    icon: MessageSquare,
    title: "WhatsApp & Form Setup",
    copy: "Direct WhatsApp buttons, instant contact forms, and Google Maps placed exactly where customers need them. A visitor can message you in one tap, without copying numbers or searching for your contact page, which means more enquiries and fewer lost customers.",
  },
  {
    n: "07",
    icon: Search,
    title: "SEO — Get Found on Google",
    copy: "SEO means helping your business show up higher on Google when customers search for what you offer. We fix your page titles and descriptions, improve your content and page speed, set up your Google Business Profile, and build local pages, so customers in your city find you before they find your competitors. Results take time, usually a few months, but they keep bringing enquiries without paying for ads.",
  },
  {
    n: "08",
    icon: ShieldCheck,
    title: "Website Care Plans",
    copy: "A monthly care plan that keeps your website safe, fast, and up to date after launch. We handle software updates, backups, security checks, and small content changes for you, so you never have to worry about something breaking, and your website keeps working smoothly month after month.",
  },
  {
    n: "09",
    icon: Gauge,
    title: "Speed Optimization",
    copy: "If your website takes more than a few seconds to open, many visitors leave before they ever see it. We find exactly what is slowing your site down, compress heavy images, clean up slow code, and test the result, so your pages open fast on phones and computers and visitors stay long enough to contact you.",
  },
  {
    n: "10",
    icon: CalendarCheck,
    title: "Booking & E-commerce Setup",
    copy: "Online booking for appointments, classes, or services, and full e-commerce setup for selling products online. Customers can pick a time or a product, pay or reserve in a few simple steps, and you receive the booking or order immediately, without back-and-forth messages.",
  },
  {
    n: "11",
    icon: Mail,
    title: "Domain & Business Email Setup",
    copy: "Your own domain name and a professional business email address, such as hello@yourbusiness.com, instead of a free personal email. We buy and connect the domain, set up email forwarding, and make sure your website and email work together from day one, so your business looks established everywhere.",
  },
  {
    n: "12",
    icon: BarChart3,
    title: "Analytics Setup",
    copy: "Simple, clear reports that show how many people visit your website, where they come from, and which pages they read. We install and configure analytics for you and explain the numbers in plain words, so you can see what is working and make better decisions about your business.",
  },
  {
    n: "13",
    icon: FileSearch,
    title: "Paid Website Audit",
    copy: "A complete, honest review of your current website, with a clear report of what is helping you and what is hurting you. We check speed, mobile design, content, Google visibility, and missing pages, then give you a practical fix list in order of importance, so you know exactly what to improve first, whether you hire us or not.",
  },
];

export function Services() {
  const [activeTouchIndex, setActiveTouchIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Our Services"
          title="Everything Your Business Needs to Succeed Online."
          subtitle="Whether you need a brand-new website, a complete redesign, or help getting found on Google, we offer every service a growing business needs in one place. Each service below is explained in plain words, with no technical jargon, so you know exactly what you are getting."
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
                      ? "border-primary/90 bg-surface-2 shadow-[0_12px_36px_-12px_rgba(0,0,0,0.35)] scale-[0.985]"
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
          subtitle="Take a look at some of the websites and platforms we have built for real businesses. Every project below is real client work, with real results, and you can open each one to see the design, the features, and what it achieved for the business."
        />

        <div className="mt-14 space-y-6 lg:space-y-8">
          {selectedProjects[0] && (
            <Reveal>
              <Link
                to="/work/$slug"
                params={{ slug: selectedProjects[0].project.slug }}
                className="interactive-card focus-ring group grid overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-[0_24px_70px_-42px_rgba(0,0,0,0.25)] lg:grid-cols-[1.25fr_0.75fr]"
                aria-label={`View ${selectedProjects[0].presentation.name} details`}
              >
                <div className="relative flex items-center justify-center overflow-hidden bg-surface p-5 sm:p-8 lg:min-h-[390px] lg:p-10">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(0,0,0,0.06),transparent_62%)]" />
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
                  className="interactive-card focus-ring group block h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-[0_18px_48px_-34px_rgba(0,0,0,0.22)]"
                  aria-label={`View ${presentation.name} details`}
                >
                  <div className="relative overflow-hidden bg-surface p-4 sm:p-5">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(0,0,0,0.05),transparent_62%)]" />
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
              Social media is great for being discovered, but it is rented space: algorithms
              change, followers get distracted, and you do not control the platform. Your website
              is the one place you fully own, where visitors actually turn into paying clients,
              because everything there is built around one goal: making it easy to contact you.
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
                      ? "border-primary/40 hover:border-primary/70 hover:shadow-[0_20px_50px_-36px_rgba(0,0,0,0.25)]"
                      : "border-black/10 hover:border-black/20"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 border-b px-6 py-4 sm:px-7 ${
                      isSolution ? "border-primary/20 bg-primary/5" : "border-black/10 bg-surface"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isSolution
                          ? "bg-primary shadow-[0_0_8px_rgba(0,0,0,0.8)]"
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
        <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card p-8 sm:p-12 md:p-16 shadow-[0_28px_80px_-56px_rgba(0,0,0,0.2)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(0,0,0,0.06),transparent_48%)]" />

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
                        <strong className="text-foreground">{EMAIL}</strong>. We will review your
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

/* ---------------- 6. Process Section: 7 stages, 3 chapters ---------------- */
const CHAPTERS = [
  {
    chapter: "Chapter 1",
    name: "Plan",
    tagline: "Find the direction.",
    stages: [
      {
        n: "01",
        title: "Discover",
        copy: "We start with a simple conversation about your business: what you sell, who your customers are, what your competitors do, and what a good result looks like for you. We also look at your current website, if you have one, and note what is working and what is not, before we suggest anything.",
      },
      {
        n: "02",
        title: "Strategize",
        copy: "Next, we agree on the plan together: which pages your website needs, what each page should say, what features matter most, and a realistic timeline. You approve the plan before any design work starts, so there are no surprises later about scope or cost.",
      },
    ],
  },
  {
    chapter: "Chapter 2",
    name: "Create",
    tagline: "Shape it. Build it. Prove it.",
    stages: [
      {
        n: "03",
        title: "Design",
        copy: "We design your website page by page, starting with the homepage, and show you a real preview you can click through. You tell us what you like and what to change, and we revise it until you are happy with how it looks and feels.",
      },
      {
        n: "04",
        title: "Develop",
        copy: "We build the approved design with clean, modern code, so your website loads fast, works on every phone and computer, and is easy to update later. We add your content, photos, forms, and WhatsApp buttons, and connect your domain and email.",
      },
      {
        n: "05",
        title: "Test",
        copy: "Before launch, we test everything carefully: every button, every form, every page on mobile and desktop, and the loading speed. We fix any problem we find, so your customers never see a broken page or a form that does not work.",
      },
    ],
  },
  {
    chapter: "Chapter 3",
    name: "Evolve",
    tagline: "Launch with a future.",
    stages: [
      {
        n: "06",
        title: "Launch",
        copy: "We make your website live, connect your domain, set up analytics so you can see your visitors, and check everything one final time. We also show you how to update basic content yourself, so you are never locked out of your own website.",
      },
      {
        n: "07",
        title: "Care",
        copy: "After launch, you can choose a monthly care plan, and we keep your website updated, backed up, and secure. If you want new pages or features later, we add them step by step, so your website grows with your business instead of going out of date.",
      },
    ],
  },
];

export function Process() {
  return (
    <section id="process" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Our Process"
          title="A Clear Path From First Call to Launch — and Beyond."
          subtitle="Seven stages, grouped into three simple chapters. You always know what is happening, what comes next, and what we need from you, so a website project never feels confusing or stressful."
        />
        <div className="mt-14 space-y-12">
          {CHAPTERS.map((c) => (
            <div key={c.name}>
              <Reveal>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-black/10 pt-6">
                  <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                    {c.chapter}
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                    {c.name}
                  </h3>
                  <span className="text-base text-muted-foreground">{c.tagline}</span>
                </div>
              </Reveal>
              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {c.stages.map((st, i) => (
                  <Reveal key={st.n} delay={i * 70} className="h-full">
                    <article className="interactive-card h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40">
                      <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
                        {st.n}
                      </span>
                      <h4 className="font-display mt-3 text-lg font-semibold tracking-tight text-foreground">
                        {st.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-normal">
                        {st.copy}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
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
    copy: "Your website will load in under 2 seconds on a normal phone connection, because we compress images, clean up slow code, and test the speed before launch. Visitors never leave out of frustration while waiting for a slow page, and Google also ranks faster websites higher.",
  },
  {
    icon: Smartphone,
    title: "100% Mobile Ready",
    copy: "More than 70% of visitors come from phones, so we design for mobile screens first and then adapt the design for tablets and computers. Every button, image, and form is tested on real phone sizes, so your website looks stunning and works perfectly everywhere.",
  },
  {
    icon: ShieldCheck,
    title: "You Own Everything",
    copy: "You receive 100% ownership of your domain, your website code, your design, and your content. There are no hidden lock-ins and no monthly hostage fees. If you ever want to move or change developers, everything is yours, and we hand it over cleanly.",
  },
  {
    icon: Rocket,
    title: "Post-Launch Support",
    copy: "We do not vanish after launch. Every project includes 30 days of free technical support, and after that you can choose a monthly care plan. If anything breaks or needs a quick adjustment, we fix it fast, so your business never suffers because of a website problem.",
  },
];

export function WhyMe() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Why CRAFTLOGIC"
          title="Our Commitment to Quality."
          subtitle="Honest work, clear communication, and websites built to last. These four promises apply to every single project we build, no matter the size."
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
    a: "A typical business website takes 7 to 14 days from our first conversation to launch. A larger online store or a custom web app usually takes 3 to 4 weeks, depending on how many pages and features you need. We agree on a realistic timeline before we start, and we keep you updated at every stage, so you always know where your project stands.",
  },
  {
    q: "How much does a website cost?",
    a: "The price depends on what your website needs: how many pages, whether you sell online, and whether you need booking or special features. A simple business website starts from $500. Before you pay anything, we show you a free homepage design and give you an exact, all-inclusive price, so there are no hidden costs later.",
  },
  {
    q: "I already have a domain or hosting. Can you use it?",
    a: "Yes, absolutely. If you already own a domain from Namecheap, GoDaddy, Hostinger, or any other provider, we connect your new website to it without any problem. If you do not have one yet, we help you choose and set up the right domain and hosting.",
  },
  {
    q: "Can I update text, photos, and products myself later?",
    a: "Yes. We structure your website so you can easily update contact details, text, photos, and products whenever you want, without needing a developer for every small change. We also show you how to do it, and if you prefer, our care plan handles updates for you.",
  },
  {
    q: "Will my website look good on mobile phones?",
    a: "Yes. More than 70% of visitors come from smartphones, so we design every page for mobile screens first, then adapt it for tablets and computers. Every button, image, and form is tested on real phone sizes before launch.",
  },
  {
    q: "What happens if something breaks after launch?",
    a: "Every project includes 30 days of free technical support after launch. If anything goes wrong or needs a quick adjustment, we fix it fast. After that, a monthly care plan keeps your website updated, backed up, and secure.",
  },
  {
    q: "Do you also help with Google and SEO?",
    a: "Yes. We offer SEO services that help your business show up higher on Google: fixing page titles and content, improving speed, setting up your Google Business Profile, and building local pages. SEO takes time, usually a few months, but it keeps bringing enquiries without paying for ads.",
  },
  {
    q: "Who owns the website, the domain, and the content?",
    a: "You do, 100%. Your domain, your website code, your design, and your content all belong to you. There are no lock-ins. If you ever want to move to another developer, we hand everything over cleanly.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Got Questions?"
          title="Frequently Asked Questions."
          subtitle="Everything you need to know about working with CRAFTLOGIC, answered in plain words. If your question is not here, send us a message and we will answer it honestly."
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
                Every project is built properly from the ground up, with clean code and honest
                communication, so your business gets a website that works as hard as you do.
                CRAFTLOGIC is a web design studio led by its founder, Muhammad Ismail, and every
                project is handled directly by the founder, with no layers, no hand-offs, and no
                surprises.
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
                  <strong className="text-foreground">{EMAIL}</strong>. We will get back to you with a
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
              className="inline-flex items-center gap-2.5 rounded-lg border border-emerald-600/30 bg-emerald-600/10 px-5 py-3 text-sm font-medium text-emerald-700 transition-colors hover:border-emerald-600/60"
            >
              <Phone className="h-4 w-4 text-emerald-700" />
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
  { label: "FAQ", hash: "faq" },
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
              <path d="M32 8L54 20L32 32L10 20L32 8Z" fill="#5052D8" />
              <path d="M32 20L54 32L32 44L10 32L32 20Z" fill="#128DD8" />
              <path d="M32 32L54 44L32 56L10 44L32 32Z" fill="#0AB18E" />
            </svg>
          </div>

          <div>
            <div className="flex items-center tracking-[-0.03em] font-extrabold text-xl sm:text-2xl font-display leading-none">
              <span className="text-black">CRAFT</span>
              <span className="font-serif-logo text-[#0AAA8C] ml-0.5">LOGIC</span>
            </div>
            <p className="mt-1.5 text-[10px] tracking-[0.14em] text-primary uppercase font-mono">
              High-Performance Web Development Studio
            </p>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground font-normal">
              Clean, fast websites and honest support for growing businesses, built with modern
              code and plain communication.
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
              className="focus-ring block rounded-sm text-muted-foreground transition-colors hover:text-emerald-600"
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


/* ---------------- Principles: editorial, text-led ---------------- */
const PRINCIPLES = [
  {
    n: "01",
    title: "Clarity before code.",
    copy: "We understand your customers, your services, and your goals before we write a single line of code. A website that is clear about what it offers will always beat a website that only looks impressive.",
  },
  {
    n: "02",
    title: "Honest pricing, no surprises.",
    copy: "You approve the design and the full price before we build. There are no hidden costs, no surprise charges halfway through, and no monthly fees you did not agree to.",
  },
  {
    n: "03",
    title: "Built for customers, not for awards.",
    copy: "Every page, button, and form exists to help a real customer take the next step: call you, message you, or buy from you. If a feature does not help your business, we do not add it.",
  },
  {
    n: "04",
    title: "A website that grows with you.",
    copy: "Your business will change, and your website should change with it. We build everything so new pages, services, and features can be added later without rebuilding from scratch.",
  },
];

export function Principles() {
  return (
    <section id="principles" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-start">
          <div>
            <SectionHeading
              label="How We Work"
              title="Good Websites Start With Clear Thinking, Not Fancy Effects."
              subtitle="Four principles guide every project we build. They are the reason our websites are simple to use, honest in price, and genuinely useful for the businesses behind them."
            />
          </div>
          <div>
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={i * 70}>
                <div className="border-t border-black/10 py-7 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
                      {p.n}
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Ways to Work Together ---------------- */
const WAYS = [
  {
    title: "A complete project",
    copy: "You need a new website, a redesign, or an online store. We plan it, design it, build it, and launch it, with a fixed price agreed before we start. Best for businesses that want a finished website without an ongoing commitment.",
    cta: "Start a Project",
  },
  {
    title: "A monthly care plan",
    copy: "Your website is already live and you want it looked after. Updates, backups, security checks, and small changes are handled for you every month, so your website stays fast and safe while you focus on your business.",
    cta: "Ask About Care Plans",
  },
  {
    title: "A paid website audit",
    copy: "You want an honest, expert opinion before spending money. We review your whole website and give you a clear report with a fix list in order of importance. You can fix things yourself, or hire us to do it.",
    cta: "Request an Audit",
  },
];

export function WaysToWork() {
  return (
    <section id="ways" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="Ways to Work Together"
          title="Start Wherever You Are."
          subtitle="You do not need to know exactly what you want before talking to us. Pick the starting point that fits your situation, and we will guide you from there in plain words."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {WAYS.map((w, i) => (
            <Reveal key={w.title} delay={i * 70} className="h-full">
              <article className="interactive-card flex h-full flex-col justify-between rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/40">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.copy}</p>
                </div>
                <Link
                  to="/"
                  hash="start"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  {w.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Rocket };