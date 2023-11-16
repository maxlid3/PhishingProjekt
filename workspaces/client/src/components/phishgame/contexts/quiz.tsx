import React, { createContext, useReducer, ReactNode, Dispatch } from "react";
import questions from "../meta/data";
import { shuffleAnswers } from "../meta/helpers";

interface QuizState {
  questions: Array<{
    question: string;
    incorrectAnswers: string[];
    correctAnswer: string;
    imagePath: string;
  }>;
  currentQuestionIndex: number;
  currentAnswer: string;
  answers: string[];
  showResults: boolean;
  correctAnswersCount: number;
  gameStarted: boolean;
  leaderboard: Array<{ playerName: string; score: number }>;
}
type QuizAction =
  | { type: "SELECT_ANSWER"; payload: string }
  | { type: "NEXT_QUESTION" }
  | { type: "RESTART" }
  | { type: "START_GAME" }
  | {
      type: "UPDATE_LEADERBOARD";
      payload: { playerName: string; score: number };
    };

const initialState: QuizState = {
  questions: questions.map((q, index) => ({
    question: q.question,
    incorrectAnswers: q.incorrectAnswers,
    correctAnswer: q.correctAnswer,
    imagePath: `random${index + 1}.png`,
  })),
  currentQuestionIndex: 0,
  currentAnswer: "",
  answers: shuffleAnswers(questions[0]),
  showResults: false,
  correctAnswersCount: 0,
  gameStarted: false,
  leaderboard: [],
};

const reducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentAnswer: "",
        showResults,
        currentQuestionIndex,
        answers,
      };
    }
    case "RESTART": {
      return initialState;
    }
    case "START_GAME": {
      return {
        ...initialState,
        gameStarted: true,
        answers: shuffleAnswers(questions[0]),
      };
    }
    case "UPDATE_LEADERBOARD": {
      const updatedLeaderboard = [...state.leaderboard, action.payload].sort(
        (a, b) => b.score - a.score
      );

      return {
        ...state,
        leaderboard: updatedLeaderboard.slice(0, 3), // Keep only the top 3 scores
      };
    }
    default:
      return state;
  }
};

interface QuizContextProps {
  children: ReactNode;
}

export const QuizContext = createContext<[QuizState, Dispatch<QuizAction>]>([
  initialState,
  () => null,
]);

export const QuizProvider: React.FC<QuizContextProps> = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
