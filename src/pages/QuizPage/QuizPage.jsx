import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../../test.json";
import QuestionComponent from "../Question/QuestionComponent";
import TopNavbar from "../../Components/NavBar/NavBar";
import ScoreCard from "../ScoreCard/ScoreCard";
import "./QuizPage.css";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAttended, setTotalAttended] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questionsData.quiz.questions[currentQuestionIndex];
    setTotalAttended((prevTotalAttended) => prevTotalAttended + 1);

    if (selectedOption === currentQuestion.correct_answer) {
      setScore((prevScore) => prevScore + 3);
      setTotalCorrect((prevTotalCorrect) => prevTotalCorrect + 1);
    } else {
      setScore((prevScore) => prevScore - 1.5);
      setTotalWrong((prevTotalWrong) => prevTotalWrong + 1);
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSkip = () => {
    setScore((prevScore) => prevScore - 1.5);
    // setTotalAttended((prevTotalAttended) => prevTotalAttended + 1);
    setTotalWrong((prevTotalWrong) => prevTotalWrong + 1);

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    navigate("/score");
  };

  return (
    <div className="quiz-page-container">
      <TopNavbar />
      {currentQuestionIndex < questionsData.quiz.questions.length ? (
        <QuestionComponent
          question={questionsData.quiz.questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex}
          totalQuestions={questionsData.quiz.questions.length}
          onAnswer={handleAnswer}
          onSkip={handleSkip}
          isLastQuestion={
            currentQuestionIndex === questionsData.quiz.questions.length - 1
          }
          onQuizComplete={handleQuizComplete}
        />
      ) : (
        <ScoreCard
          totalQuestions={questionsData.quiz.questions.length}
          totalAttended={totalAttended}
          totalCorrect={totalCorrect}
          totalWrong={totalWrong}
          score={score}
        />
      )}
    </div>
  );
};

export default QuizPage;
