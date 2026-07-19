import { useState, useRef, useEffect } from "react";
import Groq from "groq-sdk";
import "./App.css";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function App() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your AI assistant powered by Groq. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: updatedMessages.map(({ role, content }) => ({ role, content })),
      });

      const reply = completion.choices[0]?.message?.content || "No response.";
      setMessages([...updatedMessages, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: `❌ Error: ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🤖 AI Assistant</h1>
        <span className="badge">Powered by Groq</span>
      </header>

      <div className="chat-window">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            <div className="bubble">{msg.content}</div>
          </div>
        ))}
        {loading && (
          <div className="message assistant">
            <div className="bubble typing">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <form className="input-area" onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={loading}
        />
        <button type="submit" disabled={!input.trim() || loading}>Send</button>
      </form>
    </div>
  );
}