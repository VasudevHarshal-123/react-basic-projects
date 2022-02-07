import React, { Component } from 'react';
import "./styles/TodoListCard.css";
import { CheckCircleTwoTone, StarTwoTone } from '@ant-design/icons';

export class TodoListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: props.done,
      text: props.text,
      starred: props.starred
    }
  }

  handleClickTick = () => {
    this.setState({done:!this.state.done});
  }

  handleClickStar = () => {
    this.setState({starred: !this.state.starred});
  }

  render() {
    let tick = "#cccccc", star = "#cccccc",strike="",dark="";
    if(this.state.done){
      tick = "#52c41a"; //green
      strike="todolist-text-strike"
    }
    if(this.props.isDarkMode) {
        dark="todo-card-text-dark "
    }
    if(this.state.starred)
      star = "#52c41a"
    return (
      <div className="todo-list-card-wrapper">
       
        <CheckCircleTwoTone style={{ fontSize: '30px'}} onClick={this.handleClickTick} twoToneColor={tick} />
       
        <p className={"todo-card-text "+ dark + strike}>{this.state.text}</p>
        
        
        <StarTwoTone style={{ fontSize: '30px'}} onClick={this.handleClickStar} twoToneColor={star} />
      
      
      </div>
    )
  }
}

export default TodoListCard;

// //twoToneColor="#" />