import React, { Component } from 'react';
import "./styles/TodoInput.css";

export class TodoInput extends Component {
    constructor() {
        super();
        this.state = { currentText: "" }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ currentText: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.currentText.length)
            return;
        this.setState({ currentText: ""})
        this.props.updateList(this.state.currentText);
    }

    getInputForm = () => {
        return (
            <div className='todo-input-form-wrapper'>
                <form className='todo-input-form' onSubmit={this.handleSubmit}>
                    <input placeholder='Enter task' onChange={this.handleChange} type="text" value={this.state.currentText} />
                    <button>Add</button>
                </form>
            </div>
        )
    }

    render() {
        return (
            <div className="todo-input-wrapper">
                {this.getInputForm()}
            </div>
        )
    }
}

export default TodoInput;
