const steps = [
  {
    num: "01",
    title: "Make the introduction.",
    desc: "A warm intro to your client — an email loop-in, a quick three-way call, whatever's natural, and we'll take it from there",
  },
  {
    title: "Lumen vets the opportunity.",
    desc: "Before we kick-off development, we'll ensure the prospect is new, and then we'll work to make sure the project fits our marketplace.",
  },
  {
    title: "Lumen brings your client the best offer.",
    desc: "We will conduct feasibility, financial modeling, and run a competitive bidding process to bring your client the best offers. They pick the one that works.",
  },
  {
    title: "Project closes. You get paid.",
    desc: "When a deal is signed, 10% of every net dollar Lumen collects will be shared back with you.",
  },
];

export function HowSection() {
  return (
    <section id="how" className="section-pad-sm" style={{ paddingBottom: 0, background: "#ffffff" }}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">02 &nbsp;/&nbsp; How it works</div>
            <h2 style={{ marginTop: "24px" }}>Simple by design</h2>
          </div>
          <p className="lead">
            Designed to protect your client relationship and make getting solar easy.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="steps">
          {steps.map((s, index) => (
            <article className="step">
              <div className="step-num">
                {index}
                <sup>step</sup>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
