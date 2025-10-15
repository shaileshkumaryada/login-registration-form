import React, { useState } from 'react';

const Registration = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/auth/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message || data.error);

    setForm({ name: '', email: '', password: '' });
  };

  return (
    <div className="p-8 max-w-sm mx-auto">
      <h2 className="text-xl mb-4 font-bold">Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          minLength={8}
          required
        />
        <button type="submit" className="w-full bg-blue-700 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
