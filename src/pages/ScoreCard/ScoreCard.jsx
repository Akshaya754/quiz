import React from "react";
import { useNavigate } from "react-router-dom";
import "./ScoreCard.css";

const ScoreCard = ({totalQuestions,totalAttended,totalCorrect,totalWrong,score,}) => {
  const navigate = useNavigate();

  const handleDone = () => {
    navigate("/home");
  };

  return (
    <div className="score-card-container">
      <h2> Score </h2>
      <table>
        <tbody>
          <tr>
            <td>Total Questions</td>
            <td>{totalQuestions}</td>
          </tr>
          <tr>
            <td>Total Attended</td>
            <td>{totalAttended}</td>
          </tr>
          <tr>
            <td>Total Correct Answers</td>
            <td>{totalCorrect}</td>
          </tr>
          <tr>
            <td>Total Wrong Answers</td>
            <td>{totalWrong}</td>
          </tr>
          <tr>
            <td>Your Score</td>
            <td>{score.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleDone} className="done-button">
        Done
      </button>
    </div>
  );
};

export default ScoreCard;
