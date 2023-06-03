import React, {useState} from "react";
import GameBoard from "./GameBoard";

const RestartButton=({restart})=>{
    return (
        <>
        <button onClick={restart}>Restart</button>
        </>
    )

}

const Game = ()=> {
    const [gameOver, setGameOver] = useState(false);
    const restart = () =>{
        setGameOver(false);
    }
    const endGame = () =>{
        alert("Game Over");
        setGameOver(true);
    }

        return (
            <>
                <h1>Minesweeper game</h1>
                {gameOver? <RestartButton restart={restart}/>:<GameBoard endGame={endGame}/>}
                <button onClick={endGame}>Game Over</button>
            </>
        );
};
export default Game;

