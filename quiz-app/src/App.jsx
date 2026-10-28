import { useState } from "react";
import "./App.css";

function App() {
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Chennai", "Hyderabad"],
      answer: "Delhi",
    },
    {
      question: "Which language does React use?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "Which tag creates a paragraph in HTML?",
      options: ["<h1>", "<p>", "<br>", "<img>"],
      answer: "<p>",
    },
    {
      question: "Which hook manages state in React?",
      options: ["useState", "useHTML", "usePage", "useCSS"],
      answer: "useState",
    },
    {
      question: "Which symbol checks strict equality in JavaScript?",
      options: ["=", "==", "===", "!="],
      answer: "===",
    },
  ];

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function nextQuestion() {
    if (selected === "") {
      alert("Please select an option!");
      return;
    }

    let newScore = score;

    if (selected === questions[index].answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    if (index === questions.length - 1) {
      setFinished(true);
    } else {
      setIndex(index + 1);
      setSelected("");
    }
  }

  function restartQuiz() {
    setIndex(0);
    setSelected("");
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="quiz">
        <h1>Quiz Completed!</h1>
        <h2>
          Score: {score} / {questions.length}
        </h2>
        <p>Correct answers: {score}</p>
        <p>Wrong answers: {questions.length - score}</p>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <h1>React Quiz</h1>
      <p>
        Question {index + 1} of {questions.length}
      </p>

      <h2>{questions[index].question}</h2>

      {questions[index].options.map((option) => (
        <button
          key={option}
          className={
            selected === option ? "selected" : "option"
          }
          onClick={() => setSelected(option)}
        >
          {option}
        </button>
      ))}

      <button className="next" onClick={nextQuestion}>
        {index === questions.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
}

export default App;