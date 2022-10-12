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

    let words = {
      list: {},
      maxScore: 0,
      pangrams: 0,
    };

    fetch('en.json')
        .then((response) => response.json())
        .then((data) => {
          Object.keys(data).forEach(word => {
            const wordArr = word.split('');
            // Determine if word is valid (comprised only of valid letters and includes primary letter)
            if ( (wordArr.every((letter) => lettersArr.includes(letter))) && (wordArr.includes(primaryLetter)) ) {
              // Determine if pangram (word includes every valid letter)
              if ( lettersArr.every((letter) => wordArr.includes(letter))) {
                words['list'][word] = {
                  isPangram: true,
                  isFound: false,
                }
                words['pangrams'] = words['pangrams'] + 1;
                words['maxScore'] = words['maxScore'] + word.length + 7;
              } else {
                words['list'][word] = {
                  isPangram: false,
                  isFound: false,
                }
                if ( word.length === 4 ) {
                  words['maxScore'] = words['maxScore'] + 1;
                } else {
                  words['maxScore'] = words['maxScore'] + word.length;
                }
              }
            }
          })
        })
        .catch((error) => console.log(error));

    return {words};
    
  };

  useEffect(() => {
    dispatch(setLetters(generateLetters()));
  },[dispatch]);

  useEffect(() => {
    dispatch(setValidWords(generateWords(letters)));
  },[letters]);

  return (
    <Container maxWidth="lg">
      <Grid 
        container 
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={12} textAlign='center' >
          <Stats />
        </Grid>
        <Grid item xs={12} textAlign='center' >
          <Play />
        </Grid>
      </Grid>
    </Container>
  );
}
