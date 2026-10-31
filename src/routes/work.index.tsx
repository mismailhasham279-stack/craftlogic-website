import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Sections";
import { projects } from "@/data/projects";
import { SITE_ORIGIN } from "@/lib/site";

const PREVIEW_IMAGES: Record<string, string> = {
  luxevia: "/project-previews/curate.webp",
  nailsbygrace: "/project-previews/nails-by-grace.webp",
  shoptop: "/project-previews/usa-luxe-curate.webp",
  "haider-stillbok": "/project-previews/haider-stillbok.webp",
  aurevane: "/project-previews/aurevane.webp",
  usaluxe: "/project-previews/usa-luxe-curate.webp",
};

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Our Work — CRAFTLOGIC" },
      {
        name: "description",
        content:
          "Websites, stores, and booking systems built by CRAFTLOGIC for real businesses.",
      },
      { property: "og:title", content: "Our Work — CRAFTLOGIC" },
      {
        property: "og:description",
        content:
          "Websites, stores, and booking systems built by CRAFTLOGIC for real businesses.",
      },
      { property: "og:image", content: `${SITE_ORIGIN}/og-preview.png` },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <main className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <h1 className="text-center text-4xl leading-[1.05] tracking-tight text-zinc-900 md:text-6xl">
          <span className="block font-sans font-medium">Explore the work.</span>
          <span className="block font-serif italic font-normal">See the thinking.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-zinc-600 md:text-lg">
          Every project below is a real website, store, or booking system we
          built for a real business.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.id}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-md"
            >
              <img
                src={PREVIEW_IMAGES[p.id] ?? "/project-previews/aurevane.webp"}
                alt=""
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="block p-5">
                <span className="block font-sans text-lg font-bold text-zinc-900">
                  {p.name}
                </span>
                <span className="mt-1 block text-sm text-zinc-500">{p.category}</span>
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
