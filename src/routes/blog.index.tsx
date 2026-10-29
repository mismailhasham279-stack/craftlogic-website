import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Sections";
import { getAllPosts } from "@/data/posts";
import { SITE_ORIGIN } from "@/lib/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — CRAFTLOGIC" },
      {
        name: "description",
        content:
          "Practical guides on websites, online growth, and turning visitors into customers — written by the CRAFTLOGIC team.",
      },
      { property: "og:title", content: "Blog — CRAFTLOGIC" },
      {
        property: "og:description",
        content:
          "Practical guides on websites, online growth, and turning visitors into customers — written by the CRAFTLOGIC team.",
      },
      { property: "og:image", content: `${SITE_ORIGIN}/og-preview.png` },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-14 sm:py-20">
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Blog
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-8 text-muted-foreground">
          Practical guides on websites, online growth, and turning visitors
          into customers — written by the CRAFTLOGIC team.
        </p>
        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="block rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/10"
            >
              <p className="font-mono text-xs text-muted-foreground">
                {post.date} · {post.readTime}
              </p>
              <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight">
                {post.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base leading-7 text-muted-foreground">
                {post.description}
              </p>
              <span className="mt-4 inline-block font-display text-sm font-bold text-primary">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
