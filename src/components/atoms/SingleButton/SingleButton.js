import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLetter, shuffleLetters, submitGuess, clearGuess, updateScore, displaySnackbar, clearSnackbar } from '../../../store/actions/gameActions';

import useKeyPress from '../../../hooks/useKeyPress';
import randomizeLetters from '../../../utils/randomizeLetters';
import getPrimaryLetter from '../../../utils/getPrimaryLetter';

import { Button } from '@mui/material';
import { Autorenew } from '@mui/icons-material';

export default function SingleButton({action}) {

  const dispatch = useDispatch();

  const guess = useSelector(state => state.guess);
  const letters = useSelector(state => state.letters);
  const words = useSelector(state => state.words.list);
  const primaryLetter = getPrimaryLetter(letters);

  const points = (str) => {
    switch (true) {
      case ( words[str].isPangram ): 
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
    switch (true) {
      case ( guess.length < 4 ):
        dispatch(displaySnackbar({ content: 'Too short', severity: 'info'}));
        break;
      case ( guess.includes(primaryLetter) === false ):
        dispatch(displaySnackbar({ content: 'Missing center letter', severity: 'info'}));
        break;
      case ( words[guess.join('')]?.isFound ):
        dispatch(displaySnackbar({ content: 'Already found', severity: 'info'}));
        break;
      case ( Object.hasOwn(words, guess.join('')) ):
        dispatch(submitGuess(guess.join('')));
        dispatch(updateScore(points(guess.join(''))));
        dispatch(displaySnackbar({ content: `Nice! +${points(guess.join(''))} points.`, severity: 'success'}));
        break;
      default:
        dispatch(displaySnackbar({ content: 'Not in word list', severity: 'info'}));
        break;
    }
    dispatch(clearGuess());
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