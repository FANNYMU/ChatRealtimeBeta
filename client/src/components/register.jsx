import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        if (!username || !password) {
            alert('Username and password are required');
            return;
        }

        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            alert('Registration successful');
        } else {
            const errorMessage = await response.text();
            alert(`Registration failed: ${errorMessage}`);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-lg mb-4">Register</h2>
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
                onClick={handleRegister}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
                Register
            </button>
        </div>
    );
}

export default Register;

