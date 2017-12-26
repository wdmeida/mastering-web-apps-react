import React, { Component } from 'react';

class GoalItem extends Component {
  render() {
    const { email, title } = this.props.goal;
    return (
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <span> submitted by </span><em>{email}</em>
      </div>
    )
  }
}

export default GoalItem;