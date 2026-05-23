import React ,{useState,useRef,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const BotChat = () => {

    const navigate = useNavigate();
    const[messages,setMessages] = useState([
        {role:"assistant",text:"Hi there! "},
        {role:"assistant",text:"Do you have any query.."}
    ]);
    const[input,setInput] =  useState("");

    const [loading,setLoading] = useState(false);

    const bottomRef = useRef(null);

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior:"smooth"});
    },[messages,loading])


   
    const send = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ prompt: trimmed }),
      });

      if (!res.ok) throw new Error();
      const reply = await res.text();
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "⚠️ Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if(e.key === "Enter" && !e.shiftKey){
        e.preventDefault();
        send();
    }
  }

  return (
    <div className="bot-page">

      {/* Header */}
      <div className="bot-header">
        <button className="bot-back" onClick={() => navigate(-1)} aria-label="Back">
          ←
        </button>
        <div className="bot-header-center">
          <div className="bot-avatar">
            <span>🤖</span>
          </div>
          <div>
            <p className="bot-name">AI Assistant</p>
            <p className="bot-online">Online</p>
          </div>
        </div>
        <div style={{ width: 40 }} /> {/* spacer to center title */}
      </div>

      {/* Messages */}
      <div className="bot-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`msg-row ${msg.role}`}>
            {msg.role === "assistant" && (
              <div className="icon-circle bot-icon">🤖</div>
            )}
            <div className={`bubble ${msg.role}`}>{msg.text}</div>
            {msg.role === "user" && (
              <div className="icon-circle user-icon">👤</div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="msg-row assistant">
            <div className="icon-circle bot-icon">🤖</div>
            <div className="bubble assistant typing">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="bot-input-bar">
        <input
          className="bot-input"
          placeholder="Type the message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          disabled={loading}
        />
        <button
          className="bot-send"
          onClick={send}
          disabled={loading || !input.trim()}
          aria-label="Send"
        >
          ➤
        </button>
      </div>

    </div>
    
  )
}

export default BotChat