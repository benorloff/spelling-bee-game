import React from 'react';
import { useSelector } from 'react-redux';

import Progress from '../../molecules/Progress';
import WordList from '../../molecules/WordList';

export default function Stats() {

    const maxScore = useSelector(state => state.words.maxScore);

    return (
        <div style={{border: '1px solid green', padding: 20}}>
            <p>Stats component</p>
            <Progress props={maxScore} />
            <WordList />
        </div>
    )
}

