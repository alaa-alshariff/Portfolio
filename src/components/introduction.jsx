// ChatUI.js
import React, { useState, useEffect } from "react";
import floating from "../assets/floating.png";

const Introduction = () => {
  const [messages, setMessages] = useState([
    "Hi there!",
    "Welcome to the website!",
    "Feel free to explore.",
    "Enjoy your visit!",
  ]);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      if (index < messages.length) {
        setDisplayedMessages((prevMessages) => [
          ...prevMessages,
          messages[index],
        ]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(messageTimer);
      }
    }, 2000); // Change this value to adjust message display speed

    return () => clearInterval(messageTimer);
  }, [index, messages]);

  return (
    <div className="Intro-content">
      <div className="intro-img">
        <img src={floating} alt="" />
      </div>
      <div className="chat-container">
        <div className="chat-messages">
          {displayedMessages.map((message, idx) => (
            <div className="message-bubble" key={idx}>
              {message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
