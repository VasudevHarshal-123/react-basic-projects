import React, { Component } from 'react';
import TodoListCard from "./TodoListCard";
import "./styles/TodoList.css";

export class TodoList extends Component {
  render() {
    let darkBackg = "";
    if(this.props.isDarkMode) {
      darkBackg="todo-list-wrapper-dark";
    }
    return (
    <div className={"todo-list-wrapper "+ darkBackg}>
        {
            this.props.list.map((element,index)=><TodoListCard isDarkMode={this.props.isDarkMode} key={index} text={element.text} done={element.done} starred={element.starred}/>)
        }
    </div>
    )
  }
}

export default TodoList;
