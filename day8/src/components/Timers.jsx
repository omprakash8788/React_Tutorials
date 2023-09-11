import React, { useRef } from "react";
import { useEffect ,useState } from "react";

const formatValue =(value)=>{
    return value<=9 ? `0 ${value}` : value;
}


// time formate function 
const formateTimeToString=(time)=>{

    const seconds= time % 60;

    const minutes = Math.floor(time /60) % 60;

    const hours = Math.floor(time /3600) % 60;
  return `${formatValue(hours)}:${formatValue(minutes)}:${formatValue(seconds)}`
}


const Timers = () => {

  const [count, setCount] = useState(3670);
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
  setCount(3600)
  }

  return (
    <div>
      <h1>{formateTimeToString(count)}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={restTimer}>Reset Timer</button>
    </div>
  );
};

export default Timers;
