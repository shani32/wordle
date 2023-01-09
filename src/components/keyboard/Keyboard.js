import React from "react";
import Key from "../key/Key";
import "./keyboard.css";

const Keyboard = () => {
  const line1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const line2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const line3 = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <div className="keyboard">
      <div className="line-1">
        {line1.map((key) => {
          return <Key val={key} />;
        })}
      </div>
      <div className="line-2">
        {line2.map((key) => {
          return <Key val={key} />;
        })}
      </div>
      <div className="line-3">
        {line3.map((key) => {
          return <Key val={key} />;
        })}
      </div>
    </div>
  );
};

export default Keyboard;
