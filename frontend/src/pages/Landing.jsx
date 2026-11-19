import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MapPin, Award, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingFlow from "@/components/BookingFlow";
import { Reveal } from "@/components/Reveal";
import { BUSINESS, IMAGES } from "@/data/content";
import { openWhatsApp } from "@/lib/scroll";

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
    const [bookingOpen, setBookingOpen] = useState(false);

    return (
        <div className="min-h-screen text-ink">
            <div className="grain" />

            <Navbar
                variant="landing"
                bookLabel="Book"
                onBook={() => setBookingOpen(true)}
            />

            {/* Hero Section with Award Photo at Top & Salon Name Underneath */}
            <section className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24" data-testid="landing-hero">
                {/* Ambient Soft Rose-Gold Glows */}
                <div aria-hidden="true" className="absolute -top-24 -left-32 w-[500px] h-[500px] rounded-full bg-[#E9C97E]/25 blur-3xl animate-floaty pointer-events-none" />
                <div aria-hidden="true" className="absolute top-48 -right-20 w-[450px] h-[450px] rounded-full bg-[#DCA9A0]/25 blur-3xl pointer-events-none" />

                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
                    {/* Top Award Badge */}
                    <div className="flex justify-center mb-6">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A141C] text-[#FAF1EF] border border-[#E9C97E]/40 shadow-lg text-[11px] sm:text-xs uppercase tracking-[0.25em]"
                        >
                            <Award className="w-4 h-4 text-[#F5D77F]" />
                            <span className="text-[#FFF4E0] font-medium">National Business Award Winner (MBA 2023)</span>
                            <span className="hidden sm:inline text-white/50">· Presented by Malaika Arora</span>
                        </motion.div>
                    </div>

                    {/* HD Award Photo Prominently at the Top */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative mx-auto max-w-4xl rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden border border-rose/30 shadow-[0_25px_60px_-15px_rgba(74,38,50,0.25)] bg-[#1A131B]"
                    >
                        <img
                            src={IMAGES.awardHero.src}
                            alt="Malaika Arora presenting MBA 2023 Award to the founders of Angel The Luxury Salon & Academy"
                            className="w-full h-auto object-cover max-h-[460px] sm:max-h-[520px] md:max-h-[580px] filter brightness-[1.02] contrast-[1.02]"
                        />
                        {/* Elegant subtle bottom vignette */}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1A131B]/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 right-4 sm:right-6 px-3.5 py-1 rounded-full bg-[#1A131B]/80 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs text-[#FFF4E0] tracking-wide">
                            Award Ceremony · MBA 2023
                        </div>
                    </motion.div>

                    {/* Under Image: Salon Name & Details */}
                    <div className="mt-10 md:mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-rose font-medium">
                            Uttam Nagar West · New Delhi · 3 Outlets
                        </p>

                        <h1 className="mt-3 font-display font-light tracking-tight leading-[1.02] text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-ink">
                            Angel <span className="italic text-rgold">The Luxury Salon</span>
                        </h1>

                        <p className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl text-ink-soft tracking-[0.08em]">
                            Salon &amp; Academy
                        </p>

                        {/* Rating Row */}
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
                            <span className="text-[#B76E79] tracking-[0.2em]">★★★★★</span>
                            <span className="text-sm text-ink-soft font-light">
                                {BUSINESS.rating} rated · {BUSINESS.reviewCount} Google reviews
                            </span>
                            <span className="text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                                Women-owned · Unisex Salon
                            </span>
                        </div>

                        {/* Direct Action Buttons */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <Link
                                to="/salon"
                                className="inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-dark px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] text-[#FFF9F7] shadow-lg shadow-rose/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span>Explore Salon</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>

                            <button
                                onClick={() => setBookingOpen(true)}
                                className="inline-flex items-center gap-2 rounded-full border border-ink/25 hover:border-ink/60 bg-white/70 hover:bg-white backdrop-blur-sm px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] text-ink transition-all shadow-sm"
                            >
                                <span>Book Online</span>
                                <ArrowUpRight className="w-4 h-4 text-ink-mute" />
                            </button>

                            <a
                                href="/salon#outlets"
                                className="inline-flex items-center gap-2 rounded-full border border-rose/30 hover:border-rose bg-white/40 hover:bg-white/80 backdrop-blur-sm px-6 py-3.5 text-[12px] uppercase tracking-[0.18em] text-ink transition-all"
                            >
                                <MapPin className="w-4 h-4 text-rose" />
                                <span>Our 3 Outlets</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gateway Cards */}
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
                                src={IMAGES.productLine.src} alt="Angel The Luxury Salon product line"
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

            <BookingFlow open={bookingOpen} onClose={() => setBookingOpen(false)} />

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
                                The Angel signature product line — organic haircare &amp; cosmetics —
                                launches soon. Join the VIP waitlist and be the first to know.
                            </p>
                            <button
                                data-testid="product-waitlist-cta"
                                onClick={() => { setProductOpen(false); openWhatsApp("Hi Angel The Luxury Salon! I'd like to join the VIP waitlist for your upcoming product line."); }}
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

