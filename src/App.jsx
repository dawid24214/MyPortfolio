import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import {Route, Router, Routes} from "react-router-dom";
import HeroSection from "./components/HeroSection.jsx"
import AboutSection from "./components/AboutSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";


function App() {
    return (
        <>
            <Router location='' navigator=''>
                <Header/>
                <main>
                    <HeroSection/>
                    <AboutSection/>
                    <ServicesSection/>
                    <ProjectsSection/>
                    <ContactSection/>
                    <Footer/>

                </main>
            </Router>

        </>
    );
}

export default App;