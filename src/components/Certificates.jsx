export default function Certificates() {
    return (
        <section id="certificates">
            <div className="container">
                <div className="section-title">
                    <div>
                        <h2>Certyfikaty</h2>
                        <p>Potwierdzenie kompetencji i ciągłego rozwoju.</p>
                    </div>
                </div>

                <div className="mini" style={{ display: "flex", justifyContent: "center" }}>
                    {/* wrzuć plik do /public/certyfikaty.jpg */}
                    <img
                        src="/certyfikaty.jpg"
                        alt="Certyfikaty Dawida Grochowskiego"
                        style={{
                            maxWidth: "100%",
                            borderRadius: 18,
                            border: "1px solid rgba(30,42,74,.75)",
                            boxShadow: "0 20px 60px rgba(0,0,0,.45)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
