import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { SITE_NAME } from "@/lib/site";

/*
 * SITE KA DOMAIN:
 * Abhi site ismail-digital-crafted.lovable.app par live hai, to yehi likha hai.
 * Jab .com domain lag jaye to SIRF neeche wali line badalni hai —
 * baqi sab kuch khud theek ho jayega. Kuch galat nahi hoga.
 */
const SITE_URL = "https://ismail-digital-crafted.lovable.app";

/* Google Structured Data (JSON-LD) — static hai, React crash nahi karega */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "CRAFTLOGIC",
      description: "High-Performance Web Development Agency",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "CRAFTLOGIC",
      url: `${SITE_URL}/`,
      email: "foundercraftlogic@gmail.com",
      telephone: "+923344957382",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "CRAFTLOGIC Web Engineering Studio",
      url: `${SITE_URL}/`,
      telephone: "+923344957382",
      email: "foundercraftlogic@gmail.com",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
      },
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="focus-ring inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="focus-ring inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="focus-ring inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "CRAFTLOGIC — High-Performance Web Development & Digital Engineering Agency",
      },
      {
        name: "description",
        content:
          "CRAFTLOGIC builds fast, modern, and reliable business websites, headless e-commerce platforms, and custom web applications tailored to scale your revenue.",
      },
      { name: "author", content: "Muhammad Ismail" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#090a0f" },
      /* OpenGraph — WhatsApp / Facebook / LinkedIn preview */
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CRAFTLOGIC" },
      { property: "og:url", content: `${SITE_URL}/` },
      {
        property: "og:title",
        content: "CRAFTLOGIC — High-Performance Web Development",
      },
      {
        property: "og:description",
        content:
          "Bespoke digital storefronts, headless e-commerce, and high-converting web platforms engineered for ambitious businesses.",
      },
      { property: "og:image", content: `${SITE_URL}/og-preview.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "CRAFTLOGIC — Web Development Agency" },
      /* Twitter Cards */
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "CRAFTLOGIC — High-Performance Web Systems",
      },
      {
        name: "twitter:description",
        content: "Custom web platforms built to eliminate manual business bottlenecks.",
      },
      { name: "twitter:image", content: `${SITE_URL}/og-preview.png` },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/logo.png", sizes: "180x180" },
      { rel: "canonical", href: `${SITE_URL}/` },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/*
          JS guard: agar JavaScript na chale to .reveal content
          chhupa na rahe (styles.css wali safety ke saath kaam karta hai)
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
        <HeadContent />
        {/* Google Structured Data — static JSON, koi crash risk nahi */}
        <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
