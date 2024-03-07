import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const TopNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout clicked");
    navigate("/");
  };

  const handleTakeQuiz = () => {
    console.log("Take a Quiz clicked");
    navigate("/quiz");
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="top-navbar">
      <div className="navbar-container">
        <div className="left-content">
          <Link to="/">QuizApp</Link>
        </div>
        <div className="right-content">
          <div className="hamburger-menu">
            <button
              className="hamburger-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
          {menuOpen && (
            <div className="menu-dropdown">
              <button className="menu-option" onClick={handleTakeQuiz}>
                Take a Quiz
              </button>
              <button className="menu-option" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
