const personas = [
  {
    num: "01",
    icon: "ti-building-skyscraper",
    title: "CRE brokers",
    desc: "Add value to landlord and tenant clients without lifting a finger.",
  },
  {
    num: "02",
    icon: "ti-tools",
    title: "Roofing contractors",
    desc: "Pair roof work with a solar revenue stream for your customer.",
  },
  {
    num: "03",
    icon: "ti-gavel",
    title: "Real estate & energy attorneys",
    desc: "Bring a credible solar partner to clients exploring on-site generation.",
  },
  {
    num: "04",
    icon: "ti-key",
    title: "Property managers",
    desc: "Turn underutilized roofs into NOI without changing a thing operationally.",
  },
  {
    num: "05",
    icon: "ti-presentation",
    title: "Sustainability & energy advisors",
    desc: "Plug Lumen in when your clients need a real bid process, not another deck.",
  },
  {
    num: "06",
    icon: "ti-users",
    title: "Anyone with the right relationship",
    desc: "If you know a building owner or a large tenant, we want to talk.",
  },
];

export function WhoSection() {
  return (
    <section id="who" className="section-pad">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">01 &nbsp;/&nbsp; Who it&apos;s for</div>
            <h2 style={{ marginTop: "24px" }}>
              If you advise people who own or
              <br />
              occupy buildings, this is for you.
            </h2>
          </div>
          <p className="lead">
            We work with people who already have the trust. You bring the
            relationship; we bring the developer bench, the bid process, and the
            deal structuring. Most of our best referrals come from one of these:
          </p>
        </div>
      </div>

      <div className="container">
        <div className="personas-grid">
          {personas.map((p) => (
            <div key={p.num} className="persona">
              <div className="persona-num">&mdash; {p.num}</div>
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
