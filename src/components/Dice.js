import React from 'react'

const Dice = ({value, setFrozenDice, index, frozenDice}) => {
  
  const freeze = () => {
    if(frozenDice.includes(index)){
      setFrozenDice(frozenDice.filter(i => i !== index))
    }else{
      setFrozenDice([...frozenDice, index])
    }
  }
  
  return (
    <div className='dice' onClick={freeze}>{value}</div>
  ) 
}

export default Dice;