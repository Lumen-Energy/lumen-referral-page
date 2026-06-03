const faqs = [
  {
    num: "01",
    q: "What's the difference between joining the network and submitting a deal?",
    a: (
      <>
        <p>
          Joining the network sets up an ongoing relationship: you get a partner
          contact, the one-pagers and case studies your clients want to see, and
          the ability to bring us anything that comes up over time. No specific
          deal required — most people join before they have one in mind.
        </p>
        <p>
          Submitting a deal is exactly what it sounds like. You have a specific
          building or contact today, and you want eyes on it. You can do that
          without joining the network — though most people do both.
        </p>
      </>
    ),
  },
  {
    num: "02",
    q: "What size projects do you take on?",
    a: (
      <>
        <p>
          Our sweet spot is rooftops of <strong>100,000 sq ft and up</strong>,
          but we&apos;ll review anything from 50,000 sq ft if the economics
          support it. We&apos;ll also look at standalone battery storage and
          ground-mount installations adjacent to existing facilities.
        </p>
        <p>
          On the portfolio side, we love anything from a single building to a
          national footprint. Larger portfolios get priority because the unit
          economics get better.
        </p>
      </>
    ),
  },
  {
    num: "03",
    q: "Do I need to know anything about solar to refer?",
    a: (
      <p>
        No. We don&apos;t expect you to. If you know the building owner or
        tenant and can make an introduction, that&apos;s the whole job. We
        handle every technical, financial, and legal question from there.
      </p>
    ),
  },
  {
    num: "04",
    q: "What kind of introduction do you expect?",
    a: (
      <>
        <p>
          A warm one. The easiest version is a one-line email: you, us, your
          client, on the same thread. A three-way call also works. We don&apos;t
          cold-chase contacts on your behalf — if you just send us a name,
          we&apos;ll come back and ask for the intro.
        </p>
        <p>
          Once you&apos;ve made it, you decide how involved you stay. Some
          partners cc us on every email; others step away after the first
          message. We adapt.
        </p>
      </>
    ),
  },
  {
    num: "05",
    q: "What happens to my client relationship?",
    a: (
      <>
        <p>
          It stays yours. You decide how much to stay involved — cc&apos;d on
          every email, on the kickoff call only, or fully hands-off after the
          intro. We&apos;ll match whatever you and your client want.
        </p>
        <p>
          We&apos;re also happy to keep Lumen white-labeled in conversations
          until your client is ready to engage directly.
        </p>
      </>
    ),
  },
  {
    num: "06",
    q: "How and when do I get paid?",
    a: (
      <>
        <p>
          The standard structure is a{" "}
          <strong>referral fee at financial close</strong> on a signed PPA, with
          a follow-on payment at commercial operation date (COD). On larger
          portfolio deals, we can structure multi-stage fees that pay out as the
          project hits milestones.
        </p>
        <p>
          The exact amount depends on project size, market, and how much you
          want to be involved. We&apos;ll lay it out in writing before any work
          starts.
        </p>
      </>
    ),
  },
  {
    num: "07",
    q: "What if my client is outside your core markets?",
    a: (
      <p>
        Send it anyway. We&apos;re expanding fast, and the right project — the
        right credit, the right roof, the right size — can move us into a new
        market faster than you&apos;d expect. Worst case, we&apos;ll tell you in
        a week.
      </p>
    ),
  },
  {
    num: "08",
    q: "Can I refer multiple buildings?",
    a: (
      <p>
        Yes — please do. Most of our best partners refer portfolios, not
        one-offs. If you want, we&apos;ll set you up with a simple shared sheet
        so you can drop buildings into our pipeline as you come across them.
      </p>
    ),
  },
  {
    num: "09",
    q: "Is the referral exclusive?",
    a: (
      <p>
        For 30 days after you submit a building or contact, the opportunity is
        yours. After that, the exclusivity rolls forward as long as the
        conversation is active. If we close, you get paid regardless of how long
        the deal took — some of our best projects took two years.
      </p>
    ),
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-pad-sm">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">04 &nbsp;/&nbsp; Frequently asked</div>
          </div>
          <p className="lead">
            Still unsure?{" "}
            <a href="#join" style={{ borderBottom: "1px solid currentColor" }}>
              Join the network
            </a>{" "}
            — the form is short, no commitment, and we&apos;ll get back to you
            within two business days.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.num} className="faq-item">
              <summary>
                <span className="faq-num">{f.num}</span>
                <span>{f.q}</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div className="faq-body">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
