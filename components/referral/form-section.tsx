"use client";

import { useEffect } from "react";
import Script from "next/script";

export function FormSection() {
  useEffect(() => {
    // Re-initialize HubSpot form if it exists after client-side navigation
    if (typeof window !== "undefined" && (window as unknown as { hbspt?: { forms?: { create: (config: { region: string; portalId: string; formId: string; target: string }) => void } } }).hbspt?.forms) {
      const hbspt = (window as unknown as { hbspt: { forms: { create: (config: { region: string; portalId: string; formId: string; target: string }) => void } } }).hbspt;
      hbspt.forms.create({
        region: "na1",
        portalId: "20832032",
        formId: "79dbff09-b079-4091-9cc9-2b5eb7d2c9ea",
        target: "#hubspot-form-container"
      });
    }
  }, []);

  return (
    <section id="join" className="form-section section-pad">
      <Script
        src="https://js.hsforms.net/forms/embed/20832032.js"
        strategy="afterInteractive"
      />
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow on-dark">
              Join the network
            </div>
            <h2 style={{ marginTop: "24px" }}>
              Ready to start making introductions?
            </h2>
          </div>
          <p className="lead" style={{ color: "rgba(255,255,255,0.72)" }}>
            Joining the Lumen Partner Network takes a single email and a
            one-page agreement. There&apos;s no exclusivity, no minimum
            commitment, and no out-of-pocket cost.
          </p>
        </div>

        <div className="form-wrap">
          <aside className="form-aside">
            <div className="form-aside-divider"></div>
            <div className="form-aside-contact">
              <div className="row">
                <i className="ti ti-mail"></i>
                <a href="mailto:partners@lumen.energy">partners@lumen.energy</a>
              </div>
            </div>
          </aside>

          <div className="form-stack">
            <div
              id="hubspot-form-container"
              className="hs-form-frame"
              data-region="na1"
              data-form-id="79dbff09-b079-4091-9cc9-2b5eb7d2c9ea"
              data-portal-id="20832032"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
