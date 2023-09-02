import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Timers = () => {
    const [count, setCount]= useState(10)

    useEffect(()=>{
        setInterval(()=>{
          console.log(Date.now());
        setCount(count-1)
        },1000)

    },[])
  return (
    <div>
        <h1>Time:{count}</h1>

    </div>
  )
}

export default Timers