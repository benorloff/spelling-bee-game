import { 
    SET_LETTERS,
    SET_VALID_WORDS,
    SHUFFLE_LETTERS, 
    ADD_LETTER, 
    DELETE_LETTER, 
    SUBMIT_GUESS 
} from "../actions/gameActions";

const defaultState = {
    letters: {},
    guess: [],
    score: 0,
    rank: 'Beginner',
    words: {},
};

export const gameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LETTERS:
            return {
                ...state,
                letters: action.letters,
            };
        case SET_VALID_WORDS:
            return {
                ...state,
                words: action.words,
            }
        case SHUFFLE_LETTERS:
            return {
                ...state
            };
        case ADD_LETTER:
            return {
                ...state,
                guess: [
                    ...state.guess,
                    action.letter,
                ]
            };
        case DELETE_LETTER:
            return {
                ...state,
                guess: state.guess.slice(0,-1),
            };
        case SUBMIT_GUESS:
            return {
                ...state
            };
        default:
            return state;
    }
}