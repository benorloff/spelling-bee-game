import React from 'react';
import { useSelector } from 'react-redux';

import Progress from '../../molecules/Progress';
import Words from '../../molecules/Words';

export default function Stats() {

    const maxScore = useSelector(state => state.words.maxScore);

    return (
        <div style={{border: '1px solid green', padding: 20}}>
            <p>Stats component</p>
            <Progress props={maxScore} />
            <Words />
        </div>
    )
}

