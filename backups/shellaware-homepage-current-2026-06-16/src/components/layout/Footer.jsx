import { Heart, Waves } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <Waves size={22} />
            <span>ShellAware</span>
          </a>
          <p>
            An immersive sea turtle conservation awareness homepage for SDG 14: Life Below Water.
            Built to help students, young adults, lecturers, and the public understand ocean threats
            through storytelling.
          </p>
        </div>

        <div className="footer-links">
          <a href="#mission">Mission</a>
          <a href="#threats">Threats</a>
          <a href="#take-action">Take Action</a>
          <a href="#insights">Expert and Shelly</a>
          <a href="#campaign">Campaign CTA</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>ShellAware Conservation Campaign</span>
        <span className="footer-love">Built with <Heart size={15} /> for marine life.</span>
      </div>
    </footer>
  );
}

export default Footer;
