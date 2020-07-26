import React from 'react';
import TodoListItem from './TodoListItem';
import Button from './Button';
import '../blocks/list/list.css';

const TodoList = ({ todos }) => {
  const elements = todos.map(({ id, ...item }) => {
    return (
      <li key={id} className="list-group-item list__item">
        <TodoListItem {...item} />
        <Button type="outline-danger" icon="trash" />
        <Button type="outline-success" icon="exclamation" />
      </li>
    );
  });

  return <ul className="list-group list">{elements}</ul>;
};

export default TodoList;
