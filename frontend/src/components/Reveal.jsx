import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export const Reveal = ({ children, delay = 0, y = 26, className = "" }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay, ease }}
    >
        {children}
    </motion.div>
);

export const Lines = ({ lines, className = "", lineClassName = "", as: Tag = "span", delay = 0 }) => (
    <Tag className={className}>
        {lines.map((line, i) => {
            const l = typeof line === "string" ? { t: line } : line;
            return (
                <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                    <motion.span
                        className={`block will-change-transform ${lineClassName} ${l.c || ""}`}
                        initial={{ y: "112%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.9, delay: delay + i * 0.12, ease }}
                    >
                        {l.t}
                    </motion.span>
                </span>
            );
        })}
    </Tag>
);

export const Eyebrow = ({ children, light = false }) => (
    <span
        className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] font-medium ${
            light ? "text-rose-mist" : "text-rose"
        }`}
    >
        <span className={`h-px w-8 ${light ? "bg-rose-mist/60" : "bg-rose/60"}`} />
        {children}
    </span>
);
