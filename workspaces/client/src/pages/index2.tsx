import type { NextPage } from "next";
import GameManager from "@components/game/GameManager";
import Header from "@components/layout/Header";

const Page: NextPage = () => {
  return (
    <div className="container flex flex-row justify-center items-center">
      <div className="max-w-md mt-16">
        <Header />
        <GameManager />
      </div>
    </div>
  );
};

export default Page;
