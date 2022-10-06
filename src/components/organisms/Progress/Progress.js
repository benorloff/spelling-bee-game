import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import ProgressCircle from '../../atoms/ProgressDot';

export default function Progress() {

  const rank = useSelector(state => state.rank);
  const score = useSelector(state => state.score);

  const progressCircles = [0, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];

  return (
    <div style={{border: '1px solid yellow', padding: 20}}>
        <p>Progress</p>
        <div>
          <Grid container direction="row" columns={10} justifyContent="center" >
            <Grid item xs={2}>
              {rank}
            </Grid>
            <Grid container item xs spacing={0} justifyContent="space-between" alignItems="center">
              <Grid container direction="row" item xs justifyContent="space-between" alignItems="center" style={{ position: 'relative' }} >
                <ProgressCircle location={'left'}></ProgressCircle>
                <div style={{ height: 1, width: '100%', backgroundColor: 'gray', position: 'absolute'}}></div>
                <ProgressCircle location={'right'}></ProgressCircle>
              </Grid>
              <Grid container direction="row" item xs justifyContent="space-between" alignItems="center" style={{ position: 'relative' }} >
                <ProgressCircle location={'left'}></ProgressCircle>
                <div style={{ height: 1, width: '100%', backgroundColor: 'gray', position: 'absolute'}}></div>
                <ProgressCircle location={'right'}></ProgressCircle>
              </Grid>
              <Grid container direction="row" item xs justifyContent="space-between" alignItems="center" style={{ position: 'relative' }} >
                <ProgressCircle location={'left'}></ProgressCircle>
                <div style={{ height: 1, width: '100%', backgroundColor: 'gray', position: 'absolute'}}></div>
                <ProgressCircle location={'right'}></ProgressCircle>
              </Grid>
              <Grid container direction="row" item xs justifyContent="space-between" alignItems="center" style={{ position: 'relative' }} >
                <ProgressCircle location={'left'}></ProgressCircle>
                <div style={{ height: 1, width: '100%', backgroundColor: 'gray', position: 'absolute'}}></div>
                <ProgressCircle location={'right'}></ProgressCircle>
              </Grid>
              <Grid container direction="row" item xs justifyContent="space-between" alignItems="center" style={{ position: 'relative' }} >
                <ProgressCircle location={'left'}></ProgressCircle>
                <div style={{ height: 1, width: '100%', backgroundColor: 'gray', position: 'absolute'}}></div>
                <ProgressCircle location={'right'}></ProgressCircle>
              </Grid>
              <Grid container direction="row" item xs justifyContent="space-between" alignItems="center" style={{ position: 'relative' }} >
                <ProgressCircle location={'left'}></ProgressCircle>
                <div style={{ height: 1, width: '100%', backgroundColor: 'gray', position: 'absolute'}}></div>
                <ProgressCircle location={'right'}></ProgressCircle>
              </Grid>
              <Grid container direction="row" item xs justifyContent="space-between" alignItems="center" style={{ position: 'relative' }} >
                <ProgressCircle location={'left'}></ProgressCircle>
                <div style={{ height: 1, width: '100%', backgroundColor: 'gray', position: 'absolute'}}></div>
                <ProgressCircle location={'right'}></ProgressCircle>
              </Grid>
              <Grid container direction="row" item xs justifyContent="space-between" alignItems="center" style={{ position: 'relative' }} >
                <ProgressCircle location={'left'}></ProgressCircle>
                <div style={{ height: 1, width: '100%', backgroundColor: 'gray', position: 'absolute'}}></div>
                <ProgressCircle location={'right'}></ProgressCircle>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <p>Score: {score}</p>
    </div>
  );

}
