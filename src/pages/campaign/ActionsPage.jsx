import { Check, Instagram } from "lucide-react";
import { useState } from "react";
import PageHero from "../../components/campaign/PageHero";
import { actions, images, instagramUrl } from "../../data/campaignSiteData";

function ActionsPage() {
  const [selectedActions, setSelectedActions] = useState([]);
  const progress = Math.round((selectedActions.length / actions.length) * 100);

  const toggleAction = (id) => {
    setSelectedActions((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  return (
    <main className="campaign-page actions-page">
      <PageHero
        eyebrow="Public Actions"
        title="Choose actions that protect the route."
        copy="This pledge is a prototype interaction that turns conservation tips into a visible public response path."
        image={images.action}
      />

      <section className="pledge-console">
        <div className="pledge-meter">
          <span>{progress}%</span>
          <strong>Action path charged</strong>
          <div>
            <i style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="pledge-list">
          {actions.map((action) => (
            <button
              className={selectedActions.includes(action.id) ? "selected" : ""}
              key={action.id}
              type="button"
              aria-pressed={selectedActions.includes(action.id)}
              onClick={() => toggleAction(action.id)}
            >
              <action.icon size={24} />
              <span>
                <strong>{action.title}</strong>
                <small>{action.copy}</small>
              </span>
              <i>{selectedActions.includes(action.id) ? <Check size={18} /> : "+"}</i>
            </button>
          ))}
        </div>
      </section>

      <section className="campaign-share-card">
        <div>
          <span className="eyebrow">Campaign action</span>
          <h2>{selectedActions.length ? "Carry this pledge outward." : "Start with one repeatable action."}</h2>
          <p>
            {selectedActions.length
              ? actions.filter((action) => selectedActions.includes(action.id)).map((action) => action.title).join(" / ")
              : "Choose at least one action above, then share ShellAware with your community."}
          </p>
        </div>
        <a className="primary-button" href={instagramUrl} target="_blank" rel="noreferrer">
          <Instagram size={18} /> Visit Instagram Campaign
        </a>
      </section>
    </main>
  );
}

export default ActionsPage;
