import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import generateLetters from '../../../utils/generateLetters';
import getPrimaryLetter from '../../../utils/getPrimaryLetter';
import { setLetters, setValidWords } from '../../../store/actions/gameActions';

import { Container, Grid } from '@mui/material';

import Play from '../../organisms/Play';
import Stats from '../../organisms/Stats';

export default function Game() {

  const dispatch = useDispatch();

  const letters = useSelector(state => state.letters);
  const primaryLetter = getPrimaryLetter(letters);

  function generateWords() {

    const lettersArr = Object.keys(letters);

    let words = {};

    fetch('en.json')
        .then((response) => response.json())
        .then((data) => {
          Object.keys(data).forEach(word => {
            const wordArr = word.split('');
            if ( (wordArr.every((letter) => lettersArr.includes(letter))) && (wordArr.includes(primaryLetter)) ) {
                words[word] = '';
            }
          })
        })
        .catch((error) => console.log(error));

    return words;
  }

  useEffect(() => {
    dispatch(setLetters(generateLetters()));
  },[dispatch])

  useEffect(() => {
    dispatch(setValidWords(generateWords()));
  },[letters])

  const state = useSelector(state => state);
  console.log(state, 'this is state from Game component');

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
