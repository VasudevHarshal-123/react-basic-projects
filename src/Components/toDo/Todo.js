import React, { Component } from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./styles/Todo.css";

export class Todo extends Component {
    constructor() {
        super();
        this.state = {
            list: [] //array of objects
        }
    }

    updateList = (text) => {
        let newObj = {
            done: false,
            text: text,
            starred: false
        }
        this.setState({
            list: [...this.state.list, newObj],
            isDarkMode: false
        })
    }

    enableDarkMode = () =>{
        this.setState({isDarkMode: !this.state.isDarkMode});
    }

    getDarkMode = () =>{
        return <div className='todo-dark' onClick={this.enableDarkMode}>
            Dark Mode
        </div>
    }

    getChildComponents = () => {
        return (
            <div className='todo-child-components-wrapper'>
                <TodoList isDarkMode={this.state.isDarkMode} list={this.state.list} />
                {this.getDarkMode()}
                <TodoInput updateList={this.updateList} />
            </div>
        )
    }

    render() {
        return (
            <div className="todo-container">
                <h1>Todo App:</h1>
                {this.getChildComponents()}
            </div>
        )
    }
}

export default Todo;
