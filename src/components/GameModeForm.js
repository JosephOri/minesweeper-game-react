import React,{useState} from 'react'

const GameModeForm = (props) => {
    const [gameMode,changeGameMode] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.gameModeLogic(gameMode);
      }
      const handleChange = e=>{
        changeGameMode(e.target.value)
      }
  return (
    <form onSubmit={handleSubmit}>
    <label form="game-mode">Choose game mode</label>
    <select id="game-mode" name="game-mode" onChange={handleChange}>
        <option value="none"></option>
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
        <option value="expert">expert</option>
    </select>
    <input type="submit"/>
  </form>  )
}

export default GameModeForm