import { Menu, Waves, X } from "lucide-react";
import { useState } from "react";
import { instagramUrl, routes } from "../../data/campaignSiteData";

function CampaignShell({ children, currentPath, navigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasEntered, setHasEntered] = useState(() => sessionStorage.getItem("shellaware-entered") === "true");
  const [isOpening, setIsOpening] = useState(false);

  const go = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const enterExperience = () => {
    setIsOpening(true);
    window.setTimeout(() => {
      sessionStorage.setItem("shellaware-entered", "true");
      setHasEntered(true);
      setIsOpening(false);
    }, 1100);
  };

  return (
    <div className="campaign-site">
      <OceanAtmosphere />

      {!hasEntered && <EntryGate isOpening={isOpening} onEnter={enterExperience} />}

      <header className="campaign-nav">
        <button className="brand-mark" type="button" onClick={() => go("/")} aria-label="Go to ShellAware home">
          <Waves size={21} />
          <span>ShellAware</span>
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {routes.map((route) => (
            <button
              className={currentPath === route.path ? "active" : ""}
              key={route.id}
              type="button"
              onClick={() => go(route.path)}
            >
              {route.label}
            </button>
          ))}
        </nav>

        <a className="nav-campaign-link" href={instagramUrl} target="_blank" rel="noreferrer">
          Instagram
        </a>

        <button
          className="mobile-nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="mobile-nav-drawer">
            {routes.map((route) => (
              <button
                className={currentPath === route.path ? "active" : ""}
                key={route.id}
                type="button"
                onClick={() => go(route.path)}
              >
                {route.label}
              </button>
            ))}
            <a href={instagramUrl} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
              Instagram
            </a>
          </div>
        )}
      </header>

      <div className="page-transition" key={currentPath}>
        {children}
      </div>

      <footer className="campaign-footer">
        <div>
          <strong>ShellAware</strong>
          <p>SDG 14 sea turtle conservation awareness campaign.</p>
        </div>
        <div className="footer-route-links">
          {routes.slice(1).map((route) => (
            <button key={route.id} type="button" onClick={() => go(route.path)}>
              {route.label}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}

function EntryGate({ isOpening, onEnter }) {
  return (
    <section className={`entry-gate ${isOpening ? "entry-gate-opening" : ""}`} aria-label="Open ShellAware experience">
      <div className="entry-depth-lines" aria-hidden="true">
        <span>120m</span>
        <span>80m</span>
        <span>40m</span>
        <span>surface</span>
      </div>
      <button className="entry-orb-button" type="button" onClick={onEnter}>
        <span className="entry-orb" aria-hidden="true" />
        <span className="entry-copy">
          <small>ShellAware is waiting below</small>
          <strong>Open the turtle's story</strong>
          <em>Click to rise through the ocean</em>
        </span>
      </button>
      <div className="entry-ripples" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

function OceanAtmosphere() {
  return (
    <div className="ocean-atmosphere" aria-hidden="true">
      <span className="light-ray ray-one" />
      <span className="light-ray ray-two" />
      <span className="drift drift-one" />
      <span className="drift drift-two" />
      <span className="bubble-orb bubble-one" />
      <span className="bubble-orb bubble-two" />
      <span className="bubble-orb bubble-three" />
    </div>
  );
}

export default CampaignShell;
