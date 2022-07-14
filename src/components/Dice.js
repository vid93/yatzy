import React, { useEffect, useState } from "react";

import dice1 from "../images/dice/dice-six-faces-one.png";
import dice2 from "../images/dice/dice-six-faces-two.png";
import dice3 from "../images/dice/dice-six-faces-three.png";
import dice4 from "../images/dice/dice-six-faces-four.png";
import dice5 from "../images/dice/dice-six-faces-five.png";
import dice6 from "../images/dice/dice-six-faces-six.png";

import fDice1 from "../images/frozenDice/inverted-dice-1.png";
import fDice2 from "../images/frozenDice/inverted-dice-2.png";
import fDice3 from "../images/frozenDice/inverted-dice-3.png";
import fDice4 from "../images/frozenDice/inverted-dice-4.png";
import fDice5 from "../images/frozenDice/inverted-dice-5.png";
import fDice6 from "../images/frozenDice/inverted-dice-6.png";

const Dice = ({ value, setFrozenDice, index, frozenDice, round }) => {
  const [frozen, setFrozen] = useState(false)
  const [diceImg, setDiceImg] = useState(null);

  const diceImgs = [dice1, dice2, dice3, dice4, dice5, dice6];
  const fDiceImgs = [fDice1, fDice2, fDice3, fDice4, fDice5, fDice6];
  
  
  useEffect(() => {
    if(frozen === false){
      setDiceImg(diceImgs[value - 1])
    }else{
      setDiceImg(fDiceImgs[value - 1])
    }
  });

    const freeze = () => {
      if (frozenDice.includes(index)) {
        setFrozenDice(frozenDice.filter((i) => i !== index));
      } else {
        setFrozenDice([...frozenDice, index]);
      }
    };
    
  return (
    <div className="dice" onClick={freeze}>
      <img src={diceImg} alt="dice" onClick={() => setFrozen(!frozen)} />
    </div>
  );
};

export default Dice;
