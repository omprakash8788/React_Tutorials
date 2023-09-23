## day 13 

## Topic - useReducer


// React hooks
useState - use of useState, to create state variable and re-render dom when update using the set function.


useEffect - whenever the components is render / re-render , we can excute a function.


useRef



useContext



-------------- Counter app ------------------

import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount]=useState(0)
  return (
    <div>
     <h3>Count:{count}</h3>
     <div>
        <button onClick={()=>setCount(count-1)}>DEC</button>
        <button onClick={()=>setCount(count+1)}>INC</button>

     </div>
    </div>
  )
}

export default Counter

---------------------------------------------



## using reducer creating counter app ##

import { useReducer } from 'react';


const reducerFn=(state, action)=>{
  const {type, payload} = action;

  if(action.type==="INC"){
    return state+1;
  }
  else if(action.type==="DEC"){
    return state-1;
  }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducerFn, 0);
  return (
    <div>
     <h3>Count:{count}</h3>
     <div>
        <span>By 1</span>
        <button onClick={()=>dispatch({type:"DEC"})}>DEC</button>
        <button onClick={()=>dispatch({type:"INC"})}>INC</button>

     </div>
     
    </div>
  )
}

export default Counter

------------------------------------------





