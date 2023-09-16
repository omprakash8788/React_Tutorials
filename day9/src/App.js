import { useContext } from "react";
import "./App.css";
import Main from "./components/Main";
// import AppContext from './components/AppContaxtProvider';
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContaxtProvider";
import Button from "./components/Button";

function App() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div
      className="App"
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <Navbar />
      <Main />
      {/* <button onClick={toggleTheme}>Change Theme</button> */}
      <Button onClick={toggleTheme} btnText="Change theme"/>
    </div>
  );
}

export default App;
