export default function letterCombos() {
    let letterCombos = [];

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const addPrimaries = () => {
        alphabet.forEach(char => {
            let obj = { [char]: 'isPrimary' };
            letterCombos.push(obj);
        })
    };

    addPrimaries();

    let secondaries = [];

    const makeSecondaries = (primary, alphabet, length, current) => {
        if ( current.length === length ) {
            secondaries.push(current);
        }
        let array = current;
        for ( let i = 0; i < alphabet.length; i++ ) {
            if ( alphabet[i] !== primary && !array.includes(alphabet[i]) ) {
                array.push(alphabet[i]);
                makeSecondaries(primary, 6, array);
            }
        }
    }

    makeSecondaries('a', 6, []);

    console.log(letterCombos, '<-- letterCombos');
    console.log(secondaries, '<-- secondaries')

    // const makeCombos = (alphabet, length, obj) => {
    //     if ( Object.keys(obj).length === 7 ) {
    //         letterCombos.push(obj);
    //     }
        
    // }
};