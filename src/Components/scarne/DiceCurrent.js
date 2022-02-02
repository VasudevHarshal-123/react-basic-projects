import React, { useState, useEffect } from 'react';
import dice1 from "../../Resources/Images/dic1.PNG";
import dice2 from "../../Resources/Images/dic2.PNG";
import dice3 from "../../Resources/Images/dic3.PNG";
import dice4 from "../../Resources/Images/dic4.PNG";
import dice5 from "../../Resources/Images/dic5.PNG";
import dice6 from "../../Resources/Images/dic6.PNG";


function DiceCurrent(props) {
    const [currentRoll, setCurrentRoll] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(true);

    useEffect(() => {
        updateCurrentScore();
    }, [currentRoll]);


    const getCurrentRoll = () => {
        return (
            <h3>{currentRoll}</h3>
        )
    }

    const updateCurrentScore = () => {
        if(currentRoll===1) {
           setCurrentScore(0);
           setCurrentPlayer(!currentPlayer);
        } else {
            setCurrentScore(currentScore + currentRoll);
        }
    }

    const updateCurrentRoll = () => {
        let out = 1+(Math.round(Math.random() * 10) % 6);
        setCurrentRoll(out);
    }

    const getRollCTA = () => {
        return <div onClick={updateCurrentRoll}>Roll</div>
    }

    const passTheDice = () => {
        let player = currentPlayer ? '1' : '2';
        if(currentPlayer){
            props.setPlayerOneTotal(props.playerOneTotal+currentScore);
            if(props.playerOneTotal+currentScore>=20) {
                props.setPlayerOneTotal(0);
                props.setPlayerTwoTotal(0);
                alert("Player "+player+ " Wins") 
            }
        }
        else{
             props.setPlayerTwoTotal(props.playerTwoTotal+currentScore);
             if(props.playerTwoTotal+currentScore>=20) {
                props.setPlayerOneTotal(0);
                props.setPlayerTwoTotal(0);
                alert("Player "+player+ "Wins") 
            }
            }
        setCurrentRoll(1);
    }

    const getPlayerTurn = () => {
        let player = currentPlayer ? '1' : '2';
        return <h2>Player {player}'s Turn:</h2>
    }

    const getPassCTA = () => {
        return <div onClick={passTheDice}>Pass</div>
    }

    const getCurrentScore = () =>{
        return <div>Current Score:{currentScore}</div>
    }

    return <div>
        {getPlayerTurn()}
        {getRollCTA()}
        {getCurrentRoll()}
        {getPassCTA()}
        {getCurrentScore()}
        <img src={["dice"+currentRoll]} />
    </div>
}

export default DiceCurrent;
