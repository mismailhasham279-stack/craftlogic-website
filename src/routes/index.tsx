import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

// TanStack Router Contract: Only Route is exported for optimal code-splitting
export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const openInquiryModal = () => setIsInquiryModalOpen(true);
  const closeInquiryModal = () => setIsInquiryModalOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Dynamic Production SEO & Google Schema Engine */}
      <SEO
        title="CRAFTLOGIC — High-Performance Web Engineering & Digital Agency"
        description="CraftLogic builds resilient, high-converting digital storefronts, SaaS applications, and bespoke web platforms engineered for business growth."
        canonicalUrl="https://ismail-digital-crafted.lovable.app/"
      />

      {/* Global Header Navigation */}
      <Nav onOpenInquiry={openInquiryModal} />

      <main id="main-content" className="relative">
        {/* Hero Section with Laptop Showcase and In-Place Modal Trigger */}
        <Hero onOpenInquiry={openInquiryModal} />
        <Trust />
        <Services />
        <Work />
        <BusinessProblem />
        <FreeDemo />
        <Process />
        <WhyMe />
        <FaqSection />
        <About />
        <StartProject />
        <Contact />
      </main>

      {/* Branded Footer with Complete Social Hub */}
      <Footer />

      {/* Global Inquiry Drawer Modal */}
      <ProjectInquiryModal isOpen={isInquiryModalOpen} onClose={closeInquiryModal} />
    </div>
  );
}
