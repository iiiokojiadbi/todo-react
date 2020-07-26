import React, { Component } from 'react';
import classnames from 'classnames';
import Button from './Button';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  handleLabelClick = () => {
    this.setState({
      done: !this.state.done,
    });
  };

  handleImportantClick = () => {
    this.setState({
      important: !this.state.important,
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    const classes = classnames({
      list__label: true,
      list__label_done: done,
      list__label_important: important,
    });

    return (
      <React.Fragment>
        <span className={classes} onClick={this.handleLabelClick}>
          {label}
        </span>
        <Button type="outline-danger" icon="trash" />
        <Button
          type="outline-success"
          icon="exclamation"
          onBtnClick={this.handleImportantClick}
        />
      </React.Fragment>
    );
  }
}
