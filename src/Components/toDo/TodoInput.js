import React, { Component } from 'react';

export class TodoInput extends Component {
    constructor() {
        super();
        this.state = {
            currentText:""
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            currentText: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.currentText.length)
            return;
        this.props.updateList(this.state.currentText);
    }

  render() {
    return (
    <div>
        <form onSubmit={this.handleSubmit}>
            <label>Add to list</label>
            <input onChange={this.handleChange} type="text" value={this.state.currentText} />
            <button>Add</button>
        </form>
    </div>
    )
  }
}

export default TodoInput;
