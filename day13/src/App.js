import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import { AppContext } from "./context/AppContext";

function App() {
  return (
    <div className="App">
      <AppContext>
        <Counter />
        <Todo />
      </AppContext>
     </div>
  );
}

export default App;
