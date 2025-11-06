import HeroSection from './components/hero-section.jsx';
import ParticleCanvas from './components/particlecanvas.jsx';
import Spotlight from './components/spotlight.jsx';
import MidSpot from './components/mid-spot.jsx';

// App-komponenten bygger hela sidans struktur och binder samman layout och effekter.
export default function App() {
  return (
    <div className="page">
      <div className="spotlight-wrapper">
        <MidSpot />
        <Spotlight />
      </div>
      <ParticleCanvas />
      <HeroSection />
    </div>
  );
}
