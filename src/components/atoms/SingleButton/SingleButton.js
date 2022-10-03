import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLetter, shuffleLetters, submitGuess } from '../../../store/actions/gameActions';

import useKeyPress from '../../../hooks/useKeyPress';

import { Button } from '@mui/material';
import { Autorenew } from '@mui/icons-material';

export default function SingleButton({action}) {

  const dispatch = useDispatch();
  const guess = useSelector(state => state.guess);
  // Only shuffle needs to be renamed since Delete and Enter are valid key names
  const keyName = action === "Shuffle" ? 'Space' : action;
  const handler = `handle${action}`;

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

  useKeyPress(keyName, handler);

  return (
    <Button 
      variant="outlined"
      onClick={action === "Delete" ? handleDelete : action === "Shuffle" ? handleShuffle : handleEnter }
    >
      { action === "Shuffle" ? <Autorenew /> : action }
    </Button>
  );
}