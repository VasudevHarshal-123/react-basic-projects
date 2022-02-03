import React from 'react';
import "./styles/DiceTotalScore.css";

function DiceTotalScore(props) {
  return (
    <div className="dice-total-score-wrapper">
      <div className="dice-total-score-text-wrapper">
        <p>player one<br/>{props.playerOneTotal}</p>
      </div>
      <div className="dice-total-score-text-wrapper"><p>player two<br/>{props.playerTwoTotal}</p></div>
    </div>
  )
}

export default DiceTotalScore;
