import { useState } from 'react';
import './App.css';
import Timers from './components/Timers';
import Chatapp from './components/Chatapp';

function App() {
  const [showTimer, setShowTimer]=useState(true)
  return (
    <div className="App">
 {showTimer && <Timers/>}
 <button onClick={()=>setShowTimer(!showTimer)}>Toggle Timer</button>
 <Chatapp/>
    </div>
  );
}

export default App;
