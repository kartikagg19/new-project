import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ photos, index, onClose, onNavigate }) {
    const [dir, setDir] = useState(1);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") { setDir(1); onNavigate(1); }
            if (e.key === "ArrowLeft") { setDir(-1); onNavigate(-1); }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose, onNavigate]);

    const photo = photos[index];

    return (
        <AnimatePresence>
            {photo && (
                <motion.div
                    data-testid="gallery-lightbox"
                    className="fixed inset-0 z-[80] bg-plum/90 backdrop-blur-lg flex items-center justify-center p-4 md:p-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <button
                        data-testid="lightbox-close" aria-label="Close" onClick={onClose}
                        className="absolute top-5 right-5 w-11 h-11 rounded-full border border-rose-mist/40 text-[#FAF1EF] flex items-center justify-center hover:bg-rose/30 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <button
                        data-testid="lightbox-prev" aria-label="Previous photo"
                        onClick={(e) => { e.stopPropagation(); setDir(-1); onNavigate(-1); }}
                        className="absolute left-3 md:left-8 w-11 h-11 rounded-full border border-rose-mist/40 text-[#FAF1EF] flex items-center justify-center hover:bg-rose/30 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        data-testid="lightbox-next" aria-label="Next photo"
                        onClick={(e) => { e.stopPropagation(); setDir(1); onNavigate(1); }}
                        className="absolute right-3 md:right-8 w-11 h-11 rounded-full border border-rose-mist/40 text-[#FAF1EF] flex items-center justify-center hover:bg-rose/30 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <motion.figure
                        key={index}
                        custom={dir}
                        initial={{ opacity: 0, x: dir * 60, scale: 0.97 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-3xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={photo.src}
                            alt={photo.title}
                            className="w-full max-h-[78vh] object-contain rounded-2xl border border-rose-bright/30"
                        />
                        <figcaption className="mt-4 text-center">
                            <p className="font-display text-xl text-[#FAF1EF]">{photo.title}</p>
                            <p className="text-sm text-rose-mist/90 font-light mt-1">{photo.caption}</p>
                            <p className="text-xs text-rose-mist/60 mt-2 tracking-[0.25em] uppercase">
                                {index + 1} / {photos.length}
                            </p>
                        </figcaption>
                    </motion.figure>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

