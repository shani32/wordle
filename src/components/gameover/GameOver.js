import React, { useContext } from "react";
import { GlobalContext } from "../../App";

const GameOver = () => {
  const { isGameOver, correctGuess } = useContext(GlobalContext);
  return (
    <div className="gameover">
      <h2>
        {isGameOver.correctWord ? "You Are The Best" : "Need To Work On It"}
      </h2>
      <h3>The Right Word Was: {correctGuess}</h3>
    </div>
  );
};

export default GameOver;
