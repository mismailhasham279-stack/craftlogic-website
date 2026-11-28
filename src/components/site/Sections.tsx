import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Sparkles,
  MessageSquare,
  Mail,
  X,
  CheckCircle2,
  ArrowUp,
} from "lucide-react";
import { Logo } from "./Logo";
import { SERVICES } from "@/data/services";

interface SectionActionProps {
  onOpenInquiry?: () => void;
}

const OFFICIAL_EMAIL = "info@craftlogic.live";
const OFFICIAL_WHATSAPP = "923344957382";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/craft-logic-712857409?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@craft_logics?si=ugoevhrErI-Z7zwq",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@craftlogics?_r=1&_t=ZP-9AibnwtdjRf",
  },
  {
    name: "X",
    href: "https://x.com/web_developer92",
  },
];

const triggerOpenProject = (onOpenInquiry?: () => void) => {
  if (onOpenInquiry) {
    onOpenInquiry();
  } else {
    window.dispatchEvent(new CustomEvent("craftlogic:open-inquiry"));
  }
};

/* ============================================================================
1. TRUST / WHY CRAFTLOGIC — CLEAN EDITORIAL NUMBERED LIST
   ============================================================================ */
const WHY_PILLARS = [
  {
    num: "01",
    title: "Direct Team Communication",
    desc: "Speak directly with the developers building your product—clear updates, zero confusion.",
  },
  {
    num: "02",
    title: "Built From Scratch, Not Templates",
    desc: "Every page and feature is tailored to your brand, customers, and sales goals.",
  },
  {
    num: "03",
    title: "Sub-2-Second Speed & Google SEO",
    desc: "Fast-loading pages engineered to rank higher on Google and convert mobile visitors.",
  },
  {
    num: "04",
    title: "100% Ownership & Ongoing Support",
    desc: "You own your domain, code, and design completely—with dedicated support after launch.",
  },
];

