import React, { useEffect, useState } from 'react';

export default function AdminContent() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('http://localhost:8080/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        console.error('Failed to fetch messages');
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">Hello Admin</h1>
      <p className="text-gray-500">Welcome to the Admin Dashboard</p>
      <div className="mt-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-blue-500">Messages:</h2>
        <ul className="list-disc pl-5">
          {messages.map((msg, index) => (
            <li key={index} className="my-2">
              <strong className="font-semibold text-blue-500">{msg.username}:</strong> {' '}
              <span className="text-gray-700">{msg.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

