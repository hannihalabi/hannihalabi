import Navbar from './components/navbar.jsx';
import HeroSection from './components/hero-section.jsx';
import ParticleCanvas from './components/particlecanvas.jsx';

// App-komponenten bygger hela sidans struktur och binder samman layout och effekter.
export default function App() {
  return (
    <div className="page">
      <Navbar />
      <ParticleCanvas />
      <HeroSection />
    </div>
  );
}
