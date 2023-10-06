import axios from "axios";
import React, { useState, useEffect } from "react";

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userChoices, setUserChoices] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=50&category=9&type=boolean"
      );
      setQuestions(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswerClick = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    // Check if the selected answer is correct
    const isCorrect = selectedAnswer === currentQuestion.correct_answer;

    // Update the score if the answer is correct
    if (isCorrect) {
      setScore(score + 1);
    }

    // Store the user's choice and whether it's correct
    setUserChoices([
      ...userChoices,
      {
        question: currentQuestion.question,
        choice: selectedAnswer,
        isCorrect,
        correctAnswer: currentQuestion.correct_answer,
      },
    ]);

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
        <section className="quiz-section">
        <div className="quiz-container">
          {currentQuestionIndex === 0 && (
            <div className="intro-message">
              <p>Welcome to the quiz! There are 50 questions for you to answer.</p>
            </div>
          )}
          {questions.length > 0 && currentQuestionIndex < questions.length ? (
            <div className="question-card">
              <h2>Question {currentQuestionIndex + 1}</h2>
              <p>{questions[currentQuestionIndex].question}</p>
              <div className="answer-options">
                {questions[currentQuestionIndex].incorrect_answers.map(
                  (answer, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(answer)}
                    >
                      {answer}
                    </button>
                  )
                )}
                <button
                  onClick={() =>
                    handleAnswerClick(
                      questions[currentQuestionIndex].correct_answer
                    )
                  }
                >
                  {questions[currentQuestionIndex].correct_answer}
                </button>
              </div>
            </div>
          ) : (
            <div className="quiz-summary">
              <h2>Quiz Completed!</h2>
              <p>Your Score: {score} / 50</p>
  
              <div className="user-choices">
                <h3>Your Choices:</h3>
                <ul>
                  {userChoices.map((choice, index) => (
                    <li key={index}>
                      <strong>Question:</strong> {choice.question} <br />
                      <strong>Your Choice:</strong> {choice.choice} <br />
                      <strong>Correct Answer:</strong> {choice.correctAnswer}
                      {choice.isCorrect ? (
                        <span className="correct-answer"> (Correct)</span>
                      ) : (
                        <span className="incorrect-answer"> (Incorrect)</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
  );
};

export default QuestionsAndAnswers;
