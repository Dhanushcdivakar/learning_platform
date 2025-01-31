import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="bd-footer mt-5 " style={{ background: "linear-gradient(135deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)" }}>
        <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <h5>About Adaptive Learning Hub</h5>
              <p className="small">
                Adaptive Learning Hub is designed to enhance your learning experience with progress tracking, personalized resource recommendations, and engaging leaderboards. Our goal is to support and motivate learners to reach their full potential.
              </p>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Navigation</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/">Home</a></li>
                <li className="mb-2"><a href="/about">About Us</a></li>
                <li className="mb-2"><a href="/resources">Resources</a></li>
                <li className="mb-2"><a href="/faq">FAQ</a></li>
                <li className="mb-2"><a href="/leaderboard">Leaderboard</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Resources</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/get-started">Getting Started</a></li>
                <li className="mb-2"><a href="/tutorials">Tutorials</a></li>
                <li className="mb-2"><a href="/articles">Articles</a></li>
                <li className="mb-2"><a href="/videos">Videos</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/contact">Contact Us</a></li>
                <li className="mb-2"><a href="/help">Help Center</a></li>
                <li className="mb-2"><a href="/privacy">Privacy Policy</a></li>
                <li className="mb-2"><a href="/terms">Terms of Service</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/" target="_blank" rel="noopener">LinkedIn</a></li>
                <li className="mb-2"><a href="/" target="_blank" rel="noopener">GitHub</a></li>
                <li className="mb-2"><a href="/" target="_blank" rel="noopener">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="small">&copy; {new Date().getFullYear()} Adaptive Learning Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
