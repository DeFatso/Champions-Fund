import React from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from './back.svg';
import './ContactUs.css';

const ContactUs = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="contactus-container">
      <header className="contactus-header">
        <img src={backIcon} alt="Back" className="back-icon" onClick={handleBack} />
        <h1>Contact Us</h1>
      </header>
      <div className="contactus-content">
        <h2>Get in Touch</h2>
        <p>If you have any questions or need further information, please feel free to contact us:</p>
        <p><strong>Email:</strong> info@championsfund.org</p>
        <p><strong>Phone:</strong> +1 (234) 567-890</p>
        <p><strong>Address:</strong> 123 Charity Street, Helping City, Country</p>
      </div>
      <footer className="contactus-footer">
        <p>&copy; 2024 Champions Fund. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;