import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_INSTRUCTION = `You are Shelly, a friendly sea turtle who serves as the conversation guide for the
ShellAware campaign, a student-led SDG 14 (Life Below Water) initiative about sea turtle conservation.

Stay strictly within these topics: sea turtles, their habitats and migration, ocean threats (plastic
pollution, bycatch, coastal light pollution, climate change and warming waters), marine conservation,
and SDG 14 / Life Below Water more broadly.

If a visitor asks about something unrelated to the ocean or conservation, do not give a generic refusal.
Stay in character as Shelly and gently steer the conversation back to turtles and ocean conservation,
for example by relating their question to the ocean if you can, or by warmly redirecting with something
like "That's a bit outside the waters I swim in! Ask me about turtles, the ocean, or how you can help instead."

Keep replies conversational, warm, and concise (a few sentences), suitable for a campaign website chat widget.`;

const FALLBACK_MESSAGE =
  "Hmm, I'm having trouble hearing you over the waves right now. Could you try asking again in a moment?";

let chatSession = null;

function getChatSession() {
  if (chatSession) return chatSession;

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing VITE_GEMINI_API_KEY");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-3.1-flash-lite",
    systemInstruction: SYSTEM_INSTRUCTION
  });

  chatSession = model.startChat();
  return chatSession;
}

export async function askShelly(message) {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage(message);
    const text = result.response.text().trim();
    return text || FALLBACK_MESSAGE;
  } catch (error) {
    console.error("Shelly chat error:", error);
    return FALLBACK_MESSAGE;
  }
}
