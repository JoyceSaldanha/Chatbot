// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import MainApp from './components/MainApp';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/chat" element={<MainApp />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
