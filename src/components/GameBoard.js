import React, {useState} from "react";
import Square from "./Square";
import GameModeForm from "./GameModeForm";

const GameBoard = ({endGame}) => {
    const [gameBoard,setGameBoard] = useState([[]])
    const [flagsCount, setFlagsCount] = useState(-1);
    const [matrixSize, setMatrixSize] = useState({rows:0,cols:0});

    const decrementFlagsCount = () =>{setFlagsCount(flagsCount-1)}
    const incrementFlagsCount = () =>{ setFlagsCount(flagsCount+1)}


    const gameModeLogic = (gameMode) =>{
        setGameBoard([[]]);
        setMatrixSize({rows:0,cols:0});
        switch(gameMode){
            case "none":
                break;
            case "beginner":
                setMatrixSize({rows:9,cols:9})
                createGameMatrix(9,9,10);
                break;
            case "intermediate":
                setMatrixSize({rows:16,cols:16})
                createGameMatrix(16,16,40)
                break;
            case "expert":
                setMatrixSize({rows:16,cols:30})
                createGameMatrix(16,30,99)
                break;
            default:
                break;
        }
    }
    const createGameMatrix = (rows,cols,mines) =>{
        setFlagsCount(mines);
        const mineShuffle = [];
        createShuffledMines(mineShuffle,rows,cols,mines);
        setGameBoard([[]])
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                row.push( mineShuffle.pop());
            }
            setGameBoard(prevState => [...prevState, row]);
        }
        console.log(gameBoard);

    }
    const createShuffledMines = (mineShuffle, rows, cols, mines) => {
        for (let i = 0; i < mines; i++) {
            mineShuffle.push(true);
        }
        for (let i = 0; i < rows * cols - mines; i++) {
            mineShuffle.push(false);
        }
        for (let i = mineShuffle.length - 1; i > 0; i--) {
            const randomCol = Math.floor(Math.random() * (i + 1));
            [mineShuffle[i], mineShuffle[randomCol]] = [mineShuffle[randomCol], mineShuffle[i]];
        }
    };
    const calculateValue = (row, col) => {
        if(gameBoard[row][col]) return -1;
        let count = 0;
        if (row > 0 && col > 0 && gameBoard[row - 1][col - 1]) count++;//top left
        if (row > 0 && gameBoard[row - 1][col]) count++;//top
        if (row > 0 && col <matrixSize.cols - 1 && gameBoard[row - 1][col + 1]) count++;//top right
        if (col > 0 && gameBoard[row][col - 1]) count++;//left
        if (col < matrixSize.cols - 1 && gameBoard[row][col + 1]) count++;//right
        if (row < matrixSize.rows  && col > 0 && gameBoard[row + 1][col - 1]) count++;//bottom left
        if (row < matrixSize.rows  && gameBoard[row + 1][col]) count++;//bottom
        if (row < matrixSize.rows  && col < matrixSize.cols - 1 && gameBoard[row + 1][col + 1]) count++;//bottom right
        return count;
    }
    const onSquareClick = (row, col,isMine) => {

    }

    return (
        <>
            <GameModeForm gameModeLogic={gameModeLogic}/>
            { flagsCount!==-1 &&  <p>Flags left: {flagsCount}</p>}
            {gameBoard.map((row, i) => {
                return (
                    <div key={i} className="row">
                        {row.map((col, j) => {
                            return <Square key={j}
                                           isMine={col}
                                           value={calculateValue(i, j)}
                                           placement={{row: i, col: j}}
                                           onSquareClick={onSquareClick}
                                           incrementFlagsCount={incrementFlagsCount}
                                           decrementFlagsCount={decrementFlagsCount}
                                           flagsCount={flagsCount}
                            />;
                        })}
                    </div>
                );
            })}
        </>
    )
}

export default GameBoard;