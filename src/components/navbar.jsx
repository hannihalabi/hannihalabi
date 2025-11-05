import Spotlight from './spotlight.jsx';

export default function Navbar() {
  return (
    <header className="header">
      <h2>
        <a href="https://codepen.io/RAFA3L" target="_blank" rel="noopener noreferrer">
          RAFA
        </a>
      </h2>
      <div className="mid-spot" />
      <button type="button" className="contact-btn">
        <span className="glow" />
        <span className="contact-btn-content">Contact Us</span>
      </button>
      <Spotlight />
    </header>
  );
}

