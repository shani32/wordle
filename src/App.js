import { createContext, useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board/Board";
import GameOver from "./components/gameover/GameOver";
import Keyboard from "./components/keyboard/Keyboard";
import { matrix, generateWord } from "./matrix";

export const GlobalContext = createContext();

function App() {
  const [board, setBoard] = useState(matrix);
  const [currentIdxAttempt, setCurrentIdxAttempt] = useState({
    letterIdx: 0,
    attemptValue: 0,
  });
  const [wordsBank, setWordsBank] = useState(new Set());
  const [disableLetters, setDisablLetters] = useState([]);
  const [isGameOver, setIsGameOver] = useState({
    gameOver: false,
    correctWord: false,
  });
  const [correctGuess, setCorrectGuess] = useState("");
  // const correctGuess = "shoes";

  useEffect(() => {
    generateWord().then((words) => {
      setWordsBank(words.newWordSet);
      setCorrectGuess(words.randomWord);
    });
  }, []);
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
    let guessedWord = "";
    for (let i = 0; i < 5; i++) {
      guessedWord += board[currentIdxAttempt.attemptValue][i].toLowerCase();
    }
    if (wordsBank.has(guessedWord)) {
      // if (true) {
      setCurrentIdxAttempt({
        attemptValue: currentIdxAttempt.attemptValue + 1,
        letterIdx: 0,
      });
    } else {
      alert("IS THIS A WORD? TRY ANOTHER GUESS");
    }
    if (guessedWord.toUpperCase() === correctGuess.toUpperCase()) {
      setIsGameOver({ gameOver: true, correctWord: true });
      return;
    }
    if (currentIdxAttempt.attemptValue > 3) {
      setIsGameOver({ gameOver: true, correctWord: false });
      return;
    }
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
          disableLetters,
          setDisablLetters,
          isGameOver,
          setIsGameOver,
        }}
      >
        <div className="container">
          <Board />
          {isGameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
