import React, { useRef } from 'react'

const Useref = () => {

    let count = useRef(0)

    const handleClick =()=>{
        count.current = count.current+1
    console.log(count);

    }
  return (
    <div>
        <h1>Count: {count.current}</h1>
        <button onClick={handleClick}>Btn with useref</button>
    </div>
  )
}

export default Useref