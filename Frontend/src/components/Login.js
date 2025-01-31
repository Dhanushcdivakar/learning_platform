import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ setUser }) {
  const [usn, setUsn] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      navigate('/'); // Redirect to home page if user is already logged in
    }
  }, [setUser, navigate]);

  const handleClick = (e) => {
    e.preventDefault();

    if (!usn || !password) {
      alert('Please fill in all fields.');
      return;
    }

    axios
      .post('http://localhost:4000/api/login', { usn, password })
      .then((result) => {
        if (result.data.status === 'success') {
          setUser(result.data.user); // Store user in parent state
          localStorage.setItem('user', JSON.stringify(result.data.user)); // Save user to local storage
          navigate('/'); // Redirect to home page or dashboard
        } else {
          setError('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        console.error('Error occurred:', error);
        setError('An error occurred. Please try again.');
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow-lg p-4 mb-5 bg-white rounded w-75 w-md-50 w-lg-40"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
      >
        <h1 className="text-center mb-4 text-primary">Login</h1>

        {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}

        <form onSubmit={handleClick}>
          <div className="mb-3">
            <label htmlFor="Usn" className="form-label">USN</label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="Usn"
              onChange={(e) => setUsn(e.target.value)}
              value={usn}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-lg w-50">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
