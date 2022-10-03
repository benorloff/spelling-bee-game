import randomizeArray from "./randomizeArray";

export default function shuffleLetters(letters) {
    const shuffledLetters = {};
    const array = Object.keys(letters);
    const shuffledArray = randomizeArray(array);
    for ( let letter of shuffledArray ) {
        if ( letters[letter] === 'isPrimary' ) {
            shuffledLetters[letter] = 'isPrimary';
        } else {
            shuffledLetters[letter] = 'isSecondary';
        }
    }
    return shuffledLetters;
}