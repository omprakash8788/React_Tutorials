import React from "react";
import { useEffect ,useState } from "react";

const Timers = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount<=1) {
          clearInterval(intervalID);
          return 0;
        }

        return prevCount - 1;
      });
    }, 1000);

    // cleanup function 
    const cleanupFunc=()=>{
      clearInterval(intervalID)
    }
    return cleanupFunc;
  }, []);


  return (
    <div>
      <h1>Time:{count}</h1>
    </div>
  );
};

export default Timers;
