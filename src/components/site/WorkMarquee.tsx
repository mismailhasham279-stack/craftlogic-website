import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { projects } from "@/data/projects";

// Project marquee — the reference site's signature work section: two rows
// of white project cards gliding in OPPOSITE directions (top left, bottom
// right), with a pause control and a black "View all projects" pill below.
// All projects, names, categories and images are CRAFTLOGIC's own.
const WORK_IDS = ["luxevia", "nailsbygrace", "shoptop", "haider-stillbok", "aurevane"];

const WORK_IMAGES: Record<string, string> = {
  luxevia: "/project-previews/luxevia.svg",
  nailsbygrace: "/project-previews/nails-by-grace.webp",
  shoptop: "/project-previews/curate.webp",
  "haider-stillbok": "/project-previews/haider-stillbok.webp",
  aurevane: "/project-previews/aurevane.webp",
};

// One brand color + type style per project, mirroring the reference's
// per-project card styling (with our own palette).
const CARD_STYLE: Record<string, { color: string; serif: boolean }> = {
  luxevia: { color: "#6C2BD9", serif: true },
  nailsbygrace: { color: "#0F766E", serif: false },
  shoptop: { color: "#FF4D00", serif: false },
  "haider-stillbok": { color: "#0F172A", serif: false },
  aurevane: { color: "#4A90D9", serif: true },
};

type CardItem = { id: string; slug: string; name: string; category: string; img: string };

function MarqueeRow({
  items,
  direction,
  paused,
}: {
  items: CardItem[];
  direction: "left" | "right";
  paused: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-5 py-2.5 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {doubled.map((item, i) => {
          const style = CARD_STYLE[item.id] ?? { color: "#0A0A0A", serif: false };
          return (
            <Link
              key={`${item.id}-${i}`}
              to="/work/$slug"
              params={{ slug: item.slug }}
              aria-hidden={i >= items.length}
              tabIndex={i >= items.length ? -1 : undefined}
              className="flex w-[320px] shrink-0 items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <img
                src={item.img}
                alt=""
                loading="lazy"
                className="h-16 w-24 shrink-0 rounded-lg object-cover"
              />
              <span className="min-w-0">
                <span
                  className={`block truncate text-lg leading-tight ${
                    style.serif ? "font-serif italic" : "font-sans font-bold"
                  }`}
                  style={{ color: style.color }}
                >
                  {item.name}
                </span>
                <span className="mt-1 block text-xs text-zinc-500">{item.category}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function WorkMarquee() {
  const [paused, setPaused] = useState(false);
  const items: CardItem[] = WORK_IDS.flatMap((id) => {
    const p = projects.find((item) => item.id === id);
    return p
      ? [{ id, slug: p.slug, name: p.name, category: p.category, img: WORK_IMAGES[id] ?? "/project-previews/aurevane.webp" }]
      : [];
  });
  const reversed = [...items].reverse();

  return (
    <section id="work" className="relative overflow-hidden bg-background py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <h2 className="text-4xl leading-[1.05] tracking-tight text-zinc-900 md:text-6xl">
          <span className="block font-sans font-medium">Explore the work.</span>
          <span className="block font-serif italic font-normal">See the thinking.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg">
          A glimpse of the websites, stores, and booking systems we have built
          for real businesses — each one designed to turn visitors into
          enquiries.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-between px-5">
        <span className="text-sm text-zinc-500">A glimpse of our recent work</span>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm transition hover:bg-zinc-50"
        >
          {paused ? (
            <>
              <Play className="size-3.5" aria-hidden="true" /> Resume project marquee
            </>
          ) : (
            <>
              <Pause className="size-3.5" aria-hidden="true" /> Pause project marquee
            </>
          )}
        </button>
      </div>

      <div className="mt-4 space-y-5">
        <MarqueeRow items={items} direction="left" paused={paused} />
        <MarqueeRow items={reversed} direction="right" paused={paused} />
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/work"
          className="inline-flex h-14 items-center gap-3 rounded-full bg-black py-2 pl-7 pr-2 text-base font-medium text-white shadow-lg shadow-black/10 transition hover:bg-zinc-800"
        >
          View all projects
          <span className="grid size-10 place-items-center rounded-full bg-white text-black">
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </span>
        </Link>
      </div>
    </section>
  );
}
