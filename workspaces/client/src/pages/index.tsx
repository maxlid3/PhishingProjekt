import type { NextPage } from "next";
import React from "react";
import { QuizProvider } from "@components/phishgame/contexts/quiz";
import Quiz from "@components/phishgame/Quiz";

const Page: NextPage = () => {
  return (
    <div>
      <React.StrictMode>
        <div>
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
