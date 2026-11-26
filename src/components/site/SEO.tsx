import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  image?: string;
  type?: "website" | "article";
}

export function SEO({
  title = "CRAFTLOGIC — Websites, Mobile Apps & Software That Grow Your Business",
  description = "CraftLogic builds fast, high-converting websites, online stores, mobile apps, and SaaS platforms engineered to grow your business.",
  canonicalUrl = "https://craftlogic.live/",
  image = "https://craftlogic.live/og-preview.png",
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

    // 8. Google Rich Snippet Organization, FAQ & Service Schema (JSON-LD)
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
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": "https://craftlogic.live/#service",
          name: "CRAFTLOGIC",
          legalName: "CRAFTLOGIC Web & Software Development Studio",
          url: "https://craftlogic.live",
          logo: "https://craftlogic.live/logo.png",
          image: "https://craftlogic.live/logo.png",
          description: description,
          founder: {
            "@type": "Person",
            name: "Muhammad Ismail",
            jobTitle: "Founder & Lead Solutions Architect",
          },
          email: "info@craftlogic.live",
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
            "Website Development",
            "Mobile App Development",
            "E-Commerce & Online Stores",
            "SaaS Platforms & Web Applications",
            "SEO & Core Web Vitals Optimization",
            "AI Chatbots & WhatsApp Automation",
          ],
        },
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
  }, [title, description, canonicalUrl, image, type]);

  return null;
}

export default SEO;