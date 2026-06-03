export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="eyebrow hero-eyebrow">
              Lumen Energy &nbsp;/&nbsp; Referral Network
            </div>
            <h1>
              Become the
              <br />
              person who&nbsp;brings
              <br />
              their clients
              <br />
              a{" "}
              <em
                style={{
                  color: "#1a1a1a",
                  background:
                    "linear-gradient(180deg, transparent 22%, var(--yellow) 22%)",
                  padding: "0 0.12em",
                }}
              >
                real answer
              </em>
              <br />
              about solar.
            </h1>
            <p className="hero-sub" style={{ color: "#ffffff" }}>
              Join Lumen&apos;s referral network and become a trusted resource
              the next time a client asks about putting solar on a roof.{" "}
              <strong style={{ color: "#ffffff" }}>
                You make the warm introduction
              </strong>{" "}
              &mdash; we run a competitive bid with vetted developers, structure
              the deal, and keep your client in the driver&apos;s seat.{" "}
              <em style={{ color: "#ffffff" }}>
                And yes, we pay you when projects close.
              </em>
            </p>
            <div className="hero-ctas">
              <a href="#join" className="btn btn-primary">
                Join the network
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

          <aside className="hero-card" aria-label="What you give your client">
            <div className="hero-card-title">What you give your client</div>
            <ul className="hero-card-list">
              <li>
                <span className="hcl-mark">01</span>
                <span className="hcl-text">
                  <strong>A real feasibility answer</strong> in writing &mdash;
                  not a sales pitch.
                </span>
              </li>
              <li>
                <span className="hcl-mark">02</span>
                <span className="hcl-text">
                  <strong>A path to NOI</strong> from a roof or piece of land
                  they&apos;re currently getting nothing from.
                </span>
              </li>
              <li>
                <span className="hcl-mark">03</span>
                <span className="hcl-text">
                  <strong>A competitive bid process</strong> with developers
                  we&apos;ve already vetted &mdash; not a single
                  take-it-or-leave-it pitch.
                </span>
              </li>
              <li>
                <span className="hcl-mark">04</span>
                <span className="hcl-text">
                  <strong>No cost, no commitment</strong> to look at the deal.
                </span>
              </li>
            </ul>
            <div className="hero-card-foot">
              <span className="hcf-label">And you</span>
              <span className="hcf-text">Referral fee at project close</span>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}
