import React, { useState, useEffect, useMemo } from 'react';
import './ChatStyles.css';
import { useNavigate } from 'react-router-dom';
import Chatbot from './Chatbot';

const ColorTheme = ({ onThemeChange }) => {
  const themes = useMemo(() => [
    {
      background: 'linear-gradient(239.26deg, #F0E6FF 63.17%, #FFE6F0 94.92%)',
      bubbleColor: '#C9E4CA',
    },
    {
      background: 'linear-gradient(239.26deg, #E6F0FF 63.17%, #E6F0FF 94.92%)',
      bubbleColor: '#8BC34A',
    },
    {
      background: 'linear-gradient(239.26deg, #E6E6FA 63.17%, #F0F8FF 94.92%)',
      bubbleColor: '#C5CAE9',
    },
    {
      background: 'linear-gradient(239.26deg, #ADD8E6 63.17%, #B0E0E6 94.92%)',
      bubbleColor: '#4CAF50',
    },
    {
      background: 'linear-gradient(239.26deg, #FFA07A 63.17%, #FF6347 94.92%)',
      bubbleColor: '#FFC107',
    },
  ], []);

  const [userDefinedColor, setUserDefinedColor] = useState(null);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(() => {
    const savedThemeIndex = localStorage.getItem('currentTheme');
    return savedThemeIndex !== null ? parseInt(savedThemeIndex) : 0;
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('currentTheme', currentThemeIndex.toString());
    onThemeChange(themes[currentThemeIndex]);
  }, [currentThemeIndex, onThemeChange, themes]);

  const cycleTheme = () => {
    setCurrentThemeIndex((currentThemeIndex + 1) % themes.length);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleColorProfileChange = (color) => {
    setUserDefinedColor(color);
  };

  return (
    <div className="color-theme">
      <div>
        <h2>Chatbot</h2>
      </div>
      <div style={{display:"flex"}}>
          <input style={{
            marginTop: '1rem',
            height: '0.8rem',
            padding: '0.5rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '0.8rem',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'border-color 0.3s',
          }}
            type="text"
            value={userDefinedColor || ''}
            onChange={(e) => handleColorProfileChange(e.target.value)}
            placeholder="Enter your preferred color"
          />
        <div className="buttons">
          <button onClick={cycleTheme} className="change-theme-btn">
            Change Theme
          </button>
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
      <div className="chatbot-container">
        <Chatbot bubbleColor={userDefinedColor || themes[currentThemeIndex].bubbleColor} />
      </div>
    </div>
  );
};

export default ColorTheme;