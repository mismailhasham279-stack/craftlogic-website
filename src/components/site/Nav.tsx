import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

interface NavProps {
  onOpenInquiry?: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Process", href: "/#process" },
  { label: "Free Preview", href: "/#free-preview" },
  { label: "FAQ", href: "/#faq" },
];

export function Nav({ onOpenInquiry }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 14);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      if (currentPath.startsWith("/blog")) {
        setActiveHref("/blog");
      } else if (currentPath.startsWith("/work")) {
        setActiveHref("/work");
      } else {
        setActiveHref("/");
      }
    }
  }, []);

  const handleTriggerProject = () => {
    setMobileOpen(false);
    if (onOpenInquiry) {
      onOpenInquiry();
    } else {
      window.dispatchEvent(new CustomEvent("craftlogic:open-inquiry"));
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-200/80 bg-[#FAFAFA]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          : "border-b border-neutral-200/50 bg-[#FAFAFA]"
      }`}
    >
      <div className="mx-auto flex h-[64px] sm:h-[74px] max-w-[1320px] items-center justify-between gap-2 px-3.5 sm:px-6 lg:px-10">
        {/* Left: Compact Brand Logo on Mobile, Full Tagline on Tablet/Desktop */}
        <a
          href="/"
          onClick={() => setActiveHref("/")}
          aria-label="CraftLogic Home"
          className="shrink-0 focus-visible:outline-none"
        >
          <div className="sm:hidden">
            <Logo variant="light" showTagline={false} />
          </div>
          <div className="hidden sm:block">
            <Logo variant="light" showTagline={true} />
          </div>
        </a>

        {/* Center: Clean Desktop Navigation Links (Including Work & Blog) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-6 xl:gap-7 lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveHref(link.href)}
                className={`relative py-2 text-[14px] font-medium transition-colors ${
                  isActive
                    ? "text-[#0A0A0A] font-semibold"
                    : "text-neutral-600 hover:text-[#0A0A0A]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-[2px] w-5 rounded-full bg-[#0AAA8C]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Visible Pill CTA on Mobile & Desktop + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={handleTriggerProject}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0A0A0A] px-3.5 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-[13px] font-semibold text-white shadow-2xs transition-all duration-200 hover:bg-[#0AAA8C] active:scale-[0.98] cursor-pointer"
          >
            <span>Start a project</span>
            <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
            className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#0A0A0A] lg:hidden cursor-pointer"
          >
            {mobileOpen ? (
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 shadow-xl lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveHref(link.href);
                  setMobileOpen(false);
                }}
                className="rounded-xl border border-neutral-100 bg-neutral-50/70 px-3.5 py-2.5 text-xs font-semibold text-neutral-800 hover:border-[#0AAA8C]/40 hover:text-[#0AAA8C]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;