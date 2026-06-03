const idealSites = [
  {
    marker: "01",
    content: (
      <>
        <strong>100,000+ sq ft rooftops</strong> &mdash; the bigger the better.
      </>
    ),
  },
  {
    marker: "02",
    content: (
      <>
        <strong>
          Industrial, warehouse, distribution, manufacturing, big-box retail,
          cold storage, data centers, large office.
        </strong>
      </>
    ),
  },
  {
    marker: "03",
    content: (
      <>
        <strong>Unused ground space</strong> adjacent to facilities &mdash;
        great for paired or standalone battery storage.
      </>
    ),
  },
  {
    marker: "04",
    content: (
      <>
        <strong>Single or multi tenant</strong> &mdash; Blackstone/Link
        Logistics, Prologis, Realty Income, and similar.
      </>
    ),
  },
  {
    marker: "05",
    content: (
      <>
        <strong>Long remaining lease terms</strong> or owner-occupied buildings.
      </>
    ),
  },
];

const idealCounterparties = [
  {
    marker: "01",
    content: (
      <>
        <strong>Investment-grade tenants</strong> or institutional landlords.
      </>
    ),
  },
  {
    marker: "02",
    content: (
      <>
        <strong>Decision-makers</strong> who own real estate, energy
        procurement, or sustainability mandates.
      </>
    ),
  },
  {
    marker: "03",
    content: (
      <>
        <strong>Portfolio relationships.</strong> One site is great. Ten or more
        is even better.
      </>
    ),
  },
  {
    marker: "04",
    content: (
      <>
        <strong>Corporate tenants</strong> like Amazon and FedEx &mdash; the
        kind of credit that makes financing easy.
      </>
    ),
  },
  {
    marker: "05",
    content: (
      <>
        <strong>Owners exploring on-site generation</strong> for ESG, NOI, or
        resiliency reasons.
      </>
    ),
  },
];

export function CriteriaSection() {
  return (
    <section id="criteria" className="criteria-band section-pad">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow on-dark">
              02 &nbsp;/&nbsp; What we look for
            </div>
            <h2 style={{ marginTop: "24px" }}>
              Clear criteria.
              <br />
              <em>No guesswork.</em>
            </h2>
          </div>
          <p className="lead" style={{ color: "rgba(255,255,255,0.72)" }}>
            We&apos;re a C&amp;I-only marketplace. Below is what makes a project
            work for us. If you&apos;re unsure, send it anyway &mdash;
            we&apos;ll tell you within a couple days.
          </p>
        </div>

        <div className="criteria-grid">
          <div className="criteria-col">
            <h3>Ideal sites</h3>
            <ul className="criteria-list">
              {idealSites.map((item) => (
                <li key={item.marker}>
                  <span className="marker">{item.marker}</span>
                  <span>{item.content}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="criteria-col">
            <h3>Ideal counterparties</h3>
            <ul className="criteria-list">
              {idealCounterparties.map((item) => (
                <li key={item.marker}>
                  <span className="marker">{item.marker}</span>
                  <span>{item.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="criteria-note">
          <em>Worth knowing &mdash;</em> we&apos;ll evaluate{" "}
          <strong>standalone battery storage</strong> on its own merits in
          markets that support it. No solar required.
        </p>
      </div>
    </section>
  );
}
