import { 
    SET_LETTERS, 
    SHUFFLE_LETTERS, 
    ADD_LETTER, 
    DELETE_LETTER, 
    SUBMIT_GUESS 
} from "../actions/gameActions";

const defaultState = {
    letters: {},
    guess: '',
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
        case SHUFFLE_LETTERS:
            return {
                ...state
            };
        case ADD_LETTER:
            return {
                ...state
            };
        case DELETE_LETTER:
            return {
                ...state
            };
        case SUBMIT_GUESS:
            return {
                ...state
            };
        default:
            return state;
    }
}