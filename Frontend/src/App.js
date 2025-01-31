import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Resource from './components/Resource';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Faq from './components/Faq';
import About from './components/About';
import FoterBar from './components/FoterBar';
import LeadersBoard from './components/LeadersBoard';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  // Load user from localStorage on app initialization
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Clear user from localStorage
  };

  return (
    <>
      <Router>
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout} /> {/* Pass handleLogout to Navbar */}
        <Routes>
          <Route path="/" element={<Home user={user}/>} />
          <Route
            path="/leaderboard"
            element={<LeadersBoard user={user} />}
          />
          <Route
            path="/resource"
            element={<Resource user={user} />}
          />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/" />
              ) : (
                <Login setUser={(user) => {
                  setUser(user);
                  localStorage.setItem('user', JSON.stringify(user)); // Save user to localStorage
                }} />
              )
            }
          />
        </Routes>
        <FoterBar />
      </Router>
    </>
  );
}

export default App;
