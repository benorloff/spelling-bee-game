import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import ProgressDot from '../../atoms/ProgressDot';

export default function Progress() {

  const rank = useSelector(state => state.rank);
  const score = useSelector(state => state.score);

  let dots = [1,2,3,4,5,6,7,8,9];

  return (
    <div style={{border: '1px solid yellow', padding: 20}}>
        <p>Progress</p>
        <div>
          {/* Progress */}
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
              <Grid item xs className="progress-marker" >
                <span class="progress-value">{score}</span>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <p>Score: {score}</p>
    </div>
  );

}
