import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLetter, shuffleLetters, submitGuess, clearGuess, updateScore } from '../../../store/actions/gameActions';

import useKeyPress from '../../../hooks/useKeyPress';
import randomizeLetters from '../../../utils/randomizeLetters';

import { Button } from '@mui/material';
import { Autorenew } from '@mui/icons-material';

export default function SingleButton({action}) {

  const dispatch = useDispatch();
  const guess = useSelector(state => state.guess);
  const letters = useSelector(state => state.letters);
  const words = useSelector(state => state.words);

  const points = (str) => {
    switch (true) {
      case ( words['list'][str].isPangram ): 
        return str.length + 7;
      case ( str.length > 4 ):
        return str.length;
      default: 
        return 1;
    }
  }

  const handleDelete = () => {
    dispatch(deleteLetter(guess.length - 1));
  };

  const handleShuffle = () => {
    dispatch(shuffleLetters(randomizeLetters(letters)));
  };

  const handleEnter = () => {
    if ( words['list'][guess.join('')] ) {
      dispatch(submitGuess(guess.join('')))
      dispatch(updateScore(points(guess.join(''))))
      dispatch(clearGuess())
    } else {
      // Display message to user that
      // guess is not in word list
    }
  };

  useKeyPress('Enter', handleEnter);
  useKeyPress('Tab', handleShuffle);
  useKeyPress('Backspace', handleDelete);

  return (
    <Button 
      variant="outlined"
      onClick={ 
        action === 'Enter' 
          ? handleEnter
          : action === 'Delete'
            ? handleDelete
            : handleShuffle
      }
    >
      { action === "Shuffle" ? <Autorenew /> : action }
    </Button>
  );
}