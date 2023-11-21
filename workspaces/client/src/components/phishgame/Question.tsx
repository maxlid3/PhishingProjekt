import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "./contexts/quiz";

interface QuestionProps {
  imagePath: string;
}

const Question: React.FC<QuestionProps> = ({ imagePath }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  console.log("Current ImagePath:", currentQuestion.imagePath);

  return (
    <div>
      <div className="flex justify-center">
        <img src={imagePath} alt="Question" />
      </div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
