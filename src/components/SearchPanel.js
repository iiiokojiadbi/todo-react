import React, { Component } from 'react';
import Input from './Input';
import StatusFilter from './StatusFilter';
import './../blocks/panel/panel.css';

export default class SearchPanel extends Component {
  render() {
    const { inputText, changeInput, statusFilter, onFilterChange } = this.props;

    return (
      <div className="panel">
        <Input
          searchText="Type to search"
          inputText={inputText}
          changeInput={changeInput}
        />
        <StatusFilter
          statusFilter={statusFilter}
          onFilterChange={onFilterChange}
        />
      </div>
    );
  }
}
