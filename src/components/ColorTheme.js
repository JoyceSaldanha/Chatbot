// ColorTheme.js
import React, { useState, useEffect } from 'react';

const ColorTheme = ({ onThemeChange }) => {
  const themes = [
    {
      background: 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)',
      bubbleColor: '#E0E5F1',
    },
    {
      background: 'linear-gradient(239.26deg, #E0F1ED 63.17%, #E0F1F1 94.92%)',
      bubbleColor: '#E0F1F1',
    },
    {
      background: 'linear-gradient(239.26deg, #E0E5F1 63.17%, #F1E0F1 94.92%)',
      bubbleColor: '#E0F1ED',
    },
    {
      background: 'linear-gradient(239.26deg, #E0F1ED 63.17%, #FFFFFF 94.92%)',
      bubbleColor: '#F1F1E0',
    },
    {
      background: 'linear-gradient(239.26deg, #F1F1E0 63.17%, #FFFFFF 94.92%)',
      bubbleColor: '#F1E0F1',
    },
  ];

  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  useEffect(() => {
    const savedThemeIndex = localStorage.getItem('currentTheme');
    if (savedThemeIndex !== null) {
      setCurrentThemeIndex(parseInt(savedThemeIndex));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentTheme', currentThemeIndex.toString());
    onThemeChange(themes[currentThemeIndex]);
  }, [currentThemeIndex, onThemeChange, themes]);

  const cycleTheme = () => {
    setCurrentThemeIndex((currentThemeIndex + 1) % themes.length);
  };

  return (
    <div className="color-theme" style={{ position: 'absolute', top: 0, right: 0 }}>
      <button onClick={cycleTheme} style={{position:'relative', top: 20, right: 20 , background: 'none',color:'black', border:'2px solid',borderRadius: '3px'}}>
        Change Theme
      </button>
    </div>
  );
};

export default ColorTheme;