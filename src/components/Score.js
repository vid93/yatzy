import React from "react";

const Score = ({ name, description, score, calcScore }) => {
  return (
    <button onClick={() => calcScore(name)} disabled={score !== null} className='scoreButton'>
      <p className="btn-left">{name}</p>
      <p className="btn-right">{score !== null ? score : description}</p>
    </button>
  );
};

export default Score;
