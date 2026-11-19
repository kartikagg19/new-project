import { Diamond } from "lucide-react";
import { IMAGES } from "@/data/content";

export const ImageMarquee = ({ duration = "55s" }) => {
    const shots = Object.values(IMAGES);
    return (
        <div className="marquee py-2" data-testid="image-marquee">
            <div className="marquee-track items-center" style={{ "--marquee-duration": duration }}>
                {[0, 1].map((dup) => (
                    <div key={dup} aria-hidden={dup === 1} className="flex items-center gap-5 pr-5 shrink-0">
                        {shots.map((img) => (
                            <figure key={img.title} className="relative shrink-0 overflow-hidden rounded-2xl">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    loading="lazy"
                                    className="h-52 md:h-72 w-auto object-cover rounded-2xl border border-rose/20"
                                />
                                <figcaption className="absolute bottom-0 inset-x-0 px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-white/95 bg-gradient-to-t from-plum/80 to-transparent">
                                    {img.title}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

