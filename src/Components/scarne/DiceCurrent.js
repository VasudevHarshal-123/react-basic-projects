import React, {useState} from 'react';

function DiceCurrent() {
    const [currentRoll, setCurrentRoll] = useState(0);
    const getCurrentRoll = () => {
        return(
            <h3>{currentRoll}</h3>
        )
    }

    const updateCurrentRoll = () => {
        let out = Math.round(Math.random()*10)%6;
        setCurrentRoll(out);
    }

    const getRollCTA = () =>{
        return <div onClick={updateCurrentRoll}>Roll</div>
    }
  return <div>
      {getRollCTA()}
      {getCurrentRoll()}
  </div>
}

export default DiceCurrent;
