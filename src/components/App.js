import React from "react";
import GameBoard from "./GameBoard";

const App = ()=> {

    return (
        <>
            <React.StrictMode>
            <h1>Minesweeper game</h1>
            <GameBoard />
            </React.StrictMode>
        </>
    );
}
export default App;