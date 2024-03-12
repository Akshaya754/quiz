import React from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TopNavbar from "../../Components/NavBar/NavBar";

const ScoreCard = ({
  totalQuestions,
  totalAttended,
  totalCorrect,
  totalWrong,
  score,
}) => {
  const navigate = useNavigate();

  const handleDone = () => {
    navigate("/home");
  };

  const percentageCompletion = (totalCorrect / 6) * 100;

  return (
    <div className="score-card-container mb-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white flex flex-col items-center justify-center w-full max-w-xl  mx-auto p-4 sm:p-6 rounded-lg shadow-lg md:min-h-[40rem]">

      <TopNavbar className="bg-transparent" />

      <h2 className="text-center text-4xl font-bold  sm:text-3xl">Score Board</h2>

      <div className="w-full max-w-md px-4 py-4 text-black bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="score-second-card mb-4 flex items-center justify-center">
          <CircularProgressbar
            value={percentageCompletion}
            text={`${percentageCompletion.toFixed(2)}%`}
            className="w-24 h-24 text-blue-500"
            styles={{
              root: {},
              path: {
                stroke: 'blue',
                strokeWidth: '0.5rem',
              },
              trail: {
                stroke: 'lightgray',
              },
              text: {
                fill: 'black',
                fontSize: '1.5rem',
              },
            }}
          />
        </div>

        <table className="w-full table-auto">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 text-lg font-medium">Total Questions</td>
              <td className="py-3 px-4 text-lg font-medium">{totalQuestions}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 text-lg font-medium">Total Attended</td>
              <td className="py-3 px-4 text-lg font-medium">{totalAttended}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 text-lg font-medium">Total Correct Answers</td>
              <td className="py-3 px-4 text-lg font-medium">{totalCorrect}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 text-lg font-medium">Total Wrong Answers</td>
              <td className="py-3 px-4 text-lg font-medium">{totalWrong}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 text-lg font-medium">Your Score</td>
              <td className="py-3 px-4 text-lg font-medium">{score.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div className="text-center mt-4 mb-2">
          <button
            onClick={handleDone}
            className="py-2 px-4 sm:py-3 sm:px-8 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
