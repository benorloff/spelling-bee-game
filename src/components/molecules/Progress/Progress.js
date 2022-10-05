import React from 'react';
import { useSelector } from 'react-redux';

export default function Progress() {

  const rank = useSelector(state => state.rank);
  const score = useSelector(state => state.score);

  return (
    <div style={{border: '1px solid yellow', padding: 20}}>
        <p>Progress</p>
        <p>Score: {score.current} of {score.max}</p>
        <p>Rank: {rank}</p>
    </div>
  );
}
