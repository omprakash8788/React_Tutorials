
import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import { getTodo } from './api'
// import {getTodo} from '../api'

// const getTodo=()=>{
//     return axios.get(`http://localhost:3001/todos`)
// }




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