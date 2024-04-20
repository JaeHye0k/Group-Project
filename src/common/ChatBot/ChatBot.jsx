import React, { useEffect, useRef, useState } from "react";
import "./ChatBot.style.css";
import ChatBotModal from "../ChatBot/ChatBotModal/ChatBotModal";
import ChatBotToggle from "./ChatBotToggle/ChatBotToggle";

const ChatBot = () => {
  const modalRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="chatbot-all">
      {visible && (
        <div className="modal-overlay">
          <ChatBotModal visible={visible} ref={modalRef} />
        </div>
      )}
      <ChatBotToggle
        onClick={() => setVisible((prevVisible) => !prevVisible)}
      />
    </div>
  );
};

export default ChatBot;
