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

  const words = useSelector(state => state.words);
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
            // Determine if word is valid (comprised only of valid letters and includes primary letter)
            if ( (wordArr.every((letter) => lettersArr.includes(letter))) && (wordArr.includes(primaryLetter)) ) {
              // Determine if pangram (word includes every valid letter)
              if ( lettersArr.every((letter) => wordArr.includes(letter))) {
                words[word] = {
                  isPangram: true,
                  isFound: false,
                }
              } else {
                words[word] = {
                  isPangram: false,
                  isFound: false,
                }
              }
            }
          })
        })
        .catch((error) => console.log(error));

    return words;
    
  };

  function getMaxScore() {
    let maxScore = 0;
    Object.keys(words).forEach(word => {
        let currentWordScore = 0;
        switch (true) {
        case ( word.length > 4 ):
            currentWordScore = currentWordScore + word.length;
            break;
        case ( words[word].isPangram === true ):
            currentWordScore = currentWordScore + 7;
            break;
        default:
            currentWordScore++;
        }
        maxScore = maxScore + currentWordScore;
        console.log(`${word} has a score of ${currentWordScore}. Max is now ${maxScore}.`);
    })
    return maxScore;
  }

  useEffect(() => {
    dispatch(setLetters(generateLetters()));
    dispatch(setValidWords(generateWords()));
  },[dispatch])

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
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1}} textAlign='center' >
          <Play />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2}} textAlign='center' >
          <Stats />
        </Grid>
      </Grid>
    </Container>
  );
}
