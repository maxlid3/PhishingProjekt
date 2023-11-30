import type { NextPage } from "next";
import React from "react";
import { QuizProvider } from "@components/phishgame/contexts/quiz";
import Quiz from "@components/phishgame/Quiz";

const Page: NextPage = () => {
  return (
    <div className="bg-slate-600 min-h-screen min-w-screen">
      <React.StrictMode>
        <div className="flex items-start justify-center self-center min-w-[800px]">
          <div>
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
