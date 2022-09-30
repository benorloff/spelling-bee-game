import randomizeArray from './randomizeArray';

export default function generateLetters() {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    const numVowels = Math.round(Math.random() + 2);
    const set = new Set();
    const letters = {};
    while ( set.size < numVowels ) {
        set.add(vowels[Math.floor(Math.random() * vowels.length)]);
    }
    while ( set.size < 7 ) {
        set.add(consonants[Math.floor(Math.random() * consonants.length)]);
    }
    const randomLetters = randomizeArray(Array.from(set));
    randomLetters.forEach(letter => {
    switch (true) {
        // If letter is a vowel, it must be secondary
        case (vowels.includes(letter)):
            letters[letter] = 'isSecondary';
            break;
        // If letter is a consonant, assign as primary only if not already assigned
        case (!Object.values(letters).includes('isPrimary')):
            letters[letter] = 'isPrimary';
            break;
        default:
            letters[letter] = 'isSecondary';
    }
    })
    return letters;

}