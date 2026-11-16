import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
        img: IMAGES.lounge,
        kicker: "For your career",
        title: "The Academy",
        cta: "Enter the academy",
        testid: "gateway-card-the-academy",
    },
];

export default function Landing() {
    const [productOpen, setProductOpen] = useState(false);

    return (
        <div className="min-h-screen text-ink">
            <div className="grain" />
            <Navbar
                variant="landing"
                bookLabel="Book"
                onBook={() => openWhatsApp("Hello Angel Empire! I'd like to book an appointment.")}
            />

            <section className="relative overflow-hidden pt-32 md:pt-44 pb-14 md:pb-20" data-testid="landing-hero">
                <div aria-hidden="true" className="absolute -top-24 -left-32 w-[480px] h-[480px] rounded-full bg-[#E9C97E]/35 blur-3xl animate-floaty" />
                <div aria-hidden="true" className="absolute top-48 right-0 w-[380px] h-[380px] rounded-full bg-[#DCA9A0]/30 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-5 md:px-8">
                    <Eyebrow>Uttam Nagar East · New Delhi</Eyebrow>
                    <Lines
                        as="h1" delay={0.15}
                        className="mt-7 font-display font-light tracking-tight leading-[0.98] text-[clamp(4rem,11vw,9.5rem)]"
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
                        className="font-hindi text-lg text-ink-mute mt-5" lang="hi"
                    >
                        {BUSINESS.hindiName}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.85, duration: 0.8 }}
                        className="mt-5 max-w-lg text-ink-soft font-light leading-relaxed"
                    >
                        A women-owned luxury unisex salon and professional beauty academy.
                        Choose your world below.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3"
                    >
                        <span className="text-[#B76E79] tracking-[0.2em]">★★★★★</span>
                        <span className="text-sm text-ink-soft font-light">
                            {BUSINESS.rating} rated · {BUSINESS.reviewCount} Google reviews
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                            Women-owned · LGBTQ+ friendly
                        </span>
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
                                src={IMAGES.reception.src} alt="Angel Empire reception"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[1.2s] ease-out group-hover:scale-110"
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
