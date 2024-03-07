import React from "react";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../../Components/NavBar/NavBar";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    console.log("Start Quiz clicked");
    navigate("/quiz");
  };
  return (
    <div className="Quiz-home-container">
      <TopNavbar />

      <div className="Quiz-header">
        <h1>Welcome to our Quiz App!</h1>
        <p>Please take a moment to attend the quiz.</p>
      </div>

      <div className="quiz-options">
        <button className="quiz-button" onClick={handleStartQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
