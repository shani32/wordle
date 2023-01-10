import React, { useCallback, useContext, useEffect } from "react";
import { GlobalContext } from "../../App";
import Key from "../key/Key";
import "./keyboard.css";

const Keyboard = () => {
  const line1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const line2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const line3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { selectLetter, deleteLetter, enterLetter, disableLetters } =
    useContext(GlobalContext);

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      enterLetter();
    } else if (event.key === "Backspace") {
      deleteLetter();
    } else {
      line1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          selectLetter(key);
        }
      });
      line2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          selectLetter(key);
        }
      });
      line3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          selectLetter(key);
        }
      });
    }
  });
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line-1">
        {line1.map((key) => {
          return <Key val={key} disabled={disableLetters.includes(key)} />;
        })}
      </div>
      <div className="line-2">
        {line2.map((key) => {
          return <Key val={key} disabled={disableLetters.includes(key)} />;
        })}
      </div>
      <div className="line-3">
        <Key val="ENTER" namedKey />
        {line3.map((key) => {
          return <Key val={key} disabled={disableLetters.includes(key)} />;
        })}
        <Key val="DELETE" namedKey />
      </div>
    </div>
  );
};

export default Keyboard;
