import React from 'react';
import TodoListItem from './TodoListItem';
import '../blocks/list/list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(({ id, ...item }) => {
    return (
      <li key={id} className="list-group-item list__item">
        <TodoListItem
          {...item}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list-group list">{elements}</ul>;
};

export default TodoList;
