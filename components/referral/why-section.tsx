const cards = [
  {
    num: "01 / Focus",
    title: (
      <>
        A marketplace <em>purpose-built</em> for commercial &amp; industrial.
      </>
    ),
    desc: "Every line of code, every model, every conversation is about C&I rooftops. We don't cover utility-scale or residential. That focus is why projects close here that stall elsewhere.",
  },
  {
    num: "02 / Hard projects",
    title: (
      <>
        We <em>structure the deals others walk away from.</em>
      </>
    ),
    desc: "Complex landlord–tenant splits. Brownfields. Retrofits. Mixed-use portfolios. The structures that take three meetings to explain — those are the ones we know how to match with the right developer.",
  },
  {
    num: "03 / Marketplace",
    title: (
      <>
        A curated bench. <em>Real options.</em>
      </>
    ),
    desc: "Lumen is the marketplace where institutional developers bid for C&I projects. Your client sees real, competing offers from people who actually want the deal — not a cold list of names.",
  },
  {
    num: "04 / Partnership",
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
