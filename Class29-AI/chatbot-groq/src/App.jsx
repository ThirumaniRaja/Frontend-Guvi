import { useState, useRef, useEffect } from "react";
import Groq from "groq-sdk";
import "./App.css";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "Assistant",
      content:
        "Hi! I'm your AI Assistant powered by Thiruz Infotech. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  console.log("Environment:", import.meta.env);
  console.log("Groq API Key:", import.meta.env.VITE_GROQ_API_KEY);

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
        messages: updatedMessages.map(({ role, content }) => ({
          role,
          content,
        })),
      });

      const reply = completion.choices[0]?.message?.content || "No response.";
      setMessages([...updatedMessages, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Full Error:", err);
      console.error("Name:", err.name);
      console.error("Message:", err.message);
      console.error("Cause:", err.cause);

      if (err.response) {
        console.error("Status:", err.response.status);
        console.error("Data:", err.response.data);
      }

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            err?.response?.data?.error?.message ||
            err.message ||
            JSON.stringify(err),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🤖 Thiruz AI Assistant</h1>
        <span className="badge">Powered by Thiruz infotech</span>
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
              <span></span>
              <span></span>
              <span></span>
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
        <button type="submit" disabled={!input.trim() || loading}>
          Send
        </button>
      </form>
    </div>
  );
}
