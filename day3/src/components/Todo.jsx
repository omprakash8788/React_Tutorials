import React from "react";
import { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todolist, setTodoList] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    //    console.log("button work");
    const newItem = {
      title: text,
      status: false,
    };

    const todoItems=[...todolist, newItem]
    setTodoList(todoItems)
  };
  return (
    <div>
    <div>
      <input
        placeholder="Add a new todo"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
    <div>
        {
        todolist.map((todo)=>(
            <div>{todo.title}</div>
        ))
        }
    </div>
    </div>
  );
};

export default Todo;
