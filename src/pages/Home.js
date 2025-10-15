import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Jarurat Care</span>
          </h1>
          <p className="hero-subtitle">
            Your trusted partner in patient care management
          </p>
          <p className="hero-description">
            Efficiently manage patient records, appointments, and medical histories 
            all in one secure platform.
          </p>
          <Link to="/patients" className="cta-button">
            View Patients
          </Link>
        </div>
        <div className="hero-image">
          <div className="floating-card">
            <span className="card-icon">👨‍⚕️</span>
            <p>Professional Care</p>
          </div>
          <div className="floating-card">
            <span className="card-icon">📋</span>
            <p>Easy Records</p>
          </div>
          <div className="floating-card">
            <span className="card-icon">🔒</span>
            <p>Secure Data</p>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title">Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h3>Patient Management</h3>
            <p>Comprehensive patient records and history tracking</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔍</span>
            <h3>Quick Search</h3>
            <p>Find patient information instantly with powerful search</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📱</span>
            <h3>Mobile Friendly</h3>
            <p>Access patient data on any device, anywhere</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔐</span>
            <h3>Secure & Private</h3>
            <p>Your data is protected with enterprise-grade security</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
