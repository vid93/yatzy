import React from "react";
import Dice from "./Dice";

const DiceHolder = ({
  setDice,
  frozenDice,
  setFrozenDice,
  newDice,
  rollsLeft,
  setRollsLeft,
}) => {
  const reRoll = () => {
    newDice.forEach((die, i) => {
      if (!frozenDice.includes(i)) {
        newDice[i] = Math.floor(Math.random() * 6) + 1;
      }
      setDice(newDice);
    });
    setRollsLeft((prev) => prev - 1);
  };

  return (
    <div className="dice-wrapper">
      {newDice.map((dice, i) => {
        return (
          <Dice
            key={i}
            value={dice}
            index={i}
            setFrozenDice={setFrozenDice}
            frozenDice={frozenDice}
          />
        );
      })}
      <button disabled={rollsLeft < 1 ? true : false} onClick={reRoll}>
        You have {rollsLeft} rolls left
      </button>
    </div>
  );
};

export default DiceHolder;
