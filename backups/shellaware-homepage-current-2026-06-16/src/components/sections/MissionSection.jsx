import { campaignImages, missionPoints } from "../../data/campaignData";

function MissionSection() {
  return (
    <section className="mission-section" id="mission">
      <div className="section-heading" data-reveal>
        <span className="eyebrow">Why Turtles Matter</span>
        <h2>Sea turtles connect the ocean story from reef to shore.</h2>
        <p>
          Protecting turtles supports wider marine awareness. Their journey helps people understand how
          ocean health, coastal behaviour, and daily choices are connected.
        </p>
      </div>

      <div className="mission-layout">
        <figure className="mission-image" data-reveal>
          <img src={campaignImages.turtlePortrait} alt="Green sea turtle swimming underwater" />
        </figure>

        <div className="mission-points">
          {missionPoints.map((point) => (
            <article key={point.value} data-reveal>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
              <p>{point.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
