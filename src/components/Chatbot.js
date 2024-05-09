// Chatbot.js
import React, { useState } from 'react';
import './ChatStyles.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([
      { sender: 'bot', text: 'Hello, how can I assist you today?' },
      { sender: 'user', text: 'Hi, I have a question about the app.' },
      { sender: 'bot', text: 'Sure, what would you like to know?' },
    ]);

//   const handleUserInput = (message) => {
//     // Handle user input and update the conversation
//     setMessages([...messages, { sender: 'user', text: message }]);
//     // Add bot's response to the conversation
//     setMessages([
//       ...messages,
//       { sender: 'bot', text: 'Im afraid I dont have enough information to answer that. Could you please provide more details?' },
//     ]);
//   };

  return (
    <div className="chatbot">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-bubble ${message.sender === 'bot' ? 'bot' : 'user'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      {/* Render the input box and handle user input */}
    </div>
  );
};

export default Chatbot;