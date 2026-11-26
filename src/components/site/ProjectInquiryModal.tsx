import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from "lucide-react";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OFFICIAL_EMAIL = "info@craftlogic.live";
const OFFICIAL_WHATSAPP = "923344957382";

export function ProjectInquiryModal({ isOpen, onClose }: ProjectInquiryModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    details: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  // Lock background scroll & support Escape key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
      setErrorMessage("");
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const generateLeadMessage = () => {
    return (
      `🚀 *NEW CRAFTLOGIC PROJECT INQUIRY*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Client Name:* ${formData.name || "Not provided"}\n` +
      `📧 *Email:* ${formData.email || "Not provided"}\n` +
      `📞 *Phone/WhatsApp:* ${formData.phone || "Not provided"}\n` +
      `💻 *Project Type:* ${formData.projectType || "Website / Custom Software"}\n` +
      `💰 *Estimated Budget:* ${formData.budget || "To be discussed"}\n` +
      `⏱️ *Target Timeline:* ${formData.timeline || "Flexible"}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `📝 *Project Requirements:*\n${formData.details || "No additional scope provided."}`
    );
  };

  // Instant WhatsApp Dispatch
  const handleDirectWhatsApp = () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage("Please enter your Name and Email Address first.");
      return;
    }
    const text = encodeURIComponent(generateLeadMessage());
    window.open(
      `https://wa.me/${OFFICIAL_WHATSAPP}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
    setTimeout(() => {
      setFormData(initialFormState);
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  // Direct Email Dispatch to info@craftlogic.live
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${OFFICIAL_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          projectType: formData.projectType || "Not specified",
          budget: formData.budget || "Not specified",
          timeline: formData.timeline || "Not specified",
          requirements: formData.details || "Not specified",
          _subject: `CRAFTLOGIC Project Lead: ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData(initialFormState);
          setSubmitted(false);
          onClose();
        }, 3000);
      } else {
        // Automatic WhatsApp fallback if FormSubmit needs initial activation
        const text = encodeURIComponent(generateLeadMessage());
        window.open(
          `https://wa.me/${OFFICIAL_WHATSAPP}?text=${text}`,
          "_blank",
          "noopener,noreferrer"
        );
        setSubmitted(true);
        setTimeout(() => {
          setFormData(initialFormState);
          setSubmitted(false);
          onClose();
        }, 3000);
      }
    } catch {
      const text = encodeURIComponent(generateLeadMessage());
      window.open(
        `https://wa.me/${OFFICIAL_WHATSAPP}?text=${text}`,
        "_blank",
        "noopener,noreferrer"
      );
      setSubmitted(true);
      setTimeout(() => {
        setFormData(initialFormState);
        setSubmitted(false);
        onClose();
      }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-xs"
          />

          {/* Clean Light Editorial Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 flex max-h-[86vh] supports-[height:100dvh]:max-h-[86dvh] sm:max-h-[88vh] sm:supports-[height:100dvh]:max-h-[88dvh] w-full max-w-2xl flex-col rounded-t-3xl sm:rounded-3xl border border-neutral-200 bg-white p-4 sm:p-8 shadow-2xl overflow-y-auto overscroll-contain"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-neutral-100 pb-3 sm:pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#0AAA8C]/30 bg-[#0AAA8C]/10 px-3 py-1 font-mono text-[10px] font-semibold text-[#0AAA8C] uppercase tracking-wider">
                  <Sparkles className="h-3 w-3" />
                  <span>Start A Project</span>
                </div>
                <h3
                  id="project-modal-title"
                  className="font-display mt-2.5 text-lg sm:text-2xl font-extrabold tracking-tight text-[#0A0A0A]"
                >
                  Tell Us About Your Project.
                </h3>
                <p className="mt-1 text-xs text-neutral-500">
                  Direct dispatch to:{" "}
                  <strong className="font-mono font-semibold text-[#0A0A0A]">
                    {OFFICIAL_EMAIL}
                  </strong>
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close Inquiry Form"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-[#0A0A0A] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0AAA8C]/15 text-[#0AAA8C]">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h4 className="font-display mt-3.5 text-xl font-extrabold text-[#0A0A0A]">
                  Inquiry Sent Successfully!
                </h4>
                <p className="mt-1.5 max-w-sm text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Your project details have been sent to{" "}
                  <strong className="text-[#0A0A0A]">{OFFICIAL_EMAIL}</strong>. Our team will
                  review your scope and reply within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 sm:mt-5 space-y-3 sm:space-y-3.5">
                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-medium text-rose-700">
                    <AlertCircle className="h-4 w-4 shrink-0 text-rose-500" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ahmed Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[42px] rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-xs sm:text-sm text-[#0A0A0A] placeholder-neutral-400 focus:border-[#0AAA8C] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full min-h-[42px] rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-xs sm:text-sm text-[#0A0A0A] placeholder-neutral-400 focus:border-[#0AAA8C] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="text"
                      placeholder="+92 300 0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[42px] rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-xs sm:text-sm text-[#0A0A0A] placeholder-neutral-400 focus:border-[#0AAA8C] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Service Needed
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full min-h-[42px] rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs sm:text-sm text-[#0A0A0A] focus:border-[#0AAA8C] focus:bg-white focus:outline-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App (iOS & Android)">
                        Mobile App (iOS &amp; Android)
                      </option>
                      <option value="E-Commerce / Online Store">
                        E-Commerce / Online Store
                      </option>
                      <option value="SaaS Platform / Web App">
                        SaaS Platform / Web App
                      </option>
                      <option value="SEO & Speed Optimization">
                        SEO &amp; Speed Optimization
                      </option>
                      <option value="AI Chatbot & Automation">
                        AI Chatbot &amp; Automation
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Estimated Budget (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. $500 - $2,000"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full min-h-[42px] rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-xs sm:text-sm text-[#0A0A0A] placeholder-neutral-400 focus:border-[#0AAA8C] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Target Timeline (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1-2 Weeks / Flexible"
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full min-h-[42px] rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-xs sm:text-sm text-[#0A0A0A] placeholder-neutral-400 focus:border-[#0AAA8C] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Project Requirements *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Briefly describe your business and the features you need..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-xs sm:text-sm text-[#0A0A0A] placeholder-neutral-400 focus:border-[#0AAA8C] focus:bg-white focus:outline-none resize-y"
                  />
                </div>

                {/* Dual Action Controls — sticky footer: submit hamesha nazar aaye */}
                <div className="sticky bottom-0 -mx-4 sm:-mx-8 bg-white border-t border-neutral-100 px-4 sm:px-8 pt-3 pb-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-[#0AAA8C]/40 bg-[#0AAA8C]/10 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#087F68] hover:bg-[#0AAA8C]/20 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-[#0AAA8C] active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                  >
                    <span>{submitting ? "Sending..." : "Send Project Inquiry"}</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ProjectInquiryModal;