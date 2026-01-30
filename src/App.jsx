import { useEffect , useMemo , useState } from "react";
import SideBar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import WhyDev from "./components/WhyDev.jsx";
import TimeLine from "./components/TimeLine.jsx";
import Contact from "./components/Contact.jsx";
import Certification from "./components/Certification.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    const [sidebarHidden, setSidebarHidden] = useState(false);



    useEffect(() => {
        try {
            const saved = localStorage.getItem("sidebarHidden");
            // eslint-disable-next-line react-hooks/set-state-in-effect
            if (saved === "1") setSidebarHidden(true);

        } catch {''}

    }, [sidebarHidden]);
    const year = useMemo(() => new Date().getFullYear(), []);

    return (
        <>
        <div className = 'grid-bg' aria-hidden='true'/>

            <SideBar
            hidden={sidebarHidden}
            onToggle={() => setSidebarHidden((v) => !v)}
                onOpen={()=>setSidebarHidden(false)}
            />

               <main className={`main ${sidebarHidden ? 'main--hidden': ''}`} id='top'>
                   <Hero/>
                   <About/>
                   <Skills/>
                   <Projects/>
                   <WhyDev/>
                   <TimeLine/>
                   <Contact/>
                   <Certification/>
               </main>

            <Footer year={year} />

        </>
    );

}