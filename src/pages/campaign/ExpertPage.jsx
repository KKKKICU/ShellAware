import { Quote } from "lucide-react";
import PageHero from "../../components/campaign/PageHero";
import { expertInsight, images } from "../../data/campaignSiteData";

function ExpertPage() {
  return (
    <main className="campaign-page expert-page">
      <PageHero
        eyebrow="Expert Insights"
        title="Credibility should feel woven into the journey."
        copy="ShellAware uses expert voice to connect public behaviour with turtle habitat and survival."
        image={images.habitat}
      />

      <section className="expert-transmission">
        <Quote size={42} />
        <blockquote>{expertInsight.quote}</blockquote>
        <div>
          <strong>{expertInsight.name}</strong>
          <span>{expertInsight.role}</span>
        </div>
      </section>

      <section className="research-notes">
        {expertInsight.points.map((point, index) => (
          <article key={point}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{point}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default ExpertPage;
