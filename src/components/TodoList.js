import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  
  const items = ['Learn React', 'Build Awesome App'];
  return (
    <ul>
      <li><TodoListItem label="Drink Cofee" /></li>
      <li><TodoListItem label="Build React App" important /></li>
    </ul>
  );
}

export default TodoList;