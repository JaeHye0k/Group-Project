import React, { useState, useEffect, useRef } from "react";
import "./ChatBotModal.style.css";

const ChatbotModal = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const apiKey = process.env.REACT_APP_GPT;
  const apiEndpoint = "https://api.openai.com/v1/chat/completions";

  const addMessage = (sender, message) => {
    setMessages((prevMessages) => [...prevMessages, { sender, message }]);
  };

  const handleSendMessage = async () => {
    const message = userInput.trim();
    if (message.length === 0) return;

    addMessage("user", message);
    setUserInput("");
    setLoading(true);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful travel assistant. so You are a smart, travel-recommending bot, and you should be able to speak concisely and neatly",
            },
            { role: "user", content: message },
          ],
          max_tokens: 500,
          top_p: 1,
          temperature: 1,
          frequency_penalty: 0.5,
          presence_penalty: 0.5,
          stop: ["문장 생성 중단 단어"],
        }),
      });

      const data = await response.json();
      const aiResponse = data.choices?.[0]?.message?.content || "No response";
      addMessage("bot", aiResponse);
    } catch (error) {
      console.error("오류 발생!", error);
      addMessage("오류 발생!");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot">
      <header>
        <h2>챗봇에게 물어보세요!</h2>
      </header>
      <div className="chat-div">
        <div className="message-system" id="chat-id">
          <p>여행에 관해서 아무거나 물어보세요!</p>
        </div>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-${msg.sender === "user" ? "user" : "system"}`}
          >
            <p>{`${msg.message}`}</p>
          </div>
        ))}
        {loading && (
          <span className="message-lodaing">챗봇이 입력중 입니다....</span>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-div">
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSendMessage}>
          <img
            src="https://cdn.pixabay.com/photo/2015/12/05/23/22/paper-planes-1078889_1280.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default ChatbotModal;
