export default function CTAButton({ label = 'Get Started', className = '', ...props }) {
  return (
    <button type="button" className={`cta-button ${className}`.trim()} {...props}>
      <span className="cta-button__glow" aria-hidden="true" />
      <span className="cta-button__label">{label}</span>
    </button>
  );
}
