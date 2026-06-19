import { Instagram } from "lucide-react";
import PageHero from "../../components/campaign/PageHero";
import { images, instagramUrl } from "../../data/campaignSiteData";

function CampaignPage({ navigate }) {
  return (
    <main className="campaign-page final-campaign-page">
      <PageHero
        eyebrow="Campaign"
        title="Bring the turtle story into public space."
        copy="The campaign page keeps the final call to action clear: learn the journey, choose actions, and share ShellAware through Instagram."
        image={images.surface}
      />

      <section className="campaign-moment">
        <div>
          <span className="eyebrow">Join ShellAware</span>
          <h2>Awareness becomes useful when people repeat it.</h2>
          <p>
            Share the campaign, invite others to learn the threats, and help make turtle conservation easier
            to understand in daily public life.
          </p>
        </div>
        <a className="primary-button" href={instagramUrl} target="_blank" rel="noreferrer">
          <Instagram size={18} /> Open Instagram
        </a>
      </section>

      <section className="campaign-next">
        <button type="button" onClick={() => navigate("/journey")}>Replay the Journey</button>
        <button type="button" onClick={() => navigate("/actions")}>Review Actions</button>
        <button type="button" onClick={() => navigate("/shelly")}>Preview Shelly</button>
      </section>
    </main>
  );
}

export default CampaignPage;
