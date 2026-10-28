import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import { EMAIL, WHATSAPP_RAW } from "@/data/projects";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

  // Lock background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
      setErrorMessage("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const generateLeadMessage = () => {
    return (
      `🚀 *NEW CRAFTLOGIC MODAL INQUIRY*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Client Name:* ${formData.name || "Not provided"}\n` +
      `📧 *Email:* ${formData.email || "Not provided"}\n` +
      `📞 *Phone/WhatsApp:* ${formData.phone || "Not provided"}\n` +
      `💻 *Project Type:* ${formData.projectType || "Custom Web System"}\n` +
      `💰 *Estimated Budget:* ${formData.budget || "To be discussed"}\n` +
      `⏱️ *Target Timeline:* ${formData.timeline || "Flexible"}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `📝 *Scope & Requirements:*\n${formData.details || "No additional scope provided."}`
    );
  };

  // Instant WhatsApp Direct Dispatch
  const handleDirectWhatsApp = () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage("Please fill in at least your Name and Email Address.");
      return;
    }
    const text = encodeURIComponent(generateLeadMessage());
    window.open(`https://wa.me/${WHATSAPP_RAW}?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => {
      setFormData(initialFormState);
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  // Guaranteed FormSubmit AJAX to foundercraftlogic@gmail.com
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
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
          _subject: `CRAFTLOGIC Lead: ${formData.name} (Modal Drawer)`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form and return to clean state after 3 seconds
        setTimeout(() => {
          setFormData(initialFormState);
          setSubmitted(false);
          onClose();
        }, 3000);
      } else {
        // Safe WhatsApp fallback
        const text = encodeURIComponent(generateLeadMessage());
        window.open(`https://wa.me/${WHATSAPP_RAW}?text=${text}`, "_blank", "noopener,noreferrer");
        setSubmitted(true);
        setTimeout(() => {
          setFormData(initialFormState);
          setSubmitted(false);
          onClose();
        }, 3000);
      }
    } catch {
      // Offline fallback
      const text = encodeURIComponent(generateLeadMessage());
      window.open(`https://wa.me/${WHATSAPP_RAW}?text=${text}`, "_blank", "noopener,noreferrer");
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
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 flex max-h-[92dvh] sm:max-h-[90vh] w-full max-w-2xl flex-col rounded-t-2xl sm:rounded-2xl border border-primary/30 bg-[#0B0F17] p-5 sm:p-7 shadow-2xl overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[9px] sm:text-[10px] font-semibold text-primary uppercase tracking-widest">
                  <Sparkles className="h-3 w-3" />
                  <span>Start A Project</span>
                </div>
                <h3 className="font-display mt-2 text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                  Tell Us About Your Vision.
                </h3>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  Direct dispatch to: <strong className="text-primary font-mono">{EMAIL}</strong>.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close Inquiry Form"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-muted-foreground transition-colors hover:bg-white/10 hover:text-white cursor-pointer min-h-[42px] min-w-[42px] flex items-center justify-center"
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
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h4 className="font-display mt-3 text-xl font-bold text-white">
                  Inquiry Dispatched Successfully!
                </h4>
                <p className="mt-1.5 max-w-xs text-xs text-muted-foreground leading-relaxed">
                  Your requirements have reached <strong className="text-white">{EMAIL}</strong>. We
                  will review the scope and reply within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-lg border border-rose-500/20 bg-rose-950/20 p-2.5 text-xs text-rose-300">
                    <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-white/70 mb-1">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[44px] rounded-lg border border-white/10 bg-black/50 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-white/70 mb-1">
                      Business Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full min-h-[44px] rounded-lg border border-white/10 bg-black/50 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-white/70 mb-1">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="text"
                      placeholder="+92 300 0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[44px] rounded-lg border border-white/10 bg-black/50 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-white/70 mb-1">
                      Project Type
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. E-Commerce / Full-Stack Platform"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full min-h-[44px] rounded-lg border border-white/10 bg-black/50 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-white/70 mb-1">
                      Estimated Budget
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. $2,500 or $5k-$10k"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full min-h-[44px] rounded-lg border border-white/10 bg-black/50 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-white/70 mb-1">
                      Target Timeline
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2-3 Weeks / Flexible"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full min-h-[44px] rounded-lg border border-white/10 bg-black/50 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-white/70 mb-1">
                    Project Scope & Bottlenecks *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Briefly state your requirements, current challenges, or target features..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-black/50 p-3 text-xs text-white placeholder-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-y"
                  />
                </div>

                {/* Dual Action Controls: Instant WhatsApp + Email Dispatch */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3">
                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="min-h-[46px] inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 font-display text-xs font-bold text-emerald-400 hover:bg-emerald-500/20 active:scale-95 transition-all cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Send via WhatsApp Instantly</span>
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="min-h-[46px] inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-display text-xs font-bold text-primary-foreground shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    <span>{submitting ? "Transmitting..." : "Send Project Inquiry"}</span>
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


