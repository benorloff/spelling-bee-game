import { useSelector } from "react-redux";

export default function useWordGenerator() {

    const letters = useSelector(state => state.letters);
    const lettersArr = Object.keys(letters);

    let words = {};

    fetch('en.json')
        .then((response) => response.json())
        .then((data) => {
            Object.keys(data).forEach(word => {
                word.split().every(letter => lettersArr.includes(letter))
                    ? words[word] = ''
                    : ''
            })
        })
        .catch((error) => console.log(error));

    return words;
}