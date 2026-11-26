import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Sections";
import { getAllPosts, type Post } from "@/data/posts";

function getCover(post: Post): string | null {
  const image = post.blocks.find((block) => block.kind === "image");
  return image && image.kind === "image" ? image.src : null;
}
import { SITE_ORIGIN } from "@/lib/site";

export const Route = createFileRoute("/blog/")({
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
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_ORIGIN}/blog` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Blog — CRAFTLOGIC" },
      {
        name: "twitter:description",
        content:
          "Practical guides on websites, online growth, and turning visitors into customers — written by the CRAFTLOGIC team.",
      },
      { name: "twitter:image", content: `${SITE_ORIGIN}/og-preview.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/blog` }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Blog
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-8 text-muted-foreground">
          Practical guides on websites, online growth, and turning visitors
          into customers — written by the CRAFTLOGIC team.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const cover = getCover(post);
            return (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-white/20 hover:bg-white/10"
              >
                {cover ? (
                  <img
                    src={cover}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                ) : (
                  <div className="aspect-[16/10] w-full bg-gradient-to-br from-primary/40 to-accent/40" />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs text-muted-foreground">
                    {post.date} · {post.readTime}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold tracking-tight">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-block font-display text-sm font-bold text-primary">
                    Read more →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
