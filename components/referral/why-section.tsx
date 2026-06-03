const cards = [
  {
    num: "01 / Software-Driven",
    title: (
      <>
        <em>Software-driven,</em> not contractor-driven.
      </>
    ),
    desc: "Lumen uses proprietary data and automation to identify viable projects, model economics, and match buildings with the right developers. Your clients get faster answers and better outcomes.",
  },
  {
    num: "02 / Marketplace",
    title: (
      <>
        A curated bench. <em>Real options.</em>
      </>
    ),
    desc: "Lumen is the marketplace where institutional developers bid for C&I projects. Your client sees real, competing offers from people who actually want the deal — not a cold list of names.",
  },
  {
    num: "03 / Partnership",
    title: (
      <>
        We treat referrers as <em>long-term partners.</em>
      </>
    ),
    desc: "Most of our pipeline comes from people who sent us a second deal, then a third. We design the program to be worth your repeat attention.",
  },
];

export function WhySection() {
  return (
    <section className="section-pad">
      <div className="container">
        <div
          className="section-header"
          style={{ gridTemplateColumns: "minmax(0, 0.7fr) minmax(0, 1.3fr)" }}
        >
          <div>
            <div className="eyebrow">05 &nbsp;/&nbsp; Why Lumen</div>
            <h2 style={{ marginTop: "24px" }}>A product worth referring.</h2>
          </div>
          <p className="lead" style={{ maxWidth: "none" }}>
            Referral programs only create value when the underlying product
            delivers. Here&apos;s what your clients are getting.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="why-grid">
          {cards.map((c, i) => (
            <article key={i} className="why-card">
              <div className="why-num">&mdash; {c.num}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
