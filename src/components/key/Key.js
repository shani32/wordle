import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import "./key.css";

const Key = ({ val, namedKey, disabled }) => {
  const {
    board,
    setBoard,
    currentIdxAttempt,
    setCurrentIdxAttempt,
    enterLetter,
    selectLetter,
    deleteLetter,
  } = useContext(GlobalContext);

  const getLetterSelected = () => {
    if (val === "ENTER") {
      enterLetter();
    } else if (val === "DELETE") {
      deleteLetter();
    } else {
      selectLetter(val);
    }
  };
  return (
    <div
      className="key"
      id={namedKey ? "namedKey" : disabled && "disabled"}
      onClick={getLetterSelected}
    >
      {val}
    </div>
  );
};

export default Key;
