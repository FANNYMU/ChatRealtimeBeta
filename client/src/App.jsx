import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Chat from "./components/chat";
import "../css/app.min.css";

function App() {
  const [username, setUsername] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleSuccessfulLogin = (user) => {
    setUsername(user);
    setShowLogin(false); // Hide login form
    setShowRegister(false); // Hide register form
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !username ? (
              <div>
                <div id="reg" className={showRegister ? "" : "remove"}>
                  <Register />
                </div>
                <div id="log" className={showLogin ? "" : "remove"}>
                  <Login onLogin={handleSuccessfulLogin} />
                </div>
              </div>
            ) : (
              <Chat username={username} />
            )
          }
        />
      </Routes>
      <div id="btnlogin" className={username ? "remove" : ""}>
        <div className="btnlog">
          <a
            className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
            href="#"
            onClick={handleLoginClick}
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <span className="text-sm font-medium transition-all group-hover:me-4">
              Login
            </span>
          </a>
        </div>
        <div className="btnreg">
          <a
            className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
            href="#"
            onClick={handleRegisterClick}
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <span className="text-sm font-medium transition-all group-hover:me-4">
              Register
            </span>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
