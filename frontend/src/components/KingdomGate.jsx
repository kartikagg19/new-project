import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Sparkles, Key, ArrowRight, X } from "lucide-react";

/**
 * Royal chime sound synthesis using standard Web Audio API.
 * No external mp3 required; fails gracefully if user hasn't interacted or audio is blocked.
 */
function playRoyalChime() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        if (ctx.state === "suspended") {
            ctx.resume();
        }

        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (Royal Major Chord)
        const now = ctx.currentTime;

        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, now + i * 0.12);

            // Shimmering decay
            gain.gain.setValueAtTime(0.001, now + i * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.18, now + i * 0.12 + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 1.6);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now + i * 0.12);
            osc.stop(now + i * 0.12 + 1.7);
        });
    } catch {
        // Silently fail if browser restricts audio
    }
}

export default function KingdomGate({ isOpen, onClose }) {
    const [isOpening, setIsOpening] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsOpening(false);
            setHasTriggered(false);
            // Lock body scroll while kingdom gate is active
            document.body.style.overflow = "hidden";
            window.__lenis?.stop();
        } else {
            document.body.style.overflow = "";
            window.__lenis?.start();
        }
        return () => {
            document.body.style.overflow = "";
            window.__lenis?.start();
        };
    }, [isOpen]);

    const handleOpen = useCallback(() => {
        if (hasTriggered) return;
        setHasTriggered(true);
        setIsOpening(true);
        playRoyalChime();

        // After doors swing open and light shines, fade out and complete
        setTimeout(() => {
            onClose();
        }, 1800);
    }, [hasTriggered, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                data-testid="kingdom-gate-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0C0509] select-none"
                onClick={handleOpen}
            >
                {/* Skip button for quick navigation */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className="absolute top-6 right-6 z-50 flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF4E0]/80 hover:text-[#FFF4E0] text-[11px] uppercase tracking-[0.2em] backdrop-blur-md border border-[#E9C97E]/30 transition"
                    title="Skip intro and view website"
                >
                    <span>Enter Site</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Ambient royal glow in background */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2E1220_0%,_#150810_60%,_#0B0408_100%)] pointer-events-none"
                />

                {/* Floating golden sparkle particles */}
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#E9C97E]/15 blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#DCA9A0]/15 blur-3xl" />
                </div>

                {/* Radiant Golden Portal Glow (bursts through the opening) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={
                        isOpening
                            ? { opacity: [0, 0.9, 0.6, 0], scale: [0.7, 1.3, 1.8] }
                            : { opacity: 0.1, scale: 0.8 }
                    }
                    transition={isOpening ? { duration: 1.8, ease: "easeOut" } : { duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,_#FFF7DE_0%,_#E5B869_45%,_transparent_75%)] blur-2xl pointer-events-none"
                />

                {/* Kingdom Palace Interior (Revealed when gates swing open) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                        isOpening
                            ? { opacity: [0, 1, 1], scale: [0.92, 1, 1.05] }
                            : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none px-6"
                >
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-20 h-20 rounded-full bg-gradient-to-b from-[#FFF4D0] to-[#E5B869] flex items-center justify-center text-plum shadow-[0_0_50px_rgba(245,215,127,0.6)] mb-4"
                    >
                        <Crown className="w-10 h-10 text-plum fill-current" />
                    </motion.div>
                    <p className="text-xs uppercase tracking-[0.4em] text-[#F5D77F] font-light">
                        Welcome To
                    </p>
                    <h1 className="font-display text-4xl sm:text-6xl text-[#FFF4E0] tracking-[0.08em] font-light mt-1">
                        The Queen's Kingdom
                    </h1>
                    <p className="font-hindi text-lg text-[#E9C97E] mt-1" lang="hi">
                        एंजेल एम्पायर
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#FAF1EF]/70 font-light">
                        <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
                        <span>Entering Luxury Artistry</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
                    </div>
                </motion.div>

                {/* 3D Gate Doors Container */}
                <div
                    className="relative z-10 w-full h-full flex overflow-hidden"
                    style={{ perspective: 1400 }}
                >
                    {/* LEFT ROYAL GATE (Hinged on the far left) */}
                    <motion.div
                        initial={{ rotateY: 0 }}
                        animate={
                            isOpening
                                ? { rotateY: -58, x: "-12%", opacity: [1, 0.95, 0.75] }
                                : { rotateY: 0, x: "0%", opacity: 1 }
                        }
                        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{ originX: 0, originY: 0.5 }}
                        className="relative w-1/2 h-full bg-gradient-to-br from-[#230D1B] via-[#2F1325] to-[#180712] border-r-2 border-[#F5D77F]/60 shadow-[20px_0_60px_rgba(0,0,0,0.95)] flex flex-col justify-between p-6 md:p-12"
                    >
                        {/* Golden filigree & royal molding overlay */}
                        <div className="absolute inset-3 md:inset-6 border border-[#E9C97E]/30 rounded-l-3xl pointer-events-none">
                            <div className="absolute inset-2 border border-[#E9C97E]/20 rounded-l-2xl" />
                            {/* Royal Vertical Bars */}
                            <div className="absolute inset-x-8 inset-y-12 flex justify-around opacity-35 pointer-events-none">
                                <div className="w-[1.5px] h-full bg-gradient-to-b from-transparent via-[#E9C97E] to-transparent" />
                                <div className="w-[1.5px] h-full bg-gradient-to-b from-transparent via-[#E9C97E] to-transparent hidden sm:block" />
                                <div className="w-[1.5px] h-full bg-gradient-to-b from-transparent via-[#E9C97E] to-transparent" />
                            </div>
                        </div>

                        {/* Top Left Royal Crest Corner */}
                        <div className="relative z-10 flex items-center gap-2">
                            <Crown className="w-4 h-4 text-[#E5B869]" />
                            <span className="text-[9px] uppercase tracking-[0.35em] text-[#E5B869] font-light hidden sm:inline">
                                The Queen's Realm
                            </span>
                        </div>

                        {/* Left Antique Brass Door Handle */}
                        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-8 h-24 rounded-full border-2 border-[#E5B869]/70 flex items-center justify-center bg-gradient-to-b from-[#2E1624] to-[#1A0A14] shadow-xl">
                            <div className="w-3 h-12 rounded-full bg-gradient-to-b from-[#F5D77F] to-[#B8860B] shadow-inner" />
                        </div>

                        {/* Bottom Left Inscription */}
                        <div className="relative z-10">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#FAF1EF]/50 font-light">
                                Est. Uttam Nagar East
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT ROYAL GATE (Hinged on the far right) */}
                    <motion.div
                        initial={{ rotateY: 0 }}
                        animate={
                            isOpening
                                ? { rotateY: 58, x: "12%", opacity: [1, 0.95, 0.75] }
                                : { rotateY: 0, x: "0%", opacity: 1 }
                        }
                        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{ originX: 1, originY: 0.5 }}
                        className="relative w-1/2 h-full bg-gradient-to-bl from-[#230D1B] via-[#2F1325] to-[#180712] border-l-2 border-[#F5D77F]/60 shadow-[-20px_0_60px_rgba(0,0,0,0.95)] flex flex-col justify-between p-6 md:p-12 items-end"
                    >
                        {/* Golden filigree & royal molding overlay */}
                        <div className="absolute inset-3 md:inset-6 border border-[#E9C97E]/30 rounded-r-3xl pointer-events-none">
                            <div className="absolute inset-2 border border-[#E9C97E]/20 rounded-r-2xl" />
                            {/* Royal Vertical Bars */}
                            <div className="absolute inset-x-8 inset-y-12 flex justify-around opacity-35 pointer-events-none">
                                <div className="w-[1.5px] h-full bg-gradient-to-b from-transparent via-[#E9C97E] to-transparent" />
                                <div className="w-[1.5px] h-full bg-gradient-to-b from-transparent via-[#E9C97E] to-transparent hidden sm:block" />
                                <div className="w-[1.5px] h-full bg-gradient-to-b from-transparent via-[#E9C97E] to-transparent" />
                            </div>
                        </div>

                        {/* Top Right Royal Crest Corner */}
                        <div className="relative z-10 flex items-center gap-2">
                            <span className="text-[9px] uppercase tracking-[0.35em] text-[#E5B869] font-light hidden sm:inline">
                                Angel Empire
                            </span>
                            <Sparkles className="w-4 h-4 text-[#E5B869]" />
                        </div>

                        {/* Right Antique Brass Door Handle */}
                        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-8 h-24 rounded-full border-2 border-[#E5B869]/70 flex items-center justify-center bg-gradient-to-b from-[#2E1624] to-[#1A0A14] shadow-xl">
                            <div className="w-3 h-12 rounded-full bg-gradient-to-b from-[#F5D77F] to-[#B8860B] shadow-inner" />
                        </div>

                        {/* Bottom Right Inscription */}
                        <div className="relative z-10 text-right">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#FAF1EF]/50 font-light">
                                Bespoke Artistry
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* CENTER ROYAL SEAL & INTERACTIVE MEDALLION */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={
                        isOpening
                            ? { scale: 1.15, opacity: 0, y: -40, filter: "blur(8px)" }
                            : { scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }
                    }
                    transition={{ duration: isOpening ? 0.8 : 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute z-30 pointer-events-auto flex flex-col items-center text-center px-4 max-w-sm sm:max-w-md"
                >
                    {/* Glowing Medallion Backdrop */}
                    <div className="relative flex items-center justify-center p-8 sm:p-11 rounded-full bg-gradient-to-b from-[#2F1524]/95 via-[#1E0C17]/95 to-[#13070E]/95 border-2 border-[#F5D77F]/60 shadow-[0_0_60px_rgba(245,215,127,0.35)] backdrop-blur-xl group cursor-pointer hover:border-[#F5D77F] transition-all duration-300">
                        {/* Decorative spinning ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-1.5 rounded-full border border-dashed border-[#E5B869]/40 pointer-events-none"
                        />

                        {/* Inner Medallion Content */}
                        <div className="flex flex-col items-center">
                            <motion.div
                                animate={{ y: [0, -3, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-[#F5D77F] via-[#E5B869] to-[#9B6A1B] flex items-center justify-center shadow-lg text-[#1A0A14] mb-3"
                            >
                                <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-[#250F1D] fill-current" />
                            </motion.div>

                            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#F5D77F] font-light">
                                The Queen's Kingdom
                            </p>
                            <h2 className="font-display font-light text-2xl sm:text-3xl text-[#FFF4E0] tracking-[0.1em] mt-1">
                                Angel Empire
                            </h2>
                            <p className="font-hindi text-sm text-[#DCA9A0] mt-0.5" lang="hi">
                                एंजेल एम्पायर
                            </p>

                            <div className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F5D77F] to-[#E5B869] text-[#200C19] font-medium text-[11px] sm:text-[12px] uppercase tracking-[0.2em] shadow-lg shadow-[#F5D77F]/30 hover:scale-105 transition-transform">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>{isOpening ? "Opening Kingdom..." : "Enter The Kingdom"}</span>
                            </div>

                            <p className="text-[10px] text-[#FAF1EF]/60 tracking-wider mt-3 font-light">
                                Click or tap anywhere to unlock
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
