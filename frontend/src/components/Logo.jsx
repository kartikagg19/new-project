import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
    return (
        <Link to="/" className="flex flex-col leading-none group" data-testid="nav-logo-monogram">
            <span
                className={`font-display text-[24px] md:text-[26px] tracking-tight transition-colors ${
                    light ? "text-[#FAF1EF]" : "text-ink"
                }`}
            >
                Angel <span className="italic text-rose group-hover:text-rose-dark transition-colors duration-300">Empire</span>
            </span>
            <span
                className={`mt-1.5 text-[9px] uppercase tracking-[0.4em] ${
                    light ? "text-[#E5BFC0]" : "text-ink-mute"
                }`}
            >
                Salon &amp; Academy
            </span>
        </Link>
    );
}
