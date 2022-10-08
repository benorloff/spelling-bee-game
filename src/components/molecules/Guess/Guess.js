import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import useKeyPress from '../../../hooks/useKeyPress';

export default function Guess() {

  const guess = useSelector(state => state.guess);

  return (
    <Grid item xs>
        <p>Guess</p>
        {guess.map((letter,i) => {
          return (
            <span key={i}>{letter}</span>
          )
        })}
    </Grid>
  );
}
