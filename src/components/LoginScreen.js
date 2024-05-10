import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStyles.css';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login validation and authentication
    if (username === 'user' && password === '123') {
      // Navigate to the main app
      navigate('/chat');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-screen-container">
      <div className="login-screen">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input className="input-fields"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input className="input-fields"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;