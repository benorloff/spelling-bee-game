import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLetter, shuffleLetters, submitGuess } from '../../../store/actions/gameActions';

import useKeyPress from '../../../hooks/useKeyPress';

import { Stack, Button, IconButton } from '@mui/material';
import { Autorenew } from '@mui/icons-material';

export default function Buttons() {

  const dispatch = useDispatch();

  const guess = useSelector(state => state.guess);

  const [disableDelete, setDisableDelete] = useState(true);

  useEffect(() => {
    guess.length === 0 ? setDisableDelete(true) : setDisableDelete(false);
  },[guess])

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

  useKeyPress('Delete', handleDelete);

  return (
    <div style={{border: '1px solid yellow', padding: 20}}>
        <p>Buttons</p>
        <Stack direction="row" spacing={2} justifyContent="center">
            <Button 
              variant="outlined"
              onClick={handleDelete}
              disabled={disableDelete}
            >
              Delete
            </Button>
            <IconButton 
              aria-label="shuffle letters" 
              variant="outlined"
              onClick={handleShuffle}
            >
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