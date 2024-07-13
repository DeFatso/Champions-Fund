// src/components/Home/Home.js
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
    const subject = `Support for ${child.name}`;
    const body = `Hello,\n\nI am interested in supporting ${child.name}. Please provide me with more information.\n\nThank you.`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsApp = (child) => {
    const message = `Hello, I am interested in supporting ${child.name}. Please provide me with more information.`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
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
    </div>
  );
};

export default Home;