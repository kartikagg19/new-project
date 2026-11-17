import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Crown, Sparkles, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KingdomGate from "@/components/KingdomGate";
import { Lines, Eyebrow, Reveal } from "@/components/Reveal";
import { BUSINESS, IMAGES } from "@/data/content";
import { openWhatsApp } from "@/lib/scroll";

const HERO_LINES = ["Angel", { t: "Empire", c: "italic text-rgold" }];

const GATES = [
    {
        to: "/salon",
        img: IMAGES.studio,
        kicker: "For your glow",
        title: "The Salon",
        cta: "Enter the salon",
        testid: "gateway-card-the-salon",
    },
    {
        to: "/academy",
        img: IMAGES.academyCard,
        kicker: "For your career",
        title: "The Academy",
        cta: "Enter the academy",
        testid: "gateway-card-the-academy",
    },
];

export default function Landing() {
    const [productOpen, setProductOpen] = useState(false);
    const [gateOpen, setGateOpen] = useState(() => {
        try {
            return sessionStorage.getItem("ae_kingdom_gate_seen") !== "true";
        } catch {
            return true;
        }
    });

    const handleCloseGate = () => {
        setGateOpen(false);
        try {
            sessionStorage.setItem("ae_kingdom_gate_seen", "true");
        } catch {
            // ignore storage restrictions
        }
    };

    return (
        <div className="min-h-screen text-ink">
            <div className="grain" />

            {/* Queen's Kingdom Royal Gate Opening Intro */}
            <KingdomGate isOpen={gateOpen} onClose={handleCloseGate} />

            <Navbar
                variant="landing"
                bookLabel="Book"
                onBook={() => openWhatsApp("Hello Angel Empire! I'd like to book an appointment.")}
            />

            <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24" data-testid="landing-hero">
                <div aria-hidden="true" className="absolute -top-24 -left-32 w-[480px] h-[480px] rounded-full bg-[#E9C97E]/35 blur-3xl animate-floaty" />
                <div aria-hidden="true" className="absolute top-48 right-0 w-[420px] h-[420px] rounded-full bg-[#DCA9A0]/35 blur-3xl" />
                
                <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
                    {/* Left Column: Brand Story & Typography */}
                    <div>
                        <Eyebrow>Uttam Nagar East · New Delhi</Eyebrow>
                        <Lines
                            as="h1" delay={0.15}
                            className="mt-6 font-display font-light tracking-tight leading-[0.98] text-[clamp(3.8rem,9.5vw,8.5rem)]"
                            lines={HERO_LINES}
                        />
                        <Lines
                            as="p" delay={0.5}
                            className="mt-2 font-display text-xl md:text-3xl text-ink-soft tracking-[0.08em]"
                            lines={["Salon & Academy"]}
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.75, duration: 0.8 }}
                            className="font-hindi text-lg text-ink-mute mt-4" lang="hi"
                        >
                            {BUSINESS.hindiName}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.85, duration: 0.8 }}
                            className="mt-5 max-w-lg text-ink-soft font-light leading-relaxed"
                        >
                            A women-owned luxury unisex salon and professional beauty academy.
                            Step into Delhi's premier kingdom of bespoke hair artistry, couture rituals, and mastery.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.95, duration: 0.8 }}
                            className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3"
                        >
                            <span className="text-[#B76E79] tracking-[0.2em]">★★★★★</span>
                            <span className="text-sm text-ink-soft font-light">
                                {BUSINESS.rating} rated · {BUSINESS.reviewCount} Google reviews
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                                Women-owned · LGBTQ+ friendly
                            </span>
                        </motion.div>

                        {/* Interactive Buttons: Enter Queen's Kingdom Gate & Salon */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.05, duration: 0.8 }}
                            className="mt-8 flex flex-wrap items-center gap-4"
                        >
                            <button
                                data-testid="btn-open-kingdom-gate"
                                onClick={() => setGateOpen(true)}
                                className="group inline-flex items-center gap-2.5 rounded-full bg-plum hover:bg-plum/90 text-[#FFF9F7] px-6 py-3.5 text-[12px] uppercase tracking-[0.2em] shadow-xl shadow-plum/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                <Crown className="w-4 h-4 text-[#F5D77F] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                <span>The Queen's Kingdom</span>
                                <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]/90" />
                            </button>

                            <Link
                                to="/salon"
                                className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-white/60 hover:bg-white/90 backdrop-blur-sm px-6 py-3.5 text-[12px] uppercase tracking-[0.2em] text-ink transition-all hover:border-rose shadow-sm"
                            >
                                <span>Explore Salon</span>
                                <ArrowUpRight className="w-4 h-4 text-rose" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Editorial Model Portrait with Golden Aura */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 25 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative mx-auto w-full max-w-md lg:max-w-none mt-4 lg:mt-0"
                    >
                        {/* Golden backdrop lighting glow */}
                        <div aria-hidden="true" className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#E9C97E]/30 via-[#DCA9A0]/25 to-transparent blur-3xl pointer-events-none" />
                        <div aria-hidden="true" className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-[#B76E79]/20 blur-3xl pointer-events-none" />

                        {/* Arched Luxury Container */}
                        <div className="relative arch overflow-hidden border border-rose/30 shadow-[0_30px_70px_-15px_rgba(74,38,50,0.25)] bg-gradient-to-b from-[#FAF1EF] to-[#EBD9D5]">
                            <img
                                src={IMAGES.modelHero.src}
                                alt="Angel Empire Signature Style - Luxury Hair & Bridal Artistry"
                                className="w-full h-[470px] sm:h-[540px] md:h-[600px] object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-[1.2s] ease-out hover:scale-105"
                            />
                            {/* Soft romantic gradient blend at the bottom */}
                            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-plum/95 via-plum/45 to-transparent pointer-events-none" />

                            {/* Top Floating Royal Seal */}
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-plum/90 backdrop-blur-md border border-[#E9C97E]/40 text-[#FFF9F7] shadow-xl whitespace-nowrap">
                                <Crown className="w-3.5 h-3.5 text-[#F5D77F]" />
                                <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#FFF4E0]">The Queen's Realm</span>
                            </div>

                            {/* Bottom Glassmorphic Editorial Card */}
                            <div className="absolute inset-x-5 sm:inset-x-7 bottom-6 p-4 sm:p-5 rounded-2xl bg-plum/90 backdrop-blur-md border border-rose/25 text-[#FFF9F7] shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#E5B869] font-light">Haute Artistry</p>
                                        <p className="font-display text-lg sm:text-xl text-[#FFF4E0] font-light mt-0.5">Signature Curls &amp; Glow</p>
                                    </div>
                                    <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#F5D77F]">
                                        <Sparkles className="w-4 h-4" />
                                    </span>
                                </div>
                                <p className="text-[11px] sm:text-xs text-[#FAF1EF]/75 font-light mt-2 leading-relaxed">
                                    Bespoke styling and transformative beauty crafted exclusively for your crown at Angel Empire.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="pb-20 md:pb-28" data-testid="gateway-section">
                <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-3 gap-5">
                    {GATES.map((gate, i) => (
                        <Reveal key={gate.title} delay={i * 0.12}>
                            <Link
                                to={gate.to}
                                data-testid={gate.testid}
                                className="group relative block overflow-hidden rounded-[1.6rem] border border-rose/20 h-[420px] md:h-[520px]"
                            >
                                <img
                                    src={gate.img.src} alt={gate.img.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-plum/95 via-plum/35 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-rose-mist mb-3">{gate.kicker}</p>
                                    <h3 className="font-display text-3xl text-[#FAF1EF] font-light">{gate.title}</h3>
                                    <span className="mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-rose-bright">
                                        {gate.cta}
                                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </span>
                                </div>
                            </Link>
                        </Reveal>
                    ))}

                    <Reveal delay={0.24}>
                        <button
                            data-testid="btn-product-coming-soon"
                            onClick={() => setProductOpen(true)}
                            className="group relative block w-full overflow-hidden rounded-[1.6rem] border border-rose/20 h-[420px] md:h-[520px] text-left"
                        >
                            <img
                                src={IMAGES.productLine.src} alt="Angel Empire luxury product line"
                                className="absolute inset-0 w-full h-full object-cover opacity-75 transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-plum/95 via-plum/50 to-plum/30" />
                            <span className="absolute top-5 right-5 rounded-full bg-rose text-[#FFF9F7] px-4 py-1.5 text-[10px] uppercase tracking-[0.25em]">
                                Coming soon
                            </span>
                            <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-rose-mist mb-3">For your shelf</p>
                                <h3 className="font-display text-3xl text-[#FAF1EF] font-light">The Product Line</h3>
                                <span className="mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-rose-bright">
                                    Join the waitlist
                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </span>
                            </div>
                        </button>
                    </Reveal>
                </div>
            </section>

            <Footer />

            <AnimatePresence>
                {productOpen && (
                    <motion.div
                        data-testid="product-coming-soon-modal"
                        className="fixed inset-0 z-[70] bg-plum/70 backdrop-blur-md flex items-center justify-center p-5"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setProductOpen(false)}
                    >
                        <motion.div
                            initial={{ y: 60, opacity: 0, scale: 0.97 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 60, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-md rounded-[1.6rem] bg-blush border border-rose/25 p-8 text-center"
                        >
                            <button
                                data-testid="product-modal-close"
                                onClick={() => setProductOpen(false)} aria-label="Close"
                                className="absolute top-4 right-4 w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center hover:border-rose hover:text-rose transition"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <p className="text-[11px] uppercase tracking-[0.3em] text-rose">The Product Line</p>
                            <h3 className="mt-3 font-display text-3xl font-light">
                                Something <span className="italic text-rgold">beautiful</span> is coming
                            </h3>
                            <p className="mt-3 text-sm text-ink-soft font-light leading-relaxed">
                                The Angel Empire signature product line — organic haircare &amp; cosmetics —
                                launches soon. Join the VIP waitlist and be the first to know.
                            </p>
                            <button
                                data-testid="product-waitlist-cta"
                                onClick={() => { setProductOpen(false); openWhatsApp("Hi Angel Empire! I'd like to join the VIP waitlist for your upcoming product line."); }}
                                className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-rose hover:bg-rose-dark px-6 py-4 text-[13px] tracking-[0.15em] uppercase text-[#FFF9F7] transition-colors"
                            >
                                Join the waitlist <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
