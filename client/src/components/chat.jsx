import React, { useState, useEffect } from 'react';

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
        <div>
            <h2>Chat</h2>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={sendMessage}>Send</button>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.username}:</strong> {msg.message}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chat;
