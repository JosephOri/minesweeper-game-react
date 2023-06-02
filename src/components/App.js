import React, {useState} from "react";
import Square from "./Square";
import GameModeForm from "./GameModeForm";
import GameBoard from "./GameBoard";

const App = ()=> {

    return (
        <>
            <h1>Minesweeper game</h1>
            <GameBoard />
        </>
    );
}
export default App;