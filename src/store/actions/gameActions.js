export const SET_LETTERS = 'SET_LETTERS';
export const SET_VALID_WORDS = 'SET_VALID_WORDS';
export const SHUFFLE_LETTERS = 'SHUFFLE_LETTERS';
export const ADD_LETTER = 'ADD_LETTER';
export const DELETE_LETTER = 'DELETE_LETTER';
export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const CLEAR_GUESS = 'CLEAR_GUESS';
export const SET_MAX_SCORE = 'SET_MAX_SCORE';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export const setLetters = letters => ({
    type: SET_LETTERS,
    letters,
});

export const setValidWords = (words) => ({
    type: SET_VALID_WORDS,
    payload: words,
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

export const clearGuess = () => ({
    type: CLEAR_GUESS,
});

export const updateScore = points => ({
    type: UPDATE_SCORE,
    points,
});
