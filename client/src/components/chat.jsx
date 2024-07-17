import React, { useState, useEffect } from 'react';
import "../../css/chat.min.css"

function Chat({ username }) {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [ws, setWs] = useState(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080/ws');
    
        socket.onopen = () => {
            // WebSocket connection established
        };
    
        socket.onerror = (error) => {
            console.log('WebSocket error');
        };
    
        socket.onclose = (event) => {
            // WebSocket connection closed
        };
    
        socket.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        };
    
        setWs(socket);
    
        return () => {
            socket.close();
        };
    }, []);
    
    const sendMessage = () => {
        if (message.trim() && username) {
            const msg = { username, message };
            ws.send(JSON.stringify(msg));
            setMessage('');
        } else {
            alert('Please enter a message');
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className='username'>Your name: {username}</div>
            <h2 className="text-2xl mb-4">Chat</h2>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message"
                    className="px-4 py-2 flex-1 border border-gray-300 rounded-md"
                />
                <button onClick={sendMessage} className="btnSubmit px-6 py-2 bg-blue-500 text-white rounded-md">Send</button>
            </div>
            <div className="space-y-2">
                {messages.map((msg, index) => (
                    <div key={index} className="bg-gray-200 p-2 rounded-md">
                        <strong>{msg.username}:</strong> {msg.message}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chat;

