import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lines, Eyebrow, Reveal } from "@/components/Reveal";
import BookingModal from "@/components/BookingModal";
import { BUSINESS, COURSES, IMAGES } from "@/data/content";
import { openWhatsApp } from "@/lib/scroll";

const HERO_LINES = ["Learn.", { t: "Create.", c: "italic text-rgold" }, "Master."];
const CARD_LINES = ["Angel", { t: "Academy", c: "italic text-[#F3D9D2]" }];

const WHY = [
    { title: "Small batches", desc: "Personal attention on every head — you practice, they correct, you master." },
    { title: "Pro products", desc: "Train on professional lines including L'Oréal colour keys and airbrush machines." },
    { title: "Salon-floor practice", desc: "Learn inside a running luxury salon — real clients, real pressure, real skills." },
    { title: "Basic to Advance", desc: "Every course covers foundation theory and advanced specialisation in one path." },
];

export default function Academy() {
    const [booking, setBooking] = useState(false);
    const [preset, setPreset] = useState("");
    const [openCourse, setOpenCourse] = useState("makeup");
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const yImg = useTransform(scrollYProgress, [0, 1], [0, 70]);

    const enroll = (courseTitle) => {
        setPreset(courseTitle);
        setBooking(true);
    };

    return (
        <div className="min-h-screen text-ink">
            <div className="grain" />
            <Navbar variant="academy" bookLabel="Enroll" onBook={() => enroll("")} />

            <section ref={heroRef} className="relative overflow-hidden pt-28 md:pt-36 pb-16" data-testid="academy-hero">
                <div aria-hidden="true" className="absolute -top-20 -left-24 w-[420px] h-[420px] rounded-full bg-[#E9C97E]/30 blur-3xl animate-floaty" />
                <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
                    <div>
                        <Eyebrow>Angel Academy · Uttam Nagar</Eyebrow>
                        <Lines
                            as="h1" delay={0.15}
                            className="mt-7 font-display font-light tracking-tight leading-[1.02] text-[clamp(3.2rem,7.5vw,6rem)]"
                            lines={HERO_LINES}
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="mt-7 max-w-md text-ink-soft font-light leading-relaxed"
                        >
                            Professional courses in makeup artistry, hair styling, hair chemical
                            services and hair cutting — Basic &amp; Advance level training inside a
                            working luxury salon.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.85, duration: 0.8 }}
                            className="mt-7 flex flex-wrap gap-2.5"
                        >
                            {["Basic + Advance levels", "Hands-on training", "Bridal & portfolio looks"].map((c) => (
                                <span key={c} className="rounded-full border border-rose/25 px-4 py-2 text-xs text-ink-soft">
                                    {c}
                                </span>
                            ))}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="mt-9 flex flex-wrap gap-4"
                        >
                            <a
                                href="#courses"
                                data-testid="academy-hero-view-courses"
                                onClick={(e) => { e.preventDefault(); const el = document.getElementById("courses"); window.__lenis ? window.__lenis.scrollTo(el, { offset: -72 }) : el.scrollIntoView({ behavior: "smooth" }); }}
                                className="inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-dark text-[#FFF9F7] px-7 py-4 text-[13px] tracking-[0.15em] uppercase transition-colors duration-300"
                            >
                                Explore courses <ArrowUpRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                data-testid="academy-hero-enroll-cta"
                                onClick={(e) => { e.preventDefault(); openWhatsApp("Hello Angel Academy! I'd like details about your courses."); }}
                                className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-7 py-4 text-[13px] tracking-[0.15em] uppercase hover:border-rose hover:text-rose transition-colors duration-300"
                            >
                                Enroll via WhatsApp
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.15, duration: 0.8 }}
                            className="mt-11 flex gap-12"
                        >
                            <div>
                                <p className="font-display text-3xl">4</p>
                                <p className="mt-1 text-[10px] tracking-[0.25em] uppercase text-ink-mute">Professional courses</p>
                            </div>
                            <div>
                                <p className="font-display text-3xl">2</p>
                                <p className="mt-1 text-[10px] tracking-[0.25em] uppercase text-ink-mute">Levels · Basic &amp; Advance</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div style={{ y: yImg }} className="relative">
                        <div aria-hidden="true" className="absolute -top-8 -right-8 w-72 h-72 rounded-full bg-[#E9C97E]/50 blur-3xl animate-floaty" />
                        <div aria-hidden="true" className="absolute -bottom-16 -left-8 w-64 h-64 rounded-full bg-[#DCA9A0]/45 blur-3xl animate-floaty [animation-delay:2s]" />
                        <motion.div
                            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative rounded-[1.8rem] overflow-hidden border border-rose/25 shadow-2xl shadow-rose/15"
                        >
                            <img
                                src={IMAGES.academyCard.src} alt="Angel Academy professional hands-on hair & beauty training"
                                className="w-full h-[440px] md:h-[580px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-plum/15 to-transparent" />
                            <span className="absolute top-4 left-4 rounded-full bg-plum/85 backdrop-blur text-[#F3D9D2] px-4 py-1.5 text-[10px] tracking-[0.25em] uppercase">
                                Beauty Academy
                            </span>
                            <span className="absolute top-4 right-4 rounded-full bg-blush-card/95 text-ink px-3.5 py-1.5 text-xs font-medium tracking-wide">
                                ★★★★★ {BUSINESS.rating}
                            </span>
                            <div className="absolute bottom-7 left-7 font-display font-light text-[#FAF1EF] text-4xl md:text-5xl leading-[1.08]">
                                <Lines lines={CARD_LINES} delay={0.7} />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section id="why" className="py-16 md:py-24 border-y border-rose/15 scroll-mt-24" data-testid="academy-why">
                <div className="mx-auto max-w-7xl px-5 md:px-8">
                    <Reveal className="max-w-xl">
                        <Eyebrow>Why Angel Academy</Eyebrow>
                        <h2 className="mt-5 font-display font-light text-4xl md:text-5xl tracking-tight leading-tight">
                            Trained by <span className="italic text-rgold">working artists</span>
                        </h2>
                    </Reveal>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                        {WHY.map((w, i) => (
                            <Reveal key={w.title} delay={i * 0.1}>
                                <div data-testid={`academy-why-${i + 1}`} className="border-t border-rose/30 pt-6">
                                    <p className="font-display text-sm text-rose">0{i + 1}</p>
                                    <h3 className="mt-3 font-display text-xl">{w.title}</h3>
                                    <p className="mt-2.5 text-sm text-ink-soft font-light leading-relaxed">{w.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section id="courses" className="py-16 md:py-24 scroll-mt-24" data-testid="academy-courses">
                <div className="mx-auto max-w-7xl px-5 md:px-8">
                    <Reveal className="flex flex-wrap items-end justify-between gap-6">
                        <div className="max-w-xl">
                            <Eyebrow>The curriculum</Eyebrow>
                            <h2 className="mt-5 font-display font-light text-4xl md:text-5xl tracking-tight leading-tight">
                                Four paths to <span className="italic text-rgold">mastery</span>
                            </h2>
                        </div>
                        <p className="text-sm text-ink-mute font-light max-w-xs">
                            Every course runs Basic &amp; Advance levels. Tap a course to see the full syllabus.
                        </p>
                    </Reveal>

                    <div className="mt-12 space-y-4">
                        {COURSES.map((course, idx) => {
                            const open = openCourse === course.id;
                            return (
                                <Reveal key={course.id} delay={idx * 0.07}>
                                    <div
                                        data-testid={`course-accordion-${course.id}`}
                                        className={`rounded-[1.6rem] border transition-colors duration-500 overflow-hidden ${
                                            open ? "border-rose/50 bg-blush-card shadow-xl shadow-rose/10" : "border-rose/20 bg-blush-card"
                                        }`}
                                    >
                                        <button
                                            data-testid={`course-toggle-${course.id}`}
                                            onClick={() => setOpenCourse(open ? null : course.id)}
                                            className="w-full flex items-center gap-5 p-6 md:p-8 text-left"
                                        >
                                            <span className={`w-12 h-12 rounded-full border flex items-center justify-center shrink-0 font-display text-sm transition-colors duration-500 ${open ? "bg-rose text-[#FFF9F7] border-rose" : "border-rose/40 text-rose"}`}>
                                                0{idx + 1}
                                            </span>
                                            <span className="flex-1 min-w-0">
                                                <span className="block font-display text-xl md:text-2xl">{course.title}</span>
                                                <span className="block text-[10px] uppercase tracking-[0.25em] text-rose mt-1">{course.tagline}</span>
                                            </span>
                                            <span className="hidden sm:block text-xs text-ink-mute font-light mr-2">
                                                {course.basic.length + course.advance.length} lessons
                                            </span>
                                            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.4 }}>
                                                <ChevronDown className="w-5 h-5 text-rose" />
                                            </motion.span>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {open && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                                >
                                                    <div className="px-6 md:px-8 pb-8">
                                                        <p className="text-sm text-ink-soft font-light leading-relaxed max-w-2xl">{course.intro}</p>
                                                        <div className="mt-6 grid md:grid-cols-2 gap-8">
                                                            {[
                                                                { label: "Basic level", items: course.basic },
                                                                { label: "Advance level", items: course.advance },
                                                            ].map((lvl) => (
                                                                <div key={lvl.label} className="rounded-2xl border border-rose/15 bg-blush p-6">
                                                                    <p className="text-[11px] uppercase tracking-[0.3em] text-rose mb-4">{lvl.label}</p>
                                                                    <ul className="space-y-2.5" data-testid={`course-list-${course.id}-${lvl.label.toLowerCase()}`}>
                                                                        {lvl.items.map((item) => (
                                                                            <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft font-light">
                                                                                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-rose/70 shrink-0" />
                                                                                {item}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="mt-7 flex flex-wrap items-center gap-4">
                                                            <button
                                                                data-testid={`course-enroll-${course.id}`}
                                                                onClick={() => enroll(course.title)}
                                                                className="inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-dark px-6 py-3.5 text-[13px] tracking-[0.15em] uppercase font-medium text-[#FFF9F7] transition-colors"
                                                            >
                                                                Enroll in this course <ArrowUpRight className="w-4 h-4" />
                                                            </button>
                                                            <span className="text-xs text-ink-mute font-light">
                                                                Fees &amp; batch dates shared on WhatsApp
                                                            </span>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="enroll" className="pb-20 md:pb-28 scroll-mt-24" data-testid="academy-enroll">
                <div className="mx-auto max-w-7xl px-5 md:px-8">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-[2rem] bg-plum px-7 py-14 md:p-16 text-center">
                            <div className="rule-rgold absolute top-0 inset-x-0" />
                            <p className="text-[11px] uppercase tracking-[0.3em] text-rose-mist">Seats open now</p>
                            <h2 className="mt-4 font-display font-light text-3xl md:text-5xl text-[#FAF1EF] leading-tight">
                                Your beauty career starts at <span className="italic text-rose-bright">Angel Academy.</span>
                            </h2>
                            <p className="mt-4 text-sm text-[#F3D9D2]/80 font-light max-w-md mx-auto">
                                Message us for fees, batch dates and a studio tour — we reply fast.
                            </p>
                            <div className="mt-9 flex flex-wrap justify-center gap-4">
                                <button
                                    data-testid="enroll-whatsapp-cta"
                                    onClick={() => enroll("")}
                                    className="inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-dark px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium text-[#FFF9F7] transition-colors duration-300"
                                >
                                    Enroll now <ArrowUpRight className="w-4 h-4" />
                                </button>
                                <a
                                    href={`tel:+${BUSINESS.phoneRaw}`}
                                    data-testid="enroll-call-cta"
                                    className="inline-flex items-center gap-2 rounded-full border border-rose-mist/40 px-8 py-4 text-[13px] tracking-[0.15em] uppercase text-[#FAF1EF] hover:bg-rose/20 transition-colors duration-300"
                                >
                                    Call {BUSINESS.phoneDisplay}
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
            <BookingModal
                open={booking}
                onClose={() => setBooking(false)}
                mode="academy"
                options={[...COURSES.map((c) => c.title), "Not sure — need guidance"]}
                defaultService={preset}
                heading={preset ? "Course enquiry" : "Reserve your seat"}
            />
        </div>
    );
}
