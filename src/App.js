import { createContext, useState } from "react";
import "./App.css";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import { matrix, generateWord } from "./matrix";

export const GlobalContext = createContext();

function App() {
  const [board, setBoard] = useState(matrix);
  const [currentIdxAttempt, setCurrentIdxAttempt] = useState({
    letterIdx: 0,
    attemptValue: 0,
  });
  const correctGuess = "SHOES";
  const deleteLetter = () => {
    if (currentIdxAttempt.letterIdx === 0) return;
    const newBoard = [...board];
    newBoard[currentIdxAttempt.attemptValue][currentIdxAttempt.letterIdx - 1] =
      "";
    setBoard(newBoard);
    setCurrentIdxAttempt({
      ...currentIdxAttempt,
      letterIdx: currentIdxAttempt.letterIdx - 1,
    });
  };
  const enterLetter = () => {
    if (currentIdxAttempt.letterIdx !== 5) return;
    setCurrentIdxAttempt({
      attemptValue: currentIdxAttempt.attemptValue + 1,
      letterIdx: 0,
    });
  };
  const selectLetter = (val) => {
    if (currentIdxAttempt.letterIdx > 4) return;
    const newBoard = [...board];
    newBoard[currentIdxAttempt.attemptValue][currentIdxAttempt.letterIdx] = val;
    setBoard(newBoard);
    setCurrentIdxAttempt({
      ...currentIdxAttempt,
      letterIdx: currentIdxAttempt.letterIdx + 1,
    });
  };
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <GlobalContext.Provider
        value={{
          board,
          setBoard,
          currentIdxAttempt,
          setCurrentIdxAttempt,
          enterLetter,
          selectLetter,
          deleteLetter,
          correctGuess,
        }}
      >
        <Board />
        <Keyboard />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
