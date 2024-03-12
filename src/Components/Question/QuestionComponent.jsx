import React, { useState, useEffect } from "react";
import beepSound from "../../Assets/Audio/error-83494.mp3";

const QuestionComponent = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onSkip,
  isLastQuestion,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(60);
  const [message, setMessage] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const beepAudio = new Audio(beepSound);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    onAnswer(selectedOption);
    setIsTimeUp(false);
    setSelectedOption(null);
    setTimer(10);
  };

  const handleSkip = () => {
    onSkip();
    setSelectedOption(null);
    setTimer(10);
  };

  useEffect(() => {
    let timerId;

    if (timer > 0) {
      timerId = setTimeout(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));

        if (timer <= 5) {
          setIsTimeUp(true);
        }
      }, 1000);
    }

    if (timer === 0) {
      setMessage(true);
      setIsTimeUp(true);

      beepAudio.play();

      setTimeout(() => {
        setIsTimeUp(false);
        onSkip();
        setMessage(false);
        setTimer(10);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [timer, onSkip, beepAudio]);

  return (
    <div
      className="p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-300 rounded shadow-md w-full max-w-6xl mx-auto bg-white font-sans sm:w-full md:w-3/4 lg:w-1/2"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="flex justify-between items-center mb-4 sm:mb-2 md:mb-4 lg:mb-6">
        <h5 className="text-2xl font-semibold text-black-600">Quiz App</h5>
        <div className="flex items-center">
          {message ? (
            <p
              className={`text-red-500 text-2xl sm:text-lg ${isTimeUp ? "animate-pulse " : ""}`}
            >
              {isTimeUp ? "Time's up!" : "Time out"}
            </p>
          ) : (
            <>
              <h4
                className={`text-2xl sm:text-lg ${isTimeUp ? "text-red-500 animate-pulse " : ""}`}
              >
                Time left: {timer}sec
              </h4>
            </>
          )}
        </div>
      </div>
      <hr className="border-t-4 border-grey-600 my-4" />
      <h3 className="text-2xl font-bold mt-6">{` ${questionNumber + 1}. ${question.question}`}</h3>
      <ul className="list-none flex flex-col gap-8 mt-4">
        {question.options.map((option, index) => (
          <li key={index} className="flex items-center">
            <label className="flex items-center text-2xl ml-10 text-gray-800">
              <input
                type="radio"
                name="custom-options"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
                className="mr-2 h-4 w-4 sm:h-6 sm:w-6 text-blue-600 focus:outline-none"
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <p className="text-black-600 text-1xl sm:text-base">{`${questionNumber + 1} of ${totalQuestions} Questions`}</p>
        <div className="flex gap-2">
          <button
            onClick={handleSkip}
            className="py-2 px-4 sm:px-8 bg-white-300 border border-gray-300 text-gray-800 rounded mr-2 shadow-lg hover:bg-blue-600"
          >
            Skip
          </button>
          {isLastQuestion ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className={`py-2 px-4 sm:px-8 bg-blue-600 shadow-lg text-white rounded hover:bg-blue-700 ${
                selectedOption ? "" : "cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className={`py-2 px-4 sm:px-8 ${
                selectedOption
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                  : "bg-gray-400 text-gray-800 cursor-not-allowed shadow-lg"
              }`}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
