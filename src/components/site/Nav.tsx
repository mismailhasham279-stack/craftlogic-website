import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavProps {
  onOpenInquiry?: () => void;
}

const NAV_LINKS = [
  { label: "Work", hash: "work" },
  { label: "Services", hash: "services" },
  { label: "Demo", hash: "demo" },
  { label: "Process", hash: "process" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export function Nav({ onOpenInquiry }: NavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleCtaClick = () => {
    setIsMobileMenuOpen(false);
    if (onOpenInquiry) {
      onOpenInquiry();
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-black/10 bg-white/95 backdrop-blur-md shadow-lg shadow-black/10 py-2.5 sm:py-3"
            : "border-b border-black/5 bg-white/80 backdrop-blur-sm py-3 sm:py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-10">
          {/* Logo Container: Tightly Balanced with gap-1.5 */}
          <Link
            to="/"
            hash="home"
            onClick={handleLinkClick}
            className="flex items-center gap-1.5 group select-none cursor-pointer"
          >
            {/* 3-Plate Isometric Geometric Logo */}
            <div className="relative flex shrink-0 items-center justify-center">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:scale-105"
                aria-hidden="true"
              >
                <path d="M32 8L54 20L32 32L10 20L32 8Z" fill="#5052D8" />
                <path d="M32 20L54 32L32 44L10 32L32 20Z" fill="#128DD8" />
                <path d="M32 32L54 44L32 56L10 44L32 32Z" fill="#0AB18E" />
              </svg>
            </div>

            <div className="flex items-center tracking-[-0.04em] font-extrabold text-lg sm:text-xl font-display leading-none">
              <span className="text-black">CRAFT</span>
              <span className="font-serif-logo text-[#0AAA8C] ml-0.5">LOGIC</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Desktop Navigation"
            className="hidden lg:flex items-center gap-7 xl:gap-8"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.hash}
                to="/"
                hash={link.hash}
                className="font-sans text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:text-black"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/blog"
              className="font-sans text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:text-black"
            >
              Blog
            </Link>
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-3">
            {onOpenInquiry ? (
              <button
                type="button"
                onClick={onOpenInquiry}
                className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary px-4 sm:px-5 py-2 font-display text-xs font-bold text-primary-foreground shadow-md transition-all duration-200 hover:bg-accent active:scale-95 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            ) : (
              <Link
                to="/"
                hash="contact"
                className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary px-4 sm:px-5 py-2 font-display text-xs font-bold text-primary-foreground shadow-md transition-all duration-200 hover:bg-accent active:scale-95 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            )}

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-black transition-colors hover:bg-black/10 active:scale-95 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col bg-white px-6 pt-5 pb-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-black/10 pb-5">
              <div className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M32 8L54 20L32 32L10 20L32 8Z" fill="#5052D8" />
                  <path d="M32 20L54 32L32 44L10 32L32 20Z" fill="#128DD8" />
                  <path d="M32 32L54 44L32 56L10 44L32 32Z" fill="#0AB18E" />
                </svg>
                <div className="flex items-center font-extrabold text-lg font-display tracking-tight">
                  <span className="text-black">CRAFT</span>
                  <span className="font-serif-logo text-[#0AAA8C] ml-0.5">LOGIC</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-muted-foreground hover:bg-black/10 hover:text-black cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col justify-center gap-6 py-8">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.2 }}
                  key={link.hash}
                >
                  <Link
                    to="/"
                    hash={link.hash}
                    onClick={handleLinkClick}
                    className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-black hover:text-primary transition-colors py-1 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.2 }}
              >
                <Link
                  to="/blog"
                  onClick={handleLinkClick}
                  className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-black hover:text-primary transition-colors py-1 block"
                >
                  Blog
                </Link>
              </motion.div>
            </div>

            <div className="mt-auto border-t border-black/10 pt-6 space-y-4">
              {onOpenInquiry ? (
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 rounded-lg bg-primary py-3 font-display text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-98 cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  to="/"
                  hash="contact"
                  onClick={handleLinkClick}
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 rounded-lg bg-primary py-3 font-display text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-98 cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}

              <div className="text-center font-mono text-[11px] text-muted-foreground">
                Direct Inquiries: <span className="text-black">foundercraftlogic@gmail.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;


