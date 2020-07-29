import React, { Component } from 'react';
import Button from './Button';

export default class StatusFilter extends Component {
  buttons = [
    { text: 'All', type: 'outline-dark' },
    { text: 'Active', type: 'outline-dark' },
    { text: 'Done', type: 'outline-dark' },
  ];

  render() {
    const { statusFilter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ text, type }) => {
      const isActive = statusFilter === text;

      return (
        <Button
          key={text}
          text={text}
          type={type}
          isActive={isActive}
          handleClick={() => onFilterChange(text)}
        />
      );
    });

    return (
      <div className="btn-group" role="group">
        {buttons}
      </div>
    );
  }
}
