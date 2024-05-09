// ColorTheme.js
import React, { useState, useEffect } from 'react';

const ColorTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [themes, setThemes] = useState([
    {
      background: 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)',
      bubbleColor: '#fff',
    },
    {
      background: 'linear-gradient(239.26deg, #FDF1E0 63.17%, #DDEEED 94.92%)',
      bubbleColor: '#fff',
    },
    {
      background: 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)',
      bubbleColor: '#000',
    },
  ]);

  useEffect(() => {
    // Load the saved theme from localStorage on component mount
    const savedTheme = localStorage.getItem('currentTheme');
    if (savedTheme !== null) {
      setCurrentTheme(parseInt(savedTheme));
    }
  }, []);

  useEffect(() => {
    // Save the current theme to localStorage whenever it changes
    localStorage.setItem('currentTheme', currentTheme.toString());
  }, [currentTheme]);

  const cycleTheme = () => {
    setCurrentTheme((currentTheme + 1) % themes.length);
  };

  return (
    <div className="color-theme">
      <h2>Color Theme</h2>
      <div
        className="theme-preview"
        style={{
          background: themes[currentTheme].background,
        }}
      >
        <div
          className="chat-bubble"
          style={{
            backgroundColor: themes[currentTheme].bubbleColor,
          }}
        >
          This is a sample chat bubble.
        </div>
      </div>
      <button onClick={cycleTheme}>Cycle Theme</button>
    </div>
  );
};

export default ColorTheme;