import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Globe,
  Sparkles,
} from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Sections";
import { ProjectInquiryModal } from "@/components/site/ProjectInquiryModal";
import { SEO } from "@/components/site/SEO";

export const Route = createFileRoute("/work/$slug")({
  component: ProjectCaseStudyPage,
});

function ProjectCaseStudyPage() {
  const { slug } = Route.useParams();
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex < 0) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
        <SEO
          title="Project Not Found — CRAFTLOGIC"
          description="This project page does not exist."
          canonicalUrl="https://craftlogic.live/work"
        />
        <Nav onOpenInquiry={() => setInquiryOpen(true)} />
        <main className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-10 pt-24 pb-24 text-center">
          <h1 className="font-display text-3xl font-extrabold tracking-[-0.035em] text-[#0A0A0A] sm:text-5xl">
            Project not found
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            This project page does not exist or has been removed.
          </p>
          <a
            href="/work"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-6 py-3 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-[#0AAA8C]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Projects</span>
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  const project = PROJECTS[projectIndex]!;
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length]!;

  const [currentSrc, setCurrentSrc] = useState(project.imageSrc);
  const [imgFailed, setImgFailed] = useState(false);

  const cleanDomain = project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  const handleImgError = () => {
    if (project.fallbackSrc && currentSrc !== project.fallbackSrc) {
      setCurrentSrc(project.fallbackSrc);
    } else {
      setImgFailed(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
      <SEO
        title={`${project.name} — Case Study | CRAFTLOGIC`}
        description={project.description}
        canonicalUrl={`https://craftlogic.live/work/${project.slug}`}
      />

      <Nav onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="pt-8 pb-16 sm:pt-14 sm:pb-24">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-10">
          {/* Back Breadcrumb */}
          <a
            href="/#work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-[#0AAA8C] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Projects</span>
          </a>

          {/* Case Study Header */}
          <div className="mt-6 sm:mt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0AAA8C]/30 bg-[#0AAA8C]/10 px-3 py-1 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#0AAA8C]">
              <span>CASE STUDY #{project.id}</span>
              <span>•</span>
              <span>{project.category}</span>
            </div>

            <h1 className="font-display mt-3 sm:mt-4 text-3xl font-extrabold tracking-[-0.035em] text-[#0A0A0A] sm:text-5xl lg:text-[54px] lg:leading-[1.08]">
              {project.name}
            </h1>

            <p className="mt-2 sm:mt-3 text-base sm:text-xl font-semibold text-neutral-800">
              {project.headline}
            </p>

            <p className="mt-2.5 max-w-3xl text-xs sm:text-base leading-relaxed text-neutral-600">
              {project.description}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#0AAA8C]"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-[#0A0A0A] transition-colors hover:border-[#0AAA8C] hover:text-[#0AAA8C] cursor-pointer"
              >
                <span>Build a Similar Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* High-Res Browser Showcase */}
          <div className="mt-8 sm:mt-12 overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200/90 bg-white shadow-lg">
            <div className="flex items-center justify-between border-b border-neutral-200/80 bg-neutral-50 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#0AAA8C]" />
              </div>
              <span className="rounded-md border border-neutral-200 bg-white px-3 py-1 font-mono text-[11px] text-neutral-600">
                {cleanDomain}
              </span>
              <Globe className="h-4 w-4 text-neutral-400" />
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
              {!imgFailed ? (
                <img
                  src={currentSrc}
                  alt={`${project.name} Live Preview`}
                  onError={handleImgError}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                  <span className="font-display text-2xl font-extrabold text-[#0A0A0A]">
                    {project.name}
                  </span>
                  <span className="mt-1 font-mono text-xs text-[#0AAA8C]">
                    {cleanDomain}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 4 Quick Project Facts Strip */}
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-neutral-200 bg-white p-5 sm:grid-cols-4 sm:p-7">
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                INDUSTRY
              </span>
              <p className="mt-1 text-xs sm:text-sm font-bold text-[#0A0A0A]">
                {project.clientIndustry}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                DELIVERY TIMELINE
              </span>
              <p className="mt-1 text-xs sm:text-sm font-bold text-[#0A0A0A]">
                {project.timeline}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                KEY OUTCOME
              </span>
              <p className="mt-1 text-xs sm:text-sm font-bold text-[#0AAA8C]">
                {project.impactMetric}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                TECH STACK
              </span>
              <p className="mt-1 text-xs sm:text-sm font-bold text-[#0A0A0A]">
                {project.stack.slice(0, 3).join(", ")}
              </p>
            </div>
          </div>

          {/* Section 01: The Challenge (Before CraftLogic) */}
          <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
              01 • THE CHALLENGE (BEFORE CRAFTLOGIC)
            </span>
            <h2 className="font-display mt-2 text-xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A]">
              What problem did the business face?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-700">
              {project.theProblem}
            </p>
          </div>

          {/* Section 02: How We Engineered & Built It */}
          <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
              02 • ENGINEERING &amp; EXECUTION
            </span>
            <h2 className="font-display mt-2 text-xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A]">
              How CraftLogic designed &amp; built the solution.
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {project.howWeBuiltIt.map((step, idx) => (
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

          {/* Section 03: Deliverables & Tech Stack */}
          <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#0A0A0A]">
                Key Deliverables
              </h3>
              <ul className="mt-4 space-y-2.5">
                {project.deliverables.map((item) => (
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

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#0A0A0A]">
                Technologies Used
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 font-mono text-xs font-semibold text-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Conversion CTA + Next Case Study */}
          <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl bg-[#0A0A0A] p-7 sm:p-12 text-white">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-[#0AAA8C]">
                  <Sparkles className="h-3.5 w-3.5" />
                  READY TO BUILD YOURS?
                </span>
                <h2 className="font-display mt-2 text-2xl font-extrabold sm:text-4xl">
                  Want a high-speed platform like {project.name}?
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400">
                  Book a free consultation with CraftLogic and launch your custom product.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setInquiryOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0AAA8C] px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#0A0A0A] cursor-pointer"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <a
                  href={`/work/${nextProject.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <span>Next: {nextProject.name} →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ProjectInquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </div>
  );
}