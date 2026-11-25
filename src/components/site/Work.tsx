import React, { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe } from "lucide-react";
import { PROJECTS, type ProjectCaseStudy } from "@/data/projects";

function SafeBrowserPreview({
  src,
  fallbackSrc,
  alt,
  liveUrl,
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
  liveUrl: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [allFailed, setAllFailed] = useState(false);
  const cleanDomain = liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  const handleImageError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setAllFailed(true);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200/90 bg-neutral-100 transition-colors duration-300 group-hover:border-[#0AAA8C]/40">
      {/* Sleek Browser Chrome Bar */}
      <div className="flex items-center justify-between border-b border-neutral-200/80 bg-white px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-neutral-300 transition-colors group-hover:bg-rose-400" />
          <span className="h-2 w-2 rounded-full bg-neutral-300 transition-colors group-hover:bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-[#0AAA8C]" />
        </div>
        <span className="truncate max-w-[180px] sm:max-w-[230px] rounded bg-neutral-100 px-2 py-0.5 font-mono text-[9.5px] text-neutral-500">
          {cleanDomain}
        </span>
        <Globe className="h-3 w-3 text-neutral-400 group-hover:text-[#0AAA8C] transition-colors" />
      </div>

      {/* Real Screenshot Viewport with Smooth Hover Zoom */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
        {!allFailed ? (
          <img
            src={currentSrc}
            alt={alt}
            onError={handleImageError}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04] group-active:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200/70 p-4 text-center">
            <span className="font-display text-lg font-extrabold text-[#0A0A0A]">
              {alt}
            </span>
            <span className="mt-1 font-mono text-[11px] font-medium text-[#0AAA8C]">
              {cleanDomain}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function Work() {
  const shouldReduceMotion = useReducedMotion();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleMobileScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 320;
    const index = Math.round(el.scrollLeft / (cardWidth + 20));
    setActiveSlide(Math.min(Math.max(index, 0), PROJECTS.length - 1));
  };

  const scrollToSlide = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 320;
    el.scrollTo({
      left: index * (cardWidth + 20),
      behavior: "smooth",
    });
    setActiveSlide(index);
  };

  return (
    <section
      id="work"
      aria-label="Selected Production Work"
      className="border-t border-neutral-200/80 bg-[#FAFAFA] py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-3 sm:gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AAA8C]">
              SELECTED WORK • 06 LIVE PROJECTS
            </span>
            <h2 className="font-display mt-2 sm:mt-3 text-2xl font-extrabold tracking-[-0.03em] text-[#0A0A0A] sm:text-4xl lg:text-[44px] lg:leading-[1.12]">
              Recent websites &amp; platforms launched for our clients.
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-neutral-600">
            Tap or hover any project to preview, or open its full case study to see how we
            built it.
          </p>
        </div>

        {/* Horizontal Swipe on Mobile, 3-Column Grid on Laptop */}
        <div
          ref={scrollContainerRef}
          onScroll={handleMobileScroll}
          className="mt-7 sm:mt-12 -mx-4 px-4 sm:mx-0 sm:px-0 flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((project: ProjectCaseStudy, idx: number) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : (idx % 2) * 0.08,
                ease: "easeOut",
              }}
              className="group w-[86vw] max-w-[360px] md:w-auto md:max-w-none shrink-0 snap-start flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-neutral-200/90 bg-white p-4 sm:p-5 lg:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#0AAA8C] hover:shadow-[0_24px_48px_-14px_rgba(10,170,140,0.22)] active:scale-[0.985] active:border-[#0AAA8C] active:shadow-[0_16px_36px_-10px_rgba(10,170,140,0.25)]"
            >
              <div>
                <a
                  href={`/work/${project.slug}`}
                  className="block focus-visible:outline-none"
                >
                  <SafeBrowserPreview
                    src={project.imageSrc}
                    {...(project.fallbackSrc ? { fallbackSrc: project.fallbackSrc } : {})}
                    alt={project.name}
                    liveUrl={project.liveUrl}
                  />
                </a>

                <div className="mt-4 sm:mt-5 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[10px] sm:text-[11px] font-medium text-neutral-600 transition-colors group-hover:border-[#0AAA8C]/40 group-hover:bg-[#0AAA8C]/5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0AAA8C]" />
                    {project.category}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-neutral-400 group-hover:text-[#0AAA8C] transition-colors">
                    #{project.id}
                  </span>
                </div>

                <a href={`/work/${project.slug}`} className="mt-2.5 block">
                  <h3 className="font-display text-lg sm:text-2xl font-extrabold tracking-[-0.025em] text-[#0A0A0A] group-hover:text-[#0AAA8C] transition-colors">
                    {project.name}
                  </h3>
                </a>

                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-600 line-clamp-2 sm:line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-neutral-100 px-2 py-0.5 font-mono text-[9.5px] sm:text-[10px] font-medium text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 border-t border-neutral-100 pt-4 flex items-center justify-between gap-2.5">
                <a
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#0A0A0A] hover:text-[#0AAA8C] transition-colors"
                >
                  <span>Project Details</span>
                  <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#0A0A0A] px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold text-white transition-colors hover:bg-[#0AAA8C]"
                >
                  <span>Visit Live</span>
                  <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Interactive Mobile Swipe Indicator Dots */}
        <div className="mt-3 flex items-center justify-center gap-2 md:hidden">
          {PROJECTS.map((project, idx) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => scrollToSlide(idx)}
              aria-label={`View project ${idx + 1}: ${project.name}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === idx
                  ? "w-6 bg-[#0AAA8C]"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;