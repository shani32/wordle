import "./App.css";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
