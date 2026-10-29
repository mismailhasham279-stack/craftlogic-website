import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Sections";
import { getPost, type PostBlock } from "@/data/posts";
import { SITE_ORIGIN, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    if (!getPost(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData ? getPost(loaderData.slug) : undefined;
    const url = `${SITE_ORIGIN}/blog/${params.slug}`;

    if (!post) {
      return {
        meta: [
          { title: "Post not found — CRAFTLOGIC" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const title = `${post.title} | ${SITE_NAME}`;
    return {
      meta: [
        { title },
        { name: "description", content: post.description },
        { property: "og:title", content: title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${SITE_ORIGIN}/og-preview.png` },
        { property: "article:published_time", content: post.published },
      ],
    };
  },
  component: BlogPostPage,
});

function Block({ block }: { block: PostBlock }) {
  if (block.kind === "h2") {
    return (
      <h2 className="mt-10 font-display text-2xl sm:text-3xl font-bold tracking-tight">
        {block.text}
      </h2>
    );
  }
  if (block.kind === "list") {
    return (
      <ul className="mt-5 space-y-2 text-base leading-8 text-muted-foreground list-disc pl-6">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <p className="mt-5 text-base leading-8 text-muted-foreground">{block.text}</p>
  );
}

function BlogPostPage() {
  const { slug } = Route.useLoaderData();
  const post = getPost(slug);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-14 sm:py-20">
        <Link
          to="/blog"
          className="font-display text-sm font-bold text-primary hover:underline"
        >
          ← All posts
        </Link>
        <h1 className="mt-6 font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 font-mono text-xs sm:text-sm text-muted-foreground">
          {post.date} · {post.readTime} · {post.author}
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {post.description}
        </p>
        <article className="mt-8">
          {post.blocks.map((block, idx) => (
            <Block key={idx} block={block} />
          ))}
        </article>
        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-display text-xl font-bold tracking-tight">
            Want a website that brings you customers?
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-7 text-muted-foreground">
            CRAFTLOGIC builds fast, modern business websites — starting with a
            free homepage concept, so you can see the design before you commit.
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 font-display text-sm font-bold text-primary-foreground transition-colors hover:bg-accent"
          >
            Start a Project
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
