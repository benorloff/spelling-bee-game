import React from 'react';
import { useSelector } from 'react-redux';

import Progress from '../../molecules/Progress';
import WordList from '../../molecules/WordList';

export default function Stats() {

    const maxScore = useSelector(state => state.words.maxScore);

    return (
        <>
            <Progress props={maxScore} />
            <WordList />
        </>
    )
}

