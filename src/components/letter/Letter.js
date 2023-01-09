import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import "./letter.css";

const Letter = ({ letterIdx, attemptValue }) => {
  const { board, setBoard, correctGuess, currentIdxAttempt } =
    useContext(GlobalContext);

  const letter = board[attemptValue][letterIdx];
  const correct = correctGuess[letterIdx] === letter;
  const inAccurate = !correct && letter !== "" && correctGuess.includes(letter);
  const guessState =
    currentIdxAttempt.attemptValue > attemptValue &&
    (correct ? "correct" : inAccurate ? "inAccurate" : "wrong");
  return (
    <div className="letter" id={guessState}>
      {letter}
    </div>
  );
};

export default Letter;
