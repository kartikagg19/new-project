import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Landing from "@/pages/Landing";
import Salon from "@/pages/Salon";
import Academy from "@/pages/Academy";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { err: null };
    }
    static getDerivedStateFromError(e) {
        return { err: e };
    }
    render() {
        if (this.state.err) {
            return (
                <div style={{ padding: 48, fontFamily: "sans-serif", color: "#2B1B24" }}>
                    Something went wrong. Please refresh the page.
                </div>
            );
        }
        return this.props.children;
    }
}

function ScrollToTop({ lenisRef }) {
    const { pathname } = useLocation();
    React.useEffect(() => {
        if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);
    }, [pathname, lenisRef]);
    return null;
}

export default function App() {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
        lenisRef.current = lenis;
        window.__lenis = lenis;
        let raf;
        const loop = (t) => {
            lenis.raf(t);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return (
        <ErrorBoundary>
            <BrowserRouter>
                <div className="gold-aura" aria-hidden="true" />
                <ScrollToTop lenisRef={lenisRef} />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/salon" element={<Salon />} />
                    <Route path="/academy" element={<Academy />} />
                    <Route path="*" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

