export default function getPrimaryLetter(obj) {
    const array = Object.entries(obj);
    
    let primaryLetter = '';

    for ( let [key,value] of array ) {
        if ( value === 'isPrimary' ) {
            primaryLetter = key;
            break;
        }
    }

    return primaryLetter;
}