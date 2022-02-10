import React, { useState } from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./styles/Todo.css";

function Todo() {
    const [list, setList] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const updateList = (text) => {
        let newObj = {
            done: false,
            text: text,
            starred: false
        }
        setList([...list,newObj]);
        setIsDarkMode(false);
    }

    const enableDarkMode = () =>{
        setIsDarkMode(!isDarkMode);
    }

    const getDarkMode = () =>{
        return <div className='todo-dark' onClick={enableDarkMode}>
            Dark Mode
        </div>
    }

    const getChildComponents = () => {
        return (
            <div className='todo-child-components-wrapper'>
                <TodoList isDarkMode={isDarkMode} list={list} />
                {getDarkMode()}
                <TodoInput updateList={updateList} />
            </div>
        )
    }

        return (
            <div className="todo-container">
                <h1>Todo App:</h1>
                {getChildComponents()}
            </div>
        )
}

export default Todo;
