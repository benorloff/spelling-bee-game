export const SET_LETTERS = 'SET_LETTERS';
export const SET_VALID_WORDS = 'SET_VALID_WORDS';
export const SHUFFLE_LETTERS = 'SHUFFLE_LETTERS';
export const ADD_LETTER = 'ADD_LETTER';
export const DELETE_LETTER = 'DELETE_LETTER';
export const SUBMIT_GUESS = 'SUBMIT_GUESS';

export const setLetters = letters => ({
    type: SET_LETTERS,
    letters,
});

export const setValidWords = words => ({
    type: SET_VALID_WORDS,
    words,
})

export const shuffleLetters = letters => ({
    type: SHUFFLE_LETTERS,
    letters,
});

export const addLetter = letter => ({
    type: ADD_LETTER,
    letter,
});

export const deleteLetter = () => ({
    type: DELETE_LETTER,
});

export const submitGuess = guess => ({
    type: SUBMIT_GUESS,
    guess
});
