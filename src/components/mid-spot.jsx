import { useState, useCallback } from 'react';

export default function MidSpot() {
  const [isGold, setIsGold] = useState(false);

  const toggleGold = useCallback(() => {
    setIsGold((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleGold();
      }
    },
    [toggleGold],
  );

  return (
    <div
      className={`mid-spot${isGold ? ' mid-spot--gold' : ''}`}
      id="midSpot"
      role="button"
      tabIndex={0}
      aria-label="Toggle gold mode"
      aria-pressed={isGold}
      onClick={toggleGold}
      onKeyDown={handleKeyDown}
    />
  );
}
