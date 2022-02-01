import React, { Component } from 'react';
import TodoListCard from "./TodoListCard";
import "./styles/TodoList.css";

export class TodoList extends Component {
  render() {
    return (
    <div className="todo-list-wrapper">
        {
            this.props.list.map((element,index)=><TodoListCard key={index} text={element.text} done={element.done} starred={element.starred}/>)
        }
    </div>
    )
  }
}

export default TodoList;
