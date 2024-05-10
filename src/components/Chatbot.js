// Chatbot.js
import React, { useState, useRef, useEffect } from 'react';
import './ChatStyles.css';

const Chatbot = ({ bubbleColor, delay }) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! 👏', bubbleColor: bubbleColor },
    { sender: 'bot', text: `I'm Joyce - an AI chatbot built by therapists.`, bubbleColor: bubbleColor },
    { sender: 'bot', text: `I'm here to understand your concerns and connect you with the best resources available to support you.`, bubbleColor: bubbleColor },
    { sender: 'bot', text: 'Can I help?', bubbleColor: bubbleColor },
    { sender: 'user', text: 'Hi', bubbleColor: '#dcf8c6' },
    { sender: 'bot', text: 'Sure, what would you like to know?', bubbleColor: bubbleColor },
    { sender: 'bot', image: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600', bubbleColor: bubbleColor }, // Example image message
  ]);
  const [userInput, setUserInput] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => prevIndex + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleUserInput = (e) => {
    if (e.key === 'Enter' && (userInput.trim() !== '' || selectedImage)) {
      const newMessage = { sender: 'user', bubbleColor: '#dcf8c6' };
      if (selectedImage) {
        newMessage.image = URL.createObjectURL(selectedImage);
      } else {
        newMessage.text = userInput;
      }
      setMessages([...messages, newMessage]);
      setUserInput('');
      setSelectedImage(null);
    }
  };

  const handleImageUpload = (e) => {
    setSelectedImage(e.target.files[0]);
    setUserInput(e.target.files[0].name);
  };

  useEffect(() => {
    inputRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbot">
      <div className="chat-messages">
        {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
          <div
            key={index}
            className={`chat-bubble ${message.sender === 'bot' ? 'bot' : 'user'}`}
            style={{
              backgroundColor: message.sender === 'bot' ? bubbleColor : '#dcf8c6',
            }}
          >
            {message.text}
            {message.image && <img src={message.image} alt="Uploaded" style={{ maxWidth: '200px', height: 'auto' }} />}
          </div>
        ))}
        <div ref={inputRef} className="input-container">
          <div className="input-with-icon">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleUserInput}
              placeholder="Type a message or upload an image"
            />
            <label htmlFor="file-upload">
              <i className="fas fa-camera"></i>
            </label>
          </div>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
            ref={fileInputRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;