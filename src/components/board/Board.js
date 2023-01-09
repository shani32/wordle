import React, { useState } from "react";

import Letter from "../letter/Letter";
import "./board.css";

const Board = () => {
  return (
    <div className="board">
      <div className="row">
        <Letter letterIdx={0} attemptValue={0} />
        <Letter letterIdx={1} attemptValue={0} />
        <Letter letterIdx={2} attemptValue={0} />
        <Letter letterIdx={3} attemptValue={0} />
        <Letter letterIdx={4} attemptValue={0} />
      </div>
      <div className="row">
        <Letter letterIdx={0} attemptValue={1} />
        <Letter letterIdx={1} attemptValue={1} />
        <Letter letterIdx={2} attemptValue={1} />
        <Letter letterIdx={3} attemptValue={1} />
        <Letter letterIdx={4} attemptValue={1} />
      </div>
      <div className="row">
        <Letter letterIdx={0} attemptValue={2} />
        <Letter letterIdx={1} attemptValue={2} />
        <Letter letterIdx={2} attemptValue={2} />
        <Letter letterIdx={3} attemptValue={2} />
        <Letter letterIdx={4} attemptValue={2} />
      </div>
      <div className="row">
        <Letter letterIdx={0} attemptValue={3} />
        <Letter letterIdx={1} attemptValue={3} />
        <Letter letterIdx={2} attemptValue={3} />
        <Letter letterIdx={3} attemptValue={3} />
        <Letter letterIdx={4} attemptValue={3} />
      </div>
      <div className="row">
        <Letter letterIdx={0} attemptValue={4} />
        <Letter letterIdx={1} attemptValue={4} />
        <Letter letterIdx={2} attemptValue={4} />
        <Letter letterIdx={3} attemptValue={4} />
        <Letter letterIdx={4} attemptValue={4} />
      </div>
    </div>
  );
};

export default Board;
