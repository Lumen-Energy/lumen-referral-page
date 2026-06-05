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
        </div>

        <div className="form-wrap">

          <div className="form-stack" style={{ background: "var(--sand-100)", padding: "2rem", borderRadius: "8px" }}>
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
