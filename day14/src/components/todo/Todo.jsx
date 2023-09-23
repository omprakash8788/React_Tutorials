
import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import axios from 'axios'
import TodoItem from './TodoItem'


const getTodo=()=>{
    return axios.get(`http://localhost:3001/todos`)
}




const Todo = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
      getTodo()
    //   .then((res)=>console.log(res.data))
      .then((res)=>setData(res.data))

    },[])

  return (
    <div>
        <h1>Todos</h1>
        <AddTodo/>
        {
            data.map((todo)=>(<TodoItem key={todo.id} {...todo}/>))
        }
    </div>
  )
}

export default Todo