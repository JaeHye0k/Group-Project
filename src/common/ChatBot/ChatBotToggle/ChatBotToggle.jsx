import React, { useState } from "react";
import "./ChatBotToggle.style.css";

const ChatBotToggle = ({ onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="chat-button-box">
      <div className="chatbot-bubble" style={{ opacity: hovered ? "1" : "0" }}>
        여행도우미 챗봇입니다.
      </div>
      <div
        className="chatbot-btn"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        style={{
          border: hovered ? "1px solid #ff9900" : "1px solid grey",
        }}
      />
    </div>
  );
};

export default ChatBotToggle;
