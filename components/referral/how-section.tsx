const steps = [
  {
    num: "01",
    title: "Make the introduction.",
    desc: "A warm intro to your client — an email loop-in, a quick three-way call, whatever's natural. We don't want a name we have to cold-chase. The intro is the whole job on your end.",
    highlight: false,
  },
  {
    num: "02",
    title: "We run the process. Your client picks the best offer.",
    desc: "Feasibility, financial modeling, and a competitive bid from developers we've vetted. We bring the offers to your client; they pick the one that works. You stay in the loop or step away.",
    highlight: false,
  },
  {
    num: "03",
    title: "Project closes. You get paid for the introduction.",
    desc: "Referral fee at financial close — or revenue share for the life of the project on portfolio deals. The structure is agreed in writing before any work starts.",
    highlight: true,
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
            Designed around protecting your client relationship first, and your
            time second.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="steps">
          {steps.map((s) => (
            <article key={s.num} className="step">
              <div className="step-num">
                {s.num}
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
