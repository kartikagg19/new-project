import { MapPin, Phone, Clock, Instagram, ArrowUpRight, Navigation } from "lucide-react";
import { BUSINESS, OUTLETS } from "@/data/content";
import { openWhatsApp } from "@/lib/scroll";

export default function Footer() {
    const wa = (e) => {
        e.preventDefault();
        openWhatsApp("Hello Angel The Luxury Salon & Academy! I'd like to book an appointment.");
    };

    return (
        <footer className="bg-plum text-[#FAF1EF] relative overflow-hidden" data-testid="site-footer">
            <div className="rule-rgold absolute top-0 inset-x-0" />
            <span
                aria-hidden="true"
                className="pointer-events-none select-none absolute -bottom-10 left-1/2 -translate-x-1/2 font-display italic font-light text-[15vw] leading-none whitespace-nowrap text-[#DCA9A0]/[0.04]"
            >
                Angel The Luxury Salon
            </span>

            <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-20 pb-8">
                {/* Header Row */}
                <div className="flex flex-wrap items-end justify-between gap-8 pb-10 border-b border-[#DCA9A0]/15">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-rose-mist">Book your ritual · 3 Outlets</p>
                        <p className="font-display font-light text-3xl sm:text-5xl md:text-6xl tracking-tight mt-3" data-testid="footer-brand">
                            Angel <span className="italic brand-shimmer">The Luxury Salon</span>
                        </p>
                        <p className="mt-2 text-[11px] uppercase tracking-[0.35em] text-rose-mist">
                            Salon &amp; Academy · Uttam Nagar West · New Delhi
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href={`tel:+${BUSINESS.phoneRaw}`}
                            data-testid="footer-phone-pill"
                            className="inline-flex items-center gap-2 rounded-full border border-rose-mist/30 px-5 py-2.5 text-sm text-[#FAF1EF]/85 hover:border-rose-bright hover:text-rose-bright transition-colors"
                        >
                            <Phone className="w-3.5 h-3.5" /> {BUSINESS.phoneDisplay}
                        </a>
                        <a
                            href="#"
                            onClick={wa}
                            data-testid="footer-whatsapp-cta"
                            className="inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-dark px-5 py-2.5 text-sm text-[#FFF9F7] transition-colors"
                        >
                            Book via WhatsApp <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* 3 Outlets Section with Map Directions */}
                <div className="py-12 border-b border-[#DCA9A0]/15">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-rose-mist">Our Locations</p>
                            <h3 className="font-display text-2xl md:text-3xl font-light text-[#FFF9F7] mt-1">
                                Visit Our 3 Outlets in Uttam Nagar West
                            </h3>
                        </div>
                        <span className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#E5B869]">
                            All 3 Outlets Open Daily till 9 PM
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {OUTLETS.map((outlet) => (
                            <div
                                key={outlet.id}
                                className="rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 p-6 flex flex-col justify-between transition-colors"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#E5B869] font-medium">
                                            {outlet.num}
                                        </span>
                                        <span className="text-[10px] uppercase tracking-wider text-white/50 px-2 py-0.5 rounded bg-white/5">
                                            {outlet.badge}
                                        </span>
                                    </div>
                                    <h4 className="font-display text-xl text-[#FFF9F7] font-light leading-snug">
                                        {outlet.name}
                                    </h4>
                                    <p className="mt-3 text-xs text-[#FAF1EF]/75 font-light leading-relaxed">
                                        {outlet.address}
                                    </p>
                                    <p className="mt-1 text-[11px] text-rose-mist/90 italic">
                                        Landmark: {outlet.landmark}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                                    <a
                                        href={outlet.mapLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs text-[#E5B869] hover:text-[#FFF4D0] transition font-medium tracking-wide"
                                    >
                                        <MapPin className="w-3.5 h-3.5" />
                                        <span>Google Maps</span>
                                        <ArrowUpRight className="w-3 h-3" />
                                    </a>
                                    <a
                                        href={outlet.directions}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs text-[#FAF1EF]/80 hover:text-white transition"
                                    >
                                        <Navigation className="w-3.5 h-3.5 text-rose-bright" />
                                        <span>Directions</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact & Hours Row */}
                <div
                    className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-8 border-b border-[#DCA9A0]/15 text-sm font-light text-[#FAF1EF]/80 text-center"
                    data-testid="footer-contact"
                >
                    <span className="inline-flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-rose-bright shrink-0" />
                        {BUSINESS.hours}
                    </span>
                    <a
                        href={BUSINESS.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2.5 link-underline hover:text-white transition-colors"
                    >
                        <Instagram className="w-4 h-4 text-rose-bright shrink-0" />
                        {BUSINESS.instagramHandle}
                    </a>
                    <span className="inline-flex items-center gap-2 text-rose-bright tracking-[0.2em]">
                        ★★★★★
                        <span className="text-[#FAF1EF]/70 tracking-normal">
                            {BUSINESS.rating} · {BUSINESS.reviewCount} Google reviews
                        </span>
                    </span>
                </div>

                {/* Bottom Legal Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-7 text-xs text-[#FAF1EF]/50 font-light">
                    <p>© {new Date().getFullYear()} Angel The Luxury Salon &amp; Academy · 3 Outlets in Uttam Nagar West, Delhi</p>
                    <p className="font-display italic text-sm text-rose-bright/80 tracking-wide">A · L · S</p>
                    <p>Women-owned · LGBTQ+ friendly · Unisex Luxury Salon</p>
                </div>
            </div>
        </footer>
    );
}

