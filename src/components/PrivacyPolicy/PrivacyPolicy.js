import React from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from './back.svg';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="privacypolicy-container">
      <header className="privacypolicy-header">
        <img src={backIcon} alt="Back" className="back-icon" onClick={handleBack} />
        <h1>Privacy Policy</h1>
      </header>
      <div className="privacypolicy-content">
        <h2>Introduction</h2>
        <p>
          Your privacy is important to us. This privacy policy explains how we handle your personal information.
        </p>
        <h2>Information Collection</h2>
        <p>
          We collect information to provide better services to our users. We collect information in the following ways:
          - Information you give us.
          - Information we get from your use of our services.
        </p>
        <h2>Use of Information</h2>
        <p>
          We use the information we collect from all of our services to provide, maintain, protect, and improve them, to develop new ones, and to protect our users.
        </p>
        <h2>Sharing of Information</h2>
        <p>
          We do not share personal information with companies, organizations, and individuals outside of our organization unless one of the following circumstances applies:
          - With your consent.
          - For legal reasons.
        </p>
        <h2>Changes</h2>
        <p>
          Our Privacy Policy may change from time to time. We will not reduce your rights under this Privacy Policy without your explicit consent.
        </p>
      </div>
      <footer className="privacypolicy-footer">
        <p>&copy; 2024 Champions Fund. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;