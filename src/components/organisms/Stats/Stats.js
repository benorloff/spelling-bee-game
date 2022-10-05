import React from 'react';

import Progress from '../../molecules/Progress';
import Words from '../../molecules/Words';

export default function Stats() {

    return (
        <div style={{border: '1px solid green', padding: 20}}>
            <p>Stats component</p>
            <Progress />
            <Words />
        </div>
    )
}

