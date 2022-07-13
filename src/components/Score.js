import React from "react";

const Score = ({ name, description, score, calcScore }) => {
  return (
    <button onClick={() => calcScore(name)} disabled={score !== null}>
      <p>{name}</p>
      <p>{score !== null ? score : description}</p>
    </button>
  );
};

export default Score;
