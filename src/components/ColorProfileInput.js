import React, { useState } from 'react';

const ColorProfileInput = ({ onColorProfileChange }) => {
  const [colorProfile, setColorProfile] = useState('');

  const handleColorProfileChange = (e) => {
    setColorProfile(e.target.value);
    onColorProfileChange(e.target.value); // Notify parent component of the color change
  };

  return (
    <div>
      <input
        type="text"
        value={colorProfile}
        onChange={handleColorProfileChange}
        placeholder="Enter your preferred color scheme"
      />
    </div>
  );
};

export default ColorProfileInput;
