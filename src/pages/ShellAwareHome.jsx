import {
  Bot,
  Check,
  ChevronDown,
  Instagram,
  Menu,
  SendHorizonal,
  Waves,
  X
} from "lucide-react";
import { useState } from "react";
import {
  actions,
  expertInsight,
  images,
  instagramUrl,
  journeyStops,
  shellyPrompts,
  threats
} from "../data/campaignSiteData";

const navItems = [
  { label: "Mission", href: "#mission" },
  { label: "Journey", href: "#story" },
  { label: "Threats", href: "#threats" },
  { label: "Actions", href: "#actions" },
  { label: "Expert", href: "#expert" },
  { label: "Shelly", href: "#shelly" }
];

function ShellAwareHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeThreat, setActiveThreat] = useState(threats[0]);
  const [selectedActions, setSelectedActions] = useState(["reusables"]);
  const [activePrompt, setActivePrompt] = useState(shellyPrompts[0]);

  const pledgeProgress = Math.round((selectedActions.length / actions.length) * 100);

  const toggleAction = (id) => {
    setSelectedActions((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="shellaware-home">
      <div className="home-atmosphere" aria-hidden="true">
        <span className="surface-ray surface-ray-one" />
        <span className="surface-ray surface-ray-two" />
        <span className="current-line current-line-one" />
        <span className="current-line current-line-two" />
        <span className="bubble-field bubble-field-one" />
        <span className="bubble-field bubble-field-two" />
      </div>

      <header className="home-nav">
        <a className="home-brand" href="#top" onClick={closeMenu} aria-label="ShellAware home">
          <span className="brand-glyph">
            <Waves size={18} />
          </span>
          <span>ShellAware</span>
        </a>

        <nav className="home-nav-links" aria-label="Homepage sections">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="mobile-nav-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav-panel" aria-label="Mobile homepage sections">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="hero-image-wrap">
            <img src={images.hero} alt="A sea turtle swimming over a coral reef" />
          </div>
          <div className="hero-shade" aria-hidden="true" />

          <div className="hero-content">
            <p className="section-kicker">SDG 14 / Sea turtle conservation</p>
            <h1 id="hero-title">A calmer ocean begins with what we choose on land.</h1>
            <p>
              ShellAware follows the route of a sea turtle through reef, current, human pressure,
              and public action. The story is simple: protect the ocean before harm reaches it.
            </p>
            <div className="hero-actions">
              <a className="primary-ocean-button" href="#story">
                Begin the journey
                <ChevronDown size={18} />
              </a>
              <a className="glass-ocean-button" href="#actions">
                Build a pledge
              </a>
            </div>
          </div>

          <div className="hero-fact-strip" aria-label="Campaign facts">
            <span>
              <strong>7 species</strong>
              Sea turtles connect reefs, beaches, and open water.
            </span>
            <span>
              <strong>Human pressure</strong>
              Waste, fishing gear, light, and heat interrupt the route.
            </span>
            <span>
              <strong>Public action</strong>
              Small repeatable choices can reduce pressure upstream.
            </span>
          </div>
        </section>



        <section className="mission-section" id="mission" aria-labelledby="mission-title">
          <p className="section-kicker">Our mission</p>
          <h2 id="mission-title">Protecting the journey of sea turtles.</h2>
          <p>
            ShellAware is a student-led conservation campaign linking everyday choices to life below
            water. We focus on how simple, repeatable actions can reduce pressure on turtles long
            before harm reaches the sea. Our mission is to make the invisible connections
            between land and ocean visible and actionable.
          </p>
        </section>

        <section className="impact-section" aria-label="Campaign impact">
          <div className="impact-grid">
            <div>
              <span className="impact-number">7</span>
              <p>sea turtle species</p>
            </div>
            <div>
              <span className="impact-number">4</span>
              <p>threats highlighted</p>
            </div>
            <div>
              <span className="impact-number">4</span>
              <p>public actions</p>
            </div>
            <div>
              <span className="impact-number">1</span>
              <p>shared ocean world</p>
            </div>
          </div>
        </section>

        <section className="story-section" id="story" aria-labelledby="story-title">
          <div className="section-intro">
            <p className="section-kicker">The route</p>
            <h2 id="story-title">Follow one turtle through connected ocean spaces.</h2>
            <p>
              The page now works like a descent through the turtle’s world: bright reef, moving
              current, pressure points, then a clearer surface where people can help.
            </p>
          </div>

          <div className="story-river">
            {journeyStops.map((stop, index) => (
              <article className="story-stop" key={stop.id}>
                <figure>
                  <img src={stop.image} alt={`${stop.depth} ocean scene`} />
                </figure>
                <div className="story-copy">
                  <span>{String(index + 1).padStart(2, "0")} / {stop.depth}</span>
                  <h3>{stop.title}</h3>
                  <p>{stop.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="threats-section" id="threats" aria-labelledby="threats-title">
          <div className="section-intro split-intro">
            <div>
              <p className="section-kicker">Pressure enters the water</p>
              <h2 id="threats-title">Threats are shown as interruptions in the journey.</h2>
            </div>
            <p>
              Select a pressure to change the scene. The image, message, and response move
              together so the threat feels connected to the turtle’s route.
            </p>
          </div>

          <div className="threat-theatre">
            <figure className="threat-image">
              <img src={activeThreat.image} alt={`${activeThreat.title} affecting sea turtles`} />
              <figcaption>
                <span>{activeThreat.label}</span>
                <h3>{activeThreat.title}</h3>
                <p>{activeThreat.copy}</p>
              </figcaption>
            </figure>

            <div className="threat-panel">
              <div className="threat-selector" aria-label="Select turtle threats">
                {threats.map((threat) => {
                  const Icon = threat.icon;
                  const isActive = activeThreat.id === threat.id;
                  return (
                    <button
                      className={isActive ? "is-active" : ""}
                      key={threat.id}
                      type="button"
                      onClick={() => setActiveThreat(threat)}
                    >
                      <Icon size={23} />
                      <span>
                        <strong>{threat.title}</strong>
                        {threat.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <aside className="response-card">
                <span>Public response</span>
                <p>{activeThreat.response}</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="actions-section" id="actions" aria-labelledby="actions-title">
          <div className="action-backdrop">
            <div className="section-intro">
              <p className="section-kicker">Turn concern into behaviour</p>
              <h2 id="actions-title">Build a small pledge that protects the turtle route.</h2>
              <p>
                This is not a fake dashboard. It is a lightweight interaction that helps visitors
                choose repeatable public actions they can remember.
              </p>
            </div>

            <div className="pledge-stage">
              <div className="pledge-meter">
                <span>{pledgeProgress}%</span>
                <div className="meter-track">
                  <i style={{ width: `${pledgeProgress}%` }} />
                </div>
                <p>{selectedActions.length} of {actions.length} actions selected</p>
              </div>

              <div className="action-stream">
                {actions.map((action) => {
                  const Icon = action.icon;
                  const checked = selectedActions.includes(action.id);
                  return (
                    <button
                      className={checked ? "action-choice is-selected" : "action-choice"}
                      key={action.id}
                      type="button"
                      onClick={() => toggleAction(action.id)}
                    >
                      <Icon size={25} />
                      <span>
                        <strong>{action.title}</strong>
                        {action.copy}
                      </span>
                      <em aria-hidden="true">{checked ? <Check size={20} /> : "+"}</em>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="expert-section" id="expert" aria-labelledby="expert-title">
          <div className="expert-panel">
            <div>
              <p className="section-kicker">Expert insight</p>
              <h2 id="expert-title">Credibility without turning the homepage into a report.</h2>
            </div>
            <blockquote>{expertInsight.quote}</blockquote>
            <div className="expert-meta">
              <strong>{expertInsight.name}</strong>
              <span>{expertInsight.role}</span>
            </div>
            <ul>
              {expertInsight.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="shelly-section" id="shelly" aria-labelledby="shelly-title">
          <div className="shelly-copy">
            <p className="section-kicker">Shelly concept</p>
            <h2 id="shelly-title">A future guide, previewed as an ocean research console.</h2>
            <p>
              Shelly is not active yet. This mock interface shows how visitors could ask simple
              turtle conservation questions in a future version.
            </p>
            <div className="prompt-bank" aria-label="Shelly preview prompts">
              {shellyPrompts.map((prompt) => (
                <button
                  className={activePrompt.id === prompt.id ? "is-active" : ""}
                  key={prompt.id}
                  type="button"
                  onClick={() => setActivePrompt(prompt)}
                >
                  {prompt.question}
                </button>
              ))}
            </div>
          </div>

          <div className="shelly-chat-container" aria-label="Shelly chatbot preview">
            <header>
              <span>
                <Bot size={20} />
              </span>
              <div>
                <strong>Shelly preview</strong>
                <small>Prototype only / no live AI</small>
              </div>
            </header>
            <div className="chat-thread">
              <div className="chat-bubble bot-bubble">
                Hi, I’m Shelly. Pick a sample question and I’ll show how this guide might respond.
              </div>
              <div className="chat-bubble user-bubble">{activePrompt.question}</div>
              <div className="chat-bubble bot-bubble">{activePrompt.answer}</div>
            </div>
            <div className="chat-input">
              <span>Ask Shelly in a future version...</span>
              <SendHorizonal size={18} />
            </div>
          </div>
        </section>

        <section className="campaign-section" id="campaign" aria-labelledby="campaign-title">
          <img src={images.turtle} alt="Close view of a sea turtle underwater" />
          <div className="campaign-content">
            <p className="section-kicker">ShellAware campaign</p>
            <h2 id="campaign-title">Make the turtle story visible beyond this page.</h2>
            <p>
              Follow the campaign, share conservation actions, and help more people connect daily
              choices to life below water.
            </p>
            <a className="primary-ocean-button" href={instagramUrl} target="_blank" rel="noreferrer">
              <Instagram size={18} />
              Visit ShellAware Instagram
            </a>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <span>ShellAware / SDG 14 Life Below Water</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}

export default ShellAwareHome;
