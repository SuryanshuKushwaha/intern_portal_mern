import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container" style={{ textAlign: 'center', animation: 'fadeIn 0.6s ease-in-out' }}>
      <h1>Intern / Volunteer Portal</h1>
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
