import { Home, CalendarDays, Image as ImageIcon, Star } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

export default function MobileBottomBar({ onBook }) {
    const goTop = () => {
        if (window.__lenis) window.__lenis.scrollTo(0);
        else window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const item = "flex flex-col items-center justify-center gap-1 text-ink-soft h-full";
    const label = "text-[9px] tracking-[0.2em] uppercase";

    return (
        <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden" data-testid="mobile-bottom-bar">
            <div className="bg-blush-card/95 backdrop-blur-md border-t border-rose/20">
                <div className="grid grid-cols-4 h-16">
                    <button data-testid="mbb-home" onClick={goTop} className={item}>
                        <Home className="w-5 h-5" />
                        <span className={label}>Home</span>
                    </button>
                    <div className="relative flex justify-center">
                        <button
                            data-testid="mbb-book"
                            onClick={onBook}
                            className="absolute -top-7 w-16 h-16 rounded-full bg-rose text-[#FFF9F7] flex flex-col items-center justify-center shadow-xl shadow-rose/30 border-4 border-blush"
                        >
                            <CalendarDays className="w-5 h-5" />
                            <span className="text-[8px] tracking-[0.15em] uppercase mt-0.5">Book</span>
                        </button>
                    </div>
                    <button data-testid="mbb-gallery" onClick={() => scrollToId("gallery")} className={item}>
                        <ImageIcon className="w-5 h-5" />
                        <span className={label}>Gallery</span>
                    </button>
                    <button data-testid="mbb-reviews" onClick={() => scrollToId("reviews")} className={item}>
                        <Star className="w-5 h-5" />
                        <span className={label}>Reviews</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

