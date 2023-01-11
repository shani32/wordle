import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import { matrix } from "../../matrix";
import "./gameOver.css";

const GameOver = () => {
  const {
    isGameOver,
    correctGuess,
    setBoard,
    setCurrentIdxAttempt,
    currentIdxAttempt,
  } = useContext(GlobalContext);

  const newGame = () => {
    window.location.reload();
  };
  return (
    <div className="gameover">
      <h2>
        {isGameOver.correctWord ? "You Are The Best" : "Need To Work On It"}
      </h2>
      <h3>
        The Right Word Was: <span>{correctGuess}</span>
      </h3>
      <button className="button" onClick={newGame}>
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
