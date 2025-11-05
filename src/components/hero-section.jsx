import CTAButton from './cta-button.jsx';

export default function HeroSection() {
  return (
    <section className="hero-section">
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
      <div className="hero-cta">
        <CTAButton label="Get in touch" />
      </div>
    </section>
  );
}
