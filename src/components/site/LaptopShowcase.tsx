import React from "react";

/**
 * Static featured hero visual (light theme).
 *
 * One real client project — Aurevane Timepieces, a CRAFTLOGIC case study —
 * instead of an auto-cycling carousel of generic mockups. The rest of the
 * work lives in the Selected Work section below.
 */
export const LaptopShowcase: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center select-none pt-2 pb-6">
      {/* Featured project frame */}
      <div className="relative z-10 w-full flex items-center justify-center px-2">
        <div className="relative w-full max-w-4xl">
          <div className="relative w-full min-h-[360px] sm:min-h-[460px] md:min-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] bg-white flex items-center justify-center">
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

            {/* Project info tag */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 max-w-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 shadow-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="text-[10px] font-mono uppercase tracking-widest font-semibold text-black">
                  Real client work
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-black tracking-tight">
                Aurevane Timepieces
              </h4>
              <p className="text-[10px] sm:text-xs font-mono text-black/60 mt-0.5">
                Luxury horology showcase • 60 FPS fluid experience
              </p>
            </div>
          </div>

          {/* Floor shadow */}
          <div className="mx-auto w-[85%] h-5 bg-black/[0.08] blur-xl rounded-full mt-2" />
        </div>
      </div>

      <p className="mt-6 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
        Featured project — see more in Selected Work below
      </p>
    </div>
  );
};

export default LaptopShowcase;
