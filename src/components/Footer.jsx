export default function Footer({ year }) {
    return (
        <footer style={{ padding: "28px 0 34px", color: "rgba(159,176,214,.8)", borderTop: "1px solid rgba(30,42,74,.65)" }}>
            <div className="container">
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                    <div>© {year} • Grochowski Dawid</div>
                </div>
            </div>
        </footer>
    );
}
