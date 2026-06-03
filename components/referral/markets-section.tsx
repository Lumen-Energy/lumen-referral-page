import { USMap } from "./us-map";

const marketLists = [
  [
    {
      code: "IL",
      name: "Illinois",
      desc: "Illinois Shines and community solar — one of the most active rooftop markets in the country.",
    },
    {
      code: "NJ",
      name: "New Jersey",
      desc: "Community solar and SuSI — deep program support for industrial roofs.",
    },
    {
      code: "NY",
      name: "New York",
      desc: "Value Stack and community DG — layered incentives, complex but lucrative.",
    },
    {
      code: "MD",
      name: "Maryland",
      desc: "Community solar pilot and SREC market — strong fundamentals.",
    },
  ],
  [
    {
      code: "MA",
      name: "Massachusetts",
      desc: "SMART program — mature, well-understood, project-friendly.",
    },
    {
      code: "CA",
      name: "California",
      desc: "NEM 3.0 economics, SGIP storage incentives, and a deep C&I retrofit market.",
    },
    {
      code: "RI",
      name: "Rhode Island",
      desc: "Renewable Energy Growth (REG) program and strong net metering for C&I.",
    },
  ],
  [
    {
      code: "CT",
      name: "Connecticut",
      desc: "NRES and SCEF programs — predictable economics for landlord projects.",
    },
    {
      code: "DC",
      name: "District of Columbia",
      desc: "Highest-value SREC market in the country, period.",
    },
    {
      code: "VA",
      name: "Virginia",
      desc: "Shared solar and data-center load growth — major opportunity.",
    },
  ],
];

export function MarketsSection() {
  return (
    <section id="markets" className="markets section-pad">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">03 &nbsp;/&nbsp; Where we operate</div>
            <h2 style={{ marginTop: "24px" }}>
              Eight core markets.
              <br />
              The right project travels.
            </h2>
          </div>
          <p className="lead">
            These are the states where we can move fastest because the policy
            programs, interconnection, and incentives line up &mdash; but
            we&apos;re expanding constantly.{" "}
            <strong style={{ color: "var(--fg)", fontWeight: 500 }}>
              Outside these markets? Send it anyway.
            </strong>{" "}
            The right project travels.
          </p>
        </div>

        <div className="markets-layout">
          <div className="us-map-wrap">
            <USMap />
            <div className="us-map-legend">
              <span>
                <span className="swatch op"></span>Active markets
              </span>
              <span>
                <span className="swatch nm"></span>Expanding into
              </span>
            </div>
          </div>

          {marketLists.map((list, i) => (
            <ul key={i} className="market-list">
              {list.map((m) => (
                <li key={m.code}>
                  <span className="ml-code">{m.code}</span>
                  <div className="ml-text">
                    <strong>{m.name}</strong>
                    {m.desc}
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
