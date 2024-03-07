import React, { useState, useEffect } from "react";
import "./QuestionComponent.css";

const QuestionComponent = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onSkip,
  isLastQuestion,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(10);
  const [message, setMessage] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    onAnswer(selectedOption);
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
        console.log(timer);
      }, 1000);
    }
    if (timer === 0) {
      setMessage(true);
      setTimer(10);
      setTimeout(() => {
        onSkip();
        setMessage(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [timer]);

  return (
    <div className="custom-question-card">
      <div className="timer-table">
        <h5 className="App-heading">Quiz App</h5>
        <div className="timer-box">
          {message ? (
            <p>Time out</p>
          ) : (
            <>
              <h4 className="timer-text">Time left: </h4>
              <h4 className="timer-value">{timer}sec</h4>
            </>
          )}
        </div>
      </div>
      <hr />
      <h3 className="custom-question">{` ${questionNumber + 1}: ${
        question.question
      }`}</h3>

      <ul className="custom-options-list">
        {question.options.map((option, index) => (
          <li key={index} className="custom-option">
            <label className="custom-option-label">
              <input
                type="radio"
                name="custom-options"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
                className="custom-option-radio"
              />
              {option}
            </label>
          </li>
        ))}
      </ul>

      <div className="custom-button-container">
        <p className="question-no">{`${
          questionNumber + 1
        } of ${totalQuestions} Questions`}</p>
        <div>
          <button
            onClick={handleSkip}
            className="custom-option-button custom-skip-button"
          >
            Skip
          </button>
          {isLastQuestion ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className="custom-option-button custom-submits-button"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className="custom-option-button custom-next-button"
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
