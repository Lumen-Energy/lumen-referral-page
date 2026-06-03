import Image from "next/image";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image
              src="/assets/horizontal_black.png"
              alt="Lumen Energy"
              width={140}
              height={22}
              style={{ height: "22px", width: "auto" }}
            />
            <p>Cut carbon profitably.</p>
          </div>
          <div className="footer-col">
            <h5>Program</h5>
            <ul>
              <li>
                <a href="#how">How it works</a>
              </li>
              <li>
                <a href="#criteria">What we look for</a>
              </li>
              <li>
                <a href="#markets">Markets</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#join">Join the network</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Lumen</h5>
            <ul>
              <li>
                <a href="https://lumen.energy">Main site</a>
              </li>
              <li>
                <a href="https://lumen.energy/about">About</a>
              </li>
              <li>
                <a href="https://lumen.energy/careers">Careers</a>
              </li>
              <li>
                <a href="https://lumen.energy/press">Press</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <ul>
              <li>
                <a href="mailto:partners@lumen.energy">partners@lumen.energy</a>
              </li>
              <li>
                <a href="https://linkedin.com/company/lumen-energy">LinkedIn</a>
              </li>
              <li>
                <a href="https://x.com/lumen_energy">X / Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>&copy; 2026 Lumen Energy, Inc.</div>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
