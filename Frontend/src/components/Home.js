import React from 'react';
import {useNavigate} from 'react-router-dom';

import sl1 from './images/slide 1.jpg';
import sl2 from './images/slide 2.jpg';
import sl3 from './images/slide3.jpg';
import proff from './images/profile.jpg';


export default function Home({ user }) {
  const navigate = useNavigate();

  return (
    <div>
      {!user ? (
        <>
          {/* Carousel Section */}
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={sl1} className="d-block w-100" alt="Learning Experience" />
              </div>
              <div className="carousel-item">
                <img src={sl2} className="d-block w-100" alt="Study Materials" />
              </div>
              <div className="carousel-item">
                <img src={sl3} className="d-block w-100" alt="Motivation and Growth" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>


        </>
      ) : (
        <div className="container mt-5">
          <div
            className="card shadow-lg p-4 border-0"
            style={{
              background: 'linear-gradient(135deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)',
            }}
          >
            <div className="d-flex align-items-center">
              <img
                src={proff}
                alt="User Logo"
                className="rounded-circle me-4 border"
                style={{
                  width: '150px',
                  height: '150px',
                  border: '5px solid #fff',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              />
              <div>
                <h1
                  className="display-4 fw-bold"
                  style={{
                    color: '#5a189a',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer',
                  }}
                  onMouseOver={(e) => (e.target.style.color = '#a50af3 ')}
                  onMouseOut={(e) => (e.target.style.color = '#f30a82')}
                >
                  Welcome, {user.name || 'User'}!
                </h1>
                <p
                  className="fs-5 text-muted"
                  style={{ fontStyle: 'italic', marginBottom: '0' }}
                >
                  USN: {user.usn || 'N/A'}
                </p>
                <p
                  className="mt-3"
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#ff6f61',
                  }}
                >
                  Score: {user.score || '0'}
                </p>
              </div>
            </div>
            {/* Add icons or additional features */}
            <div className="mt-4 text-center">
          <button
            className="btn btn-lg btn-outline-primary me-3"
            style={{
              borderRadius: '30px',
              padding: '10px 30px',
              fontWeight: '600',
            }}
            onClick={() => navigate('/leaderboard')} // Navigate to LeadersBoard
          >
            View Progress
          </button>
          <button
            className="btn btn-lg btn-outline-danger"
            style={{
              borderRadius: '30px',
              padding: '10px 30px',
              fontWeight: '600',
            }}
            onClick={() => navigate('/resource')} // Navigate to Resource
          >
            Go To Resource
          </button>
        </div>
          </div>
        </div>

      )}
      {/* Key Features Section */}
      <div className="container mt-5" style={{ background: 'linear-gradient(135deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)', paddingTop: '50px', paddingBottom: '50px' }}>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h3>Track Your Progress</h3>
                <p>Stay motivated by visualizing your learning journey and measuring growth.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h3>Personalized Recommendations</h3>
                <p>Receive study material tailored to your strengths, weaknesses, and interests.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h3>Engage in Healthy Competition</h3>
                <p>Challenge yourself and track your progress against peers through leaderboards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '300px', background: 'linear-gradient(135deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)', paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="text-center">
          <h2 className="mb-4">Why Choose Us?</h2>
          <ul className="list-unstyled" style={{ listStyleType: 'none', color: '#fff' }}>
            <li><i className="bi bi-check-circle-fill"></i> Focused, motivation-driven learning.</li>
            <li><i className="bi bi-check-circle-fill"></i> Dynamic learning paths that adapt to your needs.</li>
            <li><i className="bi bi-check-circle-fill"></i> Stay competitive and engaged through real-time leaderboards.</li>
          </ul>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mt-5 mb-5" style={{ background: 'linear-gradient(135deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)', paddingTop: '50px', paddingBottom: '50px' }}>
        <h2 className="text-center mb-4" style={{ color: '#fff' }}>What Learners Are Saying</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <p style={{ color: '#fff' }}>"The personalized study plans keep me on track and push me to improve." - Dilip </p>
          </div>
          <div className="col-md-4">
            <p style={{ color: '#fff' }}>"I love seeing my progress daily—it motivates me to keep going!" Chetan</p>
          </div>
          <div className="col-md-4">
            <p style={{ color: '#fff' }}>"The competitive leaderboards make learning fun and challenging." - Vishnu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
