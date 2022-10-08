import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import useKeyPress from '../../../hooks/useKeyPress';

export default function Guess() {

  const guess = useSelector(state => state.guess);

  return (
    <Grid item xs className='guess' >
        <span className='guess-content'>
          {guess.map((letter,i) => {
            return (
              <span>{letter}</span>
            )
          })}
        </span>
    </Grid>
  );
}
