import React from 'react';
import TodoListItem from './TodoListItem';
import '../blocks/list/list.css';

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map(({ id, ...item }) => {
    return (
      <li key={id} className="list-group-item list__item">
        <TodoListItem {...item} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });

  return <ul className="list-group list">{elements}</ul>;
};

export default TodoList;
