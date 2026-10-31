import React from "react";

/**
 * Static featured hero visual.
 *
 * Replaces the old 30-slide auto-cycling showcase. The carousel rotated
 * generic mockup images paired with invented project names and stats, which
 * is not how a professional studio presents its work. The hero now shows one
 * real client project — Aurevane Timepieces, a CRAFTLOGIC case study — and
 * the rest of the work lives in the Selected Work section below.
 */
export const LaptopShowcase: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center select-none pt-2 pb-6">
      {/* Featured project frame */}
      <div className="relative z-10 w-full flex items-center justify-center px-2">
        <div className="relative w-full max-w-4xl">
          <div className="relative w-full min-h-[360px] sm:min-h-[460px] md:min-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)] bg-[#0a0a0a] flex items-center justify-center">
            <img
              src="/project-previews/aurevane.webp"
              alt="Aurevane Timepieces — luxury horology showcase built by CRAFTLOGIC"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith("aurevane.png")) {
                  target.src = "/project-previews/aurevane.png";
                }
              }}
            />

            {/* Screen glass reflection */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.03] via-transparent to-transparent z-10"
            />

            {/* Project info tag */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 max-w-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="text-[10px] font-mono uppercase tracking-widest font-semibold text-white">
                  Real client work
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Aurevane Timepieces
              </h4>
              <p className="text-[10px] sm:text-xs font-mono text-white/60 mt-0.5">
                Luxury horology showcase • 60 FPS fluid experience
              </p>
            </div>
          </div>

          {/* Floor shadow */}
          <div className="mx-auto w-[85%] h-5 bg-white/[0.06] blur-xl rounded-full mt-2" />
        </div>
      </div>

      <p className="mt-6 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
        Featured project — see more in Selected Work below
      </p>
    </div>
  );
};

export default LaptopShowcase;
