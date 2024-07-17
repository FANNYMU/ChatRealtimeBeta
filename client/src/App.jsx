import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Admin from './secret/admin';
import LoginAdmin from './secret/login';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/awjdoiah9ohhf9HFwhahf" element={<Admin />} />
          <Route path="/loginAdmin" element={<LoginAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
