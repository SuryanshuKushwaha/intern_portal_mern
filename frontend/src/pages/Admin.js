import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { Container } from 'postcss';

const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || 'admin123';

export default function Admin(){
  const [pass, setPass] = useState('');
  const [authed, setAuthed] = useState(false);
  const [apps, setApps] = useState([]);

  useEffect(()=>{ if(authed) load(); }, [authed]);

  const load = async () => {
    const res = await api.get('/applicants');
    setApps(res.data);
  }

  const tryLogin = (e) => { e.preventDefault(); if(pass === ADMIN_PASSWORD) setAuthed(true); else alert('Wrong password'); }

  const del = async (id) => {
    if(!window.confirm('Delete this applicant?')) return;
    await api.delete(`/applicants/${id}`);
    setApps(apps.filter(a => a._id !== id));
  }

  if(!authed) return (
    <div className="container">
    <div style={{ padding:20 }}>
      <h2>Admin Login</h2>
      <form onSubmit={tryLogin}>
        <input placeholder="Enter Password = admin123" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
    </div>
  )

  return (
    <div className="container">
    <div style={{ padding:20 }}>
      <h2>Applicants</h2>
      <table border="1" cellPadding="6" cellSpacing="0">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Phone</th><th>Role</th><th>Skills</th><th>Action</th></tr>
        </thead>
        <tbody>
          {apps.map(a => (
            <tr key={a._id}>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.phone}</td>
              <td>{a.role}</td>
              <td>{a.skills}</td>
              <td><button onClick={()=>del(a._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}
