import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import ProgressDot from '../../atoms/ProgressDot';

export default function Progress() {

  const rank = useSelector(state => state.rank);
  const score = useSelector(state => state.score);

  const progressCircles = [0, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];

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
            <Grid container item xs spacing={0} >
              <Grid container item xs className="progress-line">
                <Grid container item xs className="progress-dots">

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <p>Score: {score}</p>
    </div>
  );

}
