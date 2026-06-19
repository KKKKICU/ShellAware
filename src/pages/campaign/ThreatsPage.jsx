import { useState } from "react";
import PageHero from "../../components/campaign/PageHero";
import { images, threats } from "../../data/campaignSiteData";

function ThreatsPage({ navigate }) {
  const [activeThreat, setActiveThreat] = useState(threats[0]);

  return (
    <main className="campaign-page threats-page">
      <PageHero
        eyebrow="Turtle Threats"
        title="The danger is not abstract. It enters the route."
        copy="Explore the pressures sea turtles face and the public response that connects to each threat."
        image={images.plastic}
      />

      <section className="threat-lab">
        <figure className="threat-lab-media">
          <img src={activeThreat.image} alt={activeThreat.title} />
          <figcaption>
            <span>{activeThreat.label}</span>
            <h2>{activeThreat.title}</h2>
            <p>{activeThreat.copy}</p>
            <strong>{activeThreat.response}</strong>
          </figcaption>
        </figure>

        <div className="threat-selector" aria-label="Select a turtle threat">
          {threats.map((threat, index) => (
            <button
              className={activeThreat.id === threat.id ? "active" : ""}
              key={threat.id}
              type="button"
              aria-pressed={activeThreat.id === threat.id}
              onClick={() => setActiveThreat(threat)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <threat.icon size={22} />
              <strong>{threat.title}</strong>
              <small>{threat.label}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="next-cta">
        <span className="eyebrow">What now?</span>
        <h2>Threat awareness only matters when it changes public behaviour.</h2>
        <button className="primary-button" type="button" onClick={() => navigate("/actions")}>
          Build your action pledge
        </button>
      </section>
    </main>
  );
}

export default ThreatsPage;
