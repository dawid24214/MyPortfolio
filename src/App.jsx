import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import {Route, Router, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Router location={location} navigator={navigator}>
                <Header />  {/* ← stały komponent */}

            </Router>

        </>
    );
}

export default App;