// Importerar komponenten som ritar partiklarna i bakgrunden.
import ParticleCanvas from './components/ParticleCanvas.jsx';

// App-komponenten bygger hela sidans struktur och binder samman layout och effekter.
export default function App() {
  return (
    <div className="page">
      {/* Sidhuvud med logotyp, kontaktknapp och dekorativa ljuspunkter. */}
      <header className="header">
        <h2>
          {/* Länk till upphovspersonens CodePen-profil. */}
          <a href="https://codepen.io/RAFA3L" target="_blank" rel="noopener noreferrer">
            RAFA
          </a>
        </h2>
        {/* Dekorativ ljuspunkt i mitten av headern. */}
        <div className="mid-spot" />
        {/* Call-to-action knapp för att kontakta företaget. */}
        <button type="button" className="contact-btn">
          <span className="glow" />
          <span className="contact-btn-content">Contact Us</span>
        </button>
        {/* Spotlight-effekt med flera skikt av ljus. */}
        <div className="spotlight">
          <div />
          <div />
          <div />
        </div>
      </header>

      {/* Animerad partikelbakgrund som fyller sidan. */}
      <ParticleCanvas />

      {/* Hero-sektionen presenterar personen och budskapet. */}
      <section className="hero-section">
        {/* Vertikala accentlinjer som ger designen struktur. */}
        <div className="accent-lines">
          <div>
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div>
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>

        {/* Text som introducerar huvudpersonen. */}
        <div className="heroSubP">
          <p>Introducing</p>
        </div>

        {/* Namnet lyfts fram med stor rubrik. */}
        <div className="hero">
          <div className="heroT">
            <h2>Hanni Halabi</h2>
          </div>
        </div>

        {/* Kort beskrivning av vad besökaren får ut av tjänsten. */}
        <p className="heroP">
          Learn to take back the control of your time <br />
          Master the art of Artificial Intelligence.
        </p>

      </section>
    </div>
  );
}
