import { ArrowRight, Waves } from "lucide-react";
import { campaignImages } from "../../data/campaignData";

function CampaignHero() {
  return (
    <section className="campaign-hero" id="home">
      <img src={campaignImages.hero} alt="Sea turtle swimming over a coral reef" />
      <div className="hero-overlay" />

      <div className="hero-content" data-reveal>
        <span className="eyebrow"><Waves size={16} /> SDG 14 Awareness Campaign</span>
        <h1>Protecting sea turtles starts with understanding their ocean.</h1>
        <p>
          ShellAware is an educational conservation homepage that helps people learn why sea turtles matter,
          what threatens them, and how public action can protect marine life.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#mission">Explore the campaign <ArrowRight size={18} /></a>
          <a className="secondary-button" href="#take-action">See public actions</a>
        </div>
      </div>
    </section>
  );
}

export default CampaignHero;
