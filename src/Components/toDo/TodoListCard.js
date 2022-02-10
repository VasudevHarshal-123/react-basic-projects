import React, { useState } from 'react';
import "./styles/TodoListCard.css";
import { CheckCircleTwoTone, StarTwoTone } from '@ant-design/icons';

function TodoListCard(props){
  const [done, setDone] = useState(props.done);
  const [text, setText] = useState(props.text);
  const [starred, setStarred] = useState(props.starred);
  

  const handleClickTick = () => {
    setDone(!done);
  }

  const handleClickStar = () => {
    setStarred(!starred);
  }

    let tick = "#cccccc", star = "#cccccc",strike="",dark="", iconFont="30px";
    if(done){
      tick = "#52c41a"; //green
      strike="todolist-text-strike"
    }
    if(window.innerWidth<661) {
      iconFont="20px";
    }
    if(props.isDarkMode) {
        dark="todo-card-text-dark "
    }
    if(starred)
      star = "#52c41a"
    return (
      <div className="todo-list-card-wrapper">
        <CheckCircleTwoTone style={{ fontSize:{iconFont}}} onClick={handleClickTick} twoToneColor={tick} />
        <p className={"todo-card-text "+ dark + strike}>{text}</p>        
        <StarTwoTone style={{ fontSize: {iconFont}}} onClick={handleClickStar} twoToneColor={star} />
      
      
      </div>
    )
}

export default TodoListCard;

// //twoToneColor="#" />