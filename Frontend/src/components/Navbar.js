import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from './images/logo.jpg';
import { FaUserCircle } from 'react-icons/fa'; // Add user icon from react-icons

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const navbarCollapseRef = useRef(null);

  const handleLogout = () => {
    setUser(null); // Clear user from state
    localStorage.removeItem('user'); // Clear user from localStorage
    navigate('/'); // Redirect to login
  };

  const handleLinkClick = () => {
    // Bootstrap's collapse method to close the navbar smoothly
    if (navbarCollapseRef.current) {
      const collapseElement = navbarCollapseRef.current;
      collapseElement.classList.remove('show');
      
      setTimeout(() => {
        collapseElement.classList.add('collapse');
      }, 350);
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: '1030',
          background: 'linear-gradient(135deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)',
        }}
      >
        <div className="container-fluid">
          <img src={logo} alt="logo" style={{ height: '40px', width: '40px', marginRight: '10px' }} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/leaderboard" onClick={handleLinkClick}>
                  LeadersBoard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/resource" onClick={handleLinkClick}>
                  Resource
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/faq" onClick={handleLinkClick}>
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
            </ul>

            {/* "Register" and "Login" for Small Devices - below About Us */}
            {!user && (
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/Register" onClick={handleLinkClick}>
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/Login" onClick={handleLinkClick}>
                    Login
                  </Link>
                </li>
              </ul>
            )}

            {/* If user is logged in, show User info and Logout */}
            {user && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                <li
                  className="nav-item d-flex align-items-center"
                  style={{ backgroundColor: '#f0f8ff', borderRadius: '5px', padding: '5px 15px' }}
                >
                  <FaUserCircle size={30} className="me-2" style={{ color: '#007bff' }} />
                  <span className="navbar-text" style={{ fontWeight: 'bold', color: '#333' }}>
                    Welcome, {user.name}
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleLogout}
                    style={{ color: '#ff4d4d', fontWeight: 'bold' }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
