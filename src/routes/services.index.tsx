import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Sections";
import { ProjectInquiryModal } from "@/components/site/ProjectInquiryModal";
import { SITE_ORIGIN } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => {
    const title = "Our Services | CRAFTLOGIC";
    const description =
      "Website development, mobile apps, e-commerce stores, SaaS platforms, SEO, and AI automation — everything your business needs to grow online.";
    const url = `${SITE_ORIGIN}/services`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${SITE_ORIGIN}/og-preview.png` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: `${SITE_ORIGIN}/og-preview.png` },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ServicesIndexPage,
});

function ServicesIndexPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
      <Nav onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="pt-8 pb-16 sm:pt-14 sm:pb-24">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-10">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
            Our services
          </span>
          <h1 className="font-display mt-2 sm:mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#0A0A0A] sm:text-5xl">
            Everything you need to grow online.
          </h1>
          <p className="mt-2.5 max-w-3xl text-sm sm:text-base leading-relaxed text-neutral-600">
            Select any service below to explore what we deliver for your
            business.
          </p>

          <div className="mt-8 sm:mt-12 grid gap-5 sm:grid-cols-2">
            {SERVICES.map((service) => {
              const IconComponent = service.icon;
              return (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 transition-colors hover:border-[#0AAA8C]"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 shrink-0 text-[#0AAA8C]" />
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      {service.num} • {service.tag}
                    </span>
                  </div>
                  <h2 className="font-display mt-3 text-xl sm:text-2xl font-extrabold tracking-tight text-[#0A0A0A]">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0AAA8C]">
                    <span>Explore {service.title}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl bg-[#0A0A0A] p-7 sm:p-12 text-white">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="font-display text-2xl font-extrabold sm:text-4xl">
                  Not sure which service you need?
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400">
                  Tell us about your business and we will help you choose the
                  right one.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0AAA8C] px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#0A0A0A] cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ProjectInquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </div>
  );
}
