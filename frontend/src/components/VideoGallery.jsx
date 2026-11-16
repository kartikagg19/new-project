import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Pause, X, Volume2, VolumeX, Maximize2, Sparkles } from "lucide-react";
import { VIDEOS } from "@/data/content";
import { Eyebrow, Reveal } from "./Reveal";

export default function VideoGallery() {
    const [activeVideo, setActiveVideo] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (activeVideo) {
            window.__lenis?.stop();
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            setIsPlaying(true);
        } else {
            window.__lenis?.start();
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }
        return () => {
            window.__lenis?.start();
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [activeVideo]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setActiveVideo(null);
            if (e.key === " " && activeVideo && videoRef.current) {
                e.preventDefault();
                togglePlay();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [activeVideo]);

    const openPlayer = (v) => {
        setActiveVideo(v);
        setIsPlaying(true);
    };

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    const toggleFullscreen = () => {
        if (!videoRef.current) return;
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <section id="videos" className="py-16 md:py-24 scroll-mt-24 relative" data-testid="salon-videos">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
                <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-12">
                    <div className="max-w-xl">
                        <Eyebrow>Rituals in motion</Eyebrow>
                        <h2 className="mt-5 font-display font-light text-4xl md:text-5xl tracking-tight leading-tight">
                            Experience the <span className="italic text-rgold">salon live</span>
                        </h2>
                    </div>
                    <p className="text-sm text-ink-mute font-light max-w-xs">
                        Watch our real client transformations and studio atmosphere. Tap any film to watch in full HD.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {VIDEOS.map((v, idx) => (
                        <Reveal key={v.id} delay={idx * 0.08} className={idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
                            <article
                                data-testid={`video-card-${v.id}`}
                                onClick={() => openPlayer(v)}
                                className="group relative block overflow-hidden rounded-[1.6rem] border border-rose/25 bg-blush-card shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer text-left"
                            >
                                <div className="relative aspect-[9/14] sm:aspect-[9/13] w-full overflow-hidden bg-plum">
                                    <img
                                        src={v.poster}
                                        alt={v.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                                    <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                                        <span className="rounded-full bg-plum/70 backdrop-blur-md border border-rose/30 px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] text-rose-bright">
                                            {v.tag}
                                        </span>
                                        <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-mono text-white/90">
                                            {v.duration}
                                        </span>
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-rose/90 backdrop-blur-md text-[#FFF9F7] flex items-center justify-center shadow-2xl shadow-rose/50 border border-white/30 transform group-hover:scale-110 transition-transform duration-300">
                                            <Play className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1" />
                                        </div>
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-rose-mist flex items-center gap-1.5 mb-1.5">
                                            <Sparkles className="w-3 h-3 text-rose-bright" /> HD Salon Film
                                        </p>
                                        <h3 className="font-display text-2xl text-[#FAF1EF] font-light leading-snug">
                                            {v.title}
                                        </h3>
                                        <p className="mt-2 text-xs text-rose-mist/80 font-light line-clamp-2">
                                            {v.desc}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        data-lenis-prevent
                        data-testid="video-theater-modal"
                        className="fixed inset-0 z-[85] bg-plum/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveVideo(null)}
                    >
                        <button
                            data-testid="video-player-close"
                            onClick={() => setActiveVideo(null)}
                            aria-label="Close video"
                            className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full border border-rose-mist/40 text-[#FAF1EF] flex items-center justify-center hover:bg-rose/30 transition-colors z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <motion.div
                            data-lenis-prevent
                            initial={{ scale: 0.94, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.94, opacity: 0, y: 30 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-md md:max-w-lg lg:max-w-xl max-h-[92vh] flex flex-col rounded-3xl overflow-hidden border border-rose-bright/30 bg-plum shadow-2xl"
                        >
                            <div className="relative aspect-[9/16] max-h-[75vh] w-full bg-black flex items-center justify-center overflow-hidden">
                                <video
                                    ref={videoRef}
                                    src={activeVideo.src}
                                    poster={activeVideo.poster}
                                    playsInline
                                    controls
                                    autoPlay
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="p-5 md:p-6 bg-gradient-to-t from-plum to-plum/90 border-t border-rose/20 text-[#FAF1EF]">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="rounded-full bg-rose/30 border border-rose/50 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] text-rose-bright">
                                                {activeVideo.tag}
                                            </span>
                                            <span className="text-xs text-rose-mist/70 font-mono">
                                                {activeVideo.duration} · 720p HD
                                            </span>
                                        </div>
                                        <h4 className="font-display text-xl md:text-2xl font-light">
                                            {activeVideo.title}
                                        </h4>
                                        <p className="mt-1 text-xs md:text-sm text-rose-mist/80 font-light">
                                            {activeVideo.desc}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0 pt-1">
                                        <button
                                            onClick={togglePlay}
                                            aria-label={isPlaying ? "Pause" : "Play"}
                                            className="w-9 h-9 rounded-full border border-rose-mist/40 flex items-center justify-center hover:bg-rose/30 transition"
                                        >
                                            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                                        </button>
                                        <button
                                            onClick={toggleMute}
                                            aria-label={isMuted ? "Unmute" : "Mute"}
                                            className="w-9 h-9 rounded-full border border-rose-mist/40 flex items-center justify-center hover:bg-rose/30 transition"
                                        >
                                            {isMuted ? <VolumeX className="w-4 h-4 text-rose-bright" /> : <Volume2 className="w-4 h-4" />}
                                        </button>
                                        <button
                                            onClick={toggleFullscreen}
                                            aria-label="Fullscreen"
                                            className="w-9 h-9 rounded-full border border-rose-mist/40 flex items-center justify-center hover:bg-rose/30 transition"
                                        >
                                            <Maximize2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
