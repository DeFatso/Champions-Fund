import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import './Home.css';

const Home = () => {
  const [children, setChildren] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "children"));
      setChildren(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const handleRegisterChild = () => {
    navigate('/register-child');
  };

  const handleEmail = (child) => {
    const recipientEmail = 'support@championsfund.com';
    const subject = `Support for ${child.name}`;
    const body = `Hello,\n\nI am interested in supporting ${child.name}. Please provide me with more information.\n\nThank you.`;
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsApp = (child) => {
    const recipientPhoneNumber = '27123456789';
    const message = `Hello, I am interested in supporting ${child.name}. Please provide me with more information.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${recipientPhoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Champions Fund</h1>
        <div className="header-buttons">
          <button onClick={handleRegisterChild} className="register-button">Register a Child</button>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </header>
      <div className="welcome-message">
        <h2>Welcome to Champions Fund</h2>
        <p>Our mission is to provide support to children in need. Browse through the list of children below to learn more about their needs and how you can help.</p>
      </div>
      <div className="children-grid">
        {children.map((child, index) => (
          <div key={index} className="child-card">
            <img src={child.image} alt="child" className="child-image" />
            <div className="child-details">
              <p><strong>Name:</strong> {child.name}</p>
              <p><strong>Age:</strong> {child.age}</p>
              <p><strong>City:</strong> {child.province}</p>
              <p><strong>Needs:</strong> {child.needs}</p>
              <p><strong>Family:</strong> {child.family}</p>
            </div>
            <div className="contact-buttons">
              <button className="contact-button" onClick={() => handleEmail(child)}>Email</button>
              <button className="contact-button" onClick={() => handleWhatsApp(child)}>WhatsApp</button>
            </div>
          </div>
        ))}
      </div>
      <div className="instructions">
        <h2>How to Use This App</h2>
        <p>To register a child, click on the "Register a Child" button. If you wish to support a child, you can contact us via email or WhatsApp by clicking on the respective buttons in the child's card.</p>
      </div>
      <div className="testimonials">
        <h2>Testimonials</h2>
        <p>Read stories from people who have made a difference through Champions Fund.</p>
        <blockquote>"Champions Fund has changed my life and the lives of many children. I am grateful for their support!" - Jane Doe</blockquote>
      </div>
      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Charity Run - July 20, 2024</li>
          <li>Fundraising Gala - August 15, 2024</li>
        </ul>
      </div>
      <div className="call-to-action">
        <h2>Get Involved</h2>
        <p>You can make a difference by donating, volunteering, or registering a child in need.</p>
      </div>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <p><strong>How can I support a child?</strong> You can contact us via email or WhatsApp to learn more about a child's needs and how you can help.</p>
        <p><strong>How do I register a child?</strong> Click on the "Register a Child" button and fill out the form with the required information.</p>
      </div>
      <div className="footer">
        <p>&copy; 2024 Champions Fund. All rights reserved.</p>
        <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a> | <a href="/contact">Contact Us</a></p>
      </div>
    </div>
  );
};

export default Home;