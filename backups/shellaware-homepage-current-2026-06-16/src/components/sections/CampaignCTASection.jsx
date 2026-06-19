import { ArrowRight } from "lucide-react";
import { campaignImages, campaignPillars } from "../../data/campaignData";

function CampaignCTASection() {
  return (
    <section className="cta-section" id="campaign">
      <img src={campaignImages.ocean} alt="Sea turtle taking a breath at the ocean surface" />
      <div className="cta-overlay" />

      <div className="cta-content" data-reveal>
        <span className="eyebrow hope">ShellAware Campaign</span>
        <h2>Awareness is only the first wave. Let it become action.</h2>
        <p>
          Help make sea turtle conservation easier to understand, easier to discuss, and easier to practise
          in everyday public life.
        </p>

        <div className="campaign-pillars">
          {campaignPillars.map((pillar) => (
            <span key={pillar.label}><pillar.icon size={18} /> {pillar.label}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a className="primary-button" href="#take-action">Review actions <ArrowRight size={18} /></a>
          <a className="secondary-button" href="#home">Back to top</a>
        </div>
      </div>
    </section>
  );
}

export default CampaignCTASection;
