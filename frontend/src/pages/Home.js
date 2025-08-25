import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container" style={{ textAlign: 'center', animation: 'fadeIn 0.6s ease-in-out' }}>
      <h1>Intern Portal</h1>
      <p style={{ fontSize: '30px', marginTop: '10px', marginBottom: '30px' }}>
        Welcome !
      </p>
      <p style={{ fontSize: '18px', marginTop: '10px', marginBottom: '30px' }}>Apply as an intern or volunteer</p>
      <div className="home-links" style={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
        <div style={{ textAlign: 'center', lineHeight: 0, width: 220, boxSizing: 'border-box' }}>
          <img
            src="/images/r.jpg"
            alt="Register"
            style={{ borderRadius: '10px', display: 'block', margin: '0 auto', width: '100%', height: 'auto', marginBottom: 0 }}
          />
          <Link
            to="/register"
            style={{
              display: 'block',
              marginTop: 8,
              height: '35px',
              boxSizing: 'border-box',
                 padding: '20px',
              background: '#0d6efd',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: 8,
              textAlign: 'center',
            }}
          >
            Apply
          </Link>
        </div>

        <div style={{ textAlign: 'center', lineHeight: 0, width: 220, boxSizing: 'border-box' }}>
          <img
            src="/images/a.jpg"
            alt="Admin"
            style={{ borderRadius: '10px', display: 'block', margin: '0 auto', width: '100%', height: 'auto', marginBottom: 0 }}
          />
          <Link
            to="/admin"
            style={{
              display: 'block',
              marginTop: 8,
              height: '35px',
              boxSizing: 'border-box',
              padding: '20px',
              background: '#198754',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: 8,
              textAlign: 'center',
            }}
          >
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
}
