interface AnswerProps {
    answerText: string;
    index: number;
    onSelectAnswer: (answer: string) => void;
    currentAnswer: string | null;
    correctAnswer: string;
  }
  
const Answer: React.FC<AnswerProps> = ({
    answerText,
    index,
    onSelectAnswer,
    currentAnswer,
    correctAnswer,
  }) => {
    const letterMapping = ["A", "B", "C", "D"];
    //TODO https://media.tenor.com/yBFx7v8GXSsAAAAd/joe-pesci-what-the-fuck.gif
    //TODO maybe ask chatGPT to go through, extract it in an enum and maybe write it in an function so you only have one variable that you update idk, just looks very fucked
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer =
      currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
    const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
    const disabledClass = currentAnswer ? "disabled-answer" : "";
    return (
      <div
        className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
        onClick={() => onSelectAnswer(answerText)}
      >
        <div className="answer-letter">{letterMapping[index]}</div>
        <div className="answer-text">{answerText}</div>
      </div>
    );
  };
  
  export default Answer;
  