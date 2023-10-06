import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const endpoint2 =
    "https://opentdb.com/api.php?amount=50&category=15&type=multiple";
  const endpoint3 =
    "https://opentdb.com/api.php?amount=50&category=9&type=boolean";
  const endpoint4 = "https://api.dictionaryapi.dev/api/v2/entries/en/word";
  const endpoint5 = "https://joke.deno.dev/all";
  const [response, setresponse] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=15&type=multiple"
      );
      setQuestions(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswerClick = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    // Check if the selected answer is correct
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <>
      <section
        className=""
      >
        <div className="quiz-container">
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
              <p>
                Your Score: {score} / {questions.length}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default QuestionsAndAnswers;
