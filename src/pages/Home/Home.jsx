import React from "react";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../../Components/NavBar/NavBar";
import backgroundImage from "../../Assets/Images/greenbackground.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    console.log("Start Quiz clicked");
    navigate("/quiz");
  };

  return (
    <div
      className="Quiz-home-container bg-cover bg-center border-4 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`, height: "100vh" }}
    >
      <TopNavbar className="bg-black" />

      <div
        className="Quiz-content text-center text-white border-2 border-gray-300  w-full max-w-4xl  h-80 max-h-screen shadow-lg p-8 rounded-md flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-bold text-black">
          Welcome to our Quiz App!
        </h1>
        <p className="mt-4 text-2xl text-gray-500">
          Please take a moment to attend the quiz.
        </p>

        <div className="quiz-options mt-8">
          <button
            className="py-3 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            onClick={handleStartQuiz}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
