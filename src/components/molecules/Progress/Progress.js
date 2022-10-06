import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Progress(maxScore) {

  const rank = useSelector(state => state.rank);
  const score = useSelector(state => state.score);
  const maxScore = useSelector(state => state.words.maxScore);

  return (
    <div style={{border: '1px solid yellow', padding: 20}}>
        <p>Progress</p>
        <p>Score: {score} of {maxScore}</p>
        <p>Rank: {rank}</p>
    </div>
  );

}