export function Trust() {
  return (
    <section
      id="about"
      aria-label="Why Businesses Trust CraftLogic"
      className="bg-white py-12 sm:py-16 lg:pt-12 lg:pb-24"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
              WHY CRAFTLOGIC
            </span>
            <h2 className="font-display mt-2 sm:mt-3 text-2xl font-extrabold tracking-[-0.03em] text-[#0A0A0A] sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
              Why businesses trust CraftLogic with their digital growth.
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed text-neutral-600">
              We combine clean UI design, fast engineering, and search optimization so your
              business looks established and converts visitors into paying clients.
            </p>

            <div className="mt-5 sm:mt-7">
              <a
                href="/#services"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#0AAA8C]"
              >
                <span>Explore our services</span>
                <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </div>
          </div>

          <div className="divide-y divide-neutral-200/90 border-y border-neutral-200/90 lg:col-span-7">
            {WHY_PILLARS.map((item) => (
              <div
                key={item.num}
                className="group flex items-start gap-4 sm:gap-6 py-4 sm:py-6 transition-colors hover:bg-neutral-50/70 px-2 rounded-lg"
              >
                <span className="font-mono text-xs sm:text-sm font-bold text-[#0AAA8C] pt-0.5">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-display text-base sm:text-xl font-bold text-[#0A0A0A] group-hover:text-[#0AAA8C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
2. ABOUT / CURVED DEEP BLACK COMPANY BAND
   ============================================================================ */
export function About() {
  return (
    <section
      aria-label="Our Company Philosophy"
      className="mx-2.5 sm:mx-4 lg:mx-6 my-4 sm:my-6 rounded-[1.5rem] sm:rounded-[3rem] bg-[#0A0A0A] py-11 sm:py-20 lg:py-24 text-white shadow-xl"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0AAA8C]">
            OUR STUDIO • CRAFTLOGIC
          </span>
          <h2 className="font-display mt-2 sm:mt-3 text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl lg:leading-[1.12]">
            Built for speed. Designed to win customers.
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed text-neutral-400">
            We combine modern UI design, clean engineering, and smart automation so your
            business looks established from day one.
          </p>
        </div>

        <div className="mt-8 sm:mt-14 grid grid-cols-3 divide-x divide-white/15 border-y border-white/15 py-5 sm:py-8">
          <div className="px-2 sm:px-6 text-center">
            <div className="font-display text-xl sm:text-4xl font-extrabold text-[#0AAA8C]">
              &lt; 1.5s
            </div>
            <div className="mt-1 text-[11px] sm:text-sm font-semibold text-white">
              Page Load Speed
            </div>
          </div>

          <div className="px-2 sm:px-6 text-center">
            <div className="font-display text-xl sm:text-4xl font-extrabold text-[#0AAA8C]">
              100%
            </div>
            <div className="mt-1 text-[11px] sm:text-sm font-semibold text-white">
              Code &amp; Domain Rights
            </div>
          </div>

          <div className="px-2 sm:px-6 text-center">
            <div className="font-display text-xl sm:text-4xl font-extrabold text-[#0AAA8C]">
              24/7
            </div>
            <div className="mt-1 text-[11px] sm:text-sm font-semibold text-white">
              Automated Lead Capture
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
3. SERVICES — INTERACTIVE EXPANDABLE SERVICE ROWS
   ============================================================================ */
const CORE_SERVICES = SERVICES;

export function Services({ onOpenInquiry }: SectionActionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      id="services"
      aria-label="Our Core Services"
      className="bg-[#FAFAFA] py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-3 sm:gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
              OUR SERVICES
            </span>
            <h2 className="font-display mt-2 sm:mt-3 text-2xl font-extrabold tracking-[-0.03em] text-[#0A0A0A] sm:text-4xl lg:text-[44px]">
              Everything you need to grow online.
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-neutral-600">
            Select any service below to explore what we deliver for your business.
          </p>
        </div>

        <div className="mt-7 sm:mt-12 divide-y divide-neutral-200 border-y border-neutral-200 bg-white rounded-2xl sm:rounded-3xl shadow-2xs overflow-hidden">
          {CORE_SERVICES.map((service, idx) => {
            const isExpanded = activeIndex === idx;
            const IconComponent = service.icon;

            return (
              <div
                key={service.num}
                className={`transition-colors duration-300 ${
                  isExpanded
                    ? "bg-[#0A0A0A] text-white"
                    : "bg-white text-[#0A0A0A] hover:bg-neutral-50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-expanded={isExpanded}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 sm:px-8 sm:py-6 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold ${
                        isExpanded ? "text-[#0AAA8C]" : "text-neutral-400"
                      }`}
                    >
                      {service.num}
                    </span>
                    <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                      <IconComponent
                        className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 ${
                          isExpanded ? "text-[#0AAA8C]" : "text-neutral-500"
                        }`}
                      />
                      <h3 className="font-display truncate text-base sm:text-2xl font-extrabold tracking-[-0.02em]">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className={`hidden sm:inline-block rounded-full px-3 py-1 font-mono text-[11px] font-medium ${
                        isExpanded
                          ? "bg-white/10 text-neutral-200"
                          : "bg-neutral-100 text-neutral-600"
                      }`}
                    >
                      {service.tag}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-[#0AAA8C]" : "text-neutral-400"
                      }`}
                    />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-5 pt-1 sm:px-8 sm:pb-8 sm:pt-2">
                    <div className="grid gap-5 lg:grid-cols-12 lg:items-center border-t border-white/10 pt-4 sm:pt-6">
                      <div className="lg:col-span-7">
                        <p className="text-xs sm:text-base leading-relaxed text-neutral-300">
                          {service.description}
                        </p>
                        <div className="mt-3.5 flex flex-wrap gap-2">
                          {service.highlights.map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] sm:text-xs font-medium text-neutral-200"
                            >
                              <Check className="h-3 w-3 text-[#0AAA8C]" />
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex lg:col-span-5 lg:justify-end">
                        <a
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-[#0AAA8C] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#0A0A0A]"
                        >
                          <span>Explore {service.title}</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
4. BUSINESS PROBLEM (KEPT COMPATIBLE)
   ============================================================================ */
export function BusinessProblem() {
  return null;
}

/* ============================================================================
5. FREE HOMEPAGE PREVIEW / DEMO SECTION WITH POPUP MODAL (WHATSAPP + EMAIL)
   ============================================================================ */
function FreePreviewModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [business, setBusiness] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const getFormattedMessage = () =>
    `Hi CraftLogic! I want a Free Homepage Preview.\n\nName: ${name}\nContact: ${contact}\nBusiness/Industry: ${business}\nNotes: ${notes || "N/A"}`;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(getFormattedMessage());
    window.open(
      `https://wa.me/${OFFICIAL_WHATSAPP}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  };

  const handleSubmitEmail = () => {
    if (!name || !contact || !business) return;
    const subject = encodeURIComponent(`Free Homepage Preview Request — ${business}`);
    const body = encodeURIComponent(getFormattedMessage());
    window.location.href = `mailto:${OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Free Homepage Preview Request"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-5 sm:p-8 shadow-2xl">
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            onClose();
          }}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100 hover:text-[#0A0A0A] cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {!submitted ? (
          <>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0AAA8C]/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0AAA8C]">
              <Sparkles className="h-3 w-3" />
              100% FREE • NO OBLIGATION
            </span>
            <h3 className="font-display mt-2.5 text-xl sm:text-2xl font-extrabold tracking-tight text-[#0A0A0A]">
              Get Your Free Homepage Preview
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-600">
              Share your business name and industry—we will design a custom homepage preview
              within 24–48 hours with zero obligation.
            </p>

            <form onSubmit={handleSubmitWhatsApp} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-700">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ahmed Khan"
                  className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-sm text-[#0A0A0A] focus:border-[#0AAA8C] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700">
                  WhatsApp Number or Email *
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="e.g. +92 300 1234567 or you@company.com"
                  className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-sm text-[#0A0A0A] focus:border-[#0AAA8C] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700">
                  Business Name &amp; Industry *
                </label>
                <input
                  type="text"
                  required
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  placeholder="e.g. Dental Clinic, Real Estate, Online Store"
                  className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-sm text-[#0A0A0A] focus:border-[#0AAA8C] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700">
                  Style Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share any colors or reference links..."
                  className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-sm text-[#0A0A0A] focus:border-[#0AAA8C] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#0AAA8C] cursor-pointer"
                >
                  <span>Send via WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={handleSubmitEmail}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-neutral-300 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#0A0A0A] transition-colors hover:border-[#0AAA8C] hover:text-[#0AAA8C] cursor-pointer"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Send via Email</span>
                </button>
              </div>

              <p className="text-center font-mono text-[10px] text-neutral-400">
                Direct Email: {OFFICIAL_EMAIL}
              </p>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-11 w-11 text-[#0AAA8C]" />
            <h3 className="font-display mt-3 text-lg sm:text-xl font-extrabold text-[#0A0A0A]">
              Preview Request Ready!
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-600">
              Your details have been prepared for our team ({OFFICIAL_EMAIL}). We will deliver
              your custom homepage preview within 24–48 hours.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-5 rounded-full bg-[#0A0A0A] px-6 py-2 text-xs font-semibold text-white hover:bg-[#0AAA8C] cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function FreeDemo() {
  const [previewModalOpen, setPreviewModalOpen] = useState(false);

  useEffect(() => {
    const openPreview = () => setPreviewModalOpen(true);
    window.addEventListener("craftlogic:open-preview", openPreview);
    return () => window.removeEventListener("craftlogic:open-preview", openPreview);
  }, []);

  return (
    <>
      <section
        id="free-preview"
        aria-label="Free Homepage Preview Offer"
        className="border-t border-neutral-200/80 bg-white py-12 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-neutral-200 bg-[#FAFAFA] p-6 sm:p-12 lg:p-16 shadow-xs">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0AAA8C]/30 bg-[#0AAA8C]/10 px-3 py-1 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0AAA8C]">
                  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  100% FREE • ZERO OBLIGATION DEMO
                </span>

                <h2 className="font-display mt-3 sm:mt-4 text-2xl font-extrabold tracking-[-0.03em] text-[#0A0A0A] sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
                  See your new homepage design before you pay a single rupee.
                </h2>

                <p className="mt-2.5 sm:mt-4 max-w-2xl text-xs sm:text-base leading-relaxed text-neutral-600">
                  Share your business name and industry—we will design a custom homepage preview
                  within 24–48 hours with zero obligation.
                </p>
              </div>

              <div className="flex flex-col items-start gap-2.5 lg:col-span-4 lg:items-end">
                <button
                  type="button"
                  onClick={() => setPreviewModalOpen(true)}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#0AAA8C] px-6 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#0AAA8C]/20 transition-all duration-200 hover:bg-[#088F76] active:scale-[0.98] cursor-pointer"
                >
                  <span>Get Free Homepage Preview</span>
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </button>
                <span className="font-mono text-[10px] sm:text-[11px] text-neutral-500">
                  Delivered in 24–48 hrs • {OFFICIAL_EMAIL}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FreePreviewModal
        isOpen={previewModalOpen}
        onClose={() => setPreviewModalOpen(false)}
      />
    </>
  );
}

/* ============================================================================
6. PROCESS — CONNECTED 3-STEP TIMELINE
   ============================================================================ */
const PROCESS_STEPS = [
  {
    step: "01",
    phase: "PLAN & STRATEGY",
    title: "Understand & Map Your Roadmap",
    desc: "We understand your business, audience, and goals, then lock a clear feature plan and timeline.",
  },
  {
    step: "02",
    phase: "DESIGN & BUILD",
    title: "Approve Design & Fast Coding",
    desc: "You approve the visual design first, then we code a fast, mobile-ready website or software product.",
  },
  {
    step: "03",
    phase: "LAUNCH & GROW",
    title: "Go Live with Google SEO & Support",
    desc: "We connect your domain, optimize Google SEO, and stay with you for post-launch updates.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-label="How We Work"
      className="border-t border-neutral-200/80 bg-white py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
            OUR PROCESS • 3 SIMPLE STEPS
          </span>
          <h2 className="font-display mt-2 sm:mt-3 text-2xl font-extrabold tracking-[-0.03em] text-[#0A0A0A] sm:text-4xl lg:text-[44px]">
            From your idea to a live product in 3 clear steps.
          </h2>
        </div>

        <div className="mt-8 sm:mt-14 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="relative border-l-2 border-neutral-200 pl-5 sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-6 transition-colors hover:border-[#0AAA8C]"
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0A0A0A] font-mono text-xs font-bold text-white">
                  {item.step}
                </span>
                <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
                  {item.phase}
                </span>
              </div>

              <h3 className="font-display mt-3 text-lg sm:text-2xl font-extrabold tracking-tight text-[#0A0A0A]">
                {item.title}
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
7. WHYME (KEPT COMPATIBLE)
   ============================================================================ */
export function WhyMe() {
  return null;
}

/* ============================================================================
8. FAQ SECTION (COMPACT INTERACTIVE ACCORDION)
   ============================================================================ */
const FAQ_ITEMS = [
  {
    q: "What can CraftLogic help our business build?",
    a: "CraftLogic builds modern business websites, mobile apps (iOS & Android), e-commerce stores, SaaS platforms, Google SEO optimizations, and 24/7 AI chatbots tailored to your exact business goals.",
  },
  {
    q: "How can I see a Free Homepage Preview before starting?",
    a: "Click the 'Get Free Homepage Preview' button on this page, share your business name and industry, and our design team will prepare a customized homepage concept within 24–48 hours—with zero obligation.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "A standard business website takes 7 to 14 days from kickoff to launch. Custom mobile apps and multi-user SaaS platforms typically take 3 to 5 weeks depending on feature scope.",
  },
  {
    q: "Who owns the source code, domain, and design after launch?",
    a: "You get 100% full ownership of your domain, source code, UI designs, and business data upon completion. There are zero hidden lock-ins.",
  },
  {
    q: "Do you provide support and updates after launch?",
    a: "Yes. Every project includes free post-launch technical support to ensure everything runs smoothly, plus optional ongoing maintenance as your business scales.",
  },
];

export function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="border-t border-neutral-200/80 bg-[#FAFAFA] py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
            GOT QUESTIONS?
          </span>
          <h2 className="font-display mt-2 sm:mt-3 text-2xl font-extrabold tracking-[-0.03em] text-[#0A0A0A] sm:text-4xl">
            Frequently Asked Questions.
          </h2>
        </div>

        <div className="mt-7 sm:mt-10 space-y-2.5 sm:space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl sm:rounded-2xl border border-neutral-200/90 bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-5 text-left cursor-pointer"
                >
                  <span className="font-display text-sm sm:text-lg font-bold leading-snug text-[#0A0A0A]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-neutral-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0AAA8C]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-neutral-100 px-4 pb-4 pt-2.5 sm:px-6 sm:pb-5 sm:pt-3 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
9. START PROJECT & CONTACT (WITH OFFICIAL info@craftlogic.live)
   ============================================================================ */
export function StartProject({ onOpenInquiry }: SectionActionProps) {
  return (
    <section
      id="contact"
      aria-label="Start a Project"
      className="mx-2.5 sm:mx-4 lg:mx-6 my-3 sm:my-4 rounded-[1.5rem] sm:rounded-[3rem] bg-[#0A0A0A] py-12 sm:py-20 lg:py-24 text-white"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0AAA8C]">
              LET&apos;S WORK TOGETHER
            </span>
            <h2 className="font-display mt-2 sm:mt-3 text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Ready to upgrade your business online?
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-400">
              Book a free consultation or request your free homepage preview today.
            </p>

            <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-neutral-300">
              <a
                href={`mailto:${OFFICIAL_EMAIL}`}
                className="inline-flex items-center gap-2 hover:text-[#0AAA8C] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#0AAA8C]" />
                <span>{OFFICIAL_EMAIL}</span>
              </a>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <a
                href={`https://wa.me/${OFFICIAL_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#0AAA8C] transition-colors"
              >
                <MessageSquare className="h-4 w-4 text-[#0AAA8C]" />
                <span>WhatsApp: +92 334 4957382 ↗</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => triggerOpenProject(onOpenInquiry)}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0AAA8C] px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#0AAA8C]/25 transition-all duration-200 hover:bg-white hover:text-[#0A0A0A] active:scale-[0.98] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
            </button>

            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("craftlogic:open-preview"))
              }
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10 cursor-pointer"
            >
              <span>Get Free Homepage Preview</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return null;
}

/* ============================================================================
10. FOOTER (WITH info@craftlogic.live, /work, /blog & ALL 7 SOCIAL MEDIA LINKS)
   ============================================================================ */
export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] pt-10 pb-8 sm:pt-14 sm:pb-10 text-neutral-600">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-7 border-b border-neutral-200 pb-8 sm:pb-10 lg:flex-row lg:items-start">
          <div>
            <Logo variant="light" showTagline={true} />
            <p className="mt-2.5 max-w-md text-xs sm:text-sm text-neutral-500">
              CraftLogic builds fast websites, mobile apps, online stores, and SaaS
              platforms that help businesses grow online.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-700">
              <a
                href={`mailto:${OFFICIAL_EMAIL}`}
                className="inline-flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#0AAA8C]"
              >
                <Mail className="h-3.5 w-3.5 text-[#0AAA8C]" />
                <span>{OFFICIAL_EMAIL}</span>
              </a>
              <span className="text-neutral-300">|</span>
              <a
                href={`https://wa.me/${OFFICIAL_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0AAA8C]"
              >
                +92 334 4957382
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            {/* Navigation Links */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-neutral-700">
              <a href="/" className="hover:text-[#0AAA8C]">
                Home
              </a>
              <a href="/#services" className="hover:text-[#0AAA8C]">
                Services
              </a>
              <a href="/work" className="hover:text-[#0AAA8C]">
                Work
              </a>
              <a href="/blog" className="hover:text-[#0AAA8C]">
                Blog
              </a>
              <a href="/#process" className="hover:text-[#0AAA8C]">
                Process
              </a>
              <a href="/#free-preview" className="hover:text-[#0AAA8C]">
                Free Preview
              </a>
              <a href="/#faq" className="hover:text-[#0AAA8C]">
                FAQ
              </a>
            </div>

            {/* Official Social Media Channels */}
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-medium text-neutral-700 transition-colors hover:border-[#0AAA8C] hover:bg-[#0AAA8C] hover:text-white"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-3 text-[11px] sm:text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} CRAFTLOGIC. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 font-medium text-neutral-700 hover:text-[#0AAA8C]"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}