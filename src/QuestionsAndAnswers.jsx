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

  // "https://opentdb.com/api.php?amount=10&category=15&type=multiple"

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=20"
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


  const divStyle = {
    borderRadius: '5px',
    height: '200px',
    position: 'relative',
    backgroundImage: 'url("firework-2.gif")', 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="quiz-section">
      <div className="quiz-container">
        {currentQuestionIndex === 0 && (
          <div className="intro-message">
            <p>Welcome to the quiz! There are 50 questions for you to answer. 📚</p>
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
            <div>
              <img src="gif.png" alt="" className="reading-image" />
            </div>
          </div>
        ) : (
          <div className="quiz-summary">
            <h2>Quiz Completed! 🎉</h2>
            <p>Your Score: {score} / 10</p>
            {score >= 2 ? (
              <div className="position-relative " style={divStyle}>
                <img src="congrats2.gif" alt=""  style={{position: 'absolute', right: '10px', bottom: '10px', width: '100px', zIndex: '2'}}/>
                <img src="congrats3.gif" className="position-absolute" alt="" style={{height: '100%', left: '0', width: '100%', right: '0', top: '0', bottom: '0'}} />
              </div>
            ) : (
              <div>ko jooo</div>
            )}

            <div className="user-choices">
              <h3>Your Choices:</h3>
              <ul>
                {userChoices.map((choice, index) => (
                  <li key={index}>
                    <strong>Question:</strong> {choice.question} <br />
                    <strong>Your Choice:</strong> {choice.choice} {choice.isCorrect ? (
                      <span className="correct-answer"> (Correct) 😄</span>
                    ) : (
                      <span className="incorrect-answer"> (Incorrect) 😞</span>
                    )} <br />
                    <strong>Correct Answer:</strong> {choice.correctAnswer}
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
