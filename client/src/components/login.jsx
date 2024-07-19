import React, { useState } from 'react';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            onLogin(username);
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-lg mb-4">Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="px-4 py-2 mb-2 border border-gray-300 rounded-md"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="px-4 py-2 mb-4 border border-gray-300 rounded-md"
            />
            <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
                Login
            </button>
        </div>
    );
}

export default Login;

