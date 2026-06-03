const personas = [
  {
    icon: "ti-building-skyscraper",
    title: "CRE Advisory & Brokerage",
    desc: "Identify solar-ready properties during acquisition due diligence, listings, or portfolio reviews. Introduce Lumen at the moment building owners are making major decisions.",
  },
  {
    icon: "ti-tools",
    title: "Roofing Companies",
    desc: "Flag solar-ready roofs during inspections or project scoping. Your assessment is often what convinces an owner the roof is ready — a perfect moment to introduce Lumen.",
  },
  {
    icon: "ti-snowflake",
    title: "Snow Removal & Facilities",
    desc: "Leverage recurring site access and trusted vendor relationships to introduce Lumen to property managers. Your on-the-ground presence gives you an edge no cold caller has.",
  },
  {
    icon: "ti-leaf",
    title: "ESG Consultants",
    desc: "Present Lumen to clients with active sustainability mandates or net-zero commitments. Solar is often the highest-ROI action available — make it part of your roadmap.",
  },
];

export function WhoSection() {
  return (
    <section id="who" className="section-pad" style={{ background: "var(--sand-100)" }}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">01 &nbsp;/&nbsp; Who it&apos;s for</div>
            <h2 style={{ marginTop: "24px" }}>
              Built for businesses
              <br />
              that know buildings.
            </h2>
          </div>
          <p className="lead">
            If your work puts you in front of commercial property owners and
            managers, you&apos;re a natural fit for the Lumen Partner Network.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="personas-grid">
          {personas.map((p) => (
            <div className="persona">
              <div className="persona-icon">
                <i className={`ti ${p.icon}`}></i>
              </div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
