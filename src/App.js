import './firebaseConfig';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterChild from './components/RegisterChild/RegisterChild';
import AboutUs from './components/AboutUs/About';

function App() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // This effect should only run when authentication status changes
  useEffect(() => {
    if (!loading) {
      if (authenticated && (window.location.pathname === '/' || window.location.pathname === '/login' || window.location.pathname === '/signup')) {
        navigate('/home');
      } else if (!authenticated && window.location.pathname !== '/login' && window.location.pathname !== '/signup') {
        navigate('/');
      }
    }
  }, [loading, authenticated, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth state
  }

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/register-child" element={<ProtectedRoute><RegisterChild /></ProtectedRoute>} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
