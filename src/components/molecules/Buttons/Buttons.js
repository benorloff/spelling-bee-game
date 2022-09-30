import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteLetter, shuffleLetters, submitGuess } from '../../../store/actions/gameActions';

import useKeyPress from '../../../hooks/useKeyPress';

import { Stack, Button, IconButton } from '@mui/material';
import { Autorenew } from '@mui/icons-material';

export default function Buttons() {

  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log('handleDelete hit')
    dispatch(deleteLetter());
  };

  const handleShuffle = () => {
    console.log('handleShuffle hit')
  };

  const handleEnter = () => {
    console.log('handleEnter hit')
  };

  useKeyPress('Enter', handleEnter);

  return (
    <div style={{border: '1px solid yellow', padding: 20}}>
        <p>Buttons</p>
        <Stack direction="row" spacing={2} justifyContent="center">
            <Button 
              variant="outlined"
              onClick={handleDelete}
            >
              Delete
            </Button>
            <IconButton aria-label="shuffle letters" variant="outlined">
                <Autorenew />
            </IconButton>
            <Button 
              variant="outlined"
              onClick={handleEnter}
            >
              Enter
            </Button>
        </Stack>
    </div>
  );
}
