import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import TakeQuiz from "./pages/QuizPage/QuizPage";
import ScoreCard from "./pages/ScoreCard/ScoreCard";
import './Assets/CSS/index.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quiz" element={<TakeQuiz />} />
          <Route path="/score" element={<ScoreCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
