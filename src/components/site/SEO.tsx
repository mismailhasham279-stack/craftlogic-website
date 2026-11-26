import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  image?: string;
  type?: "website" | "article";
  // Only true on pages that visibly show the FAQ section (homepage).
  // FAQPage markup must match visible content, and the Organization /
  // ProfessionalService schema already lives in __root.tsx (static
  // JSON-LD), so this component must not inject a second copy of it.
  includeFaq?: boolean;
}

export function SEO({
  title = "CRAFTLOGIC — Websites, Mobile Apps & Software That Grow Your Business",
  description = "CraftLogic builds fast, high-converting websites, online stores, mobile apps, and SaaS platforms engineered to grow your business.",
  canonicalUrl = "https://craftlogic.live/",
  image = "https://craftlogic.live/og-preview.png",
  type = "website",
  includeFaq = false,
}: SEOProps) {
  useEffect(() => {
    // 1. Browser Tab Window Title
    document.title = title;

    // Helper: Safely insert or update Meta Tags
    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentVal);
    };

    // Helper: Safely insert or update Link Tags
    const setLinkTag = (relVal: string, hrefVal: string, typeVal?: string, sizesVal?: string) => {
      let selector = `link[rel="${relVal}"]`;
      if (sizesVal) selector += `[sizes="${sizesVal}"]`;
      if (typeVal) selector += `[type="${typeVal}"]`;

      let element = document.querySelector(selector) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", relVal);
        if (typeVal) element.setAttribute("type", typeVal);
        if (sizesVal) element.setAttribute("sizes", sizesVal);
        document.head.appendChild(element);
      }
      element.setAttribute("href", hrefVal);
    };

    // 2. Browser Tab Favicon
    setLinkTag("icon", "/favicon.svg?v=4", "image/svg+xml");
    setLinkTag("shortcut icon", "/favicon.ico", "image/x-icon");

    // 3. Search Engine & Mobile Home Screen Icon
    setLinkTag("apple-touch-icon", "/logo.png", undefined, "180x180");

    // 4. Core Search Engine Directives
    setMetaTag("name", "description", description);
    setMetaTag("name", "author", "Muhammad Ismail");
    setMetaTag(
      "name",
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );

    // 5. Canonical Link
    setLinkTag("canonical", canonicalUrl);

    // 6. OpenGraph / WhatsApp / Social Share Previews
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:image:secure_url", image);
    setMetaTag("property", "og:image:type", "image/png");
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag(
      "property",
      "og:image:alt",
      "CRAFTLOGIC — Software Development Company",
    );
    setMetaTag("property", "og:site_name", "CRAFTLOGIC");

    // 7. Twitter / X Cards
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:site", "@web_developer92");
    setMetaTag("name", "twitter:creator", "@web_developer92");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    // 8. Google Rich Snippet FAQ Schema (JSON-LD) — only on pages that
    // visibly show these FAQs (homepage). The Organization /
    // ProfessionalService schema is NOT duplicated here: it already
    // exists once in __root.tsx as static JSON-LD.
    const schemaId = "craftlogic-structured-schema";
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!includeFaq) {
      if (schemaScript) schemaScript.remove();
      return;
    }
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = schemaId;
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What can CraftLogic help our business build?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "CraftLogic builds modern business websites, mobile apps (iOS & Android), e-commerce stores, SaaS platforms, Google SEO optimizations, and 24/7 AI chatbots tailored to your exact business goals.",
              },
            },
            {
              "@type": "Question",
              name: "How can I see a Free Homepage Preview before starting?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Click the Get Free Homepage Preview button on craftlogic.live, share your business name and industry, and our design team will prepare a customized homepage concept within 24-48 hours with zero obligation.",
              },
            },
            {
              "@type": "Question",
              name: "Who owns the source code, domain, and design after launch?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You get 100% full ownership of your domain, source code, UI designs, and business data upon completion with zero lock-ins.",
              },
            },
          ],
        },
      ],
    };

    schemaScript.textContent = JSON.stringify(schemaData);
  }, [title, description, canonicalUrl, image, type, includeFaq]);

  return null;
}

export default SEO;