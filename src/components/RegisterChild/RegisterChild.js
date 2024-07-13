// src/components/RegisterChild/RegisterChild.js
import React, { useState } from 'react';
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

  return (
    <div className="register-child-container">
      <h1>Register a Child</h1>
      <form onSubmit={handleSubmit} className="register-child-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input type="text" name="province" placeholder="Province" value={formData.province} onChange={handleChange} required />
        <input type="text" name="needs" placeholder="Needs" value={formData.needs} onChange={handleChange} required />
        <input type="text" name="family" placeholder="Family" value={formData.family} onChange={handleChange} required />
        <input type="url" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterChild;