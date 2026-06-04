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
          </div>
          <div className="footer-col">
            <h5>Discover</h5>
            <ul>
              <li>
                <a href="https://getlumen.com/platform">Platform</a>
              </li>
              <li>
                <a href="https://getlumen.com/developers-and-epc">Developers + EPCs</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="https://getlumen.com/about">About</a>
              </li>
              <li>
                <a href="https://getlumen.com/careers">Careers</a>
              </li>
              <li>
                <a href="https://getlumen.com/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>News & Updates</h5>
            <ul>
              <li>
                <a href="https://getlumen.com/resources">Resources</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <span>&copy; 2026 Lumen Energy. All rights reserved.</span>
            <a href="https://getlumen.com/legal/privacy-policy">Privacy Policy</a>
            <a href="https://getlumen.com/legal/terms-of-service">Terms of Service</a>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a href="https://www.youtube.com/@LumenEnergy" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="ti ti-brand-youtube" style={{ fontSize: "20px" }}></i>
            </a>
            <a href="https://www.linkedin.com/company/lumen-energy-inc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="ti ti-brand-linkedin" style={{ fontSize: "20px" }}></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
