// import React, { useState } from 'react'
import { useContext, useReducer } from 'react';
import { AppContext } from '../context/AppContext';


// const reducerFn=(state, {type, payload=1})=>{
//   const {type, payload} = action;

//   if(action.type==="INC"){
//     return state+1;
//   }
//   else if(action.type==="DEC"){
//     return state-1;
//   }
//   else{
//     return state;
//   }

// switch(type){
//     // case "INC":{
//     //     return state + payload;
//     // }
//     // case "DEC":{
//     //     return state- payload;
//     // }
//     default:{
//         return state;
//     }
//  }
// }

const Counter = () => {
    // const [count, setCount]=useState(0)
    const [{count}, dispatch] = useContext(AppContext);
  return (
    <div>
     <h3>Count:{count}</h3>
     <div>
        <span>By 1</span>
        <button onClick={()=>dispatch({type:"DEC"})}>DEC</button>
        <button onClick={()=>dispatch({type:"INC"})}>INC</button>

     </div>
     <div>
        <span>By 129</span>
        <button onClick={()=>dispatch({type:"DEC", payload:130})}>DEC</button>
        <button onClick={()=>dispatch({type:"INC", payload:130})}>INC</button>

     </div>
     
    </div>
  )
}

export default Counter