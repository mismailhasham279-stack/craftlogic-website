import { ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { ProjectBrowserFrame } from "@/components/site/ProjectBrowserFrame";
import { Footer } from "@/components/site/Sections";
import { getPublicProjects } from "@/data/projects";
import { SITE_ORIGIN } from "@/lib/site";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — CRAFTLOGIC" },
      {
        name: "description",
        content:
          "Websites and platforms CRAFTLOGIC built for real businesses — luxury e-commerce, bookings, import and devices stores.",
      },
      { property: "og:title", content: "Selected Work — CRAFTLOGIC" },
      {
        property: "og:description",
        content:
          "Websites and platforms CRAFTLOGIC built for real businesses — luxury e-commerce, bookings, import and devices stores.",
      },
      { property: "og:image", content: `${SITE_ORIGIN}/og-preview.png` },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const projects = getPublicProjects();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Selected Work
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg leading-8 text-muted-foreground">
          Websites and platforms we built for real businesses — take a look at
          the work, then visit the live sites.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="group block overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/60"
            >
              <div className="relative overflow-hidden bg-surface p-4 sm:p-5">
                <ProjectBrowserFrame
                  src={project.thumbnail}
                  projectName={project.name}
                  className="relative z-10"
                />
                <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.18em] text-primary/70">
                  {project.index}
                </span>
              </div>
              <div className="border-t border-border p-5 sm:p-6">
                <span className="text-[9px] tracking-[0.16em] text-primary uppercase font-mono font-medium">
                  {project.category}
                </span>
                <h2 className="font-display mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {project.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  View Project Details
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
