import React, { Component } from 'react';
import classnames from 'classnames';
import Button from './Button';

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done,
    } = this.props;

    const classes = classnames({
      list__label: true,
      list__label_done: done,
      list__label_important: important,
    });

    return (
      <React.Fragment>
        <span className={classes} onClick={onToggleDone}>
          {label}
        </span>
        <Button type="outline-danger" icon="trash" handleClick={onDeleted} />
        <Button
          type="outline-success"
          icon="exclamation"
          handleClick={onToggleImportant}
        />
      </React.Fragment>
    );
  }
}
