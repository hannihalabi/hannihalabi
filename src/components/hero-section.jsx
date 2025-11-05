export default function HeroSection() {
  const horizontalLineCount = 5;
  const verticalLineCount = 4;

  return (
    <section className="hero-section">
      <div className="hero-accents">
        <div className="hero-accents__group hero-accents__group--horizontal">
          {Array.from({ length: horizontalLineCount }, (_, index) => (
            <div
              key={`horizontal-${index}`}
              className="hero-accents__stripe hero-accents__stripe--horizontal"
            />
          ))}
        </div>
        <div className="hero-accents__group hero-accents__group--vertical">
          {Array.from({ length: verticalLineCount }, (_, index) => (
            <div
              key={`vertical-${index}`}
              className="hero-accents__stripe hero-accents__stripe--vertical"
            />
          ))}
        </div>
      </div>
      <div className="heroSubP">
        <p>Introducing</p>
      </div>
      <div className="hero">
        <div className="heroT">
          <h2>Hanni Halabi</h2>
        </div>
      </div>
      <p className="heroP">
        Learn to take back the control of your time <br />
        Master the art of Artificial Intelligence.
      </p>
      <div className="hero-section__divider" aria-hidden="true" />
    </section>
  );
}
