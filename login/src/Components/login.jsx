// src/Components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch('http://localhost:3000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form)
});

  const data = await res.json();
 if (data.token) {
      alert(data.message || 'Login Successful');
      navigate('/About');  // Login ke baad about page par jana
    } else {
      alert(data.message || data.error);
    }
  

  // Form ko reset karo yahan
  setForm({ email: '', password: '' });
};



  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-8 max-w-sm mx-auto">
      <h2 className="text-xl mb-4 font-bold">Login / Register</h2>
      <input
        className="w-full p-2 border rounded"
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        className="w-full p-2 border rounded"
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        minLength={8}
      />
      <button type="submit" className="w-full bg-blue-700 text-white px-4 py-2 rounded" >
        Login / Register
      </button>
    </form>
  );
};

export default Login;
