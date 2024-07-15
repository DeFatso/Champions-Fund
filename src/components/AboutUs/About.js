// src/components/AboutUs/AboutUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from './back.svg';
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="aboutus-container">
      <header className="aboutus-header">
        <img src={backIcon} alt="Back" className="back-icon" onClick={handleBack} />
        <h1>About Us</h1>
      </header>
      <div className="aboutus-content">
        <h2>Our Mission</h2>
        <p>
          Champions Fund is dedicated to providing support and opportunities to children in need. Our mission is to connect compassionate donors with children who require assistance, ensuring they receive the resources necessary for a brighter future.
        </p>
        <h2>What We Do</h2>
        <p>
          We facilitate the registration of children in need and offer a platform for donors to contribute towards their education, health, and overall well-being. By bridging the gap between donors and beneficiaries, we aim to create a community of support and care.
        </p>
        <h2>Our Values</h2>
        <p>
          Compassion, Integrity, and Commitment are at the core of our values. We believe in transparent operations and the impactful use of resources to make a real difference in the lives of children.
        </p>
      </div>
      <footer className="aboutus-footer">
        <p>&copy; 2024 Champions Fund. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;