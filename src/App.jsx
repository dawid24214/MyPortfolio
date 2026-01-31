import { useEffect, useMemo, useState } from "react";

import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import WhyDev from "./components/WhyDev.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";
import Certificates from "./components/Certificates.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    const [sidebarHidden, setSidebarHidden] = useState(false);

    const isMobileNav = () => window.matchMedia("(max-width: 940px)").matches;

    useEffect(() => {
        try {
            const saved = localStorage.getItem("sidebarHidden");
            if (saved === "1" && !isMobileNav()) setSidebarHidden(true);
        } catch {}
    }, []);

    useEffect(() => {
        // Na mobile nie pozwalamy trzymać "hidden"
        if (isMobileNav() && sidebarHidden) setSidebarHidden(false);
    }, [sidebarHidden]);

    useEffect(() => {
        try {
            localStorage.setItem("sidebarHidden", sidebarHidden ? "1" : "0");
        } catch {}
        document.body.classList.toggle("sidebar-hidden", sidebarHidden);
    }, [sidebarHidden]);

    const toggleSidebar = () => {
        if (isMobileNav()) return; // NA MOBILE NIE CHOWAMY
        setSidebarHidden((v) => !v);
    };

    const openSidebar = () => {
        setSidebarHidden(false);
    };

    const year = useMemo(() => new Date().getFullYear(), []);

    return (
        <>
            <div className="grid-bg" aria-hidden="true" />

            <Sidebar hidden={sidebarHidden} onToggle={toggleSidebar} onOpen={openSidebar} />

            <main className={`main ${sidebarHidden ? "sidebar-hidden" : ""}`} id="top">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <WhyDev />
                <Timeline />
                <Contact />
                <Certificates />
            </main>

            <Footer year={year} />
        </>
    );
}
