import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Jarurat Care</h1>
        <p className="about-subtitle">Your Healthcare Partner</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Jarurat Care, we are committed to revolutionizing patient care 
            management by providing healthcare professionals with intuitive and 
            efficient tools to manage patient records, appointments, and medical histories.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="offerings-grid">
            <div className="offering-item">
              <span className="offering-icon">📋</span>
              <h3>Comprehensive Records</h3>
              <p>Maintain detailed patient information in one secure location</p>
            </div>
            <div className="offering-item">
              <span className="offering-icon">⚡</span>
              <h3>Fast Access</h3>
              <p>Quick search and retrieval of patient data when you need it</p>
            </div>
            <div className="offering-item">
              <span className="offering-icon">🔐</span>
              <h3>Secure Platform</h3>
              <p>HIPAA-compliant security to protect sensitive information</p>
            </div>
            <div className="offering-item">
              <span className="offering-icon">📱</span>
              <h3>Multi-Device Support</h3>
              <p>Access from desktop, tablet, or mobile devices</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Patient-Centric:</strong> Every feature is designed with patient care in mind</li>
            <li><strong>Security First:</strong> We prioritize the privacy and security of medical data</li>
            <li><strong>Innovation:</strong> Continuously improving to meet healthcare needs</li>
            <li><strong>Accessibility:</strong> Making healthcare management accessible to all</li>
          </ul>
        </section>

        <section className="about-section contact-section">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <div className="contact-info">
            <p>📧 Email: support@jaruratcare.com</p>
            <p>📞 Phone: +91 1800-123-4567</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
