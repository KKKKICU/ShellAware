import { threats } from "../../data/campaignData";

function ThreatEducationSection() {
  return (
    <section className="threat-section" id="threats">
      <div className="section-heading section-heading-light" data-reveal>
        <span className="eyebrow danger">Threats Sea Turtles Face</span>
        <h2>The danger is often created by ordinary human activity.</h2>
        <p>
          Sea turtles face overlapping pressures across the places they feed, migrate, and nest.
          ShellAware presents these threats clearly so the public can understand what needs to change.
        </p>
      </div>

      <div className="threat-grid">
        {threats.map((threat) => (
          <article className="threat-panel" key={threat.title} data-reveal>
            <img src={threat.image} alt={threat.title} />
            <div>
              <threat.icon size={22} />
              <h3>{threat.title}</h3>
              <p>{threat.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ThreatEducationSection;
