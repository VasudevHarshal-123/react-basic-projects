import React, {useState} from 'react';
import DiceCurrent from "./DiceCurrent";
import DiceTotalScore from "./DiceTotalScore";

function DiceGame() {
    const [playerOneTotal, setPlayerOneTotal] = useState(0);
    const [playerTwoTotal, setPlayerTwoTotal] = useState(0);

    const getHeading = () => {
        return <h1>Scarne's Dice</h1>
    }
  return (
  <div>
        {getHeading()}
        <DiceCurrent playerOneTotal={playerOneTotal} setPlayerOneTotal={setPlayerOneTotal} playerTwoTotal={playerTwoTotal} setPlayerTwoTotal={setPlayerTwoTotal}/>
        <DiceTotalScore playerOneTotal={playerOneTotal} playerTwoTotal={playerTwoTotal} />
  </div>
  )
}

export default DiceGame;
