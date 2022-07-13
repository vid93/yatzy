export const sumOfNumbers = (dice, number) => {
  let total = 0;
  for (var i = 0; i < dice.length; i++) {
    if (dice[i] === number) {
      total += dice[i];
    }
  }
  return total;
};

export const threeOfAKind = (dice) => {
  let total = 0;
  dice.sort();
  for (var i = 0; i < dice.length; i++) {
    if (dice[0] === dice[2] || dice[2] === dice[4]) total += dice[i];
  }
  return total;
};

export const fourOfAKind = (dice) => {
  let total = 0;
  dice.sort();
  for (var i = 0; i < dice.length; i++) {
    if (dice[0] === dice[3] || dice[1] === dice[4]) {
      total += dice[i];
    }
  }
  return total;
};

export const fullHouse = (dice) => {
  let total = 0;
  dice.sort();
  for (var i = 0; i < dice.length; i++) {
    if (
      (dice[0] === dice[1] && dice[2] === dice[3] && dice[3] === dice[4]) ||
      (dice[0] === dice[1] && dice[1] === dice[2] && dice[3] === dice[4])
    ) {
      total = 25;
    }
  }
  return total;
};

export const smStraight = (dice) => {
  let total = 0;
  let newDice = [...new Set(dice)];
  newDice.sort();
  for (var i = 0; i < newDice.length; i++) {
    if (
      (newDice[0] + 1 === newDice[1] &&
        newDice[1] + 1 === newDice[2] &&
        newDice[2] + 1 === newDice[3]) ||
      (newDice[1] + 1 === newDice[2] &&
        newDice[2] + 1 === newDice[3] &&
        newDice[3] + 1 === newDice[4])
    ) {
      total = 30;
    }
  }
  return total;
};

export const lgStraight = (dice) => {
  let total = 0;
  dice.sort();
  for (var i = 0; i < dice.length; i++) {
    if (
      dice[0] + 1 === dice[1] &&
      dice[1] + 1 === dice[2] &&
      dice[2] + 1 === dice[3] &&
      dice[3] + 1 === dice[4]
    ) {
      total = 40;
    }
  }
  return total;
};

export const yahtzee = (dice) => {
  let total = 0;
  dice.sort();
  for (var i = 0; i < dice.length; i++) {
    if (dice[0] === dice[4]) {
      total = 50;
    }
  }
  return total;
};

export const chance = (dice) => {
  let total = 0;
  for (var i = 0; i < dice.length; i++) {
    total += dice[i];
  }
  return total;
};
