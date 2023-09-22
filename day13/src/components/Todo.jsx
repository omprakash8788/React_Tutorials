import React, { useReducer} from "react";
import TodoInput from "./TodoInput";

const todoReducerFn = (state, { type, payload }) => {
  switch (type) {
    case "ADD": {
      state = [
        ...state,
        { id: Date.now(), value: payload, isCompleted: false },
      ];
      return state;
    }
    case "TOGGLE": {
        console.log(payload, state);
      const newState1 = state.map((todo) => {
        if (todo.id === payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
        
      });
      return newState1;
    }
    case "DELETE": {
      const newState = state.filter((todo) => todo.id !== payload);
      return newState;
    }
    default: {
      return state;
    }
  }
};

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducerFn, []);

  //   const handleAdd = (val) => {
  //     setTodos([...todos, { id: Date.now(), val, isCompleted: false }]);
  //   };

  //   const toggleStatus = (id) => {
  //     setTodos(
  //       todos.map((todo) => {
  //         if (todo.id === id) {
  //             todo.isCompleted = !todo.isCompleted;
  //         }
  //         return todo;
  //       })
  //     );
  //   };

  //   const handleDelete=(id)=>{
  //     setTodos(
  //        todos.filter((todo)=>todo.id !==id)
  //       );
  //   }
  return (
    <div style={{ maxWidth: "200px", margin: "auto" }}>
      <h1>Todo</h1>
      <TodoInput
        handleAdd={(value) => dispatch({ type: "ADD", payload: value })}
      />
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{ display: "grid", gridTemplateColumns: "1fr 60px 60px" }}
        >
          <span
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.value}
          </span>
          <button
            onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
          >
            Toggle Status
          </button>
          <button
            onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
