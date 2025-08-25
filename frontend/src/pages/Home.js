import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container" style={{ textAlign: 'center', animation: 'fadeIn 0.6s ease-in-out' }}>
      <h1>Intern / Volunteer Portal</h1>
      <p style={{ fontSize: '18px', marginTop: '10px', marginBottom: '30px' }}>
        Welcome — register as an intern or volunteer, or view applicants (admin).
      </p>
      <div className="home-links" style={{ display: 'flex', gap: '40px', justifyContent: 'center', alignItems: 'flex-start' }}>
        <div className="home-card" style={{ textAlign: 'center' }}>
          <img src="/images/register.svg" alt="Register" style={{ width: '160px', height: '160px', objectFit: 'contain', marginBottom: '12px' }} />
          <Link to="/register">Register</Link>
        </div>

        <div className="home-card" style={{ textAlign: 'center' }}>
          <img src="/images/admin.svg" alt="Admin" style={{ width: '160px', height: '160px', objectFit: 'contain', marginBottom: '12px' }} />
          <Link to="/admin">Admin View</Link>
        </div>
      </div>
    </div>
  );
}
