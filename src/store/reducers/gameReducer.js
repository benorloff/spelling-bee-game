import update from 'immutability-helper';

import { 
    SET_LETTERS,
    SET_VALID_WORDS,
    SHUFFLE_LETTERS, 
    ADD_LETTER, 
    DELETE_LETTER, 
    SUBMIT_GUESS,
    CLEAR_GUESS,
    UPDATE_SCORE,
    UPDATE_RANK,
    DISPLAY_SNACKBAR,
    CLEAR_SNACKBAR,
} from "../actions/gameActions";

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
    snackbar: {
        open: false,
        message: '',
        severity: '',
    },
};

export const gameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LETTERS:
            return update(state, {
                letters: { $set: action.letters },
            });
        case SET_VALID_WORDS:
            return update(state, { $merge: action.payload })
        case SHUFFLE_LETTERS:
            return update(state, {
                letters: { $set: action.letters },
            });
        case ADD_LETTER:
            return update(state, {
                guess: { $push: action.letter }
            });
        case DELETE_LETTER:
            return update(state, {
                guess: { $splice: [[action.index,1]] }
            });
        case SUBMIT_GUESS:
            return {
                ...state,
                words: {
                    ...state.words,
                    list: {
                        ...state.words.list,
                        [action.guess]:  {
                            ...state.words.list[action.guess],
                            isFound: true,
                        }
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
        case UPDATE_RANK:
            return update(state, {
                rank: { $set: action.rank }
            });
        case DISPLAY_SNACKBAR:
            return update(state, {
                snackbar: snackbar =>
                    update(snackbar || {}, {
                        open: { $set: true },
                        message: { $set: action.message.content },
                        severity: { $set: action.message.severity },
                    })
            });
        case CLEAR_SNACKBAR:
            return update(state, {
                snackbar: snackbar =>
                    update(snackbar || {}, {
                        open: { $set: false },
                        message: { $set: '' },
                        severity: { $set: '' },
                    })
            });
        default:
            return state;
    }
}