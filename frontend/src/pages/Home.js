import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container" style={{ textAlign: 'center', animation: 'fadeIn 0.6s ease-in-out' }}>
      <h1>Intern / Volunteer Portal</h1>
      <p style={{ fontSize: '18px', marginTop: '10px', marginBottom: '30px' }}>
        Welcome — register as an intern or volunteer, or view applicants (admin).
      </p>
      <div className="home-links" style={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
        <div style={{ textAlign: 'center', lineHeight: 0 }}>
          <img
            src="/images/r.jpg"
            alt="Register"
            style={{ display: 'block', margin: '0 auto', width: 160, height: 'auto', marginBottom: 0 }}
          />
          <Link to="/register" style={{ display: 'block', marginTop: 0 }}>
            Register
          </Link>
        </div>

        <div style={{ textAlign: 'center', lineHeight: 0 }}>
          <img
            src="/images/a.jpg"
            alt="Admin"
            style={{ display: 'block', margin: '0 auto', width: 160, height: 'auto', marginBottom: 0 }}
          />
          <Link to="/admin" style={{ display: 'block', marginTop: 0 }}>
            Admin View
          </Link>
        </div>
      </div>
    </div>
  );
}
