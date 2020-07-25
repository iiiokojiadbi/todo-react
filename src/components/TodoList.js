import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  
  const elements = todos.map(({ id, ...item }) => {
    return (
      <li key={ id }>
        <TodoListItem
          { ...item } />
      </li>
    )
  })
  
  return (
    <ul>
      { elements }
    </ul>
  )
}

export default TodoList;