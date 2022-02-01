import React, { Component } from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./styles/Todo.css";

export class Todo extends Component {
    constructor() {
        super();
        this.state = {
            list:[] //array of objects
        }
    }

    updateList = (text) =>{
        let newObj = {
            done:false,
            text:text,
            starred:false
        }
        this.setState({
            list: [...this.state.list, newObj]
        })
    }

  render() {
    return (
    <div className="todo-container">
        <TodoList list={this.state.list}/>
        <TodoInput updateList={this.updateList} />
    </div>
    )
  }
}

export default Todo;
