import React, { Component } from 'react';
import "./styles/TodoListCard.css";
import { CheckCircleTwoTone, StarTwoTone } from '@ant-design/icons';

export class TodoListCard extends Component {
    constructor() {
        super();
        
    }
  render() {
    return (
    <div className="todo-card-wrapper">
        <CheckCircleTwoTone twoToneColor="#52c41a" />
        <p>{this.props.text}</p>
        <StarTwoTone twoToneColor="#52c41a"/>
    </div>
    )
  }
}

export default TodoListCard;
