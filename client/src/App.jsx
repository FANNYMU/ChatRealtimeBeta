import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Chat from './components/chat';

function App() {
  const [username, setUsername] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !username ? (
              <div>
                <Register />
                <Login onLogin={setUsername} />
              </div>
            ) : (
              <Chat username={username} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
