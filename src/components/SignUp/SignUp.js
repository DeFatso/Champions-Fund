import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import './SignUp.css';
import backIcon from './back.svg';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      setError('Failed to sign up. Please try again.');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="signup-container">
      <header className="signup-header">
        <img src={backIcon} alt="Back" className="back-icon" onClick={handleBack} />
        <h1>Sign Up</h1>
      </header>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      <footer className="signup-footer">
        <p>Already have an account? <a href="/login">Sign In</a></p>
      </footer>
    </div>
  );
};

export default SignUp;