import React, { useState } from "react";
import Score from "./Score";

import {
  sumOfNumbers,
  chance,
  yahtzee,
  threeOfAKind,
  fourOfAKind,
  fullHouse,
  smStraight,
  lgStraight,
} from "../helpers";

const ScoreBoard = ({
  dice,
  setDice,
  setTotalScore,
  totalScore,
  setRollsLeft,
  setFrozenDice,
  setShowBtn,
  showBtn
}) => {
  const defaultScoreItems = [
    {
      name: "Ones",
      score: null,
      description: "Sum of all Ones",
    },
    {
      name: "Twos",
      score: null,
      description: "Sum of all Twos",
    },
    { name: "Threes", score: null, description: "Sum of all Threes" },
    { name: "Fours", score: null, description: "Sum of all Fours" },
    { name: "Fives", score: null, description: "Sum of all Fives" },
    { name: "Sixes", score: null, description: "Sum of all Sixes" },
    {
      name: "3 of a kind",
      score: null,
      description: "Sum of all dice if 3 are the same",
    },
    {
      name: "4 of a kind",
      score: null,
      description: "Sum of all dice if 4 are the same",
    },
    {
      name: "Small Straight",
      score: null,
      description: "30 points for a small straight",
    },
    {
      name: "Large Straight",
      score: null,
      description: "40 points for a large straight",
    },
    {
      name: "Full House",
      score: null,
      description: "25 points for a full house",
    },
    { name: "YAHTZEE", score: null, description: "50 points for yahtzee" },
    { name: "Chance", score: null, description: "Sum all dice" },
  ];

  const [scores, setScores] = useState(defaultScoreItems);
  const [round, setRound] = useState(1);
  
  const newGame = () => {
    setDice(Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1))
    setRound(1)
    setFrozenDice([])
    setRollsLeft(2)
    setTotalScore(0)
    setScores(defaultScoreItems)
  }

  const newRound = () => {
    setRound((prev) => prev + 1);
    setFrozenDice([]);
    setDice(Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1));
    setRollsLeft(2);
    if (round === 13) {
      for (var i in scores) {
        if (scores[i].score === null) {
          setShowBtn(true)
          setRollsLeft(0)
        }
      }
    }
  };

  const calcScore = (scoreName) => {
    let score = 0;
    switch (scoreName) {
      case "Ones":
        score = sumOfNumbers(dice, 1);
        setTotalScore((prev) => prev + score);
        newRound();
        break;
      case "Twos":
        score = sumOfNumbers(dice, 2);
        setTotalScore((prev) => prev + score);
        newRound();
        break;
      case "Threes":
        score = sumOfNumbers(dice, 3);
        setTotalScore((prev) => prev + score);
        newRound();
        break;
      case "Fours":
        score = sumOfNumbers(dice, 4);
        setTotalScore((prev) => prev + score);
        newRound();
        break;
      case "Fives":
        score = sumOfNumbers(dice, 5);
        setTotalScore((prev) => prev + score);
        newRound();
        break;
      case "Sixes":
        score = sumOfNumbers(dice, 6);
        setTotalScore((prev) => prev + score);
        newRound();
        break;
      case "Chance":
        score = chance(dice);
        setTotalScore((prev) => prev + score);
        newRound();
        break;
      case "YAHTZEE":
        score = yahtzee(dice);
        setTotalScore((prev) => prev + score);
        newRound();
        break;
      case "3 of a kind":
        score = threeOfAKind(dice);
        setTotalScore((prev) => prev + score);
        newRound();
        break;
      case "4 of a kind":
        score = fourOfAKind(dice);
        setTotalScore((prev) => prev + score);
        newRound();
        break;
      case "Full House":
        score = fullHouse(dice);
        setTotalScore((prev) => prev + score);
        newRound();
        break;
      case "Small Straight":
        score = smStraight(dice);
        setTotalScore((prev) => prev + score);
        newRound();
        break;
      case "Large Straight":
        score = lgStraight(dice);
        setTotalScore((prev) => prev + score);
        newRound();
        break;
      default:
        return 0;
    }

    const scoreIndex = scores.findIndex(
      (scoresItem) => scoresItem.name === scoreName
    );
    const newScores = scores.map((scoresItem, index) => {
      let newScore = { ...scoresItem };
      if (index === scoreIndex) {
        newScore.score = score;
      }
      return newScore;
    });
    setScores(newScores);
  };

  return (
    <div className="scoreBoard">
      <button hidden={showBtn === false} onClick={newGame} >New Game</button>
      <p>{totalScore}</p>
      {scores.map((item, i) => {
        return (
          <Score
            key={i}
            func={item.func}
            name={item.name}
            description={item.description}
            score={item.score}
            calcScore={calcScore}
          />
        );
      })}
    </div>
  );
};

export default ScoreBoard;
