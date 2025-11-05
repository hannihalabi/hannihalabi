import Spotlight from './spotlight.jsx';

const SHOW_SPOTLIGHT = true;

export default function Navbar() {
  return (
    <header className="header">
      <h2>

      </h2>
      <div className="mid-spot" />
      {SHOW_SPOTLIGHT && <Spotlight />}
    </header>
  );
}
