import React, { useState } from 'react';
import Login from './components/login';
import Register from './components/register';
import Chat from './components/chat';

function App() {
  const [username, setUsername] = useState('');

  if (!username) {
      return (
          <div>
              <Register />
              <Login onLogin={setUsername} />
          </div>
      );
  }

  return <Chat username={username} />;
}

export default App;