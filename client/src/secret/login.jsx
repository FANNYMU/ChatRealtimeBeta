import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginAdmin() {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    if (username === import.meta.env.VITE_ADMIN_KEY_USERNAME && password === import.meta.env.VITE_ADMIN_KEY_PASSWORD) {
      navigate(import.meta.env.VITE_ADMIN_REDIRECT);
      localStorage.setItem('admwdaw132a', 'adadwafr3rwfsf');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username:</label>
            <input 
              type="text" 
              name="username" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input 
              type="password" 
              name="password" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
