import { Bot, Lock, Quote, SendHorizonal, Sparkles } from "lucide-react";
import { expertInsight, shellyMessages } from "../../data/campaignData";

function InsightShellySection() {
  return (
    <section className="insight-section" id="insights">
      <div className="insight-copy-column" data-reveal>
        <div className="expert-card">
          <span className="eyebrow">Expert Insight</span>
          <Quote size={34} />
          <p>{expertInsight.quote}</p>
          <div>
            <strong>{expertInsight.name}</strong>
            <span>{expertInsight.role}</span>
          </div>
        </div>

        <div className="shelly-copy-card">
          <span className="eyebrow">Shelly Preview</span>
          <h2>A calm guide for future conservation questions.</h2>
          <p>
            Shelly is only a visual preview for now. Future versions can help visitors ask about turtle
            threats, responsible beach behaviour, and simple conservation actions.
          </p>
          <div className="preview-note"><Lock size={17} /> No real chatbot functionality yet.</div>
        </div>
      </div>

      <div className="shelly-chat-container" data-reveal>
        <header className="shelly-chat-header">
          <div className="shelly-avatar">
            <div><Bot size={22} /></div>
            <span>Shelly</span>
          </div>
          <small><Sparkles size={14} /> Concept</small>
        </header>

        <main className="shelly-message-area">
          {shellyMessages.map((message) => (
            <p className={`chat-bubble chat-${message.from}`} key={message.text}>{message.text}</p>
          ))}
        </main>

        <footer className="shelly-input-preview">
          <span>Ask Shelly in a future version...</span>
          <button type="button" disabled aria-label="Shelly preview disabled"><SendHorizonal size={17} /></button>
        </footer>
      </div>
    </section>
  );
}

export default InsightShellySection;
