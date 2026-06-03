export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container">
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
          <div className="eyebrow hero-eyebrow">
            Lumen Energy Partner Network
          </div>
          <div className="hero-two-col" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", alignItems: "start" }}>
            <div>
              <h1>
                Earn revenue by connecting buildings to
                {" "}
                <em
                  style={{
                    color: "#1a1a1a",
                    background:
                      "linear-gradient(180deg, transparent 22%, var(--yellow) 22%)",
                    padding: "0 0.12em",
                  }}
                >
                  clean energy
                </em>
              </h1>
            </div>
            <div className="hero-right-col">
              <p className="hero-sub" style={{ color: "#ffffff", marginTop: 0 }}>
                Lumen works with commercial real estate advisors, roofing companies, facilities services providers, and ESG consultants who have trusted relationships with building owners. Refer a qualified client and earn a commission — no cap, no complexity.
              </p>
              <div className="hero-metrics" style={{ display: "flex", gap: "2.5rem", marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                <div>
                  <div style={{ color: "var(--yellow)", fontSize: "2rem", fontWeight: 600, lineHeight: 1.1 }}>10%</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: "0.25rem" }}>Referral Fee</div>
                </div>
                <div>
                  <div style={{ color: "var(--yellow)", fontSize: "2rem", fontWeight: 600, lineHeight: 1.1 }}>12 mo.</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: "0.25rem" }}>Earning Window</div>
                </div>
                <div>
                  <div style={{ color: "var(--yellow)", fontSize: "2rem", fontWeight: 600, lineHeight: 1.1 }}>45 days</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: "0.25rem" }}>Payment Terms</div>
                </div>
              </div>
              <div className="hero-ctas">
                <a href="#join" className="btn btn-primary">
                  Become a partner
                  <i className="ti ti-arrow-right"></i>
                </a>
                <a href="#how" className="btn btn-secondary">
                  How it works
                </a>
              </div>
              <p className="hero-deal-link" style={{ color: "#ffffff" }}>
                Or,{" "}
                <a
                  href="#join"
                  data-form-tab="deal"
                  style={{
                    color: "#ffffff",
                    borderBottomColor: "rgba(255,255,255,0.7)",
                  }}
                >
                  tell us about a specific deal right now &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
