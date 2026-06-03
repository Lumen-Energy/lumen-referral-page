"use client";

import { useState, useEffect, useCallback, type FormEvent } from "react";

type FormTab = "join" | "deal";

const advisorOptions = [
  { id: "adv-cre", value: "cre", label: "CRE brokerage" },
  { id: "adv-roof", value: "roof", label: "Roofing contractor" },
  { id: "adv-law", value: "law", label: "Real estate / energy law" },
  { id: "adv-pm", value: "pm", label: "Property management" },
  { id: "adv-sust", value: "sust", label: "Sustainability consulting" },
  { id: "adv-eng", value: "eng", label: "Energy advisor / broker" },
  { id: "adv-other", value: "other", label: "Something else" },
];

const marketOptions = [
  { id: "mkt-il", value: "IL" },
  { id: "mkt-nj", value: "NJ" },
  { id: "mkt-ny", value: "NY" },
  { id: "mkt-md", value: "MD" },
  { id: "mkt-ct", value: "CT" },
  { id: "mkt-dc", value: "DC" },
  { id: "mkt-va", value: "VA" },
  { id: "mkt-ma", value: "MA" },
  { id: "mkt-ca", value: "CA" },
  { id: "mkt-ri", value: "RI" },
  { id: "mkt-out", value: "other", label: "Other / outside these" },
];

const HINTS = {
  join: 'Most people start here — we\'ll set up an ongoing relationship so you can send things our way as they come up. <a href="#" data-form-tab="deal" style="color: var(--yellow); border-bottom: 1px solid currentColor;">Already have a specific building in mind?</a>',
  deal: 'You\'ve got something specific in mind. Tell us what you know — we\'ll come back with a yes, a no, or a question. <a href="#" data-form-tab="join" style="color: var(--yellow); border-bottom: 1px solid currentColor;">Or join the network instead.</a>',
};

