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
  return (
      <>
      <div className='square'
       onContextMenu={handleRightClick}>
        {isFlagged &&  "🚩"} {props.value} </div>
      </>
  )
}

export default Square