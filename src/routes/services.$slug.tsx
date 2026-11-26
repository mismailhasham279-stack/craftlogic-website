import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SERVICES, getService } from "@/data/services";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Sections";
import { ProjectInquiryModal } from "@/components/site/ProjectInquiryModal";
import { SITE_ORIGIN } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  // Server-rendered meta per service, so Google sees each service page
  // with its own title, description, and canonical. Unknown slugs get
  // noindex (they render a 200 "not found" page, so they must not be indexed).
  head: ({ params }) => {
    const service = getService(params.slug);
    const url = `${SITE_ORIGIN}/services/${params.slug}`;

    if (!service) {
      return {
        meta: [
          { title: "Service Not Found — CRAFTLOGIC" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const title = `${service.title} Services | CRAFTLOGIC`;
    const image = `${SITE_ORIGIN}${service.heroImage}`;
    return {
      meta: [
        { title },
        { name: "description", content: service.description },
        { property: "og:title", content: title },
        { property: "og:description", content: service.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: service.description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const service = getService(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
        <Nav onOpenInquiry={() => setInquiryOpen(true)} />
        <main className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-10 pt-24 pb-24 text-center">
          <h1 className="font-display text-3xl font-extrabold tracking-[-0.035em] text-[#0A0A0A] sm:text-5xl">
            Service not found
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            This service page does not exist or has been removed.
          </p>
          <a
            href="/#services"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-6 py-3 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-[#0AAA8C]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Services</span>
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
      <Nav onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="pt-8 pb-16 sm:pt-14 sm:pb-24">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-10">
          {/* Back link */}
          <a
            href="/#services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-[#0AAA8C] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Services</span>
          </a>

          {/* Hero */}
          <div className="mt-6 sm:mt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0AAA8C]/30 bg-[#0AAA8C]/10 px-3 py-1 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#0AAA8C]">
              <span>Service {service.num}</span>
              <span>•</span>
              <span>{service.tag}</span>
            </div>

            <h1 className="font-display mt-3 sm:mt-4 text-3xl font-extrabold tracking-[-0.035em] text-[#0A0A0A] sm:text-5xl lg:text-[54px] lg:leading-[1.08]">
              {service.title}
            </h1>

            <p className="mt-2.5 max-w-3xl text-sm sm:text-lg leading-relaxed text-neutral-600">
              {service.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#0AAA8C] cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <a
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-[#0A0A0A] transition-colors hover:border-[#0AAA8C] hover:text-[#0AAA8C]"
              >
                <span>See Our Work</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-8 sm:mt-12 overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200/90 bg-white shadow-lg">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
              <img
                src={service.heroImage}
                alt={service.heroAlt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* What this gives you — benefits, right after the hero */}
          <div className="mt-10 sm:mt-14">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
              What this gives you
            </span>
            <h2 className="font-display mt-2 text-xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A]">
              What this service does for your business.
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-6"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#0AAA8C]" />
                  <h3 className="font-display mt-3 text-base sm:text-lg font-extrabold text-[#0A0A0A]">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    {benefit.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What's included */}
          <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
              What&apos;s included
            </span>
            <h2 className="font-display mt-2 text-xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A]">
              What&apos;s included in {service.title}.
            </h2>
            <ul className="mt-5 space-y-2.5">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-700"
                >
                  <Check className="h-4 w-4 shrink-0 text-[#0AAA8C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who it's for */}
          <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
              Who it&apos;s for
            </span>
            <h2 className="font-display mt-2 text-xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A]">
              Who this service is for.
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-700">
              {service.whoFor}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.whoForChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-xs font-semibold text-neutral-700"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
              How it works
            </span>
            <h2 className="font-display mt-2 text-xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A]">
              How we work, step by step.
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {service.steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-neutral-200/80 bg-[#FAFAFA] p-5"
                >
                  <span className="font-mono text-xs font-bold text-[#0AAA8C]">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display mt-1.5 text-base sm:text-lg font-extrabold text-[#0A0A0A]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What you receive */}
          <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
              What you receive
            </span>
            <h2 className="font-display mt-2 text-xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A]">
              What you receive when we finish.
            </h2>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0AAA8C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Common questions */}
          <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
              Common questions
            </span>
            <h2 className="font-display mt-2 text-xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A]">
              Common questions.
            </h2>
            <div className="mt-5 space-y-3">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-xl border border-neutral-200/80 bg-[#FAFAFA] px-5 py-4"
                >
                  <summary className="cursor-pointer text-sm sm:text-base font-bold text-[#0A0A0A]">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl bg-[#0A0A0A] p-7 sm:p-12 text-white">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-[#0AAA8C]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Ready to start?
                </span>
                <h2 className="font-display mt-2 text-2xl font-extrabold sm:text-4xl">
                  Want {service.title} for your business?
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400">
                  Tell us about your business and we will plan the next steps
                  with you.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setInquiryOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0AAA8C] px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#0A0A0A] cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <a
                  href="/#services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <span>Back to All Services</span>
                </a>
              </div>
            </div>
          </div>

          {/* Other services — always last */}
          <div className="mt-10 sm:mt-14">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
              Other services
            </span>
            <h2 className="font-display mt-2 text-xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A]">
              Explore our other services.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((other) => {
                const OtherIcon = other.icon;
                return (
                  <a
                    key={other.slug}
                    href={`/services/${other.slug}`}
                    className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-[#0AAA8C]"
                  >
                    <OtherIcon className="h-5 w-5 text-[#0AAA8C]" />
                    <h3 className="font-display mt-3 text-base sm:text-lg font-extrabold text-[#0A0A0A]">
                      {other.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-600">
                      {other.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0AAA8C]">
                      <span>Explore {other.title}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ProjectInquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </div>
  );
}