export function FormSection() {
  const [activeTab, setActiveTab] = useState<FormTab>("join");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successKind, setSuccessKind] = useState<FormTab>("join");

  // Partner form state
  const [partnerErrors, setPartnerErrors] = useState<Record<string, boolean>>(
    {}
  );
  const [partnerSubmitting, setPartnerSubmitting] = useState(false);

  // Deal form state
  const [dealErrors, setDealErrors] = useState<Record<string, boolean>>({});
  const [dealSubmitting, setDealSubmitting] = useState(false);

  const switchTab = useCallback((tab: FormTab) => {
    setActiveTab(tab);
    setShowSuccess(false);
  }, []);

  // Handle form tab links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("[data-form-tab]") as HTMLElement | null;
      if (link) {
        e.preventDefault();
        const tab = link.dataset.formTab as FormTab;
        switchTab(tab);
        const sect = document.getElementById("join");
        if (sect) {
          const rect = sect.getBoundingClientRect();
          window.scrollTo({
            top: window.scrollY + rect.top - 40,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [switchTab]);

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const handlePartnerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const errors: Record<string, boolean> = {};
    const name = (formData.get("name") as string)?.trim() || "";
    const role = (formData.get("role") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const advisors = formData.getAll("advisor");

    if (!name) errors.name = true;
    if (!role) errors.role = true;
    if (!isEmail(email)) errors.email = true;
    if (advisors.length === 0) errors.advisor = true;

    setPartnerErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setPartnerSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setPartnerSubmitting(false);
      setSuccessKind("join");
      setShowSuccess(true);
    }, 1000);
  };

  const handleDealSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const errors: Record<string, boolean> = {};
    const name = (formData.get("name") as string)?.trim() || "";
    const company = (formData.get("company") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const intro = formData.get("intro");

    if (!name) errors.name = true;
    if (!company) errors.company = true;
    if (!isEmail(email)) errors.email = true;
    if (!intro) errors.intro = true;

    setDealErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setDealSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setDealSubmitting(false);
      setSuccessKind("deal");
      setShowSuccess(true);
    }, 1000);
  };

  const clearError = (
    setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
    field: string
  ) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  return (
    <section id="join" className="form-section section-pad">
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
            {!showSuccess && (
              <>
                <div
                  className="form-tabs"
                  role="tablist"
                  aria-label="Choose how to start"
                >
                  <button
                    type="button"
                    className={`form-tab ${activeTab === "join" ? "active" : ""}`}
                    onClick={() => switchTab("join")}
                    role="tab"
                    aria-selected={activeTab === "join"}
                  >
                    <span className="tab-mono">01 /</span> Join the network
                  </button>
                  <button
                    type="button"
                    className={`form-tab ${activeTab === "deal" ? "active" : ""}`}
                    onClick={() => switchTab("deal")}
                    role="tab"
                    aria-selected={activeTab === "deal"}
                  >
                    <span className="tab-mono">02 /</span> Submit a specific
                    deal
                  </button>
                </div>
                <p
                  className="form-switch-hint"
                  dangerouslySetInnerHTML={{ __html: HINTS[activeTab] }}
                />
              </>
            )}

            {/* Partner Form */}
            {activeTab === "join" && !showSuccess && (
              <form
                className="referral-form partner-form"
                onSubmit={handlePartnerSubmit}
                noValidate
              >
                <div className="field-row">
                  <div className={`field ${partnerErrors.name ? "error" : ""}`}>
                    <label htmlFor="p-name">
                      Your name<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="p-name"
                      name="name"
                      required
                      placeholder="Casey Morgan"
                      autoComplete="name"
                      onChange={() => clearError(setPartnerErrors, "name")}
                    />
                    <div className="err-msg">Please enter your name</div>
                  </div>
                  <div className={`field ${partnerErrors.role ? "error" : ""}`}>
                    <label htmlFor="p-role">
                      Your role &amp; company<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="p-role"
                      name="role"
                      required
                      placeholder="Principal, Morgan Realty Partners"
                      autoComplete="organization-title"
                      onChange={() => clearError(setPartnerErrors, "role")}
                    />
                    <div className="err-msg">
                      Please enter your role and company
                    </div>
                  </div>
                </div>

                <div className="field-row">
                  <div
                    className={`field ${partnerErrors.email ? "error" : ""}`}
                  >
                    <label htmlFor="p-email">
                      Work email<span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="p-email"
                      name="email"
                      required
                      placeholder="casey@morganrp.com"
                      autoComplete="email"
                      onChange={() => clearError(setPartnerErrors, "email")}
                    />
                    <div className="err-msg">Please enter a valid email</div>
                  </div>
                  <div className="field">
                    <label htmlFor="p-phone">Phone</label>
                    <input
                      type="tel"
                      id="p-phone"
                      name="phone"
                      placeholder="(415) 555–0142"
                      autoComplete="tel"
                    />
                    <div className="err-msg">&nbsp;</div>
                  </div>
                </div>

                <div
                  className={`field ${partnerErrors.advisor ? "error" : ""}`}
                >
                  <label>
                    What best describes your work?<span className="req">*</span>
                  </label>
                  <div
                    className="chip-group"
                    role="group"
                    aria-label="Type of advisor"
                  >
                    {advisorOptions.map((opt) => (
                      <span key={opt.id}>
                        <input
                          type="checkbox"
                          name="advisor"
                          id={opt.id}
                          value={opt.value}
                          onChange={() =>
                            clearError(setPartnerErrors, "advisor")
                          }
                        />
                        <label htmlFor={opt.id}>{opt.label}</label>
                      </span>
                    ))}
                  </div>
                  <div className="err-msg" style={{ marginTop: "8px" }}>
                    Pick at least one
                  </div>
                </div>

                <div className="field">
                  <label>Where are your clients&apos; buildings?</label>
                  <div
                    className="chip-group"
                    role="group"
                    aria-label="Markets"
                  >
                    {marketOptions.map((opt) => (
                      <span key={opt.id}>
                        <input
                          type="checkbox"
                          name="market"
                          id={opt.id}
                          value={opt.value}
                        />
                        <label htmlFor={opt.id}>
                          {opt.label || opt.value}
                        </label>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>
                    How often do solar-relevant opportunities cross your desk?
                  </label>
                  <div className="radio-group" role="radiogroup">
                    <input
                      type="radio"
                      name="frequency"
                      id="freq-occ"
                      value="occasional"
                      defaultChecked
                    />
                    <label htmlFor="freq-occ">Now and then</label>
                    <input
                      type="radio"
                      name="frequency"
                      id="freq-mo"
                      value="monthly"
                    />
                    <label htmlFor="freq-mo">A few times a month</label>
                    <input
                      type="radio"
                      name="frequency"
                      id="freq-wk"
                      value="weekly"
                    />
                    <label htmlFor="freq-wk">Constantly</label>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="p-notes">Anything else we should know?</label>
                  <textarea
                    id="p-notes"
                    name="notes"
                    placeholder="Types of clients you serve, portfolios you have relationships with, deals you're thinking about — whatever helps us be useful to you."
                  ></textarea>
                </div>

                <div className="form-actions">
                  <p className="small">
                    By joining you agree we can contact you about the network.
                    We don&apos;t share your information with anyone else.
                  </p>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={partnerSubmitting}
                    style={{ opacity: partnerSubmitting ? 0.55 : 1 }}
                  >
                    {partnerSubmitting ? "Submitting..." : "Join the network"}
                    <i className="ti ti-arrow-right"></i>
                  </button>
                </div>
              </form>
            )}

            {/* Deal Form */}
            {activeTab === "deal" && !showSuccess && (
              <form
                className="referral-form deal-form"
                onSubmit={handleDealSubmit}
                noValidate
              >
                <div className="field-row">
                  <div className={`field ${dealErrors.name ? "error" : ""}`}>
                    <label htmlFor="d-name">
                      Your name<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="d-name"
                      name="name"
                      required
                      placeholder="Casey Morgan"
                      autoComplete="name"
                      onChange={() => clearError(setDealErrors, "name")}
                    />
                    <div className="err-msg">Please enter your name</div>
                  </div>
                  <div className={`field ${dealErrors.company ? "error" : ""}`}>
                    <label htmlFor="d-company">
                      Company<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="d-company"
                      name="company"
                      required
                      placeholder="Morgan Realty Partners"
                      autoComplete="organization"
                      onChange={() => clearError(setDealErrors, "company")}
                    />
                    <div className="err-msg">Please enter your company</div>
                  </div>
                </div>

                <div className="field-row">
                  <div className={`field ${dealErrors.email ? "error" : ""}`}>
                    <label htmlFor="d-email">
                      Email<span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="d-email"
                      name="email"
                      required
                      placeholder="casey@morganrp.com"
                      autoComplete="email"
                      onChange={() => clearError(setDealErrors, "email")}
                    />
                    <div className="err-msg">Please enter a valid email</div>
                  </div>
                  <div className="field">
                    <label htmlFor="d-phone">Phone</label>
                    <input
                      type="tel"
                      id="d-phone"
                      name="phone"
                      placeholder="(415) 555–0142"
                      autoComplete="tel"
                    />
                    <div className="err-msg">&nbsp;</div>
                  </div>
                </div>

                <div className="field">
                  <label>
                    What are you referring?<span className="req">*</span>
                  </label>
                  <div className="radio-group" role="radiogroup">
                    <input
                      type="radio"
                      name="type"
                      id="type-building"
                      value="building"
                      defaultChecked
                    />
                    <label htmlFor="type-building">A building</label>
                    <input
                      type="radio"
                      name="type"
                      id="type-contact"
                      value="contact"
                    />
                    <label htmlFor="type-contact">A contact</label>
                    <input
                      type="radio"
                      name="type"
                      id="type-both"
                      value="both"
                    />
                    <label htmlFor="type-both">Both</label>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="d-address">Building address</label>
                  <input
                    type="text"
                    id="d-address"
                    name="address"
                    placeholder="123 Industrial Way, Joliet IL 60431"
                    autoComplete="street-address"
                  />
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="d-contactName">Contact name &amp; role</label>
                    <input
                      type="text"
                      id="d-contactName"
                      name="contactName"
                      placeholder="Dana Reyes, VP Real Estate"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="d-hearAbout">
                      How did you hear about Lumen?
                    </label>
                    <select id="d-hearAbout" name="hearAbout" defaultValue="">
                      <option value="" disabled>
                        Pick one
                      </option>
                      <option>Existing partner / referrer</option>
                      <option>Colleague or peer</option>
                      <option>LinkedIn</option>
                      <option>Industry event or conference</option>
                      <option>Press / podcast</option>
                      <option>Search</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="d-notes">
                    What do you know about the opportunity?
                  </label>
                  <textarea
                    id="d-notes"
                    name="notes"
                    placeholder="Roof size, tenant credit, who the decision-maker is, whether anyone else has pitched them, anything you think matters. The more context, the faster we can respond."
                  ></textarea>
                </div>

                <div className={`field intro-pledge ${dealErrors.intro ? "error" : ""}`}>
                  <div className="chip-group single" role="group">
                    <input
                      type="checkbox"
                      name="intro"
                      id="d-intro"
                      value="yes"
                      onChange={() => clearError(setDealErrors, "intro")}
                    />
                    <label htmlFor="d-intro">
                      <strong>
                        I&apos;ll make a warm introduction to my client.
                      </strong>{" "}
                      An email loop-in, a quick call, whatever works — we
                      don&apos;t chase cold contacts.
                    </label>
                  </div>
                  <div className="err-msg" style={{ marginTop: "8px" }}>
                    Please confirm you&apos;ll make the introduction
                  </div>
                </div>

                <div className="form-actions">
                  <p className="small">
                    By submitting you agree we can contact you about this
                    referral. We don&apos;t share your information with anyone
                    else.
                  </p>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={dealSubmitting}
                    style={{ opacity: dealSubmitting ? 0.55 : 1 }}
                  >
                    {dealSubmitting ? "Submitting..." : "Send it over"}
                    <i className="ti ti-arrow-right"></i>
                  </button>
                </div>
              </form>
            )}

            {/* Success State */}
            {showSuccess && (
              <div className="form-success active" tabIndex={-1}>
                <div className="mark">
                  <i className="ti ti-check"></i>
                </div>
                <h3>
                  {successKind === "join"
                    ? "Welcome to the network."
                    : "Got it. We'll be in touch."}
                </h3>
                <p>
                  {successKind === "join" ? (
                    <>
                      You&apos;re in. Someone from our partnerships team will
                      reach out within the next two business days with a
                      personal intro, a few one-pagers you can hand to clients,
                      and a direct line to use whenever you want to talk through
                      a building or relationship.
                    </>
                  ) : (
                    <>
                      Your referral is in front of our partnerships team.
                      You&apos;ll hear back from a real person at{" "}
                      <strong>partners@lumen.energy</strong> within the next two
                      business days — sooner if the opportunity is
                      time-sensitive.
                    </>
                  )}
                </p>
                <p>
                  If something time-sensitive comes up before then, just reply
                  to that email and we&apos;ll loop it in.
                </p>
                <div className="sig">
                  — The Lumen partnerships team
                  <small>Real humans. Real reply.</small>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
