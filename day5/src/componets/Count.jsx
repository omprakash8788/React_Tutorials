import React from 'react'
import { useEffect, useState } from 'react';

const Count = () => {
    const [count, setCount]=useState(0)
    console.log('1');
  
  useEffect(()=>{
    console.log('2');
  })
  console.log('3');
  return (
    <div>
        <h1>Count:{count}</h1>
     <button onClick={()=>setCount(count+1)}>INCREMENT COUNT</button>
    </div>
  )
}

export default Count