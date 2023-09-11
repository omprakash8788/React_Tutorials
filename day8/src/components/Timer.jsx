import React, { useRef } from "react";
import { useEffect ,useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(10);
  let intervalID=useRef(null);
  useEffect(() => {
    const cleanupFunc=()=>{
        stopTimer()
    }
    return cleanupFunc;
  }, []);

  const startTimer=()=>{
    if(intervalID.current!==null){
        return;
    }
     intervalID.current = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount<=1) {
            clearInterval(intervalID.current);
            return 0;
          }
  
          return prevCount - 1;
        });
      }, 1000);
  }

  const stopTimer=()=>{
    clearInterval(intervalID.current);
    intervalID.current = null;
  }
  const restTimer=()=>{
  stopTimer();
  setCount(10)
  }

  return (
    <div>
      <h1>Time:{count}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={restTimer}>Reset Timer</button>
    </div>
  );
};

export default Timer;
