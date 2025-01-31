import React from 'react';

export default function About() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: '#1e3a8a' }}>About Adaptive Learning Hub</h1>
      <p className="text-center text-muted mb-5">
        Adaptive Learning Hub is a platform designed to enhance learning through personalized progress tracking, resource recommendations, and leaderboards. By combining technology with learning strategies, our goal is to support continuous improvement and motivation for every learner.
      </p>

      <h2 className="text-center mb-4" style={{ color: '#16a34a' }}>Project Team</h2>
      <div className="row">
        {/* Dhanush C D*/}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-lg h-100" style={{ borderTop: '4px solid #1e3a8a', background: 'linear-gradient(135deg, #3b82f6, #9333ea)' }}>
            <img
              src="https://via.placeholder.com/150"
              alt="Dhanush C D"
              className="card-img-top"
            />
            <div className="card-body text-center text-white">
              <h5 className="card-title">Dhanush C D</h5>
              <p className="card-text">USN: 1EE22CS027</p>
              <p className="text-muted">Lead Developer</p>
              <p>Dhanush leads the team with a focus on backend architecture and system integration, ensuring scalability and efficient data handling across all components.</p>
            </div>
          </div>
        </div>

        {/* Harish Gowda N (Full Stack Developer) */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-lg h-100" style={{ borderTop: '4px solid #16a34a', background: 'linear-gradient(135deg, #34d399, #06b6d4)' }}>
            <img
              src="https://via.placeholder.com/150"
              alt="Harish Gowda N"
              className="card-img-top"
            />
            <div className="card-body text-center text-white">
              <h5 className="card-title">Harish Gowda N</h5>
              <p className="card-text">USN: 1EE22CS035</p>
              <p className="text-muted">Full Stack Developer</p>
              <p>Harish is responsible for both the frontend and backend, seamlessly integrating technologies to ensure a smooth user experience across all platforms.</p>
            </div>
          </div>
        </div>

        {/* Chetan HireKurubar (UI/UX Designer) */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-lg h-100" style={{ borderTop: '4px solid #9333ea', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}>
            <img
              src="https://via.placeholder.com/150"
              alt="Chetan HireKurubar"
              className="card-img-top"
            />
            <div className="card-body text-center text-white">
              <h5 className="card-title">Chetan HireKurubar</h5>
              <p className="card-text">USN: 1EE22CS019</p>
              <p className="text-muted">UI/UX Designer</p>
              <p>Chetan is in charge of creating visually appealing designs and user interfaces, ensuring the platform is both aesthetically pleasing and easy to navigate.</p>
            </div>
          </div>
        </div>

        {/* Chandan N (Content Strategist) */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card shadow-lg h-100" style={{ borderTop: '4px solid #ec4899', background: 'linear-gradient(135deg, #f59e0b, #f97316)' }}>
            <img
              src="https://via.placeholder.com/150"
              alt="Chandan N"
              className="card-img-top"
            />
            <div className="card-body text-center text-white">
              <h5 className="card-title">Chandan N</h5>
              <p className="card-text">USN: 1EE22CS017</p>
              <p className="text-muted">Content Strategist</p>
              <p>Chandan curates the content for the platform, ensuring that resources are personalized and helpful for each user based on their progress.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5" style={{ backgroundColor: '#f7f7f7', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#1e3a8a' }}>Project Objectives</h3>
        <p className="text-muted">
          Our objective is to provide a platform that motivates students to learn at their own pace with features that enhance learning through data-driven personalization and progress tracking.
          Each team member has contributed to making Adaptive Learning Hub an engaging and valuable tool for learners.
        </p>
        <p style={{ color: '#34d399' }}>Together, we strive to innovate and improve the learning experience for everyone!</p>
      </div>
    </div>
  );
}
