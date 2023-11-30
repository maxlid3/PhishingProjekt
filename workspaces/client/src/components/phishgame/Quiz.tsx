import { useContext, useState, useEffect } from "react";
import Question from "./Question";
import { QuizContext } from "./contexts/quiz";
import Timer from "./Timer";
import Header from "@components/layout/Header";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [timer, setTimer] = useState(new Timer(10000));
  const [remainingTime, setRemainingTime] = useState<number | null>(
    timer.getTimeRemaining()
  );
  const timerduration = 10000;

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const imagePath = currentQuestion.imagePath;

  console.log("Current ImagePath:", currentQuestion.imagePath);

  const resetQuiz = () => {
    dispatch({ type: "RESTART" }); // Quiz zurücksetzen
    setTimer(new Timer(timerduration)); // Timer zurücksetzen
    setRemainingTime(10); // Verbleibende Zeit auf Startwert setzen
    dispatch({
      type: "UPDATE_LEADERBOARD",
      payload: {
        playerName: "Player Name",
        score: quizState.correctAnswersCount,
      },
    });
  };

  const startGame = () => {
    dispatch({ type: "START_GAME" });
    setTimer(new Timer(timerduration)); // Timer beim Start des Spiels zurücksetzen
    setRemainingTime(10); // Setzen Sie die verbleibende Zeit auf den gewünschten Startwert (in Sekunden)
    startTimer();
  };
  const startTimer = () => {
    console.log("Timer started");
    timer.start();

    const intervalId = setInterval(() => {
      const time = timer.getTimeRemaining();

      if (time !== null) {
        const seconds = time / 1000; // Umrechnung von Millisekunden in Sekunden
        if (seconds !== remainingTime) {
          setRemainingTime(seconds);
          console.log("Time remaining: " + seconds);
        }

        if (seconds <= 0) {
          clearInterval(intervalId);
          dispatch({ type: "NEXT_QUESTION" });
          setRemainingTime(timerduration / 1000);
          timer.resetTimer();
          setRemainingTime(timerduration / 1000);
          startTimer();
        }
      } else {
        clearInterval(intervalId);
        // Hier können Sie zusätzlichen Code ausführen, wenn die Zeit null ist
      }
    }, 1000);
  };

  useEffect(() => {
    // Diese useEffect-Hook wird bei Änderungen an quizState.gameStarted aufgerufen
    if (quizState.gameStarted) {
      setRemainingTime(10); // Setzen Sie die verbleibende Zeit auf den gewünschten Startwert (in Sekunden)
      startTimer();
    }
  }, [quizState.gameStarted]);

  useEffect(() => {
    console.log("Quiz component rendered");

    return () => {
      timer.stop();
      console.log("Quiz component unmounted");
    };
  }, [timer]);

  useEffect(() => {
    // Diese useEffect-Hook wird bei Änderungen an quizState.showResults aufgerufen
    if (quizState.showResults) {
      // Wenn das Quiz beendet ist, Timer stoppen und zurücksetzen
      timer.stop();
      setRemainingTime(null);
    }
  }, [quizState.showResults, timer]);

  // ... (vorheriger Code)

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCount} of&nbsp;
              {quizState.questions.length} right.
            </div>
          </div>
          <div>
            {/* Display leaderboard */}
            <div className="leaderboard">
              <div></div>
              {quizState.leaderboard.map((entry, index) => (
                <div key={index}>
                  {index + 1}. {entry.playerName}: {entry.score}
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => {
              dispatch({ type: "RESTART" });
              resetQuiz();
            }}
            className="next-button"
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && quizState.gameStarted && (
        <div>
          <div className="score">
            <Question imagePath={imagePath} />
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          {quizState.currentAnswer && (
            <div
              onClick={() => {
                dispatch({ type: "NEXT_QUESTION" });
                setRemainingTime(timerduration / 1000);
                timer.resetTimer();
                setRemainingTime(timerduration / 1000);
                startTimer();
              }}
              className="next-button"
            >
              Next question
            </div>
          )}
          {quizState.gameStarted && (
            <div className="timer">
              Time remaining:{" "}
              {remainingTime !== null ? Math.ceil(remainingTime) : 0} seconds
            </div>
          )}
        </div>
      )}
      {!quizState.showResults && !quizState.gameStarted && (
        <div>
          <Header />
          <div onClick={startGame} className="start-button">
            Start Game
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
