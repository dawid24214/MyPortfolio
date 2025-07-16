import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import {Route, Router, Routes} from "react-router-dom";
import HeroSection from "./components/HeroSection.jsx"


function App() {
    return (
        <>
            <Router location={location} navigator={navigator}>
                <Header />  {/* ← stały komponent */}
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                </Routes>

            </Router>

        </>
    );
}

export default App;