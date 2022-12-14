export const SET_LETTERS = 'SET_LETTERS';
export const SET_VALID_WORDS = 'SET_VALID_WORDS';
export const SHUFFLE_LETTERS = 'SHUFFLE_LETTERS';
export const ADD_LETTER = 'ADD_LETTER';
export const DELETE_LETTER = 'DELETE_LETTER';
export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const CLEAR_GUESS = 'CLEAR_GUESS';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const UPDATE_RANK = 'UPDATE_RANK';
export const DISPLAY_SNACKBAR = 'DISPLAY_SNACKBAR';
export const CLEAR_SNACKBAR = 'CLEAR_SNACKBAR';

export const setLetters = letters => ({
    type: SET_LETTERS,
    letters,
});

export const setValidWords = (words) => ({
    type: SET_VALID_WORDS,
    payload: words,
})

export const shuffleLetters = order => ({
    type: SHUFFLE_LETTERS,
    order,
});

export const addLetter = letter => ({
    type: ADD_LETTER,
    letter,
});

export const deleteLetter = index => ({
    type: DELETE_LETTER,
    index,
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

export const updateRank = rank => ({
    type: UPDATE_RANK,
    rank,
});

export const displaySnackbar = message => ({
    type: DISPLAY_SNACKBAR,
    message,
});

export const clearSnackbar = () => ({
    type: CLEAR_SNACKBAR,
});