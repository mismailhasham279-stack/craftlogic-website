import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SITE_ORIGIN } from "@/lib/site";
import { SEO } from "@/components/site/SEO";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import {
  Trust,
  Services,
  BusinessProblem,
  FreeDemo,
  Process,
  WhyMe,
  FaqSection,
  About,
  StartProject,
  Contact,
  Footer,
} from "@/components/site/Sections";
import { ProjectInquiryModal } from "@/components/site/ProjectInquiryModal";

export const Route = createFileRoute("/")({
  // Canonical lives here (not in __root.tsx): each route declares its own
  // canonical so crawlers never see the homepage URL on other pages.
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/` }],
  }),
  component: HomePage,
});

function HomePage() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const openInquiryModal = () => setIsInquiryModalOpen(true);
  const closeInquiryModal = () => setIsInquiryModalOpen(false);

  useEffect(() => {
    const handler = () => setIsInquiryModalOpen(true);
    window.addEventListener("craftlogic:open-inquiry", handler);
    return () => window.removeEventListener("craftlogic:open-inquiry", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <SEO
        title="CRAFTLOGIC — Software Development Company | Custom Software, Websites & SaaS"
        description="CraftLogic is a software development company. We build custom software, websites, mobile apps and SaaS platforms for your business."
        canonicalUrl="https://craftlogic.live/"
        includeFaq
      />

      <Nav onOpenInquiry={openInquiryModal} />

      <main id="main-content" className="relative">
        <Hero onOpenInquiry={openInquiryModal} />
        <Trust />
        <About />
        <Services onOpenInquiry={openInquiryModal} />
        <FreeDemo />
        <Work />
        <BusinessProblem />
        <Process />
        <WhyMe />
        <FaqSection />
        <StartProject onOpenInquiry={openInquiryModal} />
        <Contact />
      </main>

      <Footer />

      <ProjectInquiryModal isOpen={isInquiryModalOpen} onClose={closeInquiryModal} />
    </div>
  );
}