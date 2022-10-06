import { useSelector } from "react-redux";
import { setLetters, setValidWords, setMaxScore } from "../actions/gameActions";
import randomizeArray from "../../utils/randomizeArray";

export const startGame = ( letters, words, maxScore ) => dispatch => {
    dispatch(setLetters(letters));
    dispatch(setValidWords(words));
};