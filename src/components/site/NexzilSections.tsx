import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Users,
  Layers,
  Compass,
  RefreshCw,
  Rocket,
  Globe,
  Cloud,
  Wrench,
  HeartHandshake,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { projects } from "@/data/projects";

/* Brand palette sampled from the Nexzillabs reference look (off-white base,
   near-black sections, and one vivid accent per capability block). All copy,
   images, and projects below are CRAFTLOGIC's own. */

const WORK_IMAGES: Record<string, string> = {
  luxevia: "/project-previews/curate.webp",
  nailsbygrace: "/project-previews/nails-by-grace.webp",
  shoptop: "/project-previews/usa-luxe-curate.webp",
  "haider-stillbok": "/project-previews/haider-stillbok.webp",
  aurevane: "/project-previews/aurevane.webp",
};

const WORK_IDS = ["luxevia", "nailsbygrace", "shoptop", "haider-stillbok", "aurevane"];

/* ---------------- Work showcase ---------------- */
export function WorkShowcase() {
  const items = WORK_IDS.flatMap((id) => {
    const p = projects.find((item) => item.id === id);
    return p ? [{ p, img: WORK_IMAGES[id] ?? "/project-previews/aurevane.webp" }] : [];
  });

  return (
    <section id="work" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.22em] text-black/50 uppercase">
            Explore the work
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-serif mt-4 text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
            Explore the work.
            <br />
            <em className="font-normal italic">See the thinking.</em>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-black/60">
            A glimpse of the websites, stores, and booking systems we have built for real
            businesses — each one designed to turn visitors into enquiries.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ p, img }, i) => (
            <Reveal key={p.id} delay={(i % 3) * 70} className="h-full">
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group block h-full overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#ECEAE6]">
                  <img
                    src={img}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-black uppercase backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-black">
                      {p.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-black/60">
                      {p.description}
                    </p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Connected team ---------------- */
const TEAM_CARDS = [
  {
    tag: "Collaboration",
    tagClass: "bg-pink-100 text-pink-800",
    icon: Users,
    title: "A team connected to your product",
    copy: "Bring the product decisions, design, and engineering into one conversation — directly with the founder, no hand-offs.",
  },
  {
    tag: "Custom development",
    tagClass: "bg-amber-100 text-amber-800",
    icon: Layers,
    title: "Software shaped around your business",
    copy: "Build applications around your users, processes, and existing systems — not around a template.",
  },
  {
    tag: "Thoughtful systems",
    tagClass: "bg-emerald-100 text-emerald-800",
    icon: Compass,
    title: "Foundations for what comes next",
    copy: "Consider the architecture, security, and operations as part of the product, so it keeps working as you grow.",
  },
  {
    tag: "Connected workflows",
    tagClass: "bg-sky-100 text-sky-800",
    icon: RefreshCw,
    title: "Make space for better work",
    copy: "Automate repetitive processes while keeping your people in control — bookings, enquiries, and orders included.",
  },
];

export function ConnectedTeam() {
  return (
    <section className="bg-[#ECEAE6] py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl">
                Complex ideas need
                <br />
                <em className="font-normal italic">a connected team.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-black/60">
                Bring the product thinking, the experience, and the engineering together. We help
                you turn a business challenge into a considered digital product — a website your
                customers actually enjoy using.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <a
                href="#services"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore our services
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-black">
                  <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {TEAM_CARDS.map((c, i) => (
              <Reveal key={c.title} delay={i * 70} className="h-full">
                <article className="h-full rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)]">
                  <span
                    className={`inline-block rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.14em] uppercase ${c.tagClass}`}
                  >
                    {c.tag}
                  </span>
                  <c.icon className="mt-6 h-5 w-5 text-black" strokeWidth={1.75} />
                  <h3 className="font-display mt-3 text-lg font-bold tracking-tight text-black">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">{c.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Company (black) ---------------- */
export function CompanyBlack() {
  return (
    <section className="bg-background px-4 py-6 md:px-6">
      <div className="rounded-[2rem] bg-[#0A0A0A] px-6 py-16 text-white sm:px-10 md:py-20">
        <div className="mx-auto max-w-[1300px]">
          <Reveal>
            <span className="inline-block rounded-full border border-white/25 px-4 py-1.5 font-mono text-[10px] tracking-[0.22em] text-white/80 uppercase">
              Our company
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Real business challenges.
              <br />
              <em className="font-normal italic">Practical website solutions.</em>
            </h2>
          </Reveal>

          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[1fr_1.1fr]">
            <div className="grid gap-5">
              <Reveal className="h-full">
                <article className="flex h-full flex-col justify-between rounded-2xl bg-white/[0.06] p-7 ring-1 ring-white/10">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                      Product thinking + engineering
                    </p>
                    <h3 className="font-serif mt-4 text-2xl leading-tight sm:text-3xl">
                      One connected
                      <br />
                      way of working.
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
                      Product planning, design, and website development, brought together in one
                      studio — directly with the founder.
                    </p>
                  </div>
                  <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-white/50 uppercase">
                    Meet CRAFTLOGIC →
                  </p>
                </article>
              </Reveal>
              <Reveal delay={80} className="h-full">
                <article className="rounded-2xl bg-white p-7 text-black">
                  <h3 className="font-serif text-2xl leading-tight sm:text-3xl">
                    A clear next step.
                    <br />
                    <em className="font-normal italic">A considered beginning.</em>
                  </h3>
                  <a
                    href="#start"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Talk about your idea
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-black">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </a>
                </article>
              </Reveal>
            </div>

            <Reveal delay={120} className="h-full">
              <figure className="relative h-full min-h-[320px] overflow-hidden rounded-2xl">
                <img
                  src="/images/founder/muhammad-ismail.jpg"
                  alt="Muhammad Ismail, Founder of CRAFTLOGIC"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-2 font-mono text-[10px] tracking-[0.16em] text-white uppercase backdrop-blur-sm">
                  Muhammad Ismail — Founder, CRAFTLOGIC
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Capability color blocks ---------------- */
const COLOR_BLOCKS = [
  {
    n: "01",
    bg: "#0F172A",
    title: "Custom Website Development",
    accent: "Development",
    tagline: "Websites shaped around your business, not around a template.",
    img: "/project-previews/aurevane.webp",
  },
  {
    n: "02",
    bg: "#FF4D00",
    title: "Website Experiences",
    accent: "Experiences",
    tagline: "Clear stories. Considered interactions. Beautifully engineered.",
    img: "/project-previews/curate.webp",
  },
  {
    n: "03",
    bg: "#0A0A0A",
    title: "Online Stores & Booking",
    accent: "Booking",
    tagline: "Shops and bookings that turn visitors into orders.",
    img: "/project-previews/usa-luxe-curate.webp",
  },
  {
    n: "04",
    bg: "#6C2BD9",
    title: "SEO & Google Visibility",
    accent: "Visibility",
    tagline: "Get found on Google by the customers already looking for you.",
    img: "/project-previews/nails-by-grace.webp",
  },
  {
    n: "05",
    bg: "#FF4D00",
    title: "Care Plans & Support",
    accent: "Support",
    tagline: "Updates, backups, and security handled for you, every month.",
    img: "/project-previews/haider-stillbok.webp",
  },
  {
    n: "06",
    bg: "#0F172A",
    title: "Speed & Foundations",
    accent: "Foundations",
    tagline: "Release, observe, and improve. Build the foundations that last.",
    img: "/project-previews/aurevane.webp",
  },
  {
    n: "07",
    bg: "#0F766E",
    title: "Local & Google Profiles",
    accent: "Local",
    tagline: "Your Google Business Profile, set up and working for your city.",
    img: "/project-previews/curate.webp",
  },
  {
    n: "08",
    bg: "#4A90D9",
    title: "Analytics & Growth",
    accent: "Growth",
    tagline: "Simple reports that show what is working — in plain words.",
    img: "/project-previews/usa-luxe-curate.webp",
  },
  {
    n: "09",
    bg: "#0F766E",
    title: "Audits & Redesign",
    accent: "Redesign",
    tagline: "An honest review first, then a rebuild that fixes what matters.",
    img: "/project-previews/nails-by-grace.webp",
  },
];

export function ColorBlocks() {
  return (
    <div id="capabilities">
      {COLOR_BLOCKS.map((b) => (
        <section key={b.n} style={{ backgroundColor: b.bg }} className="py-16 text-white md:py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/60">
                ({b.n})
              </span>
              <a
                href="#services"
                className="font-mono text-[11px] tracking-[0.16em] text-white/70 uppercase transition-colors hover:text-white"
              >
                Explore {b.accent} →
              </a>
            </div>
            <Reveal>
              <h2 className="font-serif mt-6 text-center text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                {b.title.split(" & ")[0]}
                {b.title.includes(" & ") ? (
                  <>
                    {" & "}
                    <em className="font-normal italic">{b.title.split(" & ")[1]}</em>
                  </>
                ) : null}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
                <img
                  src={b.img}
                  alt={b.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover object-top"
                />
              </div>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-center text-sm text-white/75 sm:text-base">{b.tagline}</p>
            </Reveal>
          </div>
        </section>
      ))}
    </div>
  );
}

/* ---------------- Capabilities grid ---------------- */
const CAPABILITIES = [
  {
    title: "Custom Website Development",
    copy: "Business websites and web applications, from requirements and design to testing and support.",
  },
  {
    title: "Website Experiences",
    copy: "Business websites with responsive design, performance tuning, and ongoing support.",
  },
  {
    title: "Online Stores & Booking",
    copy: "Shops and booking systems, from product pages and checkout to orders and appointments.",
  },
  {
    title: "SEO & Google Visibility",
    copy: "On-page SEO, local pages, and Google Business Profile setup that brings local customers.",
  },
  {
    title: "Care Plans & Support",
    copy: "Monthly updates, backups, security checks, and small changes — handled for you.",
  },
  {
    title: "Speed & Foundations",
    copy: "Hosting, deployment, monitoring, and reliable releases for websites that stay fast.",
  },
  {
    title: "Audits & Redesign",
    copy: "Honest website reviews and full rebuilds covering speed, mobile design, and content.",
  },
  {
    title: "Analytics & Growth",
    copy: "Analytics setup and plain-word reports that show what is working on your website.",
  },
  {
    title: "Domain, Email & Tools",
    copy: "Domain setup, professional business email, WhatsApp buttons, and form integrations.",
  },
];

export function CapabilitiesGrid() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="text-center font-mono text-[11px] tracking-[0.22em] text-black/50 uppercase">
            Our capabilities
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-serif mt-4 text-center text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl">
            From your first idea
            <br />
            <em className="font-normal italic">to what comes next.</em>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-black/60">
            Design the experience, build the website, and connect the systems. Find the right
            starting point.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 60} className="h-full">
              <a
                href="#services"
                className="group flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)]"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-base font-bold tracking-tight text-black">
                      {c.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-black/40 transition-all duration-300 group-hover:rotate-45 group-hover:text-black" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">{c.copy}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              All capabilities
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-black">
                <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Process (chapters + images) ---------------- */
const PROCESS_CHAPTERS = [
  {
    chapter: "Chapter 1",
    name: "Plan",
    tagline: "Find the direction.",
    img: "/project-previews/usa-luxe-curate.webp",
    stages: [
      {
        title: "Discover",
        copy: "Explore your business, your customers, and your competitors before choosing a solution.",
      },
      {
        title: "Strategize",
        copy: "Agree priorities, scope, and a realistic timeline together — before any design starts.",
      },
    ],
  },
  {
    chapter: "Chapter 2",
    name: "Create",
    tagline: "Shape it. Build it. Prove it.",
    img: "/project-previews/aurevane.webp",
    stages: [
      {
        title: "Design",
        copy: "Work through pages, structure, and interface decisions with a real preview and your feedback.",
      },
      {
        title: "Develop",
        copy: "Turn the agreed design into a working website, keeping feedback close to delivery.",
      },
      {
        title: "Test",
        copy: "Validate every button, form, page, and loading speed on mobile and desktop before launch.",
      },
    ],
  },
  {
    chapter: "Chapter 3",
    name: "Evolve",
    tagline: "Launch with a future.",
    img: "/project-previews/haider-stillbok.webp",
    stages: [
      {
        title: "Launch",
        copy: "Coordinate domain, email, analytics, and documentation before your website goes live.",
      },
      {
        title: "Care",
        copy: "Review feedback and agree maintenance and future improvements, so nothing goes out of date.",
      },
    ],
  },
];

export function ProcessV3() {
  return (
    <section id="process" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.22em] text-black/50 uppercase">
            Our process
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-serif mt-4 max-w-3xl text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl">
            A connected path from
            <br />
            <em className="font-normal italic">possibility to product.</em>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-black/60">
            Seven stages. Clear decisions. Strategy, design, and development moving together.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16">
          {PROCESS_CHAPTERS.map((ch) => (
            <div
              key={ch.name}
              className="grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14"
            >
              <div>
                <Reveal>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-black/50 uppercase">
                    {ch.chapter}
                  </p>
                  <h3 className="font-serif mt-2 text-3xl tracking-tight text-black">
                    {ch.name}
                    <span className="text-black/40"> — {ch.tagline}</span>
                  </h3>
                </Reveal>
                <div className="mt-6 space-y-5">
                  {ch.stages.map((st) => (
                    <Reveal key={st.title} delay={60}>
                      <div className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF4D00]" />
                        <div>
                          <p className="font-display text-base font-bold text-black">
                            {st.title} →
                          </p>
                          <p className="mt-1 max-w-md text-sm leading-relaxed text-black/60">
                            {st.copy}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
              <Reveal delay={100}>
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
                  <img
                    src={ch.img}
                    alt={`${ch.name} stage preview`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Foundations (black) ---------------- */
const FOUNDATIONS = [
  {
    n: "01 / Discovery & strategy",
    title: "Clarity before code.",
    copy: "Understand the users, the constraints, and the decisions before selecting the solution.",
  },
  {
    n: "02 / Design & development",
    title: "A connected experience.",
    copy: "Bring product design, website development, and testing together around the same goal.",
  },
  {
    n: "03 / Release & growth",
    title: "A future beyond launch.",
    copy: "Consider maintainability, security, and a clear handover as part of delivery.",
  },
];

export function Foundations() {
  return (
    <section className="bg-background px-4 py-6 md:px-6">
      <div className="rounded-[2rem] bg-[#0A0A0A] px-6 py-16 text-white sm:px-10 md:py-20">
        <div className="mx-auto max-w-[1300px]">
          <Reveal>
            <p className="text-center font-mono text-[11px] tracking-[0.22em] text-white/50 uppercase">
              The foundations
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif mt-4 text-center text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Considered decisions.
              <br />
              <em className="font-normal italic">Connected delivery.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-white/65">
              Useful websites begin with the people, the problem, and the way it will be used.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {FOUNDATIONS.map((f, i) => (
              <Reveal key={f.title} delay={i * 70} className="h-full">
                <article className="flex h-full flex-col justify-between rounded-2xl bg-white p-7 text-black">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.18em] text-black/50 uppercase">
                      {f.n}
                    </p>
                    <h3 className="font-serif mt-4 text-2xl leading-tight">{f.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-black/60">{f.copy}</p>
                  </div>
                  <a
                    href="#process"
                    className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-black transition-colors hover:text-black/60"
                  >
                    Explore our approach <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Before the build (blog cards) ---------------- */
const BEFORE_BUILD = [
  {
    title: "What should your website say?",
    tag: "Website basics",
    img: "/project-previews/aurevane.webp",
    slug: "5-pages-every-business-website-must-have",
    copy: "Start with your customers, your services, and the problems they need solved.",
  },
  {
    title: "Your first website, done right",
    tag: "Getting started",
    img: "/project-previews/curate.webp",
    slug: "how-a-professional-website-brings-more-customers",
    copy: "Connect the user journey with the pages that matter, from the first visit to the first enquiry.",
  },
  {
    title: "After the launch",
    tag: "Growth",
    img: "/project-previews/nails-by-grace.webp",
    slug: "how-much-does-a-business-website-cost-in-2026",
    copy: "Think about updates, costs, and the next release — before you need them.",
  },
];

export function BeforeBuild() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.22em] text-black/50 uppercase">
            Before the build
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-serif mt-4 text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl">
            Better questions.
            <br />
            <em className="font-normal italic">Clearer beginnings.</em>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-black/60">
            Topics to explore before your next website conversation, linked to our real guides.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {BEFORE_BUILD.map((b, i) => (
            <Reveal key={b.title} delay={i * 70} className="h-full">
              <Link
                to="/blog/$slug"
                params={{ slug: b.slug }}
                className="group block h-full overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-black uppercase backdrop-blur-sm">
                    {b.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl leading-tight text-black">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">{b.copy}</p>
                  <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-black">
                    Read the guide <ArrowRight className="h-4 w-4" />
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Ways to work ---------------- */
const WAYS = [
  {
    icon: Rocket,
    title: "Custom project development",
    copy: "An agreed scope, shaped around your business challenge.",
  },
  {
    icon: HeartHandshake,
    title: "Direct founder collaboration",
    copy: "Work directly with the founder — no layers, no hand-offs.",
  },
  {
    icon: Globe,
    title: "Domain, email & tools setup",
    copy: "Connect your domain, business email, and daily tools.",
  },
  {
    icon: Layers,
    title: "Design-first websites",
    copy: "Thoughtful user journeys and a clear interface direction.",
  },
  {
    icon: Cloud,
    title: "Launch & hosting setup",
    copy: "The environments and foundations your website needs to go live.",
  },
  {
    icon: Wrench,
    title: "Long-term care & support",
    copy: "Discuss maintenance, improvements, and the next release.",
  },
];

export function WaysV3() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="text-center font-mono text-[11px] tracking-[0.22em] text-black/50 uppercase">
            Ways to work together
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-serif mt-4 text-center text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl">
            Your next project.
            <br />
            <em className="font-normal italic">A shared direction.</em>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-black/60">
            Start with where you are. We will discuss the right scope and a way of working that
            fits.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WAYS.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 60} className="h-full">
              <article className="h-full rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)]">
                <w.icon className="h-5 w-5 text-black" strokeWidth={1.75} />
                <h3 className="font-display mt-4 text-base font-bold tracking-tight text-black">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">{w.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ (sticky card + accordion) ---------------- */
const FAQS_V3 = [
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

export function FaqV3() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl">
                Good questions?
                <br />
                <em className="font-normal italic">Let&apos;s work through them.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 max-w-md text-base leading-relaxed text-black/60">
                Tell us what you are thinking. We will help you find a sensible next step.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6">
                <p className="font-mono text-[10px] tracking-[0.2em] text-black/50 uppercase">
                  Let&apos;s talk about your idea
                </p>
                <p className="mt-3 text-sm leading-relaxed text-black/60">
                  Share your goals, your current website, or the challenge you are facing.
                </p>
                <a
                  href="#start"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Start a conversation
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-black">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
                <p className="mt-4 font-mono text-[11px] text-black/50">
                  Email: foundercraftlogic@gmail.com
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3">
            {FAQS_V3.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <Reveal key={idx} delay={idx * 40}>
                  <div className="overflow-hidden rounded-2xl border border-black/10 bg-white transition-colors hover:border-black/30">
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <span className="font-display text-base font-semibold text-black sm:text-lg">
                        {faq.q}
                      </span>
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-black text-white transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <span className="text-lg leading-none">+</span>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="border-t border-black/10 px-5 pb-5 pt-4 text-sm leading-relaxed text-black/60 sm:px-6 sm:text-base">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA (black) ---------------- */
export function FinalCTA() {
  return (
    <section className="bg-background px-4 pb-6 md:px-6">
      <div className="rounded-[2rem] bg-[#0A0A0A] px-6 py-16 text-white sm:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1300px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.22em] text-white/50 uppercase">
                The next chapter starts here
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif mt-5 text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Have an idea?
                <br />
                <em className="font-normal italic">Let&apos;s build it.</em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
                From the first conversation to the final release — design, development, and
                support, handled in one studio.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <a
                href="#start"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Start a Project
                <span className="grid h-5 w-5 place-items-center rounded-full bg-black text-white">
                  <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <a
              href="#start"
              aria-label="Start a project"
              className="grid h-28 w-28 shrink-0 place-items-center rounded-full bg-white text-black transition-transform duration-300 hover:rotate-45 sm:h-36 sm:w-36"
            >
              <ArrowUp className="h-10 w-10 sm:h-12 sm:w-12" />
            </a>
          </Reveal>
        </div>
        <div className="mx-auto mt-14 flex max-w-[1300px] flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 font-mono text-[11px] tracking-[0.14em] text-white/50 uppercase">
          <span>Design • Development • Support</span>
          <span>foundercraftlogic@gmail.com • WhatsApp +92 334 4957382</span>
        </div>
      </div>
    </section>
  );
}
