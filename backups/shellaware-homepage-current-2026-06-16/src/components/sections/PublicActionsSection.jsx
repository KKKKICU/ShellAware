import { campaignImages, publicActions } from "../../data/campaignData";

function PublicActionsSection() {
  return (
    <section className="actions-section" id="take-action">
      <div className="actions-visual" data-reveal>
        <img src={campaignImages.action} alt="Community environmental action near the coast" />
      </div>

      <div className="actions-content">
        <div className="section-heading section-heading-left" data-reveal>
          <span className="eyebrow hope">What The Public Can Do</span>
          <h2>Small actions matter when they become repeated public habits.</h2>
          <p>
            ShellAware focuses on behaviour people can actually practise and share: less waste, cleaner
            beaches, respectful wildlife behaviour, and reliable conservation messages.
          </p>
        </div>

        <div className="action-list">
          {publicActions.map((action) => (
            <article key={action.title} data-reveal>
              <div><action.icon size={22} /></div>
              <h3>{action.title}</h3>
              <p>{action.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PublicActionsSection;
