import React from 'react';
import { Link } from 'react-router-dom';
import registerImg from '../register-now-icon-in-comic-style-registration-cartoon-illustration-on-isolated-background-member-notification-splash-effect-sign-business-concept-vector.jpg';

export default function Home() {
  return (
    <div className="container" style={{ textAlign: 'center', animation: 'fadeIn 0.6s ease-in-out' }}>
      <h1>Intern / Volunteer Portal</h1>

      {/* Image placed above both buttons */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={registerImg}
          alt="Register Now"
          style={{ maxWidth: '280px', width: '45%', height: 'auto', margin: '10px 0' }}
        />
      </div>

      <p style={{ fontSize: '18px', marginTop: '10px', marginBottom: '30px' }}>
        Welcome — register as an intern or volunteer, or view applicants (admin).
      </p>

      <div className="home-links">
        <Link to="/register">Register</Link>
        <Link to="/admin">Admin View</Link>
      </div>
    </div>
  );
}
