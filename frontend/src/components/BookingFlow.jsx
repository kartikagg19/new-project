import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronDown, Search, Check } from "lucide-react";
import { SERVICE_MENU, TIME_SLOTS, ARTISTS } from "@/data/content";
import { openWhatsApp } from "@/lib/scroll";

const TABS = ["ALL", "HAIR", "SKIN", "NAILS", "LASHES & PMU", "BODY", "BRIDAL"];
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function BookingFlow({ open, onClose }) {
    const [step, setStep] = useState(1);
    const [tab, setTab] = useState("ALL");
    const [query, setQuery] = useState("");
    const [openGroups, setOpenGroups] = useState(["Hair"]);
    const [selected, setSelected] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [slot, setSlot] = useState("");
    const [artist, setArtist] = useState(ARTISTS[0]);
    const [notes, setNotes] = useState("");

    useEffect(() => {
        if (open) {
            setStep(1);
            window.__lenis?.stop();
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
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
    }, [open]);

    const groups = useMemo(
        () =>
            SERVICE_MENU.filter((g) => tab === "ALL" || g.tabs.includes(tab))
                .map((g) => ({
                    ...g,
                    items: g.items.filter((i) => !query || i.name.toLowerCase().includes(query.toLowerCase())),
                }))
                .filter((g) => g.items.length > 0),
        [tab, query]
    );

    const toggleItem = (item) =>
        setSelected((s) => (s.some((x) => x.name === item.name) ? s.filter((x) => x.name !== item.name) : [...s, item]));

    const toggleGroup = (g) =>
        setOpenGroups((s) => (s.includes(g) ? s.filter((x) => x !== g) : [...s, g]));

    const total = selected.reduce((a, i) => a + (i.price || 0), 0);
    const hasUnpriced = selected.some((i) => !i.price);

    const confirm = () => {
        const msg = [
            "Hello Angel Empire! I'd like to book an appointment.",
            `Name: ${name}`,
            phone && `Phone: ${phone}`,
            "Services:",
            ...selected.map((s) => `- ${s.name}${s.price ? ` (${inr(s.price)})` : ""}`),
            total > 0 && `Estimated total: ${inr(total)}${hasUnpriced ? " + on-request services" : ""}`,
            date && `Preferred date: ${date}`,
            slot && `Preferred time: ${slot}`,
            artist !== ARTISTS[0] && `Preferred artist: ${artist}`,
            notes && `Notes: ${notes}`,
        ]
            .filter(Boolean)
            .join("\n");
        openWhatsApp(msg);
        onClose();
    };

    const label = "block text-[10px] uppercase tracking-[0.25em] text-[#E5BFC0] mb-1.5";
    const field =
        "w-full rounded-xl bg-[#FFF9F7] text-ink placeholder:text-ink-mute/60 px-4 py-3.5 outline-none border border-transparent focus:border-rose transition";

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    data-testid="booking-flow"
                    data-lenis-prevent
                    className="fixed inset-0 z-[70] bg-plum/70 backdrop-blur-md flex items-end md:items-center justify-center md:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        data-lenis-prevent
                        initial={{ y: 90, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 90, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full md:max-w-2xl bg-blush rounded-t-[1.8rem] md:rounded-[1.8rem] border border-rose/25 h-[90vh] md:h-auto md:max-h-[88vh] flex flex-col overflow-hidden"
                    >
                        <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-rose/15 shrink-0">
                            <div className="flex items-center gap-3">
                                {step === 2 && (
                                    <button
                                        data-testid="booking-back"
                                        onClick={() => setStep(1)}
                                        aria-label="Back to services"
                                        className="w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center hover:border-rose hover:text-rose transition"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                )}
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-rose">Angel Empire</p>
                                    <h3 className="font-display text-xl text-ink">
                                        {step === 1 ? "Book an appointment" : "Your details"}
                                    </h3>
                                </div>
                            </div>
                            <button
                                data-testid="booking-flow-close"
                                onClick={onClose}
                                aria-label="Close"
                                className="w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center hover:border-rose hover:text-rose transition"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div
                            data-lenis-prevent
                            className="overflow-y-auto overscroll-contain min-h-0 flex-1 px-6 md:px-8 py-6"
                            style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
                        >
                            {step === 1 ? (
                                <>
                                    <div className="relative mb-5">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-mute" />
                                        <input
                                            data-testid="booking-service-search"
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            placeholder="Search services — facial, keratin, nail colour…"
                                            className="w-full rounded-full border border-rose/20 bg-blush-card pl-11 pr-4 py-3.5 text-sm text-ink placeholder:text-ink-mute/60 outline-none focus:border-rose transition"
                                        />
                                    </div>

                                    <div className="flex gap-2 mb-6 flex-wrap" data-testid="booking-tabs">
                                        {TABS.map((t) => (
                                            <button
                                                key={t}
                                                data-testid={`booking-tab-${t.toLowerCase()}`}
                                                onClick={() => setTab(t)}
                                                className={`rounded-full px-5 py-2 text-[11px] tracking-[0.18em] uppercase border transition-colors duration-300 ${
                                                    tab === t
                                                        ? "bg-ink text-[#FAF1EF] border-ink"
                                                        : "border-ink/20 text-ink-soft hover:border-rose"
                                                }`}
                                            >
                                                {t}
                                            </button>
                                        ))}
                                    </div>

                                    {groups.map((g) => {
                                        const isOpen = openGroups.includes(g.group);
                                        return (
                                            <div key={g.group} className="rounded-2xl border border-rose/20 bg-blush-card mb-4 overflow-hidden">
                                                <button
                                                    data-testid={`booking-group-${slug(g.group)}`}
                                                    onClick={() => toggleGroup(g.group)}
                                                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                                                >
                                                    <span>
                                                        <span className="block font-display text-xl text-ink">{g.group}</span>
                                                        <span className="block text-[10px] uppercase tracking-[0.25em] text-ink-mute mt-1">
                                                            {g.items.length} services
                                                        </span>
                                                        {g.note && (
                                                            <span className="block text-[11px] italic text-ink-mute/80 font-light mt-1 max-w-[220px]">
                                                                {g.note}
                                                            </span>
                                                        )}
                                                    </span>
                                                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.35 }}>
                                                        <ChevronDown className="w-5 h-5 text-rose" />
                                                    </motion.span>
                                                </button>
                                                <AnimatePresence initial={false}>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                        >
                                                            <div className="px-6 pb-3">
                                                                {g.items.map((item) => {
                                                                    const on = selected.some((x) => x.name === item.name);
                                                                    return (
                                                                        <button
                                                                            key={item.name}
                                                                            data-testid={`service-item-${slug(item.name)}`}
                                                                            onClick={() => toggleItem(item)}
                                                                            className="w-full flex items-center gap-4 py-4 border-b border-rose/10 last:border-0 text-left group"
                                                                        >
                                                                            <span
                                                                                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                                                                                    on ? "bg-rose border-rose text-white" : "border-ink/25 group-hover:border-rose"
                                                                                }`}
                                                                            >
                                                                                {on && <Check className="w-3.5 h-3.5" />}
                                                                            </span>
                                                                            <span className="flex-1 font-display text-[17px] text-ink">{item.name}</span>
                                                                            <span className="text-sm text-ink-soft shrink-0">
                                                                                {item.price ? inr(item.price) : (
                                                                                    <span className="italic text-xs text-ink-mute">On request</span>
                                                                                )}
                                                                            </span>
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </>
                            ) : (
                                <div className="rounded-[1.6rem] bg-plum text-[#FAF1EF] p-7 md:p-9">
                                    <p className={label.replace("mb-1.5", "")}>Your details</p>
                                    <h3 className="font-display text-3xl font-light mt-1 mb-7">
                                        Almost <span className="italic text-rose-bright">there.</span>
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className={label} htmlFor="bf-name">Name</label>
                                            <input id="bf-name" data-testid="bf-name" required className={field} placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div>
                                            <label className={label} htmlFor="bf-phone">Phone</label>
                                            <input id="bf-phone" data-testid="bf-phone" type="tel" className={field} placeholder="10-digit mobile" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                        <div>
                                            <label className={label} htmlFor="bf-date">Preferred date</label>
                                            <input id="bf-date" data-testid="bf-date" type="date" className={field} value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split("T")[0]} />
                                        </div>
                                        <div>
                                            <label className={label} htmlFor="bf-time">Preferred time</label>
                                            <select id="bf-time" data-testid="bf-time" className={field} value={slot} onChange={(e) => setSlot(e.target.value)}>
                                                <option value="">Any time</option>
                                                {TIME_SLOTS.map((t) => (<option key={t} value={t}>{t}</option>))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label className={label} htmlFor="bf-artist">Preferred artist</label>
                                        <select id="bf-artist" data-testid="bf-artist" className={field} value={artist} onChange={(e) => setArtist(e.target.value)}>
                                            {ARTISTS.map((a) => (<option key={a} value={a}>{a}</option>))}
                                        </select>
                                    </div>
                                    <div className="mt-4">
                                        <label className={label} htmlFor="bf-notes">Notes</label>
                                        <textarea id="bf-notes" data-testid="bf-notes" rows={3} className={field} placeholder="Any preferences or requests…" value={notes} onChange={(e) => setNotes(e.target.value)} />
                                    </div>

                                    <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4" data-testid="bf-selected-summary">
                                        <p className={label}>Selected services</p>
                                        {selected.map((s) => (
                                            <div key={s.name} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                                                <span className="font-display text-[15px]">{s.name}</span>
                                                <span className="flex items-center gap-3 text-sm text-[#E5BFC0]">
                                                    {s.price ? inr(s.price) : "On request"}
                                                    <button
                                                        aria-label={`Remove ${s.name}`}
                                                        onClick={() => toggleItem(s)}
                                                        className="text-[#E5BFC0]/60 hover:text-white transition"
                                                    >
                                                        <X className="w-3.5 h-3.5" />
                                                    </button>
                                                </span>
                                            </div>
                                        ))}
                                        {total > 0 && (
                                            <div className="flex items-center justify-between pt-3 mt-1 border-t border-white/15">
                                                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E5BFC0]">Estimated total</span>
                                                <span className="font-display text-xl text-rose-bright">
                                                    {inr(total)}{hasUnpriced ? " +" : ""}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        data-testid="bf-confirm-whatsapp"
                                        onClick={confirm}
                                        disabled={!name}
                                        className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-rose hover:bg-rose-dark disabled:opacity-40 text-[#FFF9F7] py-4 text-[13px] tracking-[0.15em] uppercase font-medium transition-colors"
                                    >
                                        Confirm booking
                                    </button>
                                    <p className="mt-3 text-center text-xs text-[#E5BFC0]/70 font-light">
                                        Confirmed instantly via WhatsApp · Final prices by the salon.
                                    </p>
                                </div>
                            )}
                        </div>

                        {step === 1 && (
                            <div className="border-t border-rose/15 bg-blush px-6 md:px-8 py-4 flex items-center justify-between shrink-0">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-ink-mute">{selected.length} selected</p>
                                    <p className="font-display text-xl text-ink" data-testid="booking-selected-total">
                                        {total > 0 ? `${inr(total)}${hasUnpriced ? " +" : ""}` : "—"}
                                    </p>
                                </div>
                                <button
                                    data-testid="booking-continue"
                                    onClick={() => setStep(2)}
                                    disabled={selected.length === 0}
                                    className="rounded-full bg-rose hover:bg-rose-dark disabled:opacity-40 text-[#FFF9F7] px-8 py-3.5 text-[13px] tracking-[0.15em] uppercase transition-colors"
                                >
                                    Continue
                                </button>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
