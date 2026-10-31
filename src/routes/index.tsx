import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  WorkShowcase,
  ConnectedTeam,
  CompanyBlack,
  ColorBlocks,
  CapabilitiesGrid,
  ProcessV3,
  Foundations,
  BeforeBuild,
  WaysV3,
  FaqV3,
  FinalCTA,
} from "@/components/site/NexzilSections";
import { Services, StartProject, Contact, Footer } from "@/components/site/Sections";
import { ProjectInquiryModal } from "@/components/site/ProjectInquiryModal";

// TanStack Router Contract: Only Route is exported for optimal code-splitting
export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const openInquiryModal = () => setInquiryModalOpen(true);
  const closeInquiryModal = () => setInquiryModalOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Dynamic Production SEO & Google Schema Engine */}
      <SEO
        title="CRAFTLOGIC — High-Performance Web Engineering & Digital Agency"
        description="CraftLogic builds resilient, high-converting digital storefronts, SaaS applications, and bespoke web platforms engineered for business growth."
        canonicalUrl="https://craftlogic.live/"
      />

      {/* Global Header Navigation */}
      <Nav onOpenInquiry={openInquiryModal} />

      <main id="main-content" className="relative">
        {/* Typographic hero with services pill cloud */}
        <Hero onOpenInquiry={openInquiryModal} />
        <WorkShowcase />
        <ConnectedTeam />
        <CompanyBlack />
        <ColorBlocks />
        <CapabilitiesGrid />
        {/* Full services list with long, easy-English detail */}
        <Services />
        <ProcessV3 />
        <Foundations />
        <BeforeBuild />
        <WaysV3 />
        <FaqV3 />
        <StartProject />
        <FinalCTA />
        <Contact />
      </main>

      {/* Branded Footer with Complete Social Hub */}
      <Footer />

      {/* Global Inquiry Drawer Modal */}
      <ProjectInquiryModal isOpen={isInquiryModalOpen} onClose={closeInquiryModal} />
    </div>
  );
}
