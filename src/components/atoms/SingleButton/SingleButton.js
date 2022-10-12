import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLetter, shuffleLetters, submitGuess, clearGuess, updateScore, displaySnackbar } from '../../../store/actions/gameActions';

import useKeyPress from '../../../hooks/useKeyPress';
import randomizeLetters from '../../../utils/randomizeLetters';
import getPrimaryLetter from '../../../utils/getPrimaryLetter';
import useLetterShuffle from '../../../hooks/useLetterShuffle';

import { Button } from '@mui/material';
import { Autorenew } from '@mui/icons-material';

export default function SingleButton({action}) {

  const dispatch = useDispatch();
  const order = useLetterShuffle();

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
    dispatch(shuffleLetters(order));
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
        successMessage(guess);
        break;
      default:
        dispatch(displaySnackbar({ content: 'Not in word list', severity: 'info'}));
        break;
    }
    dispatch(clearGuess());
  };

  const successMessage = (guess) => {
    switch (true) {
      case ( words[guess.join('')]?.isPangram ):
        dispatch(displaySnackbar({ content: `Pangram! +${points(guess.join(''))} points.`, severity: 'success'}));
        break;
      case ( guess.length > 8 ):
        dispatch(displaySnackbar({ content: `Incredible! +${points(guess.join(''))} points.`, severity: 'success'}));
        break;
      case ( guess.length > 7 ):
        dispatch(displaySnackbar({ content: `Superb! +${points(guess.join(''))} points.`, severity: 'success'}));
        break;
      case ( guess.length > 6 ):
        dispatch(displaySnackbar({ content: `Amazing! +${points(guess.join(''))} points.`, severity: 'success'}));
        break;
      case ( guess.length > 5 ):
        dispatch(displaySnackbar({ content: `Awesome! +${points(guess.join(''))} points.`, severity: 'success'}));
        break;
      // Easter Egg
      case ( guess.join('') === 'robin' ):
        dispatch(displaySnackbar({ content: 'You found a wild Robin! +1,000,000 points.', severity: 'success'}));
        break;
      // End of Easter Egg
      case ( guess.length > 4 ):
        dispatch(displaySnackbar({ content: `Great! +${points(guess.join(''))} points.`, severity: 'success'}));
        break;
      default:
        dispatch(displaySnackbar({ content: `Nice! +${points(guess.join(''))} points.`, severity: 'success'}));
    }
  }

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
      sx={
        action === 'Shuffle'
          ? { width: '50px', padding: '0', minWidth: '50px' }
          : ''
      }
    >
      { action === "Shuffle" ? <Autorenew /> : action }
    </Button>
  );
}