import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import GameModeForm from './GameModeForm';
import Square from "./Square";


function App() {
  
  //game board
  const [gameBoard,setGameBoard] = useState([[]])
  const gameModeLogic = (gameMode) =>{
    switch(gameMode){
      case "none":
        break;
      case "beginner":
        createGameMatrix(9,9,10);
        break;
      case "intermediate":
        createGameMatrix(16,16,40)
        break;
      case "expert":
        createGameMatrix(16,30,99)
        break;
    }    
  }
  const createGameMatrix = (rows,cols,mines) =>{
    setGameBoard([[]])
    for (let i = 0; i < rows; i++) {
      const row = [];
        for (let j = 0; j < cols; j++) {
          row.push(<Square/>);
        }
        setGameBoard(gameBoard => [...gameBoard,
         <div className='row'>{row}</div>]);
    }
  }

return (
    <>
    <GameModeForm gameModeLogic={gameModeLogic}/>
    <h1>Minesweeper game</h1>
      <p>{gameBoard}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);