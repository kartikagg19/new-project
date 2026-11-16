import { MapPin, Phone, Clock, Instagram, ArrowUpRight } from "lucide-react";
import { BUSINESS } from "@/data/content";
import { openWhatsApp } from "@/lib/scroll";

export default function Footer() {
    const wa = (e) => {
        e.preventDefault();
        openWhatsApp("Hello Angel Empire! I'd like to book an appointment.");
    };

    return (
        <footer className="bg-plum text-[#FAF1EF] relative overflow-hidden" data-testid="site-footer">
            <div className="rule-rgold absolute top-0 inset-x-0" />
            <span
                aria-hidden="true"
                className="pointer-events-none select-none absolute -bottom-10 left-1/2 -translate-x-1/2 font-display italic font-light text-[19vw] leading-none whitespace-nowrap text-[#DCA9A0]/[0.05]"
            >
                Angel Empire
            </span>

            <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-20 pb-8">
                <div className="flex flex-wrap items-end justify-between gap-8 pb-10">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-rose-mist">Book your ritual</p>
                        <p className="font-display font-light text-4xl md:text-6xl tracking-tight mt-4" data-testid="footer-brand">
                            Angel <span className="italic brand-shimmer">Empire</span>
                        </p>
                        <p className="mt-3 text-[10px] uppercase tracking-[0.4em] text-rose-mist">
                            Salon &amp; Academy · Uttam Nagar · New Delhi
                        </p>
                        <p className="font-hindi text-lg text-rose-mist/90 mt-3" lang="hi">
                            {BUSINESS.hindiName}
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

                <div
                    className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-8 border-y border-[#DCA9A0]/15 text-sm font-light text-[#FAF1EF]/80 text-center"
                    data-testid="footer-contact"
                >
                    <span className="inline-flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-rose-bright shrink-0" />
                        {BUSINESS.address}
                    </span>
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

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-7 text-xs text-[#FAF1EF]/50 font-light">
                    <p>© {new Date().getFullYear()} Angel Empire Salon &amp; Academy · Uttam Nagar, Delhi</p>
                    <p className="font-display italic text-sm text-rose-bright/80 tracking-wide">A · E</p>
                    <p>Women-owned · LGBTQ+ friendly · Unisex salon</p>
                </div>
            </div>
        </footer>
    );
}
