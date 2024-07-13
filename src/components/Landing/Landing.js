import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div id="landing" className="landing-container">
      <header className="landing-header">
        <div className="logo">Champions Fund</div>
        <nav>
          <Link to="/login" className="nav-link">Sign In</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </nav>
      </header>
      <div className="landing-content">
        <p>
          There are millions of children around the world who are born into impoverished conditions, where access to basic necessities like education is a distant dream. Your support is incredibly valuable and deeply appreciated. We warmly invite you to join us in our noble mission to eradicate poverty and ensure that every child has the opportunity to thrive through education. Together, we can make a meaningful difference in their lives, breaking the cycle of poverty and opening doors to a brighter future for generations to come.
        </p>
        <h1>Welcome to Champions Fund</h1>
        <div className="links">
          <Link to="/login">
            <button className="link-button">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="link-button">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;