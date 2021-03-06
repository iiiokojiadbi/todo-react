import React, { Component } from 'react';
import SearchPanel from './SearchPanel';
import AddPanel from './AddPanel';
import AppHeader from './AppHeader';
import TodoList from './TodoList';
import './../blocks/page/page.css';
import './../blocks/app/app.css';

export default class App extends Component {
  maxId = 1000;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    newTodo: '',
    searchTodo: '',
    filterTodo: 'All',
  };

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  toggleProperty(arr, id, propName) {
    const [oldTodo] = arr.filter((todo) => todo.id === id);
    const newTodo = { ...oldTodo, [propName]: !oldTodo[propName] };
    const newTodoList = arr.map((todo) => (todo.id === id ? newTodo : todo));

    return newTodoList;
  }

  handleDeleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((elem) => elem.id !== id);

      return {
        todoData: newTodoData,
      };
    });
  };

  handleChangeInput = (value) => {
    this.setState({
      newTodo: value,
    });
  };

  handleAddItem = () => {
    const { newTodo } = this.state;
    if (newTodo === '') {
      return;
    }
    const todo = this.createTodoItem(newTodo);
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, todo],
        newTodo: '',
      };
    });
  };

  handleToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      };
    });
  };

  handleToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  };

  handleSearchInput = (value) => {
    this.setState({
      searchTodo: value,
    });
  };

  searchTodo(items, search) {
    if (search.length === 0) {
      return items;
    }

    return items.filter(
      (item) => item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
  }

  filterTodo(items, filter) {
    switch (filter) {
      case 'All':
        return items;
      case 'Active':
        return items.filter((item) => !item.done);
      case 'Done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  handleFilterChange = (status) => {
    this.setState({
      filterTodo: status,
    });
  };

  render() {
    const { todoData, newTodo, searchTodo, filterTodo } = this.state;
    const doneCount = todoData.filter((todo) => todo.done === true).length;
    const todoCount = todoData.length - doneCount;
    const visibleTodo = this.filterTodo(
      this.searchTodo(todoData, searchTodo),
      filterTodo
    );

    return (
      <div className="page">
        <div className="app">
          <AppHeader toDo={todoCount} done={doneCount} />
          <SearchPanel
            inputText={searchTodo}
            changeInput={this.handleSearchInput}
            statusFilter={filterTodo}
            onFilterChange={this.handleFilterChange}
          />
          <TodoList
            todos={visibleTodo}
            onDeleted={this.handleDeleteItem}
            onToggleImportant={this.handleToggleImportant}
            onToggleDone={this.handleToggleDone}
          />
          <AddPanel
            inputText={newTodo}
            changeInput={this.handleChangeInput}
            onAdd={this.handleAddItem}
          />
        </div>
      </div>
    );
  }
}
