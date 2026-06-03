import Image from "next/image";

export function ProofBand() {
  return (
    <section className="proof-band" aria-label="A typical Lumen project">
      <Image
        src="/assets/rooftop.jpg"
        className="proof-band-img"
        alt="A flat industrial rooftop covered in solar panels at golden hour."
        width={1920}
        height={640}
        style={{
          width: "100%",
          height: "clamp(360px, 52vw, 640px)",
          objectFit: "cover",
          objectPosition: "center 65%",
        }}
      />
      <div className="proof-band-overlay"></div>
      <div className="proof-band-content">
        <div className="container">
          <p className="proof-band-quote">
            Roughly the kind of building
            <br />
            we&apos;re <em>actually</em> talking about.
          </p>
        </div>
      </div>
    </section>
  );
}
