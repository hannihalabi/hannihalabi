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
          <div className="hero-cta">
            <CTAButton label="Get in touch" />
          </div>
        </div>
      </div>
      <p className="heroP">
        Create by discovery <br />
        Master the art of Artificial Intelligence.
      </p>
    </section>
  );
}
