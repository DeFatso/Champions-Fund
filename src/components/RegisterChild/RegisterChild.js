// src/components/RegisterChild/RegisterChild.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './RegisterChild.css';

const RegisterChild = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [province, setProvince] = useState('');
  const [needs, setNeeds] = useState('');
  const [family, setFamily] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'children'), {
        name,
        age,
        province,
        needs,
        family,
        image
      });
      navigate('/home');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="register-container">
      <header className="register-header">
        <h1>Register a Child</h1>
      </header>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Province</label>
          <input
            type="text"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Needs</label>
          <textarea
            value={needs}
            onChange={(e) => setNeeds(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Family</label>
          <textarea
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
      <footer className="register-footer">
        <p>&copy; 2024 Champions Fund. All rights reserved.</p>
        <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a> | <a href="/contact">Contact Us</a></p>
      </footer>
    </div>
  );
};

export default RegisterChild;
