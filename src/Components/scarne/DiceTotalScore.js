import React from 'react';

function DiceTotalScore(props) {
  return (
  <div>
      <h1>player one total : {props.playerOneTotal}</h1>
      <h1>player two total : {props.playerTwoTotal}</h1>
  </div>
  )
}

export default DiceTotalScore;
