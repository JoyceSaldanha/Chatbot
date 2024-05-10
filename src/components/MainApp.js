// MainApp.js
import React, { useState } from 'react';
import './ChatStyles.css';
import Chatbot from './Chatbot';
import ColorTheme from './ColorTheme';

const MainApp = () => {
  const [theme, setTheme] = useState({
    background: 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)',
    bubbleColor: '#fff',
  });

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="main-app" style={{ background: theme.background, height: '100vh' }}>
      <ColorTheme onThemeChange={handleThemeChange} />
      <Chatbot bubbleColor={theme.bubbleColor} />
    </div>
  );
};

export default MainApp;