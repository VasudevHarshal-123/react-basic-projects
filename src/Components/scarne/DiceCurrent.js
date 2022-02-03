import React, { useState, useEffect } from 'react';
import dice1 from "../../Resources/Images/dic1.PNG";
import dice2 from "../../Resources/Images/dic2.PNG";
import dice3 from "../../Resources/Images/dic3.PNG";
import dice4 from "../../Resources/Images/dic4.PNG";
import dice5 from "../../Resources/Images/dic5.PNG";
import dice6 from "../../Resources/Images/dic6.PNG";
import "./styles/DiceCurrent.css";


function DiceCurrent(props) {
    const [currentRoll, setCurrentRoll] = useState(1);
    const [currentScore, setCurrentScore] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(false);

    useEffect(() => {
        updateCurrentScore();
    }, [currentRoll]);


    const getCurrentRoll = () => {
        let diceObj = {
            1: dice1,
            2: dice2,
            3: dice3,
            4: dice4,
            5: dice5,
            6: dice6,
        }
        if (currentRoll) {
            return (
                <img id="dice-current-dice-face" src={diceObj[currentRoll]} alt="dice" />
            )
        }
    }

    const updateCurrentScore = () => {
        if (currentRoll === 1) {
            setCurrentScore(0);
            setCurrentPlayer(!currentPlayer);
        } else {
            setCurrentScore(currentScore + currentRoll);
        }
    }

    //0-1 * 10 = 0-10 % 6 => (0-5) +1 = 1-6
    const updateCurrentRoll = () => {
        let out = 1 + (Math.round(Math.random() * 10) % 6);
        setCurrentRoll(out);
    }

    const getRollCTA = () => {
        return <div className="dice-current-btn dice-current-primary" onClick={updateCurrentRoll}>Roll</div>
    }

    const passTheDice = () => {
        let player = currentPlayer ? '1' : '2';
        if (currentPlayer) {
            props.setPlayerOneTotal(props.playerOneTotal + currentScore);
            if (props.playerOneTotal + currentScore >= 20) {
                props.setPlayerOneTotal(0);
                props.setPlayerTwoTotal(0);
                setCurrentPlayer(false);
                alert("Player " + player + " Wins");
            }
        }
        else {
            props.setPlayerTwoTotal(props.playerTwoTotal + currentScore);
            if (props.playerTwoTotal + currentScore >= 20) {
                props.setPlayerOneTotal(0);
                props.setPlayerTwoTotal(0);
                alert("Player " + player + " Wins")
            }
        }
        setCurrentRoll(1);
    }

    const getPlayerTurn = () => {
        let player = currentPlayer ? '1' : '2';
        return <h2 id="dice-current-player-turn">Player {player}'s Turn:</h2>
    }

    const getPassCTA = () => {
        return <div className="dice-current-btn" onClick={passTheDice}>Pass</div>
    }

    const getCurrentScore = () => {
        return <div className="dice-current-score">CURRENT SCORE : {currentScore}</div>
    }

    const getDiceCurrentCTAs = () =>{
        return (
            <div className="dice-current-CTAs-wrapper">
                {getRollCTA()}
                {getPassCTA()}
            </div>
        )
    }

    return <div className="dice-current-wrapper">
        {getPlayerTurn()}
        {getCurrentRoll()}
        {getDiceCurrentCTAs()}
        {getCurrentScore()}
        {/* <img src={["dice"+currentRoll]}  /> */}
    </div>
}

export default DiceCurrent;
