import './App.css';
import {useState} from "react";
function App() {
  const [amount, setAmount]=useState(0)

 const handleDeposite=()=>{
  setAmount(amount+100);
  setAmount(amount+100);
  setAmount(amount+100);
  setAmount(amount+100);

  console.log(`Amount is ${amount}`);
}

  return (
    <div className="App">
    <h1>Current Amount: {amount}</h1>
    <button onClick={handleDeposite}>Deposite 100</button>
    </div>
  );
}

export default App;
