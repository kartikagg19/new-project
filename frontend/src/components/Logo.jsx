import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
    return (
        <Link to="/" className="flex flex-col leading-none group" data-testid="nav-logo-monogram">
            <span
                className={`font-display text-[20px] sm:text-[23px] md:text-[25px] tracking-tight transition-colors ${
                    light ? "text-[#FAF1EF]" : "text-ink"
                }`}
            >
                Angel <span className="italic text-rose group-hover:text-rose-dark transition-colors duration-300">The Luxury Salon</span>
            </span>
            <span
                className={`mt-1 text-[8.5px] uppercase tracking-[0.32em] ${
                    light ? "text-[#E5BFC0]" : "text-ink-mute"
                }`}
            >
                Salon &amp; Academy · 3 Outlets
            </span>
        </Link>
    );
}

