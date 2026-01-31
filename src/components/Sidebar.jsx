export default function Sidebar({ hidden, onToggle, onOpen }) {
    return (
        <>
            <header className={`sidebar ${hidden ? "hidden" : ""}`} id="sidebar">
                <div className="sidebar__inner">
                    <button className="pill" type="button" onClick={onToggle} aria-label="Pokaż/ukryj nawigację">
                        ☰ Menu
                    </button>

                    <a className="brand" href="#top" aria-label="Przejdź do góry">
                        <span className="logo" aria-hidden="true" />
                        <span>
              Dawid <span style={{ color: "var(--blue)" }}>Grochowski</span>
            </span>
                    </a>

                    <nav className="navlinks" aria-label="Nawigacja">
                        <a className="pill" href="#about">O mnie</a>
                        <a className="pill" href="#skills">Umiejętności</a>
                        <a className="pill" href="#projects">Projekty</a>
                        <a className="pill" href="#timeline">Doświadczenie</a>
                        <a className="pill" href="#contact">Kontakt</a>
                        <a className="btn" href="#contact">Zatrudnij mnie →</a>
                    </nav>

                    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
                        <a className="pill" href="#top">↑ Góra</a>
                    </div>
                </div>
            </header>

            {/* FAB istnieje zawsze, ale pokazuje się TYLKO gdy body ma sidebar-hidden */}
            <div className="sidebar-fab">
                <button className="pill" type="button" onClick={onOpen}>
                    ☰ Menu
                </button>
            </div>
        </>
    );
}
