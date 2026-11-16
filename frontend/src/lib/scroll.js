export const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72 });
    else el.scrollIntoView({ behavior: "smooth" });
};

export const openWhatsApp = (message) => {
    window.open(`https://wa.me/919211892610?text=${encodeURIComponent(message)}`, "_blank");
};
