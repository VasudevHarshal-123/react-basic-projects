import React from 'react';
import DiceCurrent from "./DiceCurrent";

function DiceGame() {
    const getHeading = () => {
        return <h1>Scarne's Dice</h1>
    }
  return (
  <div>
        {getHeading()}
        <DiceCurrent />
  </div>
  )
}

export default DiceGame;
