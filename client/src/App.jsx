import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Admin from './secret/admin';
import LoginAdmin from './secret/login';
import { ThemeProvider } from './components/ThemeProvider';
import Darkmode from './components/darkmode';
import './App.css'


const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Darkmode />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/awjdoiah9ohhf9HFwhahf" element={<Admin />} />
            <Route path="/loginAdmin" element={<LoginAdmin />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;