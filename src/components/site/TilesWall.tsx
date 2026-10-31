import { useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";

// Services wall — the reference site's signature section: a slow 3D
// rotating wall of white service tiles (two rows), edges fading away in
// perspective, with a pause control. All names and labels are CRAFTLOGIC's
// own services; only the presentation pattern mirrors the reference.
const ROW_1 = [
  { name: "Business Websites", label: "Websites" },
  { name: "Landing Pages", label: "Pages" },
  { name: "Online Stores", label: "Stores" },
  { name: "Website Redesign", label: "Redesign" },
  { name: "Mobile-First Web Apps", label: "Apps" },
  { name: "WhatsApp & Form Setup", label: "Setup" },
  { name: "SEO — Get Found on Google", label: "Visibility" },
];

const ROW_2 = [
  { name: "Website Care Plans", label: "Care" },
  { name: "Speed Optimization", label: "Speed" },
  { name: "Booking & E-commerce Setup", label: "Booking" },
  { name: "Domain & Business Email Setup", label: "Domains" },
  { name: "Analytics Setup", label: "Growth" },
  { name: "Paid Website Audit", label: "Audit" },
];

function Ring({
  tiles,
  paused,
}: {
  tiles: { name: string; label: string }[];
  paused: boolean;
}) {
  const step = 360 / tiles.length;
  return (
    <div
      className="relative h-[170px] overflow-visible sm:h-[190px]"
      style={{
        perspective: "1200px",
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div
        className="animate-spin-slow absolute inset-0 [transform-style:preserve-3d]"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {tiles.map((tile, i) => (
          <div
            key={tile.name}
            className="group absolute left-1/2 top-1/2 flex h-[130px] w-[240px] -ml-[120px] -mt-[65px] flex-col items-center justify-center gap-1 rounded-2xl border border-black/5 bg-white p-4 text-center shadow-md shadow-black/5 [backface-visibility:hidden] [transform:rotateY(var(--a))_translateZ(var(--r))] sm:h-[150px] sm:w-[280px] sm:-ml-[140px] sm:-mt-[75px]"
            style={
              {
                "--a": `${i * step}deg`,
                "--r": "clamp(260px, 55vw, 480px)",
              } as React.CSSProperties
            }
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 opacity-0 transition group-hover:opacity-100">
              {tile.label}
            </span>
            <span
              className={
                i % 2 === 0
                  ? "font-sans text-lg font-bold leading-snug text-zinc-900"
                  : "font-serif text-xl italic leading-snug text-zinc-900"
              }
            >
              {tile.name}
            </span>
            <ArrowUpRight
              className="absolute right-3 top-3 size-4 text-zinc-400 opacity-0 transition group-hover:opacity-100"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TilesWall() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <h2 className="text-2xl font-medium text-zinc-900 md:text-3xl">
          Explore what we can build together
        </h2>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-zinc-900"
        >
          {paused ? (
            <>
              <Play className="size-3.5" aria-hidden="true" /> Resume tiles
            </>
          ) : (
            <>
              <Pause className="size-3.5" aria-hidden="true" /> Pause tiles
            </>
          )}
        </button>
      </div>

      <div className="mt-8 space-y-4">
        <Ring tiles={ROW_1} paused={paused} />
        <Ring tiles={ROW_2} paused={paused} />
      </div>

      <p className="mx-auto mt-10 max-w-xl px-5 text-center text-base leading-relaxed text-zinc-600">
        Planning, design, and development — working together around your
        business goal.
      </p>
    </section>
  );
}
