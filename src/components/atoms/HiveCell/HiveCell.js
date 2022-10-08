import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLetter } from '../../../store/actions/gameActions';

import useKeyPress from '../../../hooks/useKeyPress';

import { Button } from '@mui/material';

export default function HiveCell({ letter, type }) {

  const dispatch = useDispatch();

  const handleLetterClick = () => {
    dispatch(addLetter([letter]));
  }

  useKeyPress(letter, handleLetterClick);

  return (
    <Button 
      variant="contained"
      onClick={handleLetterClick}
      className="hive-cell"
    >
      {letter}{ type === 'isPrimary' ? '*' : ''}
    </Button>
  );
}