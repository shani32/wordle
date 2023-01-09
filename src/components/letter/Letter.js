import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import "./letter.css";

const Letter = ({ letterIdx, attemptValue }) => {
  const { board, setBoard } = useContext(GlobalContext);
  const letter = board[attemptValue][letterIdx];
  return <div className="letter">{letter}</div>;
};

export default Letter;
