import { createContext, useState } from "react";
import "./App.css";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import { matrix } from "./matrix";

export const GlobalContext = createContext();

function App() {
  const [board, setBoard] = useState(matrix);
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <GlobalContext.Provider value={{ board, setBoard }}>
        <Board />
        <Keyboard />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
