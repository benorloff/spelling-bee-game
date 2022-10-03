import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLetter, shuffleLetters, submitGuess } from '../../../store/actions/gameActions';

import useKeyPress from '../../../hooks/useKeyPress';

import { Button } from '@mui/material';
import { Autorenew } from '@mui/icons-material';

export default function SingleButton({action}) {

  const dispatch = useDispatch();
  const guess = useSelector(state => state.guess);

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
    dispatch(deleteLetter());
    console.log('handle delete HIT')
  };

  const handleShuffle = () => {
    dispatch(shuffleLetters());
    console.log('handle shuffle HIT')
  };

  const handleEnter = () => {
    dispatch(submitGuess(guess));
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