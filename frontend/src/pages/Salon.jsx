import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin, Clock, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageMarquee } from "@/components/Marquee";
import { Lines, Eyebrow, Reveal } from "@/components/Reveal";
import BookingFlow from "@/components/BookingFlow";
import MobileBottomBar from "@/components/MobileBottomBar";
import Lightbox from "@/components/Lightbox";
import { BUSINESS, IMAGES, REVIEWS, REVIEW_QUOTES, REVIEW_TAGS } from "@/data/content";
import { openWhatsApp } from "@/lib/scroll";

const PHOTOS = Object.values(IMAGES);
const HERO_LINES = ["Refined.", { t: "Radiant.", c: "italic text-rgold" }, "Yours."];
const HERO_LINES_LIGHT = ["Refined.", { t: "Radiant.", c: "italic text-[#F3D9D2]" }, "Yours."];

export default function Salon() {
    const [booking, setBooking] = useState(false);
    const [shot, setShot] = useState(null);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const yImg = useTransform(scrollYProgress, [0, 1], [0, 70]);

    const wa = (e) => {
        e.preventDefault();
        openWhatsApp("Hello Angel Empire! I'd like to book an appointment at the salon.");
    };

    return (
        <div className="min-h-screen text-ink">
            <div className="grain" />
            <Navbar variant="salon" bookLabel="Book" onBook={() => setBooking(true)} />

            <section ref={heroRef} className="relative overflow-hidden pt-28 md:pt-36 pb-16" data-testid="salon-hero">
                <div aria-hidden="true" className="absolute -top-20 -left-24 w-[420px] h-[420px] rounded-full bg-[#E9C97E]/30 blur-3xl animate-floaty" />
                <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
                    <div>
                        <Eyebrow>Unisex Salon · Uttam Nagar East · New Delhi</Eyebrow>
                        <Lines
                            as="h1" delay={0.15}
                            className="mt-7 font-display font-light tracking-tight leading-[1.02] text-[clamp(3.2rem,7.5vw,6rem)]"
                            lines={HERO_LINES}
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="mt-7 max-w-md text-ink-soft font-light leading-relaxed"
                        >
                            Delhi's beloved luxury unisex salon &amp; academy — crafting bespoke
                            rituals for hair, skin, nails and bridal artistry in Uttam Nagar.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.85, duration: 0.8 }}
                            className="mt-9 flex flex-wrap gap-4"
                        >
                            <button
                                data-testid="salon-hero-book-online"
                                onClick={() => setBooking(true)}
                                className="inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-dark text-[#FFF9F7] px-7 py-4 text-[13px] tracking-[0.15em] uppercase transition-colors duration-300"
                            >
                                Book online <ArrowUpRight className="w-4 h-4" />
                            </button>
                            <a
                                href="#" onClick={wa} data-testid="salon-hero-book-whatsapp"
                                className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-7 py-4 text-[13px] tracking-[0.15em] uppercase hover:border-rose hover:text-rose transition-colors duration-300"
                            >
                                Reserve via WhatsApp
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="mt-11 flex gap-12"
                        >
                            <div>
                                <p className="font-display text-3xl">4.7 <span className="text-rose text-xl">★</span></p>
                                <p className="mt-1 text-[10px] tracking-[0.25em] uppercase text-ink-mute">Rated on Google</p>
                            </div>
                            <div>
                                <p className="font-display text-3xl">126</p>
                                <p className="mt-1 text-[10px] tracking-[0.25em] uppercase text-ink-mute">Reviews</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div style={{ y: yImg }} className="relative pb-10 lg:pb-0">
                        <div aria-hidden="true" className="absolute -top-8 -right-8 w-72 h-72 rounded-full bg-[#E9C97E]/50 blur-3xl animate-floaty" />
                        <div aria-hidden="true" className="absolute -bottom-16 -left-8 w-64 h-64 rounded-full bg-[#DCA9A0]/45 blur-3xl animate-floaty [animation-delay:2s]" />
                        <motion.div
                            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <div className="relative rounded-[1.8rem] overflow-hidden border border-rose/25 shadow-2xl shadow-rose/15">
                                <img
                                    src={IMAGES.studio.src} alt="Angel Empire gold styling studio"
                                    className="w-full h-[440px] md:h-[580px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-plum/15 to-transparent" />
                                <span className="absolute top-4 left-4 rounded-full bg-plum/85 backdrop-blur text-[#F3D9D2] px-4 py-1.5 text-[10px] tracking-[0.25em] uppercase">
                                    Angel Empire
                                </span>
                                <span className="absolute top-4 right-4 rounded-full bg-blush-card/95 text-ink px-3.5 py-1.5 text-xs font-medium tracking-wide">
                                    ★★★★★ 4.7
                                </span>
                                <div className="absolute bottom-7 left-7 font-display font-light text-[#FAF1EF] text-4xl md:text-5xl leading-[1.05]">
                                    <Lines lines={HERO_LINES_LIGHT} delay={0.7} />
                                </div>
                            </div>
                            <div className="absolute -bottom-8 -right-2 md:-right-6 w-32 md:w-36" data-testid="owner-portrait-placeholder">
                                <div className="arch relative overflow-hidden border border-rose/40 bg-gradient-to-b from-blush-card to-blush-deep shadow-xl">
                                    <div className="aspect-[3/4] flex flex-col items-center justify-center px-3 text-center gap-1.5">
                                        <p className="font-display italic text-lg text-ink">The Founder</p>
                                        <p className="text-[9px] uppercase tracking-[0.22em] text-rose">Photo reserved</p>
                                    </div>
                                    <div className="shimmer-sweep" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Reveal>
                <div className="border-y border-rose/20 py-6" data-testid="salon-offers-strip">
                    <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-center">
                        <span className="font-display italic text-lg text-ink">Hair extensions from ₹7,000</span>
                        <span className="w-1 h-1 rounded-full bg-rose hidden sm:block" />
                        <span className="font-display italic text-lg text-ink">Smoothening keratin free with every set</span>
                        <span className="w-1 h-1 rounded-full bg-rose hidden sm:block" />
                        <span className="font-display italic text-lg text-rose">First 10 clients — complimentary Hydra Facial</span>
                    </div>
                </div>
            </Reveal>

            <div className="py-10">
                <ImageMarquee />
            </div>

            <section id="gallery" className="py-16 md:py-24 scroll-mt-24" data-testid="salon-gallery">
                <div className="mx-auto max-w-7xl px-5 md:px-8">
                    <Reveal className="flex flex-wrap items-end justify-between gap-6">
                        <div className="max-w-xl">
                            <Eyebrow>The studio</Eyebrow>
                            <h2 className="mt-5 font-display font-light text-4xl md:text-5xl tracking-tight leading-tight">
                                Inside the <span className="italic text-rgold">studio</span>
                            </h2>
                        </div>
                        <p className="text-sm text-ink-mute font-light max-w-xs">
                            Every corner designed for calm — arched mirrors, gold accents and quiet luxury.
                        </p>
                    </Reveal>

                    <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {PHOTOS.map((p, i) => (
                            <Reveal key={p.title} delay={(i % 4) * 0.08} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                                <button
                                    data-testid={`salon-interior-image-${i + 1}`}
                                    onClick={() => setShot(i)}
                                    className={`group relative block w-full overflow-hidden rounded-[1.4rem] border border-rose/20 ${
                                        i === 0 ? "h-72 md:h-[560px]" : "h-40 md:h-[272px]"
                                    }`}
                                >
                                    <img
                                        src={p.src} alt={p.title} loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-[1.1s] group-hover:scale-110"
                                    />
                                    <span className="absolute inset-0 bg-gradient-to-t from-plum/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <span className="absolute bottom-3 left-4 text-xs uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {p.title}
                                    </span>
                                </button>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section id="reviews" className="pb-16 md:pb-24 scroll-mt-24" data-testid="salon-reviews">
                <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
                    <Reveal>
                        <div className="lg:sticky lg:top-28 rounded-[1.8rem] border border-rose/20 bg-blush-card p-8 md:p-10">
                            <Eyebrow>Loved by Delhi</Eyebrow>
                            <p className="mt-6 font-display text-7xl text-rgold">{BUSINESS.rating}</p>
                            <p className="text-rose-bright tracking-[0.2em] mt-2">★★★★★</p>
                            <p className="mt-3 text-sm text-ink-mute font-light">
                                {BUSINESS.reviewCount} Google reviews
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {REVIEW_TAGS.map((t) => (
                                    <span key={t} className="rounded-full border border-rose/25 px-3.5 py-1.5 text-xs text-ink-soft">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={BUSINESS.mapLink} target="_blank" rel="noreferrer"
                                data-testid="reviews-google-cta"
                                className="mt-8 inline-flex items-center gap-2 text-sm text-rose hover:text-rose-dark transition-colors"
                            >
                                Read all reviews on Google <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </Reveal>

                    <div className="space-y-5">
                        {REVIEWS.map((r, i) => (
                            <Reveal key={r.name} delay={i * 0.1}>
                                <article className="rounded-[1.6rem] border border-rose/20 bg-blush-card p-7" data-testid={`review-card-${i + 1}`}>
                                    <p className="font-display text-lg leading-relaxed text-ink">{r.text}</p>
                                    <div className="mt-5 flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-medium tracking-wide">{r.name}</p>
                                            <p className="text-xs text-ink-mute mt-0.5">{r.meta}</p>
                                        </div>
                                        <span className="text-rose-bright text-sm tracking-[0.15em]">★★★★★</span>
                                    </div>
                                    {r.ownerReply && (
                                        <div className="mt-5 rounded-2xl bg-blush-soft/70 border border-rose/15 p-4">
                                            <p className="text-[10px] uppercase tracking-[0.25em] text-rose mb-1.5">Response from the owner</p>
                                            <p className="text-sm text-ink-soft font-light">{r.ownerReply}</p>
                                        </div>
                                    )}
                                </article>
                            </Reveal>
                        ))}

                        <Reveal delay={0.2}>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {REVIEW_QUOTES.map((q, i) => (
                                    <div key={i} className="rounded-[1.4rem] border border-rose/20 p-5">
                                        <p className="font-display italic text-[15px] leading-relaxed text-ink-soft">“{q}”</p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section id="visit" className="pb-20 md:pb-28 scroll-mt-24" data-testid="salon-visit">
                <div className="mx-auto max-w-7xl px-5 md:px-8">
                    <Reveal>
                        <div className="rounded-[2rem] border border-rose/20 bg-blush-card overflow-hidden grid lg:grid-cols-2">
                            <div className="p-8 md:p-12">
                                <Eyebrow>Visit us</Eyebrow>
                                <h2 className="mt-5 font-display font-light text-3xl md:text-4xl leading-tight">
                                    Find your way to <span className="italic text-rgold">the empire</span>
                                </h2>
                                <ul className="mt-8 space-y-5 text-sm">
                                    <li className="flex gap-3.5">
                                        <MapPin className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                                        <span className="text-ink-soft font-light">{BUSINESS.address}<br />
                                            <span className="text-ink-mute text-xs">Plus code: {BUSINESS.plusCode} · Near Grover Sweets</span>
                                        </span>
                                    </li>
                                    <li className="flex gap-3.5">
                                        <Clock className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                                        <span className="text-ink-soft font-light">{BUSINESS.hours}</span>
                                    </li>
                                    <li className="flex gap-3.5">
                                        <Phone className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                                        <a href={`tel:+${BUSINESS.phoneRaw}`} className="text-ink-soft font-light link-underline">{BUSINESS.phoneDisplay}</a>
                                    </li>
                                </ul>
                                <div className="mt-8 flex flex-wrap gap-2.5">
                                    {BUSINESS.badges.map((b) => (
                                        <span key={b} className="rounded-full border border-rose/25 px-4 py-2 text-xs text-rose-dark">
                                            {b}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-9 flex flex-wrap gap-4">
                                    <button
                                        data-testid="visit-book-cta"
                                        onClick={() => setBooking(true)}
                                        className="inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-dark text-[#FFF9F7] px-6 py-3.5 text-[13px] tracking-[0.15em] uppercase transition-colors duration-300"
                                    >
                                        Book a visit
                                    </button>
                                    <a
                                        href={BUSINESS.mapDirections} target="_blank" rel="noreferrer"
                                        data-testid="visit-directions-cta"
                                        className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 text-[13px] tracking-[0.15em] uppercase hover:border-rose hover:text-rose transition-colors duration-300"
                                    >
                                        Get directions <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                            <div className="relative min-h-[320px] lg:min-h-0">
                                <iframe
                                    title="Angel Empire Salon & Academy on Google Maps"
                                    src={BUSINESS.mapEmbed}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                    data-testid="google-maps-embed"
                                    className="absolute inset-0 w-full h-full border-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-blush-card via-transparent to-transparent hidden lg:block pointer-events-none" />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
            <div className="h-16 md:hidden" />
            <MobileBottomBar onBook={() => setBooking(true)} />
            <BookingFlow open={booking} onClose={() => setBooking(false)} />
            <Lightbox
                photos={PHOTOS}
                index={shot}
                onClose={() => setShot(null)}
                onNavigate={(d) => setShot((s) => (s + d + PHOTOS.length) % PHOTOS.length)}
            />
        </div>
    );
}
