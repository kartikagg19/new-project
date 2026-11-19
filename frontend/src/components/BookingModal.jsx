import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { TIME_SLOTS } from "@/data/content";
import { openWhatsApp } from "@/lib/scroll";

export default function BookingModal({ open, onClose, mode = "salon", options = [], defaultService = "", heading }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState(defaultService);
    const [date, setDate] = useState("");
    const [slot, setSlot] = useState("");
    const [notes, setNotes] = useState("");

    useEffect(() => {
        if (open) {
            setService(defaultService || (options[0] ?? ""));
            window.__lenis?.stop();
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            window.__lenis?.start();
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }
        return () => {
            window.__lenis?.start();
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [open, defaultService, options]);

    const submit = (e) => {
        e.preventDefault();
        const msg =
            `Hello Angel The Luxury Salon & Academy! I'd like to ${mode === "academy" ? "enroll" : "book an appointment"}.\n` +
            `Name: ${name}\n` +
            (phone ? `Phone: ${phone}\n` : "") +
            `${mode === "academy" ? "Course" : "Service"}: ${service}\n` +
            (date ? `Preferred date: ${date}\n` : "") +
            (slot ? `Preferred time: ${slot}\n` : "") +
            (notes ? `Notes: ${notes}\n` : "");
        openWhatsApp(msg.trim());
        onClose();
    };

    const label = "block text-[11px] uppercase tracking-[0.2em] text-ink-mute mb-1.5";
    const field =
        "w-full rounded-xl border border-rose/25 bg-white/70 px-4 py-3 text-ink placeholder:text-ink-mute/50 outline-none focus:border-rose focus:ring-2 focus:ring-rose/20 transition";

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    data-testid="booking-modal"
                    data-lenis-prevent
                    className="fixed inset-0 z-[70] bg-plum/60 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-6"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        data-lenis-prevent
                        initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg bg-blush rounded-t-3xl sm:rounded-3xl border border-rose/25 p-6 md:p-8 max-h-[92vh] overflow-y-auto overscroll-contain"
                        style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <p className="text-[11px] uppercase tracking-[0.3em] text-rose mb-1">
                                    {heading || (mode === "academy" ? "Reserve your seat" : "Book your visit")}
                                </p>
                                <h3 className="font-display text-2xl text-ink">
                                    {mode === "academy" ? "Enroll at Angel Academy" : "Your appointment"}
                                </h3>
                            </div>
                            <button
                                data-testid="booking-modal-close" onClick={onClose} aria-label="Close booking form"
                                className="w-9 h-9 rounded-full border border-rose/30 flex items-center justify-center text-ink hover:bg-rose/10 transition"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <form onSubmit={submit} className="space-y-4" data-testid="booking-form">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={label} htmlFor="bk-name">Name</label>
                                    <input id="bk-name" required data-testid="booking-input-name" className={field} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div>
                                    <label className={label} htmlFor="bk-phone">Phone (optional)</label>
                                    <input id="bk-phone" data-testid="booking-input-phone" type="tel" className={field} placeholder="10-digit mobile" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <label className={label} htmlFor="bk-service">{mode === "academy" ? "Course" : "Service"}</label>
                                <select id="bk-service" required data-testid="booking-select-service" className={field} value={service} onChange={(e) => setService(e.target.value)}>
                                    {options.map((o) => (<option key={o} value={o}>{o}</option>))}
                                </select>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={label} htmlFor="bk-date">Preferred date</label>
                                    <input id="bk-date" data-testid="booking-input-date" type="date" className={field} value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split("T")[0]} />
                                </div>
                                <div>
                                    <label className={label} htmlFor="bk-time">Preferred time</label>
                                    <select id="bk-time" data-testid="booking-select-time" className={field} value={slot} onChange={(e) => setSlot(e.target.value)}>
                                        <option value="">Any time</option>
                                        {TIME_SLOTS.map((t) => (<option key={t} value={t}>{t}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className={label} htmlFor="bk-notes">Notes (optional)</label>
                                <textarea id="bk-notes" data-testid="booking-input-notes" rows={2} className={field} placeholder="Anything we should know?" value={notes} onChange={(e) => setNotes(e.target.value)} />
                            </div>
                            <button
                                type="submit" data-testid="whatsapp-booking-submit"
                                className="w-full flex items-center justify-center gap-2 rounded-full bg-rose hover:bg-rose-dark text-[#FFF9F7] py-4 text-[13px] tracking-[0.15em] uppercase font-medium transition-colors duration-300"
                            >
                                Send enquiry
                            </button>
                            <p className="text-center text-xs text-ink-mute font-light">
                                Sent straight to the salon on WhatsApp — no account needed.
                            </p>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

