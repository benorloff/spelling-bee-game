import { useSelector } from "react-redux";

export default function getMaxScore(words) {
    let maxScore = 0;
    Object.keys(words).forEach(word => {
        let currentWordScore = 0;
        switch (true) {
        case ( word.length > 4 ):
            currentWordScore = currentWordScore + word.length;
            break;
        case ( words[word].isPangram === true ):
            currentWordScore = currentWordScore + 7;
            break;
        default:
            currentWordScore++;
        }
        maxScore = maxScore + currentWordScore;
        console.log(`${word} has a score of ${currentWordScore}. Max is now ${maxScore}.`);
    })
    console.log(maxScore, '<-- maxScore')
    return maxScore;
};