import { ArrowRight, Play, Waves } from "lucide-react";
import { ctaLinks, homePanels, images } from "../../data/campaignSiteData";

function HomePage({ navigate }) {
  return (
    <main className="campaign-page home-page">
      <section className="home-hero">
        <figure className="home-hero-image">
          <img src={images.hero} alt="Sea turtle swimming across a coral reef" />
        </figure>

        <div className="home-hero-content">
          <span className="eyebrow">ShellAware / SDG 14</span>
          <h1>Enter the turtle's ocean story.</h1>
          <p>
            A modern awareness campaign about sea turtle conservation, the threats that follow turtles,
            and the public actions that can help protect life below water.
          </p>
          <div className="hero-button-row">
            <button className="primary-button" type="button" onClick={() => navigate("/journey")}>
              <Play size={18} /> Begin Journey
            </button>
            <button className="ghost-button" type="button" onClick={() => navigate("/shelly")}>
              Preview Shelly <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <aside className="route-pulse" aria-label="Campaign route preview">
          <span><Waves size={18} /> Reef</span>
          <span>Current</span>
          <span>Pressure</span>
          <span>Action</span>
        </aside>
      </section>

      <section className="campaign-brief">
        <div className="brief-heading">
          <span className="eyebrow">Choose your entry point</span>
          <h2>Explore ShellAware as a story, not a brochure.</h2>
        </div>

        <div className="brief-panels">
          {homePanels.map((panel) => (
            <button className="brief-panel" key={panel.title} type="button" onClick={() => navigate(panel.path)}>
              <img src={panel.image} alt="" />
              <span>{panel.eyebrow}</span>
              <panel.icon size={24} />
              <h3>{panel.title}</h3>
              <p>{panel.copy}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="home-cta-band">
        <div>
          <span className="eyebrow">Campaign map</span>
          <h2>Every page is a focused part of the turtle story.</h2>
        </div>
        <div className="cta-link-grid">
          {ctaLinks.map((link) => (
            <button key={link.path} type="button" onClick={() => navigate(link.path)}>
              <link.icon size={18} /> {link.label}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
