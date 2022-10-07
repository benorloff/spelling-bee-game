import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRank } from '../../../store/actions/gameActions';

import { Grid } from '@mui/material';

import ProgressDot from '../../atoms/ProgressDot';
import ProgressMarker from '../../atoms/ProgressMarker/ProgressMarker';

export default function Progress() {

  const rank = useSelector(state => state.rank);
  const score = useSelector(state => state.score);
  const maxScore = useSelector(state => state.words.maxScore);

  const dispatch = useDispatch();

  const [ranks, setRanks] = useState({});

  useEffect(() => {
    const ranks = {
      'Beginner': 0,
      'Good Start': Math.floor(maxScore * 0.2),
      'Moving Up': Math.floor(maxScore * 0.3),
      'Good': Math.floor(maxScore * 0.4),
      'Solid': Math.floor(maxScore * 0.5),
      'Nice': Math.floor(maxScore * 0.6),
      'Great': Math.floor(maxScore * 0.7),
      'Amazing': Math.floor(maxScore * 0.8),
      'Genius': Math.floor(maxScore * 0.9),
    }
    setRanks(ranks);
  },[maxScore]);

  useEffect(() => {
    let rank = 'Beginner';
    for ( let [key,value] of Object.entries(ranks) ) {
      if ( score !== 0 && score >= value ) {
        rank = key;
      } else {
        break;
      }
    }
    dispatch(updateRank(rank))
  });

  let dots = [1,2,3,4,5,6,7,8,9];

  return (
    <Grid container columns={10} className="progress">
      {/* Progress Rank */}
      <Grid item xs={2} className="progress-rank" >
        <h4>{rank}</h4>
      </Grid>
      {/* Progress Bar */}
      <Grid container item xs className="progress-bar" >
        <Grid container item xs className="progress-line" >
          <Grid container item xs className="progress-dots" >
            {dots.map(i => {
              return(
                <ProgressDot key={i}></ProgressDot>
              )
            })}
          </Grid>
        </Grid>
        <ProgressMarker />
      </Grid>
    </Grid>
  );

}
