import { Menu, Waves, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../../data/campaignData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 32);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${hasScrolled ? "navbar-scrolled" : ""}`}>
      <a href="#home" className="nav-logo" aria-label="ShellAware homepage">
        <span className="nav-logo-mark">
          <Waves size={20} />
        </span>
        <span>ShellAware</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#campaign" className="nav-cta">Join the Campaign</a>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="mobile-nav-panel">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#campaign" onClick={() => setIsOpen(false)}>Join the Campaign</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
