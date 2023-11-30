import Image from "next/image";
import { AntiPhish_Logo512 } from "@icons/cards";
import Link from "next/link";
import { useContext } from "react";
import { QuizContext } from ".././phishgame/contexts/quiz";

const Header = () => {
  const [quizState] = useContext(QuizContext);

  const clearGame = () => {
    window.location.href = window.location.origin;
  };

  if (quizState.gameStarted) {
    // Wenn das Spiel gestartet ist, zeigen Sie das Logo nicht an.
    return null;
  }

  // Wenn das Spiel nicht gestartet ist, zeigen Sie das Logo an.
  return (
    <div className="logo-container">
      <Link href="/">
        <a onClick={clearGame}>
          <Image
            src={AntiPhish_Logo512}
            alt="AntiPhish Logo"
            width={300}
            height={300}
          />
        </a>
      </Link>
    </div>
  );
};

export default Header;
