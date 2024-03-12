import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <nav className="bg-black text-white p-2 fixed top-0 left-0 right-0 h-16">
      <div className="flex justify-between items-center">
        <div className="text-3xl">
          <Link to="/">QuizApp</Link>
        </div>
        <div className="flex items-center">
          <div className="mr-3">
            <button
              className="text-white text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
          {menuOpen && (
            <div className="absolute top-16 right-0 bg-gray-800 shadow-md rounded">
              <button
                className="block px-4 py-2 text-white hover:bg-gray-600"
                onClick={handleTakeQuiz}
              >
                Take a Quiz
              </button>
              <button
                className="block px-4 py-2 text-white hover:bg-gray-600"
                onClick={handleLogout}
              >
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
