import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../App";
import "./letter.css";

const Letter = ({ letterIdx, attemptValue }) => {
  const {
    board,
    setBoard,
    correctGuess,
    currentIdxAttempt,
    disableLetters,
    setDisablLetters,
  } = useContext(GlobalContext);

  const letter = board[attemptValue][letterIdx];
  const correct = correctGuess.toUpperCase()[letterIdx] === letter;
  const inAccurate =
    !correct && letter !== "" && correctGuess.toUpperCase().includes(letter);
  const guessState =
    currentIdxAttempt.attemptValue > attemptValue &&
    (correct ? "correct" : inAccurate ? "inAccurate" : "wrong");

  useEffect(() => {
    if (letter !== "" && !correct && !inAccurate) {
      setDisablLetters((prev) => [...prev, letter]);
    }
  }, [currentIdxAttempt.attemptValue]);
  return (
    <div className="letter" id={guessState}>
      {letter}
    </div>
  );
};

export default Letter;
