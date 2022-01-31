import React, { Component } from 'react';
import TodoListCard from "./TodoListCard";

export class TodoList extends Component {
  render() {
    return (
    <div>
        {
            this.props.list.map((element,index)=><TodoListCard key={index} text={element.text} done={element.done} starred={element.starred}/>)
        }
    </div>
    )
  }
}

export default TodoList;
