import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import {Route, Router, Routes} from "react-router-dom";
import HeroSection from "./components/HeroSection.jsx"
import AboutSection from "./components/AboutSection.jsx";


function App() {
    return (
        <>
            <Router location='' navigator=''>
                <Header/>
                <main>
                    <HeroSection/>
                    <AboutSection/>
                </main>
            </Router>

        </>
    );
}

export default App;