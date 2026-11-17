import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown } from "lucide-react";

/**
 * Royal chime synthesis using Web Audio API.
 * Elegant, subtle harmonic chime that plays as the Queen's palace gate opens.
 */
function playPalaceChime() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        if (ctx.state === "suspended") {
            ctx.resume();
        }

        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (Royal Chord)
        const now = ctx.currentTime;

        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, now + i * 0.1);

            gain.gain.setValueAtTime(0.001, now + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.12, now + i * 0.1 + 0.04);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.1 + 1.4);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now + i * 0.1);
            osc.stop(now + i * 0.1 + 1.5);
        });
    } catch {
        // Silently continue if audio is not supported
    }
}

export default function KingdomGate({ isOpen, onClose }) {
    const [isOpening, setIsOpening] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        // Auto-open directly: wait 250ms for initial render, then automatically swing doors open
        const openTimer = setTimeout(() => {
            setIsOpening(true);
            playPalaceChime();
        }, 250);

        // After doors swing open, smoothly fade out the entire gate overlay
        const closeTimer = setTimeout(() => {
            onClose();
        }, 1900);

        return () => {
            clearTimeout(openTimer);
            clearTimeout(closeTimer);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                data-testid="kingdom-gate-modal"
                initial={{ opacity: 1 }}
                animate={{ opacity: isOpening ? [1, 1, 0] : 1 }}
                transition={{ duration: 1.9, times: [0, 0.75, 1], ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0A080C] pointer-events-none select-none"
            >
                {/* Palace Arch Silhouette & Ambient Backlight */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#241C12_0%,_#120F15_65%,_#070608_100%)] pointer-events-none"
                />

                {/* Radiant 24K Gold Warm Portal Light (bursts as gates part) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                        isOpening
                            ? { opacity: [0, 0.85, 0.6, 0], scale: [0.6, 1.4, 2] }
                            : { opacity: 0.08, scale: 0.8 }
                    }
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,_#FFF2D6_0%,_#D4AF37_40%,_transparent_75%)] blur-2xl pointer-events-none"
                />

                {/* 3D Gate Doors Container */}
                <div
                    className="relative z-10 w-full h-full flex overflow-hidden"
                    style={{ perspective: 1400 }}
                >
                    {/* LEFT QUEEN'S PALACE GATE (Black Wrought-Iron with 24K Polished Gold Filigree) */}
                    <motion.div
                        initial={{ rotateY: 0 }}
                        animate={
                            isOpening
                                ? { rotateY: -65, x: "-10%", opacity: [1, 0.95, 0.7] }
                                : { rotateY: 0, x: "0%", opacity: 1 }
                        }
                        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{ originX: 0, originY: 0.5 }}
                        className="relative w-1/2 h-full bg-gradient-to-br from-[#121014] via-[#1A1720] to-[#0D0B10] border-r-2 border-[#D4AF37] shadow-[25px_0_60px_rgba(0,0,0,0.95)] flex flex-col justify-between p-6 md:p-14"
                    >
                        {/* Top Gold Spearhead Finials Railing (Queen's Castle style) */}
                        <div className="absolute top-0 inset-x-0 h-16 border-b-2 border-[#D4AF37]/60 flex justify-around items-end pb-2 px-6">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    {/* Gold Fleur-de-lis / Spear Finial */}
                                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[16px] border-b-[#E5C158] drop-shadow-[0_0_6px_rgba(212,175,55,0.8)]" />
                                    <div className="w-1.5 h-6 bg-gradient-to-b from-[#E5C158] to-[#997A24]" />
                                </div>
                            ))}
                        </div>

                        {/* Ornate Gold Filigree & Baroque Scrollwork Molding */}
                        <div className="absolute inset-4 md:inset-8 top-20 border-2 border-[#D4AF37]/50 rounded-tl-3xl pointer-events-none">
                            <div className="absolute inset-2 border border-[#D4AF37]/25 rounded-tl-2xl" />

                            {/* Baroque Gold Corner Filigree */}
                            <div className="absolute top-3 left-3 w-16 h-16 border-t-2 border-l-2 border-[#E5C158] rounded-tl-xl pointer-events-none opacity-80" />
                            <div className="absolute bottom-3 left-3 w-16 h-16 border-b-2 border-l-2 border-[#E5C158] rounded-bl-xl pointer-events-none opacity-80" />

                            {/* Heavy Palace Vertical Iron Bars with Gold Collars */}
                            <div className="absolute inset-x-8 inset-y-8 flex justify-around opacity-40 pointer-events-none">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="relative w-[2px] h-full bg-gradient-to-b from-[#D4AF37] via-[#2A2430] to-[#D4AF37]">
                                        <div className="absolute top-1/3 -left-1 w-2.5 h-1.5 rounded-sm bg-[#E5C158]" />
                                        <div className="absolute top-2/3 -left-1 w-2.5 h-1.5 rounded-sm bg-[#E5C158]" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Left Queen's Inscription */}
                        <div className="relative z-10 top-16 flex items-center gap-2">
                            <Crown className="w-5 h-5 text-[#E5C158]" />
                            <span className="text-[10px] uppercase tracking-[0.35em] text-[#E5C158] font-light">
                                Queen's Palace
                            </span>
                        </div>

                        {/* Left Heavy 24K Gold Antique Door Handle */}
                        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-9 h-28 rounded-full border-2 border-[#E5C158] flex items-center justify-center bg-gradient-to-b from-[#1C1820] to-[#0E0C10] shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                            <div className="w-3.5 h-16 rounded-full bg-gradient-to-b from-[#FFF2B8] via-[#D4AF37] to-[#8C6B1B] shadow-inner" />
                        </div>

                        {/* Bottom Left Inscription */}
                        <div className="relative z-10">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#E5C158]/60 font-light">
                                Angel Empire
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT QUEEN'S PALACE GATE (Black Wrought-Iron with 24K Polished Gold Filigree) */}
                    <motion.div
                        initial={{ rotateY: 0 }}
                        animate={
                            isOpening
                                ? { rotateY: 65, x: "10%", opacity: [1, 0.95, 0.7] }
                                : { rotateY: 0, x: "0%", opacity: 1 }
                        }
                        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{ originX: 1, originY: 0.5 }}
                        className="relative w-1/2 h-full bg-gradient-to-bl from-[#121014] via-[#1A1720] to-[#0D0B10] border-l-2 border-[#D4AF37] shadow-[-25px_0_60px_rgba(0,0,0,0.95)] flex flex-col justify-between p-6 md:p-14 items-end"
                    >
                        {/* Top Gold Spearhead Finials Railing */}
                        <div className="absolute top-0 inset-x-0 h-16 border-b-2 border-[#D4AF37]/60 flex justify-around items-end pb-2 px-6">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[16px] border-b-[#E5C158] drop-shadow-[0_0_6px_rgba(212,175,55,0.8)]" />
                                    <div className="w-1.5 h-6 bg-gradient-to-b from-[#E5C158] to-[#997A24]" />
                                </div>
                            ))}
                        </div>

                        {/* Ornate Gold Filigree & Baroque Scrollwork Molding */}
                        <div className="absolute inset-4 md:inset-8 top-20 border-2 border-[#D4AF37]/50 rounded-tr-3xl pointer-events-none">
                            <div className="absolute inset-2 border border-[#D4AF37]/25 rounded-tr-2xl" />

                            {/* Baroque Gold Corner Filigree */}
                            <div className="absolute top-3 right-3 w-16 h-16 border-t-2 border-r-2 border-[#E5C158] rounded-tr-xl pointer-events-none opacity-80" />
                            <div className="absolute bottom-3 right-3 w-16 h-16 border-b-2 border-r-2 border-[#E5C158] rounded-br-xl pointer-events-none opacity-80" />

                            {/* Heavy Palace Vertical Iron Bars with Gold Collars */}
                            <div className="absolute inset-x-8 inset-y-8 flex justify-around opacity-40 pointer-events-none">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="relative w-[2px] h-full bg-gradient-to-b from-[#D4AF37] via-[#2A2430] to-[#D4AF37]">
                                        <div className="absolute top-1/3 -left-1 w-2.5 h-1.5 rounded-sm bg-[#E5C158]" />
                                        <div className="absolute top-2/3 -left-1 w-2.5 h-1.5 rounded-sm bg-[#E5C158]" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Right Royal Inscription */}
                        <div className="relative z-10 top-16 flex items-center gap-2">
                            <span className="text-[10px] uppercase tracking-[0.35em] text-[#E5C158] font-light">
                                Delhi's Realm
                            </span>
                            <Crown className="w-5 h-5 text-[#E5C158]" />
                        </div>

                        {/* Right Heavy 24K Gold Antique Door Handle */}
                        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-9 h-28 rounded-full border-2 border-[#E5C158] flex items-center justify-center bg-gradient-to-b from-[#1C1820] to-[#0E0C10] shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                            <div className="w-3.5 h-16 rounded-full bg-gradient-to-b from-[#FFF2B8] via-[#D4AF37] to-[#8C6B1B] shadow-inner" />
                        </div>

                        {/* Bottom Right Inscription */}
                        <div className="relative z-10 text-right">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#E5C158]/60 font-light">
                                Royal Salon &amp; Academy
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* CENTER QUEEN'S ROYAL CREST (Parting as doors swing open) */}
                <motion.div
                    initial={{ scale: 1, opacity: 1 }}
                    animate={
                        isOpening
                            ? { scale: 1.15, opacity: 0, y: -40, filter: "blur(6px)" }
                            : { scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }
                    }
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute z-30 pointer-events-none flex flex-col items-center text-center px-4"
                >
                    <div className="relative flex items-center justify-center p-8 sm:p-10 rounded-full bg-gradient-to-b from-[#1C1820]/95 to-[#0E0C10]/95 border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-[#FFF0BA] via-[#D4AF37] to-[#8F6C1A] flex items-center justify-center shadow-lg text-[#16121B] mb-2.5">
                                <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-[#16121B] fill-current" />
                            </div>
                            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-[#E5C158] font-light">
                                Queen's House
                            </p>
                            <h2 className="font-display font-light text-2xl sm:text-3xl text-[#FFF6E5] tracking-[0.12em] mt-0.5">
                                Angel Empire
                            </h2>
                            <p className="font-hindi text-sm text-[#D4AF37] mt-0.5" lang="hi">
                                एंजेल एम्पायर
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
