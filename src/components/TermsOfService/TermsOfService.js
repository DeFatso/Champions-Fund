import React from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from './back.svg';
import './TermsOfService.css';

const TermsOfService = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="termsofservice-container">
      <header className="termsofservice-header">
        <img src={backIcon} alt="Back" className="back-icon" onClick={handleBack} />
        <h1>Terms of Service</h1>
      </header>
      <div className="termsofservice-content">
        <h2>Introduction</h2>
        <p>
          Welcome to Champions Fund. By accessing and using our services, you agree to comply with the following terms and conditions. Please read them carefully.
        </p>
        <h2>Service Description</h2>
        <p>
          Champions Fund provides a platform for donors to support children in need. Our services include registration, donation facilitation, and communication between donors and beneficiaries.
        </p>
        <h2>User Responsibilities</h2>
        <p>
          Users must provide accurate information during registration and use the services responsibly. Any misuse or fraudulent activities are strictly prohibited.
        </p>
        <h2>Privacy Policy</h2>
        <p>
          Our Privacy Policy explains how we handle your personal information. By using our services, you agree to the terms outlined in our Privacy Policy.
        </p>
        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Users will be notified of any significant changes, and continued use of the services constitutes acceptance of the new terms.
        </p>
      </div>
      <footer className="termsofservice-footer">
        <p>&copy; 2024 Champions Fund. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsOfService;