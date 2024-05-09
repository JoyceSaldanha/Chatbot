// MainApp.js
import React from 'react';
import './ChatStyles.css';
import Chatbot from './Chatbot';
import ColorTheme from './ColorTheme';
import UserProfile from './UserProfile';

const MainApp = () => {
  return (
    <div className="main-app">
      <h1>Welcome to the Main App</h1>
      <Chatbot />
      <ColorTheme />
      <UserProfile />
    </div>
  );
};

export default MainApp;