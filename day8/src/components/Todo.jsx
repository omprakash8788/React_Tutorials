import React, { useRef, useState } from 'react'

const Todo = () => {
    const [task, setTask]=useState("")
    const inputRef = useRef(null);

    const addTodo=()=>{
        setTask("")
       console.log(inputRef);
       inputRef.current.focus()
    }
  return (
    <div>
        <input 
        ref={inputRef}
        placeholder='Aad Todo'
        value={task}
        onClick={(e)=>setTask(e.target.value)}
        />
        <button onClick={addTodo}>ADD TODO</button>
    </div>
  )
}

export default Todo