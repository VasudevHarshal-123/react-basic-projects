import React, { Component } from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export class Todo extends Component {
    constructor() {
        super();
        this.state = {
            list:[]
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
    <div>
        <TodoInput updateList={this.updateList} />
        <TodoList list={this.state.list}/>
    </div>
    )
  }
}

export default Todo;
