export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} Hanni Halabi. All rights reserved.</p>
        <a
          className="footer__link"
          href="mailto:contact@hannihalabi.com"
          aria-label="Email to contact Hanni Halabi"
        >
          contact@hannihalabi.com
        </a>
      </div>
    </footer>
  );
}
