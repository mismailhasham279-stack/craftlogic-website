import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Globe } from "lucide-react";
import { PROJECTS, type Project } from "@/data/projects";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Sections";
import { ProjectInquiryModal } from "@/components/site/ProjectInquiryModal";
import { SEO } from "@/components/site/SEO";

export const Route = createFileRoute("/work/")({
  component: AllWorkPage,
});

function ProjectCardPreview({
  project,
  cleanDomain,
}: {
  project: Project;
  cleanDomain: string;
}) {
  const [imgSrc, setImgSrc] = useState(project.imageSrc);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (project.fallbackSrc && imgSrc !== project.fallbackSrc) {
      setImgSrc(project.fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  return (
    <a
      href={`/work/${project.slug}`}
      className="block overflow-hidden rounded-xl border border-neutral-200/90 bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0AAA8C]"
    >
      {/* Browser Frame Header */}
      <div className="flex items-center justify-between border-b border-neutral-200/80 bg-white px-3 py-2">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-[#0AAA8C]" />
        </div>
        <span className="max-w-[220px] truncate rounded bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
          {cleanDomain}
        </span>
        <Globe className="h-3 w-3 text-neutral-400" aria-hidden="true" />
      </div>

      {/* Responsive Preview Viewport */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
        {!hasError ? (
          <img
            src={imgSrc}
            alt={`${project.name} website preview`}
            onError={handleImageError}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-neutral-100 p-4 text-center">
            <span className="font-display text-lg font-extrabold text-[#0A0A0A]">
              {project.name}
            </span>
            <span className="mt-1 font-mono text-[11px] text-[#0AAA8C]">
              {cleanDomain}
            </span>
          </div>
        )}
      </div>
    </a>
  );
}

function AllWorkPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
      <SEO
        title="Our Work & Case Studies | CRAFTLOGIC"
        description="Explore production websites, e-commerce stores, booking platforms, and custom web applications engineered by CRAFTLOGIC."
        canonicalUrl="https://craftlogic.live/work"
      />

      <Nav onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          {/* Page Header */}
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
              PORTFOLIO • ALL LIVE PROJECTS ({PROJECTS.length})
            </span>
            <h1 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#0A0A0A] sm:text-5xl lg:text-[54px] lg:leading-[1.08]">
              Websites &amp; software engineered for real business growth.
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Browse all our live client deployments below. Open any case study to inspect
              the challenge, engineering solution, and measurable results.
            </p>
          </div>

          {/* 3-Column Portfolio Grid on Laptop */}
          <div className="mt-10 grid gap-6 sm:gap-6 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => {
              const cleanDomain = project.liveUrl
                .replace(/^https?:\/\//, "")
                .replace(/\/$/, "");

              return (
                <article
                  key={project.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0AAA8C] hover:shadow-[0_24px_48px_-14px_rgba(10,170,140,0.2)] sm:rounded-3xl sm:p-5 lg:p-5"
                >
                  <div>
                    <ProjectCardPreview project={project} cleanDomain={cleanDomain} />

                    <div className="mt-5 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-[11px] font-medium text-neutral-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0AAA8C]" />
                        {project.category}
                      </span>
                      <span className="font-mono text-xs font-semibold text-neutral-400">
                        #{project.id}
                      </span>
                    </div>

                    <a href={`/work/${project.slug}`} className="mt-3 block">
                      <h2 className="font-display text-xl font-extrabold text-[#0A0A0A] transition-colors group-hover:text-[#0AAA8C] sm:text-2xl">
                        {project.name}
                      </h2>
                    </a>

                    <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                      {project.description}
                    </p>

                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-neutral-100 px-2 py-0.5 font-mono text-[10px] font-medium text-neutral-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-neutral-100 pt-4">
                    <a
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A0A0A] transition-colors hover:text-[#0AAA8C] sm:text-sm"
                    >
                      <span>Project Details</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#0A0A0A] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0AAA8C]"
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
      <ProjectInquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </div>
  );
}