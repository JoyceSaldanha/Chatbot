import React, { useState, useEffect, useMemo } from 'react';
import './ChatStyles.css';
import { useNavigate } from 'react-router-dom';

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

  const [userDefinedColor, setUserDefinedColor] = useState('');
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

  const applyUserDefinedColor = () => {
    if (userDefinedColor.trim() !== '') {
      onThemeChange({
        background: `linear-gradient(239.26deg, ${userDefinedColor} 63.17%, ${userDefinedColor} 94.92%)`,
        bubbleColor: userDefinedColor,
      });

      // Revert to the original color after 5 seconds
      setTimeout(() => {
        setUserDefinedColor('');
      }, 5000);
    }
  };

  return (
    <div className="color-theme">
      <div>
        <h2>Chatbot</h2>
      </div>
      <div className="buttons">
        <input
          style={{ marginTop: '1rem', height: '2rem' }}
          type="text"
          value={userDefinedColor}
          onChange={(e) => handleColorProfileChange(e.target.value)}
          placeholder="Enter your preferred color"
        />
        <button onClick={applyUserDefinedColor} className="change-theme-btn">
          Apply Color
        </button>
        <button onClick={cycleTheme} className="change-theme-btn">
          Change Theme
        </button>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ColorTheme;
