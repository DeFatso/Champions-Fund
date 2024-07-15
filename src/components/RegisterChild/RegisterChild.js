// src/components/RegisterChild/RegisterChild.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './RegisterChild.css';

const RegisterChild = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    province: '',
    needs: '',
    family: '',
    image: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "children"), formData);
      alert('Child registered successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="register-container">
      <header className="register-header">
        <button className="back-button" onClick={handleBack}>Back</button>
        <h1>Register a Child</h1>
      </header>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="province">Province</label>
          <input type="text" id="province" name="province" value={formData.province} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="needs">Needs</label>
          <input type="text" id="needs" name="needs" value={formData.needs} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="family">Family</label>
          <input type="text" id="family" name="family" value={formData.family} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input type="url" id="image" name="image" value={formData.image} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
      <footer className="register-footer">
        <p>Thank you for helping us support children in need.</p>
      </footer>
    </div>
  );
};

export default RegisterChild;
