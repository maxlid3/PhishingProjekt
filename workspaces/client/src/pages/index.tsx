import type { NextPage } from "next";
import GameManager from "@components/game/GameManager";
import Header from "@components/layout/Header";
import Menu from "@components/game/PopOut";

import React from "react";
import ReactDOM from "react-dom";
import Quiz from "../components/phishgame/Quiz";
import { QuizProvider } from "../components/phishgame/contexts/quiz";

const Page: NextPage = () => {
  return (
    <div className="container bg-slate-600 min-h-[880px]">
      <React.StrictMode>
        <div className="flex flex-row justify-around">
          <div className="absolute right-[1200px] top-[200px]">
            <Header />
          </div>
          <div className="flex items-start justify-center self-center min-w-[800px]">
            <QuizProvider>
              <Quiz />
            </QuizProvider>
          </div>
        </div>
      </React.StrictMode>
    </div>
  );
};

export default Page;
