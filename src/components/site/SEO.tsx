import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  image?: string;
  type?: "website" | "article";
}

export function SEO({
  title = "CRAFTLOGIC — High-Performance Web Engineering & Digital Agency",
  description = "CraftLogic builds resilient, high-converting digital storefronts, SaaS applications, and bespoke web platforms engineered for business growth.",
  canonicalUrl = "https://craftlogic.live/",
  image = "https://craftlogic.live/logo.png",
  type = "website",
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

    // 2. Browser tab favicon
    setLinkTag("icon", "/favicon.svg?v=4", "image/svg+xml");
    setLinkTag("shortcut icon", "/favicon.svg?v=4", "image/svg+xml");

    // 3. Search Engine & Mobile Home Screen DP (Dedicated Apple Touch Icon - no tab override)
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

    // 6. OpenGraph / WhatsApp / Social Share Previews (Shows full brand logo on social sharing)
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:image:secure_url", image);
    setMetaTag("property", "og:image:type", "image/png");
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "1200");
    setMetaTag("property", "og:image:alt", "CRAFTLOGIC Official Brand Logo");
    setMetaTag("property", "og:site_name", "CRAFTLOGIC");

    // 7. Twitter / X Cards
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:site", "@web_developer92");
    setMetaTag("name", "twitter:creator", "@web_developer92");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    // 8. Google Rich Snippet Organization & Brand Schema (JSON-LD)
    const schemaId = "craftlogic-structured-schema";
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = schemaId;
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "CRAFTLOGIC",
      legalName: "CRAFTLOGIC Digital Agency",
      url: "https://craftlogic.live",
      logo: "https://craftlogic.live/logo.png",
      image: "https://craftlogic.live/logo.png",
      description: description,
      founder: {
        "@type": "Person",
        name: "Muhammad Ismail",
        jobTitle: "Founder & Lead Solutions Architect",
      },
      email: "foundercraftlogic@gmail.com",
      telephone: "+923344957382",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
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
      knowsAbout: [
        "High-Performance Web Engineering",
        "React & TypeScript Development",
        "Tailwind CSS Architecture",
        "E-Commerce Infrastructure",
        "Custom Corporate Portals",
      ],
    };

    schemaScript.textContent = JSON.stringify(schemaData);
  }, [title, description, canonicalUrl, image, type]);

  return null;
}

export default SEO;
