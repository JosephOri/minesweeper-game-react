import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import GameModeForm from './GameModeForm';
import Square from "./Square";




function App() {
  const createShuffledMines = (mineShuffle, rows, cols, mines) => {
    for (let i = 0; i < mines; i++) {
      mineShuffle.push(99);
    }
    for (let i = 0; i < rows * cols - mines; i++) {
      mineShuffle.push(0);
    }
    for (let i = mineShuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mineShuffle[i], mineShuffle[j]] = [mineShuffle[j], mineShuffle[i]];
    }
    console.log(mineShuffle)
  };
  
  //game board
  const [gameBoard,setGameBoard] = useState([[]])
  const gameModeLogic = (gameMode) =>{
    // eslint-disable-next-line default-case
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
    const mineShuffle = [];
    createShuffledMines(mineShuffle,rows,cols,mines);
    setGameBoard([[]])
    for (let i = 0; i < rows; i++) {
      const row = [];
        for (let j = 0; j < cols; j++) {
          row.push(<Square value={mineShuffle.pop()}/> );
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