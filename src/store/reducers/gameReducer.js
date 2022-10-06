import { 
    SET_LETTERS,
    SET_VALID_WORDS,
    SHUFFLE_LETTERS, 
    ADD_LETTER, 
    DELETE_LETTER, 
    SUBMIT_GUESS,
    CLEAR_GUESS,
    UPDATE_SCORE,
} from "../actions/gameActions";

const ranks = [
    'Beginner',
    'Good Start',
    'Moving Up',
    'Good',
    'Solid',
    'Nice',
    'Great',
    'Amazing',
    'Genius',
];

const defaultState = {
    letters: {},
    guess: [],
    score: 0,
    rank: 'Beginner',
    words: {
        list: {},
        maxScore: 0,
        pangrams: 0,
    },
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
                ...action.payload
            }
        case SHUFFLE_LETTERS:
            return {
                ...state,
                letters: action.letters,
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
                ...state,
                words: {
                    ...state.words,
                    [action.guess]:  {
                        ...state.words[action.guess],
                        isFound: true,
                    }
                }
            };
        case CLEAR_GUESS:
            return {
                ...state,
                guess: [],
            };
        case UPDATE_SCORE:
            return {
                ...state,
                score: state.score + action.points,
            };
        default:
            return state;
    }
}