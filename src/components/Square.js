import React, {useState} from 'react'

function Square(props) {
  const [isFlagged, setIsFlagged] = useState(false);
  const handleRightClick = (e) =>{
    e.preventDefault();
    if(props.flagsCount===0 && !isFlagged){
      alert("No more flags left!")
      return;
    }
    isFlagged ? props.incrementFlagsCount() : props.decrementFlagsCount();
    setIsFlagged(!isFlagged);
  }
  const handleClick = (e) => {
    if(isFlagged) return;
    props.onSquareClick(props.placement.row,props.placement.col,props.isMine);

  };
  return (
      <>
      <div className='square'
       onContextMenu={handleRightClick}
      onClick={handleClick}>
        {isFlagged &&  "🚩"} {props.value} </div>
      </>
  )
}

export default Square