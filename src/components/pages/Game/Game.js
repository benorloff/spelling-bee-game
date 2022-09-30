import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import generateLetters from '../../../utils/generateLetters';
import { setLetters } from '../../../store/actions/gameActions';

import { Container, Grid } from '@mui/material';

import Play from '../../organisms/Play';
import Stats from '../../organisms/Stats';

export default function Game() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLetters(generateLetters()));
  },[dispatch])

  return (
    <Container maxWidth="md">
      <h1>This is the Game component.</h1>
      <Grid 
        container 
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={6} textAlign='center' >
          <Play />
        </Grid>
        <Grid item xs={6} textAlign='center' >
          <Stats />
        </Grid>
      </Grid>
    </Container>
  );
}
