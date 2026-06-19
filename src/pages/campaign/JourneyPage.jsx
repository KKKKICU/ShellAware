import { ArrowRight } from "lucide-react";
import PageHero from "../../components/campaign/PageHero";
import { images, journeyStops } from "../../data/campaignSiteData";

function JourneyPage({ navigate }) {
  return (
    <main className="campaign-page story-page">
      <PageHero
        eyebrow="Ocean Journey"
        title="Follow the route from reef to surface."
        copy="Sea turtle conservation becomes easier to understand when the journey is shown as connected habitats, not isolated facts."
        image={images.turtle}
      >
        <button className="primary-button" type="button" onClick={() => navigate("/threats")}>
          See the threats <ArrowRight size={18} />
        </button>
      </PageHero>

      <section className="journey-timeline">
        {journeyStops.map((stop, index) => (
          <article className="journey-stop" key={stop.id}>
            <figure>
              <img src={stop.image} alt="" />
            </figure>
            <div>
              <span>{String(index + 1).padStart(2, "0")} / {stop.depth}</span>
              <h2>{stop.title}</h2>
              <p>{stop.copy}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default JourneyPage;
