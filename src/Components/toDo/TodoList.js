import React, { Component } from 'react';
import TodoListCard from "./TodoListCard";
import "./styles/TodoList.css";

function TodoList(props){
    let darkBackg = "";
    if(props.isDarkMode) {
      darkBackg="todo-list-wrapper-dark";
    }
    return (
    <div className={"todo-list-wrapper "+ darkBackg}>
        {
            props.list.map((element,index)=><TodoListCard isDarkMode={props.isDarkMode} key={index} text={element.text} done={element.done} starred={element.starred}/>)
        }
    </div>
    )
  }

export default TodoList;
