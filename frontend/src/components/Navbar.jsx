import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { BUSINESS } from "@/data/content";
import { scrollToId, openWhatsApp } from "@/lib/scroll";

const NAVS = {
    landing: [
        { label: "Salon", to: "/salon" },
        { label: "Academy", to: "/academy" },
        { label: "3 Outlets", to: "/salon#outlets" },
    ],
    salon: [
        { label: "3 Outlets", id: "outlets" },
        { label: "Gallery", id: "gallery" },
        { label: "Films", id: "videos" },
        { label: "Reviews", id: "reviews" },
        { label: "Visit", id: "visit" },
    ],
    academy: [
        { label: "Courses", id: "courses" },
        { label: "Why Angel", id: "why" },
        { label: "Enroll", id: "enroll" },
    ],
};

export default function Navbar({ variant = "landing", bookLabel = "Book", onBook }) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    const navigate = useNavigate();
    const links = NAVS[variant] || NAVS.landing;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (item) => (e) => {
        e.preventDefault();
        setOpen(false);
        if (item.to) {
            if (item.to.includes("#")) {
                const [path, hash] = item.to.split("#");
                navigate(path);
                setTimeout(() => scrollToId(hash), 150);
            } else {
                navigate(item.to);
            }
        } else {
            scrollToId(item.id);
        }
    };

    const wa = (e) => {
        e.preventDefault();
        openWhatsApp("Hello Angel The Luxury Salon & Academy! I'd like to book an appointment.");
    };

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled || open
                    ? "bg-blush/95 backdrop-blur-md border-b border-rose/20 shadow-sm"
                    : "bg-blush/80 md:bg-transparent border-b border-rose/10 md:border-transparent"
            }`}
        >
            {/* Top Announcement Bar (Visible in Mobile & Desktop View) */}
            {showBanner && (
                <div
                    data-testid="top-announcement-bar"
                    className="bg-[#120E15] text-[#FAF1EF] text-[11px] sm:text-xs py-2 px-3 sm:px-6 flex items-center justify-between border-b border-white/10 tracking-wider shadow-inner"
                >
                    <div className="flex-1 text-center font-normal flex items-center justify-center gap-1.5 flex-wrap">
                        <span className="text-[#DCA9A0] font-medium">Bookings, Enquiries :</span>
                        <a
                            href="https://wa.me/919599588312?text=Hello%20Angel%20The%20Luxury%20Salon!%20I'd%20like%20to%20enquire%20about%20booking."
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-[#FAF1EF] hover:text-[#E9C97E] underline decoration-dotted transition"
                        >
                            Call/Whatsapp: 9599588312
                        </a>
                    </div>
                    <button
                        onClick={() => setShowBanner(false)}
                        aria-label="Dismiss banner"
                        className="text-white/60 hover:text-white transition ml-2 p-0.5 rounded"
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>
                </div>
            )}

            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Logo />
                    <nav className="hidden md:flex items-center gap-9" data-testid="nav-links">
                        {links.map((item) => (
                            <a
                                key={item.label}
                                href={item.to || `#${item.id}`}
                                onClick={go(item)}
                                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                                className="link-underline font-display text-[15px] text-ink-soft hover:text-ink transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2.5">
                        <a
                            href={`tel:+${BUSINESS.phoneRaw}`}
                            data-testid="nav-phone-pill"
                            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-ink/25 px-4 py-2 text-[13px] tracking-wide text-ink-soft hover:border-rose hover:text-rose transition-colors"
                        >
                            <Phone className="w-3.5 h-3.5" />
                            {BUSINESS.phoneDisplay}
                        </a>
                        <a
                            href="#"
                            onClick={wa}
                            data-testid="nav-whatsapp-pill"
                            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-2 text-[13px] tracking-[0.12em] uppercase text-ink-soft hover:border-rose hover:text-rose transition-colors"
                        >
                            WhatsApp
                        </a>
                        <button
                            data-testid="nav-book-button"
                            onClick={onBook}
                            className="hidden sm:inline-flex items-center rounded-full bg-rose hover:bg-rose-dark text-[#FFF9F7] px-6 py-2.5 text-[13px] tracking-[0.15em] uppercase transition-colors duration-300"
                        >
                            {bookLabel}
                        </button>
                        <button
                            data-testid="nav-mobile-toggle"
                            onClick={() => setOpen(!open)}
                            aria-label="Menu"
                            className="md:hidden w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center text-ink"
                        >
                            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden overflow-hidden bg-blush border-b border-rose/20"
                        data-testid="nav-mobile-menu"
                    >
                        <div className="mx-auto max-w-7xl px-5 pb-6 pt-2">
                            {links.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.to || `#${item.id}`}
                                    onClick={go(item)}
                                    className="block py-3.5 font-display text-xl text-ink border-b border-rose/15 last:border-0"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="mt-5 flex flex-col gap-3">
                                <button
                                    onClick={() => {
                                        setOpen(false);
                                        onBook();
                                    }}
                                    className="w-full text-center rounded-full bg-rose text-[#FFF9F7] py-3 text-[13px] tracking-[0.15em] uppercase"
                                >
                                    {bookLabel}
                                </button>
                                <a
                                    href={`tel:+${BUSINESS.phoneRaw}`}
                                    className="w-full text-center rounded-full border border-ink/25 text-ink py-2.5 text-sm"
                                >
                                    Call {BUSINESS.phoneDisplay}
                                </a>
                                <a
                                    href="#"
                                    onClick={wa}
                                    className="w-full text-center rounded-full border border-rose/40 text-rose py-2.5 text-sm uppercase tracking-wider"
                                >
                                    WhatsApp 9599588312
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
