import Image from "next/image";

export function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label="Lumen Energy home">
          <Image
            src="/assets/horizontal_black.png"
            alt="Lumen Energy"
            width={120}
            height={18}
            style={{ height: "18px", width: "auto" }}
          />
          <span className="tag">Referral Program</span>
        </a>
        <div className="nav-links">
          <a href="#who" className="nav-link-text">
            Who it&apos;s for
          </a>
          <a href="#criteria" className="nav-link-text">
            What we look for
          </a>
          <a href="#markets" className="nav-link-text">
            Markets
          </a>
          <a href="#how" className="nav-link-text">
            How it works
          </a>
          <a href="#faq" className="nav-link-text">
            FAQ
          </a>
          <a href="#join" className="nav-cta">
            Join the network
          </a>
        </div>
      </div>
    </nav>
  );
}
