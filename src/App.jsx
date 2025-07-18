import {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeroSection from "./components/HeroSection.jsx"
import AboutSection from "./components/AboutSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";
import Test from "./components/Test.jsx";


function App() {

    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');

        const smoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth',
                });
            }
        };

        links.forEach((link) => {
            link.addEventListener('click', smoothScroll);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', smoothScroll);
            });
        };
    }, []);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Header />
                        <main>
                            <HeroSection />
                            <AboutSection />
                            <ServicesSection />
                            <ProjectsSection />
                            <ContactSection />
                            <Footer />
                        </main>
                        <BackToTopButton />
                    </>
                }
            />
            <Route path="/Test" element={<Test />} />
        </Routes>
    );
}
export default App;