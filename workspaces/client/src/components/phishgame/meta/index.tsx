import React from "react";
import ReactDOM from "react-dom";
import "@styles/main.css";
import Quiz from "../Quiz";
import { QuizProvider } from "../contexts/quiz";

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
