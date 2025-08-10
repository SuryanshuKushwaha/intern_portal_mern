import React, { useState } from 'react';
import { api } from '../api';

export default function Register(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', role:'', skills:'' });
  const [loading, setLoading] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      await api.post('/applicants', form);
      alert('Submitted — thank you!');
      setForm({ name:'', email:'', phone:'', role:'', skills:'' });
    }catch(err){
      alert('Error submitting');
    }finally{ setLoading(false); }
  }

  return (
    <div className="container">
    <div style={{ padding:20 }}>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <div><input name="name" placeholder="Name" value={form.name} onChange={handle} required /></div>
        <div><input name="email" placeholder="Email" value={form.email} onChange={handle} required /></div>
        <div><input name="phone" placeholder="Phone" value={form.phone} onChange={handle} required /></div>
        <div>
          <select name="role" value={form.role} onChange={handle} required>
            <option value="">Select role</option>
            <option value="Intern">Intern</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </div>
        <div><input name="skills" placeholder="Skills (comma separated)" value={form.skills} onChange={handle} /></div>
        <div>
          <button type="submit" disabled={loading}>{loading? 'Submitting...' : 'Submit'}</button>
        </div>
      </form>
    </div>
    </div>
  )
}