##  ket to list-item

## useState


## useState example
import './App.css';
import {useState} from "react";
function App() {
  const [amount, setAmount]=useState(0)

 const handleDeposite=()=>{
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

day4.1 34.56


// callback exp

function greet(name, callbackFn){
  const greetingWord="Hello"
  console.log(callbackFn(greetingWord)+ " " + name )
}
function sayHello(someWord){
  return someWord;
}
greet("Students", sayHello)


1:24:00