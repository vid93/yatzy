import React, { useState } from "react";
import DiceHolder from "./DiceHolder";
import ScoreBoard from "./ScoreBoard";

const Game = () => {

  const [dice, setDice] = useState(Array.from({length: 5}, () => Math.floor(Math.random() * 6) + 1));
  const [frozenDice, setFrozenDice] = useState(() => []);
  const [totalScore, setTotalScore] = useState(0);
  const [rollsLeft, setRollsLeft] = useState(2);
  const [showBtn, setShowBtn] = useState(false)


  const newDice = [...dice];

  return (
    <div>
      <DiceHolder
        dice={dice}
        setDice={setDice}
        frozenDice={frozenDice}
        setFrozenDice={setFrozenDice}
        newDice={newDice}
        rollsLeft={rollsLeft}
        setRollsLeft={setRollsLeft}
      />
      <ScoreBoard
        dice={dice}
        setDice={setDice}
        totalScore={totalScore}
        setTotalScore={setTotalScore}
        setRollsLeft={setRollsLeft}
        setFrozenDice={setFrozenDice}
        showBtn={showBtn}
        setShowBtn={setShowBtn}
      />
    </div>
  );
};

export default Game;
