import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';

export default function Guess() {

  const guess = useSelector(state => state.guess);

  return (
    <Grid item xs className='guess' >
        <span className='guess-content'>
          {guess.map((letter,i) => {
            return (
              <span key={i}>{letter}</span>
            )
          })}
        </span>
    </Grid>
  );
}
