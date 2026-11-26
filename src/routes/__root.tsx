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
import { SmoothScroll } from "@/components/site/SmoothScroll";

export const SITE_URL = "https://craftlogic.live";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "CRAFTLOGIC",
      description: "Software Development Company — Custom Software, Websites, Mobile Apps & SaaS",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "CRAFTLOGIC",
      legalName: "CRAFTLOGIC Software Development Company",
      url: `${SITE_URL}/`,
      email: "info@craftlogic.live",
      telephone: "+923344957382",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
      founder: {
        "@type": "Person",
        name: "Muhammad Ismail",
        jobTitle: "Founder & Lead Solutions Architect",
      },
      sameAs: [
        "https://www.instagram.com/craft_logics?obrf=d3NqYmY3ZmJyMm9w",
        "https://www.facebook.com/share/14mTT25RfBp/",
        "https://www.tiktok.com/@craftlogics?_r=1&_t=ZP-9AibnwtdjRf",
        "https://www.threads.com/@craftlogic.web",
        "https://x.com/web_developer92",
        "https://www.linkedin.com/in/craft-logic-712857409?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "https://youtube.com/@craft_logics?si=ugoevhrErI-Z7zwq",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "CRAFTLOGIC Software Development Company",
      url: `${SITE_URL}/`,
      telephone: "+923344957382",
      email: "info@craftlogic.live",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
      },
      knowsAbout: [
        "Custom Software Development",
        "Website & Web App Engineering",
        "Mobile App Development",
        "SaaS Platform Development",
        "Business Workflow Automation",
        "AI Chatbots & Smart Assistants",
      ],
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
  const router = useRouter();

  useEffect(() => {
    if (process.env["NODE_ENV"] !== "production") {
      console.error("[CRAFTLOGIC App Root Boundary Caught Error]:", error);
    }
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
            className="focus-ring inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
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
        title: "CRAFTLOGIC — Software Development Company | Custom Software, Websites & SaaS",
      },
      {
        name: "description",
        content:
          "CraftLogic is a software development company. We build custom software, websites, mobile apps and SaaS platforms for your business.",
      },
      { name: "author", content: "Muhammad Ismail" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "msvalidate.01", content: "BB1CCD59FC2C08937AB5EDD73E95A548" },
      { name: "theme-color", content: "#fafafa" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CRAFTLOGIC" },
      { property: "og:url", content: `${SITE_URL}/` },
      {
        property: "og:title",
        content: "CRAFTLOGIC — Software Development Company",
      },
      {
        property: "og:description",
        content:
          "We design, develop & deliver custom software, websites, mobile apps and SaaS platforms for your business.",
      },
      { property: "og:image", content: `${SITE_URL}/og-preview.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "CRAFTLOGIC — Software Development Company" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "CRAFTLOGIC — Software Development Company",
      },
      {
        name: "twitter:description",
        content: "Custom software, websites, mobile apps and SaaS platforms built for business growth.",
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
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      {
        rel: "icon",
        href: "/favicon-192x192.png",
        type: "image/png",
        sizes: "192x192",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
        <HeadContent />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NDL52JNNZ8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NDL52JNNZ8');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
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
      <Outlet />
    </QueryClientProvider>
  );
}