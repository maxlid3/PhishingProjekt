import type { NextPage } from "next";
import GameManager from "@components/game/GameManager";
import Header from "@components/layout/Header";
import Menu from "@components/game/PopOut";

import React from "react";
import Quiz from "../components/phishgame/Quiz";
import { QuizProvider } from "../components/phishgame/contexts/quiz";

const Page: NextPage = () => {
  return (
    <div className="bg-slate-600 min-h-screen min-w-screen">
      <React.StrictMode>
        <div className="flex flex-row justify-around">
          <div className="absolute left-32 top-1/3">
            <Header />
          </div>
          <div className="flex items-start justify-center self-center min-w-[800px]">
            <GameManager />
          </div>
        </div>
      </React.StrictMode>
    </div>
  );
};

export default Page;
