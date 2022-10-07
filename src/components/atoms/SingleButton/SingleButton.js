import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLetter, shuffleLetters, submitGuess, clearGuess, updateScore } from '../../../store/actions/gameActions';

// import useKeyPress from '../../../hooks/useKeyPress';
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

  // let key = action === 'Shuffle' ? 'Space' : action;
  // const handler = action => {
  //   switch (action) {
  //     case ('Delete'): 
  //       return handleDelete;
  //     case ('Shuffle'): 
  //       return handleShuffle;
  //     case ('Enter'):
  //       return handleEnter;
  //   }
  // };

  const handleDelete = () => {
    dispatch(deleteLetter(guess.length - 1));
    console.log('handle delete HIT')
  };

  const handleShuffle = () => {
    dispatch(shuffleLetters(randomizeLetters(letters)));
    console.log('handle shuffle HIT')
  };

  const handleEnter = () => {
    if ( words['list'][guess.join('')] ) {
      dispatch(submitGuess(guess.join('')))
      dispatch(updateScore(points(guess.join(''))))
      dispatch(clearGuess())
    } else {
      console.log('Not in word list');
    }
    console.log('handle enter HIT')
  };

  // ENABLE KEY PRESSES FOR BUTTONS
  // useKeyPress(key, handler);

  return (
    <Button 
      variant="outlined"
      onClick={action === "Delete" ? handleDelete : action === "Shuffle" ? handleShuffle : handleEnter }
    >
      { action === "Shuffle" ? <Autorenew /> : action }
    </Button>
  );
}