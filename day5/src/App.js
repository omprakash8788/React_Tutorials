import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount]=useState(0)



  console.log('1');

useEffect(()=>{
  console.log('2');
})

console.log('3');


  return (
    <div className="App">
     <h1>Count:{count}</h1>
     <button onClick={()=>setCount(count+1)}>INC</button>
    </div>
  );
}

export default App;
