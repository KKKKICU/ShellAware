import { Bot, Lock, SendHorizonal, Sparkles } from "lucide-react";
import { useState } from "react";
import PageHero from "../../components/campaign/PageHero";
import { images, shellyPrompts } from "../../data/campaignSiteData";

function ShellyPage() {
  const [activePrompt, setActivePrompt] = useState(shellyPrompts[0]);

  return (
    <main className="campaign-page shelly-page">
      <PageHero
        eyebrow="Shelly Prototype"
        title="A future ocean guide, designed like a research console."
        copy="Shelly is not connected to a real chatbot backend yet. This page previews how visitors could ask conservation questions later."
        image={images.turtle}
      />

      <section className="shelly-station">
        <aside className="station-status">
          <span><Sparkles size={16} /> Concept mode</span>
          <h2>Shelly listens for public questions about turtle protection.</h2>
          <p>Use preset prompts to preview the conversation flow. The input remains locked until a future version.</p>
        </aside>

        <article className="research-console">
          <header>
            <div>
              <Bot size={24} />
              <strong>Shelly</strong>
            </div>
            <small>Research station preview</small>
          </header>

          <div className="console-thread">
            <p className="message bot">Choose a question from the console. I will preview a future ShellAware response.</p>
            <p className="message user">{activePrompt.question}</p>
            <p className="message bot">{activePrompt.answer}</p>
          </div>

          <div className="prompt-bank" aria-label="Shelly preview questions">
            {shellyPrompts.map((prompt) => (
              <button
                className={activePrompt.id === prompt.id ? "active" : ""}
                key={prompt.id}
                type="button"
                aria-pressed={activePrompt.id === prompt.id}
                onClick={() => setActivePrompt(prompt)}
              >
                {prompt.question}
              </button>
            ))}
          </div>

          <footer>
            <Lock size={16} />
            <span>Ask Shelly in a future version...</span>
            <button type="button" disabled aria-label="Shelly preview disabled">
              <SendHorizonal size={17} />
            </button>
          </footer>
        </article>
      </section>
    </main>
  );
}

export default ShellyPage;
