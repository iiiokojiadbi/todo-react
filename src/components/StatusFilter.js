import React, { Component } from 'react';
import Button from './Button';

export default class StatusFilter extends Component {
  render() {
    return (
      <div className="btn-group" role="group">
        <Button text="All" type="outline-dark" isActive="active" />
        <Button text="Active" type="outline-dark" />
        <Button text="Done" type="outline-dark" />
      </div>
    );
  }
}
